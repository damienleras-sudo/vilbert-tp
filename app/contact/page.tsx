import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit Vilbert TP — Terrassement, Voirie, Réseaux",
  description:
    "Contactez Vilbert TP pour un devis gratuit : terrassement, voirie, réseaux, travaux particuliers. Somme (80), Oise (60), Pas-de-Calais (62). ☎ 03 22 93 02 86.",
};

const horaires = [
  { jour: "Lundi", heures: "9h00 – 12h30 · 13h30 – 17h30", open: true },
  { jour: "Mardi", heures: "9h00 – 12h30 · 13h30 – 17h30", open: true },
  { jour: "Mercredi", heures: "9h00 – 12h30 · 13h30 – 17h30", open: true },
  { jour: "Jeudi", heures: "9h00 – 12h30 · 13h30 – 17h30", open: true },
  { jour: "Vendredi", heures: "9h00 – 12h30 · 13h30 – 17h30", open: true },
  { jour: "Samedi", heures: "Fermé", open: false },
  { jour: "Dimanche", heures: "Fermé", open: false },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Contactez-nous pour votre <span className="text-[#f5b800]">devis gratuit</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Notre équipe répond rapidement à toutes vos demandes de travaux publics et particuliers
            en Hauts-de-France.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* COORDONNÉES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {/* Téléphone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href="tel:0322930286"
              className="group bg-[#b5451b] text-white rounded-2xl p-10 flex flex-col items-center text-center hover:bg-[#d4581f] transition-colors shadow-lg"
            >
              <span className="text-6xl mb-4">📞</span>
              <p className="text-orange-200 text-sm uppercase tracking-widest font-bold mb-2">Téléphone</p>
              <p className="text-4xl font-black tracking-wide group-hover:text-[#f5b800] transition-colors">
                03 22 93 02 86
              </p>
              <p className="text-orange-200 text-sm mt-3">Lun – Ven · 9h–12h30 et 13h30–17h30</p>
            </a>

            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="group bg-[#f5b800] text-gray-900 rounded-2xl p-10 flex flex-col items-center text-center hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              <span className="text-6xl mb-4">✉️</span>
              <p className="text-gray-600 text-sm uppercase tracking-widest font-bold mb-2">Email</p>
              <p className="text-2xl font-black break-all group-hover:underline">
                tp@groupe-vilbert.fr
              </p>
              <p className="text-gray-600 text-sm mt-3">Réponse sous 24h ouvrables</p>
            </a>
          </div>

          {/* Infos complémentaires */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Adresse */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <span className="text-4xl">📍</span>
              <h3 className="font-black text-gray-900 mt-3 mb-1">Adresse</h3>
              <p className="text-gray-600 text-sm">Ruelle Mayeux</p>
              <p className="text-gray-600 text-sm">80260 Talmas</p>
              <a
                href="https://share.google/AiI8apyJiUMyka8p9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#b5451b] text-sm font-bold hover:underline"
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <span className="text-4xl">🕐</span>
                <h3 className="font-black text-gray-900 mt-3 mb-4">Horaires bureau</h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {horaires.map((h) => (
                    <tr key={h.jour}>
                      <td className="py-1.5 font-semibold text-gray-700 text-xs">{h.jour}</td>
                      <td className={`py-1.5 text-right text-xs ${h.open ? "text-gray-600" : "text-red-400"}`}>
                        {h.heures}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Zone + Réseaux sociaux */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <span className="text-4xl">🗺️</span>
              <h3 className="font-black text-gray-900 mt-3 mb-3">Zone d&apos;intervention</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {["Somme (80)", "Oise (60)", "Pas-de-Calais (62)"].map(d => (
                  <span key={d} className="bg-[#b5451b] text-white text-xs px-2 py-1 rounded-full">{d}</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs mb-4">
                Amiens, Abbeville, Arras, Beauvais, Compiègne et environs
              </p>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <a
                  href="https://www.facebook.com/p/Groupe-Vilbert-100063776760913/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1877F2] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#166FE5] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Groupe Vilbert sur Facebook
                </a>
                <a
                  href="https://share.google/AiI8apyJiUMyka8p9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 text-xs font-bold px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  ⭐ Laisser un avis Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.5!2d2.1668!3d50.0833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd573b2c3a7f7d%3A0x0!2sBeauval%2C%2080630!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vilbert TP — Talmas 80260"
        />
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Votre projet mérite un devis sérieux
          </h2>
          <p className="text-gray-700 mb-6">Appelez-nous directement — réponse immédiate pendant les horaires de bureau.</p>
          <a
            href="tel:0322930286"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg"
          >
            📞 03 22 93 02 86
          </a>
        </div>
      </section>
    </>
  );
}
