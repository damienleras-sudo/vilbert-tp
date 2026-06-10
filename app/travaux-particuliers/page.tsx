import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travaux Particuliers Somme (80) | Allée Enrobé, Clôture, Assainissement",
  description:
    "Vilbert TP réalise tous vos travaux extérieurs : allée enrobée, terrasse béton, pose de pavés, clôtures, assainissement individuel, drainage. Devis gratuit — 03 22 93 02 86.",
};

const categories = [
  {
    id: "amenagements",
    icon: "🛤️",
    title: "Aménagements extérieurs",
    prestations: [
      { label: "Allée en enrobé bitumeux", desc: "Création ou réfection. Durable, propre, résistant au gel." },
      { label: "Terrasse béton lavé ou désactivé", desc: "Nombreuses finitions et teintes disponibles." },
      { label: "Pose de pavés", desc: "Pavés béton ou granit, allées et accès." },
      { label: "Bordurage", desc: "Pose de bordures béton pour délimiter vos aménagements." },
      { label: "Enrochement", desc: "Rochers décoratifs ou de soutènement, sur mesure." },
    ],
  },
  {
    id: "clotures",
    icon: "🪨",
    title: "Clôtures & Démolition",
    prestations: [
      { label: "Installation de clôtures", desc: "Grillages, panneaux rigides, clôtures en bois ou aluminium." },
      { label: "Portails & portillons", desc: "Pose et installation de portails coulissants ou battants." },
      { label: "Démolition de structures", desc: "Murs, garages, annexes — évacuation comprise." },
      { label: "Évacuation de souches", desc: "Dessouchage mécanique et évacuation." },
    ],
  },
  {
    id: "assainissement",
    icon: "🚿",
    title: "Assainissement individuel",
    prestations: [
      { label: "Fosse septique toutes eaux", desc: "Pose complète, terrassement et raccordements." },
      { label: "Puits filtrant & tranchées drainantes", desc: "Épuration naturelle, adapté aux terrains filtrants." },
      { label: "Raccordement tout-à-l'égout", desc: "Branchement au réseau public d'assainissement collectif." },
      { label: "Contrôle et conformité", desc: "Mise en conformité des installations existantes." },
    ],
  },
  {
    id: "terrassement",
    icon: "🏗️",
    title: "Terrassement & Drainage",
    prestations: [
      { label: "Nivelage & déblaiement", desc: "Préparation de terrain, mise à niveau." },
      { label: "Remblaiement", desc: "Apport de terre végétale ou de matériaux sélectionnés." },
      { label: "Drainage & eaux pluviales", desc: "Tranchées drainantes, noues, collecteurs enterrés." },
      { label: "Piquetage & détection réseaux", desc: "Avant toute intervention, repérage obligatoire des réseaux." },
    ],
  },
];

export default function TravauxParticuliersPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Particuliers
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Travaux <span className="text-[#f5b800]">Particuliers</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mb-6">
            Allée en enrobé, terrasse, clôture, assainissement individuel…
            Vilbert TP vous accompagne dans tous vos projets d'aménagement extérieur avec
            <strong> tarifs adaptés et délais respectés</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded text-lg hover:bg-[#ffd44d] transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">
              Devis gratuit →
            </Link>
          </div>
          <p className="text-orange-300 text-sm mt-4">
            ✅ Devis gratuit · ⏱️ Réponse rapide · 🏡 Chantier propre et soigné
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "💶", title: "Tarifs adaptés", desc: "Prix transparents, sans mauvaise surprise. Devis détaillé gratuit." },
              { icon: "📅", title: "Délais respectés", desc: "Planification sérieuse et respect des engagements." },
              { icon: "🤝", title: "Entreprise familiale", desc: "Contact direct avec notre équipe. Proximité et confiance." },
            ].map((a) => (
              <div key={a.title} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <h3 className="font-black text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#b5451b] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-black text-white">{cat.title}</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.prestations.map((p) => (
                    <div key={p.label} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{p.label}</p>
                        <p className="text-gray-500 text-xs">{p.desc}</p>
                      </div>
                    </div>
                  ))}
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
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-gray-700 mb-6">Appelez-nous ou envoyez un message — réponse rapide garantie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl text-xl hover:bg-gray-800 transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-50 transition-colors">
              ✉️ Devis en ligne
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
