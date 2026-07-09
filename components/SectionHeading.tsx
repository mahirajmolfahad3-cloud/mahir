import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-display text-[15px] italic text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-normal tracking-tight text-ink sm:text-[2.3rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
