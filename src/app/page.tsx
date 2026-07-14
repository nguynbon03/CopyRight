import { Metadata } from "next";
import DMCABadge from "@/components/DMCABadge";
import StepCard from "@/components/StepCard";
import PlatformCard from "@/components/PlatformCard";
import { CopyButton } from "@/components/CopyButton";
import Link from "next/link";
import {
  Camera, Video, FileText, Music, Code, Package,
  Search, Send, CheckCircle, Eye, Shield,
  Newspaper, Star, TrendingUp, Award, Users, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CelebPost — Celebrity News & Entertainment",
  description:
    "Your source for the latest celebrity news, entertainment updates, and exclusive stories. All content DMCA Protected.",
};

/* ── Sample celebrity news data ── */
const featured = {
  category: "EXCLUSIVE",
  title: "Inside the Private World of Hollywood's Most Elusive A-Lister",
  excerpt: "An intimate look at the life, career, and untold stories behind one of cinema's biggest names.",
  author: "Robert Pham",
  date: "July 14, 2026",
  readTime: "8 min read",
};

const trending = [
  { id: 1, category: "Red Carpet", title: "Best Dressed at the 2026 Met Gala — Every Look Ranked", author: "R. Pham", date: "Jul 13" },
  { id: 2, category: "Music", title: "Breaking Down the Record-Breaking World Tour That Shattered Every Record", author: "R. Pham", date: "Jul 12" },
  { id: 3, category: "Film", title: "The Sequel Nobody Expected — First Look and Fan Reactions", author: "R. Pham", date: "Jul 11" },
  { id: 4, category: "TV", title: "Streaming Wars: Which Platform Dominated the Summer Ratings?", author: "R. Pham", date: "Jul 10" },
  { id: 5, category: "Style", title: "Celebrity Street Style: The 25 Most Iconic Looks This Month", author: "R. Pham", date: "Jul 9" },
  { id: 6, category: "Interview", title: "Candid Conversations: Rising Stars on Fame, Pressure, and Authenticity", author: "R. Pham", date: "Jul 8" },
];

const categories = [
  { icon: <Camera className="w-4 h-4" />, name: "Photos", count: "2.4K" },
  { icon: <Video className="w-4 h-4" />, name: "Videos", count: "890" },
  { icon: <FileText className="w-4 h-4" />, name: "Articles", count: "5.1K" },
  { icon: <Star className="w-4 h-4" />, name: "Interviews", count: "340" },
  { icon: <TrendingUp className="w-4 h-4" />, name: "Trending", count: "12K" },
  { icon: <Award className="w-4 h-4" />, name: "Awards", count: "156" },
];

const platforms = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Facebook / Instagram",
    steps: [
      "Access the Copyright Report Form",
      'Select "I am the rights owner"',
      "Fill in contact information",
      "Provide link to original work on CelebPost",
      "Paste the infringing content URL",
      "Sign and submit",
    ],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
    formLabel: "Open Facebook Form",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Reddit",
    steps: [
      "Access the Reddit DMCA Form",
      "Provide the infringing post URL",
      "Describe the stolen content",
      "Attach proof of ownership",
      "Sign under penalty of perjury",
    ],
    formUrl: "https://www.reddit.com/report",
    formLabel: "Open Reddit Form",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Google Search",
    steps: [
      "Access Google Legal Troubleshooter",
      'Select "Web Search" removal',
      "Enter the infringing page URL",
      "Provide the original CelebPost URL",
      "Describe and sign",
    ],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
    formLabel: "Open Google Form",
  },
];

const dmcaTemplate = `Subject: DMCA Takedown Notice — Copyright Infringement

To Whom It May Concern,

I am writing to report copyright infringement under the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512.

COPYRIGHTED WORK:
Original content published on CelebPost (https://celebpost.com)
Original URL: [Link to the original article/media on CelebPost]
Description: [Description of the copyrighted work — article, photo, video, etc.]

INFRINGING MATERIAL:
The following URL(s) contain material that infringes our copyright:
1. [URL of infringing content]

STATEMENT:
I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law. I declare under penalty of perjury that the information in this notice is accurate and that I am the copyright owner or authorized to act on behalf of the owner.

CONTACT INFORMATION:
Name: Robert Pham
Title: Editor & Content Owner, CelebPost
Email: copirightdc@gmail.com
Website: https://celebpost.com

ELECTRONIC SIGNATURE:
Robert Pham
[Date]

---
This notice is submitted pursuant to 17 U.S.C. § 512(c) of the DMCA.`;

export default function HomePage() {
  return (
    <>
      {/* Hero — Featured Story */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8">
            {/* Featured */}
            <div>
              <div className="bg-bg-card border border-border rounded-xl overflow-hidden group cursor-pointer">
                <div className="aspect-[16/7] bg-gradient-to-br from-bg-secondary via-bg-card to-accent/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">
                      {featured.category}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors">
                      {featured.title}
                    </h1>
                    <p className="text-sm text-text-secondary max-w-xl mb-3">{featured.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span>{featured.author}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>{featured.date}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending Grid */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Trending Now
                  </h2>
                  <span className="text-xs text-text-muted">Updated hourly</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {trending.map((a) => (
                    <article key={a.id} className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors group cursor-pointer">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-accent">{a.category}</span>
                      <h3 className="text-sm font-semibold mt-1.5 mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                        {a.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-text-muted">
                        <span>{a.author}</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted" />
                        <span>{a.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Categories */}
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Content Library</h3>
                <div className="space-y-2">
                  {categories.map((c) => (
                    <div key={c.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <span className="text-accent">{c.icon}</span>
                        {c.name}
                      </div>
                      <span className="text-xs text-text-muted font-mono">{c.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DMCA Badge */}
              <DMCABadge />

              {/* Quick Links */}
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">Copyright Protection</h3>
                <div className="space-y-2">
                  <Link href="/submit" className="flex items-center justify-between py-2 text-sm text-text-secondary hover:text-accent transition-colors border-b border-border">
                    <span>Submit Evidence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/policy" className="flex items-center justify-between py-2 text-sm text-text-secondary hover:text-accent transition-colors border-b border-border">
                    <span>Copyright Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/original-works" className="flex items-center justify-between py-2 text-sm text-text-secondary hover:text-accent transition-colors">
                    <span>Our Content</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* How DMCA Works */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-2">How We Protect Our Content</h2>
          <p className="text-sm text-text-secondary mb-8 max-w-lg">
            All original content published on CelebPost is protected under DMCA. Here is our enforcement process.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <StepCard stepNum={1} icon={<Eye className="w-4 h-4" />} title="Detect Infringement" description="We monitor for unauthorised use of our articles, photos, and videos across all major platforms." />
            <StepCard stepNum={2} icon={<Camera className="w-4 h-4" />} title="Collect Evidence" description="Screenshots, timestamps, and URLs are archived as proof of ownership and prior publication." />
            <StepCard stepNum={3} icon={<Send className="w-4 h-4" />} title="File DMCA Notice" description="A formal takedown notice is submitted to the hosting platform citing 17 U.S.C. § 512." />
            <StepCard stepNum={4} icon={<CheckCircle className="w-4 h-4" />} title="Content Removed" description="Platforms remove infringing content within 24–72 hours (Facebook) or 1–2 weeks (Google)." />
          </div>
        </div>
      </section>

      {/* Platform Guides */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-2">Report by Platform</h2>
          <p className="text-sm text-text-secondary mb-8 max-w-lg">
            If you have found our content used without permission, file a DMCA notice on the relevant platform.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <PlatformCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* DMCA Template */}
      <section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-2">DMCA Takedown Notice Template</h2>
          <p className="text-sm text-text-secondary mb-6">
            Copy and customise this template when filing a DMCA notice.
          </p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-5 py-3 bg-bg-secondary border-b border-border">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Template</span>
              <CopyButton text={dmcaTemplate} />
            </div>
            <pre className="p-5 text-xs text-text-secondary leading-relaxed whitespace-pre-wrap font-mono max-h-80 overflow-y-auto">
              {dmcaTemplate}
            </pre>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-t border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "8,500+", label: "Original Articles" },
            { num: "2,400+", label: "Licensed Photos" },
            { num: "890+", label: "Video Reports" },
            { num: "340+", label: "Exclusive Interviews" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-accent">{s.num}</div>
              <div className="text-xs text-text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}