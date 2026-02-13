"use client"

import { useState } from "react"
import { trends, gartnerColors, type GartnerPhase } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { Info } from "lucide-react"

const phases: { phase: GartnerPhase; label: string; xPercent: number; yPercent: number }[] = [
  { phase: "Innovation Trigger", label: "Innovation Trigger", xPercent: 8, yPercent: 70 },
  { phase: "Peak of Inflated Expectations", label: "Peak of Inflated Expectations", xPercent: 25, yPercent: 10 },
  { phase: "Trough of Disillusionment", label: "Trough of Disillusionment", xPercent: 45, yPercent: 80 },
  { phase: "Slope of Enlightenment", label: "Slope of Enlightenment", xPercent: 65, yPercent: 40 },
  { phase: "Plateau of Productivity", label: "Plateau of Productivity", xPercent: 88, yPercent: 30 },
]

const phaseDescriptions: Record<GartnerPhase, string> = {
  "Innovation Trigger": "Frueher Technologietrend, erste Proof-of-Concepts. Noch keine marktfaehigen Produkte.",
  "Peak of Inflated Expectations": "Ueberhoehte Erwartungen, erste Erfolgsgeschichten aber auch viele Misserfolge.",
  "Trough of Disillusionment": "Ernuechterung nach gescheiterten Pilotprojekten. Nur beharrliche Anbieter ueberleben.",
  "Slope of Enlightenment": "Realistische Anwendungsfaelle kristallisieren sich heraus. Best Practices entstehen.",
  "Plateau of Productivity": "Breite Marktakzeptanz. Klare ROI-Nachweise und bewaeaehrte Implementierungsmuster.",
}

export function GartnerHypeCycle() {
  const [activePhase, setActivePhase] = useState<GartnerPhase | null>(null)
  const [hoveredTrend, setHoveredTrend] = useState<string | null>(null)

  const groupedTrends = phases.map((p) => ({
    ...p,
    trends: trends.filter((t) => t.gartnerPhase === p.phase),
  }))

  return (
    <section id="gartner" className="scroll-mt-16 border-t border-border/50 px-4 py-10 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 sm:mb-10">
          <div className="mb-2 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
              Gartner Hype Cycle Einordnung
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Alle {trends.length} Technologietrends eingeordnet in die fuenf Phasen des Gartner Hype Cycle.
          </p>
        </div>

        {/* Visual Hype Cycle Curve - Desktop */}
        <div className="mb-8 hidden overflow-hidden rounded-xl border border-border/50 bg-card p-6 md:block lg:p-8">
          <svg viewBox="0 0 1000 400" className="w-full" aria-label="Gartner Hype Cycle Kurve">
            {/* Grid lines */}
            <line x1="0" y1="350" x2="1000" y2="350" stroke="hsl(var(--border))" strokeWidth="1" />

            {/* Hype Cycle Curve */}
            <path
              d="M 30 300 Q 100 280 180 60 Q 220 0 280 60 Q 350 200 450 320 Q 550 380 650 180 Q 750 100 900 120"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              opacity="0.3"
            />
            <path
              d="M 30 300 Q 100 280 180 60 Q 220 0 280 60 Q 350 200 450 320 Q 550 380 650 180 Q 750 100 900 120"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              opacity="0.6"
            />

            {/* Phase labels */}
            {phases.map((p, i) => {
              const x = (p.xPercent / 100) * 1000
              return (
                <g key={p.phase}>
                  <text
                    x={x}
                    y={380}
                    textAnchor="middle"
                    className={cn("fill-muted-foreground text-[11px]", activePhase === p.phase && "fill-foreground font-medium")}
                  >
                    {p.label.length > 20 ? p.label.split(" ").slice(0, 2).join(" ") : p.label}
                  </text>
                  {/* Vertical divider */}
                  {i < phases.length - 1 && (
                    <line
                      x1={x + (phases[i + 1].xPercent / 100 * 1000 - x) / 2}
                      y1="20"
                      x2={x + (phases[i + 1].xPercent / 100 * 1000 - x) / 2}
                      y2="350"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />
                  )}
                </g>
              )
            })}

            {/* Trend dots */}
            {groupedTrends.map((group) =>
              group.trends.map((trend, i) => {
                const baseX = (group.xPercent / 100) * 1000
                const offsetX = (i - (group.trends.length - 1) / 2) * 40
                const y = (group.yPercent / 100) * 300 + 30
                const isHovered = hoveredTrend === trend.id

                return (
                  <g
                    key={trend.id}
                    onMouseEnter={() => { setHoveredTrend(trend.id); setActivePhase(group.phase) }}
                    onMouseLeave={() => { setHoveredTrend(null); setActivePhase(null) }}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={baseX + offsetX}
                      cy={y}
                      r={isHovered ? 10 : 7}
                      className={cn(
                        "transition-all",
                        trend.realcoreExpertise ? "fill-primary" : "fill-muted-foreground"
                      )}
                      opacity={isHovered ? 1 : 0.7}
                    />
                    {isHovered && (
                      <>
                        <circle cx={baseX + offsetX} cy={y} r="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                        <rect x={baseX + offsetX - 80} y={y - 40} width="160" height="24" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                        <text x={baseX + offsetX} y={y - 24} textAnchor="middle" className="fill-foreground text-[11px] font-medium">
                          {trend.title.length > 22 ? trend.title.substring(0, 22) + "..." : trend.title}
                        </text>
                      </>
                    )}
                  </g>
                )
              })
            )}

            {/* Axis Label */}
            <text x="500" y="398" textAnchor="middle" className="fill-muted-foreground text-[10px] uppercase tracking-widest">
              Reifegrad
            </text>
          </svg>
          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" /> RealCore Expertise
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" /> Trend ohne RC Expertise
            </span>
          </div>
        </div>

        {/* Phase Cards - all screens */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {groupedTrends.map(({ phase, trends: phaseTrends }) => (
            <div
              key={phase}
              className={cn(
                "rounded-xl border bg-card p-4 transition-all sm:p-5",
                activePhase === phase ? "border-primary/30 ring-1 ring-primary/10" : "border-border/50"
              )}
              onMouseEnter={() => setActivePhase(phase)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                <h3 className={cn("font-display text-base font-semibold sm:text-lg", gartnerColors[phase])}>
                  {phase}
                </h3>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground sm:text-xs">
                  {phaseTrends.length} Trends
                </span>
              </div>
              <p className="mb-3 text-[12px] text-muted-foreground sm:text-[13px]">
                {phaseDescriptions[phase]}
              </p>
              <div className="no-scrollbar flex flex-wrap gap-2">
                {phaseTrends.map((trend) => (
                  <div
                    key={trend.id}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-colors sm:text-[12px]",
                      trend.realcoreExpertise
                        ? "border-primary/20 bg-primary/5 text-primary"
                        : "border-border/50 bg-secondary/50 text-secondary-foreground"
                    )}
                  >
                    {trend.title}
                    <span className="ml-1 text-[9px] text-muted-foreground">{trend.maturityPercent}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
