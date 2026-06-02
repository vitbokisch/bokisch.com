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
    //
    // `display: 'optional'` (was 'swap') prevents the late font-swap
    // reflow that Lighthouse flagged as a CLS culprit on /resume. With
    // `optional`, the browser uses fallback if Ubuntu isn't ready within
    // its tiny render budget (~100 ms). For a self-hosted, <40 KB
    // preloaded woff2 served from same-origin, that's essentially
    // always true on warm caches, and the cold-cache fallback render
    // is acceptable (text shape changes but no layout shift).
    //
    // `fallbacks` provides size-adjusted Arial metrics so even when
    // the fallback ships first, line-heights match Ubuntu closely
    // enough that the swap (when it happens on cold-cache reload) is
    // sub-pixel.
    fontPlugin({
      google: ['Ubuntu:ital,wght@0,300;0,500;1,300;1,500'],
      display: 'optional',
      fallbacks: {
        Ubuntu: {
          fallback: 'Arial',
          sizeAdjust: 105.2,
          ascentOverride: 90,
          descentOverride: 20,
          lineGapOverride: 0,
        },
      },
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
