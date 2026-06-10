import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Conseils Travaux Publics & Particuliers — Vilbert TP",
  description:
    "Conseils terrassement, voirie, réseaux, assainissement individuel… Le blog expert de Vilbert TP pour vous guider dans vos projets en Hauts-de-France.",
};

const categories = ["Tous", "Terrassement", "Voirie", "Réseaux", "Travaux Particuliers", "Entreprise"];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Blog & Conseils
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Guides & conseils <span className="text-[#f5b800]">travaux</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Terrassement, voirie, réseaux, assainissement, travaux particuliers…
            Nos experts partagent leur savoir-faire pour vous aider à préparer et réussir vos projets.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* ARTICLES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#b5451b] text-white text-xs font-bold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>🗓️ {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>⏱️ {post.readingTime} min</span>
                  </div>
                  <h2 className="font-black text-gray-900 text-lg leading-tight mb-3 group-hover:text-[#b5451b] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-[#b5451b] text-sm font-bold group-hover:underline">
                    Lire l'article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Votre projet en tête ?
          </h2>
          <p className="text-gray-700 mb-6">
            Nos experts répondent à toutes vos questions — devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0322930286" className="bg-gray-900 text-white font-black px-8 py-4 rounded-xl text-xl hover:bg-gray-800 transition-colors">
              📞 03 22 93 02 86
            </a>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-50 transition-colors">
              ✉️ Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
