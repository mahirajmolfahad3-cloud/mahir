# Portfolio — Full-Stack Web Developer

A "warm editorial minimalism" portfolio site — the calm-conversation version, not the SaaS-product version. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. No UI libraries, no unnecessary dependencies.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev server needs internet access on first run to fetch the Google Fonts (Fraunces, Manrope) — after that they're cached locally by Next.js.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, theme-flash prevention
  page.tsx           Assembles all sections
  globals.css        Design tokens (light/dark), soft shadows, reveal animation
components/
  Nav.tsx            Sticky nav, quiet style, active-section highlighting
  Hero.tsx           Asymmetrical hero with an organic blurred backdrop
  StatusStrip.tsx     Signature "a little about where things stand" journal note
  FeaturedProjects.tsx / ProjectCard.tsx
  CaseStudies.tsx    Accordion, written like a conversation, not a spec sheet
  Services.tsx
  TechStack.tsx
  Process.tsx        7-step vertical timeline
  About.tsx
  Contact.tsx / ContactForm.tsx
  Footer.tsx
  ThemeToggle.tsx    Light/dark toggle, persisted to localStorage
  Reveal.tsx         Slow, gentle scroll-triggered fade (IntersectionObserver)
  SectionHeading.tsx
  icons.tsx          Hand-rolled inline SVG icons (no icon library)
lib/
  data.ts            All content: projects, services, tech stack, process —
                      typed with TypeScript interfaces, edit here to update copy
```

## Design system

- **Palette**: warm ivory paper (`#FFFDF8`) with a warm espresso dark mode (`#1C1914`). Two soft accents — sage green (`#A8C7A1`) as the primary accent, dusty blue (`#AFC7D9`) used sparingly in the backdrop glow. Tokens live in `app/globals.css` as CSS variables under `:root` and `.dark`.
- **Type**: Fraunces (serif, used italic for eyebrows and accents) for headings, Manrope for body copy — chosen for a kind, handwritten-journal warmth rather than a corporate-SaaS feel.
- **Shape language**: 18–24px rounded corners throughout, soft warm-tinted shadows (`.shadow-soft` / `.shadow-soft-lg` in globals.css) instead of hard borders and grids.
- **Signature element**: the "a little about where things stand" note under the hero — a quiet, personal status note in place of a corporate metrics bar.
- **Motion**: slow fades (1.1s, gentle easing) on scroll via `Reveal.tsx`, plus a subtle floating motion on the hero photo. Respects `prefers-reduced-motion`.

## What to customize before launching

1. **`lib/data.ts`** — swap in your real projects, live/GitHub URLs, and case study details.
2. **Project screenshots** — replace the placeholder blocks in `ProjectCard.tsx` and `CaseStudies.tsx` with real `<Image>` components once you have screenshots (recommend `next/image` with images in `/public/projects/`).
3. **Profile photo** — replace the placeholder circle in `Hero.tsx`. Warm, natural, candid photography suits this direction far better than a studio headshot.
4. **Contact form** — `ContactForm.tsx` currently simulates a submission. Wire the `handleSubmit` function to a form service (Formspree, Resend, a Supabase table) or an API route.
5. **Contact links** — update the email, GitHub, and Fiverr links in `Contact.tsx`. LinkedIn was intentionally left out given your account is currently locked; add it back in once that's resolved.
6. **Metadata** — update `app/layout.tsx`'s `metadata` object (title, description, Open Graph) with your final domain and details.

## Notes

- Fully responsive from mobile up, keyboard-focus visible on all interactive elements.
- Dark mode is class-based (`.dark` on `<html>`), toggled via `ThemeToggle.tsx` and persisted to `localStorage`, with an inline script in `layout.tsx` to prevent a flash of the wrong theme on load.
