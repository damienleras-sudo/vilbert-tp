import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balayage de Route & Nettoyage de Voirie Somme (80) — Vilbert TP",
  description:
    "Vilbert TP propose le balayage mécanisé de routes, voiries et parkings avec son camion balayeur. Chantiers TP, communes, zones industrielles. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["balayage route Somme", "nettoyage voirie Amiens", "camion balayeur 80", "balayage chantier Hauts-de-France", "nettoyage parking voirie"],
};

const usages = [
  { icon: "🏗️", titre: "Fin de chantier TP", desc: "Après terrassement, pose de réseaux ou travaux de voirie, notre balayeur nettoie les voiries et chaussées pour une remise en état conforme aux exigences du maître d'ouvrage." },
  { icon: "🏛️", titre: "Communes & collectivités", desc: "Balayage périodique des voiries communales, places de marchés, parking et chemins. Intervention programmée ou ponctuelle selon vos besoins." },
  { icon: "🏭", titre: "Zones industrielles & tertiaires", desc: "Entretien des allées, parkings et voiries de zones d'activité. Enlèvement des graviers, feuilles mortes, sables et dépôts divers." },
  { icon: "🛣️", titre: "Voiries départementales & nationales", desc: "Nettoyage des accotements, cunettes et chaussées en lien avec les travaux d'entretien routier. Intervention rapide sur réquisition." },
  { icon: "🏟️", titre: "Événements & manifestations", desc: "Nettoyage avant et après manifestations sportives, foires, marchés de Noël, etc." },
  { icon: "🌿", titre: "Ramassage de boues & graviers", desc: "Collecte des dépôts de boue après intempéries, ramassage des graviers de chaussées endommagées." },
];

const avantages = [
  { v: "Rapide", d: "Intervention sur toute la zone Hauts-de-France" },
  { v: "Eau claire", d: "Aspiration et lavage en simultané" },
  { v: "Traçable", d: "Rapport d'intervention sur demande" },
  { v: "Propre", d: "Collecte et évacuation des déchets ramassés" },
];

export default function BalayageRoutePage() {
  return (
    <>
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🧹 Balayage</span>
              <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Camion balayeur</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Balayage de route<br /><span className="text-[#f5b800]">& nettoyage voirie</span>
            </h1>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl">
              Avec son camion balayeur aspirateur, Vilbert TP assure le nettoyage mécanique de vos voiries, parkings et chantiers. Intervention rapide, travail propre, déchets évacués.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Demander une intervention →</Link>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {avantages.map(a => (
              <div key={a.v} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <div className="font-black text-[#f5b800] text-lg">{a.v}</div>
                <div className="text-gray-400 text-xs mt-1">{a.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Pour quels chantiers ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">Vilbert TP intervient pour tous les acteurs qui ont besoin d'une voirie propre et entretenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usages.map(u => (
              <div key={u.titre} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#b5451b] transition-colors">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{u.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Comment fonctionne notre camion balayeur ?</h2>
            <p className="text-gray-600 mb-4">
              Notre camion balayeur aspirateur combine balayage mécanique par brosses rotatives et aspiration puissante. Les déchets sont collectés dans une cuve étanche, puis évacués vers une filière de traitement adaptée.
            </p>
            <p className="text-gray-600 mb-4">
              Pour les voiries très encrassées ou après des travaux de terrassement générant beaucoup de boue, nous disposons également d'un système de lavage par jets d'eau pour un résultat parfait.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {["Brosses rotatives", "Aspiration haute pression", "Cuve étanche", "Recyclage des eaux"].map(c => (
                <div key={c} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 text-sm font-semibold text-gray-700">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Besoin d'un balayage de voirie ?</h2>
          <p className="text-gray-700 mb-8">Interventions ponctuelles ou récurrentes — devis gratuit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
