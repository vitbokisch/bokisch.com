import { resolve } from 'node:path'
import pyreon from '@pyreon/vite-plugin'
import { faviconPlugin } from '@pyreon/zero/favicon'
import { fontPlugin } from '@pyreon/zero/font'
import { imagePlugin } from '@pyreon/zero/image-plugin'
import { seoPlugin } from '@pyreon/zero/seo'
import zero from '@pyreon/zero/server'
import { defineConfig } from 'vite'

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
    fontPlugin({
      google: ['Ubuntu:ital,wght@0,300;0,500;1,300;1,500'],
      display: 'swap',
    }),
    // Emit sitemap.xml + robots.txt at build time.
    seoPlugin({
      sitemap: {
        origin: 'https://bokisch.com',
        changefreq: 'monthly',
        priority: 0.7,
        exclude: ['/_not-found'],
      },
      robots: {
        rules: [{ userAgent: '*', allow: ['/'] }],
        sitemap: 'https://bokisch.com/sitemap.xml',
        host: 'bokisch.com',
      },
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
  ],
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
