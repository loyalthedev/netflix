/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com", "yt3.ggpht.com"],
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: {
    alias: {
      'magic-sdk': path.resolve(__dirname, 'node_modules/magic-sdk/dist/cjs/index.js'),
    },
  },
};

module.exports = nextConfig;
