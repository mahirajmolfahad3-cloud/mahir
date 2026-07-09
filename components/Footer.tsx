export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <span className="font-display text-[15px] italic text-ink">
          Fahad
        </span>
        <span className="text-[12px] text-ink-muted">
          © {new Date().getFullYear()} · Made slowly, with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
