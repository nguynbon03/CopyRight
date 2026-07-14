import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Submit Evidence", href: "/submit" },
  { label: "DMCA Policy", href: "/policy" },
  { label: "Original Works", href: "/original-works" },
  { label: "Guides", href: "/guides" },
];

const resources = [
  { label: "US Copyright Office", href: "https://www.copyright.gov/dmca/" },
  { label: "DMCA.com", href: "https://www.dmca.com/" },
  { label: "Copyright Alliance", href: "https://copyrightalliance.org/" },
  { label: "Facebook Copyright Form", href: "https://www.facebook.com/help/contact/634636770043471" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold mb-3">
            <span>🛡️</span>
            <span>DMCA<span className="text-accent">Shield</span></span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            Professional copyright protection system. Supports DMCA notifications and global copyright infringement tracking.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
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
          <h3 className="font-semibold mb-4">DMCA Resources</h3>
          <ul className="space-y-2">
            {resources.map((r) => (
              <li key={r.href}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-sm text-text-secondary">
            <p>📧 <a href="mailto:copirightdc@gmail.com" className="hover:text-accent transition-colors">copirightdc@gmail.com</a></p>
            <p>👤 Robert Pham</p>
            <p className="mt-4 text-xs text-text-muted leading-relaxed">
              All content on this website is protected by DMCA and international copyright law.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 border-t border-border pt-6 text-center">
        <p className="text-sm text-text-muted">© 2026 DMCA Shield. All Rights Reserved.</p>
        <p className="text-xs text-text-muted mt-1">Protection ID: DMCA-2026-CopyRight</p>
      </div>
    </footer>
  );
}
