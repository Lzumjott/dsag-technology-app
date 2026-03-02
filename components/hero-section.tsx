"use client"

import { ArrowRight, Calendar } from "lucide-react"
import { trends } from "@/lib/trends-data"
import { AnimatedCounter } from "./animated-counter"

export function HeroSection() {
  const totalSap = trends.reduce((acc, t) => acc + t.sapSolutions.length, 0)
  const avgAdoption = Math.round(trends.reduce((acc, t) => acc + t.marketAdoption, 0) / trends.length)
  const totalAlternatives = trends.reduce((acc, t) => acc + t.alternatives.length, 0)

  const stats = [
    { target: trends.length, label: "Tech-Trends", suffix: "" },
    { target: totalSap, label: "SAP-Lösungen", suffix: "" },
    { target: totalAlternatives, label: "Alternativen", suffix: "" },
    { target: avgAdoption, label: "Avg. Adoption", suffix: "%" },
    { target: 10, label: "Kategorien", suffix: "" },
  ]

  return (
    <section className="relative min-h-[calc(4*var(--grid-unit))]">
      {/* Asymmetric hero layout: 5 of 8 columns on desktop */}
      <div className="grid-section">
        <div className="col-span-full lg:col-span-5 py-[var(--grid-unit)] px-[var(--grid-unit)]">

              <h1 className="mt-10 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-[#111918] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Technologie-Trends der{" "}
                <span className="text-[#80D800]">Digitalisierung</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#767776] text-pretty sm:mt-6 sm:text-lg md:text-xl">
                Entdecken Sie {trends.length} aktuelle und zukünftige Technologietrends mit SAP-Lösungen,
                Gartner-Einordnung, Marktdaten und realen Praxisbeispielen für Ihr Unternehmen.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[13px] text-[#767776] sm:mt-8 sm:text-sm">
                <Calendar className="h-4 w-4 text-[#80D800]" />
                <span>Präsentiert von <strong className="text-[#111918]">RealCore Group</strong></span>
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="#trends"
                  className="inline-flex w-[var(--grid-unit)] min-w-[160px] items-center justify-center gap-2 bg-[#80D800] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Trends entdecken
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#gartner"
                  className="inline-flex items-center gap-2 text-sm text-[#767776] transition-colors hover:text-[#80D800]"
                >
                  Gartner Hype Cycle
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#roadmap"
                  className="inline-flex items-center gap-2 text-sm text-[#767776] transition-colors hover:text-[#80D800]"
                >
                  SAP Roadmap
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
        </div>
        {/* Right 3 columns: Background-Grid visible (no white fill) */}
      </div>

      {/* Stats row: each stat = 1 grid column, with right-side indentation */}
      <div className="grid-row">
        {/* Left spacer (1 column) */}
        <div className="hidden sm:block" />
        {stats.map((stat) => (
          <div key={stat.label} className="px-[var(--grid-unit-eighth)] h-[var(--grid-unit)] flex flex-col justify-end pb-[var(--grid-unit-eighth)]">
            <div className="font-display text-xl font-bold text-[#80D800] sm:text-2xl md:text-3xl">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="mt-0.5 text-[11px] text-[#767776] sm:mt-1 sm:text-xs">{stat.label}</div>
          </div>
        ))}
        {/* Right spacer: 2 grid-unit indentation from right edge (desktop only, 8-col grid) */}
        <div className="hidden xl:block" />
        <div className="hidden xl:block" />
      </div>
    </section>
  )
}
