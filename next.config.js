/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config...
  serverExternalPackages: [
    'pino',                // common culprit
    'thread-stream',
    '@libsql/hrana-client', // if using drizzle/libsql
    'drizzle-orm',         // if using it
    '@uploadthing/*',      // if using uploadthing
    // Add any other suspicious package names here
  ],
};
