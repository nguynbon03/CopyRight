interface StepCardProps {
  stepNum: number;
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ stepNum, icon, title, description }: StepCardProps) {
  return (
    <div className="group relative bg-bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
      {/* Step Number Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-accent/30">
        {stepNum}
      </div>

      {/* Icon */}
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-accent-hover transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />
    </div>
  );
}
