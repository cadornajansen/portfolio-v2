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
    projectUrl: "https://ledgerly-indol.vercel.app",
    caseStudyUrl: "#",
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
    projectUrl: "#",
    caseStudyUrl: "#",
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
    projectUrl: "#",
    caseStudyUrl: "#",
  },
]

type ProjectPosition = "left" | "center" | "right"

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 py-15 md:py-20"
    >
      <div className="mb-10 md:mb-14">
        <p className="text-label text-white">Projects</p>

        <p className="mt-3 text-hero-body text-white/55 md:text-hero-body-lg">
          Selected systems and web products built around real problems, clean
          interfaces, and practical workflows.
        </p>
      </div>

      {/* Mobile carousel */}
      <div className="relative min-h-[390px] items-center justify-center  lg:hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-45 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/8 blur-[90px]" />

        {projects.map((project, index) => {
          const position = getProjectPosition(index)
          const featured = position === "center"
          const clickable = !featured

          return (
            <motion.div
              key={project.id}
              layout
              initial={false}
              animate={mobileCardMotion[position]}
              transition={slideSpring}
              whileHover={
                clickable
                  ? {
                      scale: 0.9,
                      opacity: 1,
                    }
                  : undefined
              }
              className="absolute top-1/2 left-1/2 w-[260px]"
              style={{
                zIndex: position === "center" ? 30 : 10,
                pointerEvents: "auto",
              }}
            >
              <ProjectCard
                compact
                featured={featured}
                asButton={clickable}
                tags={project.tags}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actions={featured ? project.actions : ["View Project"]}
                projectUrl={project.projectUrl}
                caseStudyUrl={project.caseStudyUrl}
                onClick={() => setActiveIndex(index)}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Desktop carousel */}
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
                pointerEvents: "auto",
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
                projectUrl={project.projectUrl}
                caseStudyUrl={project.caseStudyUrl}
                onClick={() => setActiveIndex(index)}
              />
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}

const mobileCardMotion = {
  left: {
    x: "-95%",
    y: "-50%",
    rotate: -7,
    scale: 0.82,
    opacity: 0.42,
  },
  center: {
    x: "-50%",
    y: "-50%",
    rotate: 0,
    scale: 1,
    opacity: 1,
  },
  right: {
    x: "-5%",
    y: "-50%",
    rotate: 7,
    scale: 0.82,
    opacity: 0.42,
  },
} as const

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
  compact = false,
  tags,
  icon,
  title,
  description,
  actions,
  projectUrl,
  caseStudyUrl,
  onClick,
}: {
  featured?: boolean
  asButton?: boolean
  compact?: boolean
  tags: string[]
  icon: ReactNode
  title: string
  description: string
  actions: string[]
  projectUrl?: string
  caseStudyUrl?: string
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
        "relative flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0d]/88 text-left shadow-xl shadow-black/35 transition-colors duration-500 outline-none",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_36%,rgba(255,255,255,0.03))]",
        compact ? "min-h-[285px] p-5" : "min-h-[310px] p-7",
        asButton
          ? "cursor-pointer hover:border-white/20 hover:bg-[#101014]/90 focus-visible:ring-2 focus-visible:ring-white/30"
          : "",
        featured && !compact
          ? "min-h-[360px] border-white/18 p-8 shadow-blue-500/10"
          : "",
        featured && compact
          ? "min-h-[320px] border-white/18 shadow-blue-500/10"
          : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

      <div className="relative z-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={[
              "rounded-full border border-white/10 bg-white/[0.03] font-medium tracking-[0.12em] text-white/70 uppercase",
              compact ? "px-2 py-0.5 text-[8px]" : "px-3 py-1 text-[10px]",
            ].join(" ")}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={["relative z-10 flex flex-col items-start", compact ? "mt-6" : "mt-8"].join(" ")}>
        <div className={["flex items-center", compact ? "gap-3" : "gap-4"].join(" ")}>
          <div
            className={[
              "grid shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70",
              compact ? "size-12" : featured ? "size-18" : "size-15",
            ].join(" ")}
          >
            {icon}
          </div>

          <h3
            className={[
              "font-semibold text-white",
              compact
                ? "text-[17px] leading-[1.15]"
                : featured
                  ? "text-[22px] leading-[1.15]"
                  : "text-[18px] leading-[1.2]",
            ].join(" ")}
          >
            {title}
          </h3>
        </div>

        <p
          className={[
            "leading-[1.55] text-white/50",
            compact ? "mt-4 text-[12px]" : featured ? "mt-5 text-[15px]" : "mt-5 text-[13px]",
          ].join(" ")}
        >
          {description}
        </p>
      </div>

      <div className={["relative z-10 h-px w-full bg-white/10", compact ? "mt-5" : "mt-8"].join(" ")} />

      <div className={["relative z-10 flex flex-wrap gap-2", compact ? "mt-4" : "mt-6 gap-3"].join(" ")}>
        {actions.map((action, index) => {
          const isPrimary = featured && index === 0

          return (
            <Button
              key={action}
              variant={isPrimary ? "default" : "outline"}
              className={[
                "rounded-lg font-medium",
                compact ? "h-9 px-3 text-[11px]" : "h-10 px-5 text-xs",
                isPrimary
                  ? "bg-white text-black hover:bg-white/90"
                  : "border-white/10 bg-transparent text-white hover:bg-white hover:text-black",
              ].join(" ")}
              onClick={(event) => {
                event.stopPropagation()

                const href = action === "Case Study" ? caseStudyUrl : projectUrl

                if (!href || href === "#") {
                  return
                }

                if (href.startsWith("http")) {
                  window.open(href, "_blank", "noopener,noreferrer")
                  return
                }

                window.open(href, "_blank", "noopener,noreferrer")
              }}
            >
              {action}
              {action === "Case Study" ? (
                <BookOpen className={compact ? "ml-1.5 size-3.5" : "ml-2 size-4"} />
              ) : (
                <ArrowUpRight className={compact ? "ml-1.5 size-3.5" : "ml-2 size-4"} />
              )}
            </Button>
          )
        })}
      </div>
    </article>
  )
}   
