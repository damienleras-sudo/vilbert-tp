import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terrassement Somme (80) | Fouilles, Remblais, Évacuation Terres",
  description:
    "Vilbert TP assure tous vos travaux de terrassement en Hauts-de-France : fouilles, décaissement, remblais, évacuation de terres. Flotte propre d'engins. Devis gratuit — 03 22 93 02 86.",
};

const prestations = [
  {
    icon: "⛏️",
    title: "Terrassement général",
    desc: "Décaissement, fouilles en pleine masse ou en tranchée. Préparation de terrain pour construction, voirie, réseaux.",
  },
  {
    icon: "🚛",
    title: "Évacuation terres & gravats",
    desc: "Transport vers filières agréées. Plusieurs milliers de m³ traités chaque année.",
  },
  {
    icon: "🔩",
    title: "Remblaiement & compactage",
    desc: "Apport de matériaux sélectionnés, compactage par couches contrôlées.",
  },
  {
    icon: "🏙️",
    title: "Terrassement urbain",
    desc: "Interventions en milieu contraint (centres-bourgs, zones résidentielles) avec mini-pelles adaptées.",
  },
  {
    icon: "🚜",
    title: "Location d'engins avec chauffeur",
    desc: "Pelles hydrauliques, mini-pelles, niveleuses — notre flotte propre à votre service.",
  },
  {
    icon: "📐",
    title: "Piquetage & détection de réseaux",
    desc: "Repérage de réseaux existants avant toute intervention. Respect de la réglementation DT-DICT.",
  },
];

export default function TerrassementPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Travaux Publics
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Terrassement <span className="text-[#f5b800]">Hauts-de-France</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mb-6">
            Vilbert TP déplace chaque année <strong>plusieurs milliers de m³ de matériaux</strong> avec sa flotte propre d'engins.
            Terrassement urbain, fouilles, remblais — intervention sur tout le nord de la France.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded text-lg hover:bg-[#ffd44d] transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">
              Devis gratuit →
            </Link>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* PHOTO + INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Une flotte propre pour tous vos <span className="text-[#b5451b]">chantiers de terrassement</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Grâce à notre parc d'engins en propriété (pelles hydrauliques, mini-pelles, niveleuses),
              nous garantissons une autonomie totale et une réactivité sans intermédiaire.
            </p>
            <p className="text-gray-600 mb-6">
              Que ce soit pour un particulier souhaitant préparer son terrain ou une collectivité
              lançant un programme de construction, Vilbert TP adapte ses ressources à votre chantier.
            </p>
            <ul className="space-y-3">
              {["Pelles 5 à 20 tonnes", "Mini-pelles pour accès restreints", "Niveleuses pour grandes surfaces", "Camions benne pour évacuation"].map(e => (
                <li key={e} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5b800] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-semibold">{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 400 }}>
            <Image
              src="/terrassement.jpg"
              alt="Terrassement Vilbert TP — pelle mécanique sur chantier Hauts-de-France"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos prestations terrassement</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#b5451b] transition-colors">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b5451b] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Un projet de terrassement ?
          </h2>
          <p className="text-orange-200 mb-6">Contactez-nous pour un devis gratuit et rapide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-xl text-xl hover:bg-[#ffd44d] transition-colors">
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
