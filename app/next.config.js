/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['davdsm.pt'], formats: ['image/avif', 'image/webp'], },
};

module.exports = nextConfig;
