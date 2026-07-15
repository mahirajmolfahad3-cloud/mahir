import { process } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it unfolds"
          title="A steady, unhurried path from idea to launch"
          description="The same seven steps for every project, so you always know what's coming next."
        />

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-border sm:block" />
          <div className="space-y-10">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 60}>
                <div className="relative flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-8">
                  <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-paper-surface font-display text-[13px] italic text-accent shadow-soft">
                    {i + 1}
                  </div>
                  <div className="rounded-[20px] border border-border/60 bg-paper-surface/50 px-5 py-4 sm:pt-3.5 sm:pb-4 sm:flex-1">
                    <h3 className="font-display text-[17px] font-normal text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-[14.5px] leading-7 text-ink-muted">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
