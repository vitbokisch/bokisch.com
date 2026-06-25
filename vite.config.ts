import { resolve } from 'node:path'
import pyreon from '@pyreon/vite-plugin'
import { faviconPlugin } from '@pyreon/zero/favicon'
import { aiPlugin } from '@pyreon/zero/ai'
import { seoPlugin } from '@pyreon/zero/seo'
import zero from '@pyreon/zero/server'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// Bundle treemap is opt-in via `ANALYZE=1 bun run build` — writes
// dist/bundle-analysis.html (interactive treemap of gzip / brotli /
// raw byte attribution per module).
const analyze = process.env.ANALYZE === '1'

export default defineConfig({
  plugins: [
    pyreon(),
    // Generate the full favicon set (svg + light/dark png + apple-touch +
    // webmanifest) from a single source pair, and auto-inject the
    // theme-aware <link>s + favicon-toggle script.
    faviconPlugin({
      source: 'src/assets/favicon/dark.svg',
      darkSource: 'src/assets/favicon/light.svg',
      themeColor: '#ffffff',
      backgroundColor: '#ffffff',
    }),
    // Emit sitemap.xml + robots.txt at build time. `trailingSlash: 'always'`
    // matches the GH Pages directory-style routing — `/resume` would 301
    // to `/resume/` otherwise (-160 ms Lighthouse penalty per crawl).
    seoPlugin({
      sitemap: {
        origin: 'https://bokisch.com',
        changefreq: 'monthly',
        priority: 0.7,
        exclude: ['/_not-found'],
        trailingSlash: 'always',
      },
      robots: {
        rules: [{ userAgent: '*', allow: ['/'] }],
        sitemap: 'https://bokisch.com/sitemap.xml',
        host: 'bokisch.com',
      },
    }),
    // Emit llms.txt + AI plugin manifest for AI-crawler discoverability.
    aiPlugin({
      name: 'Vit Bokisch',
      description:
        'Personal site & resume of Vit Bokisch — frontend engineer.',
      origin: 'https://bokisch.com',
      contactEmail: 'vit@bokisch.cz',
    }),
    zero({
      mode: 'ssg',
      adapter: 'static',
      ssg: {
        paths: ['/', '/resume'],
        format: 'both',
      },
      // Auto-wired (0.30.0+): folds imagePlugin + fontPlugin config
      // into zero() — no separate plugin calls needed.
      image: {
        widths: [480, 768, 1024],
        formats: ['webp'],
        quality: 75,
      },
      font: {
        google: ['Ubuntu:wght@300;500'],
        display: 'swap',
        fallbacks: {
          Ubuntu: {
            fallback: 'Arial',
            sizeAdjust: 0.99,
            ascentOverride: 95,
            descentOverride: 21,
            lineGapOverride: 0,
          },
        },
      },
    }),
    analyze &&
      visualizer({
        filename: 'dist/bundle-analysis.html',
        template: 'treemap',
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: [
      '@pyreon/core',
      '@pyreon/reactivity',
      '@pyreon/runtime-dom',
      '@pyreon/runtime-server',
      '@pyreon/styler',
      '@pyreon/rocketstyle',
      '@pyreon/coolgrid',
      '@pyreon/elements',
      '@pyreon/hooks',
      '@pyreon/unistyle',
      '@pyreon/ui-core',
      '@pyreon/router',
      '@pyreon/zero',
      '@pyreon/head',
      '@pyreon/meta',
    ],
  },
})
