"use client"

import { useState, useMemo } from "react"
import { Search, SlidersHorizontal, X, Building2, FileText } from "lucide-react"
import Link from "next/link"
import { trends, type Category, type TrendStatus, type Industry, statusLabels, statusColors, industries, industryColors } from "@/lib/trends-data"
import { CategoryFilter } from "./category-filter"
import { TrendCard } from "./trend-card"
import { cn } from "@/lib/utils"

type SortOption = "maturity" | "adoption" | "title"

export function TrendsSection() {
  const [category, setCategory] = useState<Category>("Alle")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<TrendStatus | "all">("all")
  const [industryFilter, setIndustryFilter] = useState<Industry | "all">("all")
  const [sortBy, setSortBy] = useState<SortOption>("maturity")
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    const result = trends.filter((t) => {
      const matchesCat = category === "Alle" || t.category === category
      const matchesStatus = statusFilter === "all" || t.status === statusFilter
      const matchesIndustry = industryFilter === "all" || t.industries.includes(industryFilter)
      const q = search.toLowerCase()
      const matchesSearch =
        search === "" ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.sapSolutions.some((s) => s.name.toLowerCase().includes(q)) ||
        t.alternatives.some((a) => a.name.toLowerCase().includes(q)) ||
        t.useCases.some((u) => u.toLowerCase().includes(q))
      return matchesCat && matchesSearch && matchesStatus && matchesIndustry
    })

    switch (sortBy) {
      case "maturity":
        return result.sort((a, b) => b.maturityPercent - a.maturityPercent)
      case "adoption":
        return result.sort((a, b) => b.marketAdoption - a.marketAdoption)
      case "title":
        return result.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return result
    }
  }, [category, search, statusFilter, industryFilter, sortBy])

  const activeFilterCount = (statusFilter !== "all" ? 1 : 0) + (category !== "Alle" ? 1 : 0) + (industryFilter !== "all" ? 1 : 0)

  return (
    <section id="trends" className="grid-section scroll-mt-20">
      <div className="grid-content">
        {/* Title area: full grid-unit height, text aligned to bottom */}
        <div className="flex min-h-[var(--grid-unit)] flex-col justify-end pb-[var(--grid-unit-eighth)]">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#111918] text-balance sm:text-3xl md:text-4xl">
            Technologische Trends
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[#767776] sm:mt-3 sm:text-base">
            Durchsuchen Sie {trends.length} Trends nach Kategorien, Status, SAP-Lösungen oder Schlüsselwörtern.
          </p>
        </div>

        {/* Search + Filter Toggle — pushed up into next grid row */}
        <div className="mt-[var(--grid-unit-eighth)] mb-4 flex gap-2 sm:mb-5">
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#767776]" />
            <input
              type="search"
              placeholder="Trends, SAP-Lösungen, Alternativen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-[#DADADA] bg-white py-3 pl-10 pr-4 text-sm text-[#111918] placeholder:text-[#767776] focus:border-[#80D800]/50 focus:outline-none focus:ring-1 focus:ring-[#80D800]/30 sm:py-2.5"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767776] hover:text-[#111918]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex h-[var(--grid-unit-quarter)] items-center gap-2 border px-3 text-sm transition-colors sm:px-4",
              showFilters || activeFilterCount > 0
                ? "border-[#80D800]/30 bg-[#80D800]/10 text-[#80D800]"
                : "border-[#DADADA] bg-white text-[#767776] hover:bg-[#E7E6E6]"
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
            {activeFilterCount > 0 && (
               <span className="flex h-5 w-5 items-center justify-center bg-[#80D800] text-[10px] font-bold text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Extended Filters */}
        {showFilters && (
          <div className="mb-4 border border-[#DADADA] bg-white p-3 sm:mb-5 sm:p-4">
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#767776]">
                  Reifegrad
                </label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={cn(
                      "border px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs",
                      statusFilter === "all" ? "border-[#80D800]/50 bg-[#80D800]/10 text-[#80D800]" : "border-[#DADADA] bg-[#E7E6E6] text-[#767776]"
                    )}
                  >
                    Alle
                  </button>
                  {(["established", "growing", "emerging", "future"] as TrendStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className={cn(
                        "border px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs",
                        statusFilter === s ? statusColors[s] : "border-[#DADADA] bg-[#E7E6E6] text-[#767776]"
                      )}
                    >
                      {statusLabels[s]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#767776]">
                  Sortierung
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {([
                    { key: "maturity" as SortOption, label: "Reifegrad" },
                    { key: "adoption" as SortOption, label: "Adoption" },
                    { key: "title" as SortOption, label: "A-Z" },
                  ]).map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key)}
                      className={cn(
                        "border px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs",
                        sortBy === opt.key ? "border-[#80D800]/50 bg-[#80D800]/10 text-[#80D800]" : "border-[#DADADA] bg-[#E7E6E6] text-[#767776]"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Filter */}
            <div className="mt-3 border-t border-[#DADADA] pt-3">
              <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#767776]">
                <Building2 className="h-3 w-3" />
                Branche
              </label>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setIndustryFilter("all")}
                  className={cn(
                    "border px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs",
                    industryFilter === "all" ? "border-[#80D800]/50 bg-[#80D800]/10 text-[#80D800]" : "border-[#DADADA] bg-[#E7E6E6] text-[#767776]"
                  )}
                >
                  Alle
                </button>
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustryFilter(ind)}
                    className={cn(
                      "border px-2.5 py-1 text-[11px] font-medium transition-all sm:text-xs",
                      industryFilter === ind ? industryColors[ind] : "border-[#DADADA] bg-[#E7E6E6] text-[#767776]"
                    )}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {activeFilterCount > 0 && (
              <button
                onClick={() => { setStatusFilter("all"); setCategory("Alle"); setIndustryFilter("all"); }}
                className="mt-3 text-[11px] text-[#80D800] underline underline-offset-2 sm:text-xs"
              >
                Alle Filter zurücksetzen
              </button>
            )}
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-5 sm:mb-6">
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Results count + Report Link */}
        <div className="mb-4 flex items-center justify-between sm:mb-5">
          <div className="text-xs text-[#767776] sm:text-sm">
            {filtered.length} von {trends.length} Trends angezeigt
            {search && <span className="ml-1">für &quot;{search}&quot;</span>}
          </div>
          {filtered.length > 0 && (
            <Link
              href={`/report?${industryFilter !== "all" ? `industry=${industryFilter}&` : ""}${category !== "Alle" ? `category=${category}` : ""}`}
              className="flex items-center gap-1.5 border border-[#DADADA] bg-[#E7E6E6] px-3 py-1.5 text-xs font-medium text-[#111918] transition-colors hover:bg-[#DADADA]"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Report exportieren</span>
              <span className="sm:hidden">PDF</span>
            </Link>
          )}
        </div>

        {/* Trend Cards: aligned to background grid rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 0 }}>
          {filtered.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-dashed border-[#DADADA] py-12 text-center sm:py-16">
            <p className="text-sm text-[#767776]">
              Keine Trends für diese Filterung gefunden.
            </p>
            <button
              onClick={() => { setSearch(""); setCategory("Alle"); setStatusFilter("all"); setIndustryFilter("all"); }}
              className="mt-3 text-sm text-[#80D800] underline underline-offset-2"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
