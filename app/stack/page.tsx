import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { container } from "@/components/shared/container"

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
      "Sveltekit",
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
      "Pocketbase",
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
      "Adobe Creatives"
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
      "Burpsuite",
      "Claude",
      "Google Workspace",
      "Microsoft 365",
      "Slack",
      "Notion",
      "Netlify",
      "Heroku",
      "Digital Ocean"
    ],
  },
  {
    title: "Exploring",
    items: [
      "Pinia by Vue.js",
      "Nuxt",
      "Python Pytorch",
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

export default function StackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        {/* Header */}
        <div className="border-white/10 pb-2">
          <p className="text-label text-white/45">Skillset</p>

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
                I’m still learning and expanding this stack, but these are the
                tools I’m most comfortable using or actively improving.
              </p>
            </div>
          </div>
        </div>

        {/* Skill groups */}
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
