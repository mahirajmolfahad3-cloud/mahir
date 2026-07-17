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
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <Reveal>
            <p className="section-kicker">A little about how I work</p>
            <h2 className="section-title mt-3 sm:mt-4">
              Software that still feels good to open a year later.
            </h2>
            <p className="section-copy mt-4 max-w-xl">
              I&rsquo;m a full-stack developer who works with founders and small
              teams who want something built properly the first time &mdash;
              thoughtfully structured, clearly written, and easy to hand off
              or build on when the time comes.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="section-card h-full rounded-[20px] p-6 sm:p-7">
                  <h3 className="font-display text-[1.05rem] font-normal text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.75] text-ink-muted">
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
