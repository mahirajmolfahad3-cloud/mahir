import Image from "next/image";
import { Reveal } from "./Reveal";
import { StatusStrip } from "./StatusStrip";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-10 lg:pt-24">
      <div className="organic-backdrop pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-5 font-display text-[16px] italic text-accent">
              Hello, I&rsquo;m Mahir —
            </p>
            <h1 className="text-balance font-display text-[2.5rem] font-normal leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              I build web products with the same care you&rsquo;d put into
              something you plan to live with for years.
            </h1>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-ink-muted">
              A full-stack developer working in React, Next.js, and Supabase —
              helping founders and small teams turn an idea into something
              real, and something that still makes sense to work on a year
              from now.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14.5px] text-paper shadow-soft transition-all hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-[14.5px] text-ink transition-colors hover:border-sage"
              >
                Let&rsquo;s Work Together
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="mx-auto w-full max-w-xs lg:max-w-sm">
            <div className="gentle-float relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border bg-paper-surface-2 shadow-soft-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink-muted">
                <Image
                  src="/images/profile.png"
                  alt="Mahir"
                  width={160}
                  height={200}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
            <div className="mx-auto mt-4 h-3 w-3/4 rounded-full bg-sage/30 blur-md" />
          </Reveal>
        </div>

        <Reveal delay={250} className="mt-16 lg:mt-20">
          <StatusStrip />
        </Reveal>
      </div>
    </section>
  );
}
