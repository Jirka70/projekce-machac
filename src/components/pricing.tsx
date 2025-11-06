"use client"

import { motion } from "framer-motion"
import { TrendingDown, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Investice, která se vyplatí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Naše dokumentace je natolik detailní, že se podle ní dá přímo stavět – levnější než běžná prováděcí
            dokumentace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-accent/10 border-accent/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <TrendingDown className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-xl font-bold text-foreground mb-2">
                "Investice desítek tisíc do přípravy stavby zachrání statisíce během realizace!"
              </p>
              <p className="text-sm text-muted-foreground">
                Díky detailním analýzám a propočtům předcházíme drahým chybám při realizaci.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Co získáte v ceně projektu</h3>
              <div className="space-y-4">
                {[
                  "Dokumentace pro stavební povolení i realizaci v jednom",
                  "Přesný propočet ceny realizace ještě před zahájením projektu",
                  "Databáze ověřených stavebních firem a řemeslníků zdarma",
                  "Detailní analýzy a sondy (hydrogeologie, statika, energetika)",
                  "Systematická komunikace a průběžné konzultace",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
