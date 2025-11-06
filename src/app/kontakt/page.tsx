import Header from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | Projekce Machač",
  description:
    "Kontaktujte nás pro nezávaznou cenovou nabídku. Kanceláře v Pardubicích a Praze. Tel: 704 205 357, Email: machac@projekcemachac.cz",
}

export default function ContactPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <Contact />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
