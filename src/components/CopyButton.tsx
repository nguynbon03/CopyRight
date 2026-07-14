"use client";

export function CopyButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="px-4 py-2 bg-bg-card border border-border rounded-md text-sm font-medium hover:border-accent transition-colors cursor-pointer"
    >
      📋 Sao chép
    </button>
  );
}