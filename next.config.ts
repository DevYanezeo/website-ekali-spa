import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para evitar problemas de permisos en Windows
  output: 'standalone',
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Configuraciones experimentales si es necesario
  },
};

export default nextConfig;
