/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    unoptimized: true,
    domains: ['localhost', 'https://cdn.dummyjson.com/', 'https://maps.googleapis.com'],
  },
  env: {},
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 's-maxage=600, stale-while-revalidate=30',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
