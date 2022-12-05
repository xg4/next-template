/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    Object.assign(config.resolve.alias, {
      dayjs: 'dayjs/esm',
      lodash: 'lodash-es',
    })
    return config
  },
}

module.exports = nextConfig
