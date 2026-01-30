import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf90d1-04.myshopify.com',
        pathname: '/cdn/**',
      },
    ],
  },
};

export default nextConfig;
