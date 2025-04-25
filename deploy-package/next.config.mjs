/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  // External packages that should only be bundled on the server
  serverExternalPackages: ['mysql2'],
  output: 'standalone',
  webpack: (config) => {
    // This is needed only for the mysql2 package to work properly with Next.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
    };
    
    // Add bcrypt to webpack externals - this prevents it from being bundled
    // which avoids Edge Runtime compatibility issues
    config.externals = [...(config.externals || []), "bcrypt", "bcryptjs"];
    
    return config;
  },
}

export default nextConfig
