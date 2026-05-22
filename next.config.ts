import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/adhd-waitlist',
        destination: '/adhd-get-started',
        permanent: true,
      },
      {
        source: '/get-started',
        destination: '/adhd-get-started',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
