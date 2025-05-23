/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"],
          weight: ["400", "500", "600", "700", "800"],
        },
      },
    ],
  },
  optimizeFonts: false,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "cdn.hashnode.com",
      "github.com"
    ],
  },
};

module.exports = nextConfig;
