import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, Clock, User, Calendar, Share2,
  FileText, Camera, Video, Users, Shield,
} from "lucide-react";
import { articles } from "@/data/articles";
import { ArticleThumbnail } from "@/components/ArticleThumbnail";
import { OfficialSignature, LegalFooter } from "@/components/AuthorityBadges";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ id: String(a.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((a) => a.id === Number(id));
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

const typeIcons: Record<string, React.ReactNode> = {
  article: <FileText className="w-4 h-4" />,
  photo: <Camera className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  interview: <Users className="w-4 h-4" />,
};

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = articles.find((a) => a.id === Number(id));
  if (!article) notFound();

  const related = articles
    .filter((a) => a.id !== article.id && (a.cat === article.cat || a.type === article.type))
    .slice(0, 3);

  return (
    <>
      {/* Back nav */}
      <section className="pt-16">
        <div className="max-w-3xl mx-auto px-6 pt-4 pb-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Articles
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden">
            <ArticleThumbnail
              category={article.cat}
              title={article.title}
              type={article.type}
              image={article.image}
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="pb-6">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-accent mb-3">
            {article.cat}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-sm text-text-secondary mb-4">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-text-muted pb-4 border-b border-border">
            <span className="flex items-center gap-1.5">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              {typeIcons[article.type]}
              {article.type}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <article className="space-y-4">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </article>

          {/* Tags / Share */}
          <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span>
                This article is original content published by CelebPost and is
                protected under DMCA, 17 U.S.C. § 512.
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </div>
          </div>

          {/* Official Declaration */}
          <div className="mt-8">
            <OfficialSignature />
          </div>
          <LegalFooter />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-10 border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-lg font-bold mb-5">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.id}`}
                  className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors group"
                >
                  <ArticleThumbnail category={r.cat} title={r.title} type={r.type} image={r.image} size="sm" />
                  <div className="p-4">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-accent">
                      {r.cat}
                    </span>
                    <h3 className="text-sm font-semibold mt-1.5 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="text-[11px] text-text-muted">
                      {r.date} &middot; {r.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}