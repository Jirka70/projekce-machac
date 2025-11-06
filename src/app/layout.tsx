import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Projekce Machač | Architektonické studio a projekční kancelář",
  description:
    "Navrhujeme komerční objekty, bytové a rodinné domy. Máme kancelář v Pardubicích, Praze a navrhujeme po celém Česku. 200+ staveb na míru, 20 let praxe.",
  keywords: [
    "architektonické studio",
    "projekční kancelář",
    "projekce",
    "rodinné domy",
    "bytové domy",
    "komerční objekty",
    "Pardubice",
    "Praha",
  ],
  authors: [{ name: "Projekce Machač" }],
  openGraph: {
    title: "Projekce Machač | Architektonické studio a projekční kancelář",
    description: "Navrhujeme komerční objekty, bytové a rodinné domy. 200+ staveb na míru, 20 let praxe.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Projekce Machač",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekce Machač | Architektonické studio a projekční kancelář",
    description: "Navrhujeme komerční objekty, bytové a rodinné domy. 200+ staveb na míru, 20 let praxe.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Projekce Machač",
              url: "https://projekcemachac.cz",
              logo: "https://projekcemachac.cz/logo.png",
              foundingDate: "2014",
              founder: {
                "@type": "Person",
                name: "Ing. Matěj Machač",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+420704205357",
                  contactType: "customer service",
                  email: "machac@projekcemachac.cz",
                  availableLanguage: ["Czech"],
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Pardubice",
                  addressCountry: "CZ",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Praha",
                  addressCountry: "CZ",
                },
              ],
              sameAs: ["https://www.facebook.com/projekcemachac", "https://www.instagram.com/projekcemachac"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
