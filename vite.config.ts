import { resolve } from 'node:path'
import pyreon from '@pyreon/vite-plugin'
import { fontPlugin } from '@pyreon/zero/font'
import { seoPlugin } from '@pyreon/zero/seo'
import zero from '@pyreon/zero/server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    pyreon(),
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
