"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, FileSpreadsheet, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium"
            >
              <Sparkles className="h-4 w-4" />
              Architektonické studio a projekční kancelář
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Navrhujeme <span className="text-accent">komerční objekty</span>,<br />
              bytové a rodinné domy
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Máme kancelář v Pardubicích, Praze a navrhujeme po celém Česku. Spojujeme kvalitní architekturu s
              ekonomickou efektivitou.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-2xl text-base px-8 group">
              <Link href="/kontakt">
                <FileSpreadsheet className="mr-2 h-5 w-5" />
                Získat nezávaznou cenovou nabídku
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl text-base px-8 bg-transparent">
              <Link href="/reference">
                <Building2 className="mr-2 h-5 w-5" />
                Prohlédnout návrhy staveb
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12"
          >
            {[
              { icon: Building2, text: "200+ staveb na míru" },
              { icon: Sparkles, text: "20 let praxe" },
              { icon: FileSpreadsheet, text: "1350+ mil. Kč prostavěno" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 shadow-lg"
              >
                <item.icon className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
