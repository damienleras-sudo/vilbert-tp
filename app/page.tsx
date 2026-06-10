import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vilbert TP | Terrassement · Voirie · Réseaux — Somme (80) Hauts-de-France",
  description:
    "Vilbert TP — entreprise familiale de travaux publics : terrassement, voirie, réseaux, travaux pour particuliers. Devis gratuit. Somme, Oise, Pas-de-Calais. ☎ 03 22 93 02 86.",
};

const services = [
  {
    icon: "🏗️",
    title: "Terrassement",
    desc: "Fouilles, remblais, évacuation de terres et gravats. Plusieurs milliers de m³ déplacés chaque année avec notre flotte propre d'engins.",
    href: "/terrassement",
  },
  {
    icon: "🛣️",
    title: "Voirie & Aménagement",
    desc: "Enrobé, bordures béton et granit, pavage, dallage, viabilisation de lotissements et signalisation routière.",
    href: "/voirie",
  },
  {
    icon: "🔧",
    title: "Réseaux",
    desc: "Assainissement urbain, conduites PVC/grès/béton/fonte, raccordements ENEDIS, GRDF, France Telecom, Véolia.",
    href: "/reseaux",
  },
  {
    icon: "🏠",
    title: "Travaux Particuliers",
    desc: "Allées en enrobé, terrasses béton, clôtures, assainissement individuel — solutions clé en main pour particuliers.",
    href: "/travaux-particuliers",
  },
];

const chiffres = [
  { val: "+30 ans", label: "d'expérience" },
  { val: "3", label: "départements" },
  { val: "70", label: "collaborateurs" },
  { val: "Flotte", label: "propre d'engins" },
];

const clientTypes = [
  {
    icon: "🏘️",
    title: "Particuliers",
    desc: "Allée, terrasse, clôture, assainissement — devis gratuit et délais respectés.",
    cta: "Je suis particulier",
    href: "/travaux-particuliers",
  },
  {
    icon: "🏗️",
    title: "Collectivités & Mairies",
    desc: "Voirie, aménagements urbains, réseaux. Partenaire de confiance des collectivités locales.",
    cta: "Je suis collectivité",
    href: "/contact",
  },
  {
    icon: "🔨",
    title: "Promoteurs & BTP",
    desc: "Viabilisation de terrains, réseaux VRD, terrassement grands volumes. Offre adaptée aux professionnels.",
    cta: "Je suis professionnel",
    href: "/contact",
  },
];

const engagements = [
  {
    titre: "Flotte propre",
    desc: "Pelles, niveleuses, mini-pelles en propriété — autonomie totale pour vos chantiers.",
  },
  {
    titre: "Sécurité & Normes",
    desc: "Très attachés à la sécurité des équipes et au respect des normes environnementales.",
  },
  {
    titre: "Proximité client",
    desc: "Relations de qualité avec les riverains et les donneurs d'ordres. Tarifs adaptés, délais respectés.",
  },
  {
    titre: "Expertise durable",
    desc: "30 ans de savoir-faire transmis. Entreprise familiale ancrée dans les Hauts-de-France.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6 tracking-widest">
                📍 Somme (80) · Oise (60) · Pas-de-Calais (62)
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Terrassement,<br />
                <span className="text-[#f5b800]">Voirie</span> &<br />
                Réseaux
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Vilbert TP intervient sur tous vos projets de <strong>travaux publics et particuliers</strong> en Hauts-de-France.
                Entreprise familiale avec flotte propre d'engins, devis gratuit sous 24h.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0322930286"
                  className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg"
                >
                  📞 03 22 93 02 86
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors"
                >
                  Devis gratuit →
                </Link>
              </div>
              <p className="text-orange-300 text-sm mt-4">
                ⏱️ Réponse sous 24h · 🚜 Flotte propre · 📋 Devis sur mesure
              </p>
            </div>

            {/* Photo hero */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <Image
                src="/hero.jpg"
                alt="Chantier Vilbert TP — terrassement et travaux publics en Hauts-de-France"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20">
                {chiffres.map((s) => (
                  <div key={s.label} className="py-4 text-center">
                    <div className="text-2xl font-black text-[#f5b800]">{s.val}</div>
                    <div className="text-white/80 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Stats mobile */}
        <div className="lg:hidden bg-black/30 grid grid-cols-4 divide-x divide-white/20">
          {chiffres.map((s) => (
            <div key={s.label} className="py-4 text-center">
              <div className="text-xl font-black text-[#f5b800]">{s.val}</div>
              <div className="text-white/80 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* TYPES DE CLIENTS */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">Nous intervenons pour</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTypes.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group border border-gray-700 rounded-xl p-6 hover:border-[#f5b800] transition-colors"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-lg text-white mb-2 group-hover:text-[#f5b800] transition-colors">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                <span className="text-[#f5b800] text-sm font-bold">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#b5451b] mb-3">
              Nos domaines d'expertise
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Du terrassement à la viabilisation complète — Vilbert TP assure l'ensemble des travaux publics et particuliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#b5451b] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-[#b5451b] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[#b5451b] text-sm font-bold group-hover:underline">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-[#b5451b] text-white font-bold px-8 py-4 rounded hover:bg-[#d4581f] transition-colors"
            >
              Voir toutes nos prestations
            </Link>
          </div>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Zone d'intervention
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Hauts-de-France :<br />
                <span className="text-[#b5451b]">Somme, Oise & Pas-de-Calais</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Vilbert TP intervient dans les départements <strong>80 (Somme)</strong>, <strong>60 (Oise)</strong> et <strong>62 (Pas-de-Calais)</strong>.
                Nos équipes couvrent Amiens, Arras, Abbeville, Beauvais, Compiègne et de nombreuses communes alentour.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { dept: "80", label: "Somme", villes: "Amiens, Abbeville, Péronne…" },
                  { dept: "60", label: "Oise", villes: "Beauvais, Compiègne…" },
                  { dept: "62", label: "Pas-de-Calais", villes: "Arras, Lens…" },
                ].map((d) => (
                  <div key={d.dept} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <div className="text-2xl font-black text-[#b5451b]">{d.dept}</div>
                    <div className="font-bold text-gray-900 text-sm">{d.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{d.villes}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
              >
                Vérifier ma zone →
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden" style={{ height: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336000!2d2.3!3d50.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd573b2c3a7f7d%3A0x0!2sSomme%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Vilbert TP"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Nos engagements
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-orange-200 max-w-xl mx-auto">
              L'ADN d'une entreprise familiale : proximité, sécurité, expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((e) => (
              <div key={e.titre} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="font-black text-[#f5b800] text-lg mb-2">{e.titre}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Nos <span className="text-[#b5451b]">réalisations</span>
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600">Découvrez quelques-uns de nos chantiers récents.</p>
          </div>
          {/* Grille photos — placeholders en attendant les vraies photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Terrassement", src: "/realisations/terrassement-1.jpg" },
              { label: "Voirie enrobée", src: "/realisations/voirie-1.jpg" },
              { label: "Pose de réseaux", src: "/realisations/reseaux-1.jpg" },
            ].map((r) => (
              <div key={r.label} className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden group">
                <Image
                  src={r.src}
                  alt={r.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/realisations"
              className="inline-block border-2 border-[#b5451b] text-[#b5451b] font-bold px-8 py-3 rounded hover:bg-[#b5451b] hover:text-white transition-colors"
            >
              Voir toutes les réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Votre projet commence ici
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Contactez nos équipes pour un devis gratuit, rapide et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              ✉️ Envoyer un message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
