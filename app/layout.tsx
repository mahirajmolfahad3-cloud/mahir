import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fahad — Full-Stack Web Developer",
  description:
    "A full-stack developer who builds thoughtful SaaS products, startup MVPs, and web applications with React, Next.js, and Supabase.",
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "SaaS development",
    "MVP development",
    "Supabase",
  ],
  openGraph: {
    title: "Fahad — Full-Stack Web Developer",
    description:
      "A full-stack developer who builds thoughtful SaaS products, startup MVPs, and web applications.",
    type: "website",
  },
};

// Inline script prevents a flash of the wrong theme on load.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
