import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Abbeville (80) | Travaux Publics — Vilbert TP",
  description:
    "Terrassement, voirie et réseaux à Abbeville et dans le Vimeu. Vilbert TP, entreprise certifiée MASE proche d'Abbeville. Devis gratuit ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Abbeville",
    "travaux publics Abbeville",
    "VRD Abbeville",
    "terrassement Vimeu",
    "enrochement Baie de Somme",
    "terrassement 80",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-abbeville",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il sur Abbeville et le secteur du Vimeu ?",
    a: "Oui. Nous intervenons régulièrement sur Abbeville, sous-préfecture de la Somme, ainsi que dans l'ensemble du Vimeu industriel et sur le littoral picards. Notre base de Talmas (80260) est à environ 35 minutes d'Abbeville, ce qui nous permet une intervention rapide sur vos chantiers. Nous travaillons pour des industriels du Vimeu, des collectivités locales et des particuliers.",
  },
  {
    q: "Réalisez-vous des travaux d'enrochement et de protection des berges en Baie de Somme ?",
    a: "Oui, l'enrochement et la protection des berges font partie de nos spécialités. En Baie de Somme, les contraintes littorales sont spécifiques : forte amplitude des marées, sédiments sableux, réglementation de la loi Littoral. Nous coordonnons nos interventions avec les services de l'État (DDTM) et disposons du matériel adapté pour travailler en zone côtière et estuarienne.",
  },
  {
    q: "Quels types de terrassement réalisez-vous à Abbeville ?",
    a: "Nous réalisons tous types de terrassements dans le secteur d'Abbeville : fouilles pour bâtiments industriels (Vimeu), terrassements de plateformes logistiques, réseaux VRD (eau, assainissement, électricité), voiries, terrassements pour particuliers (maisons, allées, piscines). Nos pelles 5 à 40 t s'adaptent à tous les chantiers.",
  },
  {
    q: "La nappe phréatique est-elle un problème pour les terrassements près d'Abbeville ?",
    a: "La Somme aval, aux abords d'Abbeville, présente effectivement des nappes phréatiques parfois hautes, notamment dans les zones humides et la vallée de la Somme. Nous prenons en compte cette contrainte dès l'étude du chantier et mettons en place si nécessaire des systèmes de rabattement de nappe temporaires. Notre connaissance du terrain local est un atout majeur.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement & décaissement",
    desc: "Décaissement, fouilles en pleine masse, préparation de plateformes pour bâtiments industriels, entrepôts, ZA. Capacité plurimilliers de m³.",
  },
  {
    icon: "🪨",
    title: "Enrochement & protection de berges",
    desc: "Pose d'enrochements naturels et artificiels pour la protection des berges, talus, fossés. Spécialité littorale en Baie de Somme.",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD & tranchées",
    desc: "Tranchées pour assainissement EU/EP, eau potable, électricité, gaz, télécoms. DT-DICT systématique. Agents AIPR.",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Création et réfection de voiries, pose d'enrobé, pavage, trottoirs, plateformes logistiques et industrielles.",
  },
  {
    icon: "🚛",
    title: "Évacuation terres & remblais",
    desc: "Transport par notre flotte propre (Charte CO2). Filières agréées. Remblaiement compacté par couches.",
  },
  {
    icon: "🏙️",
    title: "Terrassement particuliers",
    desc: "Fouilles pour maisons individuelles, allées, piscines, assainissement. Intervention en milieu résidentiel avec mini-pelles.",
  },
];

export default function TerrassementAbbevillePage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Abbeville", href: "/terrassement-abbeville" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-abbeville" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/enrochement.jpg"
            alt="Travaux de terrassement et enrochement Abbeville Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Abbeville (80) · Vimeu · Baie de Somme
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Terrassement & travaux publics<br />
            <span className="text-[#f5b800]">à Abbeville et dans le Vimeu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP, entreprise certifiée MASE, réalise vos terrassements, voiries, réseaux VRD
            et travaux d&apos;enrochement à Abbeville, dans le Vimeu industriel et sur le littoral
            picards. Pelles jusqu&apos;à 40 t, bulldozer GPS. Devis gratuit.
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
              Votre partenaire TP dans l&apos;arrondissement d&apos;Abbeville
            </h2>
            <p className="text-gray-700 mb-4">
              Abbeville, sous-préfecture de la Somme, est le carrefour économique de la Somme
              maritime. Sa situation géographique est particulière : à la confluence de la Somme
              et de la côte picarde, elle est à la croisée du Vimeu industriel, de la Baie de
              Somme et du plateau picard.
            </p>
            <p className="text-gray-700 mb-4">
              Ce territoire génère une grande diversité de chantiers de travaux publics.
              Le <strong>Vimeu industriel</strong> (Fressenneville, Friville-Escarbotin,
              Woincourt) concentre de nombreuses PME-PMI qui ont besoin de plateformes,
              de voiries d&apos;accès et de réseaux. Le <strong>littoral</strong> — de
              Cayeux-sur-Mer à Fort-Mahon — requiert des travaux spécifiques
              d&apos;enrochement et de protection côtière.
            </p>
            <p className="text-gray-700">
              Vilbert TP accompagne l&apos;ensemble de ces acteurs depuis Talmas (80260),
              à environ 35 minutes d&apos;Abbeville, avec une flotte d&apos;engins propre
              et des équipes expérimentées.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/consolidationdeberge.jpg"
              alt="Protection de berge enrochement Baie de Somme Vilbert TP"
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
            Nos interventions à Abbeville et dans le secteur
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            De la fouille industrielle à l&apos;enrochement littorale, en passant par les
            réseaux VRD, Vilbert TP couvre toutes les prestations TP dans l&apos;arrondissement.
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

      {/* SPÉCIFICITÉ LITTORALE */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Baie de Somme & littoral picard :<br />des chantiers spécifiques
            </h2>
            <p className="text-gray-700 mb-4">
              La Baie de Somme est un estuaire exceptionnel soumis à des forces naturelles
              intenses : marées à forte amplitude (jusqu&apos;à 9 m à Crotoy), courants,
              érosion littorale. Les berges, digues et ouvrages de protection nécessitent
              un entretien et une reconstruction régulière.
            </p>
            <p className="text-gray-700 mb-4">
              Vilbert TP intervient sur ces chantiers côtiers avec des équipements adaptés.
              Nos pelles équipées de godets spéciaux permettent de mettre en œuvre les
              enrochements naturels dans des conditions d&apos;accès difficiles. Nous travaillons
              en coordination avec les services de l&apos;État (DDTM de la Somme) et maîtrisons
              les contraintes réglementaires du littoral.
            </p>
            <ul className="space-y-2">
              {[
                "Protection de berges et talus en Baie de Somme",
                "Enrochements naturels et artificiels",
                "Confortement de digues",
                "Travaux en zone humide (accès et techniques spécifiques)",
                "Coordination loi Littoral et autorisations DDTM",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-gray-700">
                  <span className="text-[#b5451b] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/enrochement.jpg"
                alt="Enrochement littoral Baie de Somme Vilbert TP"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Vimeu industriel : nos interventions
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Le Vimeu concentre une industrie de précision (robinetterie, serrurerie,
                métallurgie) qui génère des besoins en terrassements industriels :
                extension de bâtiments, création de plateformes, voiries d&apos;accès
                PL, raccordements réseaux.
              </p>
              <p className="text-gray-700 text-sm">
                Nous intervenons pour les entreprises de Fressenneville, Friville-Escarbotin,
                Woincourt, Eu et toute la frange littorale jusqu&apos;à Dieppe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATOUTS */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Pourquoi Vilbert TP à Abbeville ?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Expérience littorale, certification MASE, flotte propre et réactivité terrain.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Sécurité et qualité reconnues — indispensable pour les chantiers industriels du Vimeu.",
              },
              {
                icon: "🌊",
                title: "Expertise littorale",
                desc: "Enrochement, berges, zones humides — nous connaissons les contraintes spécifiques du littoral picard.",
              },
              {
                icon: "🚜",
                title: "Pelles 5–40 t",
                desc: "Matériel adapté à tous vos chantiers, du particulier à l'industriel, sans sous-traitance d'engins.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Nivellement de précision pour plateformes industrielles et voiries — moins de reprises.",
              },
              {
                icon: "⚡",
                title: "35 min d'Abbeville",
                desc: "Talmas à 35 min — mobilisation rapide de nos équipes et livraison matériaux optimisée.",
              },
              {
                icon: "🌱",
                title: "Charte CO2",
                desc: "Nos transports sont optimisés et notre flotte engagée dans la réduction des émissions.",
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
          Questions fréquentes — Terrassement à Abbeville
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
            Un projet TP à Abbeville ou dans le Vimeu ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Terrassement, enrochement, réseaux, voirie — contactez Vilbert TP
            pour un devis gratuit et rapide.
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
            Basés à Talmas (80260) · 35 min d&apos;Abbeville · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
