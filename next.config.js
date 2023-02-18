const onGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';

if (onGithubActions) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  const repo = 'prisma-next-rsc';

  assetPrefix = `/${repo}/`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
