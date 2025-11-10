import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "pngimg.com",
      },
    ],
  },
};

module.exports = nextConfig;


export default nextConfig;
