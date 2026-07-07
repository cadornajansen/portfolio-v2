"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRight, Code2, MonitorCog, PenTool } from "lucide-react"
import { motion } from "motion/react"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { container } from "@/components/shared/container"

const aboutCards = [
  {
    title: "From designs",
    image: "/img/about-designs.png",
    icon: <PenTool className="size-5" />,
  },
  {
    title: "Writing codes",
    image: "/img/about-code.png",
    icon: <Code2 className="size-5" />,
  },
  {
    title: "To launch",
    image: "/img/about-launch.png",
    icon: <MonitorCog className="size-5" />,
  },
]

const stats = [
  {
    value: "4.7K",
    label: "TikTok",
  },
  {
    value: "5yrs+",
    label: "Shipping",
  },
  {
    value: "2x",
    label: "Hackathons",
  },
]

export function About() {
  return (
    <section id="about" className={`${container} relative z-10 pb-20`}>
      <motion.div
        initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[860px]"
      >
        <p className="text-label text-white">Get to know me</p>

        <p className="mt-5 flex items-center gap-2 text-hero-body text-white/55 md:text-hero-body-lg">
          Currently a Computer Science student from Manila, Philippines
          <Image
            width="24"
            height="24"
            src="https://img.icons8.com/emoji/48/philippines-emoji.png"
            alt="philippines-emoji"
          />
        </p>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AboutCard
                icon={card.icon}
                title={card.title}
                image={card.image}
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-7 text-hero-body text-white/65 md:text-hero-body-lg">
          I approach projects by understanding the problem first, then designing
          a solution that feels clear, efficient, and practical. For me, good
          software isn&apos;t just about writing code. It&apos;s about solving
          problems that actually help people.
        </p>

        <Separator className="my-6" />

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center">
          <div className="grid flex-1 grid-cols-3 divide-x divide-white/15">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-label text-white transition hover:text-white/70"
          >
            Discover more about me
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

function AboutCard({
  icon,
  title,
  image,
}: {
  icon: ReactNode
  title: string
  image: string
}) {
  return (
    <div className="group relative h-[132px] overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 280px"
        className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />

      <div className="absolute inset-0 bg-white/[0.02]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3 text-black">
          {icon}
          <p className="text-[22px] font-semibold tracking-[-0.04em]">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-8 first:pl-0 last:pr-0">
      <p className="text-[26px] leading-none font-medium tracking-[-0.05em] text-white">
        {value}
      </p>
      <p className="mt-2 text-sm font-semibold tracking-[0.08em] text-white/50 uppercase">
        {label}
      </p>
    </div>
  )
}
