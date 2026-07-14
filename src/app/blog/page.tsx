import { Metadata } from "next";
import Link from "next/link";
import {
  Camera, Video, FileText, Star, TrendingUp, Award, Users,
  Music, Search, ChevronRight, Bookmark, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Latest Celebrity News & Exclusives",
  description:
    "Browse the latest celebrity news, exclusive interviews, red carpet coverage, and entertainment stories. All original content protected by DMCA.",
};

/* ── Article Data ── */
const articles = [
  { id: 1, cat: "EXCLUSIVE", title: "Inside the Private World of Hollywood's Most Elusive A-Lister", excerpt: "An intimate look at the life, career, and untold stories behind one of cinema's biggest names.", author: "Robert Pham", date: "Jul 14, 2026", readTime: "8 min", type: "article" },
  { id: 2, cat: "RED CARPET", title: "Best Dressed at the 2026 Met Gala — Every Look Ranked", excerpt: "From show-stopping gowns to daring menswear, we rank every major arrival at fashion's biggest night.", author: "Robert Pham", date: "Jul 13, 2026", readTime: "12 min", type: "article" },
  { id: 3, cat: "MUSIC", title: "Breaking Down the Record-Breaking World Tour That Shattered Every Record", excerpt: "How one artist turned a stadium tour into a cultural phenomenon — by the numbers.", author: "Robert Pham", date: "Jul 12, 2026", readTime: "6 min", type: "article" },
  { id: 4, cat: "FILM", title: "The Sequel Nobody Expected — First Look and Fan Reactions", excerpt: "The franchise returns with a bold new direction. Here is everything we know so far.", author: "Robert Pham", date: "Jul 11, 2026", readTime: "5 min", type: "article" },
  { id: 5, cat: "TV", title: "Streaming Wars: Which Platform Dominated the Summer Ratings?", excerpt: "A data-driven breakdown of viewership, subscriber growth, and breakout hits.", author: "Robert Pham", date: "Jul 10, 2026", readTime: "7 min", type: "article" },
  { id: 6, cat: "STYLE", title: "Celebrity Street Style: The 25 Most Iconic Looks This Month", excerpt: "Off-duty fashion from the stars — casual, bold, and endlessly re-pinnable.", author: "Robert Pham", date: "Jul 9, 2026", readTime: "4 min", type: "photo" },
  { id: 7, cat: "INTERVIEW", title: "Candid Conversations: Rising Stars on Fame, Pressure, and Authenticity", excerpt: "Three breakout actors open up about the reality of sudden stardom.", author: "Robert Pham", date: "Jul 8, 2026", readTime: "10 min", type: "interview" },
  { id: 8, cat: "NEWS", title: "Award Season Predictions: Early Frontrunners for Best Picture", excerpt: "Critics weigh in on the films most likely to dominate the upcoming awards circuit.", author: "Robert Pham", date: "Jul 7, 2026", readTime: "6 min", type: "article" },
  { id: 9, cat: "EXCLUSIVE", title: "Behind the Scenes of the Most Anticipated Film of the Decade", excerpt: "On-set access reveals the scale, ambition, and creative risks of a blockbuster in the making.", author: "Robert Pham", date: "Jul 6, 2026", readTime: "9 min", type: "article" },
  { id: 10, cat: "MUSIC", title: "The Album That Changed Everything: A Track-by-Track Breakdown", excerpt: "From the opening bars to the hidden closer — why critics are calling it a masterpiece.", author: "Robert Pham", date: "Jul 5, 2026", readTime: "11 min", type: "article" },
  { id: 11, cat: "PHOTOS", title: "Exclusive Portraits: 20 Stars in Their Most Vulnerable Moments", excerpt: "A photographer's 12-month project capturing celebrities without the red-carpet armour.", author: "Robert Pham", date: "Jul 4, 2026", readTime: "3 min", type: "photo" },
  { id: 12, cat: "TV", title: "The Show Everyone Is Binge-Watching This Weekend", excerpt: "Why this sleeper hit just became the most-watched series of the year.", author: "Robert Pham", date: "Jul 3, 2026", readTime: "5 min", type: "article" },
  { id: 13, cat: "INTERVIEW", title: "In Her Own Words: A-List Actress Opens Up About Career Reinvention", excerpt: "From teen idol to Oscar contender — the journey in her own candid words.", author: "Robert Pham", date: "Jul 2, 2026", readTime: "14 min", type: "interview" },
  { id: 14, cat: "STYLE", title: "How Celebrity Stylists Are Redefining Red Carpet Fashion in 2026", excerpt: "The stylists behind the most viral looks reveal their creative process.", author: "Robert Pham", date: "Jul 1, 2026", readTime: "7 min", type: "article" },
  { id: 15, cat: "FILM", title: "Box Office Report: Summer Blockbusters by the Numbers", excerpt: "Which franchises delivered, which disappointed, and what it means for Hollywood.", author: "Robert Pham", date: "Jun 30, 2026", readTime: "6 min", type: "article" },
  { id: 16, cat: "NEWS", title: "Celebrity Real Estate: Inside the $200M Mansion Trend", excerpt: "The ultra-luxury properties celebrities are buying — and why prices keep climbing.", author: "Robert Pham", date: "Jun 29, 2026", readTime: "5 min", type: "article" },
  { id: 17, cat: "MUSIC", title: "Festival Season Preview: The Lineups That Sold Out in Minutes", excerpt: "From Coachella to Glastonbury — the acts driving unprecedented ticket demand.", author: "Robert Pham", date: "Jun 28, 2026", readTime: "6 min", type: "article" },
  { id: 18, cat: "EXCLUSIVE", title: "The Power List: 50 Most Influential People in Entertainment", excerpt: "Our annual ranking of the executives, creators, and stars shaping the industry.", author: "Robert Pham", date: "Jun 27, 2026", readTime: "15 min", type: "article" },
  { id: 19, cat: "VIDEO", title: "Watch: Behind-the-Scenes Tour of a Hollywood Icon's Private Studio", excerpt: "Exclusive video walkthrough of the creative space where legends are made.", author: "Robert Pham", date: "Jun 26, 2026", readTime: "4 min", type: "video" },
  { id: 20, cat: "TV", title: "The Reboot That Actually Works: Why Critics Are Calling It Perfect", excerpt: "How a beloved classic was updated for a new generation without losing its soul.", author: "Robert Pham", date: "Jun 25, 2026", readTime: "8 min", type: "article" },
  { id: 21, cat: "INTERVIEW", title: "Directing Debut: Pop Superstar Talks Transition from Stage to Screen", excerpt: "The multi-hyphenate opens up about imposter syndrome, creative control, and the final cut.", author: "Robert Pham", date: "Jun 24, 2026", readTime: "12 min", type: "interview" },
  { id: 22, cat: "STYLE", title: "The 10 Best-Dressed Men of 2026 — So Far", excerpt: "Menswear is having a moment. These ten men are leading the charge.", author: "Robert Pham", date: "Jun 23, 2026", readTime: "5 min", type: "photo" },
  { id: 23, cat: "FILM", title: "Indie Darling Goes Mainstream: The Director Behind the Breakout Hit", excerpt: "How a micro-budget film became the year's most talked-about movie.", author: "Robert Pham", date: "Jun 22, 2026", readTime: "9 min", type: "article" },
  { id: 24, cat: "NEWS", title: "Celebrity Charity Gala Raises $45M for Climate Research", excerpt: "Stars turn out in force for the biggest philanthropic event of the year.", author: "Robert Pham", date: "Jun 21, 2026", readTime: "4 min", type: "article" },
  { id: 25, cat: "MUSIC", title: "Collab of the Year: How Two Rivals Made the Song of the Summer", excerpt: "The unlikely partnership that produced 2026's most-streamed track.", author: "Robert Pham", date: "Jun 20, 2026", readTime: "7 min", type: "article" },
  { id: 26, cat: "EXCLUSIVE", title: "Leaked Set Photos Reveal First Look at Highly Anticipated Sequel", excerpt: "Production insiders share never-before-seen images from the closed set.", author: "Robert Pham", date: "Jun 19, 2026", readTime: "3 min", type: "photo" },
  { id: 27, cat: "TV", title: "Reality TV's Evolution: How Scripted Chaos Conquered Streaming", excerpt: "From guilty pleasure to prestige programming — the genre's unlikely ascent.", author: "Robert Pham", date: "Jun 18, 2026", readTime: "8 min", type: "article" },
  { id: 28, cat: "INTERVIEW", title: "Veteran Actor Reflects on 40 Years in Hollywood", excerpt: "A career-spanning conversation about craft, longevity, and the roles that got away.", author: "Robert Pham", date: "Jun 17, 2026", readTime: "16 min", type: "interview" },
  { id: 29, cat: "STYLE", title: "Red Carpet Rewind: The 50 Greatest Looks of the Past Decade", excerpt: "A definitive ranking of the outfits that defined an era.", author: "Robert Pham", date: "Jun 16, 2026", readTime: "10 min", type: "photo" },
  { id: 30, cat: "VIDEO", title: "Watch: 24 Hours with a Hollywood Power Couple", excerpt: "Exclusive video diary following one of entertainment's most private duos.", author: "Robert Pham", date: "Jun 15, 2026", readTime: "5 min", type: "video" },
  { id: 31, cat: "FILM", title: "Animation Revolution: How VFX Studios Are Redefining Visual Storytelling", excerpt: "The technology and artistry behind the year's most visually stunning films.", author: "Robert Pham", date: "Jun 14, 2026", readTime: "9 min", type: "article" },
  { id: 32, cat: "NEWS", title: "The Business of Fame: How Celebrity Brands Are Outperforming Legacy Labels", excerpt: "From skincare to spirits — the economics of star-powered businesses.", author: "Robert Pham", date: "Jun 13, 2026", readTime: "7 min", type: "article" },
  { id: 33, cat: "MUSIC", title: "Vinyl Revival: Why Collectors Are Paying Premium for Rare Pressings", excerpt: "The surprising resurgence of physical music in the streaming age.", author: "Robert Pham", date: "Jun 12, 2026", readTime: "6 min", type: "article" },
  { id: 34, cat: "EXCLUSIVE", title: "The Untold Story Behind the Most Iconic Movie Scene of 2025", excerpt: "Cast and crew reveal what really happened on the day that changed cinema.", author: "Robert Pham", date: "Jun 11, 2026", readTime: "11 min", type: "article" },
  { id: 35, cat: "TV", title: "Peak TV Is Dead. Long Live Peak TV.", excerpt: "As the industry contracts, the shows that survive are better than ever.", author: "Robert Pham", date: "Jun 10, 2026", readTime: "8 min", type: "article" },
  { id: 36, cat: "INTERVIEW", title: "Comedy Queen on Breaking Barriers and Building an Empire", excerpt: "The stand-up turned mogul talks deals, diversity, and doing it her way.", author: "Robert Pham", date: "Jun 9, 2026", readTime: "13 min", type: "interview" },
  { id: 37, cat: "PHOTOS", title: "Summer in the City: Paparazzi's Most Candid Celebrity Shots", excerpt: "Stars off-duty — at coffee shops, parks, and bookstores.", author: "Robert Pham", date: "Jun 8, 2026", readTime: "3 min", type: "photo" },
  { id: 38, cat: "STYLE", title: "The Accessories Trend Every Celebrity Is Wearing Right Now", excerpt: "One small detail is dominating red carpets and street style alike.", author: "Robert Pham", date: "Jun 7, 2026", readTime: "4 min", type: "article" },
  { id: 39, cat: "FILM", title: "Documentary Spotlight: The True Crime Film Everyone Is Talking About", excerpt: "How a filmmaker's decade-long investigation became the year's most gripping watch.", author: "Robert Pham", date: "Jun 6, 2026", readTime: "7 min", type: "article" },
  { id: 40, cat: "NEWS", title: "Social Media Shake-Up: Celebrities Leaving Major Platforms in Droves", excerpt: "The exodus, the reasons, and what it means for the future of fan engagement.", author: "Robert Pham", date: "Jun 5, 2026", readTime: "6 min", type: "article" },
];

const categories = [
  { name: "All", count: articles.length, icon: <FileText className="w-3.5 h-3.5" /> },
  { name: "Exclusive", count: articles.filter(a => a.cat === "EXCLUSIVE").length, icon: <Star className="w-3.5 h-3.5" /> },
  { name: "Interview", count: articles.filter(a => a.type === "interview").length, icon: <Users className="w-3.5 h-3.5" /> },
  { name: "Photo", count: articles.filter(a => a.type === "photo").length, icon: <Camera className="w-3.5 h-3.5" /> },
  { name: "Video", count: articles.filter(a => a.type === "video").length, icon: <Video className="w-3.5 h-3.5" /> },
  { name: "Music", count: articles.filter(a => a.cat === "MUSIC").length, icon: <Music className="w-3.5 h-3.5" /> },
  { name: "Film", count: articles.filter(a => a.cat === "FILM").length, icon: <Award className="w-3.5 h-3.5" /> },
  { name: "TV", count: articles.filter(a => a.cat === "TV").length, icon: <TrendingUp className="w-3.5 h-3.5" /> },
];

const typeIcons: Record<string, React.ReactNode> = {
  article: <FileText className="w-3.5 h-3.5" />,
  photo: <Camera className="w-3.5 h-3.5" />,
  video: <Video className="w-3.5 h-3.5" />,
  interview: <Users className="w-3.5 h-3.5" />,
};

export default function BlogPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

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

          {/* Category Tabs */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button key={c.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors whitespace-nowrap cursor-pointer">
                {c.icon}
                {c.name}
                <span className="text-text-muted ml-0.5">({c.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden group cursor-pointer">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              <div className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-bg-secondary to-accent/5 flex items-center justify-center">
                <Camera className="w-12 h-12 text-accent/20" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">{featured.cat}</span>
                <h2 className="text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{featured.excerpt}</p>
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
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((a) => (
              <article key={a.id} className="bg-bg-card border border-border rounded-xl overflow-hidden group cursor-pointer hover:border-border-hover transition-colors">
                <div className="aspect-[16/9] bg-gradient-to-br from-bg-secondary to-accent/3 flex items-center justify-center relative">
                  <span className="text-accent/15">{typeIcons[a.type] || <FileText className="w-8 h-8" />}</span>
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase text-accent bg-bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {a.cat}
                  </span>
                  {a.type === "video" && (
                    <span className="absolute top-3 right-3 text-[9px] font-medium text-text-muted bg-bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
                      <Video className="w-3 h-3" /> Video
                    </span>
                  )}
                  {a.type === "photo" && (
                    <span className="absolute top-3 right-3 text-[9px] font-medium text-text-muted bg-bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
                      <Camera className="w-3 h-3" /> Gallery
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">{a.excerpt}</p>
                  <div className="flex items-center justify-between text-[11px] text-text-muted">
                    <div className="flex items-center gap-2">
                      <span>{a.author}</span>
                      <span className="w-1 h-1 rounded-full bg-text-muted" />
                      <span>{a.date}</span>
                    </div>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-bg-card border border-border rounded-lg text-sm font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors cursor-pointer">
              Load More Articles <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-8 border-t border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-accent" />
            <div>
              <p className="text-sm font-semibold">All content is original and DMCA Protected</p>
              <p className="text-xs text-text-muted">Unauthorised reproduction of any article, photograph, or video is prohibited under 17 U.S.C. § 512.</p>
            </div>
          </div>
          <Link href="/submit" className="text-xs font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-1">
            Report Infringement <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </>
  );
}