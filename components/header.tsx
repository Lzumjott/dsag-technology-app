"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="safe-top sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary sm:h-9 sm:w-9">
            <span className="font-display text-xs font-bold text-primary-foreground sm:text-sm">RC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight tracking-tight text-foreground sm:text-lg">
              RealCore Group
            </span>
            <span className="text-[10px] leading-tight text-muted-foreground sm:hidden">
              DSAG 2026
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <a href="#trends" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Trends
          </a>
          <a href="#uebersicht" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Uebersicht
          </a>
          <a href="#kontakt" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Kontakt
          </a>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            DSAG 2026
          </span>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={mobileOpen ? "Menu schliessen" : "Menu oeffnen"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[57px] z-50 flex flex-col bg-background/98 backdrop-blur-xl md:hidden">
          <nav className="flex flex-1 flex-col gap-1 px-4 pt-4">
            {[
              { href: "#trends", label: "Trends" },
              { href: "#uebersicht", label: "Uebersicht" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center rounded-xl px-4 py-4 text-lg font-medium text-foreground transition-colors active:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 border-t border-border/50 pt-4">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                DSAG Technologietage 2026
              </span>
            </div>
          </nav>
          <div className="safe-bottom border-t border-border/50 px-4 py-6">
            <a
              href="mailto:info@realcore-group.com"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all active:brightness-90"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
