export default function DMCABadge() {
  return (
    <div className="badge-glow rounded-2xl p-[1px] bg-gradient-to-br from-accent via-purple-500 to-pink-500">
      <div className="bg-bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
        {/* Shield Icon */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold gradient-text mb-2">
          DMCA Protected
        </h2>

        {/* Subtitle */}
        <p className="text-text-secondary text-sm mb-4">
          Tác phẩm này được bảo vệ bởi Luật Bản quyền Thiên niên kỷ Kỹ thuật số
        </p>

        {/* ID Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-mono text-sm font-semibold tracking-wider">
            DMCA-2026-CopyRight
          </span>
        </div>
      </div>
    </div>
  );
}
