"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/submit", label: "Submit Evidence" },
  { href: "/policy", label: "DMCA Policy" },
  { href: "/original-works", label: "Original Works" },
  { href: "/guides", label: "Guides" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-xl">🛡️</span>
          <span>DMCA<span className="text-accent">Shield</span></span>
        </Link>
        <ul className="hidden md:flex gap-1 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="px-4 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bg-secondary border-b border-border px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
