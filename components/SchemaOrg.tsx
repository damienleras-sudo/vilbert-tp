export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor"],
        "@id": "https://www.vilbert-tp.fr/#business",
        name: "Vilbert TP",
        alternateName: "Vilbert Travaux Publics",
        description:
          "Entreprise familiale de travaux publics fondée depuis plus de 30 ans en Hauts-de-France. Spécialiste du terrassement, voirie, réseaux VRD, enrochement, broyage, extraction de craie et travaux particuliers. Certifiée MASE, signataire Charte Objectif CO2. Pelles jusqu'à 40 t, bulldozer GPS.",
        url: "https://www.vilbert-tp.fr",
        telephone: "+33322930286",
        email: "tp@groupe-vilbert.fr",
        foundingDate: "1990",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ruelle Mayeux",
          addressLocality: "Talmas",
          postalCode: "80260",
          addressRegion: "Hauts-de-France",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.1167,
          longitude: 2.3833,
        },
        hasMap: "https://share.google/AiI8apyJiUMyka8p9",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "12:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "13:30",
            closes: "17:30",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Somme", identifier: "80" },
          { "@type": "AdministrativeArea", name: "Oise", identifier: "60" },
          { "@type": "AdministrativeArea", name: "Pas-de-Calais", identifier: "62" },
          { "@type": "City", name: "Amiens" },
          { "@type": "City", name: "Abbeville" },
          { "@type": "City", name: "Péronne" },
          { "@type": "City", name: "Arras" },
          { "@type": "City", name: "Beauvais" },
        ],
        knowsAbout: [
          "Terrassement",
          "Voirie",
          "Réseaux VRD",
          "Assainissement",
          "Enrochement",
          "Bulldozer GPS",
          "Broyage concassage",
          "Démolition",
          "Extraction de craie",
          "Fouilles archéologiques",
          "MASE certification",
          "Charte Objectif CO2",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Certification MASE Hauts-de-France",
            description: "Manuel d'Amélioration Sécurité des Entreprises — management SSE",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Charte Objectif CO2",
            description: "Engagement réduction émissions CO2 du transport routier de marchandises",
          },
        ],
        memberOf: {
          "@type": "Organization",
          name: "Groupe Vilbert",
          url: "https://www.groupe-vilbert.com",
        },
        sameAs: [
          "https://www.groupe-vilbert.com",
          "https://www.facebook.com/p/Groupe-Vilbert-100063776760913/",
          "https://share.google/AiI8apyJiUMyka8p9",
        ],
        image: {
          "@type": "ImageObject",
          url: "https://www.vilbert-tp.fr/logo.png",
          width: 400,
          height: 144,
        },
        logo: "https://www.vilbert-tp.fr/logo.png",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Virement, chèque",
      },

      {
        "@type": "WebSite",
        "@id": "https://www.vilbert-tp.fr/#website",
        url: "https://www.vilbert-tp.fr",
        name: "Vilbert TP",
        description: "Site officiel de Vilbert TP — travaux publics en Hauts-de-France",
        publisher: { "@id": "https://www.vilbert-tp.fr/#business" },
        inLanguage: "fr-FR",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: "https://www.vilbert-tp.fr/blog?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "Service",
        "@id": "https://www.vilbert-tp.fr/terrassement#service",
        name: "Terrassement",
        description: "Terrassement général, fouilles, remblais, terrassement agricole, bulldozer GPS pour précision centimétrique. Pelles 5 à 40 t.",
        provider: { "@id": "https://www.vilbert-tp.fr/#business" },
        areaServed: "Hauts-de-France",
        url: "https://www.vilbert-tp.fr/terrassement",
        serviceType: "Terrassement",
      },
      {
        "@type": "Service",
        "@id": "https://www.vilbert-tp.fr/voirie#service",
        name: "Voirie & Aménagement",
        description: "Pose d'enrobé, pavage, bordures, VRD complet, voirie communale et lotissements.",
        provider: { "@id": "https://www.vilbert-tp.fr/#business" },
        areaServed: "Hauts-de-France",
        url: "https://www.vilbert-tp.fr/voirie",
        serviceType: "Voirie",
      },
      {
        "@type": "Service",
        "@id": "https://www.vilbert-tp.fr/reseaux#service",
        name: "Réseaux VRD",
        description: "Pose de réseaux d'assainissement, eau potable, électricité, gaz, fibre. Agents AIPR habilités.",
        provider: { "@id": "https://www.vilbert-tp.fr/#business" },
        areaServed: "Hauts-de-France",
        url: "https://www.vilbert-tp.fr/reseaux",
        serviceType: "Réseaux VRD",
      },
      {
        "@type": "Service",
        "@id": "https://www.vilbert-tp.fr/enrochement#service",
        name: "Enrochement",
        description: "Protection littorale Baie de Somme, soutènement de berges, jardins individuels et grands chantiers publics.",
        provider: { "@id": "https://www.vilbert-tp.fr/#business" },
        areaServed: "Hauts-de-France",
        url: "https://www.vilbert-tp.fr/enrochement",
        serviceType: "Enrochement",
      },
      {
        "@type": "Service",
        "@id": "https://www.vilbert-tp.fr/extraction-craie#service",
        name: "Extraction et vente de craie",
        description: "Exploitation de carrières de craie en Hauts-de-France. CaCO3 > 90%. Remblai TP, voirie, amendement agricole.",
        provider: { "@id": "https://www.vilbert-tp.fr/#business" },
        areaServed: "Hauts-de-France",
        url: "https://www.vilbert-tp.fr/extraction-craie",
        serviceType: "Extraction de matériaux",
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
