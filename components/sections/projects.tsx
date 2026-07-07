"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Orbit,
  UsersRound,
} from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "ledgerly",
    tags: ["Finance tool", "Dashboard"],
    icon: <BarChart3 className="size-8" />,
    featuredIcon: <BarChart3 className="size-12" />,
    title: "Ledgerly — Finance Dashboard",
    description:
      "A clean personal finance dashboard for budgeting, tracking cash flow, and spending insights.",
    actions: ["View Project", "Case Study"],
  },
  {
    id: "orbit",
    tags: ["✦ #1 Featured Project", "Web App"],
    icon: <Orbit className="size-8" />,
    featuredIcon: <Orbit className="size-12" />,
    title: "Orbit — Project Tracking System",
    description:
      "A focused task and workflow platform for teams managing projects, deadlines, and progress.",
    actions: ["View Project", "Case Study"],
  },
  {
    id: "campusflow",
    tags: ["Portal", "System"],
    icon: <UsersRound className="size-8" />,
    featuredIcon: <UsersRound className="size-12" />,
    title: "CampusFlow — Org Management Portal",
    description:
      "A system for handling members, announcements, events, and internal organization workflows.",
    actions: ["View Project", "Case Study"],
  },
]

type ProjectPosition = "left" | "center" | "right"

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)

  const activeProject = projects[activeIndex]

  function getProjectPosition(index: number): ProjectPosition {
    const relativePosition =
      (index - activeIndex + projects.length) % projects.length

    if (relativePosition === 0) return "center"
    if (relativePosition === 1) return "right"
    return "left"
  }

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 44, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 py-20"
    >
      <div className="mb-14">
        <p className="text-label text-white">Projects</p>

        <p className="md:text--hero-body-lg mt-3  text-hero-body text-white/55">
          Selected systems and web products built around real problems, clean
          interfaces, and practical workflows.
        </p>
      </div>

      <div className="relative hidden min-h-110 items-center justify-center lg:flex">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-65 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/8 blur-[110px]" />

        {projects.map((project, index) => {
          const position = getProjectPosition(index)
          const featured = position === "center"
          const clickable = !featured

          return (
            <motion.div
              key={project.id}
              layout
              initial={false}
              animate={cardMotion[position]}
              transition={slideSpring}
              whileHover={
                clickable
                  ? {
                      scale:
                        position === "left" || position === "right" ? 0.94 : 1,
                      opacity: 1,
                    }
                  : undefined
              }
              className="absolute top-1/2 left-1/2 w-[380px]"
              style={{
                zIndex: position === "center" ? 30 : 10,
                pointerEvents: position === "center" ? "auto" : "auto",
              }}
            >
              <ProjectCard
                featured={featured}
                asButton={clickable}
                tags={project.tags}
                icon={featured ? project.featuredIcon : project.icon}
                title={project.title}
                description={project.description}
                actions={featured ? project.actions : ["View Project"]}
                onClick={() => setActiveIndex(index)}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Mobile featured card */}
      <div className="lg:hidden">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={slideSpring}
        >
          <ProjectCard
            featured
            tags={activeProject.tags}
            icon={activeProject.featuredIcon}
            title={activeProject.title}
            description={activeProject.description}
            actions={activeProject.actions}
          />
        </motion.div>

        <div className="mt-8 grid gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                "rounded-xl border px-4 py-3 text-left transition",
                activeProject.id === project.id
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06] hover:text-white",
              ].join(" ")}
            >
              <p className="text-sm font-medium tracking-[-0.02em]">
                {project.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const cardMotion = {
  left: {
    x: "-112%",
    y: "-50%",
    rotate: -7,
    scale: 0.88,
    opacity: 0.72,
  },
  center: {
    x: "-50%",
    y: "-50%",
    rotate: 0,
    scale: 1,
    opacity: 1,
  },
  right: {
    x: "12%",
    y: "-50%",
    rotate: 7,
    scale: 0.88,
    opacity: 0.72,
  },
} as const

const slideSpring = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 0.9,
} as const

function ProjectCard({
  featured = false,
  asButton = false,
  tags,
  icon,
  title,
  description,
  actions,
  onClick,
}: {
  featured?: boolean
  asButton?: boolean
  tags: string[]
  icon: ReactNode
  title: string
  description: string
  actions: string[]
  onClick?: () => void
}) {
  return (
    <article
      role={asButton ? "button" : undefined}
      tabIndex={asButton ? 0 : undefined}
      onClick={asButton ? onClick : undefined}
      onKeyDown={(event) => {
        if (!asButton) return

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onClick?.()
        }
      }}
      className={[
        "relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0d]/80 p-7 text-left shadow-2xl shadow-black/40 backdrop-blur-xl transition-colors duration-500 outline-none",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(255,255,255,0.03))]",
        asButton
          ? "cursor-pointer hover:border-white/20 hover:bg-[#101014]/90 focus-visible:ring-2 focus-visible:ring-white/30"
          : "",
        featured ? "min-h-[360px] border-white/18 p-8 shadow-blue-500/10" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

      <div className="relative z-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-white/70 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-8 flex flex-col items-start">
        <div className="flex items-center gap-4">
          <div
            className={[
              "grid shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70",
              featured ? "size-18" : "size-15",
            ].join(" ")}
          >
            {icon}
          </div>
          <h3
            className={[
              "font-semibold text-white",
              featured
                ? "text-[22px] leading-[1.15]"
                : "text-[18px] leading-[1.2]",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>
        <div>
          <p
            className={[
              "mt-5 leading-[1.55] text-white/50",
              featured ? "text-[15px]" : "text-[13px]",
            ].join(" ")}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 h-px w-full bg-white/10" />

      <div className="relative z-10 mt-6 flex flex-wrap gap-3">
        {actions.map((action, index) => {
          const isPrimary = featured && index === 0

          return (
            <Button
              key={action}
              variant={isPrimary ? "default" : "outline"}
              className={[
                "h-10 rounded-lg px-5 text-xs font-medium",
                isPrimary
                  ? "bg-white text-black hover:bg-white/90"
                  : "border-white/10 bg-transparent text-white hover:bg-white hover:text-black",
              ].join(" ")}
              onClick={(event) => {
                event.stopPropagation()

                if (asButton) {
                  onClick?.()
                }
              }}
            >
              {action}
              {action === "Case Study" ? (
                <BookOpen className="ml-2 size-4" />
              ) : (
                <ArrowUpRight className="ml-2 size-4" />
              )}
            </Button>
          )
        })}
      </div>
    </article>
  )
}
