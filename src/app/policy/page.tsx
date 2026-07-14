import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description:
    "Copyright protection policy and violation reporting procedures under the Digital Millennium Copyright Act.",
};

export default function PolicyPage() {
  return (
    <>
      <section className="pt-28 pb-12 text-center bg-gradient-to-b from-bg-secondary to-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">📋 DMCA Policy</h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Copyright protection policy and violation reporting procedures under
            the Digital Millennium Copyright Act.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_260px] gap-10 items-start">
          <article className="bg-bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="flex justify-between text-sm text-text-muted mb-6 pb-4 border-b border-border">
              <span>Last updated: 14/07/2026</span>
              <span>DMCA Protected® ID: DMCA-2026-CopyRight</span>
            </div>

            <Section n={1} title="DMCA Overview">
              <p className="text-text-secondary">
                The DMCA (Digital Millennium Copyright Act) is a United States copyright law enacted in 1998 that protects intellectual property in the digital environment. It provides a mechanism for copyright owners to report and request the removal of infringing content.
              </p>
              <Highlight>
                <strong>DMCA Protected®:</strong> All content on this website is protected by the DMCA and international copyright law. Copying, distributing, or using content without written permission is a violation of law.
              </Highlight>
            </Section>

            <Section n={2} title="Scope of Copyright Protection">
              <p className="text-text-secondary mb-3">Content types protected by copyright include:</p>
              <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                <li><strong>Images:</strong> Photos, illustrations, digital art, avatars</li>
                <li><strong>Video:</strong> Clips, reels, stories, live recordings</li>
                <li><strong>Text:</strong> Blog posts, articles, captions, copywriting</li>
                <li><strong>Audio:</strong> Music, podcasts, voice recordings</li>
                <li><strong>Design:</strong> UI/UX, templates, source code</li>
                <li><strong>Branding:</strong> Logos, brand assets, trademarks</li>
              </ul>
            </Section>

            <Section n={3} title="DMCA Takedown Process">
              <SubSection title="3.1. Detect Violation">
                <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                  <li>Take a screenshot immediately (with timestamp)</li>
                  <li>Save the full URL of the infringing content</li>
                  <li>Record the time of discovery</li>
                  <li>Verify that this is indeed a violation</li>
                </ul>
              </SubSection>
              <SubSection title="3.2. Gather Evidence">
                <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                  <li>Link to the original work</li>
                  <li>Metadata of the original file (EXIF data for images)</li>
                  <li>Timestamped screenshots</li>
                  <li>URL link to the infringing content</li>
                </ul>
              </SubSection>
              <SubSection title="3.3. Send DMCA Notice">
                <p className="text-text-secondary mb-2">
                  A DMCA takedown notice must include all of the following (per 17 U.S.C. § 512):
                </p>
                <ol className="list-decimal pl-6 space-y-1 text-text-secondary">
                  <li>Electronic signature of the copyright owner</li>
                  <li>Description of the infringed work</li>
                  <li>URL of the infringing content to be removed</li>
                  <li>Contact information (name, email, address)</li>
                  <li>Good faith statement that the use is unauthorised</li>
                  <li>Accuracy statement under penalty of perjury</li>
                  <li>Authorisation to act on behalf of the owner (if filing for someone else)</li>
                </ol>
              </SubSection>
            </Section>

            <Section n={4} title="Reporting on Facebook/Instagram">
              <PlatformBox
                title="📘 How to file DMCA on Facebook:"
                steps={[
                  "Access the Facebook Copyright Report Form",
                  'Select "I am the rights owner"',
                  "Fill in full contact information",
                  "Provide a link to the original work",
                  "Paste the infringing content URL (up to 10 URLs)",
                  "Describe how the content infringes your rights",
                  "Sign electronically and submit",
                ]}
              />
              <p className="text-sm text-text-muted mt-2">
                <strong>Note:</strong> Facebook requires a professional/business email. Use copirightdc@gmail.com.
              </p>
            </Section>

            <Section n={5} title="Reporting on Reddit">
              <PlatformBox
                title="🤖 How to file DMCA on Reddit:"
                steps={[
                  "Access the Reddit Report Form",
                  'Select "Copyright Infringement"',
                  "Provide the URL of the infringing post/comment",
                  "Describe the stolen content",
                  "Attach proof of ownership",
                  "Sign statement under penalty of perjury",
                ]}
              />
            </Section>

            <Section n={6} title="Reporting on Google">
              <PlatformBox
                title="🔍 How to file DMCA on Google:"
                steps={[
                  "Access Google Legal Help",
                  'Select "Web Search" or "Blogger" removal',
                  "Enter the infringing page URL",
                  "Provide the original work URL",
                  "Describe the violation in detail",
                  "Sign electronically",
                ]}
              />
            </Section>

            <Section n={7} title="Counter-Notice">
              <p className="text-text-secondary">
                If you receive a DMCA takedown that you believe was filed in error, you have the right to submit a counter-notice. The counter-notice must include: an electronic signature, the URL of the removed content, a statement under penalty of perjury that the content was removed by mistake, consent to the jurisdiction of a federal court, and contact information.
              </p>
            </Section>

            <Section n={8} title="Fair Use">
              <p className="text-text-secondary">
                The DMCA does not prohibit all use of copyrighted content. &quot;Fair use&quot; permits use for: commentary, criticism, review; education and research; news reporting; and parody/satire. However, verbatim copying without attribution or permission constitutes <strong>copyright infringement</strong>.
              </p>
            </Section>

            <Section n={9} title="Penalties for Violation">
              <ul className="list-disc pl-6 space-y-1 text-text-secondary">
                <li>Content removed immediately</li>
                <li>Account suspended or permanently banned</li>
                <li>Damages of $750 – $150,000 per work</li>
                <li>Attorney&apos;s fees</li>
                <li>Criminal prosecution (in serious cases)</li>
              </ul>
            </Section>

            <Section n={10} title="Contact">
              <ul className="list-none space-y-1 text-text-secondary">
                <li><strong>Email:</strong> copirightdc@gmail.com</li>
                <li><strong>Owner:</strong> Robert Pham</li>
                <li><strong>DMCA Protected ID:</strong> DMCA-2026-CopyRight</li>
              </ul>
              <div className="mt-6 bg-[rgba(245,158,11,0.08)] border border-warning rounded-xl p-5 text-sm text-text-secondary">
                <strong>⚖️ Legal Notice:</strong> This website is created for the purpose of protecting copyrighted content. All information is based on U.S. DMCA law. Consult a copyright attorney for specific legal advice.
              </div>
            </Section>
          </article>

          <aside className="lg:sticky lg:top-20 space-y-5">
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h4 className="font-semibold mb-3">Table of Contents</h4>
              <nav className="flex flex-col gap-1">
                {[
                  "1. Overview", "2. Scope", "3. Takedown Process",
                  "4. Facebook/Instagram", "5. Reddit", "6. Google",
                  "7. Counter-Notice", "8. Fair Use", "9. Penalties", "10. Contact",
                ].map((item) => (
                  <span key={item} className="px-3 py-2 text-sm text-text-secondary rounded-md hover:bg-accent-glow hover:text-accent cursor-pointer transition-colors">
                    {item}
                  </span>
                ))}
              </nav>
            </div>
            <div className="bg-bg-card border border-border rounded-xl p-5">
              <h4 className="font-semibold mb-3">📤 Report Violation</h4>
              <p className="text-sm text-text-secondary mb-3">Found stolen content?</p>
              <a href="/submit" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all">
                Submit Evidence →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0 pt-6 first:pt-0 border-t border-border first:border-0">
      <h2 className="text-xl font-bold mb-4">{n}. {title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-accent font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 bg-accent-glow border border-accent rounded-xl p-4 text-sm">{children}</div>
  );
}

function PlatformBox({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-bg-primary border border-border rounded-xl p-5 mt-3">
      <h4 className="font-semibold mb-3">{title}</h4>
      <ol className="list-decimal pl-5 space-y-1 text-sm text-text-secondary">
        {steps.map((s) => <li key={s}>{s}</li>)}
      </ol>
    </div>
  );
}
