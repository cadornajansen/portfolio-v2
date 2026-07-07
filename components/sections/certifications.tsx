"use client"

import Image from "next/image"
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react"
import { motion } from "motion/react"
import { Separator } from "@/components/ui/separator"

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "GitHub",
  "Vercel",
  "+ more",
]

const certifications = [
  {
    title: "Mgmt. Information Systems",
    issuer: "MSBM UK",
    logo: "/img/cert-msbm.png",
    href: "#",
  },
  {
    title: "Python Certification",
    issuer: "EntryLevel",
    logo: "/img/cert-entrylevel-python.png",
    href: "#",
  },
  {
    title: "Web & Mobile UI/UX Design",
    issuer: "Zero To Mastery",
    logo: "/img/cert-ztm-web-design.png",
    href: "#",
  },
]

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 44, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 py-20"
    >
      <div className="mb-8 flex items-center justify-between">
        <p className="text-label text-white">Certifications</p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 text-label text-white/35 transition hover:text-white"
        >
          View all
          <ArrowUpRight className="size-4 opacity-50 transition hover:opacity-100" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CertificateCard {...certificate} />
          </motion.div>
        ))}
      </div>
      {/* Stack */}
      <div className="my-10">
        <div className="mb-8 flex items-center justify-between">
        <p className="text-label text-white">Stacks</p>

        <a
          href="#"
          className="group inline-flex items-center gap-2 text-label text-white/35 transition hover:text-white"
        >
          View all
          <ArrowUpRight className="size-4 opacity-50 transition hover:opacity-100" />
        </a>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, index) => {
            const isMore = skill === "+ more"

            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "rounded-lg border px-4 py-2 text-sm font-medium tracking-[-0.02em] transition",
                  isMore
                    ? "border-dashed border-white/15 bg-transparent text-white/55 hover:border-white/30 hover:text-white"
                    : "border-white/10 bg-white/[0.025] text-white/70 hover:border-white/20 hover:bg-white/[0.05] hover:text-white",
                ].join(" ")}
              >
                {skill}
              </motion.span>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

function CertificateCard({
  title,
  issuer,
  logo,
  href,
}: {
  title: string
  issuer: string
  logo: string
  href: string
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/12 bg-[#0b0b0d]/70 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014]/85">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%,rgba(255,255,255,0.025))]" />

      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 flex min-h-42.5 flex-col items-center justify-center text-center">
        <div className="relative size-14 overflow-hidden rounded-full border border-white/10 bg-white">
          <Image
            src={logo}
            alt={`${issuer} logo`}
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>

        <div className="mt-2">
          <h3 className="text-[16px] leading-tight font-semibold tracking-[-0.04em] text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/55">{issuer}</p>
        </div>

        <Separator className="my-4" />

        <a
          href={href}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[-0.02em] text-white transition hover:text-white/70"
        >
          View Certificate
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}
