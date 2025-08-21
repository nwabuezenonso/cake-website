import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  /* config options here */
};

export default nextConfig;
