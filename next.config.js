/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@libsql/hrana-client'  // Prevents bundler from tracing/parsing its LICENSE + other files
  ]
};

export default nextConfig;