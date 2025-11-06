"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Calendar, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: 200,
    suffix: "+",
    label: "Staveb na míru",
  },
  {
    icon: Calendar,
    value: 20,
    suffix: "",
    label: "Let praxe",
  },
  {
    icon: TrendingUp,
    value: 1350,
    suffix: "+ mil. Kč",
    label: "Prostavěno",
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
