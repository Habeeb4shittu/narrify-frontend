import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      "*.mp4": {
        type: "asset",
      },
      "*.webm": {
        type: "asset",
      },
      "*.ogg": {
        type: "asset",
      },
    },
  },
};

export default nextConfig;
