import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Vilbert TP — Entreprise Familiale de Travaux Publics",
  description:
    "Vilbert TP, filiale du Groupe Vilbert : plus de 30 ans d'expertise dans les travaux publics en Hauts-de-France. Terrassement, voirie, réseaux. Découvrez notre histoire.",
};

const valeurs = [
  { icon: "👨‍👩‍👧‍👦", titre: "Entreprise familiale", desc: "Transmis de génération en génération, le savoir-faire Vilbert est au cœur de chaque chantier." },
  { icon: "🛡️", titre: "Sécurité avant tout", desc: "Protection de nos équipes et des riverains — respect strict des normes et consignes de sécurité." },
  { icon: "🌿", titre: "Respect de l'environnement", desc: "Conformité aux normes environnementales, gestion responsable des matériaux et déchets de chantier." },
  { icon: "🤝", titre: "Proximité client", desc: "Relations de qualité avec nos donneurs d'ordres et les riverains. Nous sommes à l'écoute." },
];

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            À propos
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            L'entreprise <span className="text-[#f5b800]">Vilbert TP</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Filiale du Groupe Vilbert, Vilbert TP est une entreprise familiale spécialisée
            dans les travaux publics depuis plus de 30 ans en Hauts-de-France.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* HISTOIRE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              30 ans d'expertise en <span className="text-[#b5451b]">travaux publics</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Vilbert TP est une entreprise familiale dont les racines sont profondément ancrées
              dans les Hauts-de-France. Depuis plus de 30 ans, nous accompagnons particuliers,
              collectivités et professionnels dans leurs projets de terrassement, voirie et réseaux.
            </p>
            <p className="text-gray-600 mb-4">
              Notre flotte propre d'engins (pelles hydrauliques, mini-pelles, niveleuses)
              nous confère une autonomie totale et une réactivité sans intermédiaire,
              quelle que soit la taille du chantier.
            </p>
            <p className="text-gray-600 mb-6">
              Très attachée à la sécurité et au respect des normes environnementales,
              l'entreprise entretient des relations de qualité avec ses donneurs d'ordres
              et les riverains de chaque chantier.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "+30 ans", label: "d'expérience" },
                { val: "70", label: "collaborateurs Groupe" },
                { val: "3", label: "départements couverts" },
                { val: "Flotte", label: "d'engins en propriété" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-[#b5451b]">{s.val}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 450 }}>
            <Image
              src="/chantier.jpg"
              alt="Chantier Vilbert TP — entreprise familiale de travaux publics Hauts-de-France"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Nos valeurs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{v.titre}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUPE VILBERT */}
      <section className="py-16 bg-[#b5451b] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">
            Une filiale du <span className="text-[#f5b800]">Groupe Vilbert</span>
          </h2>
          <p className="text-orange-200 max-w-2xl mx-auto mb-8">
            Vilbert TP fait partie du Groupe Vilbert, acteur majeur des services aux entreprises
            et collectivités en Hauts-de-France avec plusieurs filiales complémentaires.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Vilbert TP", desc: "Travaux publics & particuliers", href: "/", active: true },
              { name: "Vilbert Hydro", desc: "Débouchage, curage & assainissement", href: "https://www.vilbert-hydro.fr" },
              { name: "Vilbert Recyclage", desc: "Location de bennes & valorisation déchets", href: "https://www.vilbert-recyclage.fr" },
            ].map((f) => (
              <a
                key={f.name}
                href={f.href}
                className={`rounded-xl p-5 border-2 transition-colors ${
                  f.active
                    ? "bg-white/20 border-[#f5b800] text-white"
                    : "border-white/30 text-orange-200 hover:border-[#f5b800] hover:text-white"
                }`}
              >
                <p className="font-black text-lg">{f.name}</p>
                <p className="text-sm mt-1 opacity-80">{f.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MASE */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/Logo-Mase-Hdf-2019-baseline.jpg"
              alt="Certification MASE Hauts-de-France"
              width={200}
              height={100}
              className="object-contain rounded-xl border border-gray-100 p-3 flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">
                Certifiés <span className="text-[#b5451b]">MASE Hauts-de-France</span>
              </h2>
              <p className="text-gray-600 mb-3">
                La certification MASE (Manuel d'Amélioration Sécurité des Entreprises) atteste
                que Vilbert TP respecte les plus hauts standards de management SSE :
                sécurité des équipes, qualité d'intervention, respect de l'environnement.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                {["Analyse des risques systématique avant chaque chantier", "Formation et habilitations à jour pour tous les collaborateurs", "Plans de prévention et procédures documentées", "Audit externe indépendant tous les 3 ans"].map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#f5b800] flex-shrink-0 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-gray-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Travaillons ensemble</h2>
          <p className="text-gray-700 mb-6">Devis gratuit — réponse sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl text-xl hover:bg-gray-800 transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-50 transition-colors">
              ✉️ Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
