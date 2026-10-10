import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, PROJECTS_SEO } from "./seo.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abhinav Sen — Full-Stack Developer",
    template: "%s — Abhinav Sen",
  },
  description:
    "Abhinav Sen is a full-stack developer building premium web, mobile and desktop apps — React Native, Next.js and AI-driven products — and the maker of WorkOS.",
  keywords: [
    "Abhinav Sen",
    "full-stack developer",
    "portfolio",
    "React Native",
    "Next.js",
    "full-stack development",
    "AI products",
    // Product names — so a product-name search resolves to this site.
    ...PROJECTS_SEO.map((p) => p.name),
  ],
  authors: [{ name: "Abhinav Sen" }],
  creator: "Abhinav Sen",
  publisher: "Abhinav Sen",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Abhinav Sen — Full-Stack Developer",
    description: "I build premium web, mobile and desktop products — and WorkOS, my own SaaS.",
    url: SITE_URL,
    siteName: "Abhinav Sen",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Sen — Full-Stack Developer",
    description: "I build premium web, mobile and desktop products — and WorkOS, my own SaaS.",
  },
};

// JSON-LD structured data. Crawlers read this from the initial server HTML, so
// each product (PitStop, ONELOGICA, KENSHO, …) becomes individually indexable.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: "Full-Stack Developer",
      sameAs: ["https://github.com/AbhinavSenGitHub", "https://www.linkedin.com/in/abhinav-sen-975a9b222/"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ItemList",
      name: "Projects by Abhinav Sen",
      itemListElement: PROJECTS_SEO.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          alternateName: p.subtitle,
          description: p.description,
          url: p.url,
          creator: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla's
          cz-shortcut-listen) inject attributes on <body> before React hydrates,
          causing false-positive hydration mismatch errors in dev. */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}