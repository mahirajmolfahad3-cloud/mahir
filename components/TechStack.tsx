import { techStack } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function TechStack() {
  return (
    <section id="stack" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tools of the trade"
          title="What I reach for, and why"
          description="Not a logo wall — each of these earns its place in how I build."
        />

        <div className="mt-14 space-y-5">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 50}>
              <div className="grid grid-cols-1 gap-2 rounded-[20px] border border-border bg-paper-surface p-6 shadow-soft sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8 sm:p-7">
                <div>
                  <span className="font-display text-lg italic text-ink">
                    {tech.name}
                  </span>
                  <span className="mt-1 block text-[12px] text-accent">
                    {tech.role}
                  </span>
                </div>
                <p className="text-[14.5px] leading-relaxed text-ink-muted">
                  {tech.contribution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
