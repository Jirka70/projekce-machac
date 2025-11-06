import Header from "@/components/header"
import Projects from "@/components/projects"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import CookieBar from "@/components/cookie-bar"
import BackgroundBlobs from "@/components/background-blobs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reference | Projekce Machač",
  description:
    "Přes 200 realizovaných projektů rodinných domů, bytových domů, komerčních objektů a developerských projektů po celém Česku.",
}

export default function ProjectsPage() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <main className="pt-24 lg:pt-32">
        <Projects />
        <CTA />
      </main>
      <Footer />
      <CookieBar />
    </>
  )
}
