import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransition } from "react"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { sfPro, sfProRounded } from "@/lib/fonts"

const siteUrl = "https://jansencadorna.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Jansen Cadorna — Product-minded Software Developer",
    template: "%s — Jansen Cadorna",
  },

  description:
    "Portfolio of Jansen Cadorna, a product-minded software developer from Manila, Philippines building polished websites, clean interfaces, dashboards, and practical web systems.",

  applicationName: "Jansen Cadorna Portfolio",

  keywords: [
    "Jansen Cadorna",
    "Jansen Viray",
    "Software Developer",
    "Product-minded Software Developer",
    "Frontend Developer",
    "Web Developer Philippines",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "UI UX Designer",
    "Portfolio",
    "Manila Philippines Developer",
    "Student Developer",
    "Web Systems",
    "Dashboard Developer",
  ],

  authors: [
    {
      name: "Jansen Cadorna",
      url: siteUrl,
    },
  ],

  creator: "Jansen Cadorna",
  publisher: "Jansen Cadorna",
  category: "technology",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: "Jansen Cadorna",
    title: "Jansen Cadorna — Product-minded Software Developer",
    description:
      "A dark, premium portfolio showcasing projects, credentials, stack, and practical web systems by Jansen Cadorna.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jansen Cadorna portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jansen Cadorna — Product-minded Software Developer",
    description:
      "Portfolio of Jansen Cadorna, building polished websites, interfaces, dashboards, and useful web systems.",
    images: ["/og-image.png"],
    creator: "@cadornajansen",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080808",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", sfPro.variable, sfProRounded.variable)}
    >
      <body>
        <ThemeProvider>
          <ViewTransition name="page">{children}</ViewTransition>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
