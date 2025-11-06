import Link from "next/link"
import { Building2, MapPin, Phone, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Služby", href: "/sluzby" },
    { name: "Postup", href: "/postup" },
    { name: "Reference", href: "/reference" },
    { name: "Hodnocení", href: "/hodnoceni" },
    { name: "Ceník", href: "/cenik" },
    { name: "O nás", href: "/o-nas" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  legal: [
    { name: "Ochrana osobních údajů", href: "#" },
    { name: "Obchodní podmínky", href: "#" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg text-foreground">Projekce Machač</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Architektonické studio a projekční kancelář. Navrhujeme komerční objekty, bytové a rodinné domy po celém
              Česku.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Navigace</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>704 205 357</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>machac@projekcemachac.cz</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Pardubice, Praha</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Provozovatel</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>IČO: 76675190</li>
              <li>DIČ: CZ8910304656</li>
              <li>DS: jeqwgja</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Projekce Machač. Všechna práva vyhrazena.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
