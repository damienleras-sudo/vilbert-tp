import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";

const BASE_URL = "https://www.vilbert-tp.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vilbert TP | Terrassement · Voirie · Réseaux — Somme (80) Hauts-de-France",
    template: "%s | Vilbert TP",
  },
  description:
    "Vilbert TP — entreprise familiale de travaux publics en Hauts-de-France : terrassement, voirie, réseaux humides et secs, travaux pour particuliers. Devis gratuit. ☎ 03 22 93 02 86.",
  keywords: [
    "terrassement Somme",
    "terrassement Amiens",
    "travaux publics Somme 80",
    "voirie Hauts-de-France",
    "réseaux assainissement Somme",
    "terrassement Abbeville",
    "viabilisation lotissement",
    "travaux particuliers Somme",
    "enrobé allée particulier",
    "clôture terrassement Somme",
    "assainissement individuel Somme",
    "Vilbert TP",
    "Groupe Vilbert",
    "travaux publics Picardie",
    "VRD Somme",
    "voirie réseaux divers",
  ],
  openGraph: {
    title: "Vilbert TP | Terrassement, Voirie & Réseaux — Somme (80)",
    description:
      "Entreprise familiale de travaux publics en Hauts-de-France. Terrassement, voirie, réseaux, travaux particuliers. Devis gratuit au 03 22 93 02 86.",
    url: BASE_URL,
    siteName: "Vilbert TP",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vilbert TP — Travaux Publics Somme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilbert TP | Terrassement & Voirie — Somme (80)",
    description: "Terrassement, voirie, réseaux, travaux particuliers en Hauts-de-France.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: BASE_URL },
  verification: {
    google: "2CyvZLz9FmqlG3Gl85TYQtFbRFAUfQd-Pc0NUFVGQpM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
