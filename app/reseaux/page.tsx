import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Réseaux Enterrés Somme (80) | Assainissement, Eau, Électricité — Vilbert TP",
  description:
    "Vilbert TP pose tous vos réseaux enterrés : assainissement collectif, eau potable, électricité BT/HTA, gaz, fibre optique. Agents AIPR certifiés. Certifié MASE. ☎ 03 22 93 02 86.",
  keywords: ["pose réseaux enterrés Somme", "assainissement collectif Amiens", "tranchée réseaux 80", "AIPR Somme", "viabilisation réseaux Hauts-de-France"],
};

const reseauxHumides = [
  { titre: "Assainissement collectif", desc: "Pose de conduites PVC/PEHD DN150 à DN600, regards de visite et de branchement, branchements particuliers. Travaux pour collectivités et lotissements." },
  { titre: "Assainissement individuel", desc: "Fosse toutes eaux, micro-station, filtre compact, filtre drainant. Conformité aux DTU 64.1 et au SPANC." },
  { titre: "Eau potable (AEP)", desc: "Pose de canalisations PVC/PEHD, bouches à clé, ventouses, vannes de sectionnement, coffrets de comptage. Respect des normes sanitaires." },
  { titre: "Eaux pluviales", desc: "Collecteurs, bassins de rétention, noues, tranchées drainantes. Gestion des eaux pluviales à la source conforme PLU." },
];

const reseauxSecs = [
  { titre: "Électricité BT/HTA", desc: "Pose de câbles basse tension et haute tension en tranchée. Fourreaux, chambres de tirage, raccordement au réseau ENEDIS." },
  { titre: "Éclairage public", desc: "Réseaux d'alimentation des candélabres, pose de massifs enrobés, câblage et raccordement. Armoires de commande." },
  { titre: "Gaz (GRDF)", desc: "Pose de canalisations PEHD pour distribution de gaz. Robinets, regards, branchements individuels conformes au règlement technique." },
  { titre: "Télécommunications / Fibre", desc: "Fourreaux TPC annelés, chambres L1T, L2T, regards de tirage. Déploiement FTTH et génie civil télécom pour Orange, SFR, collectivités." },
];

const operateurs = [
  { name: "ENEDIS", desc: "Réseau électrique BT/HTA" },
  { name: "GRDF", desc: "Distribution de gaz naturel" },
  { name: "Orange", desc: "Fibre & télécom" },
  { name: "Véolia / SAUR", desc: "Eau potable & assainissement" },
  { name: "Collectivités", desc: "Mairies, EPCI, syndicats" },
  { name: "Promoteurs", desc: "Viabilisation de lotissements" },
];

const faqs = [
  {
    q: "Qu'est-ce que l'AIPR et pourquoi est-ce important ?",
    a: "L'Autorisation d'Intervention à Proximité des Réseaux est obligatoire depuis 2017 pour toute personne intervenant à proximité de réseaux enterrés. Tous les agents de Vilbert TP sont titulaires de l'AIPR, ce qui garantit une intervention en sécurité et évite les accidents sur les réseaux existants.",
  },
  {
    q: "Comment se passe la procédure DT-DICT avant les travaux ?",
    a: "Nous prenons en charge la procédure DT (Déclaration de projet de Travaux) et DICT (Déclaration d'Intention de Commencement de Travaux) via le guichet unique reseaux-et-canalisations.ineris.fr. Les réseaux sont ainsi localisés et sécurisés avant le début des travaux.",
  },
  {
    q: "Pouvez-vous réaliser la viabilisation complète d'un terrain à bâtir ?",
    a: "Oui, nous prenons en charge l'intégralité de la viabilisation : terrassement des tranchées, pose de tous les réseaux (eau, assainissement, électricité, gaz, télécom), raccordements aux réseaux publics et voirie d'accès.",
  },
  {
    q: "Intervenez-vous pour l'assainissement non collectif ?",
    a: "Oui. Nous réalisons les études de sol, les plans d'implantation et la pose complète de systèmes d'assainissement individuel : fosse toutes eaux, filière drainante, micro-station. Nous travaillons en lien avec le SPANC de votre commune.",
  },
];

export default function ReseauxPage() {
  return (
    <>
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/reseaux" />
      <SchemaBreadcrumb items={[{ name: "Réseaux VRD", href: "/reseaux" }]} />
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">Réseaux & VRD</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">AIPR Certifié</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">MASE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Réseaux<br /><span className="text-[#f5b800]">Enterrés</span><br />
                <span className="text-2xl text-orange-200">Humides · Secs · Viabilisation</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Vilbert TP pose l'ensemble des réseaux enterrés pour collectivités, promoteurs et particuliers. <strong>100 % de nos agents sont AIPR certifiés</strong> — la sécurité sur vos réseaux est non négociable.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-orange-200">
                <span>✅ Procédure DT-DICT prise en charge</span>
                <span>✅ Agents N1/N2/AIPR/CACES</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/vrd.jpg" alt="Pose de réseaux enterrés — tranchée VRD Vilbert TP Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[{ v: "AIPR", l: "tous agents" }, { v: "N1/N2", l: "habilités" }, { v: "DT-DICT", l: "prise en charge" }].map(s => (
                  <div key={s.l} className="bg-black/50 rounded-lg p-3 text-center">
                    <div className="text-sm font-black text-[#f5b800]">{s.v}</div>
                    <div className="text-white text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* AIPR HIGHLIGHT */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-5xl font-black text-[#f5b800] flex-shrink-0">AIPR</div>
            <div>
              <h2 className="text-lg font-black text-white mb-2">Autorisation d'Intervention à Proximité des Réseaux — obligatoire depuis 2017</h2>
              <p className="text-gray-400 text-sm">
                L'AIPR est exigée pour toute intervention à proximité de réseaux enterrés ou aériens (électricité, gaz, eau, télécom). <strong className="text-white">L'intégralité des agents et conducteurs de travaux Vilbert TP est titulaire de l'AIPR</strong>, garantissant une sécurité maximale sur chaque intervention. Aucune concession n'est faite sur ce point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSEAUX HUMIDES / SECS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Réseaux humides & réseaux secs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">💧</div>
                <h3 className="text-xl font-black text-gray-900">Réseaux humides</h3>
              </div>
              <div className="space-y-4">
                {reseauxHumides.map(r => (
                  <div key={r.titre} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h4 className="font-black text-[#b5451b] mb-1">{r.titre}</h4>
                    <p className="text-gray-600 text-sm">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">⚡</div>
                <h3 className="text-xl font-black text-gray-900">Réseaux secs</h3>
              </div>
              <div className="space-y-4">
                {reseauxSecs.map(r => (
                  <div key={r.titre} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h4 className="font-black text-[#b5451b] mb-1">{r.titre}</h4>
                    <p className="text-gray-600 text-sm">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO + ASSAINISSEMENT INDIVIDUEL */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">🔧 Particuliers</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Assainissement individuel : <span className="text-[#b5451b]">fosse & micro-station</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Hors zone d'assainissement collectif, chaque habitation doit disposer d'un système d'assainissement individuel conforme. Vilbert TP réalise l'intégralité du chantier — étude de sol, plans, terrassement, pose, raccordements et remise en état.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {[
                  "Fosse toutes eaux + filière drainante (sable, gravier)",
                  "Micro-station d'épuration (entretien simplifié)",
                  "Filtre compact pour terrains étroits",
                  "Vidange et réhabilitation de fosse existante",
                  "Conformité SPANC garantie",
                  "Liaison avec Vilbert Hydro pour le curage et l'entretien",
                ].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <Link href="/travaux-particuliers" className="inline-block border-2 border-[#b5451b] text-[#b5451b] font-bold px-6 py-3 rounded hover:bg-[#b5451b] hover:text-white transition-colors">
                Travaux pour particuliers →
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 380 }}>
              <Image src="/fosseseptique.jpg" alt="Pose de fosse septique — assainissement individuel Vilbert TP Somme" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* OPÉRATEURS */}
      <section className="py-14 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Nos donneurs d'ordres réseau</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-orange-200 max-w-xl mx-auto">Vilbert TP intervient pour le compte des principaux gestionnaires de réseaux en Hauts-de-France.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {operateurs.map(o => (
              <div key={o.name} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                <div className="font-black text-[#f5b800] text-lg">{o.name}</div>
                <div className="text-orange-200 text-xs mt-1">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#b5451b] text-center mb-3">Questions fréquentes</h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet de réseaux ou de viabilisation ?</h2>
          <p className="text-gray-700 mb-8">Étude et devis gratuits — nos agents AIPR se déplacent sur votre terrain.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
