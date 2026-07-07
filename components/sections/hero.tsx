"use client"

import Image from "next/image"
import { Mail } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons/github-icon"
import { container } from "@/components/shared/container"

export function Hero() {
  return (
    <section
      className={`${container} relative z-10 flex min-h-dvh items-center pt-20`}
    >
      <div className="grid w-full items-center gap-8 md:grid-cols-[330px_1fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[330px] w-full overflow-hidden rounded-sm bg-white/5"
        >
          <Image
            src="/img/profile.png"
            alt="Jansen Cadorna"
            fill
            priority
            sizes="330px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[500px]"
        >
          <p className="mb-4 text-label text-white/70">Software Developer</p>

          <h1 className="text-[46px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
            Jansen Cadorna
          </h1>

          <div className="mt-6 space-y-5 text-hero-body text-white/55 md:text-hero-body-lg">
            <p>
              I&apos;m a Software Developer. I design and build polished
              websites, digital visuals, and web systems for brands.
            </p>

            <p>
              I&apos;m still learning every day, but I build with the mindset of
              making things that feel real, useful, and polished.
            </p>
          </div>

          <div className="mt-7 h-px w-full bg-white/15" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/cadornajansen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="group h-10 rounded-lg border-white/10 bg-transparent px-5 text-sm text-white hover:bg-white"
              >
                <GithubIcon />
                Github
              </Button>
            </a>

            <a href="mailto:hello@jansencadorna.com">
              <Button className="h-10 rounded-lg bg-white px-5 text-sm text-black hover:bg-white/90">
                <Mail className="mr-2 size-4" />
                Get in touch
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
