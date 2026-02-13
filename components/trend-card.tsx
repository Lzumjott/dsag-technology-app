"use client"

import { useState } from "react"
import {
  Brain,
  Bot,
  Layers,
  Database,
  Workflow,
  Shield,
  Leaf,
  Plug,
  Cpu,
  Atom,
  Radio,
  Blocks,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { TechTrend } from "@/lib/trends-data"
import { statusLabels, statusColors } from "@/lib/trends-data"

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  bot: Bot,
  layers: Layers,
  database: Database,
  workflow: Workflow,
  shield: Shield,
  leaf: Leaf,
  plug: Plug,
  cpu: Cpu,
  atom: Atom,
  radio: Radio,
  blocks: Blocks,
}

interface TrendCardProps {
  trend: TechTrend
}

export function TrendCard({ trend }: TrendCardProps) {
  const [expanded, setExpanded] = useState(false)
  const Icon = iconMap[trend.icon] || Brain

  return (
    <article
      className={cn(
        "group rounded-xl border border-border/50 bg-card transition-all",
        expanded ? "border-primary/30 ring-1 ring-primary/10" : "hover:border-border"
      )}
    >
      {/* Card Header - touch-friendly */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-3 p-4 text-left sm:gap-4 sm:p-6"
        aria-expanded={expanded}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5 sm:mb-2 sm:gap-2">
            <span className={cn("rounded-md border px-2 py-0.5 text-[11px] font-medium sm:text-xs", statusColors[trend.status])}>
              {statusLabels[trend.status]}
            </span>
            <span className="text-[11px] text-muted-foreground sm:text-xs">{trend.category}</span>
          </div>

          <h3 className="font-display text-base font-semibold leading-snug text-card-foreground sm:text-lg">
            {trend.title}
          </h3>

          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2 sm:mt-2 sm:text-sm">
            {trend.description}
          </p>

          {/* Maturity Bar */}
          <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${trend.maturityPercent}%` }}
              />
            </div>
            <span className="shrink-0 text-[11px] font-medium text-muted-foreground sm:text-xs">
              {trend.maturityPercent}% Reife
            </span>
          </div>
        </div>

        <div className="mt-1 shrink-0 text-muted-foreground">
          {expanded ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border/50 px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
          {/* Impact & Benefits */}
          <div className="mb-5 sm:mb-6">
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
              Business Impact: {trend.impact}
            </div>
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {trend.keyBenefits.map((b) => (
                <span
                  key={b}
                  className="shrink-0 rounded-md bg-primary/5 px-3 py-1.5 text-[11px] text-primary sm:text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* SAP Solutions */}
          {trend.sapSolutions.length > 0 && (
            <div className="mb-5 sm:mb-6">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <div className="h-1 w-1 rounded-full bg-primary" />
                SAP-Loesungen
              </h4>
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
                {trend.sapSolutions.map((sol) => (
                  <div
                    key={sol.name}
                    className="rounded-lg border border-border/50 bg-secondary/50 p-3 sm:p-4"
                  >
                    <div className="mb-1 flex items-start gap-2">
                      {sol.available ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      )}
                      <span className="text-[13px] font-semibold leading-snug text-card-foreground sm:text-sm">{sol.name}</span>
                    </div>
                    <p className="mt-1 pl-6 text-[12px] leading-relaxed text-muted-foreground sm:text-xs">
                      {sol.description}
                    </p>
                    {sol.plannedDate && (
                      <span className="mt-2 ml-6 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-400 sm:text-xs">
                        Geplant: {sol.plannedDate}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alternative Solutions */}
          {trend.alternatives.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                Alternative Loesungen
              </h4>
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
                {trend.alternatives.map((alt) => (
                  <div
                    key={alt.name}
                    className="rounded-lg border border-dashed border-border/50 bg-muted/30 p-3 sm:p-4"
                  >
                    <span className="text-[13px] font-semibold text-card-foreground sm:text-sm">{alt.name}</span>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground sm:text-xs">
                      {alt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No SAP Solution message */}
          {trend.sapSolutions.length === 0 && (
            <div className="mb-4 rounded-lg border border-dashed border-amber-500/30 bg-amber-500/5 p-3 sm:p-4">
              <p className="text-[13px] text-amber-400 sm:text-sm">
                Aktuell keine dedizierte SAP-Loesung verfuegbar. Die oben genannten Alternativen bieten marktfuehrende Loesungsansaetze.
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
