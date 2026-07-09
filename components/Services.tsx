import { services } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";

const TINTS = ["bg-paper-surface", "bg-paper-surface-2"];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I can help"
          title="A few ways we might work together"
          description="Every engagement starts with a conversation about what you actually need — these are the shapes it usually takes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <div
                className={`h-full rounded-[20px] border border-border p-6 shadow-soft transition-shadow hover:shadow-soft-lg ${TINTS[i % 2]}`}
              >
                <h3 className="font-display text-[17px] font-normal text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[12.5px] text-ink-muted">
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
