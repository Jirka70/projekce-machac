import Header from "@/components/header"
import Reviews from "@/components/reviews"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hodnocení | Projekce Machač",
  description:
    "Celkové hodnocení 4.9 na Google. Přečtěte si recenze našich spokojených klientů a jejich zkušenosti s našimi službami.",
}

export default function ReviewsPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
