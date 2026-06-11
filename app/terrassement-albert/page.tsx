import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Albert (80) | Travaux Publics — Vilbert TP",
  description:
    "Vilbert TP intervient à Albert et dans le Pays du Coquelicot pour vos terrassements, voiries et réseaux. Pelles jusqu'à 40t. Devis gratuit ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Albert",
    "travaux publics Albert",
    "VRD Albert 80",
    "terrassement Pays du Coquelicot",
    "terrassement Bapaume",
    "travaux publics Somme WWI",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-albert",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il sur Albert et le Pays du Coquelicot ?",
    a: "Oui. Nous intervenons régulièrement à Albert, sous-préfecture de la Somme, ainsi que dans tout le Pays du Coquelicot : Bapaume, Thiepval, Pozières, Miraumont et les communes rurales de la haute Somme. Notre base de Talmas (80260) est à environ 40 minutes d'Albert, ce qui nous permet une mobilisation rapide. Nous travaillons pour des collectivités, des agriculteurs et des industriels de ce territoire.",
  },
  {
    q: "Les risques liés aux obus et munitions de la Première Guerre mondiale sont-ils pris en compte sur vos chantiers ?",
    a: "Absolument. Le secteur d'Albert et du Pays du Coquelicot est l'une des zones les plus sensibles de France en matière de découverte de munitions de 14-18 (obus, grenades, gaz de combat). Avant tout terrassement, nous préconisons un bornage historique, une consultation de la carte des fronts et, si nécessaire, le recours à un démineur agréé. Nos équipes sont sensibilisées à la procédure de déclaration immédiate aux autorités et nous ne poursuivons aucun travail sans mise en sécurité préalable.",
  },
  {
    q: "Réalisez-vous des terrassements agricoles dans le Pays du Coquelicot ?",
    a: "Oui. L'agriculture intensive de la haute Somme — céréales, betteraves sucrières, pommes de terre — génère des besoins importants : plateformes pour hangars et silos, cours de ferme, chemins d'exploitation et drainage des sols argileux. Nous maîtrisons les contraintes propres aux exploitations agricoles de grande taille et intervenons en période de ressuyage pour préserver la structure des sols.",
  },
  {
    q: "Le territoire d'Albert est-il concerné par des zones archéologiques ?",
    a: "Oui. Toute la zone des champs de bataille de la Somme fait l'objet d'une attention archéologique particulière. La DRAC Hauts-de-France peut prescrire des diagnostics ou des fouilles préventives sur des projets de terrassement importants. Vilbert TP travaille en bonne intelligence avec les services archéologiques et adapte si nécessaire les plannings de chantier. Nous recommandons d'anticiper cette démarche dès le dépôt du permis de construire.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Terrassement général",
    desc: "Décaissement, fouilles en pleine masse, préparation de plateformes pour bâtiments, entrepôts et zones d'activité. Capacité plurimilliers de m³.",
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Plateformes de silos et hangars, cours de ferme, chemins d'exploitation, régalage de parcelles dans le Pays du Coquelicot.",
  },
  {
    icon: "💧",
    title: "Drainage & assainissement",
    desc: "Pose de drains, fossés, réseaux EP/EU. Maîtrise des sols argileux et hydromorphes fréquents dans la haute Somme.",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD & tranchées",
    desc: "Tranchées pour assainissement, eau potable, électricité, fibre optique. DT-DICT systématique. Agents AIPR certifiés.",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Création et réfection de voiries communales et industrielles, enrobé, pavage, trottoirs et plateformes logistiques.",
  },
  {
    icon: "📡",
    title: "Terrassement précision GPS",
    desc: "Bulldozer GPS pour des profils au centimètre près — plateformes industrielles et voiries de zones d'activité.",
  },
];

export default function TerrassementAlbertPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Albert", href: "/terrassement-albert" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-albert" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/terrassement1.jpg"
            alt="Terrassement travaux publics Albert Pays du Coquelicot Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Albert (80) · Pays du Coquelicot · Bapaume · Thiepval
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Terrassement & travaux publics<br />
            <span className="text-[#f5b800]">à Albert et dans le Pays du Coquelicot</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP, entreprise certifiée MASE, réalise vos terrassements, voiries et réseaux VRD
            à Albert et sur tout le territoire des champs de bataille de la Somme. Expertise
            des contraintes munitions 14-18 et zones archéologiques. Pelles jusqu&apos;à 40 t. Devis gratuit.
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
              { value: "40 t", label: "Pelle chenille max" },
              { value: "40 min", label: "D'Albert" },
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
              Terrassement sur le territoire de la Bataille de la Somme
            </h2>
            <p className="text-gray-700 mb-4">
              Albert, sous-préfecture de la Somme, est le cœur du <strong>Pays du Coquelicot</strong>,
              territoire indissociable des combats de la Première Guerre mondiale. Le Mémorial de
              Terre-Neuviens à Beaumont-Hamel, le Mémorial de Thiepval, les nécropoles de Pozières
              et les cimetières militaires parsèment ce paysage agricole qui garde les stigmates
              des combats de 1916.
            </p>
            <p className="text-gray-700 mb-4">
              Ce contexte historique exceptionnel impose des précautions particulières lors de tout
              terrassement : <strong>risque de découverte de munitions non explosées</strong> (obus,
              grenades, gaz), <strong>zones archéologiques protégées</strong>, prescriptions de la
              DRAC Hauts-de-France. Vilbert TP maîtrise ces contraintes et les intègre dans la
              préparation de chaque chantier.
            </p>
            <p className="text-gray-700">
              Au-delà de cet héritage historique, le Pays du Coquelicot est un territoire agricole
              dynamique — céréales, betteraves, pommes de terre — qui génère de nombreux besoins
              en terrassements agricoles, voiries et réseaux.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/terrassementgrandchantier.jpg"
              alt="Grand chantier terrassement Pays du Coquelicot Vilbert TP"
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
            Nos interventions à Albert et dans le secteur
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            De la fouille industrielle au drainage agricole, en passant par la voirie communale,
            Vilbert TP couvre toutes les prestations TP autour d&apos;Albert.
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
              Contraintes spécifiques du territoire :<br />munitions et archéologie
            </h2>
            <p className="text-gray-700 mb-4">
              La zone autour d&apos;Albert — Bapaume, Thiepval, Pozières, Miraumont,
              Beaumont-Hamel — est l&apos;une des plus riches et des plus contraignantes
              de France pour les travaux de terrassement. Des millions d&apos;obus ont
              été tirés lors de la Bataille de la Somme (juillet–novembre 1916) ;
              une part significative n&apos;a pas explosé et reste enfouie dans les sols.
            </p>
            <p className="text-gray-700 mb-4">
              Vilbert TP applique un protocole strict sur ces chantiers :
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Consultation préalable des cartes historiques et archives militaires",
                "Coordination avec la brigade de déminage (Sécurité civile)",
                "Arrêt immédiat et périmètre de sécurité en cas de découverte",
                "Déclaration aux autorités (mairie, gendarmerie, préfecture)",
                "Reprise du chantier uniquement après neutralisation officielle",
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
                src="/voirie.jpg"
                alt="Voirie et terrassement Albert Bapaume Vilbert TP"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Secteur couvert autour d&apos;Albert
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {[
                  "Albert — Bapaume — Thiepval",
                  "Pozières — Miraumont — Beaumont-Hamel",
                  "Achiet-le-Grand — Bucquoy — Gomiecourt",
                  "Combles — Rancourt — Sailly-Saillisel",
                  "Haute Somme agricole et zones rurales",
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
            Pourquoi Vilbert TP à Albert ?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Expérience terrain, certification MASE, connaissance des contraintes historiques
            et flotte propre.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Sécurité et qualité au cœur de notre démarche — obligatoire sur les chantiers industriels et communaux.",
              },
              {
                icon: "⚠️",
                title: "Protocole munitions",
                desc: "Nos équipes sont formées aux procédures de découverte d'engins de guerre — sécurité non négociable.",
              },
              {
                icon: "🚜",
                title: "Pelles 5–40 t",
                desc: "Matériel adapté à tous les chantiers, du particulier à l'industriel, sans sous-traitance d'engins.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Nivellement de précision pour plateformes industrielles et agricoles — moins de reprises.",
              },
              {
                icon: "⚡",
                title: "40 min d'Albert",
                desc: "Talmas à 40 min — mobilisation rapide et suivi de chantier régulier.",
              },
              {
                icon: "🌱",
                title: "Charte CO2",
                desc: "Flotte et transports engagés dans la réduction des émissions carbones.",
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
          Questions fréquentes — Terrassement à Albert
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
            Un projet TP à Albert ou dans le Pays du Coquelicot ?
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 mb-8">
            Terrassement, voirie, réseaux, drainage — contactez Vilbert TP
            pour un devis gratuit et rapide, adapté aux contraintes du territoire.
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
            Basés à Talmas (80260) · 40 min d&apos;Albert · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
