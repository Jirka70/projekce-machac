"use client"

import { motion } from "framer-motion"
import { FileCheck2, Building2, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: FileCheck2,
    title: "Detailní analýzy",
    description: "Na každý detail máme zpracované analýzy – tvoříme kvalitní a ekonomické domy.",
  },
  {
    icon: Building2,
    title: "Projekty pro realizaci",
    description: "Podle našich projektů se skutečně staví – nejde jen o papíry pro úřady.",
  },
  {
    icon: Star,
    title: "Kvalitní architektura",
    description: "Tvoříme kvalitní architekturu, která je dobře hodnocena klienty i odborníky.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Proč spolupracovat s Projekcí Machač
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Kombinujeme architektonickou kvalitu s ekonomickou efektivitou a praktickou realizovatelností.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
