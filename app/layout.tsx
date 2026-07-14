import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://your-domain.com"; // Replace with your real domain
const siteName = "Mahir";

const title = "Mahir";

const description =
  "Full-stack developer building thoughtful web applications with React, Next.js, TypeScript, and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: `%s | ${siteName}`,
  },

  description,

  applicationName: siteName,

  keywords: [
    "Mahir",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Portfolio",
  ],

  authors: [
    {
      name: "Mahir",
      url: siteUrl,
    },
  ],

  creator: "Mahir",
  publisher: "Mahir",

  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    siteName,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#fdfaf4",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#1a1815",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahir",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description,
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}
    >
      <body
        className="min-h-screen bg-paper text-ink antialiased selection:bg-ink/10 [text-rendering:optimizeLegibility]"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}