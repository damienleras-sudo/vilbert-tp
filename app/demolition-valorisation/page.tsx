import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Démolition & Valorisation Déchets Somme (80) — Vilbert TP & Vilbert Recyclage",
  description:
    "Vilbert TP réalise vos démolitions et valorise l'ensemble des déchets via Vilbert Recyclage. Béton, briques, ferrailles, bois — valorisation maximale. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["démolition Somme", "démolition bâtiment 80", "valorisation déchets chantier Hauts-de-France", "recyclage démolition Amiens"],
};

const fluxDechets = [
  { flux: "Béton armé", traitement: "Concassage → granulats recyclés couche de forme", taux: "> 98%" },
  { flux: "Briques & maçonnerie", traitement: "Concassage → remblai, zones vertes", taux: "> 95%" },
  { flux: "Ferrailles & aciers", traitement: "Ferrailleur agréé → recyclage matière", taux: "100%" },
  { flux: "Bois de structure", traitement: "Plateforme bois → panneau / énergie", taux: "> 90%" },
  { flux: "Plâtre / BA13", traitement: "Filière plâtre recyclé", taux: "> 80%" },
  { flux: "Enrobé", traitement: "Fraisage + recyclage pour couche de base", taux: "> 95%" },
  { flux: "Menuiseries (PVC / Alu)", traitement: "Recyclage matière par filière dédiée", taux: "> 85%" },
  { flux: "DIS (amiante, etc.)", traitement: "Opérateur certifié — évacuation sécurisée", taux: "100%" },
];

const etapes = [
  { n: "1", t: "Audit préalable", d: "Diagnostic déchets pré-démolition (obligatoire > 1 000 m²). Identification des matériaux, estimation des volumes, détection des polluants (amiante, plomb)." },
  { n: "2", t: "Plan de gestion", d: "Élaboration du plan de gestion des déchets : filières pour chaque flux, objectifs de valorisation, borderaux BSD." },
  { n: "3", t: "Déconstruction sélective", d: "Démolition méthodique permettant la séparation des flux à la source. Plus de séparation = plus de valorisation." },
  { n: "4", t: "Valorisation in situ", d: "Concassage des inertes sur place avec notre matériel. Granulats recyclés réemployés immédiatement sur le chantier." },
  { n: "5", t: "Évacuation Vilbert Recyclage", d: "Pour les flux non valorisables sur site, nos bennes collectent et transfèrent vers les plateformes de traitement." },
  { n: "6", t: "Traçabilité & reporting", d: "Remise d'un rapport de gestion des déchets avec tonnages valorisés, filières utilisées et BSD." },
];

export default function DemolitionValorisationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🏚️ Démolition</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">♻️ Valorisation</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Groupe Vilbert</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Démolition &<br /><span className="text-[#f5b800]">Valorisation</span><br />
                <span className="text-2xl text-orange-200">Zéro déchet sans traçabilité</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Vilbert TP démantèle, Vilbert Recyclage valorise. <strong>Une offre intégrée au sein du Groupe Vilbert</strong> pour maximiser le taux de valorisation de vos démolitions et minimiser le coût de traitement des déchets.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/demolition.jpg" alt="Démolition et valorisation des déchets — Vilbert TP Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 rounded-xl p-4 grid grid-cols-3 gap-3">
                  {[{ v: "> 90%", l: "valorisation" }, { v: "BSD", l: "traçabilité" }, { v: "0 km", l: "traitement" }].map(s => (
                    <div key={s.l} className="text-center">
                      <div className="text-[#f5b800] font-black text-sm">{s.v}</div>
                      <div className="text-gray-300 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* SYNERGIE GROUPE */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { nom: "Vilbert TP", desc: "Démolition, terrassement, concassage in situ", role: "Chantier" },
              { nom: "Vilbert Recyclage", desc: "Collecte des bennes, tri, valorisation par filière", role: "Traitement" },
              { nom: "Groupe Vilbert", desc: "Un seul groupe, une offre complète, une traçabilité totale", role: "Synergie" },
            ].map(s => (
              <div key={s.nom} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-xs text-[#f5b800] font-bold uppercase mb-2">{s.role}</div>
                <div className="text-xl font-black text-white mb-2">{s.nom}</div>
                <div className="text-gray-400 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Notre processus démolition + valorisation</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">De l'audit pré-démolition au reporting final, chaque étape est documentée pour garantir la traçabilité réglementaire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etapes.map(e => (
              <div key={e.n} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#b5451b] text-white font-black text-sm flex items-center justify-center flex-shrink-0">{e.n}</div>
                  <h3 className="font-black text-gray-900">{e.t}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLUX DÉCHETS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Flux de déchets & taux de valorisation</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[#b5451b] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-black">Flux de déchet</th>
                  <th className="px-6 py-3 text-left font-black">Mode de traitement</th>
                  <th className="px-6 py-3 text-center font-black">Taux valorisation</th>
                </tr>
              </thead>
              <tbody>
                {fluxDechets.map((f, i) => (
                  <tr key={f.flux} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-3 font-bold text-gray-900">{f.flux}</td>
                    <td className="px-6 py-3 text-gray-600">{f.traitement}</td>
                    <td className="px-6 py-3 text-center">
                      <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs">{f.taux}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RÉGLEMENTATION */}
      <section className="py-12 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black mb-4">🏛️ Conformité réglementaire garantie</h2>
              <p className="text-orange-100 mb-4">
                La réglementation sur les déchets de chantier s'est fortement renforcée (loi AGEC 2020, décret 5 flux). Vilbert TP et Vilbert Recyclage vous assurent une conformité totale.
              </p>
              <ul className="space-y-2 text-orange-100 text-sm">
                {["Diagnostic pré-démolition obligatoire", "Bordereau de suivi des déchets (BSD) pour chaque flux", "Registre déchets à jour", "Filières agréées conformes au principe de hiérarchie", "Attestation de valorisation fournie en fin de chantier"].map(r => (
                  <li key={r} className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span>{r}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-black text-[#f5b800] mb-4">Vous êtes concerné si :</h3>
              <ul className="space-y-2 text-orange-100 text-sm">
                {["Vous demolissez un bâtiment (total ou partiel)", "Vous rénovez et générez plus de 1 tonne de déchets", "Vous êtes maître d'ouvrage public (obligations renforcées)", "Vous souhaitez valoriser vos déchets plutôt que les enfouir"].map(r => (
                  <li key={r} className="flex items-center gap-2"><span className="text-[#f5b800]">→</span>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet de démolition ou de valorisation ?</h2>
          <p className="text-gray-700 mb-8">Audit gratuit — nous chiffrons le coût de la démolition ET l'économie sur les déchets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
