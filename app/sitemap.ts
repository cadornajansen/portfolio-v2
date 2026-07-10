import type { MetadataRoute } from "next"

import { absoluteUrl, sitePages } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return sitePages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority:
      page.path === "/"
        ? 1
        : page.path === "/projects"
          ? 0.9
          : page.path === "/about" || page.path === "/credentials"
            ? 0.85
            : 0.75,
  }))
}
