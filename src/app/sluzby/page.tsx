import Header from "@/components/header"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Služby | Projekce Machač",
  description:
    "Komplexní architektonické a projekční služby: studie, projektová dokumentace, inženýring, jednání s úřady. Vše pod jednou střechou.",
}

export default function ServicesPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <Services />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
