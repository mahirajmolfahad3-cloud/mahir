const NOTES = [
  { label: "Based in", value: "Dhaka, Bangladesh", icon: "📍" },
  { label: "Currently building", value: "A CRM for small teams", icon: "🛠️" },
  { label: "Usually reading", value: "About product design", icon: "📚" },
  { label: "Open to", value: "New projects, this season", icon: "✨" },
];

export function StatusStrip() {
  return (
    <div className="section-card rounded-[20px] p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <p className="font-display text-[13px] italic text-ink-muted">
          Current Status
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {NOTES.map((n) => (
          <div key={n.label} className="flex flex-col rounded-[12px] border border-border/50 bg-paper-surface-2 px-4 py-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{n.label}</div>
            <div className="mt-1 font-display text-[1.05rem] text-ink">{n.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

