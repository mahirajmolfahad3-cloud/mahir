export function Footer() {
  return (
    <footer className="border-t border-border/80 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <span className="font-display text-[15px] italic text-ink">
          Mahir — Full-Stack Web Developer
        </span>
        <span className="text-[12px] uppercase tracking-[0.24em] text-ink-muted/90">
          Built with Next.js 16, Tailwind CSS, and Supabase
        </span>
        <span className="text-[12px] text-ink-muted">
          © {new Date().getFullYear()} · Made slowly, with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
