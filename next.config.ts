import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/emoji/**",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
}

export default nextConfig
