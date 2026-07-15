const NOTES = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Currently building", value: "A CRM for small teams" },
  { label: "Usually reading", value: "About product design" },
  { label: "Open to", value: "New projects, this season" },
];

export function StatusStrip() {
  return (
    <div className="rounded-[28px] border border-border bg-paper-surface/80 p-6 shadow-soft backdrop-blur-sm sm:p-8">
      <p className="font-display text-[15px] italic text-ink-muted">
        A little about where things stand —
      </p>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {NOTES.map((n) => (
          <div key={n.label} className="rounded-2xl border border-border/70 bg-paper-surface-2/40 px-4 py-4">
            <div className="text-[12px] uppercase tracking-[0.24em] text-ink-muted">{n.label}</div>
            <div className="mt-1 font-display text-[16px] text-ink">{n.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
