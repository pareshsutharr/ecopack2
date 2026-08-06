import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://static.wixstatic.com/**"),
      new URL("https://i.ytimg.com/**"),
    ],
  },
};

export default nextConfig;
