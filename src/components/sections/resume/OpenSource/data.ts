type Lib = {
  title: string
  tagline: string
  description?: string
  features?: string[]
}

type Group = {
  title: string
  tagline: string
  docs: string
  github: string
  totalPackages: number
  moreDescription?: string
  packages: Lib[]
}

export const pyreon: Group = {
  title: 'Pyreon',
  tagline:
    'A 6 KB signal-based UI framework with fine-grained reactivity, no virtual DOM, full-stack runtime (SSR streaming, SSG, islands), 55+ packages, and JS Framework Benchmark performance 3.5× ahead of React.',
  docs: 'https://pyreon.github.io/pyreon/',
  github: 'https://github.com/pyreon/pyreon',
  totalPackages: 53,
  moreDescription:
    '— reactivity, SSR, forms, query, table, charts, code editor, animations, design system, MCP, four compat layers (React/Preact/Vue/Solid)…',
  packages: [
    {
      title: '@pyreon/reactivity',
      tagline: 'Fine-grained reactive primitives',
      features: [
        'signal, computed, effect, batch, createStore, untrack — same shape as Solid/Svelte 5/Vue 3',
        'Pointer-swap batching, lazy effect scopes, zero-allocation hot paths',
        'Foundation of the entire 53-package ecosystem; every other lib subscribes to its contract',
      ],
    },
    {
      title: '@pyreon/compiler',
      tagline: 'JSX-to-DOM compiler',
      features: [
        'Rust binary via napi-rs, 3.7–8.9× faster than the JS pass it falls back to',
        'Signal auto-call, prop-derived const inlining, pure-call detection (40+ functions)',
        '527 tests including 180 cross-backend equivalence tests (JS/Rust output parity)',
      ],
    },
    {
      title: '@pyreon/router',
      tagline: 'Production-grade SPA + SSR router',
      features: [
        'View Transitions API integration, named typed routes, middleware chain, route guards',
        'Loader cache with TTL + key-based dedup + SWR; redirect() and notFound() helpers',
        'Prefetch on hover/focus/viewport, hash scrolling, error boundaries per route',
      ],
    },
    {
      title: '@pyreon/zero',
      tagline: 'Full-stack meta-framework',
      features: [
        'File-system routing, SSR/SSG/ISR/SPA, API routes, server actions',
        'Deployment adapters for Vercel, Cloudflare, Netlify, Bun, Node',
        'AI-native: aiPlugin() generates llms.txt, JSON-LD, AI plugin manifest at build time',
      ],
    },
    {
      title: '@pyreon/document',
      tagline: 'Same tree, 14+ output formats',
      features: [
        'PDF, DOCX, XLSX, PPTX, email, Markdown, Slack, Teams, Notion, Confluence, and more',
        'Component tree authored once renders in-browser AND exports server-side',
        'Heavy renderers lazy-loaded — pdfmake (3 MB), exceljs (1.1 MB) only on demand',
      ],
    },
    {
      title: '@pyreon/lint',
      tagline: 'Framework-specific linter',
      features: [
        '62 rules across 12 categories (reactivity, JSX, SSR, hooks, accessibility, …)',
        'Rust-powered via oxc-parser, AST cache, LSP server, watch mode, auto-fix',
        'CLI + JSON-Schema config, four presets (recommended / strict / app / lib)',
      ],
    },
  ],
}

export const vitusLabs: Group = {
  title: 'Vitus Labs',
  tagline:
    'A modular React UI ecosystem (15 packages, ~75 KB gzipped total): engine-agnostic CSS-in-JS, chainable multi-dimensional theming (rocketstyle), unified web + React Native source, and a custom 10 KB CSS engine 158× faster than styled-components.',
  docs: 'https://vitus-labs.com/',
  github: 'https://github.com/vitus-labs',
  totalPackages: 27,
  moreDescription: '(connectors, primitives, hooks, grid, build tooling)',
  packages: [
    {
      title: '@pyreon/styler',
      tagline: 'Custom CSS-in-JS engine, ~10 KB gzipped',
      features: [
        'React 19 native: <style precedence> SSR, useInsertionEffect client injection',
        'Static/dynamic split with multi-tier caching — static templates compute their className once at module load',
        '158× faster than styled-components at the styled() factory; 4.5× faster SSR throughput',
        'Full surface: theming, @layer wrapping, automatic @media/@supports/@container splitting, specificity boost, keyframes, global styles',
      ],
    },
    {
      title: '@pyreon/rocketstyle',
      tagline: 'Multi-dimensional component theming',
      features: [
        'Define a component as a matrix: size × variant × mode → every combination resolves automatically',
        'Add `xl` to a size dimension and every existing variant gains it for free',
        'Closest thing to a "headless variant system" with a real theming layer underneath',
        '5+ years powering production design systems',
      ],
    },
    {
      title: '@pyreon/attrs',
      tagline: 'Chainable component factory',
      features: [
        'Builder API: attrs({...}).attrs(callback).statics({...}).config({...})',
        'No HOC pyramids, no forwardRef(memo(withTheme(...))) stacks',
        'Merge order priorityAttrs → attrs → user props (last wins; priority locks security/correctness invariants like rel="noopener noreferrer")',
        'Extension is the same operation as creation — attrs(Button).attrs({...}) produces a fresh Button with extra defaults',
      ],
    },
    {
      title: '@pyreon/unistyle',
      tagline: 'Responsive styling engine',
      features: [
        '170+ CSS property mappings with three responsive formats (scalar, array, breakpoint-keyed object)',
        'Mobile-first 5-stage pipeline: normalize → transform → dedupe → property-level delta diff → @media wrap',
        "Delta diff collapsed a real production component's CSS from 21 declarations down to 11 — every property crosses the wire exactly once",
        'Em-based media queries (respects user font-size accessibility settings)',
      ],
    },
    {
      title: '@pyreon/kinetic',
      tagline: 'CSS-transition animation system',
      features: [
        'Transition, TransitionGroup, Stagger, Collapse — declarative, no virtual-DOM diffing of style values',
        'No Framer Motion runtime, no AnimateSharedLayout overhead — pure CSS transitions wrapped in React components',
        '65+ ready-made presets (fades, slides, scales, flips, etc.) plus factories for composing your own',
        'Tree-shakeable — only what you import ships',
      ],
    },
    {
      title: '@pyreon/rocketstories',
      tagline: 'Auto-generated Storybook coverage',
      features: [
        'Reads directly from rocketstyle dimension declarations — your component variants ARE the source of truth',
        'One declaration produces a Sizes story, Variants story, States grid (hover/focus/active/disabled), full size × variant × mode matrix, and data-driven rows',
        "Storybook stops being a thing you maintain and becomes a thing that's true",
        'Add a variant → every dimension story gains it automatically',
      ],
    },
  ],
}

export const groups = [pyreon, vitusLabs]
