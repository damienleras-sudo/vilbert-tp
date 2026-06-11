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
    { url: `${BASE_URL}/enrochement`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/location-engins`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/broyage-concassage`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/demolition-valorisation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/engagements`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/balayage-route`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/extraction-craie`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/fouilles-archeologiques`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/accompagnement-projet`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/realisations`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/a-propos`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terrassement-amiens`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement-abbeville`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement-peronne`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/travaux-publics-somme`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement-albert`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement-doullens`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/terrassement-montdidier`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/mentions-legales`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/confidentialite`, priority: 0.4, changeFrequency: "yearly" as const },
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
