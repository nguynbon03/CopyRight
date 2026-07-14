import { Metadata } from "next";
import EvidenceForm from "@/components/EvidenceForm";
import { Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Submit Evidence",
  description: "Register infringing URLs as evidence for DMCA takedown proceedings.",
};

export default function SubmitPage() {
  return (
    <>
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-2">Submit Copyright Infringement Evidence</h1>
          <p className="text-sm text-text-secondary max-w-lg">
            Register URLs pointing to infringing copies of our content. Evidence is timestamped and archived for DMCA takedown proceedings.
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            <EvidenceForm />
            <aside className="flex flex-col gap-4 lg:sticky lg:top-16">
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Tips</h4>
                <ul className="space-y-2 text-xs text-text-secondary">
                  {[
                    "Screenshot the infringing page immediately",
                    "Save full URLs — no shortened links",
                    "Note when the original content was published",
                    "Upload screenshots to cloud storage as backup",
                    "Include as much evidence as possible",
                  ].map((t) => (
                    <li key={t} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-accent/50">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Quick Links</h4>
                <a href="https://www.facebook.com/help/contact/634636770043471" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-accent hover:text-accent-hover transition-colors mb-2">
                  <Shield className="w-3 h-3" /> Facebook Copyright Form
                </a>
                <a href="https://www.reddit.com/report" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-accent hover:text-accent-hover transition-colors mb-2">
                  <Shield className="w-3 h-3" /> Reddit DMCA Form
                </a>
                <a href="https://support.google.com/legal/troubleshooter/1114905" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-accent hover:text-accent-hover transition-colors">
                  <Shield className="w-3 h-3" /> Google Legal Help
                </a>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> Processing Times
                </h4>
                <div className="space-y-1.5">
                  {[{ p: "Facebook", t: "24–72 hrs" }, { p: "Instagram", t: "24–72 hrs" }, { p: "Google", t: "1–2 weeks" }, { p: "Reddit", t: "1–3 days" }, { p: "YouTube", t: "1–3 days" }].map((item) => (
                    <div key={item.p} className="flex justify-between text-xs py-1 border-b border-border last:border-0">
                      <span className="text-text-secondary">{item.p}</span>
                      <span className="text-accent font-medium">{item.t}</span>
                    </div>
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
