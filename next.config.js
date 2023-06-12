/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com"],
  },
  experiments: {
    topLevelAwait: true,
  },
};

module.exports = nextConfig;
