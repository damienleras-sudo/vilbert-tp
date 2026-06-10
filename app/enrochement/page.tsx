import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SchemaFAQ from "@/components/SchemaFAQ";
import SchemaBreadcrumb from "@/components/SchemaBreadcrumb";

export const metadata: Metadata = {
  title: "Enrochement Somme (80) | Soutènement, Protection Littoral, Maisons Individuelles — Vilbert TP",
  description:
    "Vilbert TP réalise vos enrochements : protection de berges et littoral, soutènement de talus, décoration paysagère pour particuliers et grands chantiers publics. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["enrochement Somme", "enrochement littoral Baie de Somme", "protection berge Hauts-de-France", "soutènement talus", "enrochement particulier maison"],
};

const usages = [
  {
    icon: "🌊",
    titre: "Protection du littoral & des berges",
    desc: "La Baie de Somme et les côtes picardonnaises sont exposées à l'érosion marine. Les enrochements constituent la solution la plus pérenne pour stabiliser les berges, protéger les propriétés riveraines et maintenir les accès. Vilbert TP dispose de l'expérience et du matériel pour intervenir sur les chantiers côtiers les plus techniques.",
    img: "/enrochement.jpg",
  },
  {
    icon: "🏠",
    titre: "Maisons individuelles & jardins",
    desc: "Soutènement de talus, création de murs décoratifs en pierres naturelles, délimitation de terrain, escaliers extérieurs, bassins ornementaux — l'enrochement apporte une touche naturelle et robuste à vos aménagements extérieurs, pour des décennies sans entretien.",
    img: "/travauxparticuliers.jpg",
  },
  {
    icon: "🏗️",
    titre: "Grands chantiers publics",
    desc: "Vilbert TP intervient sur les grands projets d'infrastructures : protection de remblais routiers, confortement de talus d'ouvrages d'art, protection de fondations contre l'érosion hydraulique, digues et protections de plans d'eau.",
    img: "/consolidationdeberge.jpg",
  },
  {
    icon: "🌾",
    titre: "Aménagements agricoles",
    desc: "Protection des fossés et cours d'eau agricoles contre l'érosion des berges, stabilisation d'accès à l'exploitation, création de bassins de rétention renforcés par enrochement.",
    img: "/terrassementagricole.jpg",
  },
];

const types = [
  { nom: "Enrochement calcaire", usage: "Soutènement, protection littoral, jardin" },
  { nom: "Enrochement granit", usage: "Milieux marins, exposition maximale, esthétique" },
  { nom: "Enrochement grès", usage: "Aménagements paysagers, terrasses, jardins" },
  { nom: "Gabions (corbeilles métalliques)", usage: "Soutènement, mur de sécurité, décoratif" },
  { nom: "Blocs cyclopéens", usage: "Grands chantiers, protection renforcée" },
  { nom: "Enrochement paysager", usage: "Jardins, massifs, délimitation de zones" },
];

const faqs = [
  {
    q: "Pourquoi choisir l'enrochement plutôt qu'un mur en béton ?",
    a: "L'enrochement présente plusieurs avantages : aspect naturel et intégration paysagère, drainage naturel (pas d'accumulation de pression hydraulique), durabilité exceptionnelle (50 à 100 ans), entretien quasi nul et coût souvent inférieur à un mur maçonné. En milieu marin, il résiste bien aux cycles gel/dégel et aux embruns salés.",
  },
  {
    q: "Intervenez-vous sur le littoral picardonnais ?",
    a: "Oui. Nous avons l'expérience des chantiers côtiers dans la Somme et sur le littoral des Hauts-de-France. Ces chantiers requièrent des autorisations spécifiques (CERFA littoral, coordination avec la DDTM) que nous maîtrisons.",
  },
  {
    q: "Quel volume minimum pour une intervention ?",
    a: "Nous intervenons à partir de quelques m³ pour un particulier (petit talus, jardin) jusqu'aux chantiers de plusieurs centaines de m³ pour des projets d'infrastructures. Nos mini-pelles permettent d'accéder aux espaces les plus contraints.",
  },
  {
    q: "Livrez-vous et posez-vous les enrochements ?",
    a: "Oui, nous gérons la totalité de la prestation : approvisionnement des rochers (calcaire, granit, grès selon projet), transport par nos propres camions, pose à la pelle hydraulique. Un seul interlocuteur, du devis à la livraison.",
  },
];

export default function EnrochementPage() {
  return (
    <>
      <SchemaFAQ faqs={faqs} pageUrl="https://www.vilbert-tp.fr/enrochement" />
      <SchemaBreadcrumb items={[{ name: "Enrochement", href: "/enrochement" }]} />
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🪨 Enrochement</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Littoral & Particuliers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Enrochement<br /><span className="text-[#f5b800]">Hauts-de-France</span><br />
                <span className="text-2xl text-orange-200">Littoral · Berges · Jardins · Grands chantiers</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                De la protection du littoral picardonnais aux aménagements paysagers de maisons individuelles, Vilbert TP pose vos enrochements avec <strong>précision et durabilité</strong>. Solution naturelle, esthétique, 50 ans sans entretien.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Devis gratuit →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/enrochement.jpg" alt="Enrochement — soutènement et protection berge Vilbert TP Hauts-de-France" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/60 rounded-xl p-4">
                  <p className="text-white font-black text-sm">🪨 Enrochement calcaire, granit, gabions</p>
                  <p className="text-gray-300 text-xs mt-1">Particuliers · Collectivités · Littoral · Agriculture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* AVANTAGES */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { v: "50–100 ans", l: "de durabilité" },
              { v: "0 entretien", l: "après pose" },
              { v: "Drainage", l: "naturel intégré" },
              { v: "100 % naturel", l: "impact minimal" },
            ].map(s => (
              <div key={s.l} className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                <div className="text-xl font-black text-[#f5b800]">{s.v}</div>
                <div className="text-gray-400 text-xs mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Pour quels chantiers ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">L'enrochement répond à des besoins très variés — du jardin particulier aux grands projets d'infrastructures littorales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usages.map(u => (
              <div key={u.titre} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:border-[#b5451b] hover:shadow-lg transition-all">
                {u.img && (
                  <div className="relative h-48 overflow-hidden">
                    <Image src={u.img} alt={u.titre} fill className="object-cover" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-3xl">{u.icon}</div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {!u.img && <span className="text-3xl">{u.icon}</span>}
                    <h3 className="text-xl font-black text-gray-900">{u.titre}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES DE ROCHES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Types d'enrochement proposés</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {types.map(t => (
              <div key={t.nom} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <p className="font-black text-[#b5451b]">🪨 {t.nom}</p>
                <p className="text-gray-600 text-sm mt-1">{t.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LITTORAL HIGHLIGHT */}
      <section className="py-14 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4">
                🌊 Spécialistes de la <span className="text-[#f5b800]">protection littorale</span>
              </h2>
              <p className="text-orange-100 mb-4">
                Le littoral des Hauts-de-France fait face à une érosion marine intense. Les tempêtes hivernales menacent les propriétés en bord de mer, les accès aux ports et les ouvrages côtiers. L'enrochement est la réponse technique la plus éprouvée.
              </p>
              <p className="text-orange-100 mb-6">
                Vilbert TP maîtrise les contraintes spécifiques des chantiers littoraux : fenêtres météo limitées, accessibilité en terrain meuble, exigences réglementaires (loi Littoral, DDTM), utilisation de granit hydrofuge résistant à l'eau salée et aux cycles gel/dégel.
              </p>
              <ul className="space-y-2 text-orange-200 text-sm">
                {["Coordination avec les services de l'État (DDTM)", "Granit haute résistance pour exposition maritime", "Géotextile de séparation intégré", "Suivi et ajustements après premières tempêtes"].map(e => (
                  <li key={e} className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span>{e}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-black text-[#f5b800] text-lg mb-4">Notre processus enrochement</h3>
              <ol className="space-y-3">
                {[
                  ["Visite et étude de sol", "Évaluation des contraintes, calcul dimensionnement"],
                  ["Devis détaillé", "Fournitures + pose + transport + remise en état"],
                  ["Approvisionnement matériaux", "Rochers sélectionnés selon calibre et nature requis"],
                  ["Terrassement support", "Préparation de la fondation, pose géotextile"],
                  ["Pose à la pelle", "Placement précis, blocage et calage des blocs"],
                  ["Remise en état finale", "Nettoyage, remblaiement, réception client"],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#f5b800] text-gray-900 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{t}</p>
                      <p className="text-orange-200 text-xs">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#b5451b] text-center mb-3">Questions fréquentes</h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-10" />
          <div className="space-y-4">
            {faqs.map(f => (
              <div key={f.q} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-black text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet d'enrochement ?</h2>
          <p className="text-gray-700 mb-8">Particulier, collectivité ou maître d'ouvrage — devis gratuit sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Devis en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
