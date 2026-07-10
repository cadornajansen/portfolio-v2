import type { Metadata } from "next"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { JsonLd } from "@/components/seo/json-ld"
import { container } from "@/components/shared/container"
import { absoluteUrl, createPageMetadata, seoConfig } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Stack",
  description:
    "The tools, frameworks, languages, and platforms Jansen Cadorna uses for frontend development, backend systems, design, deployment, and product building.",
  path: "/stack",
  image: seoConfig.ogImages.stack,
  imageAlt: "Jansen Cadorna technology stack page preview",
})

const skillGroups = [
  {
    title: "Frontend & Web",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI Components",
      "Motion",
      "Prettier",
      "ESLint",
      "Vite",
      "Webpack",
      "Vue.js",
      "Solid.js",
      "Astro",
      "Django",
      "Flask",
      "Streamlit",
      "SvelteKit",
      "Three.js",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Authentication",
      "Database Design",
      "PocketBase",
      "Firebase",
      "Redis",
      "Prisma",
      "ORMs",
      "Drizzle",
      "Auth0",
      "Cloudflare R2",
      "AWS S3",
      "Azure Virtual Machines",
      "Google Cloud",
      "Serverless Functions",
      "Trigger.dev",
      "Express.js",
    ],
  },
  {
    title: "Design & Product",
    items: [
      "Figma",
      "Affinity Designer",
      "UI/UX Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "Visual Direction",
      "Product Thinking",
      "Graphic Design",
      "Branding Identity",
      "Illustration",
      "Motion Design",
      "3D Design",
      "Print Design",
      "Digital Marketing",
      "Social Media Ads",
      "Video Editing",
      "Color Grading",
      "Photo Manipulation",
      "Adobe Creative Cloud",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "VS Code",
      "Codex",
      "NPM",
      "PNPM",
      "Deployment",
      "Burp Suite",
      "Claude",
      "Google Workspace",
      "Microsoft 365",
      "Slack",
      "Notion",
      "Netlify",
      "Heroku",
      "DigitalOcean",
    ],
  },
  {
    title: "Exploring",
    items: [
      "Pinia",
      "Nuxt",
      "PyTorch",
      "AI Tools",
      "Prompt Engineering",
      "Web Security Basics",
      "Web3 & Blockchain",
    ],
  },
]

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.items.length,
  0
)

const stackJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/stack#webpage"),
    url: absoluteUrl("/stack"),
    name: "Stack - Jansen Cadorna",
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
        name: "Stack",
        item: absoluteUrl("/stack"),
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jansen Cadorna technology stack",
    itemListElement: skillGroups.map((group, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: group.title,
      item: group.items,
    })),
  },
]

export default function StackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />
      <JsonLd data={stackJsonLd} />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        <div className="border-white/10 pb-2">
          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="text-[42px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
                Tech stack
              </h1>

              <p className="mt-3 text-base text-white/45">
                {totalSkills} tools, systems, and working skills.
              </p>
            </div>

            <div className="space-y-5 text-[18px] leading-relaxed tracking-[-0.03em] text-white/60">
              <p>
                A compact index of the tools, frameworks, and workflows I use to
                build websites, interfaces, systems, and practical digital
                products.
              </p>

              <p>
                I am still learning and expanding this stack, but these are the
                tools I am most comfortable using or actively improving.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-14 pt-14">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <p className="text-label text-white/45">{title}</p>

        <p className="text-label text-white/30">{items.length}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-2 text-sm font-medium tracking-[-0.02em] text-white/65 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
