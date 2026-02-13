import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 px-4 pb-12 pt-16 sm:px-6 sm:pb-20 sm:pt-24 md:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-[500px] sm:w-[800px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2">
            <Sparkles className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-primary sm:text-sm">DSAG Technologietage 2026</span>
          </div>

          <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl lg:text-7xl">
            Technologie-Trends der{" "}
            <span className="text-primary">Digitalisierung</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:mt-6 sm:text-lg md:text-xl">
            Entdecken Sie die aktuellen und zukuenftigen technologischen Trends mit passenden SAP-Loesungen 
            und alternativen Technologien fuer Ihr Unternehmen.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
            <a
              href="#trends"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all active:brightness-90 sm:w-auto sm:rounded-lg sm:py-3 hover:brightness-110"
            >
              Trends entdecken
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#uebersicht"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors active:bg-muted sm:w-auto sm:rounded-lg sm:py-3 hover:bg-muted"
            >
              Zur Uebersicht
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:mt-16 sm:gap-6 md:grid-cols-4">
            {[
              { value: "12", label: "Tech-Trends" },
              { value: "18+", label: "SAP-Loesungen" },
              { value: "7", label: "Kategorien" },
              { value: "2026", label: "Roadmap" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-card/50 p-3 backdrop-blur-sm sm:p-4">
                <div className="font-display text-xl font-bold text-primary sm:text-2xl md:text-3xl">{stat.value}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground sm:mt-1 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
