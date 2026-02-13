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
        "group rounded-xl border border-border/50 bg-card transition-all hover:border-border",
        expanded && "border-primary/30 ring-1 ring-primary/10"
      )}
    >
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-4 p-6 text-left"
        aria-expanded={expanded}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className={cn("rounded-md border px-2 py-0.5 text-xs font-medium", statusColors[trend.status])}>
              {statusLabels[trend.status]}
            </span>
            <span className="text-xs text-muted-foreground">{trend.category}</span>
          </div>

          <h3 className="font-display text-lg font-semibold leading-snug text-card-foreground group-hover:text-foreground">
            {trend.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {trend.description}
          </p>

          {/* Maturity Bar */}
          <div className="mt-4 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${trend.maturityPercent}%` }}
              />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {trend.maturityPercent}% Reife
            </span>
          </div>
        </div>

        <div className="shrink-0 text-muted-foreground">
          {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border/50 px-6 pb-6 pt-5">
          {/* Impact & Benefits */}
          <div className="mb-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Business Impact: {trend.impact}
            </div>
            <div className="flex flex-wrap gap-2">
              {trend.keyBenefits.map((b) => (
                <span
                  key={b}
                  className="rounded-md bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* SAP Solutions */}
          {trend.sapSolutions.length > 0 && (
            <div className="mb-6">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <div className="h-1 w-1 rounded-full bg-primary" />
                SAP-Loesungen
              </h4>
              <div className="grid gap-3 md:grid-cols-2">
                {trend.sapSolutions.map((sol) => (
                  <div
                    key={sol.name}
                    className="rounded-lg border border-border/50 bg-secondary/50 p-4"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      {sol.available ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                      )}
                      <span className="text-sm font-semibold text-card-foreground">{sol.name}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {sol.description}
                    </p>
                    {sol.plannedDate && (
                      <span className="mt-2 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-400">
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
              <div className="grid gap-3 md:grid-cols-2">
                {trend.alternatives.map((alt) => (
                  <div
                    key={alt.name}
                    className="rounded-lg border border-dashed border-border/50 bg-muted/30 p-4"
                  >
                    <span className="text-sm font-semibold text-card-foreground">{alt.name}</span>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {alt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No SAP Solution message */}
          {trend.sapSolutions.length === 0 && (
            <div className="mb-4 rounded-lg border border-dashed border-amber-500/30 bg-amber-500/5 p-4">
              <p className="text-sm text-amber-400">
                Aktuell keine dedizierte SAP-Loesung verfuegbar. Die oben genannten Alternativen bieten marktfuehrende Loesungsansaetze.
              </p>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
