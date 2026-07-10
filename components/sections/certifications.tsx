import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
    href: "https://pdfhost.io/v/YB74j4SCFf_MSBM_UK_-_CERT_-_JANSEN_CADORNA",
  },
  {
    title: "Python Certification",
    issuer: "EntryLevel",
    logo: "/img/cert-entrylevel-python.png",
    href: "https://entrylevel-public.s3.amazonaws.com/certificate/1d76a5f8-dc71-403a-8df3-e174bf7b3e87/79788b28-20bc-48e7-982a-cc7af3d7dd51_cert.pdf",
  },
  {
    title: "Web & Mobile UI/UX Design",
    issuer: "Zero To Mastery",
    logo: "/img/cert-ztm-web-design.png",
    href: "https://ude.my/UC-74d4cfc3-ec53-4b6d-a56d-3a057ff95e4f",
  },
]

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 py-15 md:py-20"
    >
      <div className="mb-8 flex items-center justify-between">
        <p className="text-label text-white">Certifications</p>

        <Link
          href="/credentials"
          className="group inline-flex items-center gap-2 text-label text-white/35 transition hover:text-white"
        >
          View all
          <ArrowUpRight className="size-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certificate) => (
          <CertificateCard key={certificate.title} {...certificate} />
        ))}
      </div>

      {/* Stack */}
      <div className="my-10">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-label text-white">Stacks</p>

          <Link
            href="/stack"
            className="group inline-flex items-center gap-2 text-label text-white/35 transition hover:text-white"
          >
            View all
            <ArrowUpRight className="size-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const isMore = skill === "+ more"

            return (
              <span
                key={skill}
                className={[
                  "rounded-lg border px-4 py-2 text-sm font-medium tracking-[-0.02em] transition",
                  isMore
                    ? "border-dashed border-white/15 bg-transparent text-white/55 hover:border-white/30 hover:text-white"
                    : "border-white/10 bg-white/[0.025] text-white/70 hover:border-white/20 hover:bg-white/[0.05] hover:text-white",
                ].join(" ")}
              >
                {skill}
              </span>
            )
          })}
        </div>
      </div>
    </section>
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
    <article className="group relative overflow-hidden rounded-xl border border-white/12 bg-[#0b0b0d]/88 p-8 shadow-xl shadow-black/30 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#101014]/90">
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

        <div className="my-4 h-px w-full bg-border" />

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[-0.02em] text-white transition hover:text-white/70"
        >
          View Certificate
          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  )
}
