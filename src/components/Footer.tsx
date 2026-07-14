import Link from "next/link";
import { Newspaper, Shield, Mail, ExternalLink, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/blog" },
  { label: "Submit Evidence", href: "/submit" },
  { label: "Legal", href: "/legal" },
  { label: "Copyright Policy", href: "/policy" },
  { label: "Our Content", href: "/original-works" },
  { label: "DMCA Guides", href: "/guides" },
];

const resources = [
  { label: "U.S. Copyright Office", href: "https://www.copyright.gov/dmca/" },
  { label: "DMCA.com Protection", href: "https://www.dmca.com/" },
  { label: "Copyright Alliance", href: "https://copyrightalliance.org/" },
  { label: "Facebook Copyright Form", href: "https://www.facebook.com/help/contact/634636770043471" },
  { label: "Google Legal Help", href: "https://support.google.com/legal/troubleshooter/1114905" },
  { label: "Reddit DMCA Form", href: "https://www.reddit.com/report" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold mb-3">
            <Newspaper className="w-5 h-5 text-accent" />
            <span className="text-text-primary">Celeb<span className="text-accent">Post</span></span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            A leading digital entertainment publication covering celebrity news, exclusive interviews, and original editorial content. All content is produced by our editorial team and protected under U.S. and international copyright law.
          </p>
          <div className="space-y-2 text-xs text-text-muted">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-accent" />
              <span>CelebPost Media, LLC<br />1600 Amphitheatre Parkway<br />Mountain View, CA 94043<br />United States</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider text-text-muted">Navigation</h3>
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
          <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider text-text-muted">Copyright Resources</h3>
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
          <h3 className="text-xs font-semibold mb-4 uppercase tracking-wider text-text-muted">DMCA Agent</h3>
          <div className="space-y-3 text-sm text-text-secondary">
            <div>
              <p className="font-medium text-text-primary text-xs">Designated DMCA Agent</p>
              <p>Robert Pham</p>
            </div>
            <div>
              <p className="font-medium text-text-primary text-xs">Title</p>
              <p>Editor & Content Owner</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:copirightdc@gmail.com" className="hover:text-accent transition-colors">copirightdc@gmail.com</a>
            </div>
            <div>
              <p className="font-medium text-text-primary text-xs">Mailing Address</p>
              <p className="text-xs">CelebPost Media, LLC<br />Attn: DMCA Agent<br />1600 Amphitheatre Parkway<br />Mountain View, CA 94043<br />United States</p>
            </div>
            <div>
              <p className="font-medium text-text-primary text-xs">Registration</p>
              <p className="text-xs font-mono text-accent">DMCA-2026-CopyRight</p>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Badges */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "DMCA Protected", color: "text-accent" },
            { label: "Verified Publisher", color: "text-success" },
            { label: "Content Secured", color: "text-warning" },
            { label: "U.S. Copyright Registered", color: "text-accent" },
            { label: "Berne Convention", color: "text-accent" },
          ].map((b) => (
            <span key={b.label} className={`inline-flex items-center gap-1.5 text-[10px] text-text-muted bg-white border border-border rounded-full px-3 py-1.5`}>
              <Shield className={`w-3 h-3 ${b.color}`} /> {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-text-muted">&copy; 2026 CelebPost Media, LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-text-muted">
            <span>CelebPost Media, LLC is a registered limited liability company in the State of California, United States.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}