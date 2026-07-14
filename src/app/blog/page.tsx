import { Metadata } from "next";
import Link from "next/link";
import { Search, Shield, ChevronRight } from "lucide-react";
import { articles } from "@/data/articles";
import { ArticleThumbnail } from "@/components/ArticleThumbnail";

export const metadata: Metadata = {
  title: "Latest Celebrity News & Exclusives",
  description:
    "Browse the latest celebrity news, exclusive interviews, red carpet coverage, and entertainment stories. All original content protected by DMCA.",
};

export default function BlogPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  const categories = [
    { name: "All", count: articles.length },
    { name: "Exclusive", count: articles.filter((a) => a.cat === "EXCLUSIVE").length },
    { name: "Interview", count: articles.filter((a) => a.type === "interview").length },
    { name: "Photo", count: articles.filter((a) => a.type === "photo").length },
    { name: "Video", count: articles.filter((a) => a.type === "video").length },
    { name: "Music", count: articles.filter((a) => a.cat === "MUSIC").length },
    { name: "Film", count: articles.filter((a) => a.cat === "FILM").length },
    { name: "TV", count: articles.filter((a) => a.cat === "TV").length },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-6 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">Latest Stories</h1>
              <p className="text-xs text-text-muted">{articles.length} articles published &middot; All content DMCA Protected</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-card border border-border rounded-lg text-xs text-text-muted">
                <Search className="w-3 h-3" />
                <span>Search articles...</span>
              </div>
              <span className="flex items-center gap-1 text-[11px] text-accent border border-accent/20 rounded-full px-2.5 py-1">
                <Shield className="w-3 h-3" />
                DMCA Protected
              </span>
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button
                key={c.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors whitespace-nowrap cursor-pointer"
              >
                {c.name} <span className="text-text-muted">({c.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={`/blog/${featured.id}`}
            className="block bg-bg-card border border-border rounded-xl overflow-hidden group"
          >
            <ArticleThumbnail
              category={featured.cat}
              title={featured.title}
              type={featured.type}
              size="lg"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold leading-tight mb-2 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-text-secondary mb-3">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{featured.author}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((a) => (
              <Link
                key={a.id}
                href={`/blog/${a.id}`}
                className="bg-bg-card border border-border rounded-xl overflow-hidden group hover:border-border-hover transition-colors"
              >
                <ArticleThumbnail
                  category={a.cat}
                  title={a.title}
                  type={a.type}
                  size="sm"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-text-muted">
                    <div className="flex items-center gap-2">
                      <span>{a.author}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>{a.date}</span>
                    </div>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-bg-card border border-border rounded-lg text-sm font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors cursor-pointer">
              Load More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-10 border-t border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold mb-1">Copyright & Legal Documents</h2>
            <p className="text-xs text-text-secondary">
              Official certificates, registration documents, and takedown templates for DMCA enforcement.
            </p>
          </div>
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/30 rounded-lg text-sm font-medium text-accent hover:bg-accent/20 transition-colors"
          >
            View Legal Documents
          </Link>
        </div>
      </section>
    </>
  );
}