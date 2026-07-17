import Image from "next/image";
import { Reveal } from "./Reveal";
import { StatusStrip } from "./StatusStrip";

const PROJECT_TAGS = [
  "LeadPilot — CRM for small teams",
  "NEVILLE — education platform",
] as const;

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="px-3 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative px-0 py-2 sm:py-4 lg:px-2 lg:py-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal className="max-w-2xl">
              <header>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted sm:text-xs">
                  Full-stack developer · Dhaka
                </p>

                <h1 className="mt-5 text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.08] tracking-tight text-ink sm:mt-6">
                  I build the product a founder wishes they&rsquo;d started with, not the one they end up rebuilding.
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-ink-muted sm:text-base">
                  Lately that&rsquo;s meant a CRM for small sales teams, an education platform for students in Dhaka, and a run of MVPs for founders going from idea to first users. I work in React, Next.js, TypeScript, and Supabase — and I stay on a project long enough to see the decisions I made actually hold up.
                </p>

                <div className="mt-8 flex flex-wrap gap-2 sm:mt-9">
                  {PROJECT_TAGS.map((item, i) => (
                    <Reveal key={item} delay={i * 50}>
                      <span className="rounded-full border border-border bg-paper-surface px-3 py-1 text-[11px] font-medium text-ink-muted">
                        {item}
                      </span>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-paper transition-colors duration-300 hover:bg-accent hover:text-ink"
                  >
                    See the work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-7 py-3.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    Start a project
                  </a>
                </div>
              </header>
            </Reveal>

            <Reveal delay={150} className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem] lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-border bg-paper-surface-2">
                <Image
                  src="/images/profile.png"
                  alt="Mahie"
                  width={500}
                  height={625}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300} className="mt-12 sm:mt-16 lg:mt-20">
          <StatusStrip />
        </Reveal>
      </div>
    </section>
  );
}
