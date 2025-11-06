import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"

export default function Home() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
