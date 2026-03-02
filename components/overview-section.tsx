import { trends, statusLabels, statusColors, investmentColors, gartnerColors, type TrendStatus } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, Clock, AlertTriangle, BarChart3, Award } from "lucide-react"

export function OverviewSection() {
  const statusCounts = {
    established: trends.filter((t) => t.status === "established").length,
    growing: trends.filter((t) => t.status === "growing").length,
    emerging: trends.filter((t) => t.status === "emerging").length,
    future: trends.filter((t) => t.status === "future").length,
  }

  const totalSapSolutions = trends.reduce((acc, t) => acc + t.sapSolutions.length, 0)
  const availableSapSolutions = trends.reduce(
    (acc, t) => acc + t.sapSolutions.filter((s) => s.available).length, 0
  )
  const plannedSapSolutions = totalSapSolutions - availableSapSolutions
  const trendsWithoutSap = trends.filter((t) => t.sapSolutions.length === 0).length
  const trendsWithExpertise = trends.filter((t) => t.realcoreExpertise).length
  const avgMaturity = Math.round(trends.reduce((acc, t) => acc + t.maturityPercent, 0) / trends.length)
  const criticalTrends = trends.filter((t) => t.investmentPriority === "Kritisch").length

  // Group by investment priority
  const investmentGroups = {
    Kritisch: trends.filter((t) => t.investmentPriority === "Kritisch"),
    Hoch: trends.filter((t) => t.investmentPriority === "Hoch"),
    Mittel: trends.filter((t) => t.investmentPriority === "Mittel"),
    Beobachten: trends.filter((t) => t.investmentPriority === "Beobachten"),
  }

  return (
    <section id="übersicht" className="grid-section scroll-mt-20 border-t border-border/50 py-[var(--grid-unit)]">
      <div className="grid-content">
        <div className="mb-2 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
            Übersicht & Bewertung
          </h2>
        </div>
        <p className="mb-[var(--grid-unit)] max-w-2xl text-sm text-muted-foreground sm:text-base">
          Zusammenfassung aller {trends.length} Trends mit Reifegraden, SAP-Abdeckung und Investitionsprioritäten.
        </p>

        {/* Status Overview Cards */}
        <div className="mb-6 grid-tiles gap-0 sm:mb-8">
          {(Object.entries(statusCounts) as [TrendStatus, number][]).map(
            ([status, count]) => (
              <div key={status} className="border border-transparent bg-transparent p-[var(--grid-unit-eighth)]">
                <span className={cn("inline-block border px-2 py-0.5 text-[10px] font-medium sm:text-xs", statusColors[status])}>
                  {statusLabels[status]}
                </span>
                <div className="mt-2 font-display text-2xl font-bold text-foreground sm:mt-3 sm:text-3xl">{count}</div>
                <div className="text-[11px] text-muted-foreground sm:text-xs">Trends</div>
              </div>
            )
          )}
        </div>

        {/* SAP Coverage + Key Metrics */}
        <div className="mb-6 grid-tiles gap-0 sm:mb-8">
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{availableSapSolutions}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">SAP verfügbar</div>
            </div>
          </div>
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400 sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{plannedSapSolutions}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">SAP geplant</div>
            </div>
          </div>
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400 sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{trendsWithoutSap}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Nur Alternativen</div>
            </div>
          </div>
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{trendsWithExpertise}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">RC Expertise</div>
            </div>
          </div>
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400 sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{avgMaturity}%</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Avg. Reife</div>
            </div>
          </div>
          <div className="flex items-start gap-2 border border-transparent bg-transparent p-[var(--grid-unit-eighth)] sm:gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400 sm:h-5 sm:w-5" />
            <div>
              <div className="font-display text-lg font-bold text-foreground sm:text-xl">{criticalTrends}</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Kritisch</div>
            </div>
          </div>
        </div>

        {/* Investment Priority Groups */}
        <div className="mb-6 sm:mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Investitionspriorität
          </h3>
          <div className="flex flex-col gap-0">
            {(Object.entries(investmentGroups) as [string, typeof trends][]).map(([priority, items]) => {
              if (items.length === 0) return null
              return (
                <div key={priority} className="border border-border/50 bg-card p-[var(--grid-unit-eighth)]">
                  <div className="mb-2 flex items-center gap-2 sm:mb-3">
                    <span className={cn("text-sm font-bold", investmentColors[priority])}>{priority}</span>
                    <span className="text-[11px] text-muted-foreground">({items.length} Trends)</span>
                  </div>
                  <div className="no-scrollbar -mx-1 flex flex-wrap gap-1.5 sm:gap-2">
                    {items.map((trend) => (
                      <span
                        key={trend.id}
                        className="inline-flex items-center gap-1 border border-border/50 bg-secondary/50 px-2 py-1 text-[11px] text-secondary-foreground sm:text-xs"
                      >
                        {trend.realcoreExpertise && <Award className="h-2.5 w-2.5 text-primary" />}
                        {trend.title}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile card list (phones) + Table (tablet+) */}
        <div className="flex flex-col gap-0 sm:hidden">
          {[...trends]
            .sort((a, b) => b.maturityPercent - a.maturityPercent)
            .map((trend) => (
              <div key={trend.id} className="border border-border/50 bg-card p-3">
                <div className="mb-1.5 flex items-start justify-between gap-2">
                  <span className="text-[13px] font-medium leading-snug text-foreground">{trend.title}</span>
                  <span className={cn("shrink-0 border px-1.5 py-0.5 text-[9px] font-medium", statusColors[trend.status])}>
                    {statusLabels[trend.status]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden bg-muted">
                    <div className="h-full bg-primary" style={{ width: `${trend.maturityPercent}%` }} />
                  </div>
                  <span className="shrink-0 text-[10px] font-medium text-muted-foreground">{trend.maturityPercent}%</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span>
                    {trend.sapSolutions.length > 0 ? (
                      <span className="text-emerald-400">{trend.sapSolutions.length} SAP</span>
                    ) : "Nur Alternativen"}
                  </span>
                  <span className={investmentColors[trend.investmentPriority]}>{trend.investmentPriority}</span>
                  {trend.realcoreExpertise && <Award className="h-3 w-3 text-primary" />}
                </div>
              </div>
            ))}
        </div>

        {/* Table view for tablet+ */}
        <div className="hidden overflow-hidden border border-border/50 bg-white sm:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-white">
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Trend</th>
                  <th className="hidden px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Status</th>
                  <th className="px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Reife</th>
                  <th className="hidden px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Gartner</th>
                  <th className="hidden px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground lg:table-cell">Adoption</th>
                  <th className="hidden px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">SAP</th>
                  <th className="hidden px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground lg:table-cell">Priorität</th>
                </tr>
              </thead>
              <tbody>
                {[...trends]
                  .sort((a, b) => b.maturityPercent - a.maturityPercent)
                  .map((trend, i) => (
                    <tr
                      key={trend.id}
                      className={cn("border-b border-border/30 transition-colors hover:bg-gray-50", i % 2 === 0 ? "bg-white" : "bg-gray-50/50")}
                    >
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-medium text-foreground">{trend.title}</span>
                          {trend.realcoreExpertise && <Award className="h-3 w-3 shrink-0 text-primary" />}
                        </div>
                      </td>
                      <td className="hidden px-3 py-2.5 md:table-cell">
                        <span className={cn("inline-block border px-2 py-0.5 text-[10px] font-medium", statusColors[trend.status])}>
                          {statusLabels[trend.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 overflow-hidden bg-muted lg:w-20">
                            <div className="h-full bg-primary" style={{ width: `${trend.maturityPercent}%` }} />
                          </div>
                          <span className="text-[11px] text-muted-foreground">{trend.maturityPercent}%</span>
                        </div>
                      </td>
                      <td className="hidden px-3 py-2.5 md:table-cell">
                        <span className={cn("text-[11px]", gartnerColors[trend.gartnerPhase])}>
                          {trend.gartnerPhase.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </td>
                      <td className="hidden px-3 py-2.5 lg:table-cell">
                        <span className="text-[11px] text-muted-foreground">{trend.marketAdoption}%</span>
                      </td>
                      <td className="hidden px-3 py-2.5 md:table-cell">
                        {trend.sapSolutions.length > 0 ? (
                          <span className="text-[11px] text-emerald-400">{trend.sapSolutions.length} Lsg.</span>
                        ) : (
                          <span className="text-[11px] text-muted-foreground">--</span>
                        )}
                      </td>
                      <td className="hidden px-3 py-2.5 lg:table-cell">
                        <span className={cn("text-[11px] font-medium", investmentColors[trend.investmentPriority])}>
                          {trend.investmentPriority}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
