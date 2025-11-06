import Header from "@/components/header"
import About from "@/components/about"
import Differentiators from "@/components/differentiators"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O nás | Projekce Machač",
  description:
    "Architektonické studio a projekční kancelář založená v roce 2014. Ročně realizujeme 30+ objektů s důrazem na kvalitu, ekonomičnost a propracované analýzy.",
}

export default function AboutPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <About />
        <Differentiators />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
