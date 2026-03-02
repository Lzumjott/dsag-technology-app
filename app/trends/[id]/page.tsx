"use client"

import { useParams, useRouter } from "next/navigation"
import { trends, statusLabels, statusColors, gartnerColors, investmentColors, industryColors, type Industry } from "@/lib/trends-data"
import { ArrowLeft, CheckCircle2, Clock, ExternalLink, Award, Building2, Target, Lightbulb, TrendingUp, BarChart3, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function TrendDetailPage() {
  const params = useParams()
  const router = useRouter()
  const trend = trends.find((t) => t.id === params.id)

  if (!trend) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Trend nicht gefunden</h1>
          <p className="mt-2 text-muted-foreground">Der gesuchte Trend existiert nicht.</p>
          <Link href="/#trends" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    )
  }

  const availableSolutions = trend.sapSolutions.filter((s) => s.available)
  const plannedSolutions = trend.sapSolutions.filter((s) => !s.available)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="grid-section">
          <div className="grid-content flex h-20 items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Zurück</span>
            </button>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm font-medium text-foreground">{trend.title}</span>
          </div>
        </div>
      </header>

      <main className="grid-section py-[var(--grid-unit)]">
        <div className="grid-content">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={cn("border px-2.5 py-1 text-xs font-medium", statusColors[trend.status])}>
              {statusLabels[trend.status]}
            </span>
            <span className="border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
              {trend.category}
            </span>
            {trend.realcoreExpertise && (
              <span className="flex items-center gap-1 border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <Award className="h-3 w-3" />
                RealCore Expertise
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {trend.title}
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {trend.description}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-4 sm:gap-4">
          <div className="border border-border/50 bg-card p-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" />
              Reifegrad
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">{trend.maturityPercent}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden bg-muted">
              <div className="h-full bg-primary" style={{ width: `${trend.maturityPercent}%` }} />
            </div>
          </div>

          <div className="border border-border/50 bg-card p-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-sky-400" />
              Marktadoption
            </div>
            <div className="mt-2">
              <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">{trend.marketAdoption}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden bg-muted">
              <div className="h-full bg-sky-400" style={{ width: `${trend.marketAdoption}%` }} />
            </div>
          </div>

          <div className="border border-border/50 bg-card p-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Target className="h-4 w-4 text-amber-400" />
              Priorität
            </div>
            <div className="mt-2">
              <span className={cn("font-display text-xl font-bold sm:text-2xl", investmentColors[trend.investmentPriority])}>
                {trend.investmentPriority}
              </span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Investitionspriorität</div>
          </div>

          <div className="border border-border/50 bg-card p-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Calendar className="h-4 w-4 text-emerald-400" />
              Gartner Phase
            </div>
            <div className="mt-2">
              <span className={cn("text-sm font-semibold sm:text-base", gartnerColors[trend.gartnerPhase])}>
                {trend.gartnerPhase}
              </span>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Timeline: {trend.timelineYear}</div>
          </div>
        </div>

        {/* Industries */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
            <Building2 className="h-5 w-5 text-primary" />
            Relevante Branchen
          </h2>
          <div className="flex flex-wrap gap-2">
            {trend.industries.map((industry) => (
              <span
                key={industry}
                className={cn("border px-3 py-1.5 text-xs font-medium", industryColors[industry as Industry])}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* SAP Solutions */}
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              SAP-Lösungen ({trend.sapSolutions.length})
            </h2>
            
            {availableSolutions.length > 0 && (
              <div className="mb-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-400">Verfügbar</div>
                <div className="flex flex-col gap-3">
                  {availableSolutions.map((solution) => (
                    <div key={solution.name} className="border border-emerald-500/20 bg-emerald-500/5 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-foreground">{solution.name}</h3>
                        {solution.module && (
                          <span className="shrink-0 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                            {solution.module}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {plannedSolutions.length > 0 && (
              <div>
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-400">Geplant</div>
                <div className="flex flex-col gap-3">
                  {plannedSolutions.map((solution) => (
                    <div key={solution.name} className="border border-amber-500/20 bg-amber-500/5 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-foreground">{solution.name}</h3>
                        <div className="flex items-center gap-2">
                          {solution.plannedDate && (
                            <span className="flex items-center gap-1 bg-amber-500/20 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                              <Clock className="h-3 w-3" />
                              {solution.plannedDate}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {trend.sapSolutions.length === 0 && (
              <p className="text-sm text-muted-foreground">Keine SAP-Lösungen für diesen Trend verfügbar.</p>
            )}
          </div>

          {/* Alternatives */}
          <div>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <ExternalLink className="h-5 w-5 text-fuchsia-400" />
              Alternativen ({trend.alternatives.length})
            </h2>
            
            {trend.alternatives.length > 0 ? (
              <div className="flex flex-col gap-3">
                {trend.alternatives.map((alt) => (
                  <div key={alt.name} className="border border-border/50 bg-card p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-foreground">{alt.name}</h3>
                      {alt.vendor && (
                        <span className="shrink-0 bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {alt.vendor}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{alt.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Keine Alternativen dokumentiert.</p>
            )}
          </div>
        </div>

        {/* Benefits & Use Cases */}
        <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-2">
          {/* Key Benefits */}
          <div className="border border-border/50 bg-card p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-amber-400" />
              Wesentliche Vorteile
            </h2>
            <ul className="space-y-3">
              {trend.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="border border-border/50 bg-card p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Target className="h-5 w-5 text-sky-400" />
              Anwendungsfälle
            </h2>
            <ul className="space-y-3">
              {trend.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-sky-400" />
                  <span className="text-sm text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/#trends"
            className="flex items-center gap-2 border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Übersicht
          </Link>
          <Link
            href={`/report?ids=${trend.id}`}
            className="flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
          >
            Als PDF exportieren
          </Link>
          <Link
            href={`/vergleich?ids=${trend.id}`}
            className="flex items-center gap-2 border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            Mit anderen vergleichen
          </Link>
        </div>
        </div>
      </main>
    </div>
  )
}
