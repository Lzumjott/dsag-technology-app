"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { trends, type Category } from "@/lib/trends-data"
import { CategoryFilter } from "./category-filter"
import { TrendCard } from "./trend-card"

export function TrendsSection() {
  const [category, setCategory] = useState<Category>("Alle")
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return trends.filter((t) => {
      const matchesCat = category === "Alle" || t.category === category
      const matchesSearch =
        search === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [category, search])

  return (
    <section id="trends" className="scroll-mt-16 px-4 py-10 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
            Technologische Trends
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:mt-3 sm:text-base">
            Filtern Sie nach Kategorien oder suchen Sie gezielt nach Technologien, SAP-Loesungen und Alternativen.
          </p>
        </div>

        {/* Search - full width on mobile */}
        <div className="mb-4 sm:mb-6">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Trends durchsuchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 sm:rounded-lg sm:py-2.5"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6 sm:mb-8">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Results count */}
        <div className="mb-4 text-xs text-muted-foreground sm:mb-6 sm:text-sm">
          {filtered.length} {filtered.length === 1 ? "Trend" : "Trends"} gefunden
        </div>

        {/* Trend Cards - single column on mobile, 2 cols on desktop */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-2">
          {filtered.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-12 text-center sm:py-16">
            <p className="text-sm text-muted-foreground">
              Keine Trends fuer diese Filterung gefunden.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
