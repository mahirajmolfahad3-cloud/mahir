import { techStack } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function TechStack() {
  return (
    <section id="stack" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Tools of the trade"
          title="What I reach for, and why"
          description="Not a logo wall — each of these earns its place in how I build."
        />

        <div className="mt-14 space-y-4">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 50}>
              <div className="section-card grid grid-cols-1 gap-3 rounded-[24px] p-6 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8 sm:p-7">
                <div>
                  <span className="font-display text-lg italic text-ink">
                    {tech.name}
                  </span>
                  <span className="mt-1 block text-[12px] font-semibold uppercase tracking-[0.24em] text-accent">
                    {tech.role}
                  </span>
                </div>
                <p className="text-[14.5px] leading-8 text-ink-muted">
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
