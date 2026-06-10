import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations | Chantiers Vilbert TP — Terrassement, Voirie, Réseaux",
  description:
    "Découvrez les réalisations de Vilbert TP en Hauts-de-France : chantiers de terrassement, voirie, réseaux, travaux particuliers. Somme (80), Oise (60), Pas-de-Calais (62).",
};

const realisations = [
  {
    titre: "Viabilisation lotissement",
    categorie: "Voirie & Réseaux",
    lieu: "Somme (80)",
    desc: "Création complète de voirie, réseaux EU/EP, éclairage public et raccordements pour un lotissement de 25 lots.",
    src: "/realisations/lotissement-1.jpg",
  },
  {
    titre: "Terrassement zone industrielle",
    categorie: "Terrassement",
    lieu: "Pas-de-Calais (62)",
    desc: "Terrassement général et évacuation de 8 000 m³ de terres pour implantation de bâtiment industriel.",
    src: "/realisations/terrassement-2.jpg",
  },
  {
    titre: "Allée enrobée — particulier",
    categorie: "Travaux Particuliers",
    lieu: "Oise (60)",
    desc: "Création d'allée en enrobé 0/10 sur 180 m², avec bordures béton et avaloir.",
    src: "/realisations/allee-1.jpg",
  },
  {
    titre: "Réfection voirie communale",
    categorie: "Voirie",
    lieu: "Somme (80)",
    desc: "Fraisage et reprofilage de 1 200 m² de voirie communale, pose de couche de roulement enrobé.",
    src: "/realisations/voirie-2.jpg",
  },
  {
    titre: "Réseau d'assainissement",
    categorie: "Réseaux",
    lieu: "Somme (80)",
    desc: "Pose de 450 ml de collecteur EU PVC Ø250, regards de visite, boîtes de branchement.",
    src: "/realisations/reseaux-2.jpg",
  },
  {
    titre: "Terrasse béton désactivé",
    categorie: "Travaux Particuliers",
    lieu: "Oise (60)",
    desc: "Réalisation d'une terrasse 80 m² en béton désactivé, avec escalier et bordures granit.",
    src: "/realisations/terrasse-1.jpg",
  },
];

const categories = ["Tous", "Terrassement", "Voirie", "Réseaux", "Travaux Particuliers", "Voirie & Réseaux"];

export default function RealisationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Nos <span className="text-[#f5b800]">réalisations</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Découvrez quelques exemples de nos chantiers récents en Hauts-de-France :
            terrassement, voirie, réseaux et travaux particuliers.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* GRILLE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((r) => (
              <div key={r.titre} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="relative aspect-video bg-gray-200">
                  <Image
                    src={r.src}
                    alt={r.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#b5451b] text-white text-xs font-bold px-2 py-1 rounded">
                      {r.categorie}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <span>📍</span>
                    <span>{r.lieu}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{r.titre}</h3>
                  <p className="text-gray-500 text-sm">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#b5451b] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-black mb-3">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="text-orange-200 mb-6">
              Contactez-nous pour discuter de votre chantier. Devis gratuit et réponse rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-xl text-xl hover:bg-[#ffd44d] transition-colors">
                📞 03 22 93 02 86
              </a>
              <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-50 transition-colors">
                ✉️ Devis en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
