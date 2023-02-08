/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    relay: require('./relay.config'),
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
