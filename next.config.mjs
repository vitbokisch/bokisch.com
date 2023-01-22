import withPlugins from 'next-compose-plugins'
import optimizedImages from 'next-optimized-images-2'

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

export default withPlugins(PLUGINS, {
  dir: 'src',
  poweredByHeader: false,
  compiler: {
    // removeConsole: true,
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
  },
  reactStrictMode: true,
})
