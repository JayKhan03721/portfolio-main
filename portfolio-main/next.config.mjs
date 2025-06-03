// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-main',
  assetPrefix: '/portfolio-main/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

