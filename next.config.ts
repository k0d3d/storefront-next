import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let Netlify Essential Next.js plugin handle the deployment

  // Image configuration for WooCommerce product images
  images: {
    // Disable Next.js image optimization for Netlify deployment
    // Images are already optimized by WooCommerce and served via wc-api proxy
    unoptimized: true,

    // Keep remotePatterns for development and type safety
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
