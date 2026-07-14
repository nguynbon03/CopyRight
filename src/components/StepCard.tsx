interface StepCardProps {
  stepNum: number;
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ stepNum, icon, title, description }: StepCardProps) {
  return (
    <div className="relative bg-bg-card border border-border rounded-2xl p-8 hover:border-border-hover hover:-translate-y-1 transition-all">
      <span className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-xs font-bold rounded-full">
        {String(stepNum).padStart(2, "0")}
      </span>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
