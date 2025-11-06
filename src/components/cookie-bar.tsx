"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CookieBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md"
        >
          <Card className="bg-card/95 backdrop-blur-lg border-border shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-bold text-foreground">Používáme cookies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tento web používá cookies pro zlepšení uživatelského zážitku a analýzu návštěvnosti.
                  </p>
                  <div className="flex gap-2">
                    <Button onClick={acceptCookies} size="sm" className="rounded-xl flex-1">
                      Přijmout
                    </Button>
                    <Button onClick={declineCookies} variant="outline" size="sm" className="rounded-xl bg-transparent">
                      Odmítnout
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={declineCookies}
                  className="rounded-xl flex-shrink-0"
                  aria-label="Zavřít"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
