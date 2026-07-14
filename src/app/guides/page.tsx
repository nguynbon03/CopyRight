import { Metadata } from "next";
import { Shield, ExternalLink, Camera, Clock, Mail, FileText, Bookmark } from "lucide-react";

export const metadata: Metadata = { title: "DMCA Guides", description: "Step-by-step guides for filing DMCA takedown notices on major platforms." };

const guides = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Facebook / Instagram",
    meta: "Processing: 24–72 hours",
    steps: ["Access the Facebook Copyright Report Form", 'Select "I am the rights owner"', "Enter contact details (Robert Pham, copirightdc@gmail.com)", "Provide a link to the original CelebPost article/media", "Paste the infringing URL (up to 10 per submission)", "Describe the violation and sign electronically"],
    formUrl: "https://www.facebook.com/help/contact/634636770043471",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Reddit",
    meta: "Processing: 1–3 days",
    steps: ['Go to reddit.com/report and select "Copyright Infringement"', "Provide the URL of the infringing post", "Describe the stolen content and link to the original", "Sign under penalty of perjury"],
    formUrl: "https://www.reddit.com/report",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Google Search",
    meta: "Processing: 1–2 weeks",
    steps: ["Access Google Legal Troubleshooter", 'Select "Web Search" removal', "Enter the infringing page URL", "Provide the original CelebPost URL", "Describe the violation and sign"],
    formUrl: "https://support.google.com/legal/troubleshooter/1114905",
  },
];

const tips = [
  { icon: <Camera className="w-4 h-4" />, title: "Screenshot immediately", desc: "Capture the full page including URL bar and timestamp." },
  { icon: <Clock className="w-4 h-4" />, title: "Record timestamps", desc: "Note when our content was published and when you found the copy." },
  { icon: <FileText className="w-4 h-4" />, title: "Use the template", desc: "Use our DMCA notice template to ensure all required fields are included." },
  { icon: <Bookmark className="w-4 h-4" />, title: "Backup everything", desc: "Store screenshots and URLs in cloud storage." },
  { icon: <Mail className="w-4 h-4" />, title: "Professional email", desc: "Use copirightdc@gmail.com when filing — platforms prefer business emails." },
  { icon: <Shield className="w-4 h-4" />, title: "Follow up", desc: "If no response within the stated timeframe, re-file or escalate." },
];

export default function GuidesPage() {
  return (
    <>
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-2">DMCA Filing Guides</h1>
          <p className="text-sm text-text-secondary">Step-by-step instructions for filing DMCA takedown notices on each platform.</p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          {guides.map((g) => (
            <div key={g.title} className="bg-bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                <span className="text-accent">{g.icon}</span>
                <div>
                  <h2 className="font-semibold text-sm">{g.title}</h2>
                  <span className="text-[11px] text-text-muted">{g.meta}</span>
                </div>
              </div>
              <div className="px-6 py-4">
                {g.steps.map((s, i) => (
                  <div key={i} className="flex gap-3 py-3 border-b border-border last:border-0">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent text-[10px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-text-secondary leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-border flex gap-3">
                <a href={g.formUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors">
                  Open Form <ExternalLink className="w-3 h-3" />
                </a>
                <a href="/submit" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
                  Create DMCA Notice first
                </a>
              </div>
            </div>
          ))}

          <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-sm">Best Practices</h2>
            </div>
            <div className="grid md:grid-cols-3">
              {tips.map((t, i) => (
                <div key={i} className="p-5 border-r border-b border-border last:border-r-0 [&:nth-child(3n)]:border-r-0">
                  <div className="flex items-center gap-2 mb-2 text-accent">{t.icon}<h4 className="font-semibold text-xs">{t.title}</h4></div>
                  <p className="text-xs text-text-secondary leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
