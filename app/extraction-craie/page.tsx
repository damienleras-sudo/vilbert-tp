import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extraction & Vente de Craie Somme (80) | Remblai et Agriculture — Vilbert TP",
  description:
    "Vilbert TP extrait et commercialise de la craie de qualité depuis ses carrières en Hauts-de-France : remblai, sous-couche de voirie, épandage agricole, amendement calcaire. ☎ 03 22 93 02 86.",
  keywords: ["craie remblai Somme", "extraction craie Hauts-de-France", "vente craie 80", "amendement calcaire agriculture Somme", "épandage craie Picardie"],
};

const usages = [
  {
    icon: "🏗️",
    titre: "Remblai pour travaux publics",
    desc: "La craie est un matériau de remblai excellente qualité, très présent naturellement dans le sous-sol de la Somme. Légère, facile à compacter, elle est utilisée pour les remblais de tranchées, de chaussées et de plateformes.",
    avantages: ["Bonne portance après compactage", "Matériau local — faible empreinte transport", "Disponibilité garantie en grandes quantités"],
  },
  {
    icon: "🛣️",
    titre: "Sous-couche de voirie & couche de forme",
    desc: "La craie concassée ou tamisée est employée en couche de forme pour les voiries légères, chemins agricoles et pistes de chantier. Sa stabilité et son drainage naturel en font un choix économique.",
    avantages: ["Économique par rapport aux graves de carrière", "Disponible localement — délais courts", "Bonne perméabilité naturelle"],
  },
  {
    icon: "🌾",
    titre: "Épandage agricole & amendement calcaire",
    desc: "La craie, naturellement riche en carbonate de calcium (CaCO3), est un amendement calcaire de premier choix pour corriger l'acidité des sols agricoles picardonnais. Elle améliore la structure du sol et favorise l'activité microbienne.",
    avantages: ["Taux CaCO3 élevé — efficacité prouvée", "Réduction de l'acidité des sols", "Amélioration de la structure argileuse", "Meilleure disponibilité des éléments nutritifs"],
  },
  {
    icon: "🏠",
    titre: "Travaux de drainage & jardin",
    desc: "La craie grossière est utilisée pour le drainage des jardins et espaces verts, comme drain naturel autour des fondations, ou en fond de bassin pour la filtration.",
    avantages: ["Drainage naturel efficace", "Stabilisation des pentes"],
  },
];

const faqs = [
  {
    q: "Quelles sont les caractéristiques de votre craie ?",
    a: "Notre craie est extraite depuis des carrières en Hauts-de-France. Elle présente un taux de carbonate de calcium (CaCO3) supérieur à 90 %, une finesse variable selon le broyage (0/20 pour remblai, 0/5 pour épandage). Elle est naturellement pure, sans contaminant.",
  },
  {
    q: "Livrez-vous en vrac ou en big-bag ?",
    a: "Nous livrons en vrac par camion benne (à partir de quelques m³) ou en big-bag pour les plus petites quantités. Nous pouvons également réaliser l'épandage directement sur vos parcelles avec notre matériel.",
  },
  {
    q: "Quelle quantité de craie faut-il pour l'amendement agricole ?",
    a: "Les doses d'amendement calcaire sont déterminées par l'analyse de sol. En règle générale, on applique entre 2 et 5 tonnes de CaCO3/hectare selon le pH du sol. Votre chambre d'agriculture ou votre coopérative peut vous conseiller sur la dose optimale.",
  },
  {
    q: "La craie est-elle un bon matériau de remblai en zone humide ?",
    a: "La craie peut être sensible à l'eau en grande quantité (dissolution partielle sur le très long terme). Pour les remblais en zone humide ou soumis à des nappes phréatiques, nous vous conseillerons sur le compactage et les éventuelles protections à mettre en place.",
  },
];

export default function ExtractionCraiePage() {
  return (
    <>
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">⛏️ Carrières</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Hauts-de-France</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Extraction &<br /><span className="text-[#f5b800]">Vente de Craie</span><br />
                <span className="text-2xl text-orange-200">Remblai · Agriculture · Voirie</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Vilbert TP exploite ses propres carrières de craie en Hauts-de-France. Un matériau <strong>100 % local, économique et naturellement pur</strong>, pour vos remblais, voiries et amendements agricoles.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Demander un devis →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/carrieredecraie.jpg" alt="Carrière de craie — extraction Vilbert TP Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 rounded-xl p-4">
                  <p className="text-[#f5b800] font-black text-sm">Craie extraite localement en Hauts-de-France</p>
                  <p className="text-gray-300 text-xs mt-1">CaCO3 &gt; 90% · Remblai · Agriculture · Voirie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* GALERIE CARRIÈRE */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/carrieredecraie.jpg", label: "Carrière de craie" },
              { src: "/extractiondecraie.jpg", label: "Extraction en cours" },
              { src: "/epandagecraie.jpg", label: "Épandage agricole" },
            ].map((p) => (
              <div key={p.src} className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image src={p.src} alt={p.label} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-white text-xs font-bold">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES CRAIE LOCALE */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ v: "100% local", d: "Carrières Hauts-de-France" }, { v: "CaCO3 > 90%", d: "Craie de haute qualité" }, { v: "Vrac & Big-bag", d: "Livraison flexible" }, { v: "Épandage", d: "Prestation complète" }].map(s => (
              <div key={s.v} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <div className="font-black text-[#f5b800]">{s.v}</div>
                <div className="text-gray-400 text-xs mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Applications de la craie Vilbert TP</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">La craie picarde est un matériau polyvalent, économique et naturel — utilisé depuis des siècles dans l'agriculture et les travaux publics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usages.map(u => (
              <div key={u.titre} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-[#b5451b] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{u.icon}</span>
                  <h3 className="text-xl font-black text-gray-900">{u.titre}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{u.desc}</p>
                <ul className="space-y-1">
                  {u.avantages.map(a => (
                    <li key={a} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGRICULTURE */}
      <section className="py-14 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">🌾 La craie pour l'agriculture picardonnaise</h2>
              <p className="text-orange-100 mb-4">
                Le sous-sol picardonnais est naturellement constitué de craie. Ce matériau est depuis toujours le principal amendement calcaire utilisé par les agriculteurs de la Somme et des Hauts-de-France pour corriger les sols acides.
              </p>
              <p className="text-orange-100 mb-6">
                Vilbert TP peut réaliser l'épandage directement sur vos parcelles avec son matériel adapté, ou vous livrer en vrac pour un épandage avec votre propre épandeur. Nous conseillons l'application en automne après la récolte.
              </p>
              <ul className="space-y-2 text-orange-200 text-sm">
                {["Correction du pH (acidification des sols)", "Amélioration de la structure du sol argileux", "Meilleure disponibilité de l'azote et du phosphore", "Stimulation de l'activité biologique du sol", "Alternative naturelle aux chaux industrielles"].map(e => (
                  <li key={e} className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span>{e}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-black text-[#f5b800] mb-4">Nos prestations craie agricole</h3>
              <div className="space-y-3">
                {[
                  ["Vente en vrac", "Livraison par camion benne sur vos parcelles"],
                  ["Big-bags", "Pour les petites surfaces ou le stockage"],
                  ["Épandage", "Avec notre matériel — prestation clé en main"],
                  ["Conseil", "Dosage adapté à votre analyse de sol"],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-3">
                    <span className="text-[#f5b800] font-black text-sm min-w-[90px]">{t}</span>
                    <span className="text-orange-200 text-sm">{d}</span>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="text-3xl font-black text-gray-900 mb-3">Besoin de craie pour votre projet ?</h2>
          <p className="text-gray-700 mb-8">Devis gratuit sur volumes et livraison — réponse sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
