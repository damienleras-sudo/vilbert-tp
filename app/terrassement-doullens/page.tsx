import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Doullens (80) | VRD & Voirie — Vilbert TP",
  description:
    "Terrassement, voirie et réseaux à Doullens et dans l'Authie. Vilbert TP, entreprise certifiée MASE, proche de Doullens. Devis gratuit ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Doullens",
    "travaux publics Doullens",
    "VRD Doullens",
    "terrassement Authie",
    "viabilisation Pas-en-Artois",
    "terrassement agricole Somme nord",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-doullens",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il sur Doullens et dans la vallée de l'Authie ?",
    a: "Oui. Doullens, sous-préfecture de la Somme, se trouve à environ 25 minutes de notre base de Talmas (80260). C'est l'une des zones dans lesquelles nous intervenons le plus régulièrement. Nous travaillons à Doullens même mais aussi dans toute la vallée de l'Authie : Pas-en-Artois, Frévent, Auxi-le-Château, Lucheux et les communes agricoles environnantes. Collectivités, agriculteurs et industriels font appel à nous.",
  },
  {
    q: "Réalisez-vous des viabilisations de terrains à bâtir autour de Doullens ?",
    a: "Oui, la viabilisation est l'une de nos prestations phares dans ce secteur. Nous réalisons les réseaux d'eau potable, d'assainissement, d'électricité et de télécommunications pour des lotissements et des terrains individuels. Nous connaissons les contraintes du réseau public local (syndicats d'eau, ENEDIS, collectivités) et accompagnons nos clients dans les démarches d'autorisation.",
  },
  {
    q: "Quels travaux agricoles réalisez-vous dans la zone de Doullens ?",
    a: "Le territoire de Doullens est une zone de grande culture intensive (betterave sucrière, céréales, colza). Nous réalisons des plateformes pour hangars agricoles et silos, des cours de ferme, des chemins d'exploitation, du drainage et de l'amélioration foncière. Nous connaissons bien les sols limoneux et argileux de ce secteur et adaptons nos méthodes de terrassement et de compactage en conséquence.",
  },
  {
    q: "Intervenez-vous pour des travaux sur la citadelle de Doullens ou des bâtiments historiques ?",
    a: "Les abords de la citadelle Vauban de Doullens sont classés et soumis à l'avis des Architectes des Bâtiments de France. Nous avons l'habitude de travailler en site contraint et en coordination avec les services patrimoniaux. Pour tout chantier de terrassement à proximité d'un monument historique, nous recommandons une consultation préalable de la DRAC et de l'ABF avant le lancement des travaux.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général",
    desc: "Décaissement, fouilles, plateformes pour bâtiments industriels, entrepôts, zones d'activité. Capacité plurimilliers de m³.",
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Plateformes de hangars et silos, cours de ferme, chemins d'exploitation dans la grande culture du Doullennais.",
  },
  {
    icon: "🏘️",
    title: "Viabilisation & lotissements",
    desc: "Réseaux EU/EP, eau potable, électricité, fibre pour terrains à bâtir et lotissements. Du branchement au réseau.",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD & tranchées",
    desc: "Tranchées tous fluides, DT-DICT systématique, agents AIPR certifiés. Travaux pour collectivités et syndicats.",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Création et réfection de voiries communales, enrobé, trottoirs, parkings. Référence des collectivités locales.",
  },
  {
    icon: "💧",
    title: "Drainage & fossés",
    desc: "Pose de drains, curage et création de fossés, gestion des eaux pluviales. Sols argileux de l'Authie maîtrisés.",
  },
];

export default function TerrassementDoullensPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Doullens", href: "/terrassement-doullens" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-doullens" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/voirie.jpg"
            alt="Terrassement voirie réseaux Doullens Authie Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Doullens (80) · Authie · Pas-en-Artois · Frévent
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Terrassement, VRD & voirie<br />
            <span className="text-[#f5b800]">à Doullens et dans l&apos;Authie</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP, entreprise certifiée MASE basée à Talmas, intervient à Doullens et dans
            toute la vallée de l&apos;Authie pour vos terrassements, viabilisations, réseaux VRD
            et voiries. Pelles jusqu&apos;à 40 t, bulldozer GPS. Devis gratuit.
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

      {/* STATS BAR */}
      <section className="bg-[#b5451b] text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "25 min", label: "De Doullens" },
              { value: "40 t", label: "Pelle chenille max" },
              { value: "MASE", label: "Certifié sécurité" },
              { value: "24 h", label: "Délai devis" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#f5b800]">{s.value}</div>
                <div className="text-sm text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO CONTEXTUELLE */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre partenaire TP dans le nord-est de la Somme
            </h2>
            <p className="text-gray-700 mb-4">
              Doullens, sous-préfecture de la Somme, est une ville charnière entre la Somme
              et le Pas-de-Calais. Sa <strong>citadelle Vauban</strong> classée aux Monuments
              historiques en fait un territoire patrimonial exigeant. La ville est aussi connue
              pour avoir accueilli en mars 1918 la Conférence de Doullens, qui unifia le
              commandement allié sous Foch — une dimension historique qui marque encore le territoire.
            </p>
            <p className="text-gray-700 mb-4">
              Sur le plan économique, Doullens est entourée d&apos;une vaste zone agricole
              de grande culture. La <strong>betterave sucrière</strong>, les céréales et le colza
              dominent le paysage. Ce tissu agricole génère des besoins importants en
              terrassements de plateformes, hangars, silos et chemins d&apos;exploitation.
            </p>
            <p className="text-gray-700">
              Vilbert TP intervient depuis Talmas (à 25 min) sur l&apos;ensemble de ce territoire,
              pour les collectivités, les agriculteurs et les entreprises locales.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/terrassement1.jpg"
              alt="Terrassement plateforme Doullens Authie Vilbert TP"
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
            Nos interventions à Doullens et dans le secteur
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            De la viabilisation de lotissement au terrassement agricole, en passant par la
            voirie communale, Vilbert TP couvre tous les besoins TP du Doullennais.
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

      {/* SECTION LOCALE */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Doullens et l&apos;Authie :<br />un territoire agricole à fort besoin de VRD
            </h2>
            <p className="text-gray-700 mb-4">
              La vallée de l&apos;Authie forme une frontière naturelle entre la Somme et le
              Pas-de-Calais. Ce territoire rural présente des sols variés — limons profonds
              sur les plateaux, alluvions humides en fond de vallée — qui appellent des
              techniques de terrassement adaptées.
            </p>
            <p className="text-gray-700 mb-4">
              Les besoins de viabilisation sont croissants dans ce secteur qui connaît
              un regain de construction. Lotissements communaux, extensions de zones
              d&apos;activité à Pas-en-Artois, réhabilitation de voiries communautaires
              entre Frévent et Auxi-le-Château : Vilbert TP est régulièrement sollicité
              par les collectivités et les aménageurs.
            </p>
            <ul className="space-y-2">
              {[
                "Viabilisation réseaux EU/EP, eau potable, électricité",
                "Travaux de voirie pour Communautés de Communes",
                "Terrassements agricoles sur les plateaux limoneux",
                "Drainage des fonds de vallée hydromorphes",
                "Réhabilitation d'ouvrages d'art ruraux",
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
                src="/assainissement.jpg"
                alt="Réseaux assainissement VRD Doullens Vilbert TP"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Secteur couvert autour de Doullens
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {[
                  "Doullens — Pas-en-Artois — Lucheux",
                  "Frévent — Auxi-le-Château — Grigny",
                  "Outrebois — Bouquemaison — Halloy",
                  "Bernaville — Béhencourt — Humbercamps",
                  "Frontière Somme/Pas-de-Calais",
                ].map((loc) => (
                  <li key={loc} className="flex gap-2">
                    <span className="text-[#b5451b] font-bold">→</span>
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Pourquoi Vilbert TP à Doullens ?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Proximité, certification MASE, expertise agricole et réactivité terrain.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Sécurité et qualité reconnues — indispensable pour les marchés publics et les chantiers industriels.",
              },
              {
                icon: "📍",
                title: "25 min de Doullens",
                desc: "Talmas à 25 min — mobilisation rapide, suivi de chantier régulier et réactivité aux urgences.",
              },
              {
                icon: "🚜",
                title: "Pelles 5–40 t",
                desc: "Toute la gamme, du chantier particulier à la grande plateforme industrielle, sans sous-traitance.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Nivellement de précision pour plateformes agricoles et voiries — moins de reprises, gain de temps.",
              },
              {
                icon: "🌾",
                title: "Expert agricole",
                desc: "Connaissance des contraintes agronomiques et des sols limoneux du Doullennais.",
              },
              {
                icon: "🌱",
                title: "Charte CO2",
                desc: "Transports optimisés et flotte engagée dans la réduction des émissions.",
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
          Questions fréquentes — Terrassement à Doullens
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
      <section className="bg-[#f5b800] text-[#1a1a1a] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un projet TP à Doullens ou dans l&apos;Authie ?
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 mb-8">
            Terrassement, viabilisation, réseaux, voirie — contactez Vilbert TP
            pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="inline-flex items-center justify-center gap-2 bg-[#b5451b] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#9e3a16] transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Demander un devis →
            </a>
          </div>
          <p className="text-[#1a1a1a]/60 text-sm mt-6">
            Basés à Talmas (80260) · 25 min de Doullens · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
