import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Pin } from "lucide-react"

import { SiteBackground } from "@/components/layout/site-background"
import { SiteNavbar } from "@/components/layout/site-navbar"
import { container } from "@/components/shared/container"

const certifications = [
  {
    title: "Management Information Systems",
    issuer: "MSBM UK",
    date: "2025",
    category: "Systems & Business",
    logo: "/img/cert-msbm.png",
    href: "https://pdfhost.io/v/YB74j4SCFf_MSBM_UK_-_CERT_-_JANSEN_CADORNA",
    pinned: true,
  },
  {
    title: "Python Certification",
    issuer: "EntryLevel",
    date: "2025",
    category: "Programming",
    logo: "/img/cert-entrylevel-python.png",
    href: "https://entrylevel-public.s3.amazonaws.com/certificate/1d76a5f8-dc71-403a-8df3-e174bf7b3e87/79788b28-20bc-48e7-982a-cc7af3d7dd51_cert.pdf",
    pinned: true,
  },
  {
    title: "Web & Mobile UI/UX Design",
    issuer: "Zero To Mastery",
    date: "2025",
    category: "UI/UX Design",
    logo: "/img/cert-ztm-web-design.png",
    href: "https://ude.my/UC-74d4cfc3-ec53-4b6d-a56d-3a057ff95e4f",
    pinned: true,
  },
  {
    title: "MongoDB CRUD Operations",
    issuer: "MongoDB University",
    date: "2025",
    category: "Database",
    logo: "/img/cert-mongodb.png",
    href: "https://www.credly.com/badges/b4efd6ee-a836-4b83-94de-a68922caf4d0",
    pinned: false,
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM Digital Credential",
    date: "2025",
    category: "Developer Tools",
    logo: "/img/cert-github.png",
    href: "https://www.credly.com/badges/a51b500d-2327-4d8c-adaa-a7e26488085a",
    pinned: false,
  },
  {
    title: "Java Certification",
    issuer: "Job Ready Programmer",
    date: "2025",
    category: "Programming",
    logo: "/img/cert-github.png",
    href: "https://www.udemy.com/certificate/UC-378351d2-b41a-42fc-917d-821d1ebcccf0/",
    pinned: false,
  },
  {
    title: "C: Mother Language Certification",
    issuer: "Pirple.com",
    date: "2025",
    category: "Programming",
    logo: "",
    href: "https://www.pirple.com/certificates/sdagr0g2tl",
    pinned: false,
  },
  {
    title: "C# Fundamentals",
    issuer: "Pirple.com",
    date: "2025",
    category: "Programming",
    logo: "",
    href: "https://www.pirple.com/certificates/9x61tdi6jo",
    pinned: false,
  },
  {
    title: "Certified Mid-Level Vue.js Developer",
    issuer: "Vue.js Certification",
    date: "2026",
    category: "Frontend Framework",
    logo: "/img/cert-vue.png",
    href: "your-certificate-link",
    pinned: false,
  },
]

function CertificateTextItem({
  title,
  issuer,
  date,
  category,
  href,
}: {
  title: string
  issuer: string
  date: string
  category: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className="group grid gap-3 py-5 transition hover:bg-white/[0.025] md:grid-cols-[1fr_160px_120px]"
    >
      <div>
        <h3 className="text-base font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-white/40 italic">{issuer}</p>
      </div>

      <p className="text-sm text-white/40 md:text-right">{category}</p>

      <p className="flex items-center gap-2 text-sm text-white/35 md:justify-end">
        {date}
        <ArrowUpRight className="size-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </p>
    </a>
  )
}

const pinnedCertifications = certifications.filter((cert) => cert.pinned)
const listedCertifications = certifications.filter((cert) => !cert.pinned)

export default function CertificationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteBackground />
      <SiteNavbar />

      <section className={`${container} relative z-10 pt-32 pb-28`}>
        <div className="border-b border-white/10 pb-14">
          <p className="text-label text-white/45">Credentials</p>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="text-[42px] leading-none font-semibold tracking-[-0.06em] text-white md:text-[56px]">
                Certifications
              </h1>

              <p className="mt-3 text-base text-white/45">
                Learning records, credentials, and technical certificates.
              </p>
            </div>

            <div className="space-y-5 text-[18px] leading-relaxed tracking-[-0.03em] text-white/60">
              <p>
                A simple archive of certifications I’ve completed while learning
                software development, systems, programming, design, and product
                workflows.
              </p>

              <p>
                I treat these as part of the trail, not the whole story. The
                goal is still to apply what I learn by building useful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Pinned */}
        <section className="py-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-label text-white/45">Pinned</p>

              <h2 className="mt-4 text-[28px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[36px]">
                Top certifications
              </h2>
            </div>

            <p className="text-label text-white/35">
              {pinnedCertifications.length} pinned
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {pinnedCertifications.map((certificate) => (
              <CertificationItem key={certificate.title} {...certificate} />
            ))}
          </div>
        </section>

        {/* Full list */}
        <section className="pt-4 pb-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-label text-white/45">Full list</p>

              <h2 className="mt-4 text-[28px] leading-none font-semibold tracking-[-0.05em] text-white md:text-[36px]">
                All certificates
              </h2>
            </div>

            <p className="text-label text-white/35">
              {listedCertifications.length} items
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {listedCertifications.map((certificate) => (
              <CertificateTextItem key={certificate.title} {...certificate} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

function CertificationItem({
  title,
  issuer,
  date,
  category,
  logo,
  href,
  pinned,
}: {
  title: string
  issuer: string
  date: string
  category: string
  logo: string
  href: string
  pinned?: boolean
}) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className="group grid gap-5 py-6 transition hover:bg-white/[0.025] md:grid-cols-[56px_1fr_160px_120px]"
    >
      <div className="relative size-12 overflow-hidden rounded-full border border-white/10 bg-white">
        <Image
          src={logo}
          alt={`${issuer} logo`}
          fill
          sizes="48px"
          className="object-contain"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold tracking-[-0.03em] text-white">
            {title}
          </h3>

          {pinned && <Pin className="size-3.5 text-white/35" />}
        </div>

        <p className="mt-1 text-sm text-white/40 italic">{issuer}</p>
      </div>

      <p className="text-sm text-white/40 md:text-right">{category}</p>

      <p className="flex items-center gap-2 text-sm text-white/35 md:justify-end">
        {date}
        <ArrowUpRight className="size-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </p>
    </a>
  )
}
