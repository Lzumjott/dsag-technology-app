import { Mail, Globe, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="kontakt" className="safe-bottom border-t border-border/50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:gap-12 md:grid md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
                <span className="font-display text-xs font-bold text-primary-foreground sm:text-sm">RC</span>
              </div>
              <span className="font-display text-base font-bold text-foreground sm:text-lg">RealCore Group</span>
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              Ihr strategischer Partner fuer die digitale Transformation mit SAP. 
              Wir begleiten Sie auf dem Weg in die Zukunft.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:info@realcore-group.com" className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors active:text-foreground sm:text-sm hover:text-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>info@realcore-group.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.realcore-group.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors active:text-foreground sm:text-sm hover:text-foreground">
                  <Globe className="h-4 w-4 shrink-0 text-primary" />
                  <span>www.realcore-group.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-[13px] text-muted-foreground sm:text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>DSAG Technologietage 2026</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">
              Sprechen Sie uns an
            </h3>
            <p className="mb-4 text-[13px] text-muted-foreground sm:text-sm">
              Erfahren Sie, wie RealCore Group Ihnen bei der Umsetzung dieser Technologietrends helfen kann.
            </p>
            <a
              href="mailto:info@realcore-group.com"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all active:brightness-90 sm:rounded-lg sm:py-2.5 hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-[11px] text-muted-foreground sm:mt-12 sm:pt-8 sm:text-xs">
          &copy; {new Date().getFullYear()} RealCore Group. Alle Rechte vorbehalten. | DSAG Technologietage 2026
        </div>
      </div>
    </footer>
  )
}
