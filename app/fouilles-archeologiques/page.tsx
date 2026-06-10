import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fouilles Archéologiques & Terrassement INRAP Somme (80) — Vilbert TP",
  description:
    "Vilbert TP réalise des fouilles archéologiques préventives pour l'INRAP depuis de nombreuses années. Précision, respect des vestiges, coordination avec les archéologues. Hauts-de-France. ☎ 03 22 93 02 86.",
  keywords: ["fouilles archéologiques Somme", "terrassement archéologie INRAP", "diagnostic archéologique Hauts-de-France", "terrassier archéologie préventive Picardie"],
};

const competences = [
  { titre: "Décapage de surface", desc: "Enlèvement mécanique en couches minces et contrôlées de la couche de labour et des niveaux archéologiques. Travail à la pelle à godet lisse, sans dents, pour préserver les vestiges." },
  { titre: "Tranchées de sondage", desc: "Ouverture de sondages linéaires sur prescription du SRA (Service Régional d'Archéologie) pour les diagnostics préalables aux permis d'aménager." },
  { titre: "Fouilles en aires ouvertes", desc: "Décapage large en bandes successives sous contrôle des archéologues. Tri des terres en dépôt pour fouille manuelle des structures identifiées." },
  { titre: "Gestion des déblais", desc: "Stockage organisé des terres selon leur nature (terre végétale, limons, craie), remblaiement après fouille, évacuation si nécessaire." },
  { titre: "Travail sous zones risque obus", desc: "En Picardie, certains sites archéologiques se trouvent dans des zones à risques d'engins de guerre (EG 14-18 ou 39-45). Nos agents sont formés pour intervenir dans ces conditions." },
  { titre: "Coordination avec les archéologues", desc: "Nos chefs de chantier sont habitués à travailler avec les équipes d'archéologues de l'INRAP et des autres opérateurs agréés. Réactivité, communication et respect des protocoles." },
];

export default function FouillesArcheologiquesPage() {
  return (
    <>
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🏛️ Archéologie</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Partenaire INRAP</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Picardie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Fouilles<br /><span className="text-[#f5b800]">Archéologiques</span><br />
                <span className="text-2xl text-orange-200">Partenaire INRAP depuis de nombreuses années</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                La Picardie est l'une des régions les plus riches en vestiges archéologiques de France. Vilbert TP intervient depuis de nombreuses années aux côtés de l'INRAP pour les fouilles préventives et les diagnostics archéologiques.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Nous contacter →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/terrassementgrandchantier.jpg" alt="Fouilles archéologiques préventives — Vilbert TP partenaire INRAP Picardie" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/70 rounded-xl p-4">
                  <p className="text-[#f5b800] font-black text-sm">🏛️ Partenaire INRAP — fouilles préventives</p>
                  <p className="text-gray-300 text-xs mt-1">Diagnostic · Décapage · Fouille ouverte · Zones obus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* CONTEXTE */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">🗺️ Picardie</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                La Picardie, <span className="text-[#b5451b]">terres d'histoire</span>
              </h2>
              <p className="text-gray-600 mb-4">
                La Picardie est une des régions les plus fouillées de France. Son sous-sol recèle des vestiges de toutes les périodes : Préhistoire, Antiquité gallo-romaine, Moyen Âge, et les traces des deux guerres mondiales. Chaque grand projet d'aménagement (lotissement, route, zone industrielle) peut déclencher une prescription de fouille préventive.
              </p>
              <p className="text-gray-600 mb-6">
                L'archéologie préventive impose des délais stricts et des techniques particulières. Vilbert TP maîtrise ces contraintes depuis de nombreuses années, en partenariat avec l'INRAP et les opérateurs agréés.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Préhistoire", "Gallo-romain", "Médiéval", "Moderne", "WWI/WWII", "INRAP"].map(t => (
                  <div key={t} className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100 text-sm font-semibold text-gray-700">{t}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#b5451b] text-white rounded-xl p-6">
                <h3 className="font-black text-lg mb-2">🏛️ Archéologie préventive — le principe</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Avant tout grand projet d'aménagement, les services de l'État (DRAC/SRA) peuvent prescrire un diagnostic archéologique, voire une fouille préventive. Ces opérations nécessitent un terrassier expérimenté capable de travailler avec précision sous la direction des archéologues.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2">⚠️ Zones à risques d'engins de guerre</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  En Picardie, de nombreux sites sont classés en zone à risques d'obus (EG 14-18 ou 39-45). Nos agents sont formés pour travailler dans ces conditions : reconnaissance des objets suspects, arrêt des travaux et appel au service de déminage, procédures d'urgence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos compétences en fouilles archéologiques</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">Le terrassement archéologique demande précision, lenteur contrôlée et communication permanente avec les équipes de fouille.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map(c => (
              <div key={c.titre} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-[#b5451b] transition-colors">
                <h3 className="font-black text-gray-900 mb-2">{c.titre}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES OBUS */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">⚠️ Sécurité</div>
              <h2 className="text-3xl font-black text-white mb-4">
                Intervention en <span className="text-[#f5b800]">zones à risques d'obus</span>
              </h2>
              <p className="text-gray-300 mb-4">
                La Picardie est marquée par les deux guerres mondiales. De nombreux secteurs — notamment dans la Somme — sont classés en zones à risques d'engins de guerre (EG). La présence d'obus non explosés dans le sous-sol y est documentée.
              </p>
              <p className="text-gray-300 mb-6">
                Vilbert TP a développé une expertise unique : nos équipes sont formées aux procédures à appliquer lors de la découverte d'un engin suspect — arrêt immédiat, périmètre de sécurité, contact avec le service de déminage (SDIS/Préfecture). Nous ne travaillons jamais à l'aveugle dans ces zones.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Formation spécifique de tous les agents intervenants", "Procédure documentée de gestion des découvertes d'engins", "Coordination préalable avec les autorités compétentes", "Expérience de terrain de plusieurs décennies en Picardie", "Coordination avec les archéologues sur les sites mixtes"].map(e => (
                  <li key={e} className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span>{e}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-black text-[#f5b800] text-lg mb-4">Pourquoi nous confier vos fouilles ?</h3>
              <div className="space-y-4">
                {[
                  { titre: "Expérience INRAP", desc: "Partenariat avec l'INRAP depuis de nombreuses années — nous connaissons les protocoles" },
                  { titre: "Précision technique", desc: "Travail à la pelle à godet lisse, décapage en passes millimétriques" },
                  { titre: "Réactivité", desc: "Mobilisation rapide sur prescription — délais tenus" },
                  { titre: "Zones obus", desc: "Formation spécifique — seule entreprise à vous assurer cette sécurité en Hauts-de-France" },
                ].map(i => (
                  <div key={i.titre} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#f5b800] text-gray-900 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="font-bold text-white text-sm">{i.titre}</p>
                      <p className="text-gray-400 text-xs">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Un projet de fouilles archéologiques ?</h2>
          <p className="text-gray-700 mb-8">Contactez-nous pour discuter de votre prescription archéologique ou de votre diagnostic.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Nous écrire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
