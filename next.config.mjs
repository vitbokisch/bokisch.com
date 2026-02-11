import optimizedImages from '@vitus-labs/tools-nextjs-images'

export default optimizedImages({
  optimizeInDev: true,
})({
  output: 'export',
  poweredByHeader: false,
  turbopack: {},
  compiler: {
    removeConsole: true,
  },
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  reactStrictMode: true,
})
