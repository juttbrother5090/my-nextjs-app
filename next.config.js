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
  },
}

module.exports = nextConfig