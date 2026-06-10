import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Engagements | MASE, SSE, Charte CO2, Chantier Écologique — Vilbert TP",
  description:
    "Vilbert TP s'engage pour la sécurité (MASE), l'environnement (Charte CO2, chantier faible impact) et la qualité (CACES, AIPR, N1/N2). Découvrez notre politique SSE en Hauts-de-France.",
  keywords: ["certification MASE Hauts-de-France", "politique SSE TP Somme", "charte objectif CO2", "chantier faible impact environnemental", "AIPR CACES N1 N2 Somme"],
};

const engagements = [
  {
    icon: "🛡️",
    titre: "Certification MASE",
    sous: "Manuel d'Amélioration Sécurité des Entreprises",
    desc: "Le MASE est la certification de référence en management SSE (Sécurité Santé Environnement) pour les entreprises intervenantes. Vilbert TP est certifié MASE Hauts-de-France. Cela signifie que nos processus de management des risques, nos procédures de formation et nos audits internes répondent aux exigences les plus strictes du secteur.",
    items: ["Analyse des risques avant chaque chantier (Plan de Prévention)", "Accueil sécurité systématique pour tout nouveau collaborateur", "Formation continue à la sécurité pour l'ensemble du personnel", "Audit externe indépendant tous les 3 ans par un organisme accrédité", "Retour d'expérience (REX) après chaque incident ou presque-accident"],
    img: "/Logo-Mase-Hdf-2019-baseline.jpg",
    isLogo: true,
  },
  {
    icon: "🌿",
    titre: "Charte de chantier à faible impact environnemental",
    sous: "Notre engagement pour des travaux plus propres",
    desc: "Vilbert TP a formalisé une charte de bonne conduite environnementale sur ses chantiers. Concrètement, cette charte encadre les pratiques quotidiennes de nos équipes pour réduire au maximum l'impact de nos activités sur les milieux naturels.",
    items: ["Flotte d'engins régulièrement renouvelée (Stage V/Euro 6)", "Pas de rejet de substances polluantes dans les sols ou cours d'eau", "Bâches de rétention obligatoires pour les vidanges en dehors des ateliers", "Tri et valorisation des déchets — zéro dépôt sauvage", "Concassage in situ des inertes pour éviter les transports inutiles", "Limitation des nuisances sonores et vibratoires pour les riverains"],
    img: "/chantier.jpg",
    isLogo: false,
  },
  {
    icon: "🚛",
    titre: "Signataires de la Charte Objectif CO2",
    sous: "Transport de fret — engagement de réduction des émissions",
    desc: "Vilbert TP est signataire de la Charte Objectif CO2, programme national du Ministère de la Transition Écologique. Nos camions benne font l'objet d'un suivi régulier de leur consommation et de leurs émissions, avec des objectifs chiffrés de réduction.",
    items: ["Suivi annuel de la consommation et des émissions CO2 de la flotte", "Plan d'actions : optimisation des tournées, éco-conduite, renouvellement des véhicules", "Rapportage annuel transmis au Ministère", "Engagement sur 3 ans renouvelable", "Formation à l'éco-conduite pour les chauffeurs"],
    img: null,
    isLogo: false,
  },
];

const qualifications = [
  { code: "CACES", label: "Certificat d'Aptitude à la Conduite En Sécurité", desc: "Obligatoire pour la conduite de tout engin de chantier. 100 % de nos opérateurs détiennent le CACES correspondant à leur engin (R482 catégories A, B1, C1, D, E)." },
  { code: "AIPR", label: "Autorisation d'Intervention à Proximité des Réseaux", desc: "Obligatoire depuis 2017 pour toute intervention à proximité de réseaux enterrés ou aériens. Tous nos agents et conducteurs de travaux sont titulaires de l'AIPR (Encadrant et/ou Opérateur)." },
  { code: "N1 / N2", label: "Habilitations espaces confinés", desc: "L'habilitation N1 (exécutant) et N2 (surveillant) permettent l'intervention en espaces confinés (regards, bassins, tranchées profondes). L'ensemble de nos agents est formé et habilité." },
  { code: "SST", label: "Sauveteur Secouriste du Travail", desc: "Nos chefs de chantier et conducteurs de travaux sont formés aux gestes de premiers secours SST, conformément aux exigences MASE." },
];

export default function EngagementsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🛡️ MASE · 🌿 CO2 · 👷 SSE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Nos <span className="text-[#f5b800]">engagements</span><br />
              <span className="text-2xl text-orange-200">Sécurité · Santé · Environnement</span>
            </h1>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl">
              Chez Vilbert TP, les engagements ne sont pas des slogans. Ils sont audités, certifiés, mesurés. Voici ce qui distingue notre entreprise dans le paysage des travaux publics en Hauts-de-France.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* ENGAGEMENTS */}
      {engagements.map((e, idx) => (
        <section key={e.titre} className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? "lg:[&>div:last-child]:order-first" : ""}`}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{e.icon}</span>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900">{e.titre}</h2>
                    <p className="text-[#b5451b] text-sm font-bold">{e.sous}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed">{e.desc}</p>
                <ul className="space-y-2">
                  {e.items.map(i => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      <span className="text-gray-700">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {e.isLogo && e.img ? (
                  <div className="bg-white rounded-2xl p-10 border-2 border-gray-100 shadow-lg flex flex-col items-center text-center">
                    <Image src={e.img} alt="Certification MASE Hauts-de-France — Vilbert TP" width={240} height={140} className="object-contain mb-6" />
                    <p className="text-gray-700 font-bold text-sm">Certification MASE Hauts-de-France</p>
                    <p className="text-gray-500 text-xs mt-1">Renouvelée par audit externe indépendant</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                      {[{ v: "3 ans", l: "cycle d'audit" }, { v: "100%", l: "personnel formé" }, { v: "SSE", l: "management intégré" }, { v: "REX", l: "retour expérience" }].map(s => (
                        <div key={s.l} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                          <div className="text-lg font-black text-[#b5451b]">{s.v}</div>
                          <div className="text-gray-500 text-xs">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : e.img ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 380 }}>
                    <Image src={e.img} alt={e.titre} fill className="object-cover" sizes="50vw" />
                  </div>
                ) : (
                  <div className="bg-gray-900 rounded-2xl p-8 text-white">
                    <h3 className="text-lg font-black text-[#f5b800] mb-4">Charte Objectif CO2 — nos chiffres</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[{ v: "Signataire", l: "depuis plusieurs années" }, { v: "Suivi annuel", l: "consommation flotte" }, { v: "Éco-conduite", l: "formation chauffeurs" }, { v: "Renouvellement", l: "régulier de la flotte" }].map(s => (
                        <div key={s.l} className="bg-white/10 rounded-xl p-4 border border-white/10">
                          <div className="font-black text-[#f5b800] text-sm">{s.v}</div>
                          <div className="text-gray-400 text-xs mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* QUALIFICATIONS */}
      <section className="py-16 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Qualifications & habilitations de nos équipes</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-orange-200 max-w-2xl mx-auto">
              100 % de nos agents disposent des habilitations requises pour leur activité. Pas de compromis sur les qualifications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map(q => (
              <div key={q.code} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5b800] text-gray-900 font-black text-xl px-3 py-1 rounded flex-shrink-0">{q.code}</div>
                  <div>
                    <h3 className="font-black text-white mb-1">{q.label}</h3>
                    <p className="text-orange-200 text-sm">{q.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINS PROPRES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">🚜 Flotte</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Engins et camions <span className="text-[#b5451b]">régulièrement renouvelés</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Vilbert TP s'est engagé dans une politique de renouvellement régulier de sa flotte. Pas d'engins vieillissants, bruyants et surconsommateurs — nous n'exploitons que des machines récentes, conformes aux dernières normes antipollution.
              </p>
              <div className="space-y-3">
                {[
                  { t: "Engins Stage V", d: "Normes antipollution les plus récentes pour les engins de chantier — réduction des particules et NOx" },
                  { t: "Poids lourds Euro 6", d: "Camions benne aux normes les plus strictes — signataires Charte Objectif CO2" },
                  { t: "Maintenance préventive", d: "Entretien régulier pour éviter les pannes et fuites de fluides sur chantier" },
                  { t: "GPS & télématique", d: "Suivi des consommations en temps réel — optimisation des tournées" },
                ].map(i => (
                  <div key={i.t} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <span className="text-[#f5b800] mt-0.5 font-black text-sm flex-shrink-0">✓</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{i.t}</p>
                      <p className="text-gray-500 text-xs">{i.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 420 }}>
              <Image src="/transfertdengins.jpg" alt="Transport d'engins de chantier Vilbert TP — flotte propre renouvelée" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Travailler avec une entreprise certifiée</h2>
          <p className="text-gray-700 mb-8">Choisir Vilbert TP, c'est choisir la sécurité, la traçabilité et le respect de l'environnement sur vos chantiers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis gratuit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
