import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accompagnement Projet & Maîtrise d'Œuvre TP Somme (80) — Vilbert TP",
  description:
    "Vilbert TP vous accompagne dans la création de vos plans, le planning de chantier et la coordination des études techniques avec ses partenaires. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["accompagnement projet TP Somme", "maîtrise oeuvre travaux publics Hauts-de-France", "coordination études techniques", "plans chantier terrassement 80", "planning travaux publics Picardie"],
};

const prestations = [
  {
    n: "1",
    icon: "📐",
    titre: "Création de plans",
    desc: "Vilbert TP peut réaliser les plans d'exécution de vos travaux en lien avec ses partenaires (géomètres, bureaux d'études). Plans de masse, plans de réseaux, coupes de voirie, carnets de détails — tout ce dont votre projet a besoin pour un démarrage en confiance.",
    items: ["Plans de masse et d'implantation", "Plans de réseaux VRD", "Coupes de voirie et profils en long", "Plans de terrassement (cubatures)", "Carnets de détails d'ouvrages"],
  },
  {
    n: "2",
    icon: "📅",
    titre: "Planning de chantier",
    desc: "Nous élaborons des plannings réalistes intégrant toutes les contraintes : phases de travaux, délais d'approvisionnement, fenêtres météo, prescriptions archéologiques, interfaces avec les autres corps d'état. Mise à jour en cours de chantier.",
    items: ["Planning Gantt détaillé par phase", "Chemin critique et jalons contractuels", "Coordination avec les autres entreprises", "Gestion des aléas et mise à jour hebdomadaire"],
  },
  {
    n: "3",
    icon: "🤝",
    titre: "Coordination des études techniques",
    desc: "Pour les projets complexes, Vilbert TP assure l'interface entre le maître d'ouvrage et les différents experts : géotechnicien, hydrogéologue, bureau d'études structure, géomètre-expert. Un seul interlocuteur pour toutes les études.",
    items: ["Interface maître d'ouvrage / bureaux d'études", "Coordination géotechnicien / terrassier", "Synthèse des études et vérification cohérence", "Suivi des missions de contrôle (Q+P)"],
  },
  {
    n: "4",
    icon: "📋",
    titre: "Assistance à la maîtrise d'ouvrage",
    desc: "Pour les projets où le maître d'ouvrage n'a pas les ressources internes, Vilbert TP peut assurer une mission d'assistance : rédaction du CCTP, analyse des offres, suivi de chantier, réceptions d'ouvrages.",
    items: ["Aide à la rédaction des pièces marché", "Analyse comparative des offres d'entreprises", "Suivi d'exécution et compte-rendus", "Réception des ouvrages et levée de réserves"],
  },
];

export default function AccompagnementProjetPage() {
  return (
    <>
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">📐 Accompagnement</span>
              <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Plans · Planning · Études</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Accompagnement<br /><span className="text-[#f5b800]">de projet</span><br />
              <span className="text-2xl text-orange-200">Plans · Planning · Coordination technique</span>
            </h1>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl">
              Vous avez un projet de terrassement, VRD ou voirie, mais pas les ressources internes pour le piloter ? Vilbert TP peut vous accompagner de la conception jusqu'à la réception — <strong>plans, planning, coordination des études techniques</strong> avec ses partenaires.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Discuter de votre projet →</Link>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* AVANTAGE INTERLOCUTEUR UNIQUE */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-5xl font-black text-[#f5b800] flex-shrink-0">1</div>
            <div>
              <h2 className="text-lg font-black text-white mb-2">Un seul interlocuteur du projet à la réalisation</h2>
              <p className="text-gray-400 text-sm">
                En confiant votre projet à Vilbert TP dès la phase de conception, vous bénéficiez d'une continuité entre l'étude et l'exécution. Pas de déperdition d'information entre le bureau d'études et le terrassier — c'est la même équipe qui conçoit et qui réalise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos prestations d'accompagnement</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prestations.map(p => (
              <div key={p.titre} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#b5451b] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#b5451b] text-white font-black flex items-center justify-center flex-shrink-0">{p.n}</div>
                  <div>
                    <div className="text-2xl mb-1">{p.icon}</div>
                    <h3 className="text-xl font-black text-gray-900">{p.titre}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <ul className="space-y-1">
                  {p.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] flex-shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="py-12 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black mb-2">Notre réseau de partenaires techniques</h2>
            <p className="text-orange-200 text-sm max-w-xl mx-auto">Vilbert TP s'appuie sur un réseau de partenaires qualifiés pour couvrir l'ensemble des études techniques nécessaires à vos projets.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Géomètres-experts", "Bureaux d'études génie civil", "Géotechniciens", "Hydrogéologues", "BET structure", "Topographes", "Contrôleurs techniques", "Coordinateurs SPS"].map(p => (
              <div key={p} className="bg-white/10 rounded-lg p-3 text-center border border-white/20 text-sm text-orange-100">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Pour quels porteurs de projet ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏛️", titre: "Collectivités", desc: "Commune, EPCI, syndicat sans service technique suffisant pour piloter un projet VRD ou voirie." },
              { icon: "🏗️", titre: "Promoteurs", desc: "Promoteur immobilier ou aménageur souhaitant externaliser le pilotage du lot VRD de son programme." },
              { icon: "🏭", titre: "Industriels", desc: "Maître d'ouvrage privé (entreprise, agriculteur, association) souhaitant faire réaliser des travaux sans gérer les interfaces techniques." },
              { icon: "🏠", titre: "Particuliers", desc: "Particulier souhaitant viabiliser un terrain ou réaliser des travaux importants sans avoir à coordonner eux-mêmes les intervenants." },
            ].map(c => (
              <div key={c.titre} className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{c.titre}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Discutons de votre projet</h2>
          <p className="text-gray-700 mb-8">Un premier échange téléphonique gratuit pour définir comment nous pouvons vous accompagner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Nous écrire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
