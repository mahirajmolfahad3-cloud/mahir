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
    <Reveal className="max-w-3xl">
      <div className="flex flex-col gap-2">
        <p className="section-kicker">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {description && <p className="section-copy">{description}</p>}
    </Reveal>
  );
}
