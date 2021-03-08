const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const PLUGINS = [
  [
    withPWA,
    { pwa: { dest: 'public', sw: 'service-worker.js', runtimeCaching } },
  ],
  [
    optimizedImages,
    {
      optimizeInDev: true,
      svgo: {
        plugins: [{ name: 'removeViewBox', active: false }],
      },
    },
  ],
]

module.exports = withPlugins(PLUGINS, {
  dir: 'src',
  poweredByHeader: false,
  // reactStrictMode: true,
})
