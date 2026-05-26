/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async headers() {
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
      },
      // HSTS — production only. Vercel terminates TLS at the edge so this is safe.
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      }
    ];

    return [
      {
        // Apply security headers to every route. Studio runs at /studio
        // and is served same-origin, so SAMEORIGIN framing is fine for it.
        source: '/:path*',
        headers: securityHeaders
      },
      {
        // Long-lived caching for static asset paths
        source: '/:path*\\.(woff2|webp|avif|svg|png|jpg|jpeg|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      }
    ];
  },
  async redirects() {
    return [
      { source: '/services/quote-follow-up', destination: '/services', permanent: true },
      { source: '/faq', destination: '/faqs', permanent: true },
      // Common typos
      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true }
    ];
  }
};

module.exports = nextConfig;
