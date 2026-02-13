"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-display text-sm font-bold text-primary-foreground">RC</span>
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              RealCore Group
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
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
          className="text-muted-foreground md:hidden"
          aria-label="Menu oeffnen"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#trends"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Trends
            </a>
            <a
              href="#uebersicht"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Uebersicht
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
