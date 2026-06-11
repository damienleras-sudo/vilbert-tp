import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Terrassement Montdidier (80) | Terrassement Agricole — Vilbert TP",
  description:
    "Travaux publics à Montdidier et dans le Santerre-Oise : terrassement, drainage, voirie agricole. Vilbert TP, expert du sol picard. ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Montdidier",
    "travaux publics Santerre",
    "terrassement agricole Oise",
    "drainage sols argileux Somme",
    "plateforme industrielle Roye",
    "terrassement Noyon Montdidier",
  ],
  alternates: {
    canonical: "https://www.vilbert-tp.fr/terrassement-montdidier",
  },
};

const faqs = [
  {
    q: "Vilbert TP intervient-il sur Montdidier et la frontière Somme/Oise ?",
    a: "Oui. Montdidier est l'une de nos zones d'intervention régulières au sud de la Somme. Notre base de Talmas (80260) est à environ 55 minutes de Montdidier, et nous intervenons sur toute la frange Somme/Oise : Roye, Lassigny, Noyon, Rollot et les communes rurales du plateau de Santerre. Nous travaillons pour des exploitants agricoles, des industriels de la zone agro-industrielle et des collectivités.",
  },
  {
    q: "Réalisez-vous des plateformes industrielles et agro-industrielles dans le Santerre ?",
    a: "Oui. Le triangle Montdidier–Roye–Noyon est une zone agro-industrielle importante (sucreries, malteries, logistique agricole). Nous réalisons des plateformes pour bâtiments industriels, des voiries d'accès poids lourds, des parkings et des raccordements réseaux. Nos pelles 20-40 t et notre bulldozer GPS permettent de traiter des volumes importants avec une précision centimétrique.",
  },
  {
    q: "Comment gérez-vous le drainage des sols argileux autour de Montdidier ?",
    a: "Le plateau de Santerre présente des sols argilo-calcaires qui se comportent mal en conditions humides : gonflement, tassement, mauvaise portance. Nous maîtrisons ces sols depuis de nombreuses années. Pour les plateformes, nous préconisons un traitement à la chaux ou un géotextile selon les cas. Pour les drainages agricoles, nous posons des drains rigides ou flexibles adaptés à la profondeur de la nappe et à la perméabilité des horizons. Nos équipes ont l'habitude de travailler en automne-hiver sur ces terrains difficiles.",
  },
  {
    q: "Intervenez-vous pour des voiries agricoles et des accès de corps de ferme dans le Santerre ?",
    a: "Absolument. Les grandes exploitations agricoles du Santerre génèrent des besoins importants en voiries adaptées aux engins agricoles modernes (moissonneuses, ensileuses, bennes 30 t). Nous réalisons des chemins d'exploitation en grave naturelle ou enrobé, des cours de ferme, des aires de retournement et des raccordements à la voirie publique. Nous connaissons les contraintes de passage des engins agricoles et les normes de charge à l'essieu.",
  },
];

const prestations = [
  {
    icon: "🏗️",
    title: "Plateformes industrielles",
    desc: "Terrassement de plateformes pour bâtiments agro-industriels, logistiques, entrepôts frigo. Capacité plurimilliers de m³, bulldozer GPS.",
  },
  {
    icon: "🌾",
    title: "Terrassement agricole",
    desc: "Hangars, silos, cours de ferme, chemins d'exploitation sur le plateau de Santerre. Partenaire des grandes exploitations.",
  },
  {
    icon: "💧",
    title: "Drainage sols argileux",
    desc: "Pose de drains sur sols argilo-calcaires, traitement à la chaux, géotextiles. Expertise des sols hydromorphes du Santerre.",
  },
  {
    icon: "⛏️",
    title: "Réseaux VRD & tranchées",
    desc: "Assainissement EU/EP, eau potable, électricité, fibre. DT-DICT systématique. Agents AIPR certifiés.",
  },
  {
    icon: "🛣️",
    title: "Voirie & enrobé",
    desc: "Voiries agricoles et industrielles, enrobé, parkings PL, trottoirs. Connaissance des contraintes de charge à l'essieu.",
  },
  {
    icon: "🏘️",
    title: "Terrassement particuliers",
    desc: "Maisons individuelles, allées, piscines, assainissement non collectif. Mini-pelles pour accès étroits.",
  },
];

export default function TerrassementMontdidierPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[{ name: "Terrassement Montdidier", href: "/terrassement-montdidier" }]}
      />
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/terrassement-montdidier" />

      {/* HERO */}
      <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/terrassementgrandchantier.jpg"
            alt="Terrassement plateforme agricole Montdidier Santerre Vilbert TP"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 md:py-32">
          <div className="inline-block bg-[#b5451b] text-white text-sm font-semibold px-3 py-1 rounded mb-4 uppercase tracking-wide">
            Somme · Montdidier (80) · Santerre · Roye · Noyon
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Terrassement agricole & travaux publics<br />
            <span className="text-[#f5b800]">à Montdidier et dans le Santerre-Oise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Vilbert TP, expert du sol picard, réalise vos terrassements, drainages, plateformes
            industrielles et voiries agricoles à Montdidier et sur toute la frange Somme/Oise.
            Pelles jusqu&apos;à 40 t, bulldozer GPS. Devis gratuit.
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
              { value: "55 min", label: "De Montdidier" },
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
              Terrassement dans le Santerre, à la frontière de l&apos;Oise
            </h2>
            <p className="text-gray-700 mb-4">
              Montdidier, au sud de la Somme, marque la transition entre le plateau de Santerre
              et les vallées de l&apos;Oise. Ce territoire est l&apos;un des plus productifs
              de la grande culture française : betterave sucrière, céréales, pommes de terre
              industrielles alimentent les filières agro-industrielles de la région.
            </p>
            <p className="text-gray-700 mb-4">
              La proximité de <strong>Noyon</strong> et de <strong>Roye</strong> en fait également
              une zone logistique et industrielle dynamique. Les besoins en <strong>plateformes
              industrielles</strong>, en voiries poids lourds et en réseaux sont importants et
              en croissance.
            </p>
            <p className="text-gray-700">
              Le défi majeur de ce territoire est <strong>la gestion des sols argileux</strong> :
              en période humide, les sols du Santerre gonflent, se tassent et perdent leur portance.
              Vilbert TP maîtrise ces contraintes et propose des solutions techniques adaptées
              (traitement à la chaux, drains, géotextiles).
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/terrassement1.jpg"
              alt="Terrassement agricole plateau Santerre Montdidier Vilbert TP"
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
            Nos interventions à Montdidier et dans le Santerre
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Plateformes industrielles, drainage agricole, voiries — Vilbert TP est le
            partenaire TP de référence du Santerre picard.
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
              Drainage et sols argileux :<br />notre expertise du Santerre
            </h2>
            <p className="text-gray-700 mb-4">
              Le plateau de Santerre présente une géologie complexe : des limons fertiles
              en surface recouvrant des argiles à silex et des formations crétacées.
              En profondeur, l&apos;argile crée des horizons imperméables qui favorisent
              l&apos;engorgement hivernal et le compactage sous charge.
            </p>
            <p className="text-gray-700 mb-4">
              Pour les plateformes industrielles et agricoles, nous mettons en œuvre
              les solutions techniques adaptées :
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Reconnaissance géotechnique préalable (sondages, essais)",
                "Traitement des sols à la chaux vive ou hydraulique",
                "Pose de géotextiles de séparation et de renforcement",
                "Réseaux de drainage par drains agricoles ou collecteurs",
                "Couches de forme en matériaux insensibles à l'eau",
                "Compactage contrôlé par couches avec mesures densitométriques",
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
                alt="Drainage réseau assainissement Santerre Montdidier Vilbert TP"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#b5451b]/5 border border-[#b5451b]/20 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">
                Secteur couvert autour de Montdidier
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {[
                  "Montdidier — Roye — Lassigny",
                  "Noyon — Ribécourt-Dreslincourt",
                  "Rollot — Tricot — Estrées-Saint-Denis",
                  "Compiègne (frange nord) — Ressons-sur-Matz",
                  "Plateau de Santerre et vallée de l'Avre",
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
            Pourquoi Vilbert TP à Montdidier ?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Expertise des sols picards, certification MASE, matériel adapté et réactivité.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏅",
                title: "Certifié MASE",
                desc: "Sécurité et qualité — indispensable pour les industriels agro-alimentaires et les marchés publics.",
              },
              {
                icon: "🔬",
                title: "Expert sols argileux",
                desc: "Traitement à la chaux, géotextiles, drainage — nous maîtrisons les sols difficiles du Santerre.",
              },
              {
                icon: "🚜",
                title: "Pelles 5–40 t",
                desc: "Toute la gamme d'engins pour chantiers agricoles, industriels et particuliers, en propre.",
              },
              {
                icon: "📡",
                title: "Bulldozer GPS",
                desc: "Nivellement de précision pour grandes plateformes — gain de temps et réduction des reprises.",
              },
              {
                icon: "🛣️",
                title: "Voirie agricole",
                desc: "Connaissance des contraintes de charge liées aux engins agricoles modernes.",
              },
              {
                icon: "🌱",
                title: "Charte CO2",
                desc: "Transports optimisés, flotte engagée dans la réduction des émissions carbone.",
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
          Questions fréquentes — Terrassement à Montdidier
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
            Un projet TP à Montdidier ou dans le Santerre ?
          </h2>
          <p className="text-lg text-[#1a1a1a]/80 mb-8">
            Plateforme agricole, drainage, voirie industrielle ou réseaux — contactez Vilbert TP
            pour un devis gratuit, adapté aux spécificités du sol picard.
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
            Basés à Talmas (80260) · Sud Somme · Certifié MASE · Devis sous 24 h
          </p>
        </div>
      </section>
    </>
  );
}
