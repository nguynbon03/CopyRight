import { Metadata } from "next";
import DMCABadge from "@/components/DMCABadge";
import StepCard from "@/components/StepCard";
import PlatformCard from "@/components/PlatformCard";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "DMCA Shield — Protect Your Copyright",
  description:
    "Official DMCA Copyright Protection Portal. Register DMCA Protected® and report copyright infringement on Facebook, Reddit, Google.",
};

const steps = [
  {
    stepNum: 1,
    icon: "📸",
    title: "Detect Infringement",
    description: "Found your content (photos, videos, articles) copied or used without permission on Facebook, Reddit, Google...",
  },
  {
    stepNum: 2,
    icon: "📝",
    title: "Collect Evidence",
    description: "Take screenshots, save infringing URLs, prepare links to your original work. Use this website as proof of ownership.",
  },
  {
    stepNum: 3,
    icon: "📨",
    title: "Send DMCA Notice",
    description: "Fill out the DMCA takedown form on Facebook/Google/Reddit. Provide all required legal information.",
  },
  {
    stepNum: 4,
    icon: "✅",
    title: "Content Removed",
    description: "The platform will review and remove infringing content. Processing time: 24-72 hours for Facebook, 1-2 weeks for Google.",
  },
];

const contentTypes = [
  { icon: "🖼️", title: "Images & Photos", desc: "Photography, illustrations, digital art, avatars, profile pictures" },
  { icon: "🎬", title: "Video & Reels", desc: "Video content, reels, stories, short-form video, live recordings" },
  { icon: "✍️", title: "Articles & Content", desc: "Blog posts, articles, captions, copywriting, social media content" },
  { icon: "🎵", title: "Music & Audio", desc: "Music, podcasts, voice recordings, sound effects, compositions" },
  { icon: "💻", title: "Design & Code", desc: "UI/UX design, templates, source code, software, digital products" },
  { icon: "📦", title: "Branding", desc: "Logos, brand assets, trademarks, product images, packaging design" },
];

const platforms = [
  {
    icon: "📘",
    title: "Facebook / Instagram",
    steps: [
      "Access the Copyright Report Form",
      'Select "I am the rights owner"',
      "Fill in contact information (name, email)",
      "Provide a link to the original work (this website)",
      "Paste the infringing content URL",
      "Sign electronically and submit",
    ],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
    formLabel: "Open Facebook Form →",
  },
  {
    icon: "🤖",
    title: "Reddit",
    steps: [
      "Access the Reddit DMCA Form",
      "Provide the infringing post URL",
      "Describe the stolen content",
      "Attach proof of ownership",
      "Sign statement under penalty of perjury",
    ],
    formUrl: "https://www.reddit.com/report",
    formLabel: "Open Reddit Form →",
  },
  {
    icon: "🔍",
    title: "Google Search",
    steps: [
      "Access the Google DMCA Dashboard",
      'Select "Web Search" removal',
      "Enter the infringing page URL",
      "Provide the original work URL",
      "Describe the violation in detail",
    ],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
    formLabel: "Open Google Form →",
  },
];

const dmcaTemplate = `Subject: DMCA Takedown Notice — Copyright Infringement

To Whom It May Concern,

I am writing to report copyright infringement under the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512.

COPYRIGHTED WORK:
[Description of your original work — photo, video, article, etc.]
Original URL: [Link to your website/post where the work was first published]

INFRINGING MATERIAL:
The following URL(s) contain material that infringes my copyright:
1. [URL of infringing content]
2. [URL of infringing content]

STATEMENT:
I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law. I declare under penalty of perjury that the information in this notice is accurate and that I am the copyright owner or authorized to act on behalf of the owner.

CONTACT INFORMATION:
Name: [Your Full Name]
Email: [Your Email]
Website: [Your DMCA Protected Website URL]

ELECTRONIC SIGNATURE:
[Your Full Name]
[Date]

---
This notice is submitted pursuant to 17 U.S.C. § 512(c) of the DMCA.`;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <DMCABadge />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Protect Your <span className="gradient-text">Copyright</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
            Official DMCA protection portal. Register DMCA Protected® and report
            copyright infringement on Facebook, Reddit, Google, and other platforms.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              href="/submit"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
            >
              📤 Submit Evidence
            </Link>
            <Link
              href="/policy"
              className="px-8 py-4 rounded-xl bg-bg-card border border-border text-text-primary font-semibold hover:border-border-hover transition-all"
            >
              📋 View DMCA Policy
            </Link>
          </div>
          <div className="flex gap-6 justify-center flex-wrap text-sm text-text-muted">
            <span>✅ DMCA Protected®</span>
            <span>🔒 Verified Content Owner</span>
            <span>⚖️ Legal Documentation</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: "100%", label: "Original Content" },
            { num: "24/7", label: "Copyright Monitoring" },
            { num: "DMCA", label: "Protected® Verified" },
            { num: "Rapid", label: "Takedown Response" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-bg-card border border-border rounded-xl p-6 text-center hover:border-border-hover hover:-translate-y-0.5 transition-all"
            >
              <div className="text-2xl font-extrabold gradient-text mb-2">{s.num}</div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">How DMCA Works</h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-12">
            The Digital Millennium Copyright Act (DMCA) protects copyrighted content online.
            The takedown process consists of 4 key steps.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <StepCard key={s.stepNum} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-bg-card border border-border rounded-2xl p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">📋 Submit Copyright Infringement Evidence</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Register URLs pointing to infringing content. The system will store them as
                evidence for the DMCA takedown process.
              </p>
              <div className="flex flex-col gap-3 mb-8 text-sm text-text-secondary">
                {[
                  "🔗 Submit multiple infringing URLs at once",
                  "📊 Evidence stored with timestamp",
                  "📑 Auto-generate DMCA notice",
                  "📤 Export reports for Facebook/Reddit/Google",
                ].map((f) => (
                  <div key={f}>{f}</div>
                ))}
              </div>
              <Link
                href="/submit"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] text-white font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
              >
                Submit Evidence Now →
              </Link>
            </div>
            <div className="bg-bg-secondary border border-border rounded-xl p-6">
              <div className="text-sm font-semibold text-accent mb-4 pb-3 border-b border-border">
                Evidence Submission
              </div>
              {[
                { label: "Original Work URL", val: "https://..." },
                { label: "Infringing URL", val: "https://facebook.com/..." },
                { label: "Content Type", val: "Photo / Video / Post" },
              ].map((f) => (
                <div key={f.label} className="mb-3">
                  <div className="text-[11px] text-text-muted uppercase tracking-wide mb-1">{f.label}</div>
                  <div className="bg-bg-primary border border-border rounded-md px-3 py-2 text-sm text-text-muted">{f.val}</div>
                </div>
              ))}
              <div className="mt-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-center py-2 rounded-md text-sm font-semibold">
                Submit Evidence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Protected Content Types</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {contentTypes.map((c) => (
              <div key={c.title} className="bg-bg-card border border-border rounded-xl p-7 hover:border-border-hover hover:-translate-y-0.5 transition-all">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-text-secondary">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Guides */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Report by Platform</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <PlatformCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* DMCA Template */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">📄 DMCA Takedown Notice Template</h2>
          <p className="text-text-secondary text-center mb-8">
            Copy and customise the template below to send a DMCA takedown notice.
          </p>
          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 bg-bg-secondary border-b border-border">
              <span className="font-semibold text-sm">DMCA Takedown Notice Template</span>
              <CopyButton text={dmcaTemplate} />
            </div>
            <pre className="p-6 text-sm text-text-secondary leading-relaxed whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
              {dmcaTemplate}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
