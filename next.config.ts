import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/plasticosvirgo",
  assetPrefix: "/plasticosvirgo",
  images: { unoptimized: true },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
