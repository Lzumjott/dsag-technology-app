import { Mail, Globe, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border/50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">RC</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">RealCore Group</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ihr strategischer Partner fuer die digitale Transformation mit SAP. 
              Wir begleiten Sie auf dem Weg in die Zukunft.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@realcore-group.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-primary" />
                <span>www.realcore-group.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>DSAG Technologietage 2026</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Sprechen Sie uns an
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Erfahren Sie, wie RealCore Group Ihnen bei der Umsetzung dieser Technologietrends helfen kann.
            </p>
            <a
              href="mailto:info@realcore-group.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} RealCore Group. Alle Rechte vorbehalten. | DSAG Technologietage 2026
        </div>
      </div>
    </footer>
  )
}
