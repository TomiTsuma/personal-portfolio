import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppShell from './AppShell';

// Used only by scripts/prerender.js at build time (Node/Vite SSR module
// graph). Never shipped to the browser bundle.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
