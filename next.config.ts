import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/workos",
        destination: "https://work-os-peach.vercel.app/workos",
      },
      {
        source: "/workos/:path*",
        destination: "https://work-os-peach.vercel.app/workos/:path*",
      },
    ];
  },
};

export default nextConfig;
