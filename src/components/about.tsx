"use client"

import { motion } from "framer-motion"
import { Layers, FileCheck2, Calculator, Users2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Layers,
    title: "Propracované architektonické studie",
    description: "Promyšlená dispozice, estetika a kontext. Každý návrh je jedinečný a přizpůsobený vašim potřebám.",
  },
  {
    icon: FileCheck2,
    title: "Dokumentace pro realizaci",
    description: "Konkrétní materiály, spočítané parametry, proveditelnost. Projekty, podle kterých se skutečně staví.",
  },
  {
    icon: Calculator,
    title: "Ekonomické propočty a odborné analýzy",
    description: "Bez provizí, efektivní návrhy, průběžné sledování trhu. Víte předem, kolik vás stavba bude stát.",
  },
  {
    icon: Users2,
    title: "Spolupráce s odborníky",
    description: "Víceúrovňová kontrola (PBŘ, hygiena, sítě, statika, Feng Shui…). Kvalita ověřená odborníky.",
  },
]

export default function About() {
  return (
    <section id="o-nas" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">O nás</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Projekce Machač byla založena v roce 2014 Ing. Matějem Machačem, absolventem VUT Brno. Ročně realizujeme
            více než 30 objektů po celé České republice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <pillar.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ing. Matěj Machač – Hlavní projektant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolvent Fakulty architektury VUT v Brně s více než 20 lety praxe v oboru. Specializuje se na návrhy
                rodinných domů, bytových domů a komerčních objektů s důrazem na ekonomickou efektivitu a kvalitní
                architekturu.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
