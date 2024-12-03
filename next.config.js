/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  reactStrictMode: true,
  extends: ['plugin:@next/next/recommended'],
  output: 'export',
};

module.exports = nextConfig;
