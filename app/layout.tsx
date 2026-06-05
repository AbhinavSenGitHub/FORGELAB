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
    default: "FORGELAB° — Premium Digital Engineering",
    template: "%s — FORGELAB°",
  },
  description:
    "FORGELAB is a digital engineering studio forging premium web & mobile experiences — React Native, Next.js, and AI-driven products built for scale.",
  keywords: [
    "FORGELAB",
    "digital engineering studio",
    "React Native",
    "Next.js",
    "full-stack development",
    "AI products",
    // Product names — so a product-name search resolves to this site.
    ...PROJECTS_SEO.map((p) => p.name),
  ],
  authors: [{ name: "FORGELAB" }],
  creator: "FORGELAB",
  publisher: "FORGELAB",
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
    title: "FORGELAB° — Premium Digital Engineering",
    description: "We forge premium digital experiences, engineered for scale.",
    url: SITE_URL,
    siteName: "FORGELAB",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGELAB° — Premium Digital Engineering",
    description: "We forge premium digital experiences, engineered for scale.",
  },
};

// JSON-LD structured data. Crawlers read this from the initial server HTML, so
// each product (PitStop, ONELOGICA, KENSHO, …) becomes individually indexable.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Digital engineering studio forging premium web & mobile experiences.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ItemList",
      name: "FORGELAB Projects",
      itemListElement: PROJECTS_SEO.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          alternateName: p.subtitle,
          description: p.description,
          url: p.url,
          creator: { "@id": `${SITE_URL}/#organization` },
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
