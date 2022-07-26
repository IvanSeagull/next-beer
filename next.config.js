/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.punkapi.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
