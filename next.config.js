const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const CONFIG = require('./config')

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
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    // config.plugins.push(
    //   new FaviconsWebpackPlugin({
    //     logo: CONFIG.favicon,
    //     cache: true,
    //     outputPath: CONFIG.publicDir,
    //     prefix: CONFIG.publicDir,
    //     icons: {
    //       coast: false,
    //       yandex: false,
    //     },
    //   })
    // )

    return config
  },
})
