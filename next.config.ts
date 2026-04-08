import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  headers: async () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "gouravportfolio-eta.vercel.app",
        },
      ],
      headers: [
        {
          key: "X-Robots-Tag",
          value: "noindex, nofollow",
        },
      ],
    },
  ],
};

export default nextConfig;
