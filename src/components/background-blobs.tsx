"use client"

import { motion } from "framer-motion"

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 -left-4 w-96 h-96 rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light"
        style={{ backgroundColor: "oklch(0.646 0.222 41.116)" }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light"
        style={{ backgroundColor: "oklch(0.6 0.118 184.704)" }}
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.05, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light"
        style={{ backgroundColor: "oklch(0.828 0.189 84.429)" }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-soft-light"
        style={{ backgroundColor: "oklch(0.769 0.188 70.08)" }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
