import type { Metadata } from "next"

export const seoConfig = {
  siteName: "Jansen Cadorna",
  siteUrl: "https://www.jansencadorna.com",
  creatorName: "Jansen Cadorna",
  email: "hello@jansencadorna.com",
  githubUrl: "https://github.com/cadornajansen",
  locale: "en_PH",
  defaultTitle: "Jansen Cadorna - Product-minded Software Developer",
  defaultDescription:
    "Portfolio of Jansen Cadorna, a product-minded software developer from Manila, Philippines building polished websites, clean interfaces, dashboards, and practical web systems.",
  keywords: [
    "Jansen Cadorna",
    "software developer",
    "frontend developer",
    "web developer Philippines",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "UI UX design",
    "portfolio",
    "Manila developer",
    "web systems",
    "dashboard developer",
  ],
  ogImages: {
    home: "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1783620973/homepage_vciewl.png",
    projects:
      "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1783620973/projects_gskwzz.png",
    stack:
      "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1783620973/stacks_yyxmmr.png",
    credentials:
      "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1783620972/credentials_vmvdwq.png",
    about:
      "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1783620973/about_mvfztw.png",
  },
} as const

export const sitePages = [
  {
    name: "Home",
    path: "/",
    description:
      "Portfolio homepage for Jansen Cadorna with featured work, credentials, stack, and contact options.",
  },
  {
    name: "Projects",
    path: "/projects",
    description:
      "Selected dashboards, portals, systems, and product-focused web projects built by Jansen Cadorna.",
  },
  {
    name: "Stack",
    path: "/stack",
    description:
      "Tools, frameworks, languages, and platforms used by Jansen Cadorna for web product development.",
  },
  {
    name: "Credentials",
    path: "/credentials",
    description:
      "Software development, systems, programming, UI/UX design, and web technology credentials.",
  },
  {
    name: "About",
    path: "/about",
    description:
      "Background, education, interests, and development journey of Jansen Cadorna.",
  },
  {
    name: "Contact",
    path: "/contact",
    description:
      "Contact Jansen Cadorna for websites, web systems, dashboards, and design-to-code projects.",
  },
] as const

export const projectSummaries = [
  {
    name: "Ledgerly",
    category: "Finance Dashboard",
    description:
      "A clean personal finance dashboard for tracking balances, expenses, cash flow, and simple financial insights.",
    url: "https://ledgerly-indol.vercel.app",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Orbit",
    category: "Project Tracking System",
    description:
      "A focused project and task tracking platform concept for organizing deadlines, progress, and team workflows.",
    url: "/projects",
    technologies: ["Next.js", "PostgreSQL", "Motion", "shadcn/ui"],
  },
  {
    name: "CampusFlow",
    category: "Organization Management Portal",
    description:
      "A student organization portal concept for members, announcements, events, and internal workflows.",
    url: "/projects",
    technologies: ["React", "Supabase", "Tailwind CSS", "Auth"],
  },
] as const

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${seoConfig.siteUrl}${normalizedPath}`
}

export function createPageMetadata({
  title,
  description,
  path,
  image = seoConfig.ogImages.home,
  imageAlt,
  type = "website",
}: {
  title: string
  description: string
  path: string
  image?: string
  imageAlt: string
  type?: "website" | "profile"
}): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title:
        title === seoConfig.defaultTitle
          ? seoConfig.defaultTitle
          : `${title} - ${seoConfig.siteName}`,
      description,
      url,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        title === seoConfig.defaultTitle
          ? seoConfig.defaultTitle
          : `${title} - ${seoConfig.siteName}`,
      description,
      images: [image],
      creator: "@cadornajansen",
    },
  }
}
