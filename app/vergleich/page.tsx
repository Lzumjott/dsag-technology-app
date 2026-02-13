"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { trends, statusLabels, statusColors, gartnerColors, investmentColors, industryColors, type Industry } from "@/lib/trends-data"
import { ArrowLeft, Plus, X, CheckCircle2, Clock, TrendingUp, BarChart3, Target, Building2, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export default function VergleichPage() {
  const searchParams = useSearchParams()
  const initialIds = searchParams.get("ids")?.split(",").filter(Boolean) || []
  
  const [selectedIds, setSelectedIds] = useState<string[]>(initialIds.slice(0, 3))
  const [showSelector, setShowSelector] = useState(false)

  const selectedTrends = useMemo(() => {
    return selectedIds.map(id => trends.find(t => t.id === id)).filter(Boolean)
  }, [selectedIds])

  const availableTrends = useMemo(() => {
    return trends.filter(t => !selectedIds.includes(t.id))
  }, [selectedIds])

  const addTrend = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id])
      setShowSelector(false)
    }
  }

  const removeTrend = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link href="/#trends" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Zurück</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-medium text-foreground">Trend-Vergleich</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Trends vergleichen
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Wählen Sie bis zu 3 Trends aus, um sie nebeneinander zu vergleichen.
          </p>
        </div>

        {/* Trend Selector */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {selectedTrends.map((trend) => trend && (
            <div
              key={trend.id}
              className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2"
            >
              <span className="text-sm font-medium text-foreground">{trend.title}</span>
              <button
                onClick={() => removeTrend(trend.id)}
                className="text-primary hover:text-primary/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          
          {selectedIds.length < 3 && (
            <div className="relative">
              <button
                onClick={() => setShowSelector(!showSelector)}
                className="flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary"
              >
                <Plus className="h-4 w-4" />
                Trend hinzufügen
              </button>
              
              {showSelector && (
                <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-72 overflow-y-auto rounded-lg border border-border bg-card p-2 shadow-lg">
                  {availableTrends.map((trend) => (
                    <button
                      key={trend.id}
                      onClick={() => addTrend(trend.id)}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-secondary"
                    >
                      <span className="font-medium text-foreground">{trend.title}</span>
                      <span className="text-xs text-muted-foreground">({trend.category})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedTrends.length >= 2 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-border/50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Merkmal
                  </th>
                  {selectedTrends.map((trend) => trend && (
                    <th key={trend.id} className="border-b border-border/50 px-4 py-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">{trend.title}</span>
                        {trend.realcoreExpertise && <Award className="h-4 w-4 text-primary" />}
                      </div>
                      <span className={cn("mt-1 inline-block rounded-md border px-2 py-0.5 text-[10px] font-medium", statusColors[trend.status])}>
                        {statusLabels[trend.status]}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Reifegrad */}
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Reifegrad
                    </div>
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${trend.maturityPercent}%` }} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{trend.maturityPercent}%</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Marktadoption */}
                <tr className="border-b border-border/30 bg-card/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-sky-400" />
                      Marktadoption
                    </div>
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-sky-400" style={{ width: `${trend.marketAdoption}%` }} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{trend.marketAdoption}%</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Investitionspriorität */}
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-amber-400" />
                      Investitionspriorität
                    </div>
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <span className={cn("text-sm font-semibold", investmentColors[trend.investmentPriority])}>
                        {trend.investmentPriority}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Gartner Phase */}
                <tr className="border-b border-border/30 bg-card/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    Gartner Phase
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <span className={cn("text-sm font-medium", gartnerColors[trend.gartnerPhase])}>
                        {trend.gartnerPhase}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* SAP-Lösungen */}
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      SAP-Lösungen
                    </div>
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-foreground">
                          {trend.sapSolutions.filter(s => s.available).length} verfügbar
                        </span>
                        {trend.sapSolutions.filter(s => !s.available).length > 0 && (
                          <span className="flex items-center gap-1 text-xs text-amber-400">
                            <Clock className="h-3 w-3" />
                            {trend.sapSolutions.filter(s => !s.available).length} geplant
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Alternativen */}
                <tr className="border-b border-border/30 bg-card/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    Alternativen
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <span className="text-sm text-foreground">{trend.alternatives.length} Lösungen</span>
                    </td>
                  ))}
                </tr>

                {/* Branchen */}
                <tr className="border-b border-border/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-indigo-400" />
                      Relevante Branchen
                    </div>
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {trend.industries.slice(0, 4).map((ind) => (
                          <span
                            key={ind}
                            className={cn("rounded px-1.5 py-0.5 text-[10px] font-medium", industryColors[ind as Industry])}
                          >
                            {ind.split(" ")[0]}
                          </span>
                        ))}
                        {trend.industries.length > 4 && (
                          <span className="text-[10px] text-muted-foreground">+{trend.industries.length - 4}</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Key Benefits */}
                <tr className="border-b border-border/30 bg-card/30">
                  <td className="px-4 py-3 text-sm font-medium text-muted-foreground">
                    Hauptvorteile
                  </td>
                  {selectedTrends.map((trend) => trend && (
                    <td key={trend.id} className="px-4 py-3">
                      <ul className="space-y-1">
                        {trend.keyBenefits.slice(0, 3).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border py-16 text-center">
            <p className="text-sm text-muted-foreground">
              Wählen Sie mindestens 2 Trends aus, um einen Vergleich zu sehen.
            </p>
          </div>
        )}

        {/* Detail Links */}
        {selectedTrends.length >= 2 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {selectedTrends.map((trend) => trend && (
              <Link
                key={trend.id}
                href={`/trends/${trend.id}`}
                className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-muted"
              >
                Details: {trend.title}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
