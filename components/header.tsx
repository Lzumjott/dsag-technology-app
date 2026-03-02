"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "#trends", label: "Trends" },
  { href: "#gartner", label: "Hype Cycle" },
  { href: "#übersicht", label: "Übersicht" },
  { href: "#sap-matrix", label: "SAP-Matrix" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "/vergleich", label: "Vergleich", isPage: true },
  { href: "#kontakt", label: "Kontakt" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header className="safe-top sticky top-0 z-50 border-b border-[#DADADA] bg-white">
      <div className="grid-section">
        <div className="grid-content flex h-[var(--grid-unit-half)] items-center justify-between">
          {/* Logo: far left */}
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/RealCore_Group_light.png"
              alt="RealCore Group"
              className="h-8 w-auto"
            />
          </a>

          {/* Center navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#767776] transition-colors hover:text-[#80D800]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#767776] transition-colors hover:text-[#80D800]"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Right-aligned icons */}
          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center text-[#767776] transition-colors hover:bg-[#E7E6E6] md:hidden"
              aria-label={mobileOpen ? "Menu schließen" : "Menu öffnen"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[var(--grid-unit-half)] z-50 flex flex-col bg-white md:hidden">
          <nav className="flex flex-1 flex-col gap-0 px-4 pt-4">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-4 text-lg font-medium text-[#767776] transition-colors hover:bg-[#E7E6E6] hover:text-[#80D800]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-4 text-lg font-medium text-[#767776] transition-colors hover:bg-[#E7E6E6] hover:text-[#80D800]"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="mt-4 border-t border-[#DADADA] pt-4">
              <span className="inline-flex border border-[#DADADA] px-4 py-2 text-sm font-medium text-[#767776]">
                DSAG Technologietage 2026
              </span>
            </div>
          </nav>
          <div className="safe-bottom border-t border-[#DADADA] px-4 py-6">
            <a
              href="mailto:info@realcore.de"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#80D800] px-6 py-4 text-sm font-semibold text-white transition-all active:brightness-90 hover:brightness-110"
            >
              Kontakt aufnehmen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
