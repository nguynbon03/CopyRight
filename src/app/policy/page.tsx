import { Metadata } from "next";
import { Shield, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Copyright Policy", description: "CelebPost copyright protection policy and DMCA takedown procedures." };

export default function PolicyPage() {
  return (
    <>
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold mb-2">Copyright Policy</h1>
          <p className="text-sm text-text-secondary">Last updated: July 14, 2026 &middot; DMCA Protected ID: DMCA-2026-CopyRight</p>
        </div>
      </section>
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-sm text-text-secondary leading-relaxed">

          <Section n={1} title="Overview">
            <p>CelebPost is a digital media publication that produces original celebrity news, entertainment coverage, photography, video content, and editorial articles. All content published on this site is protected by the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512, and international copyright law.</p>
            <div className="mt-3 bg-accent/5 border border-accent/20 rounded-lg p-4 text-xs">
              <strong className="text-accent">DMCA Protected:</strong> All articles, photographs, videos, graphics, and other media on CelebPost are original works owned by the publication. Unauthorised reproduction is prohibited.
            </div>
          </Section>

          <Section n={2} title="Protected Content">
            <p>Our copyright covers all original works published on CelebPost, including but not limited to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>News articles, features, interviews, and editorial content</li>
              <li>Photographs, portraits, and event photography</li>
              <li>Video reports, interviews, and multimedia packages</li>
              <li>Graphics, data visualisations, and infographics</li>
              <li>Social media content and captions</li>
            </ul>
          </Section>

          <Section n={3} title="DMCA Takedown Process">
            <p>When we discover unauthorised use of our content, we follow this process:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li><strong>Detection:</strong> We monitor platforms for copies of our content using automated tools and manual review.</li>
              <li><strong>Evidence collection:</strong> Screenshots, URLs, and timestamps are archived.</li>
              <li><strong>DMCA notice:</strong> A formal takedown notice is filed with the hosting platform citing 17 U.S.C. § 512.</li>
              <li><strong>Enforcement:</strong> Platforms remove infringing content. Repeat infringers are reported for account termination.</li>
            </ol>
          </Section>

          <Section n={4} title="Filing a DMCA Notice">
            <p>A valid DMCA takedown notice must include:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Electronic or physical signature of the copyright owner</li>
              <li>Identification of the copyrighted work</li>
              <li>Identification of the infringing material and its URL</li>
              <li>Contact information (name, email, address)</li>
              <li>Good faith statement that the use is unauthorised</li>
              <li>Accuracy statement under penalty of perjury</li>
            </ol>
          </Section>

          <Section n={5} title="Platform-Specific Reporting">
            <div className="grid md:grid-cols-3 gap-3 mt-3">
              {[
                { name: "Facebook/Instagram", url: "https://www.facebook.com/help/contact/634636770043471" },
                { name: "Reddit", url: "https://www.reddit.com/report" },
                { name: "Google", url: "https://support.google.com/legal/troubleshooter/1114905" },
              ].map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-bg-card border border-border rounded-lg p-3 text-xs hover:border-accent transition-colors">
                  <Shield className="w-3.5 h-3.5 text-accent" />
                  <span>{p.name}</span>
                  <ExternalLink className="w-3 h-3 text-text-muted ml-auto" />
                </a>
              ))}
            </div>
          </Section>

          <Section n={6} title="Fair Use">
            <p>The DMCA permits limited use of copyrighted material for commentary, criticism, news reporting, education, and parody. However, verbatim reproduction of our articles, unauthorised redistribution of our photographs, or re-uploading our videos constitutes infringement.</p>
          </Section>

          <Section n={7} title="Counter-Notice">
            <p>If your content was removed in error, you may file a counter-notice including: your signature, identification of the removed material, a statement under penalty of perjury of mistake, consent to federal court jurisdiction, and your contact information. Content is restored in 10–14 business days unless we initiate legal action.</p>
          </Section>

          <Section n={8} title="Contact">
            <p>To report infringement or inquire about licensing:</p>
            <p className="mt-2">Email: <a href="mailto:copirightdc@gmail.com" className="text-accent hover:text-accent-hover">copirightdc@gmail.com</a></p>
            <p>Owner: Robert Pham &middot; DMCA Protected ID: DMCA-2026-CopyRight</p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="pb-8 border-b border-border last:border-0">
      <h2 className="text-base font-bold text-text-primary mb-3">{n}. {title}</h2>
      {children}
    </div>
  );
}
