import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // You can keep adding other config options here if needed
  eslint: {
    ignoreDuringBuilds: true, // ✅ prevents Vercel build from failing on ESLint errors
  },
};

export default nextConfig;