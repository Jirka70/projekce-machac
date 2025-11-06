"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Copy, Check, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const offices = [
  {
    city: "Pardubice",
    address: "Pardubice, Česká republika",
    icon: MapPin,
  },
  {
    city: "Praha",
    address: "Praha, Česká republika",
    icon: MapPin,
  },
]

export default function Contact() {
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = (text: string, type: "phone" | "email") => {
    navigator.clipboard.writeText(text)
    if (type === "phone") {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    } else {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
    toast({
      title: "Zkopírováno",
      description: `${type === "phone" ? "Telefon" : "E-mail"} byl zkopírován do schránky.`,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Zpráva odeslána",
      description: "Děkujeme za váš zájem. Ozveme se vám co nejdříve.",
    })
  }

  return (
    <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Kontaktujte nás
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Rádi zodpovíme vaše dotazy a připravíme nezávaznou cenovou nabídku.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Kontaktní formulář</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Jméno a příjmení</Label>
                    <Input id="name" placeholder="Jan Novák" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="jan.novak@email.cz" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+420 123 456 789" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Zpráva</Label>
                    <Textarea
                      id="message"
                      placeholder="Popište nám váš projekt..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <Checkbox id="consent" required />
                    <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                      Souhlasím se zpracováním osobních údajů pro účely kontaktování a zpracování nabídky.
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-2xl">
                    Odeslat zprávu
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Přímý kontakt</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-foreground">704 205 357</p>
                        <p className="text-xs text-muted-foreground">Po–Pá, 9:00–16:00</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard("704205357", "phone")}
                      className="rounded-xl"
                    >
                      {copiedPhone ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <p className="text-sm font-medium text-foreground">machac@projekcemachac.cz</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard("machac@projekcemachac.cz", "email")}
                      className="rounded-xl"
                    >
                      {copiedEmail ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <office.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Sledujte nás</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-xl bg-transparent" asChild>
                    <a
                      href="https://www.facebook.com/projekcemachac"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl bg-transparent" asChild>
                    <a
                      href="https://www.instagram.com/projekcemachac"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
