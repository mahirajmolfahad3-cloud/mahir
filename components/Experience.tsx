import { process } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
    return (
        <section id="experience" className="section-shell overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="section-inner">
                <SectionHeading
                    eyebrow="How it unfolds"
                    title="A steady, unhurried path from idea to launch"
                    description="The same seven steps for every project, so you always know what's coming next."
                />

                <div className="relative mt-12 sm:mt-14">
                    <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/50 via-border/80 to-transparent sm:block" />

                    <div className="section-stack">
                        {process.map((item, index) => (
                            <Reveal key={item.step} delay={index * 70}>
                                <div className="group section-card relative flex flex-col gap-4 rounded-[24px] p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6 lg:p-7">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/80 bg-paper-surface font-display text-[13px] italic text-accent shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:border-accent/60">
                                        {index + 1}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2.5">
                                            <p className="font-display text-[12px] uppercase tracking-[0.3em] text-accent">
                                                {item.step}
                                            </p>
                                            <span className="h-1.5 w-1.5 rounded-full bg-border/80" />
                                            <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-ink-muted/90">
                                                Step {index + 1}
                                            </p>
                                        </div>

                                        <h3 className="mt-3 font-display text-[1.05rem] font-normal leading-tight text-ink sm:text-[1.2rem]">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 max-w-2xl text-[14.5px] leading-7 text-ink-muted sm:text-[15px]">
                                            {item.description}
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
