"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, XIcon } from "./icons";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close on Escape, trap focus inside mobile menu, close on click outside
  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const toggle = toggleRef.current;
    if (!menu) return;

    // Find all focusable elements inside the menu
    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle?.focus();
        return;
      }

      if (e.key !== "Tab" || focusable.length === 0) return;

      // Trap focus inside the menu
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (
        menu &&
        toggle &&
        !menu.contains(e.target as Node) &&
        !toggle.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    // Focus first link when menu opens
    first?.focus();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-6 lg:px-8">
      <nav className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-2.5 py-2.5 transition-all duration-300 sm:px-4 lg:px-6 ${scrolled ? "nav-shell" : "border border-transparent bg-transparent shadow-none"}`}>

        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-full font-display text-[17px] italic tracking-tight text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-paper-surface/80 text-[14px] font-medium text-accent shadow-soft">
            M
          </span>
          Mahir
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${isActive ? "text-ink" : "text-ink-muted hover:bg-paper-surface/70 hover:text-ink"}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-accent" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border/70 bg-paper-surface/80 px-4 py-2.5 text-[13.5px] font-medium text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Say hello
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-paper-surface/80 text-ink shadow-soft transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div ref={menuRef} className="mx-auto mt-2.5 max-w-6xl rounded-[24px] border border-border/70 bg-paper-surface/90 p-3 shadow-soft-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-3 py-2.5 text-[15px] transition-colors ${isActive
                        ? "bg-accent/10 text-ink font-medium"
                        : "text-ink-muted hover:bg-paper-surface-2 hover:text-ink"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full border border-border/70 bg-paper-surface px-4 py-2.5 text-center text-[14px] font-medium text-ink transition-all hover:border-accent hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Say hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}