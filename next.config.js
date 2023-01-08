const DOMAIN_IMAGES = process.env.NEXT_PUBLIC_MERCADO_LIVRE_DOMAIN_IMAGES;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [DOMAIN_IMAGES],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 610,
  },
};

module.exports = nextConfig;
