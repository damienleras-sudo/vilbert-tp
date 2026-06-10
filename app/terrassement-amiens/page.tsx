import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Amiens (80) | Entreprise TP — Vilbert TP",
  description:
    "Vilbert TP réalise vos terrassements à Amiens et dans l'agglomération amiénoise : fouilles, remblais, voirie, réseaux. Certifié MASE. ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Amiens",
    "entreprise terrassement 80",
    "travaux publics Amiens",
    "VRD Amiens",
    "voirie Amiens Métropole",
    "terrassement Somme",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-amiens",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il rapidement sur Amiens et l'agglomération amiénoise ?",
    a: "Oui. Basés à Talmas (80260), à seulement 20 minutes au nord d'Amiens, nous intervenons sur l'ensemble de l'agglomération amiénoise sous 24 à 48 h pour les urgences. Nos équipes et engins sont mobilisables rapidement sur Amiens Métropole, qu'il s'agisse d'un chantier à Etouvie, Rivery, Glisy ou en centre-ville.",
  },
  {
    q: "Quels types de terrassement réalisez-vous à Amiens ?",
    a: "Nous réalisons tous types de terrassements : fouilles pour fondations, décaissements en pleine masse pour ZAC et lotissements, tranchées VRD (eau, assainissement, électricité, fibre), plateformes pour bâtiments industriels et logistiques, et terrassements en milieu urbain avec mini-pelles pour les interventions en zone dense.",
  },
  {
    q: "Intervenez-vous sur les zones d'activité et ZAC d'Amiens ?",
    a: "Absolument. Nous sommes régulièrement présents sur les zones d'activité de l'agglomération amiénoise : ZI Etouvie, ZA Nord, ZAC de Glisy, ZA du Val de Noye… Notre flotte d'engins (pelles 5 à 40 t, bulldozer GPS, camions) est dimensionnée pour les grands chantiers tertiaires et industriels.",
  },
  {
    q: "Comment obtenir un devis pour un terrassement à Amiens ?",
    a: "Appelez-nous au 03 22 93 02 86 ou envoyez un email à tp@groupe-vilbert.fr. Nous planifions une visite du terrain sous 48 h et vous remettons un devis gratuit et détaillé. Nous intervenons sur Amiens, Amiens Nord, Amiens Sud, et tous les communes de l'agglomération.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général & décaissement",
    desc: "Décaissement en pleine masse pour bâtiments, entrepôts, ZAC et lotissements. Capacité de plusieurs milliers de m³ par chantier grâce à notre flotte propre d'engins.",
  },
  {
    icon: "📡",
    title: "Terrassement de précision — Bulldozer GPS",
    desc: "Notre bulldozer équipé GPS garantit une précision centimétrique pour vos plateformes de zones d'activité, voiries et grands espaces.",
  },
  {
    icon: "⛏️",
    title: "Fouilles en tranchée & réseaux VRD",
    desc: "Tranchées pour assainissement, eau potable, électricité, gaz, fibre optique. Procédure DT-DICT systématique. Agents AIPR certifiés.",
  },
  {
    icon: "🚛",
    title: "Évacuation & remblaiement",
    desc: "Transport par notre propre flotte (Charte Objectif CO2). Filières de valorisation agréées. Remblaiement par couches compactées mécaniquement.",
  },
  {
    icon: "🏙️",
    title: "Terrassement en milieu urbain",
    desc: "Mini-pelles compactes pour interventions dans les quartiers denses, jardins, ruelles, zones résidentielles. Signalisation réglementaire, propreté garantie.",
  },
  {
    icon: "🛣️",
    title: "Voirie & VRD",
    desc: "Création et réfection de voiries, poses d'enrobé, pavage, trottoirs, caniveaux, réseaux EP/EU. Intervenant référent d'Amiens Métropole.",
  },
];

export default function TerrassementAmiensPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Amiens", href: "/terrassement-amiens" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-amiens" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/terrassementgrandchantier.jpg"
            alt="Terrassement Amiens — pelle hydraulique Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Amiens (80)
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Entreprise de terrassement<br />
            <span className="text-[#f5b800]">à Amiens et l&apos;agglomération</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP intervient sur tous vos chantiers de terrassement à Amiens, Amiens Métropole
            et dans toute la Somme. Fouilles, remblais, VRD, voirie — avec pelles jusqu&apos;à 40 t
            et bulldozer GPS. Certifié MASE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0322930286"
              className="inline-flex items-center gap-2 bg-[#b5451b] hover:bg-[#9e3a16] text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f5b800] hover:bg-[#dba400] text-[#1a1a1a] font-bold px-6 py-3 rounded-lg text-lg transition-colors"
            >
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO CONTEXTUELLE */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre partenaire terrassement à Amiens
            </h2>
            <p className="text-gray-700 mb-4">
              Amiens, préfecture de la Somme et capitale des Hauts-de-France, est l&apos;un des
              pôles urbains les plus dynamiques de la région. Son développement se traduit par
              de nombreux projets de construction : ZAC, lotissements résidentiels, bâtiments
              tertiaires et logistiques, rénovation urbaine de quartiers entiers.
            </p>
            <p className="text-gray-700 mb-4">
              Vilbert TP accompagne promoteurs, entreprises de construction, collectivités et
              particuliers dans tous leurs travaux de terrassement sur Amiens et
              l&apos;agglomération amiénoise. Nos équipes interviennent aussi bien en centre-ville
              (avec mini-pelles compactes) que sur les grandes zones d&apos;activité périphériques
              avec notre flotte lourde.
            </p>
            <p className="text-gray-700">
              Basés à Talmas (80260), à seulement 20 minutes au nord d&apos;Amiens, nous offrons
              une réactivité optimale sur l&apos;ensemble du territoire d&apos;Amiens Métropole —
              de la Haute-Somme à la Somme aval.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/terrassementgrandchantier.jpg"
              alt="Chantier de terrassement Amiens Vilbert TP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Nos interventions à Amiens
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            De la fouille ponctuelle au terrassement de grande envergure, Vilbert TP couvre
            l&apos;ensemble des prestations de travaux publics sur Amiens et ses communes limitrophes.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES D'ACTIVITÉ AMIÉNOISES */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Amiens Métropole : un territoire en plein essor
            </h2>
            <p className="text-gray-700 mb-4">
              L&apos;agglomération amiénoise concentre une grande variété de projets de travaux
              publics. Les zones d&apos;activité périphériques sont particulièrement dynamiques :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { zone: "ZI Étouvie", desc: "Zone industrielle historique, reconversion et extension de bâtiments logistiques" },
                { zone: "ZA Nord (Dury, Boves)", desc: "Développement de parcs d'activité tertiaires et PME-PMI" },
                { zone: "ZAC de Glisy", desc: "Proximité de l'aéroport, chantiers tertiaires et logistiques importants" },
                { zone: "ZA Amiens Sud (Rivery, Camon)", desc: "Zone commerciale et logistique en expansion constante" },
                { zone: "Quartier Saint-Leu / Henriville", desc: "Rénovation urbaine, terrassement en milieu contraint" },
              ].map((z) => (
                <li key={z.zone} className="flex gap-3">
                  <span className="text-[#b5451b] font-bold mt-0.5">▶</span>
                  <div>
                    <span className="font-semibold text-gray-900">{z.zone}</span>
                    <span className="text-gray-600"> — {z.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-700">
              Que votre projet soit situé en cœur d&apos;Amiens ou en périphérie, Vilbert TP
              dispose des ressources techniques pour intervenir efficacement — de la mini-pelle
              compacte pour les zones urbaines à la pelle 40 tonnes pour les grands travaux.
            </p>
          </div>
          <div>
            <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Géologie & sols à Amiens
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                La géologie de la plaine amiénoise est marquée par la craie sous-jacente
                recouverte d&apos;alluvions dans la vallée de la Somme. La nappe phréatique
                peut être haute dans certaines zones, notamment à proximité du fleuve et des
                marais de la Somme.
              </p>
              <p className="text-gray-700 text-sm">
                Ces spécificités locales nécessitent une approche adaptée : rabattement de
                nappe si nécessaire, techniques de compactage adaptées aux sols limoneux,
                gestion des terres issues de la craie. Vilbert TP connaît parfaitement la
                géologie locale et adapte ses méthodes en conséquence.
              </p>
            </div>
            <div className="bg-[#f5b800]/10 border border-[#f5b800]/30 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Temps de trajet</h3>
              <p className="text-gray-700 text-sm">
                Depuis notre base de Talmas (80260), Amiens est accessible en 20 minutes.
                Cette proximité nous permet de mobiliser rapidement nos équipes et nos engins,
                de gérer efficacement les rotations de camions et de garantir une présence
                terrain optimale sur vos chantiers amiénois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI VILBERT TP */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Pourquoi choisir Vilbert TP pour votre terrassement à Amiens ?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Une expertise régionale, des moyens techniques de pointe et des certifications
            qui font la différence.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Management de la sécurité reconnu — exigé par les grands donneurs d'ordres et collectivités.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Précision centimétrique pour vos plateformes et voiries. Moins de reprises, moins de coûts.",
              },
              {
                icon: "🚜",
                title: "Flotte propre 5-40 t",
                desc: "Aucune sous-traitance d'engins. Nos pelles et camions sont disponibles immédiatement.",
              },
              {
                icon: "🌱",
                title: "Charte CO2",
                desc: "Signataires de la Charte Objectif CO2 — flotte poids lourds optimisée pour réduire notre impact.",
              },
              {
                icon: "⚡",
                title: "Réactivité 24/48 h",
                desc: "20 minutes d'Amiens, dévis sous 24 h, démarrage rapide pour respecter vos délais.",
              },
              {
                icon: "🔒",
                title: "DT-DICT systématique",
                desc: "Sécurité des réseaux garantie. Agents AIPR certifiés sur tous nos chantiers VRD.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Questions fréquentes — Terrassement à Amiens
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-gray-200 rounded-xl overflow-hidden"
            >
              <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                {faq.q}
                <span className="text-[#b5451b] text-xl font-bold group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un projet de terrassement à Amiens ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contactez Vilbert TP pour un devis gratuit et sans engagement.
            Nous intervenons sur Amiens et tout l&apos;arrondissement amiénois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#b5451b] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="inline-flex items-center justify-center gap-2 bg-[#f5b800] text-[#1a1a1a] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#dba400] transition-colors"
            >
              Demander un devis →
            </a>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Basés à Talmas (80260) · 20 min d&apos;Amiens · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
