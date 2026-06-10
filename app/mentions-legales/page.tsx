import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Vilbert TP",
  description: "Mentions légales du site Vilbert TP.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 prose prose-gray">
        <h1 className="text-3xl font-black text-[#b5451b] mb-8">Mentions légales</h1>

        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Éditeur du site</h2>
        <p className="text-gray-600">
          <strong>Vilbert TP</strong><br />
          Route nationale — 80630 Beauval<br />
          Tél. : 03 22 93 02 86<br />
          Email : tp@groupe-vilbert.fr<br />
          Filiale du Groupe Vilbert
        </p>

        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Hébergement</h2>
        <p className="text-gray-600">
          Ce site est hébergé par <strong>Vercel Inc.</strong><br />
          440 N Barranca Ave #4133, Covina, CA 91723, USA
        </p>

        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Propriété intellectuelle</h2>
        <p className="text-gray-600">
          L'ensemble des contenus (textes, images, logos) présents sur ce site est la propriété exclusive
          de Vilbert TP ou de ses partenaires. Toute reproduction est interdite sans autorisation préalable.
        </p>

        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Données personnelles</h2>
        <p className="text-gray-600">
          Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
          de vos données en nous contactant à tp@groupe-vilbert.fr.
        </p>

        <h2 className="text-xl font-black text-gray-900 mt-8 mb-3">Cookies</h2>
        <p className="text-gray-600">
          Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement.
          Aucun cookie publicitaire n'est déposé sans votre accord.
        </p>
      </div>
    </section>
  );
}
