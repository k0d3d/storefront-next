import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let Netlify Essential Next.js plugin handle the deployment

  // Image configuration for WooCommerce product images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wc-api.tohju.com',
      },
      {
        protocol: 'https',
        hostname: 'ryzen-dev.tohju.com',
      },
    ],
  },
};

export default nextConfig;
