import Header from "@/components/header"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceník | Projekce Machač",
  description:
    "Transparentní ceník projektových služeb. Dokumentace, podle které se skutečně staví, za férovou cenu. Investice do přípravy zachrání statisíce při realizaci.",
}

export default function PricingPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
