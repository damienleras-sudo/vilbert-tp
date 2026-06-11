type Props = {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
};

export default function SchemaWebPage({ title, description, url, breadcrumbs }: Props) {
  const BASE = "https://www.vilbert-tp.fr";
  const fullUrl = `${BASE}${url}`;
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${fullUrl}#webpage`,
      url: fullUrl,
      name: title,
      description,
      isPartOf: { "@id": `${BASE}/#website` },
      about: { "@id": `${BASE}/#business` },
      inLanguage: "fr-FR",
      breadcrumb: breadcrumbs ? {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
          ...breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: b.name,
            item: `${BASE}${b.href}`
          }))
        ]
      } : undefined
    }
  ];
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}
