import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/adhd-waitlist',
        destination: '/get-started',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
