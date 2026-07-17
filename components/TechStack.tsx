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

        <div className="mt-14 space-y-3">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 50}>
              <div className="section-card grid grid-cols-1 gap-3 rounded-[20px] p-5 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-8 sm:p-6">
                <div>
                  <span className="font-display text-[1.05rem] text-ink">
                    {tech.name}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {tech.role}
                  </span>
                </div>
                <p className="text-[14px] leading-[1.75] text-ink-muted">
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
