// Post-build static prerendering.
//
// The live app is a HashRouter SPA (kept as-is — see handover brief for why
// a full BrowserRouter/SSG migration was deferred). Hash fragments are never
// sent to the server, so no amount of prerendering can make individual
// hash routes independently crawlable *at the hash URL itself* — that's a
// hard limitation of URL fragments, not a bug here.
//
// What this script does instead: for every route, it renders the real React
// output (via react-dom/server, using the exact same components as the live
// site) and writes it to a REAL static path — e.g.
// dist/research/energy-crisis/plasma-stabilization/index.html — which IS a
// distinct, independently fetchable URL that GitHub Pages serves directly.
// Crawlers and link-preview bots (Google, LinkedIn, Slack, Twitter/X) that
// request that path with no JS now get full real content and correct
// per-page <title>/description/OG tags, instead of an empty shell.
//
// For a human who lands on one of these static pages with JS enabled, an
// inline script (added to every non-root page) sets the URL hash to match
// before the app mounts, so HashRouter picks up the correct route and the
// page becomes the normal interactive SPA. Crawlers that don't execute JS
// never see or follow that redirect — they just index the static content.
//
// Root (`/`) is written in place to dist/index.html, matching how the site
// already works today (no redirect needed there).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { routes, siteUrl } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
// Overridable for local QA against an out-of-tree build dir; defaults to
// the standard dist/ used by `npm run build` / `npm run deploy`.
const distDir = process.env.PRERENDER_OUT_DIR
  ? path.resolve(process.env.PRERENDER_OUT_DIR)
  : path.resolve(root, 'dist');

async function main() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found — run `vite build` before prerendering.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'warn',
    // Some CI/sandboxed environments mount the project read-mostly (writes
    // ok, deletes/renames blocked) which breaks Vite's default dep-cache
    // dir under node_modules/.vite. Redirect it if provided.
    cacheDir: process.env.PRERENDER_CACHE_DIR || undefined,
  });

  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  for (const route of routes) {
    const appHtml = render(route.path);
    const page = buildPage(template, route, appHtml);
    const outPath = outputPathFor(route.path);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    console.log('prerendered', route.path, '->', path.relative(distDir, outPath));
  }

  await vite.close();

  writeSitemap();
  writeRobots();
}

function outputPathFor(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

function canonicalUrl(routePath) {
  if (routePath === '/') return `${siteUrl}/`;
  return `${siteUrl}${routePath}/`;
}

function buildPage(template, route, appHtml) {
  const ogImage = `${siteUrl}/profile.jpeg`;
  const canonical = canonicalUrl(route.path);
  const escapedDescription = escapeHtml(route.description);
  const escapedTitle = escapeHtml(route.title);

  const metaTags = `
  <meta name="description" content="${escapedDescription}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escapedTitle}" />
  <meta property="og:description" content="${escapedDescription}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapedTitle}" />
  <meta name="twitter:description" content="${escapedDescription}" />
  <meta name="twitter:image" content="${ogImage}" />
</head>`;

  let page = template
    // Strip the fallback <meta>/<link> tags baked into the source
    // index.html (description, OG, Twitter, canonical) so we don't end up
    // with duplicates alongside the per-route ones injected below.
    .replace(/\s*<meta\s+(?:name="description"|property="og:[^"]*"|name="twitter:[^"]*")[^>]*\/?>\n?/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*\/?>\n?/gi, '')
    .replace(/<title>.*?<\/title>/s, `<title>${escapedTitle}</title>`)
    .replace('</head>', metaTags)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (route.path !== '/') {
    const redirectScript = `<script>(function(){if(!location.hash){location.replace(location.pathname + location.search + '#${route.path}');}})();</script>\n  `;
    page = page.replace('<div id="root">', `${redirectScript}<div id="root">`);
  }

  return page;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${canonicalUrl(r.path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
  console.log('wrote sitemap.xml');
}

function writeRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), txt);
  console.log('wrote robots.txt');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
