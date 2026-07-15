import { MailIcon, GithubIcon, ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

const LINKS = [
  { label: "Email", value: "mahirajmolfahad3@gmail.com", href: "mailto:mahirajmolfahad3@gmail.com", Icon: MailIcon },
  { label: "GitHub", value: "mahirajmolfahad3-cloud", href: "https://github.com/mahirajmolfahad3-cloud", Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <Reveal>
            <p className="section-kicker">Say hello</p>
            <h2 className="section-title mt-3 sm:mt-4">
              I&rsquo;d like to hear what you&rsquo;re working on.
            </h2>
            <p className="section-copy mt-4 max-w-md">
              No pitch necessary &mdash; just tell me where things stand and what
              you&rsquo;re hoping to figure out. I read every message myself, and
              usually reply within a few hours.
            </p>

            <ul className="mt-9 space-y-3">
              {LINKS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-[18px] border border-border/70 bg-paper-surface/70 px-3 py-3 text-[14.5px] text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-paper-surface"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-paper-surface text-ink-muted transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-[10.5px] font-semibold uppercase tracking-[0.24em] text-ink-muted/70">
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
