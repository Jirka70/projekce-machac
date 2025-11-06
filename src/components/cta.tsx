"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  "Nezávazná cenová nabídka do 1 týdne",
  "Konzultace s hlavním projektantem",
  "Přesný propočet ceny realizace",
  "Databáze ověřených dodavatelů",
  "Systematický postup od A do Z",
]

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Začněte s námi plánovat svou stavbu
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Získejte nezávaznou cenovou nabídku a zjistěte, jak vám můžeme pomoci s vaším projektem.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="rounded-2xl text-base px-8 group">
                  <Link href="/kontakt">
                    Získat nezávaznou nabídku
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
