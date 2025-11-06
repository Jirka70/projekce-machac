"use client"

import { motion } from "framer-motion"
import { FileBadge, Database, Calculator, MessagesSquare, Pickaxe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const differentiators = [
  {
    icon: FileBadge,
    title: "Dokumentace podle které se staví",
    description:
      "Spojujeme SP a prováděcí dokumentaci, klient neplatí 2×. Naše projekty jsou natolik detailní, že se podle nich dá přímo stavět.",
  },
  {
    icon: Database,
    title: "Databáze stavebních firem a řemeslníků",
    description: "Stovky ověřených kontaktů zdarma. Pomůžeme vám najít kvalitní dodavatele pro realizaci vaší stavby.",
  },
  {
    icon: Calculator,
    title: "Cena realizace stavby",
    description:
      "Přesný propočet ještě před projektem, návrh dle rozpočtu investora. Víte předem, kolik vás stavba bude stát.",
  },
  {
    icon: MessagesSquare,
    title: "Systematická komunikace",
    description:
      "Systematický postup, mnoho mailů a telefonátů, propracované studie. Jste informováni v každé fázi projektu.",
  },
  {
    icon: Pickaxe,
    title: "Nestřílíme od pasu",
    description:
      "Sondy (např. hydrogeologický průzkum) zajistí správné základy a úsporu nákladů. Předcházíme problémům při realizaci.",
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            5 zásadních rozdílů
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Co nás odlišuje od ostatních projekčních kanceláří a proč si vybrat právě nás.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
