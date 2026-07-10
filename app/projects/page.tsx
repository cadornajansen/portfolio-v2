import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Orbit,
  UsersRound,
} from "lucide-react"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { JsonLd } from "@/components/seo/json-ld"
import { container } from "@/components/shared/container"
import {
  absoluteUrl,
  createPageMetadata,
  projectSummaries,
  seoConfig,
} from "@/lib/seo"

import type { Metadata } from "next"

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected projects by Jansen Cadorna, including finance dashboards, project tracking systems, organization portals, AI tools, and polished web products.",
  path: "/projects",
  image: seoConfig.ogImages.projects,
  imageAlt: "Jansen Cadorna projects page preview",
})

const projects = [
  {
    title: "Ledgerly",
    subtitle: "Finance Dashboard",
    status: "MVP",
    year: "2026",
    category: "Finance Tool",
    icon: <BarChart3 className="size-8" />,
    description:
      "A clean personal finance dashboard for tracking balances, expenses, cash flow, and simple financial insights.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://ledgerly-indol.vercel.app",
    repoUrl: "#",
    caseStudyUrl: "#",
    pinned: true,
  },
  {
    title: "Orbit",
    subtitle: "Project Tracking System",
    status: "Concept",
    year: "2026",
    category: "Productivity",
    icon: <Orbit className="size-8" />,
    description:
      "A focused project and task tracking platform built for organizing deadlines, progress, and team workflows.",
    stack: ["Next.js", "PostgreSQL", "Motion", "shadcn/ui"],
    liveUrl: "#",
    repoUrl: "#",
    caseStudyUrl: "#",
    pinned: true,
  },
  {
    title: "CampusFlow",
    subtitle: "Org Management Portal",
    status: "Planned",
    year: "2026",
    category: "School System",
    icon: <UsersRound className="size-8" />,
    description:
      "A portal concept for student organizations to manage members, announcements, events, and internal workflows.",
    stack: ["React", "Supabase", "Tailwind CSS", "Auth"],
    liveUrl: "#",
    repoUrl: "#",
    caseStudyUrl: "#",
    pinned: true,
  },
]

const projectsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/projects#webpage"),
    url: absoluteUrl("/projects"),
    name: "Projects - Jansen Cadorna",
    description: metadata.description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    about: {
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
        name: "Projects",
        item: absoluteUrl("/projects"),
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jansen Cadorna projects",
    itemListElement: projectSummaries.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        applicationCategory: project.category,
        description: project.description,
        url: project.url ?? absoluteUrl("/projects"),
        creator: {
          "@id": absoluteUrl("/#person"),
        },
        programmingLanguage: project.technologies,
      },
    })),
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />
      <JsonLd data={projectsJsonLd} />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        <div className="border-b border-white/10 pb-14">
          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="text-[42px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
                Projects
              </h1>

              <p className="mt-3 text-base text-white/45">
                Systems, tools, and web products I am building.
              </p>
            </div>

            <div className="space-y-5 text-[18px] leading-relaxed tracking-[-0.03em] text-white/60">
              <p>
                A collection of projects built around practical problems, clean
                interfaces, and useful workflows. Some are live, some are MVPs,
                and some are still being shaped into full products.
              </p>

              <p>
                My goal is to turn each project into something that shows both
                technical skill and product thinking: useful, polished, and
                ready to explain.
              </p>
            </div>
          </div>
        </div>

        <section className="py-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-label text-white/45">Collection</p>
            </div>

            <p className="text-label text-white/35">{projects.length} items</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label text-white/45">Next</p>

              <h2 className="mt-4 text-[28px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[36px]">
                Have an idea worth building?
              </h2>
            </div>

            <a
              href="mailto:hello@jansencadorna.com?subject=Project Inquiry"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Start a project
              <ArrowUpRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({
  title,
  subtitle,
  status,
  year,
  category,
  icon,
  description,
  stack,
  liveUrl,
  repoUrl,
  caseStudyUrl,
  pinned,
}: {
  title: string
  subtitle: string
  status: string
  year: string
  category: string
  icon: React.ReactNode
  description: string
  stack: string[]
  liveUrl: string
  repoUrl: string
  caseStudyUrl: string
  pinned: boolean
}) {
  return (
    <article className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0d]/80 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014]/90">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(255,255,255,0.03))]" />

      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-linear-to-r from-transparent via-blue-300/40 to-transparent" />

      <div className="relative z-10 flex flex-wrap gap-2">
        {pinned && (
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-white/70 uppercase">
            Pinned
          </span>
        )}

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-white/60 uppercase">
          {category}
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-white/55 uppercase">
          {status}
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-white/55 uppercase">
          {year}
        </span>
      </div>

      <div className="relative z-10 mt-8 flex items-start gap-5">
        <div className="grid size-16 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition group-hover:text-white">
          {icon}
        </div>

        <div>
          <h3 className="text-[24px] leading-[1.1] font-semibold tracking-[-0.05em] text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/40 italic">{subtitle}</p>
        </div>
      </div>

      <p className="relative z-10 mt-6 text-sm leading-relaxed text-white/50">
        {description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/50"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-auto pt-7">
        <div className="mb-5 h-px w-full bg-white/10" />

        <div className="flex flex-wrap gap-3">
          <ProjectAction href={liveUrl}>View Project</ProjectAction>
          <ProjectAction href={caseStudyUrl} variant="outline">
            Case Study
            <BookOpen className="ml-2 size-4" />
          </ProjectAction>
          <ProjectAction href={repoUrl} variant="ghost">
            GitHub
          </ProjectAction>
        </div>
      </div>
    </article>
  )
}

function ProjectAction({
  href,
  children,
  variant = "default",
}: {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
}) {
  const className = [
    "inline-flex h-10 items-center justify-center rounded-lg px-4 text-xs font-medium transition",
    variant === "default"
      ? "bg-white text-black hover:bg-white/90"
      : variant === "outline"
        ? "border border-white/10 bg-transparent text-white hover:bg-white hover:text-black"
        : "border border-white/10 bg-transparent text-white/55 hover:text-white",
  ].join(" ")

  if (href === "#") {
    return (
      <span aria-disabled="true" className={`${className} cursor-not-allowed opacity-60`}>
        {children}
        {variant !== "outline" && <ArrowUpRight className="ml-2 size-4" />}
      </span>
    )
  }

  const isExternal = href.startsWith("http")

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
      {variant !== "outline" && <ArrowUpRight className="ml-2 size-4" />}
    </Link>
  )
}
