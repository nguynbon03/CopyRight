interface PlatformCardProps {
  icon: string;
  title: string;
  steps: string[];
  formUrl: string;
  formLabel: string;
}

export default function PlatformCard({ icon, title, steps, formUrl, formLabel }: PlatformCardProps) {
  return (
    <div className="group bg-bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent-hover transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Steps List */}
        <ol className="space-y-2.5">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                {index + 1}
              </span>
              <span className="text-text-secondary leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6">
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 hover:shadow-md hover:shadow-accent/20"
        >
          {formLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
