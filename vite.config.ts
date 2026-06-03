import { resolve } from 'node:path'
import pyreon from '@pyreon/vite-plugin'
import { faviconPlugin } from '@pyreon/zero/favicon'
import { fontPlugin } from '@pyreon/zero/font'
import { aiPlugin } from '@pyreon/zero/ai'
import { imagePlugin } from '@pyreon/zero/image-plugin'
import { seoPlugin } from '@pyreon/zero/seo'
import zero from '@pyreon/zero/server'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// Bundle treemap is opt-in via `ANALYZE=1 bun run build` — writes
// dist/bundle-analysis.html (interactive treemap of gzip / brotli /
// raw byte attribution per module).
const analyze = process.env.ANALYZE === '1'

export default defineConfig({
  build: {
    // Disable Vite's default 4 KB asset inlining. Three Companies logos
    // (strv, exaforce, mews) are under the threshold → Vite inlines them
    // as `data:image/png;base64,…` URIs → @pyreon/runtime-server's
    // SSR URL guard blocks every `data:` URI uniformly → static HTML
    // ships those `<img>` tags with NO src.
    //
    // 0.28.1's runtime-dom fix unblocks the client side, but the
    // matching server-side fix hasn't landed yet (filed upstream).
    // Until then, force every asset to emit as a separate file —
    // ~8 KB total in extra HTTP requests for our case, paid back in
    // working static HTML for crawlers + no first-paint flash.
    assetsInlineLimit: 0,
  },
  plugins: [
    pyreon(),
    // Generate the full favicon set (svg + light/dark png + apple-touch +
    // webmanifest) from a single source pair, and auto-inject the
    // theme-aware <link>s + favicon-toggle script.
    faviconPlugin({
      source: 'src/assets/favicon/light.svg',
      darkSource: 'src/assets/favicon/dark.svg',
      themeColor: '#ffffff',
      backgroundColor: '#ffffff',
    }),
    // Self-host Ubuntu at build time — removes the render-blocking
    // fonts.googleapis.com request and ships @font-face + preload inline.
    fontPlugin({
      google: ['Ubuntu:ital,wght@0,300;0,500;1,300;1,500'],
      display: 'swap',
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
    // Build-time WebP optimization for `?optimize` imports. Only the
    // 289 KB profile photo opts in; logos stay raw `?url`.
    imagePlugin({
      widths: [480, 768, 1024],
      formats: ['webp'],
      quality: 80,
    }),
    zero({
      mode: 'ssg',
      adapter: 'static',
      ssg: {
        paths: ['/', '/resume'],
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
