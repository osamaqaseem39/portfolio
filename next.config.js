/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  // Performance optimizations for Core Web Vitals
  poweredByHeader: false,
  compress: true,

  // Image optimization for LCP
  images: {
    qualities: [75, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },


  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/herobg.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/myimage.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react', 'framer-motion'],
  },

  // Reduce unused JavaScript with better tree shaking
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/{{member}}',
    },
    '@heroicons/react': {
      transform: '@heroicons/react/{{member}}',
    },
  },

  // Additional performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize bundle splitting to reduce unused JavaScript
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Separate vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // Separate React-related code
          react: {
            test: /[\\/]node_modules[\\/]react/,
            name: 'react',
            chunks: 'all',
            priority: 20,
            enforce: true,
          },
          // Separate animation libraries
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|@heroicons)/,
            name: 'animations',
            chunks: 'all',
            priority: 15,
            enforce: true,
          },
        },
      };
    }

    return config;
  },
}

module.exports = nextConfig

