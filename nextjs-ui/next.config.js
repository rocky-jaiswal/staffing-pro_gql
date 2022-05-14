/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    authServerUrl: 'http://localhost:3001',
    graphQlServerUrl: 'http://localhost:4000/graphql',
  },
}

module.exports = nextConfig
