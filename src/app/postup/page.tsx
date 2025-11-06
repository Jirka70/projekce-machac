import Header from "@/components/header"
import ProcessTimeline from "@/components/process-timeline"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Postup spolupráce | Projekce Machač",
  description:
    "Transparentní postup od první schůzky přes tvorbu studie až po předání projektu a autorský dozor. Jasné milníky a platební podmínky.",
}

export default function ProcessPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <ProcessTimeline />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
