import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para evitar problemas de permisos en Windows
  output: 'standalone',
  trailingSlash: false,
  experimental: {
    // Configuraciones experimentales si es necesario
  },
};

export default nextConfig;
