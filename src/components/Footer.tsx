import Link from "next/link";
import { Newspaper, Shield, Mail, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/blog" },
  { label: "Submit Evidence", href: "/submit" },
  { label: "Copyright Policy", href: "/policy" },
  { label: "Our Content", href: "/original-works" },
  { label: "DMCA Guides", href: "/guides" },
];

const resources = [
  { label: "US Copyright Office", href: "https://www.copyright.gov/dmca/" },
  { label: "DMCA.com", href: "https://www.dmca.com/" },
  { label: "Copyright Alliance", href: "https://copyrightalliance.org/" },
  { label: "Facebook Copyright Form", href: "https://www.facebook.com/help/contact/634636770043471" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold mb-3">
            <Newspaper className="w-5 h-5 text-accent" />
            <span>Celeb<span className="text-accent">Post</span></span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            Your trusted source for celebrity news, entertainment, and exclusive stories. All original content is protected by DMCA and international copyright law.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Shield className="w-3.5 h-3.5 text-accent" />
            DMCA Protected ID: DMCA-2026-CopyRight
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-text-muted">Navigation</h3>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-text-secondary hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-text-muted">Copyright Resources</h3>
          <ul className="space-y-2">
            {resources.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1">
                  {r.label} <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-text-muted">Contact</h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-text-muted" />
              <a href="mailto:copirightdc@gmail.com" className="hover:text-accent transition-colors">copirightdc@gmail.com</a>
            </p>
            <p>Robert Pham — Editor & Content Owner</p>
            <p className="text-xs text-text-muted leading-relaxed mt-4">
              Unauthorized reproduction or distribution of any content on this site is strictly prohibited and will be prosecuted under DMCA and applicable copyright law.
            </p>
          </div>
        </div>
      </div>
      {/* Authority Badges */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted bg-bg-card border border-border rounded-full px-3 py-1.5">
            <Shield className="w-3 h-3 text-accent" /> DMCA Protected
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted bg-bg-card border border-border rounded-full px-3 py-1.5">
            <Shield className="w-3 h-3 text-success" /> Verified Publisher
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted bg-bg-card border border-border rounded-full px-3 py-1.5">
            <Shield className="w-3 h-3 text-warning" /> Content Secured
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-text-muted bg-bg-card border border-border rounded-full px-3 py-1.5">
            <Shield className="w-3 h-3 text-accent" /> U.S. Copyright Registered
          </span>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-text-muted">&copy; 2026 CelebPost. All Rights Reserved.</p>
          <p className="text-xs text-text-muted">Protection ID: DMCA-2026-CopyRight</p>
        </div>
      </div>
    </footer>
  );
}