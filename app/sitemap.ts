import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://www.vilbert-tp.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/voirie`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/reseaux`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/travaux-particuliers`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/realisations`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/a-propos`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    ...blogPosts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return pages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
