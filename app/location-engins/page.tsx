import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location Engins avec Chauffeur Somme (80) | Pelle, Mini-Pelle, Bulldozer GPS — Vilbert TP",
  description:
    "Louez une pelle, mini-pelle, bulldozer GPS ou tombereau avec chauffeur CACES qualifié. Flotte propre renouvelée. Hauts-de-France. Devis gratuit 03 22 93 02 86.",
  keywords: ["location engin avec chauffeur Somme", "location pelle hydraulique 80", "location mini-pelle Amiens", "location bulldozer GPS Hauts-de-France"],
};

const engins = [
  {
    nom: "Pelles hydrauliques 5 à 40 t",
    img: "/locationenginavecchauffeur.jpg",
    usages: ["Terrassement et fouilles", "Chargement de camions", "Démolition légère", "Tranchées réseaux", "Travaux en zone inondable"],
    avantages: "Polyvalentes, disponibles en plusieurs tailles selon votre besoin.",
  },
  {
    nom: "Mini-pelles < 2 t",
    img: null,
    usages: ["Jardins et espaces restreints", "Tranchées en milieu urbain", "Fouille pour piscine", "Aménagements proches des bâtiments"],
    avantages: "Accès par une ouverture de 80 cm. Idéal pour les chantiers difficiles d'accès.",
  },
  {
    nom: "Bulldozer GPS",
    img: null,
    usages: ["Terrassement de précision", "Profilage de plateformes", "Grands espaces à niveler", "Voiries et lotissements"],
    avantages: "Précision centimétrique grâce au système de guidage GPS. Résultat parfait sans topographe présent en continu.",
  },
  {
    nom: "Tombereau articulé",
    img: "/transfertdengins.jpg",
    usages: ["Transport interne sur chantier", "Zones boueuses ou peu portantes", "Évacuation terres en terrain difficile"],
    avantages: "Traction intégrale pour tous les terrains. Idéal hors route.",
  },
  {
    nom: "Niveleuse",
    img: null,
    usages: ["Profilage fin de plateforme", "Finition de voirie", "Régalage de couches de forme"],
    avantages: "Finition de précision que ne peut pas atteindre une pelle seule.",
  },
  {
    nom: "Compacteurs vibrants",
    img: null,
    usages: ["Compactage de remblais", "Compactage sous dallage", "Consolidation de couche de forme"],
    avantages: "Résultats vérifiables par essai Proctor sur demande.",
  },
];

const avantages = [
  { icon: "🔄", titre: "Flotte régulièrement renouvelée", desc: "Nos engins sont mis à jour régulièrement pour garantir fiabilité, performances et moindre consommation de carburant. Vous n'avez jamais à faire face à une panne d'un engin vieillissant." },
  { icon: "👷", titre: "Opérateurs qualifiés CACES", desc: "Chaque engin est accompagné de son conducteur titulaire du CACES correspondant, habilité AIPR et certifié N1/N2. La sécurité sur vos chantiers est assurée." },
  { icon: "🌿", titre: "Engins propres Stage V", desc: "Notre parc répond aux normes antipollution Stage V (moteurs Euro 6). Signataires de la Charte Objectif CO2 pour le transport, nous limitons notre empreinte carbone." },
  { icon: "📍", titre: "Réactivité en Hauts-de-France", desc: "Basés à Talmas (80260), nous intervenons rapidement dans la Somme, l'Oise et le Pas-de-Calais. Pas d'attente prolongée avant mobilisation." },
];

const faqs = [
  {
    q: "Combien coûte la location d'une pelle avec chauffeur ?",
    a: "Le tarif dépend du type d'engin, de la durée et du lieu d'intervention. La location à la journée inclut l'engin, le carburant, le chauffeur et les déplacements. Nous établissons un devis gratuit et détaillé adapté à votre chantier.",
  },
  {
    q: "Quelle différence entre la location simple et la location avec chauffeur ?",
    a: "La location avec chauffeur (conducteur propriétaire) signifie que Vilbert TP reste responsable de l'engin et de son utilisation. C'est la formule la plus sécurisante pour le donneur d'ordre : pas de responsabilité en cas d'accident de l'engin, opérateur professionnel certifié.",
  },
  {
    q: "Pouvez-vous vous déplacer hors de la Somme ?",
    a: "Oui, nous intervenons régulièrement dans l'Oise (60) et le Pas-de-Calais (62). Pour des chantiers plus éloignés, contactez-nous pour évaluer la faisabilité et le coût de déplacement.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "Idéalement 3 à 7 jours à l'avance pour garantir la disponibilité de l'engin souhaité. En cas d'urgence, contactez-nous directement — nous faisons notre possible pour vous répondre rapidement.",
  },
];

export default function LocationEnginsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#b5451b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded tracking-widest">🚜 Location engins</span>
                <span className="bg-white/20 text-white text-xs font-bold uppercase px-3 py-1 rounded">Avec chauffeur CACES</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Location d'engins<br /><span className="text-[#f5b800]">avec chauffeur</span><br />
                <span className="text-2xl text-orange-200">Flotte propre · CACES · GPS</span>
              </h1>
              <p className="text-lg text-orange-100 mb-8 max-w-xl">
                Besoin d'une pelle, d'un bulldozer GPS ou d'un tombereau pour quelques jours ou quelques semaines ? Vilbert TP met à votre disposition sa <strong>flotte propre d'engins avec opérateur qualifié</strong>. La sécurité et la productivité en plus.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-7 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg">📞 03 22 93 02 86</a>
                <Link href="/contact" className="border-2 border-white text-white font-bold px-7 py-4 rounded text-lg hover:bg-white hover:text-[#b5451b] transition-colors">Demander un devis →</Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hidden lg:block" style={{ height: 420 }}>
              <Image src="/locationenginavecchauffeur.jpg" alt="Location engin avec chauffeur — pelle hydraulique Vilbert TP Somme" fill priority className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 bg-[#f5b800] text-gray-900 font-black px-4 py-2 rounded-lg text-sm">
                ✅ Opérateurs certifiés CACES · AIPR · N1/N2
              </div>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800]" />
      </section>

      {/* AVANTAGES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Pourquoi louer chez Vilbert TP ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map(a => (
              <div key={a.titre} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-black text-gray-900 mb-2">{a.titre}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFERT ENGINS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 360 }}>
              <Image src="/transfertdengins.jpg" alt="Transfert et transport d'engins de chantier — Vilbert TP Hauts-de-France" fill className="object-cover" sizes="50vw" />
            </div>
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">🚛 Transport inclus</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Transport et <span className="text-[#b5451b]">mise en place sur votre chantier</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Vilbert TP assure le transport et la mise en place de tous ses engins sur votre chantier, dans toute la zone Somme, Oise et Pas-de-Calais. Notre porte-engins permet de mobiliser rapidement la bonne machine au bon endroit.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {["Transport par porte-engins certifié", "Délais de mobilisation rapides (2–5 jours ouvrés)", "Opérateur fourni, qualifié et expérimenté", "Carburant inclus dans la prestation", "Remise en place après chantier"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] flex-shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <a href="tel:0322930286" className="inline-block bg-[#b5451b] text-white font-bold px-6 py-3 rounded hover:bg-[#d4581f] transition-colors">
                Vérifier la disponibilité →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE ENGINS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#b5451b] mb-3">Notre catalogue d'engins</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600">Tous nos engins sont disponibles avec conducteur qualifié CACES. Flotte régulièrement renouvelée.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engins.map(e => (
              <div key={e.nom} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-[#b5451b] hover:shadow-md transition-all">
                {e.img && (
                  <div className="relative h-44 overflow-hidden">
                    <Image src={e.img} alt={e.nom} fill className="object-cover" sizes="33vw" />
                  </div>
                )}
                {!e.img && <div className="h-2 bg-[#b5451b]" />}
                <div className="p-5">
                  <h3 className="font-black text-gray-900 mb-3">{e.nom}</h3>
                  <ul className="space-y-1 text-xs text-gray-600 mb-3">
                    {e.usages.map(u => <li key={u} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#f5b800] flex-shrink-0" />{u}</li>)}
                  </ul>
                  <p className="text-[#b5451b] text-xs font-bold">{e.avantages}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl font-black text-gray-900 mb-3">Réserver un engin avec chauffeur</h2>
          <p className="text-gray-700 mb-8">Devis gratuit, réponse sous 24h — disponibilité soumise au planning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg">📞 03 22 93 02 86</a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-5 rounded-xl text-xl hover:bg-gray-50 transition-colors shadow-lg">✉️ Demande en ligne</Link>
          </div>
        </div>
      </section>
    </>
  );
}
