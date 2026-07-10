import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/certifications",
        destination: "/credentials",
        permanent: true,
      },
      {
        source: "/stacks",
        destination: "/stack",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/emoji/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/koo10zab/**",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
}

export default nextConfig
