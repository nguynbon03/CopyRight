"use client";
import { Copy } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-card border border-border rounded-md text-xs font-medium hover:border-accent transition-colors cursor-pointer"
    >
      <Copy className="w-3 h-3" /> Copy
    </button>
  );
}
