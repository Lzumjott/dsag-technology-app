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
    <section id="uebersicht" className="border-t border-border/50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Uebersicht & Bewertung
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Eine Zusammenfassung aller Trends mit Reifegraden und SAP-Abdeckung auf einen Blick.
        </p>

        {/* Status Overview Cards */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {(Object.entries(statusCounts) as [keyof typeof statusCounts, number][]).map(
            ([status, count]) => (
              <div
                key={status}
                className="rounded-xl border border-border/50 bg-card p-5"
              >
                <span
                  className={cn(
                    "inline-block rounded-md border px-2 py-0.5 text-xs font-medium",
                    statusColors[status]
                  )}
                >
                  {statusLabels[status]}
                </span>
                <div className="mt-3 font-display text-3xl font-bold text-foreground">{count}</div>
                <div className="text-xs text-muted-foreground">Trends</div>
              </div>
            )
          )}
        </div>

        {/* SAP Coverage */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                {availableSapSolutions}
              </div>
              <div className="text-sm text-muted-foreground">
                SAP-Loesungen verfuegbar
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                {plannedSapSolutions}
              </div>
              <div className="text-sm text-muted-foreground">
                SAP-Loesungen geplant
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-400" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">
                {trendsWithoutSap}
              </div>
              <div className="text-sm text-muted-foreground">
                Trends ohne SAP-Loesung
              </div>
            </div>
          </div>
        </div>

        {/* Maturity Table */}
        <div className="overflow-hidden rounded-xl border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-card/50">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Trend
                  </th>
                  <th className="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                    Status
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Reifegrad
                  </th>
                  <th className="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
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
                      <td className="px-5 py-3">
                        <span className="text-sm font-medium text-foreground">{trend.title}</span>
                      </td>
                      <td className="hidden px-5 py-3 sm:table-cell">
                        <span
                          className={cn(
                            "inline-block rounded-md border px-2 py-0.5 text-xs font-medium",
                            statusColors[trend.status]
                          )}
                        >
                          {statusLabels[trend.status]}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary"
                              style={{ width: `${trend.maturityPercent}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{trend.maturityPercent}%</span>
                        </div>
                      </td>
                      <td className="hidden px-5 py-3 md:table-cell">
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
