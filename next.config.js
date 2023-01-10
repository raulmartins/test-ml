const DOMAIN_IMAGES = process.env.NEXT_PUBLIC_MERCADO_LIVRE_DOMAIN_IMAGES;
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [DOMAIN_IMAGES, 'http2.mlstatic.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 600,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
