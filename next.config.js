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
  experimental: {
    esmExternals: false,  // This fixes many ESM/CommonJS interop issues during webpack builds
  },
  // Add any other settings here later if needed
};

export default nextConfig;