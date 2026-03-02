"use client"

import { useSearchParams } from "next/navigation"
import { useMemo, Suspense } from "react"
import Link from "next/link"
import { trends, statusLabels, gartnerColors, investmentColors, type Industry, industryColors } from "@/lib/trends-data"
import { ArrowLeft, Printer, CheckCircle2, Clock, Award, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

function ReportContent() {
  const searchParams = useSearchParams()
  const idsParam = searchParams.get("ids")
  const industryParam = searchParams.get("industry")
  const categoryParam = searchParams.get("category")

  const selectedTrends = useMemo(() => {
    let filtered = [...trends]
    
    if (idsParam) {
      const ids = idsParam.split(",").filter(Boolean)
      filtered = filtered.filter(t => ids.includes(t.id))
    }
    
    if (industryParam && industryParam !== "all") {
      filtered = filtered.filter(t => t.industries.includes(industryParam as Industry))
    }
    
    if (categoryParam && categoryParam !== "Alle") {
      filtered = filtered.filter(t => t.category === categoryParam)
    }
    
    return filtered.sort((a, b) => b.maturityPercent - a.maturityPercent)
  }, [idsParam, industryParam, categoryParam])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background text-black print:bg-white">
      {/* Screen Header (hidden in print) */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white print:hidden">
        <div className="grid-section">
          <div className="grid-content flex h-14 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/#trends" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Zurück</span>
              </Link>
              <div className="h-4 w-px bg-gray-300" />
              <span className="text-sm font-medium text-gray-900">Trend-Report</span>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Printer className="h-4 w-4" />
              Als PDF drucken
            </button>
          </div>
        </div>
      </header>

      {/* Report Content */}
      <main className="grid-section py-8 print:block print:px-8 print:py-4">
        <div className="grid-content print:!col-span-1 print:!grid-column-auto">
        {/* Report Header */}
        <div className="mb-8 border-b border-gray-200 pb-6 print:mb-4 print:pb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center bg-blue-600 print:bg-blue-600">
              <span className="text-sm font-bold text-white">RC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 print:text-lg">RealCore Group - Technologie-Trends</h1>
              <p className="text-sm text-gray-500">DSAG Technologietage 2026</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Erstellt: {new Date().toLocaleDateString("de-DE")}</span>
            <span>Trends: {selectedTrends.length}</span>
            {industryParam && industryParam !== "all" && <span>Branche: {industryParam}</span>}
            {categoryParam && categoryParam !== "Alle" && <span>Kategorie: {categoryParam}</span>}
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8 border border-gray-200 bg-gray-50 p-4 print:mb-4 print:bg-gray-100 print:p-3">
          <h2 className="mb-3 text-base font-semibold text-gray-900">Zusammenfassung</h2>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4 print:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-blue-600 print:text-xl">{selectedTrends.length}</div>
              <div className="text-gray-600">Trends</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 print:text-xl">
                {selectedTrends.reduce((acc, t) => acc + t.sapSolutions.filter(s => s.available).length, 0)}
              </div>
              <div className="text-gray-600">SAP verfügbar</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 print:text-xl">
                {selectedTrends.filter(t => t.investmentPriority === "Kritisch").length}
              </div>
              <div className="text-gray-600">Kritisch</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 print:text-xl">
                {Math.round(selectedTrends.reduce((acc, t) => acc + t.maturityPercent, 0) / selectedTrends.length)}%
              </div>
              <div className="text-gray-600">Avg. Reife</div>
            </div>
          </div>
        </div>

        {/* Trends List */}
        <div className="space-y-6 print:space-y-4">
          {selectedTrends.map((trend, index) => (
            <div 
              key={trend.id} 
              className="border border-gray-200 p-4 print:break-inside-avoid print:p-3"
            >
              {/* Trend Header */}
              <div className="mb-3 flex items-start justify-between gap-4 print:mb-2">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500">{index + 1}.</span>
                    <span className={cn(
                      "rounded px-2 py-0.5 text-xs font-medium",
                      trend.status === "established" ? "bg-emerald-100 text-emerald-700" :
                      trend.status === "growing" ? "bg-blue-100 text-blue-700" :
                      trend.status === "emerging" ? "bg-amber-100 text-amber-700" :
                      "bg-purple-100 text-purple-700"
                    )}>
                      {statusLabels[trend.status]}
                    </span>
                    <span className="text-xs text-gray-500">{trend.category}</span>
                    {trend.realcoreExpertise && (
                      <span className="flex items-center gap-1 text-xs font-medium text-blue-600">
                        <Award className="h-3 w-3" />
                        RC
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 print:text-sm">{trend.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600 print:text-base">{trend.maturityPercent}%</div>
                  <div className="text-xs text-gray-500">Reifegrad</div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-3 text-sm text-gray-600 print:mb-2 print:text-xs">{trend.description}</p>

              {/* Metrics Row */}
              <div className="mb-3 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4 print:mb-2 print:grid-cols-4">
                <div className="rounded bg-gray-100 px-2 py-1 print:bg-gray-50">
                  <span className="text-gray-500">Adoption:</span>{" "}
                  <span className="font-medium text-gray-900">{trend.marketAdoption}%</span>
                </div>
                <div className="rounded bg-gray-100 px-2 py-1 print:bg-gray-50">
                  <span className="text-gray-500">Priorität:</span>{" "}
                  <span className={cn("font-medium", 
                    trend.investmentPriority === "Kritisch" ? "text-red-600" :
                    trend.investmentPriority === "Hoch" ? "text-amber-600" :
                    "text-gray-900"
                  )}>{trend.investmentPriority}</span>
                </div>
                <div className="rounded bg-gray-100 px-2 py-1 print:bg-gray-50">
                  <span className="text-gray-500">Gartner:</span>{" "}
                  <span className="font-medium text-gray-900">{trend.gartnerPhase.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <div className="rounded bg-gray-100 px-2 py-1 print:bg-gray-50">
                  <span className="text-gray-500">Timeline:</span>{" "}
                  <span className="font-medium text-gray-900">{trend.timelineYear}</span>
                </div>
              </div>

              {/* SAP Solutions */}
              {trend.sapSolutions.length > 0 && (
                <div className="mb-2">
                  <h4 className="mb-1 flex items-center gap-1 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    SAP-Lösungen
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {trend.sapSolutions.map((sol) => (
                      <span
                        key={sol.name}
                        className={cn(
                          "rounded px-2 py-0.5 text-xs",
                          sol.available ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        )}
                      >
                        {sol.name}
                        {!sol.available && sol.plannedDate && ` (${sol.plannedDate})`}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries */}
              <div className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-3 w-3 shrink-0 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {trend.industries.map((ind) => (
                    <span key={ind} className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600 print:bg-gray-50">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 print:mt-4">
          <p>© {new Date().getFullYear()} RealCore Group GmbH - DSAG Technologietage 2026</p>
          <p className="mt-1">Dieser Report wurde automatisch generiert. Alle Angaben ohne Gewähr.</p>
        </div>
        </div>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1.5cm;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  )
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="text-muted-foreground">Laden...</div></div>}>
      <ReportContent />
    </Suspense>
  )
}
