import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réseaux Humides & Secs Somme (80) | Assainissement, Eau, Électricité",
  description:
    "Vilbert TP pose tous types de réseaux : assainissement EU/EP, eau potable, gaz, électricité, télécom. Raccordements ENEDIS, GRDF, Orange, Véolia. Devis gratuit — 03 22 93 02 86.",
};

const reseauxHumides = [
  { label: "Assainissement eaux usées (EU)", desc: "Collecteurs, regards, boîtes de branchement." },
  { label: "Assainissement eaux pluviales (EP)", desc: "Réseaux séparatifs, noues, bassins de rétention." },
  { label: "Conduites PVC, grès, béton, fonte", desc: "Tous diamètres, toutes profondeurs." },
  { label: "Eau potable (AEP)", desc: "Raccordements Véolia et régies communales." },
];

const reseauxSecs = [
  { label: "Électricité (ENEDIS)", desc: "Génie civil, tranchées, fourreaux pour réseaux souterrains." },
  { label: "Gaz (GRDF)", desc: "Pose de fourreaux polyéthylène, raccordements." },
  { label: "Télécom / Fibre (Orange)", desc: "Génie civil fibre optique, chambres de tirage." },
  { label: "Éclairage public", desc: "Pose de câbles, massifs d'ancrage, candélabres." },
];

export default function ReseauxPage() {
  return (
    <>
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Travaux Publics
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Pose de <span className="text-[#f5b800]">Réseaux</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mb-6">
            Réseaux humides (assainissement, eau potable) et secs (électricité, gaz, télécom) —
            Vilbert TP maîtrise l'ensemble des raccordements pour opérateurs et collectivités.
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Réseaux humides */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#b5451b] px-6 py-4">
                <h2 className="text-xl font-black text-white">💧 Réseaux Humides</h2>
                <p className="text-orange-200 text-sm">Assainissement · Eau potable</p>
              </div>
              <div className="p-6 space-y-4">
                {reseauxHumides.map((r) => (
                  <div key={r.label} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{r.label}</p>
                      <p className="text-gray-500 text-xs">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux secs */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4">
                <h2 className="text-xl font-black text-white">⚡ Réseaux Secs</h2>
                <p className="text-gray-400 text-sm">Électricité · Gaz · Télécom</p>
              </div>
              <div className="p-6 space-y-4">
                {reseauxSecs.map((r) => (
                  <div key={r.label} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{r.label}</p>
                      <p className="text-gray-500 text-xs">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Opérateurs */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Nos partenaires & opérateurs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "ENEDIS", desc: "Électricité distribution", icon: "⚡" },
                { name: "GRDF", desc: "Gaz réseau distribution", icon: "🔥" },
                { name: "Orange Télécom", desc: "Fibre optique & téléphone", icon: "📡" },
                { name: "Véolia", desc: "Eau potable", icon: "💧" },
              ].map((op) => (
                <div key={op.name} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2">{op.icon}</div>
                  <p className="font-black text-gray-900">{op.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{op.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#b5451b] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Un projet de réseaux ?</h2>
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
