import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransition } from "react"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/seo/json-ld"
import { cn } from "@/lib/utils"
import { sfPro } from "@/lib/fonts"
import { absoluteUrl, seoConfig, sitePages } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),

  title: {
    default: seoConfig.defaultTitle,
    template: `%s - ${seoConfig.siteName}`,
  },

  description: seoConfig.defaultDescription,
  applicationName: "Jansen Cadorna Portfolio",
  keywords: [...seoConfig.keywords],

  authors: [
    {
      name: seoConfig.creatorName,
      url: seoConfig.siteUrl,
    },
  ],

  creator: seoConfig.creatorName,
  publisher: seoConfig.creatorName,
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [
      {
        url: seoConfig.ogImages.home,
        width: 1200,
        height: 630,
        alt: "Jansen Cadorna portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [seoConfig.ogImages.home],
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

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: seoConfig.creatorName,
    url: seoConfig.siteUrl,
    email: seoConfig.email,
    image:
      "https://res.cloudinary.com/koo10zab/image/upload/f_auto,q_auto,w_800/v1783620982/profile_cnpfgo.png",
    jobTitle: "Software Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manila",
      addressCountry: "PH",
    },
    sameAs: [seoConfig.githubUrl],
    knowsAbout: [
      "Web development",
      "Frontend development",
      "React",
      "Next.js",
      "TypeScript",
      "UI/UX design",
      "Product dashboards",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
    inLanguage: "en-PH",
    hasPart: sitePages.map((page) => ({
      "@type": "WebPage",
      name: page.name,
      url: absoluteUrl(page.path),
      description: page.description,
    })),
  },
]

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
      className={cn("antialiased", sfPro.variable)}
    >
      <body>
        <ThemeProvider>
          <JsonLd data={siteJsonLd} />
          <ViewTransition name="page">{children}</ViewTransition>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
