import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#b5451b] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white">
              Un projet de travaux publics ou particuliers ?
            </h2>
            <p className="text-orange-200 mt-1">
              Devis gratuit — Intervention en Somme, Oise et Pas-de-Calais
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-[#b5451b] transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & desc */}
        <div>
          <div className="mb-4 bg-white rounded-xl p-3 inline-block">
            <Image
              src="/logo.png"
              alt="Vilbert TP"
              width={180}
              height={65}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Filiale du Groupe Vilbert, entreprise familiale de travaux publics
            en Hauts-de-France depuis plus de 30 ans. Certifiés MASE.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/Groupe-Vilbert-100063776760913/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] text-white text-xs font-bold px-3 py-2 rounded hover:bg-[#166FE5] transition-colors"
              aria-label="Page Facebook Groupe Vilbert"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a
              href="https://share.google/AiI8apyJiUMyka8p9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-3 py-2 rounded hover:bg-white/20 transition-colors"
            >
              ⭐ Avis Google
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Nos Services
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/services" className="hover:text-white transition-colors font-semibold">Tous les services</Link></li>
            <li><Link href="/terrassement" className="hover:text-white transition-colors">🏗️ Terrassement</Link></li>
            <li><Link href="/voirie" className="hover:text-white transition-colors">🛣️ Voirie & Aménagement</Link></li>
            <li><Link href="/reseaux" className="hover:text-white transition-colors">🔧 Réseaux</Link></li>
            <li><Link href="/enrochement" className="hover:text-white transition-colors">🪨 Enrochement</Link></li>
            <li><Link href="/location-engins" className="hover:text-white transition-colors">🚜 Location engins</Link></li>
            <li><Link href="/broyage-concassage" className="hover:text-white transition-colors">♻️ Broyage & Concassage</Link></li>
            <li><Link href="/extraction-craie" className="hover:text-white transition-colors">⛏️ Extraction de craie</Link></li>
            <li><Link href="/balayage-route" className="hover:text-white transition-colors">🧹 Balayage de route</Link></li>
          </ul>
        </div>

        {/* Spécialités & liens */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Spécialités
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm mb-5">
            <li><Link href="/fouilles-archeologiques" className="hover:text-white transition-colors">🏛️ Fouilles archéologiques</Link></li>
            <li><Link href="/accompagnement-projet" className="hover:text-white transition-colors">📐 Accompagnement projet</Link></li>
            <li><Link href="/demolition-valorisation" className="hover:text-white transition-colors">🏚️ Démolition & Valorisation</Link></li>
            <li><Link href="/travaux-particuliers" className="hover:text-white transition-colors">🏠 Travaux Particuliers</Link></li>
          </ul>
          <h3 className="font-bold text-[#f5b800] mb-3 uppercase text-sm tracking-wide">
            Autres filiales
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="https://www.vilbert-hydro.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                💧 Vilbert Hydro
              </a>
            </li>
            <li>
              <a href="https://www.vilbert-recyclage.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                ♻️ Vilbert Recyclage
              </a>
            </li>
            <li>
              <a href="https://www.groupe-vilbert.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold text-[#f5b800]">
                ↗ Groupe Vilbert
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 text-sm space-y-2">
            <p>📍 Ruelle Mayeux, 80260 Talmas</p>
            <p>
              📞{" "}
              <a href="tel:0322930286" className="hover:text-white transition-colors">
                03 22 93 02 86
              </a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:tp@groupe-vilbert.fr" className="hover:text-white transition-colors">
                tp@groupe-vilbert.fr
              </a>
            </p>
            <div className="mt-3 border-t border-gray-700 pt-3 space-y-1">
              <p className="font-semibold text-gray-300">🕐 Horaires bureau :</p>
              <p>Lun – Ven</p>
              <p>9h00 – 12h30 · 13h30 – 17h30</p>
            </div>
            <div className="mt-3 border-t border-gray-700 pt-3">
              <p className="text-xs text-gray-500 mb-2">Zones desservies :</p>
              <div className="flex flex-wrap gap-1">
                {["Somme (80)", "Oise (60)", "Pas-de-Calais (62)"].map(z => (
                  <span key={z} className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded">{z}</span>
                ))}
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {currentYear} Vilbert TP – Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions légales</Link>
            <Link href="/engagements" className="hover:text-gray-300 transition-colors">MASE · Charte CO2</Link>
            <a href="https://www.groupe-vilbert.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              Groupe Vilbert
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
