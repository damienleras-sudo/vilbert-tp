import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Groupe Vilbert TP",
  description:
    "Politique de confidentialité et protection des données personnelles du Groupe Vilbert. Découvrez comment nous collectons, utilisons et protégeons vos données conformément au RGPD.",
  alternates: {
    canonical: "https://www.groupe-vilbert.fr/confidentialite",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politique de confidentialité",
  url: "https://www.groupe-vilbert.fr/confidentialite",
  description:
    "Politique de confidentialité et protection des données personnelles du Groupe Vilbert.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.groupe-vilbert.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Politique de confidentialité",
        item: "https://www.groupe-vilbert.fr/confidentialite",
      },
    ],
  },
};

export default function ConfidentialitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb visuel */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#f5b800] transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium" aria-current="page">
              Politique de confidentialité
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-gray-500 mb-10 text-sm">
          Dernière mise à jour : juin 2026
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            1. Responsable du traitement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le responsable du traitement des données personnelles collectées sur
            ce site est :
          </p>
          <address className="mt-3 not-italic text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-lg p-4">
            <strong>Groupe Vilbert</strong>
            <br />
            Ruelle Mayeux
            <br />
            80260 Talmas
            <br />
            France
            <br />
            <br />
            Délégué à la Protection des Données (DPO) :{" "}
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="text-[#f5b800] hover:underline"
            >
              tp@groupe-vilbert.fr
            </a>
          </address>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            2. Données collectées
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nous collectons les données suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Formulaire de contact :</strong> nom, prénom, adresse
              e-mail, numéro de téléphone (optionnel), et le contenu de votre
              message.
            </li>
            <li>
              <strong>Cookies analytics :</strong> données de navigation
              anonymisées (pages visitées, durée de session, provenance) via
              Google Analytics.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            3. Finalités du traitement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Vos données sont traitées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              Répondre à vos demandes envoyées via le formulaire de contact.
            </li>
            <li>
              Améliorer le site internet et analyser les comportements de
              navigation de manière agrégée et anonyme.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            4. Base légale des traitements
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-[#f5b800]/10">
                  <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-800">
                    Traitement
                  </th>
                  <th className="border border-gray-200 px-4 py-3 font-semibold text-gray-800">
                    Base légale (RGPD)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-200 px-4 py-3">
                    Gestion des demandes de contact
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    Intérêt légitime (art. 6.1.f)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3">
                    Cookies analytics (Google Analytics)
                  </td>
                  <td className="border border-gray-200 px-4 py-3">
                    Consentement (art. 6.1.a)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            5. Durée de conservation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les données collectées via le formulaire de contact sont conservées
            pendant une durée maximale de <strong>3 ans</strong> à compter du
            dernier contact, puis supprimées ou anonymisées. Les données
            analytics sont conservées conformément à la politique de Google
            Analytics (26 mois par défaut).
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            6. Destinataires des données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Vos données personnelles sont destinées exclusivement aux équipes
            internes du Groupe Vilbert habilitées à traiter vos demandes.{" "}
            <strong>
              Aucune donnée personnelle n&apos;est vendue, louée ou cédée à des
              tiers à des fins commerciales.
            </strong>{" "}
            Les seuls sous-traitants techniques pouvant avoir accès à vos
            données sont ceux nécessaires à l&apos;hébergement du site et à
            l&apos;outil d&apos;analyse d&apos;audience (Google Analytics), dans
            le strict respect du RGPD.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            7. Vos droits RGPD
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez des
            droits suivants :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 mb-4">
            <li>
              <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
              données personnelles.
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger des données
              inexactes ou incomplètes.
            </li>
            <li>
              <strong>Droit à l&apos;effacement :</strong> demander la
              suppression de vos données (« droit à l&apos;oubli »).
            </li>
            <li>
              <strong>Droit d&apos;opposition :</strong> vous opposer à un
              traitement fondé sur l&apos;intérêt légitime.
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> recevoir vos données
              dans un format structuré et lisible par machine.
            </li>
            <li>
              <strong>Retrait du consentement :</strong> retirer à tout moment
              votre consentement pour les traitements fondés sur celui-ci
              (cookies analytics).
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Pour exercer ces droits, contactez notre DPO à l&apos;adresse :{" "}
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="text-[#f5b800] hover:underline"
            >
              tp@groupe-vilbert.fr
            </a>
            . En cas de réponse insatisfaisante, vous pouvez introduire une
            réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5b800] hover:underline"
            >
              CNIL (www.cnil.fr)
            </a>
            .
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            8. Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Ce site utilise deux catégories de cookies :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 mb-4">
            <li>
              <strong>Cookies fonctionnels :</strong> indispensables au bon
              fonctionnement du site (navigation, mémorisation des préférences).
              Ces cookies ne nécessitent pas votre consentement.
            </li>
            <li>
              <strong>Cookies analytics :</strong> fournis par Google Analytics,
              ils nous permettent de mesurer l&apos;audience et
              d&apos;améliorer nos contenus. Ils sont déposés uniquement après
              votre consentement explicite.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            <strong>
              Aucun cookie publicitaire ou de traçage à des fins marketing
              n&apos;est utilisé sur ce site.
            </strong>{" "}
            Vous pouvez retirer votre consentement à tout moment via les
            paramètres de cookies du site ou en configurant votre navigateur.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            9. Sécurité des données
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous mettons en oeuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre tout accès
            non autorisé, divulgation, altération ou destruction. Le site est
            hébergé sur des infrastructures sécurisées et les échanges sont
            chiffrés via le protocole HTTPS (TLS).
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-[#f5b800] pl-4 mb-4">
            10. Modification de la politique
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le Groupe Vilbert se réserve le droit de modifier la présente
            politique de confidentialité à tout moment, notamment pour se
            conformer à toute évolution légale, réglementaire, jurisprudentielle
            ou technique. La date de dernière mise à jour est indiquée en haut
            de cette page. Nous vous encourageons à consulter régulièrement
            cette page pour rester informé des éventuels changements.
          </p>
        </section>
      </main>
    </>
  );
}
