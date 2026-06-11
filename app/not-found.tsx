import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{ backgroundColor: "#b5451b" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white"
    >
      <h1
        style={{ color: "#f5b800" }}
        className="text-8xl sm:text-9xl font-extrabold tracking-tight leading-none mb-6"
      >
        404
      </h1>

      <p className="text-2xl sm:text-3xl font-semibold mb-3 text-center">
        Page introuvable
      </p>
      <p className="text-base sm:text-lg text-white/80 mb-10 text-center max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { label: "Accueil", href: "/" },
          { label: "Nos travaux", href: "/travaux" },
          { label: "Devis gratuit", href: "/devis" },
          { label: "Contact", href: "/contact" },
        ].map((pill) => (
          <Link
            key={pill.href}
            href={pill.href}
            className="px-5 py-2 rounded-full border border-white/60 text-sm font-medium hover:bg-white/20 transition-colors"
          >
            {pill.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        style={{ backgroundColor: "#f5b800", color: "#b5451b" }}
        className="px-8 py-3 rounded-full font-bold text-base hover:opacity-90 transition-opacity mb-10"
      >
        Retour à l&apos;accueil
      </Link>

      <p className="text-white/70 text-sm">
        Besoin d&apos;aide&nbsp;?{" "}
        <a
          href="tel:0322930286"
          className="underline hover:text-white transition-colors"
          style={{ color: "#f5b800" }}
        >
          03 22 93 02 86
        </a>
      </p>
    </main>
  );
}
