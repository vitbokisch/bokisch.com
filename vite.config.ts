import { resolve } from 'node:path'
import pyreon from '@pyreon/vite-plugin'
import zero from '@pyreon/zero/server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    pyreon(),
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
})
