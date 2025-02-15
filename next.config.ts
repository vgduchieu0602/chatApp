import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "", // Can be omitted if it's the default port (80 for http, 443 for https)
        pathname: "/**", // Allows all paths within the hostname
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**", // Allows all paths within the hostname
      },
    ],
  },
};

export default nextConfig;
