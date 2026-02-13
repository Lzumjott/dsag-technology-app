import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50 px-6 pb-20 pt-24 md:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">DSAG Technologietage 2026</span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Technologie-Trends der{" "}
            <span className="text-primary">Digitalisierung</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Entdecken Sie die aktuellen und zukuenftigen technologischen Trends mit passenden SAP-Loesungen 
            und alternativen Technologien fuer Ihr Unternehmen.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#trends"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Trends entdecken
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#uebersicht"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-muted"
            >
              Zur Uebersicht
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "12", label: "Tech-Trends" },
              { value: "18+", label: "SAP-Loesungen" },
              { value: "7", label: "Kategorien" },
              { value: "2026", label: "Roadmap" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
