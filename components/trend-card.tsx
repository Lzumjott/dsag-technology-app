"use client"

import { useState } from "react"
import {
  Brain, Bot, Layers, Database, Workflow, Shield, Leaf, Plug, Cpu, Atom, Radio,
  Blocks, ChevronDown, ChevronUp, CheckCircle2, Clock, ArrowRight, Cloud,
  ShoppingCart, GitBranch, Server, Scale, Activity, Layout, Truck, Award,
  TrendingUp, Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { TechTrend } from "@/lib/trends-data"
import { statusLabels, statusColors, gartnerColors, investmentColors } from "@/lib/trends-data"

const iconMap: Record<string, React.ElementType> = {
  brain: Brain, bot: Bot, layers: Layers, database: Database, workflow: Workflow,
  shield: Shield, leaf: Leaf, plug: Plug, cpu: Cpu, atom: Atom, radio: Radio,
  blocks: Blocks, cloud: Cloud, "shopping-cart": ShoppingCart, "git-branch": GitBranch,
  server: Server, scale: Scale, activity: Activity, layout: Layout, truck: Truck,
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
      {/* Card Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-start gap-3 p-4 text-left sm:gap-4 sm:p-5"
        aria-expanded={expanded}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            <span className={cn("rounded-md border px-2 py-0.5 text-[10px] font-medium sm:text-[11px]", statusColors[trend.status])}>
              {statusLabels[trend.status]}
            </span>
            <span className="text-[10px] text-muted-foreground sm:text-[11px]">{trend.category}</span>
            {trend.realcoreExpertise && (
              <span className="inline-flex items-center gap-0.5 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                <Award className="h-2.5 w-2.5" />
                <span className="hidden sm:inline">RC Expertise</span>
              </span>
            )}
          </div>

          <h3 className="font-display text-[15px] font-semibold leading-snug text-card-foreground sm:text-base">
            {trend.title}
          </h3>

          {/* Compact info row */}
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground sm:text-[11px]">
            <span>Impact: <strong className="text-foreground">{trend.impact}</strong></span>
            <span>Adoption: <strong className="text-foreground">{trend.marketAdoption}%</strong></span>
            <span className={investmentColors[trend.investmentPriority]}>
              Prioritaet: {trend.investmentPriority}
            </span>
          </div>

          {/* Maturity Bar */}
          <div className="mt-2.5 flex items-center gap-2 sm:mt-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${trend.maturityPercent}%` }}
              />
            </div>
            <span className="shrink-0 text-[10px] font-medium text-muted-foreground sm:text-[11px]">
              {trend.maturityPercent}%
            </span>
          </div>
        </div>

        <div className="mt-1 shrink-0 text-muted-foreground">
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border/50 px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
          {/* Description */}
          <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
            {trend.description}
          </p>

          {/* Gartner Phase & Meta */}
          <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
            <span className={cn("rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium sm:text-xs", gartnerColors[trend.gartnerPhase])}>
              Gartner: {trend.gartnerPhase}
            </span>
            <span className="rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground sm:text-xs">
              Timeline: {trend.timelineYear}
            </span>
            <span className="rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-foreground sm:text-xs">
              Markt-Adoption: {trend.marketAdoption}%
            </span>
          </div>

          {/* Benefits */}
          <div className="mb-4 sm:mb-5">
            <h4 className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
              <TrendingUp className="h-3 w-3" />
              Business Impact & Vorteile
            </h4>
            <ul className="flex flex-col gap-1.5">
              {trend.keyBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[12px] text-foreground sm:text-[13px]">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="mb-4 sm:mb-5">
            <h4 className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
              <Users className="h-3 w-3" />
              Praxisnahe Use Cases
            </h4>
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              {trend.useCases.map((uc) => (
                <span
                  key={uc}
                  className="shrink-0 rounded-md border border-border/50 bg-secondary/50 px-2.5 py-1.5 text-[11px] text-secondary-foreground sm:text-xs"
                >
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* SAP Solutions */}
          {trend.sapSolutions.length > 0 && (
            <div className="mb-4 sm:mb-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                SAP-Loesungen ({trend.sapSolutions.length})
              </h4>
              <div className="flex flex-col gap-3">
                {trend.sapSolutions.map((sol) => (
                  <div
                    key={sol.name}
                    className="rounded-lg border border-border/50 bg-secondary/30 p-3 sm:p-4"
                  >
                    <div className="mb-1 flex items-start gap-2">
                      {sol.available ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      ) : (
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      )}
                      <div className="min-w-0 flex-1">
                        <span className="text-[13px] font-semibold leading-snug text-card-foreground sm:text-sm">{sol.name}</span>
                        {sol.module && (
                          <span className="ml-2 hidden text-[10px] text-muted-foreground sm:inline">({sol.module})</span>
                        )}
                      </div>
                    </div>
                    <p className="mt-1 pl-6 text-[11px] leading-relaxed text-muted-foreground sm:text-[12px]">
                      {sol.description}
                    </p>
                    {sol.plannedDate && (
                      <span className="mt-2 ml-6 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400 sm:text-[11px]">
                        Geplant: {sol.plannedDate}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No SAP Solution message */}
          {trend.sapSolutions.length === 0 && (
            <div className="mb-4 rounded-lg border border-dashed border-amber-500/30 bg-amber-500/5 p-3 sm:mb-5 sm:p-4">
              <p className="text-[12px] text-amber-400 sm:text-[13px]">
                Aktuell keine dedizierte SAP-Loesung verfuegbar. Die unten genannten Alternativen bieten marktfuehrende Loesungsansaetze.
              </p>
            </div>
          )}

          {/* Alternative Solutions */}
          {trend.alternatives.length > 0 && (
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-card-foreground">
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                Alternative Loesungen ({trend.alternatives.length})
              </h4>
              <div className="flex flex-col gap-3">
                {trend.alternatives.map((alt) => (
                  <div
                    key={alt.name}
                    className="rounded-lg border border-dashed border-border/50 bg-muted/20 p-3 sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[13px] font-semibold text-card-foreground sm:text-sm">{alt.name}</span>
                      {alt.vendor && (
                        <span className="shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          {alt.vendor}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-[12px]">
                      {alt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
