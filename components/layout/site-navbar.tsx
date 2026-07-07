import { container } from "@/components/shared/container"

const navItems = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Projects",
    href: "projects",
  },
  {
    label: "Stack",
    href: "stack",
  },
  {
    label: "Certifications",
    href: "certifications",
  },
  
]

export function SiteNavbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080808]/75 backdrop-blur-xl">
      <div className={`${container} flex items-center justify-between py-4`}>
        <a
          href="./"
          className="text-sm font-medium tracking-wide text-white/80 transition hover:text-white"
        >
          Jansen Cadorna
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/45 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}