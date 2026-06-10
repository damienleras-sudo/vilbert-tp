import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voirie & Aménagement Somme (80) | Enrobé, Bordures, Pavage",
  description:
    "Vilbert TP réalise tous vos travaux de voirie : enrobé, bordures béton et granit, pavage, dallage, viabilisation de lotissements, signalisation. Devis gratuit — 03 22 93 02 86.",
};

const prestations = [
  { icon: "🛣️", title: "Viabilisation de lotissements", desc: "Création complète de voirie pour promoteurs, constructeurs et collectivités." },
  { icon: "🏙️", title: "Aménagements urbains", desc: "Trottoirs, places publiques, espaces de vie, pistes cyclables." },
  { icon: "🔲", title: "Bordures béton & granit", desc: "Pose et alignement précis, caniveaux, avaloirs, grilles." },
  { icon: "⬛", title: "Enrobé & revêtements", desc: "Couches de base, binder, couche de roulement. Tous types d'enrobés." },
  { icon: "🟫", title: "Pavage & dallage", desc: "Pavés béton ou granit, dalles béton, finitions soignées." },
  { icon: "⚠️", title: "Signalisation routière", desc: "Marquage au sol, pose de panneaux, sécurisation de chantier." },
];

export default function VoiriePage() {
  return (
    <>
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Travaux Publics
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Voirie & <span className="text-[#f5b800]">Aménagement</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mb-6">
            De la viabilisation de lotissements aux aménagements urbains, Vilbert TP prend en charge
            l'intégralité de vos projets de voirie en Hauts-de-France.
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Voirie clé en main pour <span className="text-[#b5451b]">collectivités & promoteurs</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Vilbert TP est un partenaire de référence des mairies et collectivités locales de
              la Somme, l'Oise et du Pas-de-Calais pour la création et réfection de voiries.
            </p>
            <p className="text-gray-600 mb-6">
              Nous intervenons sur l'ensemble du cycle : du terrassement préalable à la pose
              du revêtement définitif, en passant par les bordures et la signalisation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Particuliers", "Collectivités", "Promoteurs", "Entreprises"].map(c => (
                <div key={c} className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#f5b800]" />
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 400 }}>
            <Image
              src="/voirie.jpg"
              alt="Travaux de voirie Vilbert TP — enrobé et aménagements routiers"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos prestations voirie</h2>
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

      <section className="bg-[#b5451b] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Un projet de voirie ?</h2>
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
