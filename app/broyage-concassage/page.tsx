import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broyage, Concassage & Criblage sur Chantier Somme (80) — Vilbert TP",
  description:
    "Vilbert TP propose le broyage, concassage et criblage de matériaux sur site : béton, gravats, enrobé. Valorisation in situ des déchets inertes. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["broyage concassage chantier Somme", "concassage gravats 80", "criblage matériaux Hauts-de-France", "recyclage inertes sur site", "valorisation déchets TP"],
};

const materiaux = [
  { mat: "Béton", sortie: "Granulats recyclés 0/31,5 — couche de forme, remblai, sous-couche voirie" },
  { mat: "Briques & maçonnerie", sortie: "Concassé recyclé — remblai, zones vertes" },
  { mat: "Enrobé fraisé", sortie: "Recyclé en couche de forme ou réincorporé dans nouvel enrobé" },
  { mat: "Roche calcaire", sortie: "Criblé 0/31,5 ou 20/80 — fondation de voirie, piste de chantier" },
  { mat: "Terre caillouteuse", sortie: "Criblée — amendement, remblai" },
  { mat: "Gravats mixtes", sortie: "Tri + concassage — valorisation maximale des fractions inertes" },
];

const avantages = [
  { icon: "💰", titre: "Économies sur le transport", desc: "Pas besoin d'évacuer les gravats en décharge et de réapprovisionner en matériaux neufs. Le traitement sur site réduit considérablement les coûts de transport." },
  { icon: "🌿", titre: "Impact environnemental réduit", desc: "Moins de camions sur les routes = moins de CO2. Les matériaux restent sur site ou à proximité. Conformité avec la hiérarchie de valorisation des déchets (loi AGEC)." },
  { icon: "♻️", titre: "Économie circulaire", desc: "Les granulats recyclés produits sur chantier remplacent les matériaux vierges pour la couche de forme, le remblai ou la piste de chantier." },
  { icon: "📋", titre: "Traçabilité complète", desc: "Bordereau de suivi des déchets (BSD), certificats d'acceptation. En lien avec Vilbert Recyclage pour les fractions non valorisables sur site." },
];

export default function BroyageConcassagePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">♻️ Recyclage in situ</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Économie circulaire</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Broyage,<br /><span className="text-[#f5b800]">Concassage</span><br />
                <span className="text-2xl text-orange-200">& Criblage sur chantier</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Transformez vos gravats et déchets inertes en granulats réutilisables <strong>directement sur votre chantier</strong>. Moins de camions, moins de coûts, moins d'impact environnemental.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/broyagesurchantier.jpg" alt="Broyage et concassage sur chantier — valorisation inertes Vilbert TP" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 rounded-xl p-4">
                  <p className="text-[#f5b800] font-black text-sm">Valorisation sur site des matériaux inertes</p>
                  <p className="text-gray-300 text-xs mt-1">Béton · Briques · Enrobé · Calcaire · Gravats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* AVANTAGES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Pourquoi broyer & concasser sur chantier ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map(a => (
              <div key={a.titre} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{a.titre}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Notre processus</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "1", t: "Évaluation", d: "Analyse des volumes et nature des matériaux. Estimation du gisement et des granulats produits." },
              { n: "2", t: "Installation", d: "Amenée et installation du concasseur ou cribleur mobile sur votre chantier." },
              { n: "3", t: "Traitement", d: "Broyage, concassage, criblage des inertes. Production de granulats calibrés 0/31,5 ou autre selon besoin." },
              { n: "4", t: "Réemploi", d: "Les granulats recyclés sont immédiatement utilisables en couche de forme, remblai ou piste de chantier." },
            ].map(s => (
              <div key={s.n} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="w-10 h-10 rounded-full bg-[#b5451b] text-white font-black text-lg flex items-center justify-center mx-auto mb-3">{s.n}</div>
                <h3 className="font-black text-gray-900 mb-2">{s.t}</h3>
                <p className="text-gray-500 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATÉRIAUX */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Matériaux traités & valorisation</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[#b5451b] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-black">Matériau entrant</th>
                  <th className="px-6 py-3 text-left font-black">Granulat produit & usage</th>
                </tr>
              </thead>
              <tbody>
                {materiaux.map((m, i) => (
                  <tr key={m.mat} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-bold text-gray-900">{m.mat}</td>
                    <td className="px-6 py-4 text-gray-600">{m.sortie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VILBERT RECYCLAGE */}
      <section className="py-12 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">Groupe Vilbert</div>
              <h2 className="text-2xl font-black mb-4">En synergie avec <span className="text-[#f5b800]">Vilbert Recyclage</span></h2>
              <p className="text-orange-100 mb-4">
                Pour les fractions qui ne peuvent pas être valorisées sur site, Vilbert Recyclage — filiale spécialisée du Groupe Vilbert — prend le relais. Les bennes sont amenées directement sur le chantier, les déchets sont collectés, triés et valorisés dans la filière adaptée.
              </p>
              <p className="text-orange-100">
                Résultat : <strong className="text-white">zéro déchet non tracé, valorisation maximale, coût logistique optimisé</strong>. Une approche unique en Hauts-de-France.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "0 km", l: "traitement déchets" }, { v: "> 90%", l: "taux valorisation" }, { v: "BSD", l: "traçabilité complète" }, { v: "Groupe", l: "intégration verticale" }].map(s => (
                <div key={s.l} className="bg-white/10 rounded-xl p-5 text-center border border-white/20">
                  <div className="text-2xl font-black text-[#f5b800]">{s.v}</div>
                  <div className="text-orange-200 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Besoin de concassage sur votre chantier ?</h2>
          <p className="text-gray-700 mb-8">Nous évaluons gratuitement votre gisement et vous proposons la solution la plus économique.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
