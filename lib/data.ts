export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    slug: "leadpilot",
    name: "LeadPilot",
    tagline: "A CRM built for how small teams actually sell",
    description:
      "A lead-management tool for freelancers and small businesses, built around a gentle temperature system that shows, at a glance, which leads are worth a call today.",
    impact: "Turns a messy pipeline into one clear next action.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "A cold → warm → hot → won pipeline you can read in a glance",
      "Each account only ever sees its own data, by default",
      "A dashboard that quietly tells you who to follow up with",
      "Simple, calm sign-up, login, and password recovery flows",
    ],
    liveUrl: "https://leadpilot-pink.vercel.app/",
    githubUrl: "https://github.com/mahirajmolfahad3-cloud/LeadPilot",
    image: "/projects/leadpilot.png",
    caseStudy: {
      problem:
        "Small teams were keeping leads in spreadsheets that didn't show which ones actually needed attention. Nothing surfaced urgency, so warm leads quietly went cold while everyone stayed busy with something else.",
      solution:
        "I designed a temperature model — cold, warm, hot, won — based on recency and deal size, and built the whole CRM around that one signal instead of another generic table. Supabase handles the data underneath, with each account kept separate by default.",
      challenges:
        "Keeping the temperature calculation fast as lead volume grew meant moving that logic out of the browser and into the database itself, then caching the result so it didn't need recomputing every time someone opened the app.",
      outcome:
        "Opening the dashboard now answers one question immediately: who should I call first. It quietly replaced three columns of manual sorting that used to happen every Monday morning.",
    },
  },
  {
    slug: "clientflow",
    name: "ClientFlow",
    tagline: "The starting point founders usually skip straight past",
    description:
      "A starter platform for early founders that comes with authentication, billing, and a working dashboard already in place, so the first week can be spent testing the idea instead of rebuilding the scaffolding around it.",
    impact: "Helps a product idea become testable in days, not weeks.",
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    features: [
      "Email and OAuth sign-in, set up and ready from day one",
      "A dashboard with roles and simple team invitations",
      "Usage tracking that's ready to connect to a billing provider",
      "A small, considered component library, responsive throughout",
    ],
    liveUrl: "https://clientflow-puce.vercel.app/",
    githubUrl: "https://github.com/mahirajmolfahad3-cloud/ClientFlow",
    image: "/projects/clientflow.png",
    caseStudy: {
      problem:
        "Founders kept losing precious weeks rebuilding the same login, billing, and dashboard scaffolding for every new idea, before they'd even had a chance to find out whether the idea held up.",
      solution:
        "I put together a reusable foundation — authentication, roles, and a dashboard shell — ready to hold real product logic from the very first day, so the first sprint goes toward the thing that actually needs testing.",
      challenges:
        "Roles needed to stay simple for a two-person team, but hold up if that team became a company with departments. I modeled permissions as small, combinable capabilities rather than fixed roles, so growth meant configuration rather than a rewrite.",
      outcome:
        "Teams using this foundation have had something worth showing real users within days, not weeks — and it's held its shape well as those users showed up.",
    },
  },
  {
    slug: "greanflow",
    name: "GreanFlow",
    tagline: "A streamlined approach to book management",
    description:
      "A simple yet powerful tool for managing book inventories, tracking availability, and facilitating seamless borrowing processes.",
    impact: "Makes day-to-day operations feel lighter and less reactive.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Book inventory management",
      "Availability tracking",
      "Seamless borrowing processes",
      "User-friendly interface",
    ],
    liveUrl: "https://greenflow-rho.vercel.app/",
    githubUrl: "https://github.com/mahirajmolfahad3-cloud/greenflow-hvac",
    image: "/project-screenshots/greenflow.png",
    caseStudy: {
      problem:
        "Every morning, the operations team was reconciling four separate spreadsheets just to figure out which shipments were at risk — and by the time they finished, the numbers were already a day behind reality.",
      solution:
        "I brought the whole workflow into a single dashboard with a live exception list, so anything needing a human decision surfaces on its own instead of waiting to be found during the next manual pass.",
      challenges:
        "Updates from different vendors sometimes arrived out of order, which could flip a shipment's status back and forth. I added a small reconciliation step that resolves conflicting updates by timestamp before they ever reach the screen.",
      outcome:
        "The morning spreadsheet ritual is gone. Exceptions are usually caught within minutes now, instead of surfacing the next business day.",
    },
  },
];

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: "SaaS Development",
    description:
      "A full build for a multi-tenant product — the data model, the sign-in flow, room for billing later, and an interface people will actually enjoy using every day.",
    deliverables: ["Multi-tenant architecture", "Subscription-ready structure", "Admin + user dashboards"],
  },
  {
    title: "Startup MVP Development",
    description:
      "Something real enough to test a genuine idea on — scoped tightly enough to ship quickly, and put together carefully enough to survive contact with actual users.",
    deliverables: ["A carefully scoped feature set", "Sign-up & onboarding", "Room to add analytics later"],
  },
  {
    title: "Custom Web Applications",
    description:
      "Internal tools and customer-facing apps shaped around how your team actually works, rather than the other way around.",
    deliverables: ["Workflows built around you", "Role-based access", "Third-party integrations"],
  },
  {
    title: "Dashboard Development",
    description:
      "A dashboard that answers the one question someone actually has, first thing in the morning — not fifteen charts competing for their attention.",
    deliverables: ["Thoughtful data visualization", "Real-time updates", "Exportable reports"],
  },
  {
    title: "Landing Pages",
    description:
      "A landing page with a clear, honest message, quick to load, written around what your visitors actually care about.",
    deliverables: ["SEO-friendly structure", "Careful performance tuning", "Ready for A/B testing"],
  },
  {
    title: "Authentication Systems",
    description:
      "Sign-up, login, and session handling done properly the first time, with Supabase and sensible access rules underneath.",
    deliverables: ["Email + OAuth", "Row-level security", "Session management"],
  },
  {
    title: "Responsive Frontend Development",
    description:
      "Interfaces that keep their shape and sense from a wide monitor down to a phone held in one hand, without a second design pass.",
    deliverables: ["Mobile-first build", "Cross-browser tested", "Accessible components"],
  },
  {
    title: "Existing Project Enhancements",
    description:
      "New features and quiet refactors to a codebase you already have — without disturbing the parts that are already working well.",
    deliverables: ["A careful codebase read-through", "Incremental delivery", "Nothing broken along the way"],
  },
  {
    title: "Performance Optimization",
    description:
      "Figuring out what's genuinely slow — bundle size, queries, render waterfalls — and fixing the actual cause rather than papering over it.",
    deliverables: ["Core Web Vitals review", "Query tuning", "Smaller, faster bundles"],
  },
  {
    title: "Bug Fixing",
    description:
      "A proper fix, with a reproduction case and a test behind it, so the same bug doesn't quietly reappear next release.",
    deliverables: ["A reproducible fix", "Regression testing", "A clear write-up of what happened"],
  },
];

export interface TechItem {
  name: string;
  role: string;
  contribution: string;
}

export const techStack: TechItem[] = [
  {
    name: "React",
    role: "The interface",
    contribution:
      "Component by component, which keeps things predictable and easy to grow without everything feeling tangled together.",
  },
  {
    name: "Next.js",
    role: "The framework",
    contribution:
      "Handles rendering and routing so pages load quickly and search engines find their way in without extra effort.",
  },
  {
    name: "TypeScript",
    role: "A safety net",
    contribution:
      "Catches small, honest mistakes while I'm writing code, long before they'd otherwise turn into a late-night bug.",
  },
  {
    name: "Tailwind CSS",
    role: "The styling language",
    contribution:
      "A shared, constrained vocabulary for spacing, color, and type, so every screen ends up feeling like it belongs together.",
  },
  {
    name: "Supabase",
    role: "Auth & data",
    contribution:
      "Postgres and authentication in one place, with each account's data kept properly separate from the start.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  { step: "01", title: "Discovery", description: "A conversation about the problem, the people it affects, and what a good outcome actually looks like — before any code exists." },
  { step: "02", title: "Planning", description: "Turning that conversation into a clear, realistic timeline with milestones, so there's no guessing along the way." },
  { step: "03", title: "Design Collaboration", description: "Working from your Figma files or sketches, agreeing on structure and feel before any of it gets built." },
  { step: "04", title: "Development", description: "Building in small, reviewable pieces — clean, typed, and considered — rather than disappearing until the very end." },
  { step: "05", title: "Testing", description: "Checking it properly across devices and edge cases, quietly, before it's ever shown to a real user." },
  { step: "06", title: "Deployment", description: "Shipping it with the right environment setup and a little monitoring in place, so launch day feels calm." },
  { step: "07", title: "Support", description: "Staying reachable afterward — for fixes, small changes, and the questions that only come up once real people arrive." },
];
