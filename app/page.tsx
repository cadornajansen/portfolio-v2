import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { About } from "@/components/sections/about"
import { Certifications } from "@/components/sections/certifications"
import { ContactCTA } from "@/components/sections/contact-cta"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { container } from "@/components/shared/container"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jansen Cadorna — Product-minded Software Developer",
  description:
    "Portfolio of Jansen Cadorna, a product-minded software developer from the Philippines building polished websites, dashboards, web systems, and digital products.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jansen Cadorna — Product-minded Software Developer",
    description:
      "Explore the portfolio of Jansen Cadorna — projects, credentials, stack, and polished web products built with a product-minded approach.",
    url: "/",
    siteName: "Jansen Cadorna",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jansen Cadorna portfolio homepage preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jansen Cadorna — Product-minded Software Developer",
    description:
      "Portfolio of Jansen Cadorna, building polished websites, dashboards, interfaces, and practical web systems.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />

  
      <Hero />
      <About />

      <div className={`${container} relative z-10`}>
        <Projects />
        <Certifications />
        <Separator className=" relative z-10 max-w-280 mb-10" />
        <ContactCTA />
      </div>
    </main>
  )
}