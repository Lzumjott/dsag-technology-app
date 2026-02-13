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
    <section id="trends" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Technologische Trends
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Filtern Sie nach Kategorien oder suchen Sie gezielt nach Technologien, SAP-Loesungen und Alternativen.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Trends durchsuchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "Trend" : "Trends"} gefunden
        </div>

        {/* Trend Cards Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {filtered.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-16 text-center">
            <p className="text-muted-foreground">
              Keine Trends fuer diese Filterung gefunden.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
