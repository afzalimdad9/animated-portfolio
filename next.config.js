/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
        unoptimized: true
    }
}
}

module.exports = nextConfig

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});