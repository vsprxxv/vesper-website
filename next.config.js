/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    'pino',
    'thread-stream',
    '@libsql/hrana-client',
    'drizzle-orm',
    '@uploadthing/*',
    // Add more if you discover other problematic deps later
  ],
};

export default nextConfig;