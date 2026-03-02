"use client"

import { useState } from "react"
import { trends, categories, statusColors, statusLabels, type Category } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, Clock, AlertTriangle, Grid3X3 } from "lucide-react"

type ViewMode = "category" | "status"

export function SapCoverageMatrix() {
  const [viewMode, setViewMode] = useState<ViewMode>("category")

  const categoryData = categories.filter((c) => c !== "Alle").map((cat) => {
    const catTrends = trends.filter((t) => t.category === cat)
    const totalSap = catTrends.reduce((acc, t) => acc + t.sapSolutions.filter((s) => s.available).length, 0)
    const plannedSap = catTrends.reduce((acc, t) => acc + t.sapSolutions.filter((s) => !s.available).length, 0)
    const withoutSap = catTrends.filter((t) => t.sapSolutions.length === 0).length
    const avgMaturity = catTrends.length > 0 ? Math.round(catTrends.reduce((acc, t) => acc + t.maturityPercent, 0) / catTrends.length) : 0
    return { category: cat, count: catTrends.length, totalSap, plannedSap, withoutSap, avgMaturity, trends: catTrends }
  }).sort((a, b) => b.totalSap - a.totalSap)

  const totalSapAvailable = trends.reduce((acc, t) => acc + t.sapSolutions.filter((s) => s.available).length, 0)
  const totalSapPlanned = trends.reduce((acc, t) => acc + t.sapSolutions.filter((s) => !s.available).length, 0)
  const totalAlternatives = trends.reduce((acc, t) => acc + t.alternatives.length, 0)
  const coveragePercent = Math.round((trends.filter((t) => t.sapSolutions.length > 0).length / trends.length) * 100)

  return (
    <section id="sap-matrix" className="grid-section scroll-mt-20 border-t border-border/50 py-[var(--grid-unit)]">
      <div className="grid-content">
        <div className="mb-[var(--grid-unit)]">
          <div className="mb-2 flex items-center gap-2">
            <Grid3X3 className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
              SAP-Abdeckungsmatrix
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Detaillierte Analyse der SAP-Lösungsabdeckung pro Kategorie mit {totalSapAvailable + totalSapPlanned} SAP-Lösungen und {totalAlternatives} Alternativen.
          </p>
        </div>

        {/* Summary Bar */}
        <div className="mb-6 border border-border/50 bg-card p-[var(--grid-unit-eighth)] sm:mb-8">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{coveragePercent}%</div>
              <div className="text-[13px] text-muted-foreground sm:text-sm">
                der Trends mit SAP-Lösungen abgedeckt
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="text-center">
                <div className="font-display text-xl font-bold text-emerald-400 sm:text-2xl">{totalSapAvailable}</div>
                <div className="text-[10px] text-muted-foreground sm:text-xs">Verfügbar</div>
              </div>
              <div className="text-center">
                <div className="font-display text-xl font-bold text-amber-400 sm:text-2xl">{totalSapPlanned}</div>
                <div className="text-[10px] text-muted-foreground sm:text-xs">Geplant</div>
              </div>
              <div className="text-center">
                <div className="font-display text-xl font-bold text-fuchsia-400 sm:text-2xl">{totalAlternatives}</div>
                <div className="text-[10px] text-muted-foreground sm:text-xs">Alternativen</div>
              </div>
            </div>
          </div>

          {/* Overall coverage bar */}
          <div className="h-3 w-full overflow-hidden bg-muted">
            <div className="flex h-full">
              <div
                className="h-full bg-emerald-500 transition-all"
                style={{ width: `${(totalSapAvailable / (totalSapAvailable + totalSapPlanned + totalAlternatives)) * 100}%` }}
              />
              <div
                className="h-full bg-amber-500 transition-all"
                style={{ width: `${(totalSapPlanned / (totalSapAvailable + totalSapPlanned + totalAlternatives)) * 100}%` }}
              />
              <div
                className="h-full bg-fuchsia-500/50 transition-all"
                style={{ width: `${(totalAlternatives / (totalSapAvailable + totalSapPlanned + totalAlternatives)) * 100}%` }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-muted-foreground sm:gap-4 sm:text-xs">
            <span className="flex items-center gap-1"><span className="h-2 w-2 bg-emerald-500" /> SAP verfügbar</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 bg-amber-500" /> SAP geplant</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 bg-fuchsia-500/50" /> Alternativen</span>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="flex flex-col gap-0">
          {categoryData.map((cat) => (
            <div key={cat.category} className="border border-border/50 bg-card p-[var(--grid-unit-eighth)]">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{cat.category}</h3>
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground sm:text-xs">
                    <span>{cat.count} Trends</span>
                    <span>Avg. Reife: {cat.avgMaturity}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {cat.totalSap > 0 && (
                    <span className="flex items-center gap-1 text-[12px] text-emerald-400 sm:text-[13px]">
                      <CheckCircle2 className="h-3.5 w-3.5" /> {cat.totalSap}
                    </span>
                  )}
                  {cat.plannedSap > 0 && (
                    <span className="flex items-center gap-1 text-[12px] text-amber-400 sm:text-[13px]">
                      <Clock className="h-3.5 w-3.5" /> {cat.plannedSap}
                    </span>
                  )}
                  {cat.withoutSap > 0 && (
                    <span className="flex items-center gap-1 text-[12px] text-fuchsia-400 sm:text-[13px]">
                      <AlertTriangle className="h-3.5 w-3.5" /> {cat.withoutSap}
                    </span>
                  )}
                </div>
              </div>

              {/* Per-trend coverage */}
              <div className="flex flex-col gap-2">
                {cat.trends.map((trend) => {
                  const available = trend.sapSolutions.filter((s) => s.available).length
                  const planned = trend.sapSolutions.filter((s) => !s.available).length
                  const altCount = trend.alternatives.length

                  return (
                    <div key={trend.id} className="flex items-center gap-2 bg-secondary/30 px-3 py-2 sm:gap-3">
                      <span className={cn("shrink-0 border px-1.5 py-0.5 text-[9px] font-medium", statusColors[trend.status])}>
                        {statusLabels[trend.status]}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-foreground sm:text-[13px]">
                        {trend.title}
                      </span>
                      <div className="flex shrink-0 items-center gap-2">
                        {available > 0 && (
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: available }).map((_, i) => (
                              <div key={i} className="h-2 w-2 bg-emerald-500" />
                            ))}
                          </div>
                        )}
                        {planned > 0 && (
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: planned }).map((_, i) => (
                              <div key={i} className="h-2 w-2 bg-amber-500" />
                            ))}
                          </div>
                        )}
                        {trend.sapSolutions.length === 0 && (
                          <span className="text-[10px] text-muted-foreground">Nur Alt.</span>
                        )}
                        <span className="w-8 text-right text-[10px] text-muted-foreground">{altCount} Alt</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
