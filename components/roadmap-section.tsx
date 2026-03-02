"use client"

import { useRef, useState } from "react"
import { sapRoadmap } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

export function RoadmapSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeYear, setActiveYear] = useState(2026)
  const currentYear = 2026

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = dir === "left" ? -320 : 320
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="roadmap" className="grid-section scroll-mt-20 border-t border-border/50 py-[var(--grid-unit)]">
      <div className="grid-content">
        <div className="mb-[var(--grid-unit)] flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
                SAP Roadmap & Meilensteine
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Die wichtigsten SAP-Releases, regulatorischen Deadlines und Technologie-Meilensteine im Zeitverlauf.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Nach links scrollen"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Nach rechts scrollen"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Year pills on mobile */}
        <div className="no-scrollbar -mx-4 mb-4 flex gap-0 overflow-x-auto px-4 sm:hidden">
          {sapRoadmap.map(({ year }) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={cn(
                "shrink-0 border px-4 py-2 text-sm font-medium transition-all",
                activeYear === year
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground"
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Mobile card view */}
        <div className="sm:hidden">
          {sapRoadmap
            .filter(({ year }) => year === activeYear)
            .map(({ year, items }) => (
              <div key={year} className="border border-primary/30 bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-display text-2xl font-bold text-primary">{year}</span>
                  {year === currentYear && (
                    <span className="bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      AKTUELL
                    </span>
                  )}
                  {year < currentYear && (
                    <span className="bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      ABGESCHLOSSEN
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] leading-relaxed text-foreground">
                      <div className={cn(
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        year <= currentYear ? "bg-primary" : "bg-muted-foreground"
                      )} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden sm:block">
          {/* Timeline line */}
          <div className="relative mb-6 flex items-center">
            <div className="absolute inset-x-0 h-px bg-border" />
            <div className="relative flex w-full justify-between">
              {sapRoadmap.map(({ year }) => (
                <div key={year} className="relative flex flex-col items-center">
                  <div className={cn(
                    "relative z-10 flex h-8 w-8 items-center justify-center border-2 text-xs font-bold transition-all",
                    year === currentYear
                      ? "border-primary bg-primary text-primary-foreground"
                      : year < currentYear
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                        : "border-border bg-card text-muted-foreground"
                  )}>
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <span className={cn(
                    "mt-2 text-sm font-semibold",
                    year === currentYear ? "text-primary" : "text-muted-foreground"
                  )}>
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-0 overflow-x-auto pb-2"
          >
            {sapRoadmap.map(({ year, items }) => (
              <div
                key={year}
                className={cn(
                  "w-[calc(2*var(--grid-unit))] shrink-0 border p-5 transition-all lg:w-auto lg:flex-1 lg:shrink",
                  year === currentYear
                    ? "border-primary/30 bg-green-50 dark:bg-primary/20"
                    : "border-border/50 bg-card"
                )}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className={cn(
                    "font-display text-lg font-bold",
                    year === currentYear ? "text-primary" : "text-foreground"
                  )}>
                    {year}
                  </span>
                  {year === currentYear && (
                    <span className="bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      AKTUELL
                    </span>
                  )}
                  {year < currentYear && (
                    <span className="bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      DONE
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] leading-relaxed text-secondary-foreground">
                      <div className={cn(
                        "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                        year <= currentYear ? "bg-primary" : "bg-muted-foreground"
                      )} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
