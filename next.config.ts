import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
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
  eslint: {
    ignoreDuringBuilds: true, // Tắt ESLint khi build
  },
  typescript: {
    ignoreBuildErrors: true, // Tắt TypeScript errors nếu cần
  },
};

export default nextConfig;
