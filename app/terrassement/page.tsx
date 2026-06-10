import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terrassement Somme (80) | Bulldozer GPS, Pelles, Engins Propres — Vilbert TP",
  description:
    "Vilbert TP : terrassement professionnel en Hauts-de-France. Bulldozer GPS, mini-pelles, pelles hydrauliques. Certifié MASE · Charte CO2 · Agents N1/N2/CACES/AIPR. Devis gratuit 03 22 93 02 86.",
  keywords: ["terrassement Somme", "terrassement Amiens", "entreprise terrassement 80", "bulldozer GPS terrassement", "location engins avec chauffeur Somme"],
};

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général & décaissement",
    desc: "Décaissement en pleine masse, préparation de plateformes, fouilles générales pour bâtiments, entrepôts et zones industrielles. Capacité plurimilliers de m³ par chantier.",
    img: "/terrassementgrandchantier.jpg",
  },
  {
    icon: "📡",
    title: "Terrassement de précision — Bulldozer GPS",
    desc: "Notre bulldozer équipé d'un système de cartographie GPS garantit une précision centimétrique sur vos plateformes. Idéal pour routes, aérodromes, lotissements et grandes surfaces à profil exigeant.",
    img: null,
  },
  {
    icon: "⛏️",
    title: "Fouilles en tranchée & réseaux",
    desc: "Tranchées pour tous types de réseaux (assainissement, eau, électricité, gaz, fibre). Respect strict de la procédure DT-DICT. Agents AIPR certifiés.",
    img: null,
  },
  {
    icon: "🚛",
    title: "Évacuation terres & remblais",
    desc: "Transport par notre propre flotte de camions (signataire Charte Objectif CO2). Orientation vers filières de valorisation — les terres propres sont réutilisées. Zéro gaspillage.",
    img: null,
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Aménagement de cours de ferme, création de chemins agricoles, régalage de parcelles, drainage. Partenaire de confiance des exploitants agricoles de la Somme.",
    img: "/terrassementagricole.jpg",
  },
  {
    icon: "🏙️",
    title: "Terrassement en milieu urbain",
    desc: "Mini-pelles compactes pour interventions dans les jardins, ruelles, zones résidentielles. Respect des riverains, signalisation réglementaire, propreté de chantier garantie.",
    img: null,
  },
  {
    icon: "🪨",
    title: "Broyage & concassage sur chantier",
    desc: "Valorisation in situ des matériaux inertes : béton, gravats, matériaux de démolition broyés ou concassés et criblés. Les granulats recyclés sont réemployés directement sur le chantier.",
    img: null,
  },
  {
    icon: "🚜",
    title: "Location d'engins avec chauffeur",
    desc: "Pelles hydrauliques 5–20 t, mini-pelles, bulldozer GPS, niveleuses, tombereaux — avec opérateur qualifié CACES. Flotte régulièrement renouvelée, maintenance à jour.",
    img: "/locationenginavecchauffeur.jpg",
  },
];

const engins = [
  { nom: "Bulldozer GPS", usage: "Terrassement de précision, profilage grands espaces" },
  { nom: "Pelles hydrauliques 5–20 t", usage: "Fouilles, terrassement, chargement" },
  { nom: "Mini-pelles < 2 t", usage: "Espaces restreints, jardins, milieu urbain" },
  { nom: "Niveleuse", usage: "Profilage de plateforme, voirie" },
  { nom: "Tombereau articulé", usage: "Transport interne de matériaux sur chantier" },
  { nom: "Compacteurs", usage: "Compactage couches de forme et remblais" },
  { nom: "Camions benne", usage: "Évacuation terres, approvisionnement matériaux" },
];

const certifs = [
  { label: "MASE Hauts-de-France", desc: "Management SSE — sécurité, santé, environnement" },
  { label: "Charte Objectif CO2", desc: "Engagés sur la réduction des émissions CO2 de notre flotte poids lourds" },
  { label: "CACES", desc: "100 % de nos opérateurs sont titulaires du CACES correspondant à leur engin" },
  { label: "AIPR", desc: "Tous nos agents sont habilités AIPR — intervention en sécurité autour des réseaux" },
  { label: "N1 / N2", desc: "Habilitations pour intervention en espaces confinés et travaux souterrains" },
];

const faqs = [
  {
    q: "Combien coûte un terrassement dans la Somme ?",
    a: "Le prix d'un terrassement dépend du volume de terres à déplacer, de la nature du sol, de l'accessibilité et du traitement souhaité. Comptez généralement entre 15 et 40 €/m³ tout compris. Nous établissons un devis gratuit et détaillé sous 24h.",
  },
  {
    q: "Intervenez-vous sur les petits chantiers de particuliers ?",
    a: "Oui. Nos mini-pelles permettent d'intervenir dans tous les espaces, même très restreints. Nous réalisons aussi bien la fouille pour une piscine qu'un terrassement de grande envergure.",
  },
  {
    q: "Qu'est-ce que le système GPS sur votre bulldozer ?",
    a: "Notre bulldozer est équipé d'un système de guidage par cartographie GPS qui permet d'atteindre une précision de l'ordre du centimètre. Le topographe fournit un modèle numérique de terrain (MNT) et l'engin adapte sa lame automatiquement. Résultat : moins de passes, moins de consommation de carburant, planéité parfaite.",
  },
  {
    q: "Que faites-vous des terres excavées ?",
    a: "Nous optimisons la valorisation des matériaux : les terres propres sont orientées vers des filières de réemploi ou vers notre partenaire Vilbert Recyclage. Les matériaux inertes (béton, gravats) peuvent être concassés sur place et réemployés comme couche de forme. Rien n'est gaspillé.",
  },
  {
    q: "Vos engins sont-ils modernes ?",
    a: "Nous renouvelons régulièrement notre parc pour n'exploiter que des engins propres, moins consommateurs et moins polluants. Nous sommes signataires de la Charte Objectif CO2 pour notre flotte de transport.",
  },
];

export default function TerrassementPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">Travaux Publics</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Certifié MASE</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Charte CO2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Terrassement<br /><span className="text-[#f5b800]">Hauts-de-France</span><br />
                <span className="text-2xl md:text-3xl font-bold text-orange-200">Bulldozer GPS · Flotte propre · MASE</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Vilbert TP déplace chaque année <strong>plusieurs milliers de m³</strong> avec sa flotte propre d'engins régulièrement renouvelée. Précision millimétrique grâce à notre bulldozer GPS. Équipes certifiées N1/N2, CACES, AIPR.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">
                  📞 03 22 93 02 86
                </a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">
                  Devis gratuit →
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-orange-200">
                <span>✅ Devis sous 24h</span>
                <span>✅ Flotte propre renouvelée</span>
                <span>✅ Somme · Oise · Pas-de-Calais</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/terrassementgrandchantier.jpg" alt="Terrassement grand chantier Vilbert TP — pelle hydraulique Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[{ v: "+30 ans", l: "d'expérience" }, { v: "Bulldozer", l: "GPS précision" }, { v: "MASE", l: "certifié" }].map(s => (
                  <div key={s.l} className="bg-black/50 rounded-lg p-3 text-center">
                    <div className="text-lg font-black text-[#f5b800]">{s.v}</div>
                    <div className="text-white text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* BULLDOZER GPS — HIGHLIGHT */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                🛰️ Technologie GPS
              </div>
              <h2 className="text-3xl font-black text-white mb-4">
                Bulldozer GPS : la précision au <span className="text-[#f5b800]">centimètre</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Vilbert TP est équipé d'un <strong className="text-white">bulldozer avec système de cartographie GPS</strong> — une technologie encore rare parmi les entreprises de terrassement de la Somme. Le modèle numérique de terrain (MNT) est chargé directement dans l'engin, qui adapte sa lame de façon automatique et continue.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Précision centimétrique sur vos plateformes et profils",
                  "Moins de passes = moins de carburant consommé",
                  "Pas de sur-terrassement ni de reprise manuelle",
                  "Résultats vérifiables et traçables numériquement",
                  "Idéal : voiries, lotissements, aérodromes, zones industrielles",
                ].map(p => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    <span className="text-gray-300">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors">
                Demander un devis terrassement GPS →
              </Link>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-lg font-black text-[#f5b800] mb-6">Notre parc d'engins</h3>
              <div className="space-y-3">
                {engins.map(e => (
                  <div key={e.nom} className="flex items-start gap-3 py-2 border-b border-gray-700 last:border-0">
                    <span className="text-[#f5b800] font-black text-sm min-w-[160px]">{e.nom}</span>
                    <span className="text-gray-400 text-sm">{e.usage}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">Flotte régulièrement renouvelée · Engins de stage 5 · Maintenance à jour</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#b5451b] mb-3">Toutes nos prestations terrassement</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Du petit jardinage au grand chantier industriel, Vilbert TP dispose des engins et des compétences pour chaque projet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#b5451b] hover:shadow-lg transition-all group">
                {p.img && (
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 1024px) 25vw, 50vw" />
                  </div>
                )}
                {!p.img && (
                  <div className="h-12 bg-gradient-to-r from-[#b5451b] to-[#d4581f] flex items-center px-4">
                    <span className="text-2xl">{p.icon}</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-black text-gray-900 mb-2 group-hover:text-[#b5451b] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRASSEMENT AGRICOLE */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 380 }}>
              <Image src="/terrassementagricole.jpg" alt="Terrassement agricole Vilbert TP — cours de ferme et chemins ruraux Somme" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">🚜 Monde agricole</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Terrassement pour <span className="text-[#b5451b]">exploitations agricoles</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Partenaire de confiance des agriculteurs de la Somme et du Pas-de-Calais, Vilbert TP intervient sur tous les travaux de terrassement liés à l'exploitation agricole.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700 text-sm">
                {["Création et réfection de cours de ferme", "Aménagement de chemins agricoles et accès parcelles", "Régalage et nivellement de terrains", "Création de bassins de rétention et mares", "Terrassement pour bâtiments d'élevage ou de stockage", "Drainage de parcelles engorgées"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <a href="tel:0322930286" className="inline-block bg-[#b5451b] text-white font-bold px-6 py-3 rounded hover:bg-[#d4581f] transition-colors">
                📞 Parler à un expert →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS / CERTIFICATIONS */}
      <section className="py-14 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Nos engagements sur chaque chantier</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-orange-200 max-w-2xl mx-auto">Certifications, qualifications et charte environnementale : voici ce qui distingue Vilbert TP.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {certifs.map(c => (
              <div key={c.label} className="bg-white/10 rounded-xl p-5 border border-white/20">
                <p className="font-black text-[#f5b800] mb-1">{c.label}</p>
                <p className="text-orange-100 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            <h3 className="font-black text-[#f5b800] text-lg mb-3">🌿 Charte de chantier à faible impact environnemental</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-orange-100">
              {[
                "Flotte renouvelée régulièrement — engins de dernière génération moins polluants",
                "Signataires de la Charte Objectif CO2 pour notre transport (poids lourds)",
                "Valorisation maximale des terres et matériaux excavés",
                "Broyage/concassage in situ pour réemployer les inertes sur chantier",
                "Partenariat Vilbert Recyclage pour traitement à 0 km des déchets chantier",
                "Respect des zones écologiques sensibles et des cours d'eau",
              ].map(e => (
                <div key={e} className="flex items-start gap-2">
                  <span className="text-[#f5b800] mt-0.5">🍃</span>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORISATION DÉCHETS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">♻️ Économie circulaire</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Broyage, concassage & valorisation <span className="text-[#b5451b]">sur chantier</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Grâce à notre équipement de broyage et de concassage mobile, les matériaux inertes issus de vos démolitions (béton, briques, enrobé) sont <strong>traités directement sur site</strong> et transformés en granulats recyclés réutilisables comme couche de forme.
              </p>
              <p className="text-gray-600 mb-6">
                En synergie avec <strong>Vilbert Recyclage</strong>, filiale spécialisée, nous assurons la collecte et le traitement de l'ensemble des déchets de chantier. Aucun déchet ne part sans traçabilité ni valorisation optimisée.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { v: "0 km", l: "traitement déchets" },
                  { v: "> 90%", l: "taux valorisation" },
                  { v: "BSD", l: "traçabilité complète" },
                  { v: "Recyclage", l: "granulats réemployés" },
                ].map(s => (
                  <div key={s.l} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-xl font-black text-[#b5451b]">{s.v}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/demolition-valorisation" className="inline-block border-2 border-[#b5451b] text-[#b5451b] font-bold px-6 py-3 rounded hover:bg-[#b5451b] hover:text-white transition-colors">
                Démolition & valorisation →
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 380 }}>
              <Image src="/creationbassin.jpg" alt="Terrassement et création de bassin — Vilbert TP Hauts-de-France" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#b5451b] text-center mb-3">Questions fréquentes</h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet de terrassement ?</h2>
          <p className="text-gray-700 mb-8">Devis gratuit et détaillé sous 24h — nos équipes se déplacent sur votre terrain.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
