"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Moderní rodinný dům",
    category: "rodinne",
    image: "/modern-family-house-architecture.jpg",
  },
  {
    title: "Bytový dům",
    category: "bytove",
    image: "/apartment-building-modern-architecture.jpg",
  },
  {
    title: "Komerční objekt",
    category: "komercni",
    image: "/commercial-building-modern-architecture.jpg",
  },
  {
    title: "Rodinný dům se studiem",
    category: "rodinne",
    image: "/family-house-with-studio-architecture.jpg",
  },
  {
    title: "Rezidenční výstavba",
    category: "developerske",
    image: "/residential-development-architecture.jpg",
  },
  {
    title: "Rekonstrukce historického objektu",
    category: "komercni",
    image: "/historic-building-renovation-architecture.jpg",
  },
]

const categories = [
  { id: "vse", label: "Vše" },
  { id: "rodinne", label: "Rodinné domy" },
  { id: "bytove", label: "Bytové domy" },
  { id: "komercni", label: "Komerční objekty" },
  { id: "developerske", label: "Developerské projekty" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("vse")

  const filteredProjects =
    activeCategory === "vse" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="reference" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Naše reference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Podívejte se na některé z našich realizovaných projektů.
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
