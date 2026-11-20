import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "i.pravatar.cc",
      "pedvkwlatzssmjmgfjyn.supabase.co",
      "ik.imagekit.io",
      "cdn.discordapp.com",
      "avatars.githubusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      process.env.NEXT_SUPABASE_URL ||
      "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.NEXT_SUPABASE_ANON_KEY ||
      "",
  },
};

export default nextConfig;
