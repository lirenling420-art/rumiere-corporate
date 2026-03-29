/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    // ESLint の古いオプションエラーを回避
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
