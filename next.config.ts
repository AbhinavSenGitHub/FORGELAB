import type { NextConfig } from "next";

// /workos is the WorkOS site (its own Vercel project). On Vercel, vercel.json
// proxies it before Next.js runs: through these rewrites Next.js answered the
// WorkOS pages' background (RSC) requests for /workos with 404s. These stay
// for `next dev` / `next start` on this computer.
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
