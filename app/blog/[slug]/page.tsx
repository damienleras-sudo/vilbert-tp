import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import SchemaArticle from "@/components/SchemaArticle";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="text-2xl font-black text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="text-lg font-black text-[#b5451b] mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-8 border-gray-200" />);
    } else if (line.startsWith("| ")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map(s => s.trim());
      const rows = tableLines.slice(2).map(row => row.split("|").filter(Boolean).map(s => s.trim()));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#b5451b] text-white">
                {headers.map((h, idx) => <th key={idx} className="px-4 py-2 text-left font-bold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ridx) => (
                <tr key={ridx} className={ridx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, cidx) => <td key={cidx} className="px-4 py-2 border border-gray-200">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#f5b800] flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-[#f5b800] pl-4 py-1 my-4 bg-orange-50 rounded-r">
          <p className="text-gray-700 italic" dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }} />
        </blockquote>
      );
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-4 space-y-2 list-decimal list-inside">
          {items.map((item, idx) => (
            <li key={idx} className="text-gray-700" dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // Skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />
      );
    }
    i++;
  }

  return <>{elements}</>;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#b5451b] underline hover:text-[#d4581f]" target="_blank" rel="noopener noreferrer">$1</a>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.vilbert-tp.fr${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Vilbert TP",
      url: "https://www.vilbert-tp.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Vilbert TP",
      url: "https://www.vilbert-tp.fr",
    },
  };

  return (
    <>
      <SchemaArticle post={post} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      <section className="bg-[#b5451b] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-orange-200 mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>›</span>
            <span className="bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-0.5 rounded">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-orange-200 text-sm">
            <span>🗓️ {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>⏱️ {post.readingTime} min de lecture</span>
            <span>✍️ Vilbert TP</span>
          </div>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2">
              {/* Image principale */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>

              {/* Chapô */}
              <p className="text-lg text-gray-600 font-semibold leading-relaxed border-l-4 border-[#f5b800] pl-4 mb-8 bg-orange-50 py-3 pr-4 rounded-r">
                {post.excerpt}
              </p>

              {/* Contenu */}
              <div className="prose-content">
                {renderMarkdown(post.content)}
              </div>

              {/* CTA intégré */}
              <div className="mt-12 bg-[#b5451b] rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-black mb-2">Un projet en tête ?</h3>
                <p className="text-orange-200 text-sm mb-4">Devis gratuit — réponse sous 24h.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:0322930286" className="bg-[#f5b800] text-gray-900 font-black px-6 py-3 rounded-xl hover:bg-[#ffd44d] transition-colors">
                    📞 03 22 93 02 86
                  </a>
                  <Link href="/contact" className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                    ✉️ Devis en ligne
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Carte contact */}
              <div className="bg-[#f5b800] rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-3">Un projet similaire ?</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Nos équipes étudient votre demande et vous répondent sous 24h.
                </p>
                <a
                  href="tel:0322930286"
                  className="block text-center bg-gray-900 text-white font-black px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors mb-2"
                >
                  📞 03 22 93 02 86
                </a>
                <Link
                  href="/contact"
                  className="block text-center border-2 border-gray-900 text-gray-900 font-bold px-4 py-2 rounded-xl hover:bg-gray-900 hover:text-white transition-colors text-sm"
                >
                  ✉️ Formulaire de contact
                </Link>
              </div>

              {/* Infos entreprise */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-gray-900 mb-4">Vilbert TP en bref</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span> Entreprise familiale +30 ans</li>
                  <li className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span> Certifié MASE Hauts-de-France</li>
                  <li className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span> Flotte propre d'engins</li>
                  <li className="flex items-center gap-2"><span className="text-[#f5b800]">✓</span> Somme · Oise · Pas-de-Calais</li>
                </ul>
              </div>

              {/* Articles liés */}
              <div>
                <h3 className="font-black text-gray-900 mb-4">Autres articles</h3>
                <div className="space-y-4">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image src={p.image} alt={p.imageAlt} fill className="object-cover" sizes="64px" />
                      </div>
                      <div>
                        <span className="text-xs text-[#b5451b] font-bold">{p.category}</span>
                        <p className="text-sm font-bold text-gray-800 group-hover:text-[#b5451b] transition-colors leading-tight mt-0.5">
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
