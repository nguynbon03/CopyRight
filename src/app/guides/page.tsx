import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Guides",
  description:
    "Step-by-step guides on how to protect your content and report violations on each platform.",
};

const guides = [
  {
    icon: "📘",
    title: "Facebook / Instagram",
    meta: "Updated: 07/2026 · Processing time: 24-72 hours",
    steps: [
      "Access the Facebook Copyright Report Form",
      'Select "I am the rights owner"',
      "Fill in contact information: Robert Pham, copirightdc@gmail.com",
      "Owner info: select country, content type, link to original work",
      "Paste the infringing content URL (up to 10 URLs)",
      "Describe the violation — use the DMCA Notice template",
      "Sign electronically (Robert Pham) and submit",
    ],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
    formLabel: "Open Facebook Copyright Form →",
  },
  {
    icon: "🤖",
    title: "Reddit",
    meta: "Updated: 07/2026 · Processing time: 1-3 days",
    steps: [
      'Go to reddit.com/report → "Copyright Infringement"',
      "Provide the URL of the infringing post/comment",
      "Describe the stolen content",
      "Provide a link to the original work",
      "Sign statement under penalty of perjury",
    ],
    formUrl: "https://www.reddit.com/report",
    formLabel: "Open Reddit Report Form →",
  },
  {
    icon: "🔍",
    title: "Google Search",
    meta: "Updated: 07/2026 · Processing time: 1-2 weeks",
    steps: [
      "Access Google Legal Troubleshooter",
      'Select "Web Search" or "Blogger" removal',
      "Enter the infringing page URL",
      "Provide the original work URL",
      "Describe the violation in detail and sign electronically",
    ],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
    formLabel: "Open Google Legal Help →",
  },
];

const tips = [
  { icon: "📸", title: "Screenshot immediately", desc: "When you spot a violation, take a screenshot right away. Include the URL, timestamp, and content." },
  { icon: "🕐", title: "Record timestamps", desc: "Note the exact time you created the original content and the time you discovered the violation." },
  { icon: "🔗", title: "Save full URLs", desc: "Do not use shortened links. Copy the full URL from the browser address bar." },
  { icon: "☁️", title: "Backup evidence", desc: "Upload screenshots to Google Drive, Dropbox, or other cloud storage." },
  { icon: "📧", title: "Use a professional email", desc: "Facebook and other platforms prioritise business/professional emails when reviewing DMCA claims." },
  { icon: "📋", title: "Use a template", desc: "Use the DMCA Notice template from the Submit Evidence page to ensure all required information is included." },
];

export default function GuidesPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">📚 Copyright Protection Guides</h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Step-by-step guides on how to protect your content and report
            violations on each platform.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {guides.map((g) => (
            <div key={g.title} className="bg-bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex items-center gap-5 px-8 py-6 border-b border-border">
                <span className="text-4xl">{g.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{g.title}</h2>
                  <span className="text-sm text-text-muted">{g.meta}</span>
                </div>
              </div>
              <div className="px-8 py-6">
                {g.steps.map((s, i) => (
                  <div key={i} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-b border-border last:border-0">
                    <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-full text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="text-sm text-text-secondary leading-relaxed pt-2">{s}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 px-8 py-5 border-t border-border">
                <a href={g.formUrl} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all">
                  {g.formLabel}
                </a>
                <a href="/submit"
                  className="px-5 py-3 bg-bg-card border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors">
                  Create DMCA Notice first →
                </a>
              </div>
            </div>
          ))}

          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex items-center gap-5 px-8 py-6 border-b border-border">
              <span className="text-4xl">💡</span>
              <h2 className="text-xl font-bold">Copyright Protection Tips</h2>
            </div>
            <div className="grid md:grid-cols-3">
              {tips.map((t, i) => (
                <div key={i} className="p-6 border-r border-b border-border last:border-r-0 [&:nth-child(3n)]:border-r-0">
                  <h4 className="font-semibold text-sm mb-2">{t.icon} {t.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
