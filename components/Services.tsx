import { services } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";

const TINTS = ["bg-paper-surface", "bg-paper-surface-2"];

export function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="How I can help"
          title="A few ways we might work together"
          description="Every engagement starts with a conversation about what you actually need — these are the shapes it usually takes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <div className="section-card section-card-muted h-full rounded-[24px] p-6 sm:p-7">
                <h3 className="font-display text-[17px] font-normal text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-7 text-ink-muted sm:text-[14.5px]">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-[12.5px] leading-6 text-ink-muted">
                      <CheckIcon className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
