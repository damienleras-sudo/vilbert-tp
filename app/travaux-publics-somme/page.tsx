import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Entreprise Travaux Publics Somme (80) | Vilbert TP — Terrassement, Voirie, Réseaux",
  description:
    "Vilbert TP : entreprise de travaux publics référente dans la Somme (80). Terrassement, voirie, réseaux VRD, enrochement. Certifié MASE. ☎ 03 22 93 02 86.",
  keywords: [
    "travaux publics Somme",
    "entreprise TP 80",
    "terrassement Somme",
    "voirie Somme",
    "réseaux VRD 80",
    "enrochement Somme",
    "BTP Somme Hauts-de-France",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/travaux-publics-somme",
  },
};

const faqs = [
  {
    q: "Quelle est la zone d'intervention de Vilbert TP dans la Somme ?",
    a: "Vilbert TP intervient sur l'ensemble du département de la Somme (80) et ses environs. Basés à Talmas (80260), nous couvrons Amiens et l'agglomération amiénoise, Abbeville et le Vimeu, Péronne et le Santerre, Doullens, Albert, Montdidier, ainsi que les zones rurales. Nous intervenons également dans les départements limitrophes : Oise (60), Pas-de-Calais (62) et Seine-Maritime (76).",
  },
  {
    q: "Vilbert TP est-il certifié MASE ?",
    a: "Oui. Vilbert TP est certifié MASE (Manuel d'Amélioration Sécurité des Entreprises) par l'association MASE Hauts-de-France. Cette certification atteste de notre engagement en matière de sécurité, santé et environnement. Elle est exigée par de nombreux donneurs d'ordres industriels et collectivités.",
  },
  {
    q: "Quelles sont toutes vos prestations de travaux publics ?",
    a: "Vilbert TP couvre toutes les prestations TP : terrassement général (fouilles, remblais, décaissement), terrassement de précision avec bulldozer GPS, voirie (enrobé, pavage, bordures), réseaux VRD (assainissement EU/EP, eau potable, électricité, gaz, fibre), enrochement et protection de berges, broyage-concassage, démolition-valorisation, terrassement agricole, extraction de craie, location d'engins avec chauffeur.",
  },
  {
    q: "Comment obtenir un devis travaux publics dans la Somme ?",
    a: "Contactez-nous au 03 22 93 02 86 ou par email à tp@groupe-vilbert.fr. Nous organisons une visite de chantier sous 48 h et vous remettons un devis gratuit, détaillé et sans engagement. Pour les chantiers complexes, nous proposons un accompagnement technique dès la phase d'étude.",
  },
  {
    q: "Travaillez-vous pour les particuliers et les collectivités ?",
    a: "Oui. Vilbert TP intervient pour toutes les typologies de clients : particuliers (fouilles maison, allées, piscine, assainissement), promoteurs et constructeurs, industries et entreprises (zones d'activité, plateformes, voiries), collectivités locales (communes, communautés de communes, Département) et maîtres d'ouvrage publics.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général",
    desc: "Décaissement, fouilles pleine masse, préparation de plateformes. Pelles 5 à 40 t. Capacité plurimilliers de m³ par chantier.",
    link: "/terrassement",
  },
  {
    icon: "📡",
    title: "Terrassement précision GPS",
    desc: "Bulldozer GPS pour nivellement centimétrique. Plateformes, voiries, lotissements.",
    link: "/terrassement",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Création et réfection de voiries, pose d'enrobé, pavage, trottoirs, caniveaux, parkings.",
    link: "/voirie",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD",
    desc: "Tranchées pour assainissement EU/EP, eau potable, électricité, gaz, fibre optique. DT-DICT systématique.",
    link: "/reseaux",
  },
  {
    icon: "🪨",
    title: "Enrochement & berges",
    desc: "Protection de berges, talus, fossés. Enrochements naturels et artificiels. Expertise littorale.",
    link: "/enrochement",
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Plateformes agricoles, chemins d'exploitation, drainage, cours de ferme. Partenaire des agriculteurs de la Somme.",
    link: "/terrassement",
  },
  {
    icon: "🏠",
    title: "Travaux particuliers",
    desc: "Assainissement, piscines, allées, fouilles maison individuelle. Mini-pelles pour accès restreints.",
    link: "/travaux-particuliers",
  },
  {
    icon: "💥",
    title: "Démolition & valorisation",
    desc: "Démolition de bâtiments, broyage, concassage et criblage des matériaux inertes. Filières agréées.",
    link: "/demolition-valorisation",
  },
  {
    icon: "🚜",
    title: "Location engins avec chauffeur",
    desc: "Pelles, mini-pelles, bulldozer, niveleuse, tombereau — avec opérateur qualifié CACES.",
    link: "/location-engins",
  },
];

const villes = [
  { nom: "Amiens", desc: "Préfecture, agglomération amiénoise", lien: "/terrassement-amiens" },
  { nom: "Abbeville", desc: "Somme maritime, Vimeu, Baie de Somme", lien: "/terrassement-abbeville" },
  { nom: "Péronne", desc: "Santerre, Ham, Nesle, Roye", lien: "/terrassement-peronne" },
  { nom: "Doullens", desc: "Amiénois nord, Authie", lien: null },
  { nom: "Albert", desc: "Haute-Somme, Santerre nord", lien: null },
  { nom: "Montdidier", desc: "Santerre sud, Oise nord", lien: null },
  { nom: "Rue", desc: "Baie de Somme, Marquenterre", lien: null },
  { nom: "Gamaches", desc: "Vimeu, Seine-Maritime limite", lien: null },
];

const certifications = [
  {
    label: "MASE Hauts-de-France",
    desc: "Management SSE — sécurité, santé, environnement. Audit externe tous les 3 ans.",
    icon: "🏅",
  },
  {
    label: "Charte Objectif CO2",
    desc: "Engagement sur la réduction des émissions CO2 de notre flotte poids lourds.",
    icon: "🌱",
  },
  {
    label: "CACES",
    desc: "100 % de nos conducteurs titulaires du CACES correspondant à leur engin.",
    icon: "🎓",
  },
  {
    label: "AIPR",
    desc: "Tous nos agents sont habilités AIPR — intervention sécurisée autour des réseaux.",
    icon: "⚡",
  },
];

export default function TravauxPublicsSommePage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Travaux Publics Somme", href: "/travaux-publics-somme" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/travaux-publics-somme" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/terrassementgrandchantier.jpg"
            alt="Travaux publics Somme — Vilbert TP entreprise référente"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme (80) · Hauts-de-France
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Entreprise de travaux publics<br />
            <span className="text-[#f5b800]">référente dans la Somme (80)</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
            Vilbert TP : terrassement, voirie, réseaux VRD, enrochement et plus encore.
            Présents sur tout le département de la Somme depuis Talmas (80260).
            Certifié MASE. Pelles 5–40 t, bulldozer GPS, flotte propre.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Certifié MASE", "Charte CO2", "CACES", "AIPR", "Flotte propre"].map((badge) => (
              <span
                key={badge}
                className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
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

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vilbert TP, l&apos;entreprise TP de la Somme
            </h2>
            <p className="text-gray-700 mb-4">
              Depuis plus de 30 ans, Vilbert TP est l&apos;interlocuteur de confiance des
              particuliers, entreprises, agriculteurs et collectivités de la Somme pour
              tous leurs travaux publics. Basés à Talmas (80260), au nord d&apos;Amiens,
              nous rayonnons sur l&apos;ensemble du département — et au-delà.
            </p>
            <p className="text-gray-700 mb-4">
              Notre force : une <strong>flotte propre d&apos;engins</strong> diversifiée
              (pelles 5 à 40 t, mini-pelles, bulldozer GPS, niveleuse, compacteurs, camions),
              des <strong>équipes certifiées</strong> (MASE, CACES, AIPR) et une connaissance
              approfondie des <strong>spécificités géologiques et réglementaires</strong> de
              la Somme.
            </p>
            <p className="text-gray-700">
              De la fouille pour une maison individuelle à un chantier de voirie
              communale de plusieurs centaines de mètres, ou encore à l&apos;enrochement
              littoral en Baie de Somme — Vilbert TP est présent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image src="/voirie.jpg" alt="Voirie Somme Vilbert TP" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image src="/enrochement.jpg" alt="Enrochement Somme Vilbert TP" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image src="/assainissement.jpg" alt="Réseaux assainissement Somme" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
              <Image src="/prestationagricole.jpg" alt="Terrassement agricole Somme" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TOUTES LES PRESTATIONS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Toutes nos prestations dans la Somme
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Vilbert TP est votre interlocuteur unique pour l&apos;ensemble des travaux publics
            en Somme — terrassement, voirie, réseaux, enrochement et plus encore.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {prestations.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#b5451b]/30 transition-colors">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                {p.link && (
                  <Link href={p.link} className="text-[#b5451b] text-sm font-semibold hover:underline">
                    En savoir plus →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Zone d&apos;intervention dans la Somme
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Depuis notre base de Talmas, nous rayonnons sur l&apos;ensemble du département 80
          et les départements limitrophes.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {villes.map((v) => (
            <div key={v.nom} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="font-bold text-gray-900">{v.nom}</p>
              <p className="text-gray-500 text-sm">{v.desc}</p>
              {v.lien && (
                <Link href={v.lien} className="text-[#b5451b] text-sm font-semibold hover:underline mt-1 block">
                  Voir la page →
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6 text-center">
          <p className="text-gray-700">
            <strong>Votre commune n&apos;est pas listée ?</strong> Contactez-nous : nous intervenons
            sur tout le département de la Somme (80) et dans les départements voisins
            (Oise 60, Pas-de-Calais 62, Seine-Maritime 76).
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Nos certifications & engagements
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Des garanties concrètes pour vos chantiers dans la Somme.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {certifications.map((c) => (
              <div key={c.label} className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{c.label}</h3>
                <p className="text-gray-400 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                chiffre: "30+",
                label: "années d'expérience",
                desc: "Depuis plus de 30 ans au service des chantiers de la Somme",
              },
              {
                chiffre: "15+",
                label: "engins propres",
                desc: "Flotte propre sans sous-traitance — pelles, camions, bulldozer GPS",
              },
              {
                chiffre: "24 h",
                label: "délai de réponse",
                desc: "Devis gratuit sous 24 h sur tout le département 80",
              },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="text-4xl font-extrabold text-[#f5b800] mb-1">{stat.chiffre}</div>
                <div className="font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-gray-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GÉOLOGIE SOMME */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Les sols de la Somme : notre expertise locale
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              titre: "Craie du plateau picard",
              desc: "Le substratum crayeux est omniprésent sous le limon. Sol généralement bon pour les fondations mais nécessite des techniques spécifiques de terrassement (dents de scarificateur, broyage).",
              icon: "⛰️",
            },
            {
              titre: "Limons et argiles",
              desc: "Les plateaux sont recouverts de limons loessiques fertiles mais susceptibles de se comporter comme des argiles en conditions humides. Compactage adapté indispensable.",
              icon: "🟤",
            },
            {
              titre: "Alluvions de la Somme",
              desc: "La vallée de la Somme et ses marais présentent des nappes phréatiques hautes. Rabattement de nappe souvent nécessaire, sols de faible portance à gérer avec soin.",
              icon: "💧",
            },
          ].map((item) => (
            <div key={item.titre} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.titre}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Questions fréquentes — Travaux publics en Somme
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

      {/* CTA */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Votre projet de travaux publics dans la Somme
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Terrassement, voirie, réseaux, enrochement — quel que soit votre projet,
            Vilbert TP vous accompagne avec expertise et réactivité.
            Devis gratuit sous 24 h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {[
              "Talmas 80260",
              "Certifié MASE",
              "Charte CO2",
              "Somme (80)",
              "Devis 24h",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
