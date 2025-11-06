"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, FileSpreadsheet, Home, Building, Users2, ScrollText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: Building2,
    title: "Architektonické studie",
    description: "Komplexní architektonické návrhy s důrazem na estetiku a funkčnost.",
    category: "architektura",
  },
  {
    icon: FileSpreadsheet,
    title: "Projektová dokumentace",
    description: "Stavební povolení i prováděcí dokumentace v jednom balíčku.",
    category: "projekce",
  },
  {
    icon: Home,
    title: "Projekty rodinných domů",
    description: "Návrhy rodinných domů na míru podle vašich představ a potřeb.",
    category: "rodinne-domy",
  },
  {
    icon: Building,
    title: "Developerské projekty",
    description: "Bytové domy a komerční objekty pro developery.",
    category: "developerske",
  },
  {
    icon: Users2,
    title: "Jednání s úřady",
    description: "Inženýring a inženýrské služby, vyřízení všech povolení.",
    category: "inzenyring",
  },
  {
    icon: ScrollText,
    title: "Autorský dozor",
    description: "Kontrola realizace podle projektu, asistence při kolaudaci.",
    category: "dozor",
  },
]

const categories = [
  { id: "vse", label: "Vše" },
  { id: "architektura", label: "Architektura" },
  { id: "projekce", label: "Projekce" },
  { id: "rodinne-domy", label: "Rodinné domy" },
  { id: "developerske", label: "Developerské" },
  { id: "inzenyring", label: "Inženýring" },
  { id: "dozor", label: "Dozor" },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("vse")

  const filteredServices =
    activeCategory === "vse" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <section id="sluzby" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Vše pod jednou střechou
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Komplexní služby od architektonického návrhu až po kolaudaci stavby.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm rounded-full transition-all hover:scale-105"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
