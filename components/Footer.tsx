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
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Vilbert TP"
              width={200}
              height={72}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Filiale du Groupe Vilbert, entreprise familiale de travaux publics
            en Hauts-de-France depuis plus de 30 ans.
          </p>
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
            <li><Link href="/travaux-particuliers" className="hover:text-white transition-colors">🏠 Travaux Particuliers</Link></li>
            <li><Link href="/realisations" className="hover:text-white transition-colors">📷 Réalisations</Link></li>
          </ul>
          <h3 className="font-bold text-[#f5b800] mt-6 mb-3 uppercase text-sm tracking-wide">
            Zones desservies
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            {["Amiens (80)", "Abbeville (80)", "Arras (62)", "Beauvais (60)", "Compiègne (60)"].map(v => (
              <li key={v} className="flex items-center gap-1">
                <span>📍</span> {v}
              </li>
            ))}
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Informations
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos de nous</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Nous contacter</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
            <li>
              <a
                href="https://www.groupe-vilbert.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-semibold text-[#f5b800]"
              >
                ↗ Groupe Vilbert
              </a>
            </li>
          </ul>
          <h3 className="font-bold text-[#f5b800] mt-6 mb-3 uppercase text-sm tracking-wide">
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
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 text-sm space-y-2">
            <p>📍 Route nationale, 80630 Beauval</p>
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
            <p className="mt-3 border-t border-gray-700 pt-3">
              🕐 Lun – Ven<br />
              8h00 – 17h00
            </p>
            <p className="mt-3">
              <a
                href="https://share.google/AiI8apyJiUMyka8p9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ⭐ Avis Google
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {currentYear} Vilbert TP – Tous droits réservés</p>
          <p>
            Une entreprise du{" "}
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Groupe Vilbert
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
