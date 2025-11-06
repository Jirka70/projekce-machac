"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Michal Škultéty",
    date: "před měsícem",
    rating: 5,
    text: "jednal jsem s pani Outratovou a konzultoval jsem s ni muj zamer prestavby RD na bytove jednotky. Projekt je mensiho razu a tudiz jsme se dohodli, ze bude vyhodnejsi, kdyz kontaktuju mensiho projektanta. Pani Outratova byla tak hodna, ze mi poskytla kontakty na proverene projektanty. Timto ji chci velmi podekovat",
  },
  {
    name: "Petr Turek",
    date: "před 2 lety",
    rating: 5,
    text: "Díky panu Machačovi se nám splnil sen o vlastním bydlení. Komunikace po celou dobu probíhala perfektně. Věci, které nám zpočátku připadali zbytečné nyní s odstupem času velmi oceňujeme. Šetříme energie a máme prostorné bydlení v blízkosti centra obce. Velmi doporučuji si sjednat schůzku a vyslechnout si pana Machače."  
  },
  {
    name: "Martin Skřivánek",
    date: "před 8 měsíci",
    rating: 5,
    text: "Oceňuji pana Machače za vstřícnou komunikaci a pomoc při zacílení na pro nás vhodného specialistu, když se naše poptávka dostatečně neprotínala s jeho službami."
  },
]

export default function Reviews() {
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
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            4.9 – Celkové hodnocení na Google
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Co říkají naši klienti o spolupráci s námi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
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
