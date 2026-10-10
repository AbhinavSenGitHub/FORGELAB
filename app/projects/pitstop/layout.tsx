import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: "PitStop — AI Car Service App",
  description:
    "PitStop automates car service analysis with LLM-based APIs: AI-driven self-inspection from photos or audio, smart recommendations and real-time status tracking. Built by Abhinav Sen.",
  alternates: { canonical: "/projects/pitstop" },
  openGraph: {
    title: "PitStop — AI Car Service App",
    description: "AI-driven car self-inspection, smart recommendations and real-time service tracking.",
    url: "/projects/pitstop",
    type: "article",
    images: ["/pitstop-images/image1.jpg"],
  },
};

export default function PitstopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
