import { Shield } from "lucide-react";

export default function DMCABadge() {
  return (
    <div className="badge-glow inline-flex items-center gap-3 bg-white border border-accent/20 rounded-lg px-5 py-3 mb-8">
      <Shield className="w-8 h-8 text-accent" />
      <div>
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">DMCA Protected</div>
        <div className="text-[11px] text-text-muted font-mono">ID: DMCA-2026-CopyRight</div>
      </div>
    </div>
  );
}