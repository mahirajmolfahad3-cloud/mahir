import Image from "next/image";
import { Reveal } from "./Reveal";
import { StatusStrip } from "./StatusStrip";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="organic-backdrop pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative px-0 py-2 sm:py-4 lg:px-2 lg:py-6">
          <div className="hero-orb" />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-paper-surface/80 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent shadow-soft sm:text-[12px]">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Hello, I&rsquo;m Mahir
              </div>

              <h1 className="mt-5 text-balance font-display text-[clamp(2.05rem,4.3vw,3.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink sm:mt-6 sm:text-[clamp(2.4rem,5vw,3.8rem)]">
                I design and build web products that feel calm, clear, and worth using every day.
              </h1>

              <p className="mt-4 max-w-2xl text-[14.5px] leading-8 text-ink-muted sm:mt-6 sm:text-[15.5px] lg:text-[16px]">
                I help founders and small teams turn ideas into polished React and
                Next.js products with thoughtful UX, reliable data, and a structure
                that still makes sense as the product grows.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                {[
                  "React + Next.js",
                  "Supabase apps",
                  "Founder-friendly builds",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-paper-surface/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
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

            <Reveal delay={150} className="mx-auto w-full max-w-[16rem] sm:max-w-[19rem] lg:max-w-[24rem]">
              <div className="gentle-float relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border/70 bg-paper-surface-2/70 shadow-soft-lg sm:rounded-[32px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-accent/10" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper-surface/70 to-transparent" />
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

        <Reveal delay={250} className="mt-7 sm:mt-10 lg:mt-12">
          <StatusStrip />
        </Reveal>
      </div>
    </section>
  );
}
