const NOTES = [
  { label: "Based in", value: "Dhaka, Bangladesh", icon: "📍" },
  { label: "Currently building", value: "A CRM for small teams", icon: "🛠️" },
  { label: "Usually reading", value: "About product design", icon: "📚" },
  { label: "Open to", value: "New projects, this season", icon: "✨" },
];

export function StatusStrip() {
  return (
    <div className="rounded-[32px] border border-border bg-paper-surface/80 p-6 shadow-soft backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/60" />
        <p className="font-display text-[14px] italic text-ink-muted">
          Current Status
        </p>
        <div className="h-px flex-1 bg-border/60" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {NOTES.map((n) => (
          <div key={n.label} className="group flex flex-col rounded-2xl border border-border/50 bg-paper-surface-2/30 px-5 py-4 transition-colors hover:border-accent/30 hover:bg-paper-surface-2/50">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted/70">{n.label}</span>
              <span className="text-sm opacity-50 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100">{n.icon}</span>
            </div>
            <div className="mt-2 font-display text-[16px] leading-snug text-ink">{n.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

