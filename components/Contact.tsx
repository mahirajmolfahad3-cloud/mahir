import { MailIcon, GithubIcon, ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

const LINKS = [
  { label: "Email", value: "mahirajmolfahad3@gmail.com", href: "mailto:mahirajmolfahad3@gmail.com", Icon: MailIcon },
  { label: "GitHub", value: "mahirajmolfahad3-cloud", href: "https://github.com/mahirajmolfahad3-cloud", Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="font-display text-[15px] italic text-accent">
              Say hello
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-normal tracking-tight text-ink sm:text-[2.3rem]">
              I&rsquo;d like to hear what you&rsquo;re working on.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
              No pitch necessary &mdash; just tell me where things stand and what
              you&rsquo;re hoping to figure out. I read every message myself, and
              usually reply within a few hours.
            </p>

            <ul className="mt-9 space-y-4">
              {LINKS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-[14.5px] text-ink-muted transition-colors hover:text-ink"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-paper-surface text-ink-muted transition-colors group-hover:border-sage group-hover:text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-[10.5px] text-ink-muted/70">
                        {label}
                      </span>
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
