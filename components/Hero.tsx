import Image from "next/image";
import { Reveal } from "./Reveal";
import { StatusStrip } from "./StatusStrip";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="organic-backdrop pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="hero-shell rounded-[36px] p-6 sm:p-8 lg:p-10">
          <div className="hero-orb" />
          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-paper-surface/80 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.28em] text-accent shadow-soft">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Hello, I&rsquo;m Mahir
              </div>
              <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.2rem,4.8vw,3.8rem)] font-normal leading-[0.96] tracking-[-0.03em] text-ink">
                I build web products with the same care you&rsquo;d put into
                something you plan to live with for years.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-ink-muted sm:text-[16px]">
                A full-stack developer working in React, Next.js, and Supabase —
                helping founders and small teams turn an idea into something
                real, and something that still makes sense to work on a year
                from now.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#work"
                  className="inline-flex min-w-[10.5rem] items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-paper shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-w-[10.5rem] items-center justify-center gap-2 rounded-full border border-border/70 bg-paper-surface/70 px-6 py-3 text-[14px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10"
                >
                  Let&rsquo;s Work Together
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="mx-auto w-full max-w-sm lg:max-w-[26rem]">
              <div className="gentle-float relative aspect-[4/5] w-full overflow-hidden rounded-[30px] border border-border/70 bg-paper-surface-2/70 shadow-soft-lg sm:aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-accent/10" />
                <Image
                  src="/images/pfp.png"
                  alt="Mahir"
                  width={320}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mx-auto mt-4 h-3 w-3/4 rounded-full bg-accent/20 blur-md" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={250} className="mt-8 sm:mt-10 lg:mt-12">
          <StatusStrip />
        </Reveal>
      </div>
    </section>
  );
}
