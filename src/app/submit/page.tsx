import { Metadata } from "next";
import EvidenceForm from "@/components/EvidenceForm";

export const metadata: Metadata = {
  title: "Submit Evidence",
  description:
    "Register URLs pointing to infringing content. Evidence will be timestamped for DMCA takedown use.",
};

export default function SubmitPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            📤 Submit Copyright Infringement Evidence
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Register URLs pointing to infringing content. Evidence will be
            timestamped for DMCA takedown use.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            <EvidenceForm />
            <aside className="flex flex-col gap-5 lg:sticky lg:top-20">
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">💡 Tips for Submitting Evidence</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    "Take a screenshot as soon as you spot the violation",
                    "Save the full URL (no shortened links)",
                    "Note the date you created the original content",
                    "Upload screenshots to cloud storage",
                    "The more evidence, the better",
                  ].map((t) => (
                    <li key={t} className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">📋 Facebook Copyright Form</h4>
                <p className="text-sm text-text-secondary mb-3">
                  After generating your DMCA Notice, copy and paste it into Facebook&apos;s official form:
                </p>
                <a
                  href="https://www.facebook.com/help/contact/634636770043471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-bg-card border border-border rounded-lg text-accent text-sm font-medium hover:bg-accent-glow hover:border-accent transition-all"
                >
                  Open Facebook Copyright Form →
                </a>
              </div>
              <div className="bg-bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">⏱️ Processing Times</h4>
                <div className="space-y-2">
                  {[
                    { p: "Facebook", t: "24-72 hours" },
                    { p: "Instagram", t: "24-72 hours" },
                    { p: "Google", t: "1-2 weeks" },
                    { p: "Reddit", t: "1-3 days" },
                    { p: "YouTube", t: "1-3 days" },
                  ].map((item) => (
                    <div key={item.p} className="flex justify-between text-sm py-1 border-b border-border last:border-0">
                      <span className="font-medium">{item.p}</span>
                      <span className="text-accent font-semibold">{item.t}</span>
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
