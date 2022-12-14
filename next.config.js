// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
// }

// module.exports = nextConfig

const { withFrameworkConfig } = require('./framework/common/config')

module.exports = withFrameworkConfig({
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
})

// console.log('next-config.js', JSON.stringify(module.exports, null, 2))
