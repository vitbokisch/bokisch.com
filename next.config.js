const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const PLUGINS = [[optimizedImages, {}]]

// if (CONFIG.pwa) {
//   const withPWA = require('next-pwa')
//   const runtimeCaching = require('next-pwa/cache')

//   PLUGINS.push([
//     withPWA,
//     {
//       dest: 'public',
//       runtimeCaching,
//     },
//   ])
// }

module.exports = withPlugins(PLUGINS, {
  distDir: '../build',
  poweredByHeader: false,
  // reactStrictMode: true,
})
