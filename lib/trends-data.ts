export type TrendStatus = "established" | "growing" | "emerging" | "future"

export interface SapSolution {
  name: string
  description: string
  available: boolean
  plannedDate?: string
}

export interface AlternativeSolution {
  name: string
  description: string
}

export interface TechTrend {
  id: string
  title: string
  category: string
  description: string
  impact: string
  status: TrendStatus
  maturityPercent: number
  sapSolutions: SapSolution[]
  alternatives: AlternativeSolution[]
  keyBenefits: string[]
  icon: string
}

export const categories = [
  "Alle",
  "KI & Machine Learning",
  "Cloud & Infrastruktur",
  "Daten & Analytics",
  "Automatisierung",
  "Sicherheit",
  "Nachhaltigkeit",
  "Integration",
] as const

export type Category = (typeof categories)[number]

export const statusLabels: Record<TrendStatus, string> = {
  established: "Etabliert",
  growing: "Wachsend",
  emerging: "Aufkommend",
  future: "Zukunft",
}

export const statusColors: Record<TrendStatus, string> = {
  established: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  growing: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  emerging: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  future: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
}

export const trends: TechTrend[] = [
  {
    id: "gen-ai",
    title: "Generative KI im Unternehmen",
    category: "KI & Machine Learning",
    description:
      "Generative KI revolutioniert Geschaeftsprozesse von der Content-Erstellung ueber Code-Generierung bis zur automatisierten Entscheidungsfindung. Unternehmen setzen zunehmend auf LLMs fuer interne Workflows.",
    impact: "Sehr hoch",
    status: "growing",
    maturityPercent: 72,
    sapSolutions: [
      {
        name: "SAP Business AI (Joule)",
        description:
          "KI-Copilot integriert in SAP-Anwendungen fuer natuerlichsprachige Interaktion, automatisierte Analysen und intelligente Empfehlungen.",
        available: true,
      },
      {
        name: "SAP AI Core & AI Launchpad",
        description:
          "Plattform zum Training, Deployment und Management von KI-Modellen innerhalb der SAP BTP.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Microsoft Copilot / Azure OpenAI",
        description: "Enterprise-KI-Loesungen mit GPT-Integration in Microsoft 365 und Azure-Dienste.",
      },
    ],
    keyBenefits: [
      "Bis zu 40% Produktivitaetssteigerung",
      "Automatisierte Dokumentenverarbeitung",
      "Intelligente Entscheidungsunterstuetzung",
    ],
    icon: "brain",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & Autonome Systeme",
    category: "KI & Machine Learning",
    description:
      "KI-Agenten, die eigenstaendig komplexe Aufgaben planen, ausfuehren und optimieren. Multi-Agent-Systeme koordinieren sich fuer End-to-End-Prozessautomatisierung.",
    impact: "Hoch",
    status: "emerging",
    maturityPercent: 35,
    sapSolutions: [
      {
        name: "SAP Joule Agents (geplant)",
        description:
          "Autonome KI-Agenten innerhalb des SAP-Oekosystems, die prozessuebergreifend agieren und selbststaendig Workflows ausfuehren.",
        available: false,
        plannedDate: "Q4 2026",
      },
    ],
    alternatives: [
      {
        name: "LangChain / AutoGen / CrewAI",
        description: "Open-Source-Frameworks fuer den Aufbau von Multi-Agent-KI-Systemen.",
      },
      {
        name: "Google Vertex AI Agent Builder",
        description: "Plattform zur Erstellung und Verwaltung autonomer KI-Agenten in der Cloud.",
      },
    ],
    keyBenefits: [
      "Vollautomatisierte End-to-End-Prozesse",
      "Reduzierte manuelle Eingriffe",
      "Skalierbare Prozessautomatisierung",
    ],
    icon: "bot",
  },
  {
    id: "clean-core",
    title: "Clean Core & Composable ERP",
    category: "Cloud & Infrastruktur",
    description:
      "Der Trend zu einem sauberen ERP-Kern mit erweiterbarer Architektur. Unternehmen migrieren weg von Customizing hin zu API-basierten Erweiterungen und Side-by-Side-Entwicklung.",
    impact: "Sehr hoch",
    status: "established",
    maturityPercent: 85,
    sapSolutions: [
      {
        name: "SAP S/4HANA Cloud (Public Edition)",
        description:
          "Clean-Core-ERP mit standardisierten Prozessen und cloud-nativer Erweiterbarkeit ueber SAP BTP.",
        available: true,
      },
      {
        name: "SAP Build",
        description:
          "Low-Code/No-Code-Plattform fuer Erweiterungen des Clean Core ohne Kernmodifikationen.",
        available: true,
      },
    ],
    alternatives: [],
    keyBenefits: [
      "Reduzierte Upgrade-Komplexitaet",
      "Schnellere Innovationszyklen",
      "Geringere TCO",
    ],
    icon: "layers",
  },
  {
    id: "data-fabric",
    title: "Data Fabric & Data Mesh",
    category: "Daten & Analytics",
    description:
      "Moderne Datenarchitekturen, die verteilte Datenquellen ueber eine einheitliche Governance-Schicht verbinden. Dezentrale Datenverantwortung bei zentraler Qualitaetssicherung.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 58,
    sapSolutions: [
      {
        name: "SAP Datasphere",
        description:
          "Business Data Fabric fuer die Verbindung, Harmonisierung und Analyse von SAP- und Nicht-SAP-Daten.",
        available: true,
      },
      {
        name: "SAP Master Data Governance",
        description:
          "Zentrale Stammdatenverwaltung fuer konsistente Datenhaltung ueber alle Systeme hinweg.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Databricks Lakehouse",
        description: "Einheitliche Analytics-Plattform mit Data Lake und Data Warehouse Funktionalitaet.",
      },
    ],
    keyBenefits: [
      "Einheitliche Datensicht",
      "Verbesserte Datenqualitaet",
      "Beschleunigte Analytics",
    ],
    icon: "database",
  },
  {
    id: "hyperautomation",
    title: "Hyperautomation & Process Mining",
    category: "Automatisierung",
    description:
      "Kombination von RPA, KI, Process Mining und Low-Code fuer die umfassende Automatisierung von Geschaeftsprozessen. Identifikation und Beseitigung von Engpaessen in Echtzeit.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 65,
    sapSolutions: [
      {
        name: "SAP Signavio",
        description:
          "Process Mining, Process Management und Process Intelligence fuer datengetriebene Prozessoptimierung.",
        available: true,
      },
      {
        name: "SAP Build Process Automation",
        description:
          "RPA und Workflow-Automatisierung integriert in die SAP-Landschaft.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Celonis",
        description: "Fuehrende Process-Mining-Plattform mit KI-gestuetzter Prozessoptimierung.",
      },
    ],
    keyBenefits: [
      "Bis zu 60% Prozessbeschleunigung",
      "Echtzeit-Prozesstransparenz",
      "Datenbasierte Optimierung",
    ],
    icon: "workflow",
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security",
    category: "Sicherheit",
    description:
      "Sicherheitsmodell nach dem Prinzip 'Never trust, always verify'. Kontinuierliche Authentifizierung und Autorisierung fuer jeden Zugriff, unabhaengig vom Netzwerkstandort.",
    impact: "Sehr hoch",
    status: "established",
    maturityPercent: 78,
    sapSolutions: [
      {
        name: "SAP Cloud Identity Services",
        description:
          "Identity Authentication und Identity Provisioning fuer sicheres Zugriffsmanagement.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Zscaler / Palo Alto Prisma",
        description: "Enterprise Zero-Trust-Plattformen fuer Netzwerk- und Anwendungssicherheit.",
      },
      {
        name: "Microsoft Entra ID",
        description: "Cloud-basierte Identitaets- und Zugriffsverwaltung mit Zero-Trust-Ansatz.",
      },
    ],
    keyBenefits: [
      "Reduzierte Angriffsflaeche",
      "Granulare Zugriffskontrolle",
      "Compliance-konform",
    ],
    icon: "shield",
  },
  {
    id: "green-it",
    title: "Green IT & Sustainable Operations",
    category: "Nachhaltigkeit",
    description:
      "Nachhaltige IT-Strategien zur Reduktion des CO2-Fussabdrucks. Energieeffiziente Cloud-Architekturen, Carbon Accounting und nachhaltige Lieferketten-Transparenz.",
    impact: "Mittel",
    status: "growing",
    maturityPercent: 48,
    sapSolutions: [
      {
        name: "SAP Sustainability Control Tower",
        description:
          "Zentrale Plattform fuer ESG-Reporting, Carbon Footprint Tracking und Nachhaltigkeitsmanagement.",
        available: true,
      },
      {
        name: "SAP Green Ledger (geplant)",
        description:
          "Integrierte Nachhaltigkeitsbuchhaltung im Hauptbuch fuer automatisiertes Carbon Accounting.",
        available: false,
        plannedDate: "2027",
      },
    ],
    alternatives: [
      {
        name: "Persefoni / Watershed",
        description: "Spezialisierte Carbon-Accounting-Plattformen fuer Emissions-Management.",
      },
    ],
    keyBenefits: [
      "ESG-Compliance",
      "Transparente CO2-Bilanz",
      "Nachhaltige Lieferketten",
    ],
    icon: "leaf",
  },
  {
    id: "composable-integration",
    title: "API-First & Event-Driven Architecture",
    category: "Integration",
    description:
      "Moderne Integrationsarchitekturen basierend auf APIs, Events und Microservices. Echtzeit-Datenaustausch zwischen Cloud- und On-Premise-Systemen.",
    impact: "Hoch",
    status: "established",
    maturityPercent: 80,
    sapSolutions: [
      {
        name: "SAP Integration Suite",
        description:
          "Umfassende iPaaS-Loesung fuer Cloud-Integration, API-Management, Events und Trading Partner Management.",
        available: true,
      },
      {
        name: "SAP Event Mesh",
        description:
          "Event-Broker fuer asynchrone, event-getriebene Kommunikation zwischen SAP- und Drittanbieter-Systemen.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "MuleSoft / Boomi",
        description: "Enterprise-iPaaS-Plattformen fuer API-basierte Integration.",
      },
    ],
    keyBenefits: [
      "Echtzeit-Datensynchronisation",
      "Flexible Systemlandschaft",
      "Reduzierte Integrationskosten",
    ],
    icon: "plug",
  },
  {
    id: "digital-twin",
    title: "Digital Twins & Industrie 4.0",
    category: "Automatisierung",
    description:
      "Digitale Zwillinge bilden physische Assets, Prozesse und Systeme virtuell ab. Ermoeglichen Simulation, Vorhersage und Optimierung in Echtzeit.",
    impact: "Mittel",
    status: "emerging",
    maturityPercent: 40,
    sapSolutions: [
      {
        name: "SAP Digital Manufacturing",
        description:
          "MES-Loesung mit Digital-Twin-Faehigkeiten fuer Fertigungsprozesse.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Siemens Xcelerator / PTC ThingWorx",
        description: "Industrielle IoT- und Digital-Twin-Plattformen fuer Manufacturing.",
      },
      {
        name: "Microsoft Azure Digital Twins",
        description: "Cloud-Plattform fuer die Erstellung von Digital-Twin-Modellen und -Loesungen.",
      },
    ],
    keyBenefits: [
      "Predictive Maintenance",
      "Produktionsoptimierung",
      "Schnellere Marktreife",
    ],
    icon: "cpu",
  },
  {
    id: "quantum-ready",
    title: "Quantum Computing Readiness",
    category: "KI & Machine Learning",
    description:
      "Vorbereitung auf Quantencomputing fuer Optimierungsprobleme, Materialforschung und Kryptographie. Hybride klassisch-quantenbasierte Algorithmen gewinnen an Bedeutung.",
    impact: "Niedrig (langfristig hoch)",
    status: "future",
    maturityPercent: 12,
    sapSolutions: [],
    alternatives: [
      {
        name: "IBM Qiskit / Google Cirq",
        description: "Open-Source-Frameworks fuer Quantencomputing-Algorithmen und -Experimente.",
      },
      {
        name: "Amazon Braket",
        description: "AWS-Service fuer Quantencomputing-Experimente und hybride Algorithmen.",
      },
    ],
    keyBenefits: [
      "Loesungen fuer bisher unlösbare Probleme",
      "Quantenresistente Kryptographie",
      "Wettbewerbsvorteil als Early Adopter",
    ],
    icon: "atom",
  },
  {
    id: "edge-computing",
    title: "Edge Computing & 5G",
    category: "Cloud & Infrastruktur",
    description:
      "Verlagerung von Rechenleistung an den Netzwerkrand fuer Echtzeit-Verarbeitung. In Kombination mit 5G entstehen neue Moeglichkeiten fuer IoT, AR/VR und autonome Systeme.",
    impact: "Mittel",
    status: "growing",
    maturityPercent: 52,
    sapSolutions: [
      {
        name: "SAP Edge Services",
        description:
          "Edge-Computing-Loesung fuer die lokale Datenverarbeitung nahe an der Datenquelle mit SAP-Integration.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "AWS Outposts / Azure Stack Edge",
        description: "Hybride Edge-Computing-Loesungen der grossen Hyperscaler.",
      },
    ],
    keyBenefits: [
      "Minimale Latenzzeiten",
      "Offline-Faehigkeit",
      "Lokale Datenverarbeitung",
    ],
    icon: "radio",
  },
  {
    id: "low-code",
    title: "Low-Code / No-Code Entwicklung",
    category: "Automatisierung",
    description:
      "Demokratisierung der Softwareentwicklung durch visuelle Entwicklungsumgebungen. Citizen Developer erstellen eigenstaendig Anwendungen und Automatisierungen.",
    impact: "Hoch",
    status: "established",
    maturityPercent: 75,
    sapSolutions: [
      {
        name: "SAP Build Apps",
        description:
          "Visuelle Entwicklungsumgebung fuer die Erstellung von Enterprise-Anwendungen ohne tiefgreifende Programmierkenntnisse.",
        available: true,
      },
      {
        name: "SAP AppGyver (integriert in SAP Build)",
        description:
          "No-Code-Plattform fuer die schnelle Erstellung von Web- und Mobile-Apps.",
        available: true,
      },
    ],
    alternatives: [
      {
        name: "Microsoft Power Platform",
        description: "Low-Code-Plattform fuer Apps, Automatisierung, virtuelle Agenten und Dashboards.",
      },
    ],
    keyBenefits: [
      "Schnellere Applikationsentwicklung",
      "Entlastung der IT-Abteilung",
      "Citizen Developer Enablement",
    ],
    icon: "blocks",
  },
]
