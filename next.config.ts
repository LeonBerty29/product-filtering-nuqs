import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
        protocol: "https"
      },
      {
        hostname: "picsum.photos",
        protocol: "https"
      },
      {
        hostname: "placehold.co",
        protocol: "https"
      },
      {
        hostname: "example.com",
        protocol: "https"
      },
    ]
  }
};

export default nextConfig;
