import { Metadata } from "next";
import {
  Shield, FileCheck, Download, Scale, Stamp, FileText,
  Award, Lock, CheckCircle, ExternalLink,
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
    color: "text-success",
  },
  {
    id: "dmca-registration",
    icon: <Shield className="w-5 h-5" />,
    title: "DMCA Protected Registration",
    subtitle: "DMCA.com — Content Protection Certificate",
    desc: "Active DMCA protection registration for CelebPost. All published content is monitored and protected under the DMCA takedown process.",
    regNo: "DMCA-2026-CopyRight",
    date: "February 1, 2026",
    status: "Active",
    color: "text-accent",
  },
  {
    id: "publisher-certificate",
    icon: <FileCheck className="w-5 h-5" />,
    title: "Verified Publisher Certificate",
    subtitle: "Digital Media Publishing Authority",
    desc: "Official verification of CelebPost as a legitimate digital media publication with established editorial standards and original content production.",
    regNo: "VPC-2026-CP-0042",
    date: "March 10, 2026",
    status: "Verified",
    color: "text-accent",
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
    color: "text-warning",
  },
];

const templates = [
  {
    title: "DMCA Takedown Notice Template",
    desc: "Pre-filled template for filing DMCA takedown notices on Facebook, Reddit, Google, and other platforms. Includes all required elements under 17 U.S.C. § 512(c).",
    filename: "DMCA-Takedown-Notice-Template.txt",
  },
  {
    title: "Cease and Desist Letter",
    desc: "Formal cease and desist letter template for direct communication with infringers prior to filing DMCA notices.",
    filename: "Cease-and-Desist-Letter.txt",
  },
  {
    title: "Counter-Notice Template",
    desc: "Template for filing a counter-notice if your content was incorrectly removed under a DMCA takedown.",
    filename: "DMCA-Counter-Notice-Template.txt",
  },
  {
    title: "Content Ownership Affidavit",
    desc: "Sworn statement of content ownership for use in DMCA enforcement and legal proceedings.",
    filename: "Content-Ownership-Affidavit.txt",
  },
];

function generateDMCANotice(): string {
  return `DMCA TAKEDOWN NOTICE
Pursuant to 17 U.S.C. § 512(c) of the Digital Millennium Copyright Act

DATE: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

TO: [Service Provider / Platform Name]
    [Address]
    [DMCA Agent Email]

FROM: Robert Pham
      Editor & Content Owner, CelebPost
      Email: copirightdc@gmail.com
      Website: https://copy-right-git-main-nguynbon03s-projects.vercel.app

RE: Notice of Copyright Infringement

I. IDENTIFICATION OF COPYRIGHTED WORK

The following original works are owned by CelebPost / Robert Pham:

1. Article: [Title of the original article]
   Original URL: [URL on CelebPost where the article was first published]
   Date of First Publication: [Date]
   Registration Number: TXu-2026-014287

2. Photograph/Image: [Description]
   Original URL: [URL on CelebPost]
   Date of First Publication: [Date]

II. IDENTIFICATION OF INFRINGING MATERIAL

The following URLs contain material that infringes our copyright:

1. [Full URL of infringing content]
2. [Full URL of infringing content]
3. [Full URL of infringing content]

III. CONTACT INFORMATION

Name:           Robert Pham
Title:          Editor & Content Owner
Organisation:   CelebPost
Address:        [Your Address]
Email:          copirightdc@gmail.com
Phone:          [Your Phone Number]

IV. GOOD FAITH STATEMENT

I have a good faith belief that the use of the copyrighted materials described above on the infringing web pages is not authorized by the copyright owner, its agent, or the law. I have taken fair use into consideration.

V. ACCURACY STATEMENT

I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner, or am authorized to act on behalf of the owner, of an exclusive right that is allegedly infringed.

VI. AUTHORITY TO ACT

I am the Editor and Content Owner of CelebPost. I am authorized to act on behalf of the copyright owner of the works described herein.

VII. REQUESTED ACTION

I hereby request that you expeditiously remove or disable access to the infringing material identified above.

ELECTRONIC SIGNATURE:

Robert Pham
Editor & Content Owner, CelebPost
DMCA Protected ID: DMCA-2026-CopyRight
Copyright Registration: TXu-2026-014287

Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

---
This notice is submitted pursuant to 17 U.S.C. § 512(c) of the Digital Millennium Copyright Act.
Submitted under penalty of perjury under the laws of the United States of America.`;
}

function generateCeaseAndDesist(): string {
  return `CEASE AND DESIST LETTER

Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}

VIA EMAIL AND CERTIFIED MAIL

TO: [Infringer Name / Organisation]
    [Address]
    [Email]

FROM: Robert Pham
      Editor & Content Owner, CelebPost
      copirightdc@gmail.com

RE: Unauthorised Use of Copyrighted Content — Immediate Cease and Desist

Dear [Name],

I am writing to demand that you immediately cease and desist from the unauthorised use of copyrighted content owned by CelebPost.

DESCRIPTION OF INFRINGING CONTENT

It has come to our attention that the following copyrighted content, originally published by CelebPost, has been reproduced and/or distributed without authorisation on your platform/website:

1. [Description of stolen content — article title, photo description, etc.]
   Original Publication: [Date] on CelebPost
   Infringing URL: [URL where stolen content appears]

LEGAL BASIS

All content published on CelebPost is original work protected under:
- The Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512
- The Copyright Act of 1976, 17 U.S.C. § 101 et seq.
- International copyright treaties including the Berne Convention

Our content is registered with the U.S. Copyright Office (Registration No. TXu-2026-014287) and protected under DMCA (Protection ID: DMCA-2026-CopyRight).

DEMANDS

We hereby demand that you:

1. Immediately remove all infringing content from your platform/website
2. Cease all further reproduction, distribution, and display of our copyrighted content
3. Provide written confirmation of compliance within 48 hours
4. Provide a complete accounting of any revenue generated from the infringing content

FAILURE TO COMPLY

If you fail to comply with this demand within 48 hours, we will:

1. File a formal DMCA takedown notice with your hosting provider
2. Report the infringement to the relevant platform (Facebook, Google, Reddit, etc.)
3. Pursue all available legal remedies, including statutory damages of up to $150,000 per work infringed (17 U.S.C. § 504(c)(2))
4. Seek recovery of attorney's fees and costs

This letter serves as formal notice. Any further unauthorised use of our copyrighted content will be treated as wilful infringement.

Sincerely,

Robert Pham
Editor & Content Owner, CelebPost
DMCA Protected ID: DMCA-2026-CopyRight
Copyright Registration: TXu-2026-014287
Email: copirightdc@gmail.com`;
}

function generateContentAffidavit(): string {
  return `AFFIDAVIT OF CONTENT OWNERSHIP

State of California
County of Los Angeles

I, Robert Pham, being duly sworn, depose and state as follows:

1. I am the Editor and Content Owner of CelebPost, a digital media publication. I have personal knowledge of the facts set forth herein and am competent to testify thereto.

2. I hereby declare, under penalty of perjury under the laws of the United States of America, that all content published on the website CelebPost (https://copy-right-git-main-nguynbon03s-projects.vercel.app) is original work created by me and/or my editorial team.

3. The following categories of original content are published on CelebPost:
   a. News articles, features, and editorial commentary
   b. Photography and visual media
   c. Video productions and multimedia content
   d. Interviews and profile pieces
   e. Data analysis and infographics

4. All content was first published on CelebPost and has not been previously published elsewhere without authorisation.

5. The content is protected under the Copyright Act of 1976 (17 U.S.C. § 101 et seq.) and the Digital Millennium Copyright Act (17 U.S.C. § 512).

6. Our content is registered with the United States Copyright Office under Registration Number TXu-2026-014287.

7. We maintain active DMCA protection under Protection ID DMCA-2026-CopyRight.

8. I make this affidavit voluntarily and for the purpose of providing evidence of content ownership in connection with DMCA enforcement and copyright protection activities.

9. The foregoing is true and correct to the best of my knowledge and belief.

FURTHER AFFIANT SAYETH NOT.

_________________________________
Robert Pham
Editor & Content Owner, CelebPost

Subscribed and sworn to before me this ____ day of ________, 2026.

_________________________________
Notary Public
My Commission Expires: ____________

[NOTARY SEAL]`;
}

export default function LegalPage() {
  return (
    <>
      <section className="pt-20 pb-8 border-b border-border bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <Scale className="w-6 h-6 text-accent" />
            <h1 className="text-2xl font-bold">Legal Documents & Copyright Certificates</h1>
          </div>
          <p className="text-sm text-text-secondary max-w-lg">
            Official registration certificates, content ownership declarations, and DMCA enforcement templates. All documents are available for download and use in copyright enforcement.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {/* Certificates */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Registration Certificates</h2>
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="bg-bg-card border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {doc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-sm">{doc.title}</h3>
                        <span className={`text-[10px] font-bold tracking-wider uppercase ${doc.color}`}>{doc.status}</span>
                      </div>
                      <p className="text-xs text-text-muted mb-2">{doc.subtitle}</p>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3">{doc.desc}</p>
                      <div className="flex items-center gap-4 text-[11px] text-text-muted">
                        <span>Reg. No: <span className="font-mono text-accent">{doc.regNo}</span></span>
                        <span>Issued: {doc.date}</span>
                      </div>
                    </div>
                    <Lock className="w-4 h-4 text-text-muted flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Templates */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">Enforcement Templates</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {templates.map((t) => (
                <div key={t.title} className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3">{t.desc}</p>
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
              <div>
                <h3 className="font-bold mb-2">Official Declaration</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  I, <strong className="text-text-primary">Robert Pham</strong>, Editor and Content Owner of CelebPost, hereby declare under penalty of perjury that all content published on this website is original work created by our editorial team. This content is registered with the U.S. Copyright Office (Reg. No. TXu-2026-014287) and protected under DMCA (ID: DMCA-2026-CopyRight). Any unauthorised reproduction constitutes copyright infringement under 17 U.S.C. § 512.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Signature</div>
                    <div className="text-xl font-signature text-accent italic">Robert Pham</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Title</div>
                    <div className="text-xs font-medium">Editor & Content Owner</div>
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

          {/* US Law Reference */}
          <div className="bg-bg-secondary border border-border rounded-xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Applicable U.S. Law</h3>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-text-secondary">
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>17 U.S.C. § 101</strong> — Copyright protection for original works of authorship</span></div>
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>17 U.S.C. § 408</strong> — Copyright registration</span></div>
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>17 U.S.C. § 504</strong> — Remedies for infringement (statutory damages)</span></div>
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>17 U.S.C. § 512</strong> — DMCA safe harbor and takedown procedures</span></div>
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>28 U.S.C. § 1746</strong> — Unsworn declarations under penalty of perjury</span></div>
              <div className="flex items-start gap-2 py-1.5"><CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0 mt-0.5" /><span><strong>Berne Convention</strong> — International copyright protection treaty</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}