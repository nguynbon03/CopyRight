interface StepCardProps {
  stepNum: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function StepCard({ stepNum, icon, title, description }: StepCardProps) {
  return (
    <div className="relative bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold">
          {stepNum}
        </span>
        <span className="text-accent">{icon}</span>
      </div>
      <h3 className="font-semibold text-sm mb-1.5">{title}</h3>
      <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
