import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: '/portfolio-main', // Your GitHub repo name
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry Webpack plugin options
  silent: !process.env.CI,
  org: 'jay-khan',
  project: 'javascript-nextjs',

  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  disableLogger: true,
  automaticVercelMonitors: true,
});
