/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjsblog.gamer.gd',
      },
      {
        protocol: 'https',
        hostname: '*.gamer.gd',
      },
      {
        protocol: 'https',
        hostname: '*.infinityfreeapp.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Fallback images
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Placeholder service
      },
    ],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Enable compression for better performance
  compress: true,
  // Enable react production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  // Experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'react-icons',
      'next/third-parties'
    ]
  },
  // Enable static optimization
  staticPageGenerationTimeout: 600,
  // Performance optimizations
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  // Enable ETag generation for better caching
  generateEtags: true,
  // Enable HTTP compression
  httpAgentOptions: {
    keepAlive: true,
  },
  // Add Turbopack configuration
  turbopack: {},
}

module.exports = nextConfig