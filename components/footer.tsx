import { Mail, Globe, MapPin, Phone, Linkedin, ArrowRight } from "lucide-react"
import { trends } from "@/lib/trends-data"

export function Footer() {
  const kritisch = trends.filter((t) => t.investmentPriority === "Kritisch")

  return (
    <footer id="kontakt" className="safe-bottom border-t border-[#DADADA]">
      {/* CTA Banner */}
      <div className="grid-section border-b border-[#DADADA] bg-white py-[var(--grid-unit)]">
        <div className="grid-content text-center">
          <h2 className="font-display text-2xl font-bold text-[#111918] text-balance sm:text-3xl">
            Bereit für die digitale Transformation?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#767776] sm:text-base">
            RealCore Group begleitet Sie bei {kritisch.length} kritischen Technologietrends und {trends.filter(t => t.realcoreExpertise).length} Kompetenzfeldern.
            Lassen Sie uns gemeinsam Ihre Roadmap gestalten.
          </p>
          <div className="mt-6 flex flex-col items-center gap-0 sm:flex-row sm:justify-center">
            <a
              href="mailto:info@realcore.de"
              className="flex min-w-[var(--grid-unit)] items-center justify-center gap-2 bg-[#80D800] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
            >
              Gespräch vereinbaren
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.realcore.de"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[var(--grid-unit)] items-center justify-center gap-2 border border-[#DADADA] bg-white px-6 py-3 text-sm font-semibold text-[#111918] transition-colors hover:bg-[#E7E6E6] sm:w-auto"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid-section bg-[#E7E6E6] py-[var(--grid-unit)]">
        <div className="grid-content">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-3 flex items-center gap-2 sm:mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/RealCore_Group_light.png"
                  alt="RealCore Group"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-[13px] leading-relaxed text-[#767776] sm:text-sm">
                Ihr strategischer Partner für die digitale Transformation mit SAP.
                Von der Strategie über die Implementierung bis zum laufenden Betrieb.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-[var(--grid-unit-eighth)] font-display text-sm font-semibold uppercase tracking-wider text-[#111918]">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  { href: "#trends", label: "Technologie-Trends" },
                  { href: "#gartner", label: "Gartner Hype Cycle" },
                  { href: "#übersicht", label: "Übersicht & Bewertung" },
                  { href: "#sap-matrix", label: "SAP-Abdeckungsmatrix" },
                  { href: "#roadmap", label: "SAP Roadmap" },
                  { href: "#expertise", label: "RealCore Expertise" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-[13px] text-[#767776] transition-colors sm:text-sm hover:text-[#80D800]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-[var(--grid-unit-eighth)] font-display text-sm font-semibold uppercase tracking-wider text-[#111918]">
                Kontakt
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="mailto:info@realcore.de" className="flex items-center gap-2 text-[13px] text-[#767776] transition-colors sm:text-sm hover:text-[#80D800]">
                    <Mail className="h-4 w-4 shrink-0 text-[#80D800]" />
                    info@realcore.de
                  </a>
                </li>
                <li>
                  <a href="https://www.realcore.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-[#767776] transition-colors sm:text-sm hover:text-[#80D800]">
                    <Globe className="h-4 w-4 shrink-0 text-[#80D800]" />
                    www.realcore.de
                  </a>
                </li>
                <li>
                  <a href="tel:+4971120898600" className="flex items-center gap-2 text-[13px] text-[#767776] transition-colors sm:text-sm hover:text-[#80D800]">
                    <Phone className="h-4 w-4 shrink-0 text-[#80D800]" />
                    +49 711 208986-00
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[13px] text-[#767776] sm:text-sm">
                  <MapPin className="h-4 w-4 shrink-0 text-[#80D800]" />
                  Stuttgart, Deutschland
                </li>
              </ul>
            </div>

            {/* Event Info */}
            <div>
              <h3 className="mb-[var(--grid-unit-eighth)] font-display text-sm font-semibold uppercase tracking-wider text-[#111918]">
                DSAG Technologietage 2026
              </h3>
              <div className="border border-[#DADADA] bg-white p-[var(--grid-unit-eighth)]">
                <p className="text-[13px] text-[#767776] sm:text-sm">
                  Besuchen Sie uns an unserem Stand und erfahren Sie live, wie wir diese Technologietrends
                  in erfolgreiche SAP-Projekte umsetzen.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/realcore-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center border border-[#DADADA] bg-white text-[#767776] transition-colors hover:bg-[#E7E6E6] hover:text-[#80D800]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#DADADA] pt-6 sm:mt-12 sm:pt-8">
            <div className="flex flex-col items-center gap-3 text-center text-[11px] text-[#767776] sm:flex-row sm:justify-between sm:text-xs">
              <span>&copy; {new Date().getFullYear()} RealCore Group GmbH. Alle Rechte vorbehalten.</span>
              <span>DSAG Technologietage 2026 | {trends.length} Trends | {trends.reduce((a, t) => a + t.sapSolutions.length, 0)} SAP-Lösungen</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
