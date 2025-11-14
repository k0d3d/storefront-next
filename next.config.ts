import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let Netlify Essential Next.js plugin handle the deployment

  // Image configuration for WooCommerce product images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wc-api.tohju.com',
        pathname: '/public/stores/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/public/stores/**',
      },
    ],
  },
};

export default nextConfig;
