import Link from "next/link"

import { container } from "@/components/shared/container"

const navItems = [
  {
    label: "About",
    href: "/about",
    newTab: true,
  },
  {
    label: "Projects",
    href: "/projects",
    newTab: false,
  },
  {
    label: "Stack",
    href: "/stack",
    newTab: true,
  },
  {
    label: "Credentials",
    href: "/credentials",
    newTab: true,
  },
]

export function SiteNavbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/75 backdrop-blur-xl">
      <div className={`${container} flex items-center justify-between py-4`}>
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-white/80 transition hover:text-white"
        >
          Jansen Cadorna
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/45 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}