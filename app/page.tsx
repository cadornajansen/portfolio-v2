import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { About } from "@/components/sections/about"
import { Certifications } from "@/components/sections/certifications"
import { ContactCTA } from "@/components/sections/contact-cta"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { container } from "@/components/shared/container"
import { Separator } from "@/components/ui/separator"

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