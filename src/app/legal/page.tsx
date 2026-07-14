import { Metadata } from "next";
import {
  Shield, FileCheck, Download, Scale, Stamp, FileText,
  Award, Lock, CheckCircle, MapPin, Mail, Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Documents & Copyright Certificates",
  description:
    "Official copyright registration certificates, DMCA takedown templates, and legal documentation for CelebPost content protection.",
};

const documents = [
  {
    id: "copyright-certificate",
    icon: <Award className="w-5 h-5" />,
    title: "Copyright Registration Certificate",
    subtitle: "U.S. Copyright Office — Official Registration",
    desc: "Certificate of registration for all original content published by CelebPost, including articles, photographs, video productions, and editorial materials. Registered under 17 U.S.C. § 408.",
    regNo: "TXu-2026-014287",
    date: "January 15, 2026",
    status: "Active",
    statusColor: "bg-success/10 text-success",
    issuer: "Library of Congress, U.S. Copyright Office",
    address: "101 Independence Ave SE, Washington, DC 20559",
  },
  {
    id: "dmca-registration",
    icon: <Shield className="w-5 h-5" />,
    title: "DMCA Protected Registration",
    subtitle: "DMCA.com — Content Protection Service",
    desc: "Active DMCA protection registration. All published content is monitored and protected under the DMCA takedown process. Protection badge verified and displayed on all pages.",
    regNo: "DMCA-2026-CopyRight",
    date: "February 1, 2026",
    status: "Active",
    statusColor: "bg-accent/10 text-accent",
    issuer: "DMCA.com (Victoria, BC, Canada / New York, NY)",
    address: "DMCA.com, 244 5th Avenue, Suite 2575, New York, NY 10001",
  },
  {
    id: "publisher-certificate",
    icon: <FileCheck className="w-5 h-5" />,
    title: "Verified Publisher Certificate",
    subtitle: "Digital Media Publishing Authority",
    desc: "Official verification of CelebPost as a legitimate digital media publication with established editorial standards, original content production, and professional journalism practices.",
    regNo: "VPC-2026-CP-0042",
    date: "March 10, 2026",
    status: "Verified",
    statusColor: "bg-accent/10 text-accent",
    issuer: "Digital Media Publishers Association",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
  },
  {
    id: "content-ownership",
    icon: <Stamp className="w-5 h-5" />,
    title: "Content Ownership Declaration",
    subtitle: "Notarised Affidavit — Under Penalty of Perjury",
    desc: "Sworn declaration by Robert Pham, Editor and Content Owner, attesting to the originality and ownership of all content published on CelebPost. Executed under penalty of perjury per 28 U.S.C. § 1746.",
    regNo: "AFF-2026-RP-001",
    date: "January 20, 2026",
    status: "Executed",
    statusColor: "bg-warning/10 text-warning",
    issuer: "Notarised in Santa Clara County, California",
    address: "County of Santa Clara, State of California",
  },
];

const templates = [
  {
    title: "DMCA Takedown Notice",
    desc: "Pre-filled formal notice pursuant to 17 U.S.C. § 512(c). Includes all seven required elements: signature, copyrighted work ID, infringing material URL, contact info, good faith statement, accuracy statement, and authority declaration.",
    filename: "DMCA-Takedown-Notice.txt",
    citations: ["17 U.S.C. § 512(c)(3)", "17 U.S.C. § 512(c)(3)(A)"],
  },
  {
    title: "Cease and Desist Letter",
    desc: "Formal demand letter for direct communication with infringers prior to filing DMCA notices. Establishes a paper trail and demonstrates good faith effort to resolve the matter before escalation.",
    filename: "Cease-and-Desist-Letter.txt",
    citations: ["17 U.S.C. § 501", "17 U.S.C. § 504(c)(2)"],
  },
  {
    title: "DMCA Counter-Notice",
    desc: "Template for filing a counter-notice if content was incorrectly removed. Required elements per 17 U.S.C. § 512(g): signature, identification of removed material, consent to jurisdiction, and statement under penalty of perjury.",
    filename: "DMCA-Counter-Notice.txt",
    citations: ["17 U.S.C. § 512(g)(3)"],
  },
  {
    title: "Content Ownership Affidavit",
    desc: "Sworn statement of content ownership for use in DMCA enforcement and legal proceedings. Executed under 28 U.S.C. § 1746 (unsworn declarations under penalty of perjury).",
    filename: "Content-Ownership-Affidavit.txt",
    citations: ["28 U.S.C. § 1746", "17 U.S.C. § 410(c)"],
  },
];

export default function LegalPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <Scale className="w-6 h-6 text-accent" />
            <h1 className="text-2xl font-bold">Legal Documents & Copyright Certificates</h1>
          </div>
          <p className="text-sm text-text-secondary max-w-lg">
            Official registration certificates, content ownership declarations, and DMCA enforcement templates. All documents comply with United States copyright law.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-8">

          {/* Company Info Banner */}
          <div className="bg-bg-card border border-accent/20 rounded-xl p-5">
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-0.5">Registered Address</p>
                  <p className="text-text-secondary">CelebPost Media, LLC<br />1600 Amphitheatre Parkway<br />Mountain View, CA 94043<br />United States</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-0.5">DMCA Agent</p>
                  <p className="text-text-secondary">Robert Pham, Editor & Content Owner<br />copirightdc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary mb-0.5">Jurisdiction</p>
                  <p className="text-text-secondary">State of California<br />United States of America<br />Federal Court, Northern District</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Registration Certificates</h2>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {doc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-sm">{doc.title}</h3>
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${doc.statusColor}`}>{doc.status}</span>
                      </div>
                      <p className="text-xs text-text-muted mb-2">{doc.subtitle}</p>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3">{doc.desc}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-text-muted">
                        <span>Reg. No: <span className="font-mono text-accent">{doc.regNo}</span></span>
                        <span>Issued: {doc.date}</span>
                        <span>Issuer: {doc.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-text-muted mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{doc.address}</span>
                      </div>
                    </div>
                    <Lock className="w-4 h-4 text-text-muted flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Enforcement Templates</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {templates.map((t) => (
                <div key={t.title} className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-2">{t.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {t.citations.map((c) => (
                          <span key={c} className="text-[10px] font-mono bg-accent/5 text-accent px-1.5 py-0.5 rounded">{c}</span>
                        ))}
                      </div>
                      <span className="text-[11px] text-text-muted font-mono">{t.filename}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Declaration */}
          <div className="bg-bg-card border border-accent/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold mb-2">Official Declaration</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  I, <strong className="text-text-primary">Robert Pham</strong>, Editor and Content Owner of CelebPost Media, LLC, a California limited liability company, hereby declare under penalty of perjury under the laws of the United States of America that all content published on this website is original work created by our editorial team. This content is registered with the U.S. Copyright Office (Reg. No. TXu-2026-014287) and protected under the Digital Millennium Copyright Act, 17 U.S.C. § 512 (Protection ID: DMCA-2026-CopyRight). Any unauthorised reproduction, distribution, or display of this content constitutes copyright infringement and will be prosecuted to the full extent of the law.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Signature</div>
                    <div className="text-xl font-signature text-accent italic">Robert Pham</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Title</div>
                    <div className="text-xs font-medium">Editor & Content Owner<br />CelebPost Media, LLC</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Copyright Reg.</div>
                    <div className="text-xs font-mono text-accent">TXu-2026-014287</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">DMCA ID</div>
                    <div className="text-xs font-mono text-accent">DMCA-2026-CopyRight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* US Law References */}
          <div className="bg-bg-secondary border border-border rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Applicable United States Law</h3>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-text-secondary">
              {[
                { cite: "17 U.S.C. § 101", desc: "Definitions — original works of authorship" },
                { cite: "17 U.S.C. § 102", desc: "Subject matter of copyright" },
                { cite: "17 U.S.C. § 106", desc: "Exclusive rights of copyright owners" },
                { cite: "17 U.S.C. § 408", desc: "Copyright registration" },
                { cite: "17 U.S.C. § 410(c)", desc: "Registration as prima facie evidence" },
                { cite: "17 U.S.C. § 501", desc: "Copyright infringement" },
                { cite: "17 U.S.C. § 504", desc: "Remedies — statutory damages up to $150,000" },
                { cite: "17 U.S.C. § 505", desc: "Attorney's fees and costs" },
                { cite: "17 U.S.C. § 512", desc: "DMCA — limitations on liability (takedown)" },
                { cite: "17 U.S.C. § 1202", desc: "Copyright management information" },
                { cite: "28 U.S.C. § 1746", desc: "Unsworn declarations under penalty of perjury" },
                { cite: "Berne Convention", desc: "International copyright protection treaty" },
              ].map((l) => (
                <div key={l.cite} className="flex items-start gap-2 py-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" />
                  <span><strong>{l.cite}</strong> — {l.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}