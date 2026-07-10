import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { GithubIcon } from "@/components/icons/github-icon"
import { JsonLd } from "@/components/seo/json-ld"
import { container } from "@/components/shared/container"
import { absoluteUrl, createPageMetadata, seoConfig } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Jansen Cadorna for polished websites, web systems, dashboards, design-to-code builds, and practical product-focused web projects.",
  path: "/contact",
  image: seoConfig.ogImages.home,
  imageAlt: "Contact Jansen Cadorna portfolio preview",
})

const emailHref =
  "mailto:hello@jansencadorna.com?subject=Project Inquiry&body=Hi Jansen,%0D%0A%0D%0AI'd like to consult with you about a project.%0D%0A%0D%0AProject idea:%0D%0ABudget/timeline:%0D%0AAdditional notes:%0D%0A"

const contactJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact#webpage"),
    url: absoluteUrl("/contact"),
    name: "Contact Jansen Cadorna",
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
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: absoluteUrl("/contact"),
      },
    ],
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />
      <JsonLd data={contactJsonLd} />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        <div className="border-b border-white/10 pb-14">
          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="text-[42px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
                Contact
              </h1>

              <p className="mt-3 text-base text-white/45">
                Websites, web systems, dashboards, and design-to-code builds.
              </p>
            </div>

            <div className="space-y-5 text-[18px] leading-relaxed tracking-[-0.03em] text-white/60">
              <p>
                Tell me about the project, product, or interface you want to
                build. I can help turn a rough idea into a working, polished web
                experience.
              </p>

              <p>
                A short message with the goal, timeline, and any references is
                enough to start the conversation.
              </p>
            </div>
          </div>
        </div>

        <section className="grid gap-6 py-14 md:grid-cols-2">
          <a
            href={emailHref}
            className="group rounded-2xl border border-white/12 bg-[#0b0b0d]/80 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014]/90"
          >
            <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition group-hover:text-white">
              <Mail className="size-5" />
            </div>

            <h2 className="mt-6 text-[24px] leading-[1.1] font-semibold tracking-[-0.05em] text-white">
              Email
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Send a project inquiry directly to {seoConfig.email}.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
              Write an email
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </a>

          <a
            href={seoConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/12 bg-[#0b0b0d]/80 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014]/90"
          >
            <div className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition group-hover:text-white">
              <GithubIcon />
            </div>

            <h2 className="mt-6 text-[24px] leading-[1.1] font-semibold tracking-[-0.05em] text-white">
              GitHub
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/50">
              View public code, experiments, and active development work.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
              Visit GitHub
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </a>
        </section>

        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label text-white/45">Before you write</p>

              <h2 className="mt-4 text-[28px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[36px]">
                Share the goal, timeline, and context.
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View projects
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
