import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/workos/api/", "/workos/embed/"],
    },
    // This site's pages, and WorkOS's (served under /workos).
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/workos/sitemap.xml`],
    host: SITE_URL,
  };
}
