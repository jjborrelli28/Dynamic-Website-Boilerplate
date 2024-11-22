import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['images.ctfassets.net'],
  },

  /*  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  }, */
}

export default nextConfig;

