import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Vilbert TP | Terrassement · Voirie · Réseaux — Somme (80) Hauts-de-France",
  description:
    "Vilbert TP — entreprise familiale de travaux publics : terrassement, voirie, réseaux, travaux pour particuliers. Devis gratuit. Somme, Oise, Pas-de-Calais. ☎ 03 22 93 02 86.",
};

const services = [
  { icon: "🏗️", title: "Terrassement", desc: "Bulldozer GPS, fouilles, remblais, agricole. Pelles jusqu'à 40 t.", href: "/terrassement", img: "/terrassementgrandchantier.jpg" },
  { icon: "🛣️", title: "Voirie & Aménagement", desc: "Enrobé, pavage, bordures, viabilisation de lotissements.", href: "/voirie", img: "/posedenrobes.jpg" },
  { icon: "🔧", title: "Réseaux", desc: "Assainissement, eau potable, électricité, gaz, fibre — agents AIPR.", href: "/reseaux", img: "/vrd.jpg" },
  { icon: "🪨", title: "Enrochement", desc: "Protection littorale, soutènement, jardins, grands chantiers.", href: "/enrochement", img: "/enrochement.jpg" },
  { icon: "🚜", title: "Location d'engins", desc: "Pelle, bulldozer GPS, mini-pelle — avec chauffeur CACES.", href: "/location-engins", img: "/locationenginavecchauffeur.jpg" },
  { icon: "🏠", title: "Travaux Particuliers", desc: "Allée enrobée, terrasse, clôtures, assainissement individuel.", href: "/travaux-particuliers", img: "/travauxparticuliers.jpg" },
  { icon: "♻️", title: "Broyage & Valorisation", desc: "Concassage sur site, démolition, Vilbert Recyclage.", href: "/broyage-concassage", img: "/creationbassin.jpg" },
  { icon: "⛏️", title: "Extraction de craie", desc: "Carrières Hauts-de-France — remblai et agriculture.", href: "/extraction-craie", img: "/terrassementagricole.jpg" },
];

const chiffres = [
  { val: "+30 ans", label: "d'expérience" },
  { val: "40 t", label: "pelle max" },
  { val: "70", label: "collaborateurs" },
  { val: "MASE", label: "certifié" },
];

const realisations = [
  { label: "Terrassement grand chantier", cat: "Terrassement", src: "/terrassementgrandchantier.jpg" },
  { label: "Pose d'enrobé voirie", cat: "Voirie", src: "/posedenrobes.jpg" },
  { label: "Enrochement soutènement", cat: "Enrochement", src: "/enrochement.jpg" },
  { label: "VRD réseaux enterrés", cat: "Réseaux", src: "/vrd.jpg" },
  { label: "Création de bassin", cat: "Terrassement", src: "/creationbassin.jpg" },
  { label: "Aménagement particulier", cat: "Particuliers", src: "/travauxparticuliers.jpg" },
];

const engagements = [
  { icon: "🛡️", titre: "Certifié MASE", desc: "Sécurité, santé, environnement — audité tous les 3 ans." },
  { icon: "🚛", titre: "Charte CO2", desc: "Camions signataires de la Charte Objectif CO2." },
  { icon: "🌿", titre: "Faible impact", desc: "Charte chantier écologique, valorisation des déchets." },
  { icon: "👷", titre: "Équipes qualifiées", desc: "100% CACES, AIPR, N1/N2 — formation continue." },
];

const clientTypes = [
  { icon: "🏘️", title: "Particuliers", desc: "Allée, terrasse, clôture, assainissement.", cta: "En savoir plus", href: "/travaux-particuliers" },
  { icon: "🏛️", title: "Collectivités", desc: "Voirie communale, réseaux, aménagements urbains.", cta: "Nos références", href: "/contact" },
  { icon: "🏗️", title: "Professionnels & BTP", desc: "Viabilisation, VRD, terrassement grands volumes.", cta: "Nous contacter", href: "/contact" },
];

const specialites = [
  { icon: "🏛️", label: "Fouilles archéologiques", sub: "Partenaire INRAP", href: "/fouilles-archeologiques" },
  { icon: "⚠️", label: "Zones risque obus", sub: "Agents formés Picardie", href: "/fouilles-archeologiques" },
  { icon: "🧹", label: "Balayage de route", sub: "Camion balayeur", href: "/balayage-route" },
  { icon: "📐", label: "Accompagnement projet", sub: "Plans · Planning · Études", href: "/accompagnement-projet" },
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

        <div className="max-w-7xl mx-auto px-4 pt-10 pb-6 md:py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Texte */}
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-5 tracking-widest">
                📍 Somme · Oise · Pas-de-Calais
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
                Terrassement,<br />
                <span className="text-[#f5b800]">Voirie</span> &<br />
                Réseaux
              </h1>
              <p className="text-base sm:text-lg text-orange-100 mb-7 max-w-xl">
                Vilbert TP — entreprise familiale depuis <strong>+30 ans</strong> en Hauts-de-France.
                Flotte propre, certifiés MASE, devis gratuit sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded-xl text-lg hover:bg-[#ffd44d] transition-colors shadow-lg text-center">
                  📞 03 22 93 02 86
                </a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded-xl text-lg hover:bg-white hover:text-[#b5451b] transition-colors text-center">
                  Devis gratuit →
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-orange-300 text-sm mt-4">
                <span>⏱️ Réponse 24h</span>
                <span>🚜 Flotte propre</span>
                <span>🛡️ Certifié MASE</span>
              </div>
            </div>

            {/* Photo mobile */}
            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl w-full" style={{ height: 220 }}>
              <Image src="/hero.jpg" alt="Chantier Vilbert TP — terrassement Hauts-de-France" fill priority className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Photo desktop */}
            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 440 }}>
              <Image src="/hero.jpg" alt="Chantier Vilbert TP — terrassement Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/20 bg-black/30 backdrop-blur-sm">
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

        {/* Stats bar mobile */}
        <div className="lg:hidden grid grid-cols-4 divide-x divide-white/20 bg-black/30">
          {chiffres.map((s) => (
            <div key={s.label} className="py-3 text-center px-1">
              <div className="text-base font-black text-[#f5b800] leading-tight">{s.val}</div>
              <div className="text-white/70 text-[10px] mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-5">Nous intervenons pour</p>
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {clientTypes.map((c) => (
              <Link key={c.title} href={c.href} className="group border border-gray-700 rounded-xl p-4 md:p-6 hover:border-[#f5b800] transition-colors text-center md:text-left">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{c.icon}</div>
                <h3 className="font-black text-sm md:text-lg text-white mb-1 md:mb-2 group-hover:text-[#f5b800] transition-colors leading-tight">{c.title}</h3>
                <p className="text-gray-400 text-xs hidden md:block mb-3">{c.desc}</p>
                <span className="text-[#f5b800] text-xs md:text-sm font-bold">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-[#b5451b] mb-3">Nos domaines d'expertise</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">Du terrassement à la viabilisation complète — tout en interne, une seule responsabilité.</p>
          </div>
          {/* Mobile : grille 2 colonnes avec photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#b5451b] hover:shadow-lg transition-all">
                <div className="relative h-28 md:h-36 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 768px) 25vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-xl">{s.icon}</div>
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-black text-gray-900 text-xs md:text-sm leading-tight group-hover:text-[#b5451b] transition-colors mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed hidden md:block">{s.desc}</p>
                  <span className="text-[#b5451b] text-xs font-bold mt-1 hidden md:block">Voir →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block bg-[#b5451b] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#d4581f] transition-colors text-sm md:text-base">
              Voir toutes nos prestations →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ RÉALISATIONS ═══ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
              Nos <span className="text-[#b5451b]">réalisations</span>
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">Quelques exemples de chantiers récents en Hauts-de-France.</p>
          </div>

          {/* Grille mobile : 2 col · desktop : 3 col */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
            {realisations.map((r) => (
              <div key={r.src} className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={r.src}
                  alt={r.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="block text-[10px] md:text-xs font-bold text-[#f5b800] uppercase tracking-wide">{r.cat}</span>
                  <span className="block text-white font-bold text-xs md:text-sm leading-tight">{r.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/realisations" className="inline-block border-2 border-[#b5451b] text-[#b5451b] font-bold px-8 py-3 rounded-xl hover:bg-[#b5451b] hover:text-white transition-colors text-sm md:text-base">
              Voir toutes les réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENTS ═══ */}
      <section className="py-12 md:py-16 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-3">Nos engagements</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-3" />
            <p className="text-orange-200 max-w-xl mx-auto text-sm md:text-base">MASE · Charte CO2 · Équipes certifiées · Chantier faible impact.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {engagements.map((e) => (
              <div key={e.titre} className="bg-white/10 rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-3xl mb-2 md:mb-3">{e.icon}</div>
                <h3 className="font-black text-[#f5b800] text-sm md:text-lg mb-1 md:mb-2">{e.titre}</h3>
                <p className="text-orange-100 text-xs md:text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/engagements" className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#b5451b] transition-colors text-sm">
              Nos certifications & politique SSE →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SPÉCIALITÉS ═══ */}
      <section className="py-10 md:py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-6">Spécialités uniques en Hauts-de-France</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {specialites.map((s) => (
              <Link key={s.label} href={s.href} className="group bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:border-[#f5b800] transition-colors text-center">
                <div className="text-2xl md:text-3xl mb-2">{s.icon}</div>
                <h3 className="font-black text-white text-xs md:text-sm group-hover:text-[#f5b800] transition-colors leading-tight">{s.label}</h3>
                <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ZONE ═══ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Zone d'intervention
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-5">
                Hauts-de-France :<br />
                <span className="text-[#b5451b]">Somme, Oise & Pas-de-Calais</span>
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Basés à Talmas (80260), nous intervenons dans la <strong>Somme (80)</strong>, l'<strong>Oise (60)</strong> et le <strong>Pas-de-Calais (62)</strong>.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { dept: "80", label: "Somme", villes: "Amiens, Abbeville, Péronne…" },
                  { dept: "60", label: "Oise", villes: "Beauvais, Compiègne…" },
                  { dept: "62", label: "Pas-de-Calais", villes: "Arras, Lens…" },
                ].map((d) => (
                  <div key={d.dept} className="bg-gray-50 rounded-xl p-3 md:p-4 text-center border border-gray-100">
                    <div className="text-xl md:text-2xl font-black text-[#b5451b]">{d.dept}</div>
                    <div className="font-bold text-gray-900 text-xs md:text-sm">{d.label}</div>
                    <div className="text-gray-500 text-[10px] md:text-xs mt-1 hidden sm:block">{d.villes}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-[#ffd44d] transition-colors text-sm md:text-base">
                Vérifier ma zone →
              </Link>
            </div>
            {/* Carte masquée sur mobile pour alléger la page */}
            <div className="hidden lg:block bg-gray-100 rounded-2xl overflow-hidden" style={{ height: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336000!2d2.3!3d50.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd573b2c3a7f7d%3A0x0!2sSomme%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Zone d'intervention Vilbert TP"
              />
            </div>
            {/* Version mobile : lien maps */}
            <div className="lg:hidden bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
              <p className="text-gray-500 text-sm mb-3">📍 Ruelle Mayeux, 80260 Talmas</p>
              <a
                href="https://share.google/AiI8apyJiUMyka8p9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#b5451b] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#d4581f] transition-colors text-sm"
              >
                📍 Voir sur Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
              Guides & <span className="text-[#b5451b]">conseils travaux</span>
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base">Nos experts partagent leurs connaissances pour vos projets.</p>
          </div>
          {/* Mobile : scroll horizontal */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-3 md:gap-6 snap-x snap-mandatory md:overflow-visible">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all flex-shrink-0 w-72 md:w-auto snap-start"
              >
                <div className="relative overflow-hidden bg-gray-200" style={{ height: 160 }}>
                  <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(min-width: 768px) 33vw, 288px" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#b5451b] text-white text-xs font-bold px-2 py-0.5 rounded">{post.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1.5">⏱️ {post.readingTime} min</p>
                  <h3 className="font-black text-gray-900 text-sm leading-tight group-hover:text-[#b5451b] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2 hidden md:block">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="inline-block border-2 border-[#b5451b] text-[#b5451b] font-bold px-8 py-3 rounded-xl hover:bg-[#b5451b] hover:text-white transition-colors text-sm md:text-base">
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ MASE ═══ */}
      <section className="py-10 md:py-12 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 rounded-2xl p-6 border border-white/10">
            <Image
              src="/Logo-Mase-Hdf-2019-baseline.jpg"
              alt="Certification MASE Hauts-de-France — Vilbert TP"
              width={150}
              height={75}
              className="object-contain bg-white rounded-xl p-3 flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg md:text-xl font-black text-[#f5b800] mb-2">Entreprise certifiée MASE Hauts-de-France</h2>
              <p className="text-gray-300 text-sm md:text-base max-w-xl">
                La certification MASE atteste de notre engagement pour la <strong className="text-white">sécurité des équipes</strong>, la qualité des interventions et le <strong className="text-white">respect de l'environnement</strong>.
              </p>
              <Link href="/engagements" className="inline-block mt-3 text-[#f5b800] font-bold hover:underline text-sm">
                Notre politique SSE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="bg-[#f5b800] py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
            Votre projet commence ici
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Devis gratuit, rapide et sans engagement. Réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-8 py-5 rounded-xl text-xl md:text-2xl hover:bg-gray-800 transition-colors shadow-lg">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-lg md:text-xl hover:bg-gray-50 transition-colors shadow-lg">
              ✉️ Envoyer un message
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-5">Lun–Ven · 9h–12h30 et 13h30–17h30</p>
        </div>
      </section>
    </>
  );
}
