import type { Metadata } from "next"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { About } from "@/components/sections/about"
import { Certifications } from "@/components/sections/certifications"
import { ContactCTA } from "@/components/sections/contact-cta"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { JsonLd } from "@/components/seo/json-ld"
import { container } from "@/components/shared/container"
import { Separator } from "@/components/ui/separator"
import {
  absoluteUrl,
  createPageMetadata,
  projectSummaries,
  seoConfig,
  sitePages,
} from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: seoConfig.defaultTitle,
  description:
    "Portfolio of Jansen Cadorna, a product-minded software developer from the Philippines building polished websites, dashboards, web systems, and digital products.",
  path: "/",
  image: seoConfig.ogImages.home,
  imageAlt: "Jansen Cadorna portfolio homepage preview",
})

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/#webpage"),
    url: seoConfig.siteUrl,
    name: seoConfig.defaultTitle,
    description: metadata.description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
      "@id": absoluteUrl("/#person"),
    },
    mainEntity: {
      "@id": absoluteUrl("/#person"),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: sitePages.map((page) => page.name),
    url: sitePages.map((page) => absoluteUrl(page.path)),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured portfolio projects",
    itemListElement: projectSummaries.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      description: project.description,
      url: absoluteUrl("/projects"),
    })),
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />
      <JsonLd data={homeJsonLd} />

      <Hero />
      <About />

      <div className={`${container} relative z-10`}>
        <Projects />
        <Certifications />
        <Separator className="relative z-10 mb-10 max-w-280" />
        <ContactCTA />
      </div>
    </main>
  )
}
