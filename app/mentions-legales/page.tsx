import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://www.vilbert-tp.fr";

export const metadata: Metadata = {
  title: "Mentions légales | Vilbert TP",
  description:
    "Mentions légales du site vilbert-tp.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
  alternates: { canonical: `${BASE_URL}/mentions-legales` },
  robots: { index: true, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/mentions-legales`,
      url: `${BASE_URL}/mentions-legales`,
      name: "Mentions légales — Vilbert TP",
      description:
        "Mentions légales du site vilbert-tp.fr : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
      inLanguage: "fr-FR",
      isPartOf: { "@id": BASE_URL },
      publisher: {
        "@type": "Organization",
        name: "Vilbert TP",
        url: BASE_URL,
        telephone: "+33322930286",
        email: "tp@groupe-vilbert.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ruelle Mayeux",
          addressLocality: "Talmas",
          postalCode: "80260",
          addressCountry: "FR",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mentions légales",
          item: `${BASE_URL}/mentions-legales`,
        },
      ],
    },
  ],
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Fil d'Ariane"
        className="bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-[#b5451b] transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              /
            </li>
            <li className="text-gray-700 font-medium" aria-current="page">
              Mentions légales
            </li>
          </ol>
        </div>
      </nav>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* En-tête */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-black text-[#b5451b] mb-4">
              Mentions légales
            </h1>
            <p className="text-gray-500 text-sm">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l&apos;économie numérique (LCEN).
            </p>
          </div>

          <div className="space-y-10">
            {/* Section 1 — Éditeur */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  1
                </span>
                Éditeur du site
              </h2>
              <dl className="text-gray-600 space-y-1 text-sm leading-relaxed">
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Raison sociale :{" "}
                  </dt>
                  <dd className="inline">Vilbert TP (entité du Groupe Vilbert)</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Siège social :{" "}
                  </dt>
                  <dd className="inline">Ruelle Mayeux, 80260 Talmas, France</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Activité :{" "}
                  </dt>
                  <dd className="inline">
                    Travaux publics — terrassement, voirie, réseaux
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Téléphone :{" "}
                  </dt>
                  <dd className="inline">
                    <a
                      href="tel:+33322930286"
                      className="hover:text-[#b5451b] transition-colors"
                    >
                      03 22 93 02 86
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Email :{" "}
                  </dt>
                  <dd className="inline">
                    <a
                      href="mailto:tp@groupe-vilbert.fr"
                      className="hover:text-[#b5451b] transition-colors"
                    >
                      tp@groupe-vilbert.fr
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Site web :{" "}
                  </dt>
                  <dd className="inline">
                    <a
                      href={BASE_URL}
                      className="hover:text-[#b5451b] transition-colors"
                    >
                      www.vilbert-tp.fr
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Directeur de la publication :{" "}
                  </dt>
                  <dd className="inline">Groupe Vilbert</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Numéro SIRET :{" "}
                  </dt>
                  <dd className="inline text-gray-400 italic">
                    [À compléter par l&apos;entreprise]
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    TVA intracommunautaire :{" "}
                  </dt>
                  <dd className="inline text-gray-400 italic">
                    [À compléter par l&apos;entreprise]
                  </dd>
                </div>
              </dl>
            </div>

            {/* Section 2 — Hébergeur */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  2
                </span>
                Hébergeur
              </h2>
              <dl className="text-gray-600 space-y-1 text-sm leading-relaxed">
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Société :{" "}
                  </dt>
                  <dd className="inline">Vercel Inc.</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Adresse :{" "}
                  </dt>
                  <dd className="inline">
                    340 Pine Street Suite 900, San Francisco, CA 94104, USA
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-gray-800">
                    Site :{" "}
                  </dt>
                  <dd className="inline">
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#b5451b] transition-colors"
                    >
                      vercel.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Section 3 — Propriété intellectuelle */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  3
                </span>
                Propriété intellectuelle
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  L&apos;ensemble des contenus figurant sur le site{" "}
                  <strong className="text-gray-800">www.vilbert-tp.fr</strong>{" "}
                  — textes, photographies, images, logos, vidéos, icônes,
                  charte graphique, structure et code source — est la propriété
                  exclusive de <strong className="text-gray-800">Vilbert TP</strong>{" "}
                  ou de ses partenaires et est protégé par les lois françaises
                  et internationales relatives au droit d&apos;auteur et à la
                  propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication
                  ou adaptation de tout ou partie des éléments du site, quel
                  que soit le moyen ou le procédé utilisé, est interdite sans
                  l&apos;autorisation écrite préalable de Vilbert TP. Toute
                  exploitation non autorisée est constitutive de contrefaçon et
                  susceptible de poursuites judiciaires.
                </p>
              </div>
            </div>

            {/* Section 4 — Données personnelles */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  4
                </span>
                Données personnelles
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Vilbert TP est responsable du traitement des données à
                  caractère personnel collectées via ce site. Les données sont
                  traitées conformément au Règlement général sur la protection
                  des données (RGPD — Règlement UE 2016/679) et à la loi
                  Informatique et Libertés.
                </p>
                <p>
                  Vous disposez d&apos;un droit d&apos;accès, de rectification,
                  d&apos;effacement, de portabilité et d&apos;opposition concernant vos
                  données. Pour exercer ces droits ou pour toute question
                  relative au traitement de vos données personnelles, contactez
                  :{" "}
                  <a
                    href="mailto:tp@groupe-vilbert.fr"
                    className="font-medium text-[#b5451b] hover:underline"
                  >
                    tp@groupe-vilbert.fr
                  </a>
                  .
                </p>
                <p>
                  Pour plus d&apos;informations sur la gestion de vos données,
                  consultez notre{" "}
                  <Link
                    href="/confidentialite"
                    className="font-medium text-[#b5451b] hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Section 5 — Cookies */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  5
                </span>
                Cookies
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Ce site utilise des cookies techniques strictement nécessaires
                  à son bon fonctionnement. Ces cookies ne collectent aucune
                  donnée personnelle à des fins publicitaires ou de traçage
                  comportemental.
                </p>
                <p>
                  Conformément à la réglementation en vigueur (directive
                  ePrivacy et recommandations CNIL), aucun cookie non essentiel
                  n&apos;est déposé sans votre consentement préalable. Vous pouvez
                  configurer votre navigateur pour refuser les cookies ; cela
                  peut toutefois limiter certaines fonctionnalités du site.
                </p>
              </div>
            </div>

            {/* Section 6 — Responsabilité */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: "#b5451b" }}
                  aria-hidden="true"
                >
                  6
                </span>
                Limitation de responsabilité
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Vilbert TP s&apos;efforce de maintenir les informations publiées
                  sur ce site aussi précises et à jour que possible. Toutefois,
                  la société ne saurait être tenue responsable des omissions,
                  inexactitudes ou carences dans la mise à jour, qu&apos;elles soient
                  de son fait ou du fait de tiers partenaires lui fournissant
                  ces informations.
                </p>
                <p>
                  Les liens hypertextes présents sur ce site, pointant vers
                  d&apos;autres ressources sur Internet, ne sauraient engager la
                  responsabilité de Vilbert TP quant au contenu de ces sites
                  tiers.
                </p>
                <p>
                  En cas de signalement d&apos;un contenu illicite, Vilbert TP
                  s&apos;engage à agir promptement afin de retirer ledit contenu ou
                  d&apos;en bloquer l&apos;accès. Tout signalement peut être adressé à{" "}
                  <a
                    href="mailto:tp@groupe-vilbert.fr"
                    className="font-medium text-[#b5451b] hover:underline"
                  >
                    tp@groupe-vilbert.fr
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Pied de page section */}
          <p className="mt-12 text-center text-xs text-gray-400">
            Dernière mise à jour : juin 2026 &mdash; Vilbert TP, Ruelle Mayeux,
            80260 Talmas
          </p>
        </div>
      </section>
    </>
  );
}
