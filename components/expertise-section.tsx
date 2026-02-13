import { trends } from "@/lib/trends-data"
import { cn } from "@/lib/utils"
import { Award, Users, Building2, TrendingUp, ArrowRight } from "lucide-react"

const expertiseTrends = trends.filter((t) => t.realcoreExpertise)

const stats = [
  { icon: Award, value: `${expertiseTrends.length}`, label: "Kompetenzfelder", description: "Tiefgehende Expertise in aktuellen Tech-Trends" },
  { icon: Building2, value: "200+", label: "SAP-Projekte", description: "Erfolgreich umgesetzte Transformationsprojekte" },
  { icon: Users, value: "500+", label: "Berater", description: "Zertifizierte SAP-Experten im DACH-Raum" },
  { icon: TrendingUp, value: "15+", label: "Jahre Erfahrung", description: "In SAP-Beratung und digitaler Transformation" },
]

const services = [
  {
    title: "S/4HANA Transformation",
    description: "End-to-End-Begleitung bei der Migration auf S/4HANA Cloud mit Clean-Core-Strategie, Custom-Code-Analyse und BTP-Erweiterungskonzept.",
    tags: ["RISE with SAP", "Clean Core", "Greenfield / Brownfield"],
  },
  {
    title: "SAP BTP & Extension Development",
    description: "Entwicklung von Side-by-Side-Erweiterungen auf der SAP Business Technology Platform mit CAP, Fiori und ABAP Cloud.",
    tags: ["SAP CAP", "Fiori Elements", "ABAP Cloud"],
  },
  {
    title: "Integration & Automation",
    description: "Aufbau moderner Integrationsarchitekturen mit SAP Integration Suite, Event Mesh und Process Automation fuer nahtlose Prozesse.",
    tags: ["SAP CPI", "Event Mesh", "RPA"],
  },
  {
    title: "Data & Analytics",
    description: "Implementierung von SAP Datasphere, SAP Analytics Cloud und Master Data Governance fuer datengetriebene Entscheidungen.",
    tags: ["Datasphere", "SAC", "MDG"],
  },
  {
    title: "KI & Intelligent Enterprise",
    description: "Einfuehrung von SAP Business AI, Joule und KI-gestuetzten Prozessen fuer ein intelligentes Unternehmen.",
    tags: ["SAP Joule", "AI Core", "Process Mining"],
  },
  {
    title: "DevOps & Platform Engineering",
    description: "Aufbau von CI/CD-Pipelines, GitOps-Workflows und Developer-Plattformen fuer SAP-Landschaften.",
    tags: ["gCTS", "CI/CD", "Terraform"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-16 border-t border-border/50 px-4 py-10 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
            <Award className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">RealCore Group Expertise</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl md:text-4xl">
            Unsere Kompetenz fuer Ihre Transformation
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:mt-3 sm:text-base">
            RealCore Group begleitet SAP-Kunden ganzheitlich bei der digitalen Transformation. Von der Strategie ueber die Implementierung bis zum laufenden Betrieb.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-xl border border-border/50 bg-card p-4 sm:p-5">
                <Icon className="mb-2 h-5 w-5 text-primary sm:mb-3" />
                <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</div>
                <div className="text-[13px] font-medium text-foreground sm:text-sm">{stat.label}</div>
                <div className="mt-1 hidden text-[12px] text-muted-foreground sm:block">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-card p-4 transition-all sm:p-5 hover:border-primary/20"
            >
              <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">{service.description}</p>
              <div className="no-scrollbar mt-3 flex gap-1.5 overflow-x-auto sm:flex-wrap sm:gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="shrink-0 rounded-md bg-primary/5 px-2 py-1 text-[11px] font-medium text-primary sm:text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Trends */}
        <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:mt-12 sm:p-6">
          <h3 className="mb-3 font-display text-base font-semibold text-foreground sm:mb-4 sm:text-lg">
            Unsere Expertise deckt {expertiseTrends.length} der {trends.length} Technologietrends ab
          </h3>
          <div className="no-scrollbar -mx-1 flex flex-wrap gap-2">
            {expertiseTrends.map((trend) => (
              <a
                key={trend.id}
                href="#trends"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-background px-3 py-2 text-[12px] font-medium text-foreground transition-colors sm:text-[13px]",
                  "hover:border-primary/40 hover:bg-primary/5"
                )}
              >
                {trend.title}
                <ArrowRight className="h-3 w-3 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
