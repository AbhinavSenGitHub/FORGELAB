// Central SEO config. Edit SITE_URL after first Vercel deploy if your final
// domain differs (e.g. a custom domain). Everything else derives from here.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://forgelab.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "FORGELAB";

// Projects/products surfaced to search engines. Keep names + descriptions in
// sync with the showcase in app/page.tsx so a product-name search resolves here.
export const PROJECTS_SEO = [
  {
    name: "PitStop",
    subtitle: "AI Car Service App",
    description:
      "Mobile app automating car service analysis with LLM-based APIs for AI-driven self-inspection, smart recommendations, and real-time status tracking.",
    url: `${SITE_URL}/projects/pitstop`,
  },
  {
    name: "ONELOGICA",
    subtitle: "Corporate Website",
    description:
      "Official company website engineered for SEO and blazing-fast performance, with direct application workflows.",
    url: SITE_URL,
  },
  {
    name: "KENSHO",
    subtitle: "Automotive Platform",
    description:
      "End-to-end automotive platform for test-drive booking, car purchase, document handling, and delivery tracking with AI workflows, Razorpay, and OLA Maps.",
    url: SITE_URL,
  },
  {
    name: "Productivity Tracker",
    subtitle: "Employee Management",
    description:
      "Timesheet and productivity dashboard tracking employee tasks, meetings, learnings, and shift details with real-time analytics.",
    url: SITE_URL,
  },
  {
    name: "Eutair",
    subtitle: "Utility Engineering",
    description:
      "ISO 9001:2015 certified utility engineering — compressed air systems, heat exchangers, and cooling towers, designed and commissioned end to end.",
    url: SITE_URL,
  },
  {
    name: "IndiHiring",
    subtitle: "Recruitment Portal",
    description:
      "Role-based job portal with candidate, recruiter, and admin dashboards, Firebase Auth, and Redux state management.",
    url: SITE_URL,
  },
] as const;
