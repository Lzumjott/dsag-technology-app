import { Mail, Globe, MapPin, Phone, Linkedin, ArrowRight } from "lucide-react"
import { trends } from "@/lib/trends-data"

export function Footer() {
  const kritisch = trends.filter((t) => t.investmentPriority === "Kritisch")

  return (
    <footer id="kontakt" className="safe-bottom border-t border-border/50">
      {/* CTA Banner */}
      <div className="border-b border-border/50 bg-primary/5 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground text-balance sm:text-3xl">
            Bereit fuer die digitale Transformation?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            RealCore Group begleitet Sie bei {kritisch.length} kritischen Technologietrends und {trends.filter(t => t.realcoreExpertise).length} Kompetenzfeldern.
            Lassen Sie uns gemeinsam Ihre Roadmap gestalten.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="mailto:info@realcore-group.com"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all active:brightness-90 sm:w-auto sm:rounded-lg sm:py-3 hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Gespraech vereinbaren
            </a>
            <a
              href="https://www.realcore-group.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors active:bg-muted sm:w-auto sm:rounded-lg sm:py-3 hover:bg-muted"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
                  <span className="font-display text-xs font-bold text-primary-foreground sm:text-sm">RC</span>
                </div>
                <span className="font-display text-base font-bold text-foreground sm:text-lg">RealCore Group</span>
              </div>
              <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                Ihr strategischer Partner fuer die digitale Transformation mit SAP. 
                Von der Strategie ueber die Implementierung bis zum laufenden Betrieb.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { href: "#trends", label: "Technologie-Trends" },
                  { href: "#gartner", label: "Gartner Hype Cycle" },
                  { href: "#uebersicht", label: "Uebersicht & Bewertung" },
                  { href: "#sap-matrix", label: "SAP-Abdeckungsmatrix" },
                  { href: "#roadmap", label: "SAP Roadmap" },
                  { href: "#expertise", label: "RealCore Expertise" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[13px] text-muted-foreground transition-colors active:text-foreground sm:text-sm hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
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
                    info@realcore-group.com
                  </a>
                </li>
                <li>
                  <a href="https://www.realcore-group.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors active:text-foreground sm:text-sm hover:text-foreground">
                    <Globe className="h-4 w-4 shrink-0 text-primary" />
                    www.realcore-group.com
                  </a>
                </li>
                <li>
                  <a href="tel:+4971120898600" className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors active:text-foreground sm:text-sm hover:text-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    +49 711 208986-00
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[13px] text-muted-foreground sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Stuttgart, Deutschland
                </li>
              </ul>
            </div>

            {/* Event Info */}
            <div>
              <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">
                DSAG Technologietage 2026
              </h3>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-[13px] text-muted-foreground sm:text-sm">
                  Besuchen Sie uns an unserem Stand und erfahren Sie live, wie wir diese Technologietrends 
                  in erfolgreiche SAP-Projekte umsetzen.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/realcore-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/50 pt-6 sm:mt-12 sm:pt-8">
            <div className="flex flex-col items-center gap-3 text-center text-[11px] text-muted-foreground sm:flex-row sm:justify-between sm:text-xs">
              <span>&copy; {new Date().getFullYear()} RealCore Group GmbH. Alle Rechte vorbehalten.</span>
              <span>DSAG Technologietage 2026 | {trends.length} Trends | {trends.reduce((a, t) => a + t.sapSolutions.length, 0)} SAP-Loesungen</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
