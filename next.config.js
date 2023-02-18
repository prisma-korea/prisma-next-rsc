const onGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';
if (onGithubActions) {
  // const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  const repo = 'prisma-next-rsc';

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix,
  basePath,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
