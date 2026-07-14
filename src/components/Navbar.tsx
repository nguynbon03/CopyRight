"use client";
import Link from "next/link";
import { useState } from "react";
import { Newspaper, Shield, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Articles" },
  { href: "/submit", label: "Submit Evidence" },
  { href: "/legal", label: "Legal" },
  { href: "/policy", label: "Copyright Policy" },
  { href: "/original-works", label: "Our Content" },
  { href: "/guides", label: "DMCA Guides" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <Newspaper className="w-6 h-6 text-accent" />
          <span className="text-lg text-text-primary">Celeb<span className="text-accent">Post</span></span>
        </Link>
        <ul className="hidden md:flex gap-0.5 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="px-3 py-1.5 rounded-md text-[13px] font-medium text-text-secondary hover:text-accent hover:bg-accent-glow transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-[11px] text-accent font-medium border border-accent/20 bg-accent-glow rounded-full px-2.5 py-1">
            <Shield className="w-3 h-3" />
            DMCA Protected
          </span>
        </div>
        <button className="md:hidden cursor-pointer text-text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 flex flex-col gap-1 shadow-lg">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm text-text-secondary hover:text-accent hover:bg-accent-glow transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-1.5 text-xs text-accent mt-2 pt-2 border-t border-border">
            <Shield className="w-3 h-3" />
            DMCA Protected
          </div>
        </div>
      )}
    </nav>
  );
}