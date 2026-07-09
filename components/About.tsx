import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    title: "Care over cleverness",
    description:
      "I'd rather write something plain and clear than something impressive that nobody — including future me — can untangle later.",
  },
  {
    title: "Talking, not just building",
    description:
      "You'll hear from me regularly, in plain language. If something's off track, you'll know early, with a plan attached.",
  },
  {
    title: "Slow down to speed up",
    description:
      "A little time spent understanding the problem tends to save a lot of time spent rebuilding the wrong solution.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="font-display text-[15px] italic text-accent">
              A little about how I work
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-normal tracking-tight text-ink sm:text-[2.3rem]">
              Software that still feels good to open a year later.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink-muted">
              I&rsquo;m a full-stack developer who works with founders and small
              teams who want something built properly the first time &mdash;
              thoughtfully structured, clearly written, and easy to hand off
              or build on when the time comes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-[20px] border border-border bg-paper-surface p-6 shadow-soft">
                  <h3 className="font-display text-[15.5px] font-normal text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
