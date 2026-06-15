import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  // Redirection canonique : vilbert-tp.fr → www.vilbert-tp.fr (301 permanent)
  // Résout le duplicate content détecté par Google Search Console
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "vilbert-tp.fr" }],
        destination: "https://www.vilbert-tp.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
