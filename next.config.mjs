/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  poweredByHeader: false,
  turbopack: {},
  compiler: {
    removeConsole: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
