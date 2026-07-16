import Image from "next/image";
import { Reveal } from "./Reveal";
import { StatusStrip } from "./StatusStrip";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      {/* Decorative background elements */}
      <div className="organic-backdrop pointer-events-none absolute inset-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(var(--ink) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative px-0 py-2 sm:py-4 lg:px-2 lg:py-6">
          <div className="hero-orb" />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-muted/70 sm:text-[12px]">
                Full-stack developer &middot; Dhaka
              </div>

              <h1 className="mt-5 text-balance font-display text-[clamp(2.2rem,5vw,4rem)] font-normal leading-[1.05] tracking-[-0.03em] text-ink sm:mt-6">
                I build the product a founder wishes they&rsquo;d started with, not the one they end up rebuilding.
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-ink-muted sm:text-[16px]">
                Lately that&rsquo;s meant a CRM for small sales teams, an education platform for students in Dhaka, and a run of MVPs for founders going from idea to first users. I work in React, Next.js, TypeScript, and Supabase &mdash; and I stay on a project long enough to see the decisions I made actually hold up.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 sm:mt-9">
                {[
                  "LeadPilot &mdash; CRM for small teams",
                  "NEVILLE &mdash; education platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/50 bg-paper-surface/50 px-3.5 py-1.5 text-[11px] font-medium text-ink-muted/80"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group relative inline-flex min-w-[11rem] items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 text-[14px] font-medium text-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="relative z-10">See the work</span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-w-[11rem] items-center justify-center gap-2 rounded-full border border-border/70 bg-transparent px-8 py-4 text-[14px] font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/5"
                >
                  Start a project
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-none">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-[40px] bg-accent/10 blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-80" />

                <div className="gentle-float relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-border bg-paper-surface-2/70 shadow-soft-lg sm:rounded-[40px]">
                  <Image
                    src="/images/pfp.png"
                    alt="Mahir"
                    width={500}
                    height={625}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper-surface-2/90 to-transparent" />
                </div>
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