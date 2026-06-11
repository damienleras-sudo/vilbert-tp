import type { BlogPost } from "@/lib/blog-posts";

export default function SchemaArticle({ post }: { post: BlogPost }) {
  const BASE = "https://www.vilbert-tp.fr";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BASE}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: {
          "@type": "ImageObject",
          url: `${BASE}${post.image}`,
          width: 1200,
          height: 628
        },
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Organization",
          "@id": `${BASE}/#business`,
          name: "Vilbert TP",
          url: BASE
        },
        publisher: {
          "@type": "Organization",
          "@id": `${BASE}/#business`,
          name: "Vilbert TP",
          logo: { "@type": "ImageObject", url: `${BASE}/logo.png` }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${BASE}/blog/${post.slug}`
        },
        keywords: post.category,
        articleSection: post.category,
        inLanguage: "fr-FR",
        isPartOf: {
          "@type": "Blog",
          "@id": `${BASE}/blog#blog`,
          name: "Blog Vilbert TP — Conseils Travaux Publics",
          publisher: { "@id": `${BASE}/#business` }
        }
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
