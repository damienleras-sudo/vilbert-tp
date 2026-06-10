export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.vilbert-tp.fr/#business",
        name: "Vilbert TP",
        description:
          "Entreprise familiale de travaux publics en Hauts-de-France : terrassement, voirie, réseaux, travaux particuliers.",
        url: "https://www.vilbert-tp.fr",
        telephone: "+33322930286",
        email: "tp@groupe-vilbert.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ruelle Mayeux",
          addressLocality: "Talmas",
          postalCode: "80260",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.1167,
          longitude: 2.3833,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Somme (80)" },
          { "@type": "AdministrativeArea", name: "Oise (60)" },
          { "@type": "AdministrativeArea", name: "Pas-de-Calais (62)" },
        ],
        sameAs: [
          "https://www.groupe-vilbert.com",
          "https://share.google/AiI8apyJiUMyka8p9",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
