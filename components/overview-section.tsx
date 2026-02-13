import { trends, statusLabels, statusColors } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react"

export function OverviewSection() {
  const statusCounts = {
    established: trends.filter((t) => t.status === "established").length,
    growing: trends.filter((t) => t.status === "growing").length,
    emerging: trends.filter((t) => t.status === "emerging").length,
    future: trends.filter((t) => t.status === "future").length,
  }

  const totalSapSolutions = trends.reduce((acc, t) => acc + t.sapSolutions.length, 0)
  const availableSapSolutions = trends.reduce(
    (acc, t) => acc + t.sapSolutions.filter((s) => s.available).length,
    0
  )
  const plannedSapSolutions = totalSapSolutions - availableSapSolutions
  const trendsWithoutSap = trends.filter((t) => t.sapSolutions.length === 0).length

  return (
    <section id="uebersicht" className="scroll-mt-16 border-t border-border/50 px-4 py-10 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:mb-3 sm:text-3xl md:text-4xl">
          Uebersicht & Bewertung
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground sm:mb-12 sm:text-base">
          Eine Zusammenfassung aller Trends mit Reifegraden und SAP-Abdeckung auf einen Blick.
        </p>

        {/* Status Overview Cards */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:gap-4 md:grid-cols-4">
          {(Object.entries(statusCounts) as [keyof typeof statusCounts, number][]).map(
            ([status, count]) => (
              <div
                key={status}
                className="rounded-xl border border-border/50 bg-card p-3 sm:p-5"
              >
                <span
                  className={cn(
                    "inline-block rounded-md border px-2 py-0.5 text-[10px] font-medium sm:text-xs",
                    statusColors[status]
                  )}
                >
                  {statusLabels[status]}
                </span>
                <div className="mt-2 font-display text-2xl font-bold text-foreground sm:mt-3 sm:text-3xl">{count}</div>
                <div className="text-[11px] text-muted-foreground sm:text-xs">Trends</div>
              </div>
            )
          )}
        </div>

        {/* SAP Coverage - stack on mobile, 3 cols on tablet+ */}
        <div className="mb-8 flex flex-col gap-3 sm:mb-12 sm:grid sm:grid-cols-3 sm:gap-4">
          <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 sm:gap-4 sm:p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {availableSapSolutions}
              </div>
              <div className="text-[13px] text-muted-foreground sm:text-sm">
                SAP-Loesungen verfuegbar
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 sm:gap-4 sm:p-5">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {plannedSapSolutions}
              </div>
              <div className="text-[13px] text-muted-foreground sm:text-sm">
                SAP-Loesungen geplant
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-4 sm:gap-4 sm:p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-400" />
            <div>
              <div className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {trendsWithoutSap}
              </div>
              <div className="text-[13px] text-muted-foreground sm:text-sm">
                Trends ohne SAP-Loesung
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-friendly card list (phones) + Table (tablet+) */}
        {/* Card view for small screens */}
        <div className="flex flex-col gap-3 sm:hidden">
          {[...trends]
            .sort((a, b) => b.maturityPercent - a.maturityPercent)
            .map((trend) => (
              <div
                key={trend.id}
                className="rounded-xl border border-border/50 bg-card p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{trend.title}</span>
                  <span
                    className={cn(
                      "shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium",
                      statusColors[trend.status]
                    )}
                  >
                    {statusLabels[trend.status]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${trend.maturityPercent}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-[11px] font-medium text-muted-foreground">
                    {trend.maturityPercent}%
                  </span>
                </div>
                <div className="mt-2 text-[12px] text-muted-foreground">
                  {trend.sapSolutions.length > 0 ? (
                    <span className="text-emerald-400">
                      {trend.sapSolutions.length} SAP-Loesung{trend.sapSolutions.length > 1 ? "en" : ""}
                    </span>
                  ) : (
                    <span>Nur Alternativen</span>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Table view for tablet+ */}
        <div className="hidden overflow-hidden rounded-xl border border-border/50 sm:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-card/50">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
                    Trend
                  </th>
                  <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
                    Reifegrad
                  </th>
                  <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
                    SAP
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...trends]
                  .sort((a, b) => b.maturityPercent - a.maturityPercent)
                  .map((trend, i) => (
                    <tr
                      key={trend.id}
                      className={cn(
                        "border-b border-border/30 transition-colors hover:bg-card/50",
                        i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                      )}
                    >
                      <td className="px-4 py-3 sm:px-5">
                        <span className="text-sm font-medium text-foreground">{trend.title}</span>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <span
                          className={cn(
                            "inline-block rounded-md border px-2 py-0.5 text-xs font-medium",
                            statusColors[trend.status]
                          )}
                        >
                          {statusLabels[trend.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-5">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted sm:w-24">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${trend.maturityPercent}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{trend.maturityPercent}%</span>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        {trend.sapSolutions.length > 0 ? (
                          <span className="text-xs text-emerald-400">
                            {trend.sapSolutions.length} Loesung{trend.sapSolutions.length > 1 ? "en" : ""}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Nur Alternativen</span>
                        )}
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
