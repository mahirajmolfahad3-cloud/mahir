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
                    <div className="absolute left-[15px] top-3 bottom-3 hidden w-px bg-border sm:block" />

                    <div className="section-stack">
                        {process.map((item, index) => (
                            <Reveal key={item.step} delay={index * 70}>
                                <div className="section-card relative flex flex-col gap-4 rounded-[20px] p-5 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
                                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-paper-surface font-display text-[13px] text-accent">
                                        {index + 1}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-display text-[1.05rem] font-normal leading-tight text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-[14px] leading-[1.75] text-ink-muted">
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
