"use client"

import { motion } from "framer-motion"
import { Circle, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    title: "První schůzka",
    description: "Postup, ukázky tvorby, definice poptávky.",
    duration: "1 den",
    payment: null,
  },
  {
    title: "Vytvoření cenové nabídky",
    description: "Přesná nabídka, termín zahájení, platební podmínky.",
    duration: "≈ 1 týden",
    payment: null,
  },
  {
    title: "První platba",
    description: "Záloha 1/3 z celé částky, podpis smlouvy.",
    duration: "1 den",
    payment: "1/3",
  },
  {
    title: "Druhá schůzka",
    description: "Formulář pro studii, zaměření parcely/objektu.",
    duration: "1–3 měsíce",
    payment: null,
  },
  {
    title: "Tvorba studie",
    description: "Půdorysy, 3D model, odůvodnění řešení, hrubý odhad ceny, odevzdání 1× studie (tištěně + PDF).",
    duration: "1–? měsíce",
    payment: null,
  },
  {
    title: "Malý projekt (80 %)",
    description:
      "Výkresy, případně přesný výpočet ceny, databáze kontaktů na firmy a řemeslníky. 80% rozpracování umožní položkový rozpočet a levné změny před dokončením.",
    duration: "1–3 měsíce",
    payment: null,
  },
  {
    title: "Druhá platba",
    description: "2/3 z celé částky.",
    duration: "1 den",
    payment: "2/3",
  },
  {
    title: "Provádění celého projektu + inženýring (96 %)",
    description: "Externí profese (PBŘ, PENB, statika…), vyjádření úřadů, zapracování do projektu.",
    duration: "2–? měsíce",
    payment: null,
  },
  {
    title: "Předání projektu (100 %)",
    description: "Stavební povolení, dopracování, předání 3× tištěně + elektronicky vč. vyjadřovaček.",
    duration: "1–3 měsíce",
    payment: "3/3",
  },
  {
    title: "Výstavba a autorský dozor",
    description: "Kontroly dle projektu, asistence s kolaudací (účtováno dle dohody).",
    duration: "Dle projektu",
    payment: null,
  },
]

export default function ProcessTimeline() {
  return (
    <section id="postup" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Postup spolupráce
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed mb-6">
            Transparentní proces od první schůzky až po kolaudaci stavby.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            Před osobní schůzkou shlédněte 22min video s postupem
          </Badge>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {step.payment ? (
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-accent" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {step.duration}
                          </Badge>
                          {step.payment && (
                            <Badge className="text-xs bg-accent text-accent-foreground">Platba {step.payment}</Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
