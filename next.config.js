/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.punkapi.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/next-beer',
  assetPrefix: '/next-beer',
};

module.exports = nextConfig;
