import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }
    ],
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
