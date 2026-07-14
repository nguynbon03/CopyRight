interface PlatformCardProps {
  icon: string;
  title: string;
  steps: string[];
  formUrl: string;
  formLabel: string;
}

export default function PlatformCard({ icon, title, steps, formUrl, formLabel }: PlatformCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-8 hover:border-border-hover transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ol className="space-y-2 mb-6">
        {steps.map((s, i) => (
          <li key={i} className="text-sm text-text-secondary pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-accent">
            {s}
          </li>
        ))}
      </ol>
      <a href={formUrl} target="_blank" rel="noopener noreferrer"
        className="block w-full text-center px-4 py-3 bg-bg-card border border-border rounded-lg text-accent text-sm font-medium hover:bg-accent-glow hover:border-accent transition-all">
        {formLabel}
      </a>
    </div>
  );
}
