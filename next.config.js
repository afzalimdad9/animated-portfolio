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
