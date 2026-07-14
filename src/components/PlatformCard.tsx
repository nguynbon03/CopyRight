import { ExternalLink } from "lucide-react";

interface PlatformCardProps {
  icon: React.ReactNode;
  title: string;
  steps: string[];
  formUrl: string;
  formLabel: string;
}

export default function PlatformCard({ icon, title, steps, formUrl, formLabel }: PlatformCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-accent">{icon}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ol className="space-y-2 mb-5">
        {steps.map((s, i) => (
          <li key={i} className="text-xs text-text-secondary pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
            {s}
          </li>
        ))}
      </ol>
      <a href={formUrl} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors">
        {formLabel} <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
}
