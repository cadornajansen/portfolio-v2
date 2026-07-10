import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Headphones,
  Sparkles,
  UserRound,
} from "lucide-react"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { JsonLd } from "@/components/seo/json-ld"
import { container } from "@/components/shared/container"
import { absoluteUrl, createPageMetadata, seoConfig } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Jansen Cadorna, a product-minded software developer focused on design, code, web systems, interface quality, and practical digital products.",
  path: "/about",
  image: seoConfig.ogImages.about,
  imageAlt: "About Jansen Cadorna portfolio preview",
  type: "profile",
})

const education = [
  {
    title: "Computer Science",
    place: "Pamantasan ng Lungsod ng Maynila",
    date: "2026 - Present",
    description:
      "Currently studying computer science with a growing focus on software development, systems thinking, and practical product building.",
  },
  {
    title: "Science, Technology, Engineering, and Mathematics (STEM)",
    place: "Manuel G. Araullo Senior High School",
    date: "2024 - 2026",
    description:
      "Built a stronger foundation in academics, communication, leadership, and problem-solving.",
  },
]

const awards = [
  {
    title: "With Honors - GWA: 94",
    place: "Grade 12 Academic Achievement",
    date: "2026",
    description:
      "A DepEd criteria-based recognition for academic excellence.",
  },
  {
    title: "With High Honors - GWA: 95",
    place: "Grade 11 Academic Achievement",
    date: "2025",
    description:
      "A DepEd criteria-based recognition for academic excellence.",
  },
]

const roles = [
  {
    title: "Public Information Officer",
    place: "Supreme Secondary Learner Government (SSLG)",
    date: "2025 - 2026",
    description:
      "Led the school's social media and communications, creating multimedia content and managing online presence.",
  },
  {
    title: "Vice President",
    place: "Araullian Integrity Crusaders (AIC)",
    date: "2024 - 2025",
    description:
      "Promoted integrity and responsible decision-making in the school community.",
  },
]

const tastes = [
  "Minimal interfaces",
  "Clean typography",
  "Apple / Linear / Vercel-style design",
  "Streetwear & Old Money Fashion",
  "Playing guitar",
  "Crocheting & DIY crafts",
]

const listening = [
  "Michael Jackson",
  "Laufey",
  "Daniel Caesar",
  "The Weeknd",
  "Chris Brown",
  "Rico Blanco",
  "IV of Spades",
  "The 1975",
  "Chill R&B / Indie playlists",
]

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/about#webpage"),
    url: absoluteUrl("/about"),
    name: "About Jansen Cadorna",
    description: metadata.description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
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
        name: "About",
        item: absoluteUrl("/about"),
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />
      <JsonLd data={aboutJsonLd} />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        <div className="border-b border-white/10 pb-14">
          <p className="text-label text-white/50">More about me</p>

          <div className="mt-8 flex flex-col gap-6">
            <div>
              <h1 className="text-[42px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
                Jansen Cadorna Viray
              </h1>

              <p className="mt-3 text-base text-white/45">
                Computer Science Student - Multimedia Artist - Aspiring Software
                Engineer
              </p>
            </div>

            <div className="space-y-5 text-[18px] leading-relaxed text-white/60">
              <p>
                I started coding when I was 13{" "}
                <span className="text-xs">(March 2021)</span>, just searching
                around how to automate things, then I discovered computer
                science and programming. So I started learning web development
                and design. I got hooked on building things that feel polished,
                useful, and ready to ship. I am still learning every day, but I
                build with the mindset of making things that feel real, useful,
                and polished.
              </p>
            </div>
          </div>
        </div>

        <ProfileBlock
          icon={<Sparkles className="size-4" />}
          label="Lately"
          title="What I am currently focused on"
        >
          <ul className="space-y-3 text-base leading-relaxed text-white/55">
            <li>Improving my portfolio into a more professional product-focused site</li>
            <li>Learning stronger software architecture and backend workflows</li>
            <li>Building projects that mix design taste with useful functionality</li>
            <li>Exploring AI tools, automation, and better development workflows</li>
          </ul>
        </ProfileBlock>

        <ProfileBlock
          icon={<GraduationCap className="size-4" />}
          label="Education"
          title="Academic background"
        >
          <div className="space-y-0">
            {education.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </ProfileBlock>

        <ProfileBlock
          icon={<Award className="size-4" />}
          label="Academic awards"
          title="Recognitions and achievements"
        >
          <div className="space-y-0">
            {awards.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </ProfileBlock>

        <ProfileBlock
          icon={<BriefcaseBusiness className="size-4" />}
          label="School Organizations"
          title="Organizations, events, and team work"
        >
          <div className="space-y-0">
            {roles.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </ProfileBlock>

        <ProfileBlock
          icon={<UserRound className="size-4" />}
          label="Taste & hobbies"
          title="Things that shape my style"
        >
          <TagList items={tastes} />
        </ProfileBlock>

        <ProfileBlock
          icon={<Headphones className="size-4" />}
          label="Listening"
          title="What I am listening to most"
        >
          <TagList items={listening} />
        </ProfileBlock>

        <div className="mt-24 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-label text-white/45">Next</p>

              <h2 className="mt-4 text-[28px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[36px]">
                Want to see the work?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View projects
                <ArrowUpRight className="ml-2 size-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-transparent px-5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProfileBlock({
  icon,
  label,
  title,
  children,
}: {
  icon: React.ReactNode
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[240px_1fr]">
      <div>
        <div className="flex items-center gap-2 text-white/45">
          {icon}
          <p className="text-label">{label}</p>
        </div>
      </div>

      <div>
        <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-white">
          {title}
        </h2>

        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}

function TimelineItem({
  title,
  place,
  date,
  description,
}: {
  title: string
  place: string
  date: string
  description: string
}) {
  return (
    <div className="grid gap-3 border-t border-white/10 py-5 first:border-t-0 first:pt-0 md:grid-cols-[1fr_180px]">
      <div>
        <h3 className="text-base font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-white/40 italic">{place}</p>

        <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-white/50">
          {description}
        </p>
      </div>

      <p className="text-sm text-white/35 md:text-right">{date}</p>
    </div>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/60"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
