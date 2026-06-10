import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Péronne (80) | VRD & Voirie — Vilbert TP",
  description:
    "Vilbert TP intervient à Péronne et dans le Santerre pour vos terrassements, voiries et réseaux. Pelles jusqu'à 40 t. Devis gratuit ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Péronne",
    "travaux publics Santerre",
    "VRD Péronne",
    "terrassement agricole Somme",
    "drainage agricole 80",
    "terrassement Ham Nesle Roye",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-peronne",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il sur Péronne, Ham, Nesle et Roye ?",
    a: "Oui. Nous intervenons sur l'ensemble du Santerre : Péronne, Ham, Nesle, Roye et les communes rurales environnantes. Notre base de Talmas (80260) est à environ 45 minutes de Péronne, et nos équipes se déplacent régulièrement sur ce territoire pour des chantiers industriels, agricoles et communaux.",
  },
  {
    q: "Réalisez-vous des terrassements agricoles dans le Santerre ?",
    a: "Absolument. Le Santerre est l'une des zones agricoles les plus intensives de France. Nous réalisons des plateformes agricoles (silos, hangars, stabulations), des chemins d'exploitation, du drainage par tuyaux drainants, et des travaux d'amélioration foncière. Nous connaissons les contraintes réglementaires liées aux BCAE et aux aides PAC.",
  },
  {
    q: "Quelles spécificités géologiques y a-t-il dans le Santerre ?",
    a: "Le plateau du Santerre est essentiellement calcaire recouvert de limon loessique fertile. Ces sols limoneux profonds sont généralement bien portants mais peuvent présenter un comportement argileux en période humide. La nappe est généralement profonde, ce qui est favorable aux terrassements. Nous adaptons nos méthodes de compactage selon les conditions saisonnières.",
  },
  {
    q: "Intervenez-vous pour des chantiers industriels dans la zone de Roye-Ham-Nesle ?",
    a: "Oui. Le triangle Roye-Ham-Nesle est une zone logistique et agro-industrielle importante. Nous intervenons pour des extensions de bâtiments, création de voiries PL, parkings, raccordements réseaux. Nous disposons du matériel adapté aux grandes plateformes : pelles 20-40 t, bulldozer GPS, camions en propre.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général",
    desc: "Décaissement, fouilles, préparation de plateformes pour bâtiments industriels, entrepôts, silos agricoles. Capacité plurimilliers de m³.",
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Plateformes agricoles, hangars, cours de ferme, chemins d'exploitation, régalage de parcelles. Partenaire des exploitants du Santerre.",
  },
  {
    icon: "💧",
    title: "Drainage & assainissement",
    desc: "Pose de tuyaux drainants, fossés, réseaux d'évacuation eaux pluviales. Maîtrise des sols hydromorphes de la plaine picarde.",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD & tranchées",
    desc: "Assainissement EU/EP, eau potable, électricité, gaz, fibre. DT-DICT systématique. Agents AIPR certifiés.",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Création et réfection de voiries communales et industrielles. Enrobé, pavage, trottoirs. Travaux pour collectivités.",
  },
  {
    icon: "📡",
    title: "Terrassement précision GPS",
    desc: "Notre bulldozer GPS permet des profils précis au centimètre pour plateformes logistiques et voiries de zones d'activité.",
  },
];

export default function TerrassementPeronnePage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Péronne", href: "/terrassement-peronne" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-peronne" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prestationagricole.jpg"
            alt="Terrassement agricole Santerre Péronne Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Péronne (80) · Santerre
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Terrassement, VRD & voirie<br />
            <span className="text-[#f5b800]">à Péronne et dans le Santerre</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP réalise vos terrassements, réseaux et voiries à Péronne, Ham, Nesle, Roye
            et dans tout le Santerre. Certifié MASE, pelles jusqu&apos;à 40 t, bulldozer GPS.
            Spécialiste du terrassement agricole en plaine picarde.
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

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre partenaire TP dans le Santerre
            </h2>
            <p className="text-gray-700 mb-4">
              Le Santerre est le grenier de la Somme : une plaine agricole à très haute
              valeur agronomique, parsemée de grandes exploitations céréalières, sucreries,
              coopératives et zones logistiques agro-industrielles. C&apos;est aussi un
              territoire qui génère des besoins importants en travaux publics, tant
              pour l&apos;agriculture que pour les activités industrielles et les collectivités.
            </p>
            <p className="text-gray-700 mb-4">
              Péronne, sous-préfecture, est le centre névralgique de ce territoire. Ham, Nesle
              et Roye complètent le tissu économique de cet arrondissement au fort potentiel.
              Vilbert TP intervient pour toutes ces communes et leurs environs.
            </p>
            <p className="text-gray-700">
              Depuis Talmas (80260), notre base est à environ 45 minutes de Péronne par la D1017.
              Nos équipes se mobilisent régulièrement sur ce territoire avec notre flotte propre
              d&apos;engins.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/terrassementgrandchantier.jpg"
              alt="Terrassement grande surface Santerre Vilbert TP"
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
            Nos interventions à Péronne et dans le Santerre
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Du terrassement agricole au chantier industriel, en passant par les réseaux
            et la voirie, Vilbert TP couvre tous les besoins TP du Santerre.
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

      {/* SPÉCIFICITÉ AGRICOLE */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Le Santerre, cœur du terrassement agricole
            </h2>
            <p className="text-gray-700 mb-4">
              Avec ses grandes plaines céréalières, le Santerre génère des besoins
              spécifiques en terrassement agricole que Vilbert TP maîtrise parfaitement :
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  titre: "Plateformes agricoles",
                  desc: "Création de plateformes de stockage, cours de ferme, accès stabulations et silos. Compactage adapté aux charges agricoles lourdes.",
                },
                {
                  titre: "Chemins d'exploitation",
                  desc: "Construction et réfection de chemins agricoles en grave ou enrobé, accessibles aux engins lourds (moissonneuses, semoirs, épandeurs).",
                },
                {
                  titre: "Drainage agricole",
                  desc: "Pose de tuyaux drainants perforés pour améliorer la portance des parcelles hydromorphes. Curage et recalibrage de fossés.",
                },
                {
                  titre: "Hangars et bâtiments agricoles",
                  desc: "Terrassement de fondations pour hangar de stockage, bâtiment d'élevage, atelier — en coordination avec les maçons et charpentiers.",
                },
              ].map((item) => (
                <div key={item.titre} className="border-l-4 border-[#b5451b] pl-4">
                  <p className="font-semibold text-gray-900">{item.titre}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/prestationagricole.jpg"
                alt="Terrassement agricole Santerre Vilbert TP"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#f5b800]/10 border border-[#f5b800]/30 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Zone logistique Roye-Ham-Nesle
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Le triangle Roye-Ham-Nesle accueille de nombreuses industries agro-alimentaires
                et entrepôts logistiques qui ont régulièrement besoin d&apos;extensions,
                de nouvelles voiries PL et de raccordements réseaux.
              </p>
              <p className="text-gray-700 text-sm">
                Vilbert TP intervient pour ces entreprises avec ses pelles 20-40 t, son
                bulldozer GPS et sa flotte de camions — pour des délais maîtrisés et
                une qualité de finition industrielle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATOUTS */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Pourquoi Vilbert TP à Péronne ?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Sécurité, santé, environnement — certification reconnue par l'industrie et les collectivités.",
              },
              {
                icon: "🌾",
                title: "Expert terrassement agricole",
                desc: "Nous connaissons les besoins des agriculteurs du Santerre et intervenons dans le respect des cycles agricoles.",
              },
              {
                icon: "🚜",
                title: "Pelles 5–40 t propres",
                desc: "Flotte propre sans sous-traitance. Disponibilité immédiate des engins pour vos chantiers.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Précision centimétrique — idéal pour les grandes plateformes agricoles et industrielles du Santerre.",
              },
              {
                icon: "⚡",
                title: "45 min de Péronne",
                desc: "Depuis Talmas, mobilisation rapide de nos équipes sur Péronne, Ham, Nesle, Roye.",
              },
              {
                icon: "🌱",
                title: "Charte Objectif CO2",
                desc: "Nos transports sont optimisés — important dans une région aux grandes distances de chantier.",
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
          Questions fréquentes — Terrassement à Péronne et dans le Santerre
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
            Un projet à Péronne ou dans le Santerre ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Terrassement agricole, industriel ou communal — Vilbert TP vous répond
            sous 24 h avec un devis gratuit et détaillé.
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
            Basés à Talmas (80260) · 45 min de Péronne · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
