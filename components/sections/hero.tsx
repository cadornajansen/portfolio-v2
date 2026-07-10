import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

import { GithubIcon } from "@/components/icons/github-icon"
import { container } from "@/components/shared/container"

const profileImage =
  "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,g_auto,w_660,h_660/v1783620982/profile_cnpfgo.png"

export function Hero() {
  return (
    <section
      className={`${container} relative z-10 flex min-h-dvh items-center pt-5 md:pt-20`}
    >
      <div className="grid w-full items-center gap-8 md:grid-cols-[330px_1fr] lg:gap-12">
        <div className="relative h-82.5 w-full overflow-hidden rounded-sm bg-white/5">
          <Image
            src={profileImage}
            alt="Portrait of Jansen Cadorna"
            width={660}
            height={660}
            preload
            fetchPriority="high"
            sizes="(max-width: 768px) calc(100vw - 2rem), 330px"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-[500px]">
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
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-transparent px-5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              <GithubIcon />
              Github
            </a>

            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail className="mr-2 size-4" />
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
