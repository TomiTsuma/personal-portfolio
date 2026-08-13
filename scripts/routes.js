// Single source of truth for prerendering + sitemap generation.
// Keep in sync with the <Route> list in src/AppShell.jsx.
export const siteUrl = 'https://tomitsuma.github.io/personal-portfolio';

export const routes = [
  {
    path: '/',
    title: 'Thomas Tsuma — ML Engineer, Generative & Physics-Informed ML',
    description:
      'ML engineer working on generative and graph neural architectures for molecular design, and physics-informed learning for scientific and engineering systems — de novo drug discovery, plasma control, and process simulation.',
  },
  {
    path: '/experience',
    title: 'Experience — Thomas Tsuma',
    description: 'Professional experience and work history of Thomas Tsuma, ML engineer.',
  },
  {
    path: '/entrepreneurship',
    title: 'Entrepreneurship — Thomas Tsuma',
    description: 'Ventures and entrepreneurial work by Thomas Tsuma, including Core & Outline.',
  },
  {
    path: '/research',
    title: 'Research — Thomas Tsuma',
    description:
      'Research interests and independent projects spanning LLMs, graph neural networks, data warehousing, and physics-informed ML for the energy sector.',
  },
  {
    path: '/publications',
    title: 'Publications — Thomas Tsuma',
    description:
      'Academic publications by Thomas Tsuma, including a systematic scoping review of diffusion-based de novo molecular generation prepared for Briefings in Bioinformatics (Oxford University Press).',
  },
  {
    path: '/research/gnn',
    title: 'Graph Neural Networks for Evidence Extraction — Thomas Tsuma',
    description:
      'A unified, graph-based framework for evidence extraction from unstructured text and structured tabular data using GraphVAEs and conditional GraphGANs.',
  },
  {
    path: '/research/gnn/extractive-capabilities',
    title: 'Exploring the Extractive Capabilities of Graph Neural Networks — Thomas Tsuma',
    description: 'Research write-up on the extractive capabilities of graph neural networks.',
  },
  {
    path: '/research/gnn/definition-of-terms',
    title: 'Graph Neural Networks — Definition of Terms — Thomas Tsuma',
    description: 'A reference glossary of graph neural network terminology.',
  },
  {
    path: '/research/gnn/gnnformer-architecture',
    title: 'GNNFormer Architecture for Graph Task Completion — Thomas Tsuma',
    description: 'GNNFormer: a graph transformer architecture for graph task completion.',
  },
  {
    path: '/research/data-warehousing',
    title: 'Data Warehousing Research — Thomas Tsuma',
    description:
      'Building production-grade data warehousing systems from first principles, incorporating modern techniques and rigorous engineering practices.',
  },
  {
    path: '/research/data-warehousing/first-principles',
    title: 'Building a Production-Grade Data Warehouse from First Principles — Thomas Tsuma',
    description:
      "Documenting the journey of building a data warehouse that rivals Snowflake's capabilities, incorporating graph neural network principles and rigorous engineering practices.",
  },
  {
    path: '/homelab',
    title: 'Home Lab — Thomas Tsuma',
    description: "Thomas Tsuma's home lab infrastructure for ML training and experimentation.",
  },
  {
    path: '/research/energy-crisis',
    title: 'Solving the Energy Crisis — Thomas Tsuma',
    description:
      'Implementing physics and neural networks to enhance geothermal, nuclear, and hydroelectric power.',
  },
  {
    path: '/research/energy-crisis/columnar-distillation',
    title: 'Physics-Informed Neural Network for Columnar Distillation — Thomas Tsuma',
    description:
      'A physics-informed neural network for simulating binary columnar distillation, with VLE, MESH, and energy-balance residuals embedded in the loss, trained via a physics-to-data curriculum.',
  },
  {
    path: '/research/energy-crisis/plasma-stabilization',
    title: 'Stabilizing Plasma in Tokamaks — Thomas Tsuma',
    description:
      'A causal TCN and Transformer controller reproducing an arXiv imitation-learning result for Vlasov-Poisson plasma stabilization from four sparse density sensors.',
  },
];
