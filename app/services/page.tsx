import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | Terrassement, Voirie, Réseaux & Travaux Particuliers",
  description:
    "Découvrez toutes les prestations de Vilbert TP : terrassement, voirie et aménagement, réseaux humides et secs, travaux pour particuliers. Devis gratuit au 03 22 93 02 86.",
};

const categories = [
  {
    id: "terrassement",
    icon: "🏗️",
    title: "Terrassement",
    color: "#b5451b",
    href: "/terrassement",
    prestations: [
      { label: "Terrassement urbain", desc: "Décaissement, fouilles, préparation de terrain pour tous types de projets." },
      { label: "Évacuation terres & gravats", desc: "Transport et évacuation vers filières agréées." },
      { label: "Remblaiement", desc: "Apport et compactage de matériaux adaptés." },
      { label: "Location d'engins", desc: "Mise à disposition de pelles, mini-pelles, niveleuses avec opérateur." },
    ],
  },
  {
    id: "voirie",
    icon: "🛣️",
    title: "Voirie & Aménagement",
    color: "#b5451b",
    href: "/voirie",
    prestations: [
      { label: "Viabilisation de lotissements", desc: "Création complète de voirie pour promoteurs et collectivités." },
      { label: "Aménagements urbains", desc: "Trottoirs, places, espaces publics, pistes cyclables." },
      { label: "Bordures béton & granit", desc: "Pose et alignement de bordures, caniveaux, avaloirs." },
      { label: "Enrobé & revêtements", desc: "Application de couches d'enrobé, enduits superficiels." },
      { label: "Pavage & dallage", desc: "Pose de pavés béton ou granit, dalles." },
      { label: "Signalisation routière", desc: "Marquage au sol, panneaux, sécurisation de chantier." },
    ],
  },
  {
    id: "reseaux",
    icon: "🔧",
    title: "Réseaux",
    color: "#b5451b",
    href: "/reseaux",
    prestations: [
      { label: "Assainissement urbain", desc: "Pose de réseaux EU/EP, regards, boîtes de branchement." },
      { label: "Conduites PVC, grès, béton, fonte", desc: "Tous diamètres, toutes profondeurs." },
      { label: "Raccordement ENEDIS", desc: "Tranchées pour réseaux électriques en souterrain." },
      { label: "Raccordement GRDF", desc: "Pose de fourreaux et conduites gaz." },
      { label: "Raccordement télécom (Orange)", desc: "Génie civil fibre optique et téléphone." },
      { label: "Raccordement Véolia / eau potable", desc: "Canalisations AEP, branchements." },
    ],
  },
  {
    id: "particuliers",
    icon: "🏠",
    title: "Travaux Particuliers",
    color: "#b5451b",
    href: "/travaux-particuliers",
    prestations: [
      { label: "Allée en enrobé", desc: "Création ou réfection d'allée en enrobé bitumeux durable." },
      { label: "Terrasse béton lavé ou désactivé", desc: "Finitions soignées, nombreuses teintes disponibles." },
      { label: "Pose de pavés", desc: "Allées et accès en pavés béton ou granit." },
      { label: "Enrochement", desc: "Pose de rochers décoratifs ou de soutènement." },
      { label: "Clôtures & portails", desc: "Installation complète de clôtures, portails et murs." },
      { label: "Assainissement individuel", desc: "Fosse septique, puits filtrant, raccordement tout-à-l'égout." },
      { label: "Drainage & gestion eaux pluviales", desc: "Tranchées drainantes, noues, bassins." },
      { label: "Démolition & évacuation souches", desc: "Déconstruction, évacuation de souches d'arbres." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Nos Services
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Toutes nos <span className="text-[#f5b800]">prestations</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            De la fouille jusqu'à la viabilisation complète — Vilbert TP accompagne particuliers,
            collectivités et professionnels sur tous leurs projets de travaux publics.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#b5451b] px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="text-2xl font-black text-white">{cat.title}</h2>
                </div>
                <Link
                  href={cat.href}
                  className="bg-[#f5b800] text-gray-900 font-bold text-sm px-4 py-2 rounded hover:bg-[#ffd44d] transition-colors hidden sm:block"
                >
                  Page dédiée →
                </Link>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.prestations.map((p) => (
                    <div key={p.label} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{p.label}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Link
                    href={cat.href}
                    className="border border-[#b5451b] text-[#b5451b] font-bold px-5 py-2 rounded hover:bg-[#b5451b] hover:text-white transition-colors text-sm"
                  >
                    En savoir plus →
                  </Link>
                  <a
                    href="tel:0322930286"
                    className="bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
                  >
                    📞 Devis gratuit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Une prestation ne figure pas dans la liste ?
          </h2>
          <p className="text-gray-700 mb-6">Contactez-nous — nos équipes étudient tous les projets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl text-xl hover:bg-gray-800 transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-50 transition-colors"
            >
              ✉️ Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
