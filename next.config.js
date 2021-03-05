const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const PLUGINS = [
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
