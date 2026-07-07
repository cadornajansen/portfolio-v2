"use client"

import { ArrowUpRight, Code2, Mail, Sparkles, Workflow } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const offers = [
  {
    icon: <Code2 className="size-4" />,
    title: "Websites & landing pages",
    description: "Clean, fast, and polished interfaces for brands, portfolios, and organizations.",
  },
  {
    icon: <Workflow className="size-4" />,
    title: "Web systems",
    description: "Practical dashboards, portals, and internal tools built around real workflows.",
  },
  {
    icon: <Sparkles className="size-4" />,
    title: "Design-to-code builds",
    description: "Turning Figma layouts and messy ideas into responsive, working products.",
  },
]

export function ContactCTA() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 44, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 py-15"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0b0b0d]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10">
        {/* Card background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),transparent_34%,rgba(255,255,255,0.025))]" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.09] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-200px] left-[-160px] h-[380px] w-[420px] rounded-full bg-white/[0.045] blur-[130px]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-label text-white/70">Work with me</p>

            <h2 className="mt-5 max-w-[620px] text-[42px] leading-[0.95] font-semibold tracking-[-0.03em] text-white md:text-[58px]">
              Ready to turn an idea into working product?
            </h2>

            <p className="mt-6 max-w-[560px] text-hero-body text-white/55 md:text-hero-body-lg">
              I help students, small businesses, and organizations build polished websites, web systems, and digital products through hands-on collaboration.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="h-11 rounded-lg bg-white px-6 text-sm text-black hover:bg-white/90">
                <Mail className="mr-2 size-4" />
                Consult with me
              </Button>

              <Button
                variant="outline"
                className="group h-11 rounded-lg border-white/10 bg-transparent px-6 text-sm text-white hover:bg-white hover:text-black"
              >
                View projects
                <ArrowUpRight className="ml-2 size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex gap-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition group-hover:text-white">
                    {offer.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-[-0.03em] text-white">
                      {offer.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-10 h-px w-full bg-white/10" />

        <div className="relative z-10 mt-6 flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Tell me about your project, most ideas start with a simple conversation.</p>

          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 font-medium text-white transition hover:text-white/70"
          >
            hello@jansencadorna.com
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </motion.section>
  )
}