"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesMenu = [
  {
    category: "🏗️ Travaux Publics",
    items: [
      { label: "Terrassement", href: "/terrassement", desc: "Fouilles, remblais, évacuation terres" },
      { label: "Voirie & Aménagement", href: "/voirie", desc: "Enrobé, bordures, pavage, signalisation" },
      { label: "Réseaux", href: "/reseaux", desc: "Assainissement, eau, gaz, télécom, électricité" },
    ],
  },
  {
    category: "🏠 Travaux Particuliers",
    items: [
      { label: "Allée & Terrasse", href: "/travaux-particuliers#amenagements", desc: "Enrobé, béton lavé, pavés" },
      { label: "Clôtures & Démolition", href: "/travaux-particuliers#clotures", desc: "Pose clôtures, démolition" },
      { label: "Assainissement individuel", href: "/travaux-particuliers#assainissement", desc: "Fosse septique, puits filtrant, raccordement" },
      { label: "Drainage & Terrassement", href: "/travaux-particuliers#terrassement", desc: "Nivelage, remblai, drainage" },
    ],
  },
];

const navLinks = [
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#b5451b] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:0322930286" className="flex items-center gap-1.5 hover:text-[#f5b800] transition-colors font-bold">
              <span>📞</span>
              <span>03 22 93 02 86</span>
            </a>
            <a href="mailto:tp@groupe-vilbert.fr" className="hidden md:flex items-center gap-1.5 hover:text-[#f5b800] transition-colors">
              <span>✉️</span>
              <span>tp@groupe-vilbert.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-3 flex-wrap text-xs">
            <span className="hidden sm:block text-orange-200">Lun–Ven : 8h–17h · Somme (80) · Oise (60) · Pas-de-Calais (62)</span>
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded hover:bg-[#ffd44d] transition-colors"
            >
              Groupe Vilbert →
            </a>
          </div>
        </div>
      </div>

      {/* Logo + nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Vilbert TP — Accueil">
          <Image
            src="/logo.png"
            alt="Vilbert TP — Terrassement, Voirie et Réseaux en Hauts-de-France"
            width={200}
            height={72}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Mega-menu services */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 font-semibold hover:text-[#b5451b] transition-colors text-sm uppercase tracking-wide"
              aria-expanded={servicesOpen}
            >
              Nos Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[620px] z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#b5451b] px-6 py-3 flex items-center justify-between">
                    <span className="text-white font-bold text-sm">Toutes nos prestations</span>
                    <Link href="/services" className="text-[#f5b800] text-xs font-semibold hover:underline">
                      Voir tous les services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-0 divide-x divide-gray-100">
                    {servicesMenu.map((col) => (
                      <div key={col.category} className="p-4">
                        <p className="text-xs font-bold text-[#b5451b] uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
                          {col.category}
                        </p>
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="group block px-2 py-1.5 rounded-lg hover:bg-orange-50 transition-colors"
                              >
                                <span className="block text-sm font-semibold text-gray-800 group-hover:text-[#b5451b]">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-gray-500 leading-tight mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-6 py-3 flex items-center gap-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">📍 Somme (80) · Oise (60) · Pas-de-Calais (62)</span>
                    <a
                      href="tel:0322930286"
                      className="ml-auto bg-[#f5b800] text-gray-900 font-bold text-xs px-4 py-2 rounded hover:bg-[#ffd44d] transition-colors whitespace-nowrap"
                    >
                      📞 Devis gratuit
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-[#b5451b] transition-colors text-sm uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="border border-[#b5451b] text-[#b5451b] font-bold px-4 py-2 rounded hover:bg-[#b5451b] hover:text-white transition-colors text-sm"
            >
              ✉️ Email
            </a>
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
            >
              📞 03 22 93 02 86
            </a>
          </div>
        </nav>

        {/* Burger mobile */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <span>Nos Services</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="bg-gray-50 border-b border-gray-200">
              {servicesMenu.map((col) => (
                <div key={col.category} className="px-4 pt-3 pb-1">
                  <p className="text-xs font-bold text-[#b5451b] uppercase tracking-wide mb-2">
                    {col.category}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-2 py-2 pl-2 border-b border-gray-100 last:border-0"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="px-4 py-3 space-y-2">
            <a
              href="tel:0322930286"
              className="block text-center bg-[#f5b800] text-gray-900 font-bold px-5 py-3 rounded hover:bg-[#ffd44d] transition-colors text-lg"
              onClick={() => setOpen(false)}
            >
              📞 03 22 93 02 86
            </a>
            <a
              href="mailto:tp@groupe-vilbert.fr"
              className="block text-center border border-[#b5451b] text-[#b5451b] font-bold px-5 py-2 rounded transition-colors"
              onClick={() => setOpen(false)}
            >
              ✉️ tp@groupe-vilbert.fr
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
