import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
  reactCompiler: true,
  // Exclude other project folders from TypeScript checking
  typescript: {
    // These are separate projects, don't type-check them in this build
    ignoreBuildErrors: false,
  },
  // Exclude patterns for the build
  experimental: {
    // Turbopack config
  },
};

export default nextConfig;
