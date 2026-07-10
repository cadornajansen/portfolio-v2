import Link from "next/link"

import { container } from "@/components/shared/container"

const navItems = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Stack",
    href: "/stack",
  },
  {
    label: "Credentials",
    href: "/credentials",
  },
]

export function SiteNavbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/90 supports-backdrop-filter:backdrop-blur-sm">
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
