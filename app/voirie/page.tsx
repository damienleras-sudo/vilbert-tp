import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voirie & Aménagement Somme (80) | Enrobé, Bordures, Pavage, VRD — Vilbert TP",
  description:
    "Vilbert TP réalise tous vos travaux de voirie : enrobé, bordures béton et granit, pavage, dallage, viabilisation de lotissements, signalisation. Certifié MASE. Somme, Oise, Pas-de-Calais. ☎ 03 22 93 02 86.",
  keywords: ["voirie Somme", "enrobé Amiens", "aménagement voirie 80", "viabilisation lotissement Somme", "bordures béton granit Hauts-de-France"],
};

const prestations = [
  {
    icon: "🏙️",
    title: "Viabilisation de lotissements",
    desc: "Création complète de voirie pour promoteurs, constructeurs et collectivités. Gestion de l'intégralité du VRD : terrassement, réseaux, voirie de desserte, trottoirs, signalisation.",
    img: "/voirie.jpg",
  },
  {
    icon: "🛣️",
    title: "Aménagements de centres-bourgs",
    desc: "Rénovation ou création de traversées de bourgs : chaussée, trottoirs, bordures, mobilier urbain, éclairage public. Respect des riverains, phasage adapté.",
    img: null,
  },
  {
    icon: "⬛",
    title: "Enrobé & revêtements bitumineux",
    desc: "Couche de base, binder 0/14, couche de roulement 0/10 : nous maîtrisons toutes les formulations d'enrobé. Application à chaud avec finisseur, compactage vibrant.",
    img: "/posedenrobes.jpg",
  },
  {
    icon: "🔲",
    title: "Bordures béton & granit",
    desc: "Pose et alignement de bordures T2, A2, P1/P2/P3. Caniveaux, avaloirs, grilles de récupération eaux pluviales. Travail soigné au cordeau.",
    img: null,
  },
  {
    icon: "🟫",
    title: "Pavage & dallage",
    desc: "Pavés béton ou granit naturel, dalles béton. Allées, places, espaces piétonniers. Nombreux coloris et formats disponibles. Finition au joint polymère.",
    img: "/posepave.jpg",
  },
  {
    icon: "⚠️",
    title: "Signalisation routière",
    desc: "Marquage au sol (lignes, passages piétons, flèches), pose de panneaux de signalisation, aménagement de zones 30, chicanes, plateaux ralentisseurs.",
    img: null,
  },
  {
    icon: "🅿️",
    title: "Parkings & aire de stationnement",
    desc: "Création et rénovation de parkings. Enrobé, béton, pavés drainants. Caniveaux, séparateurs, marquage. Conforme PMR.",
    img: null,
  },
  {
    icon: "🌿",
    title: "Béton désactivé & lavé",
    desc: "Finitions esthétiques pour allées, terrasses et espaces piétonniers. Granulats siliceux ou colorés, décoloration UV, joints de fractionnement.",
    img: "/travauxparticuliers.jpg",
  },
];

const clients = [
  { icon: "🏛️", label: "Collectivités & mairies", desc: "Réfection et création de voiries communales et intercommunales. Appels d'offres, marchés à bons de commande." },
  { icon: "🏗️", label: "Promoteurs & aménageurs", desc: "Viabilisation de lotissements clé en main. Interlocuteur unique pour l'ensemble du VRD." },
  { icon: "🏭", label: "Zones industrielles & tertiaires", desc: "Voirie de desserte, parkings, quais de chargement, accès poids lourds." },
  { icon: "🏠", label: "Particuliers", desc: "Allée d'accès, parking individuel, terrasse, abords de maison." },
];

const faqs = [
  {
    q: "Combien coûte la réfection d'une voirie communale ?",
    a: "Le prix dépend de la nature des travaux (fraisage + reprofilage ou reconstruction complète), de la surface et de la finition souhaitée. Nous répondons aux marchés publics et établissons des devis détaillés. Contactez-nous pour une étude gratuite.",
  },
  {
    q: "Quelle est la durée de vie d'un enrobé bien posé ?",
    a: "15 à 30 ans selon l'usage et l'entretien. La qualité de la couche de fondation (grave non traitée compactée) est le facteur clé. Nous ne faisons jamais l'impasse sur la préparation du support.",
  },
  {
    q: "Proposez-vous des revêtements drainants pour les zones inondables ?",
    a: "Oui. Des pavés béton à joints ouverts ou des enrobés drainants permettent l'infiltration des eaux pluviales directement dans le sol. Une solution conforme aux exigences de gestion des eaux pluviales à la source.",
  },
  {
    q: "Pouvez-vous gérer l'ensemble du VRD d'un lotissement ?",
    a: "Absolument. Vilbert TP assure la totalité des travaux VRD : terrassement, réseaux (assainissement, eau, électricité, télécom), voirie de desserte, trottoirs, bordures et signalisation. Un seul interlocuteur, une seule responsabilité.",
  },
];

export default function VoiriePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">Voirie & VRD</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Certifié MASE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Voirie &<br /><span className="text-[#f5b800]">Aménagement</span><br />
                <span className="text-2xl text-orange-200">Enrobé · Pavage · VRD complet</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                De la viabilisation de lotissements aux aménagements de centres-bourgs, Vilbert TP assure <strong>l'ensemble de vos travaux de voirie</strong> en Hauts-de-France avec un haut niveau d'exigence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/posedenrobes.jpg" alt="Pose d'enrobé bitumeux — chantier voirie Vilbert TP Somme" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#f5b800] text-gray-900 font-black px-4 py-2 rounded-lg text-sm">
                ✅ Maître d'œuvre unique — Terrassement + Réseaux + Voirie
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* VRD COMPLET */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">VRD complet : <span className="text-[#b5451b]">votre interlocuteur unique</span></h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plutôt que de coordonner plusieurs entreprises, faites confiance à Vilbert TP pour l'ensemble des Voiries et Réseaux Divers de votre projet — du premier coup de pelle à la signalisation finale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {["1. Terrassement", "2. Réseaux", "3. Voirie", "4. Signalisation"].map((e, i) => (
              <div key={e} className="bg-gray-50 rounded-xl p-5 text-center border-2 border-gray-100">
                <div className="text-3xl font-black text-[#b5451b] mb-1">{i + 1}</div>
                <div className="font-bold text-gray-900 text-sm">{e.split(". ")[1]}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map(c => (
              <div key={c.label} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#b5451b] transition-colors">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{c.label}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos prestations voirie</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#b5451b] hover:shadow-lg transition-all group">
                {p.img && (
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                  </div>
                )}
                {!p.img && <div className="h-2 bg-[#b5451b]" />}
                <div className="p-5">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <h3 className="font-black text-gray-900 mb-2 group-hover:text-[#b5451b] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-12 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-black mb-4">Charte de chantier à faible impact environnemental</h2>
              <p className="text-orange-100 mb-4">Sur chaque chantier de voirie, Vilbert TP applique sa charte environnementale :</p>
              <ul className="space-y-2 text-orange-100 text-sm">
                {["Engins régulièrement renouvelés — Stage V antipollution", "Camions signataires Charte Objectif CO2 (réduction émissions)", "Fraisats d'enrobé recyclés via Vilbert Recyclage", "Zéro rejet dans les cours d'eau — bâches de rétention", "Tri et valorisation de l'ensemble des déchets de chantier"].map(e => (
                  <li key={e} className="flex items-center gap-2"><span className="text-[#f5b800]">🍃</span>{e}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "MASE", l: "Certification SSE" }, { v: "CO2", l: "Charte Objectif" }, { v: "CACES", l: "Opérateurs certifiés" }, { v: "AIPR", l: "Agents habilités" }].map(s => (
                <div key={s.l} className="bg-white/10 rounded-xl p-5 text-center border border-white/20">
                  <div className="text-2xl font-black text-[#f5b800]">{s.v}</div>
                  <div className="text-orange-200 text-xs mt-1">{s.l}</div>
                </div>
              ))}
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

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet de voirie ou d'aménagement ?</h2>
          <p className="text-gray-700 mb-8">Collectivité, promoteur ou particulier — nous étudions toutes les demandes. Devis gratuit sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
