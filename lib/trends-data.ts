export type TrendStatus = "established" | "growing" | "emerging" | "future"
export type GartnerPhase =
  | "Innovation Trigger"
  | "Peak of Inflated Expectations"
  | "Trough of Disillusionment"
  | "Slope of Enlightenment"
  | "Plateau of Productivity"

export interface SapSolution {
  name: string
  description: string
  available: boolean
  plannedDate?: string
  module?: string
}

export interface AlternativeSolution {
  name: string
  description: string
  vendor?: string
}

export type Industry = 
  | "Automotive"
  | "Chemie & Pharma"
  | "Energie & Versorgung"
  | "Fertigung & Maschinenbau"
  | "Finanzdienstleistungen"
  | "Handel & Konsumgüter"
  | "Logistik & Transport"
  | "Öffentlicher Sektor"
  | "Gesundheitswesen"
  | "Telekommunikation"
  | "Professional Services"

export const industries: Industry[] = [
  "Automotive",
  "Chemie & Pharma",
  "Energie & Versorgung",
  "Fertigung & Maschinenbau",
  "Finanzdienstleistungen",
  "Handel & Konsumgüter",
  "Logistik & Transport",
  "Öffentlicher Sektor",
  "Gesundheitswesen",
  "Telekommunikation",
  "Professional Services",
]

export interface TechTrend {
  id: string
  title: string
  category: string
  description: string
  impact: "Sehr hoch" | "Hoch" | "Mittel" | "Niedrig"
  status: TrendStatus
  maturityPercent: number
  sapSolutions: SapSolution[]
  alternatives: AlternativeSolution[]
  keyBenefits: string[]
  useCases: string[]
  icon: string
  gartnerPhase: GartnerPhase
  marketAdoption: number
  investmentPriority: "Kritisch" | "Hoch" | "Mittel" | "Beobachten"
  realcoreExpertise: boolean
  timelineYear: number
  industries: Industry[]
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
  "Plattform & DevOps",
  "User Experience",
] as const

export const industryColors: Record<Industry, string> = {
  "Automotive": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Chemie & Pharma": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Energie & Versorgung": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Fertigung & Maschinenbau": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Finanzdienstleistungen": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Handel & Konsumgüter": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Logistik & Transport": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Öffentlicher Sektor": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "Gesundheitswesen": "bg-red-500/20 text-red-400 border-red-500/30",
  "Telekommunikation": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "Professional Services": "bg-slate-500/20 text-slate-400 border-slate-500/30",
}

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

export const investmentColors: Record<string, string> = {
  Kritisch: "text-red-400",
  Hoch: "text-amber-400",
  Mittel: "text-sky-400",
  Beobachten: "text-muted-foreground",
}

export const gartnerColors: Record<GartnerPhase, string> = {
  "Innovation Trigger": "text-fuchsia-400",
  "Peak of Inflated Expectations": "text-amber-400",
  "Trough of Disillusionment": "text-red-400",
  "Slope of Enlightenment": "text-sky-400",
  "Plateau of Productivity": "text-emerald-400",
}

export const trends: TechTrend[] = [
  {
    id: "gen-ai",
    title: "Generative KI im Unternehmen",
    category: "KI & Machine Learning",
    description:
      "Generative KI revolutioniert Geschäftsprozesse von der Content-Erstellung über Code-Generierung bis zur automatisierten Entscheidungsfindung. Large Language Models (LLMs) wie GPT-4, Claude und Gemini werden zunehmend in Enterprise-Workflows integriert. SAP hat mit Joule einen eigenen KI-Copiloten eingeführt, der natürlichsprachige Interaktion mit SAP-Systemen ermöglicht und über 80 Use Cases in S/4HANA, SuccessFactors und Ariba abdeckt.",
    impact: "Sehr hoch",
    status: "growing",
    maturityPercent: 72,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 65,
    investmentPriority: "Kritisch",
    realcoreExpertise: true,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Business AI (Joule)",
        description:
          "KI-Copilot integriert in S/4HANA Cloud, SuccessFactors, Ariba und Concur. Unterstützt natürlichsprachige Abfragen, automatisierte Analysen, Dokumentenzusammenfassungen und intelligente Empfehlungen. Über 80 vordefinierte Business-AI-Szenarien verfügbar.",
        available: true,
        module: "SAP BTP / S/4HANA Cloud",
      },
      {
        name: "SAP AI Core & AI Launchpad",
        description:
          "Managed Runtime für das Training, Deployment und Monitoring von KI-Modellen auf der SAP Business Technology Platform. Unterstützt Open-Source-Modelle, eigene Modelle und SAP-eigene Foundation Models.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Business Data Cloud mit AI",
        description:
          "Integration von Generative AI in die SAP Business Data Cloud für natürlichsprachige Datenexploration und automatische Insight-Generierung auf Basis von SAP- und Drittanbieter-Daten.",
        available: true,
        module: "SAP Datasphere",
      },
    ],
    alternatives: [
      {
        name: "Microsoft Copilot / Azure OpenAI Service",
        description:
          "Enterprise-KI mit GPT-4-Integration in Microsoft 365, Dynamics 365 und Azure. Copilot Studio ermöglicht die Erstellung eigener KI-Agenten.",
        vendor: "Microsoft",
      },
      {
        name: "Google Gemini for Workspace & Vertex AI",
        description:
          "Gemini-Modelle integriert in Google Workspace und als API über Vertex AI für kundenspezifische KI-Anwendungen.",
        vendor: "Google",
      },
      {
        name: "AWS Bedrock",
        description:
          "Managed Service für Foundation Models (Claude, Llama, Titan) mit Enterprise-Features wie Guardrails und Fine-Tuning.",
        vendor: "Amazon",
      },
    ],
    keyBenefits: [
      "Bis zu 40% Produktivitätssteigerung in Wissensarbeit",
      "Automatisierte Dokumentenverarbeitung und Klassifizierung",
      "Natürlichsprachige System-Interaktion",
      "Beschleunigte Entscheidungsfindung durch KI-gestützte Analysen",
    ],
    useCases: [
      "Automatisierte Rechnungsverarbeitung",
      "Intelligente Lieferantenauswahl",
      "Code-Generierung für ABAP und Fiori",
      "Automatisierte Berichterstellung",
      "Chatbot für HR-Self-Services",
    ],
    icon: "brain",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Professional Services"],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & Autonome Systeme",
    category: "KI & Machine Learning",
    description:
      "KI-Agenten handeln eigenständig und orchestrieren komplexe, mehrstufige Aufgaben. Multi-Agent-Systeme koordinieren sich untereinander und führen End-to-End-Prozesse ohne menschliches Eingreifen aus. Gartner prognostiziert, dass bis 2028 mindestens 15% der täglichen Arbeitsentscheidungen von Agentic AI getroffen werden. SAP plant mit Joule Agents eigene autonome Agenten, die prozessübergreifend in der SAP-Landschaft agieren.",
    impact: "Sehr hoch",
    status: "emerging",
    maturityPercent: 35,
    gartnerPhase: "Peak of Inflated Expectations",
    marketAdoption: 18,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2026,
    sapSolutions: [
      {
        name: "SAP Joule Collaborative Agents",
        description:
          "Autonome KI-Agenten innerhalb des SAP-Ökosystems, die prozessübergreifend agieren. Geplant für S/4HANA, SuccessFactors und Ariba mit der Fähigkeit, eigenständig Workflows auszuführen und Genehmigungen einzuholen.",
        available: false,
        plannedDate: "Q3 2026",
        module: "SAP BTP / S/4HANA Cloud",
      },
      {
        name: "SAP AI Agent Builder",
        description:
          "Low-Code-Werkzeug auf der SAP BTP zum Erstellen, Testen und Deployen eigener KI-Agenten mit Zugriff auf SAP-Geschäftsdaten und -prozesse.",
        available: false,
        plannedDate: "Q4 2026",
        module: "SAP BTP",
      },
    ],
    alternatives: [
      {
        name: "Microsoft AutoGen / Semantic Kernel",
        description:
          "Open-Source-Framework für Multi-Agent-Konversationen und autonome Task-Orchestrierung in Enterprise-Umgebungen.",
        vendor: "Microsoft",
      },
      {
        name: "LangChain / LangGraph / CrewAI",
        description:
          "Open-Source-Frameworks für den Aufbau von Agenten-Workflows mit Tool-Use, Reasoning und Multi-Agent-Koordination.",
        vendor: "Open Source",
      },
      {
        name: "Google Vertex AI Agent Builder",
        description:
          "Enterprise-Plattform zur Erstellung und Verwaltung autonomer KI-Agenten mit Grounding in Unternehmensdaten.",
        vendor: "Google",
      },
    ],
    keyBenefits: [
      "Vollautomatisierte End-to-End-Geschäftsprozesse",
      "80% weniger manuelle Eingriffe bei Routineentscheidungen",
      "Skalierbare Prozessautomatisierung über Systemgrenzen",
      "24/7-Verfügbarkeit für operative Aufgaben",
    ],
    useCases: [
      "Automatisierte Bestellabwicklung von Anfrage bis Zahlung",
      "Intelligente Eskalation bei SLA-Verletzungen",
      "Autonome Bestandsoptimierung",
      "Selbstständige Fehlerbehebung in IT-Systemen",
    ],
    icon: "bot",
    industries: ["Automotive", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Logistik & Transport", "Professional Services"],
  },
  {
    id: "clean-core",
    title: "Clean Core & Composable ERP",
    category: "Cloud & Infrastruktur",
    description:
      "SAPs strategische Ausrichtung auf einen modifikationsfreien ERP-Kern ist der wichtigste Architekturtrend für SAP-Kunden. Clean Core bedeutet: keine Z-Entwicklungen im Kern, Side-by-Side-Erweiterungen auf der BTP, API-basierte Integration und konsequente Nutzung der SAP-Standard-Prozesse. SAP unterstützt die Migration mit dem Custom Code Migration Tool und dem Clean Core Dashboard. Bis 2027 sollen alle neuen S/4HANA Cloud Features nur noch im Clean-Core-Modell verfügbar sein.",
    impact: "Sehr hoch",
    status: "established",
    maturityPercent: 85,
    gartnerPhase: "Plateau of Productivity",
    marketAdoption: 55,
    investmentPriority: "Kritisch",
    realcoreExpertise: true,
    timelineYear: 2023,
    sapSolutions: [
      {
        name: "SAP S/4HANA Cloud Public Edition",
        description:
          "Standardisiertes Cloud-ERP mit quartalsweisen Updates, clean-core-konformem Erweiterungsmodell und Nutzung von Key-User-Extensibility oder Developer Extensibility über SAP BTP.",
        available: true,
        module: "S/4HANA Cloud",
      },
      {
        name: "SAP S/4HANA Cloud Private Edition (RISE)",
        description:
          "Managed Private Cloud mit Migrationspfad für bestehende On-Premise-Kunden. Ermöglicht schrittweisen Übergang zu Clean Core mit Custom Code Analyse und Modernisierung.",
        available: true,
        module: "RISE with SAP",
      },
      {
        name: "SAP Build (Apps, Process Automation, Work Zone)",
        description:
          "Low-Code/No-Code-Suite für Erweiterungen des Clean Core. Umfasst App-Entwicklung, Prozessautomatisierung und ein zentrales Arbeitsportal ohne Kernmodifikationen.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Cloud ALM",
        description:
          "Application Lifecycle Management für die Cloud mit Clean Core Dashboard, Custom Code Analyse und Fit-to-Standard-Workshops.",
        available: true,
        module: "SAP Cloud ALM",
      },
    ],
    alternatives: [],
    keyBenefits: [
      "85% weniger Upgrade-Aufwand durch standardisierten Kern",
      "Schnellere Innovationszyklen mit quartalsweisen Cloud-Updates",
      "Signifikant geringere Total Cost of Ownership",
      "Zukunftssichere Architektur für KI und Automatisierung",
    ],
    useCases: [
      "Migration von ECC-Eigenentwicklungen auf BTP-Erweiterungen",
      "Fit-to-Standard-Analyse bestehender Prozesse",
      "Side-by-Side-Erweiterungen mit SAP CAP und Fiori Elements",
      "Custom Code Remediation mit ABAP Test Cockpit",
    ],
    icon: "layers",
    industries: ["Automotive", "Chemie & Pharma", "Energie & Versorgung", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Öffentlicher Sektor", "Gesundheitswesen", "Telekommunikation", "Professional Services"],
  },
  {
    id: "data-fabric",
    title: "Data Fabric & Data Mesh",
    category: "Daten & Analytics",
    description:
      "Moderne Datenarchitekturen brechen Datensilos auf und verbinden verteilte Quellen über eine einheitliche Governance-Schicht. Data Fabric automatisiert Datenintegration und -management mittels Metadaten und KI, während Data Mesh die dezentrale Datenverantwortung bei Domain-Teams verankert. SAP Datasphere ist SAPs Antwort auf diese Trends und fungiert als Business Data Fabric mit semantischer Schicht über SAP- und Non-SAP-Daten.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 58,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 38,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Datasphere",
        description:
          "Business Data Fabric mit semantischer Schicht, die SAP-Geschäftssemantik automatisch auf Daten überträgt. Unterstützt Datenvirtualisierung, Replikation und Federation über 100+ vordefinierte Konnektoren.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Master Data Governance (MDG)",
        description:
          "Zentrale Stammdatenverwaltung für Material, Lieferant, Kunde, Finanz- und kundenspezifische Objekte mit Workflow-basierter Governance und Datenqualitätssicherung.",
        available: true,
        module: "S/4HANA / MDG",
      },
      {
        name: "SAP Analytics Cloud (SAC)",
        description:
          "Cloud-Analytics-Plattform mit BI, Planung, Predictive Analytics und Integration in SAP Datasphere als semantische Schicht für Self-Service-Analytics.",
        available: true,
        module: "SAP Analytics Cloud",
      },
      {
        name: "SAP Data Intelligence Cloud",
        description:
          "Data-Orchestrierung und ML-Pipeline-Management für komplexe Datenlandschaften mit Kubernetes-basierter Architektur.",
        available: true,
        module: "SAP BTP",
      },
    ],
    alternatives: [
      {
        name: "Databricks Lakehouse Platform",
        description:
          "Einheitliche Analytics-Plattform mit Data Lake, Data Warehouse, Unity Catalog und Delta Lake für ACID-konforme Datenverarbeitung.",
        vendor: "Databricks",
      },
      {
        name: "Snowflake Data Cloud",
        description:
          "Cloud-Data-Warehouse mit Data Sharing, Marketplace und nativer Unterstützung für strukturierte und semi-strukturierte Daten.",
        vendor: "Snowflake",
      },
      {
        name: "Microsoft Fabric",
        description:
          "Unified-Analytics-Plattform mit OneLake, Lakehouse, Real-Time Analytics und Power BI unter einem Dach.",
        vendor: "Microsoft",
      },
    ],
    keyBenefits: [
      "Einheitliche Datensicht über 100+ Quellsysteme",
      "60% schnellere Time-to-Insight durch Self-Service-Analytics",
      "Automatisierte Datenqualitätssicherung",
      "Demokratisierung des Datenzugangs im Unternehmen",
    ],
    useCases: [
      "Unternehmensweites Reporting über SAP und Non-SAP",
      "Echtzeitanalyse von Lieferkettendaten",
      "Aufbau eines Enterprise Data Catalog",
      "KI-gestützte Datenqualitätsmonitoring",
    ],
    icon: "database",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Telekommunikation"],
  },
  {
    id: "hyperautomation",
    title: "Hyperautomation & Process Mining",
    category: "Automatisierung",
    description:
      "Hyperautomation kombiniert RPA, KI, Process Mining, Low-Code und iPaaS zu einer umfassenden Automatisierungsstrategie. Gartner zählt Hyperautomation zu den Top-Technologietrends. SAP Signavio liefert mit Process Mining und Process Management die analytische Grundlage, während SAP Build Process Automation die Ausführung übernimmt. Celonis bleibt der stärkste Wettbewerber im Process-Mining-Segment.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 65,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 42,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Signavio Process Transformation Suite",
        description:
          "Process Mining auf Basis von SAP-Eventlogs, Process Modelling (BPMN 2.0), Process Simulation und Benchmarking gegen SAP Best Practices. Integriert in SAP Cloud ALM und S/4HANA.",
        available: true,
        module: "SAP Signavio",
      },
      {
        name: "SAP Build Process Automation",
        description:
          "Low-Code-RPA- und Workflow-Engine mit über 300 vorgefertigten Bots und Workflows für SAP-Szenarien. Unterstützt UI- und API-basierte Automatisierung.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Intelligent Robotic Process Automation",
        description:
          "Attended und Unattended Bots für die Automatisierung repetitiver Aufgaben in SAP GUI, Fiori und Drittanwendungen.",
        available: true,
        module: "SAP BTP",
      },
    ],
    alternatives: [
      {
        name: "Celonis Execution Management System",
        description:
          "Marktführende Process-Mining-Plattform mit Process Intelligence, Action Engine und direkter SAP-Integration für datengetriebene Prozessoptimierung.",
        vendor: "Celonis",
      },
      {
        name: "UiPath Business Automation Platform",
        description:
          "Enterprise-RPA-Plattform mit KI-gestützter Automatisierung, Document Understanding und Process Mining.",
        vendor: "UiPath",
      },
      {
        name: "Microsoft Power Automate",
        description:
          "Cloud-basierte RPA- und Workflow-Plattform integriert in Microsoft 365 mit über 1.000 Konnektoren.",
        vendor: "Microsoft",
      },
    ],
    keyBenefits: [
      "Bis zu 60% Durchlaufzeitreduktion in Kernprozessen",
      "Echtzeit-Prozesstransparenz über die gesamte Wertschöpfungskette",
      "ROI innerhalb von 6-12 Monaten durch Quick Wins",
      "Datenbasierte Identifikation von Automatisierungspotenzial",
    ],
    useCases: [
      "Order-to-Cash-Prozessoptimierung",
      "Purchase-to-Pay-Automatisierung",
      "Automatisierte Rechnungsprüfung und -freigabe",
      "Compliance-Monitoring in Echtzeit",
    ],
    icon: "workflow",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Professional Services"],
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security & Cyber Resilience",
    category: "Sicherheit",
    description:
      "Zero Trust eliminiert implizites Vertrauen in Netzwerken und verlangt kontinuierliche Verifizierung für jeden Zugriff. Mit NIS2 (EU-Richtlinie seit Oktober 2024) und dem IT-Sicherheitsgesetz 2.0 müssen Unternehmen ihre Cyber-Resilienz massiv erhöhen. SAP bietet mit Cloud Identity Services, Enterprise Threat Detection und dem SAP Trust Center umfassende Sicherheitslösungen. Die EU-Verordnung DORA (Digital Operational Resilience Act) stellt zusätzliche Anforderungen an den Finanzsektor.",
    impact: "Sehr hoch",
    status: "established",
    maturityPercent: 78,
    gartnerPhase: "Plateau of Productivity",
    marketAdoption: 52,
    investmentPriority: "Kritisch",
    realcoreExpertise: true,
    timelineYear: 2023,
    sapSolutions: [
      {
        name: "SAP Cloud Identity Services (IAS/IPS)",
        description:
          "Identity Authentication Service (IAS) und Identity Provisioning Service (IPS) für Single Sign-On, Multi-Faktor-Authentifizierung und automatisierte Benutzer-Provisionierung über SCIM.",
        available: true,
        module: "SAP BTP Security",
      },
      {
        name: "SAP Enterprise Threat Detection (ETD)",
        description:
          "SIEM-Lösung speziell für SAP-Systeme zur Echtzeit-Erkennung von Angriffen, Anomalien und verdächtigen Aktivitäten in SAP-Logs.",
        available: true,
        module: "SAP Security",
      },
      {
        name: "SAP Cloud Connector & Private Link",
        description:
          "Sichere Konnektivität zwischen SAP BTP und On-Premise-Systemen über verschlüsselte Tunnel ohne eingehende Firewall-Öffnungen.",
        available: true,
        module: "SAP BTP Connectivity",
      },
    ],
    alternatives: [
      {
        name: "Zscaler Zero Trust Exchange",
        description:
          "Cloud-native Zero-Trust-Plattform für sicheren Internet-, SaaS- und Private-App-Zugriff ohne traditionelle VPNs.",
        vendor: "Zscaler",
      },
      {
        name: "CrowdStrike Falcon / Palo Alto Prisma",
        description:
          "Endpoint Detection and Response (EDR) und Cloud Security Posture Management (CSPM) für umfassende Cyber-Abwehr.",
        vendor: "CrowdStrike / Palo Alto",
      },
      {
        name: "Microsoft Entra ID + Defender",
        description:
          "Identity & Access Management mit Conditional Access, Privileged Identity Management und integriertem Threat-Schutz.",
        vendor: "Microsoft",
      },
    ],
    keyBenefits: [
      "Reduzierte Angriffsfläche durch Mikrosegmentierung",
      "NIS2- und DORA-Compliance sichergestellt",
      "Echtzeit-Bedrohungserkennung in SAP-Systemen",
      "Granulare, kontextbasierte Zugriffskontrolle",
    ],
    useCases: [
      "Absicherung hybrider SAP-Landschaften (Cloud + On-Premise)",
      "NIS2-konforme Zugriffsverwaltung",
      "SAP-Sicherheitsmonitoring in Echtzeit",
      "Privileged Access Management für SAP-Basis",
    ],
    icon: "shield",
    industries: ["Finanzdienstleistungen", "Öffentlicher Sektor", "Gesundheitswesen", "Energie & Versorgung", "Telekommunikation"],
  },
  {
    id: "green-it",
    title: "Green IT & ESG-Compliance",
    category: "Nachhaltigkeit",
    description:
      "Die EU Corporate Sustainability Reporting Directive (CSRD) verpflichtet ab 2024 schrittweise über 50.000 Unternehmen in der EU zu detailliertem ESG-Reporting nach den European Sustainability Reporting Standards (ESRS). Carbon Accounting, Scope-1/2/3-Emissionserfassung und Lieferketten-Transparenz werden zur Pflicht. SAP bietet mit dem Sustainability Control Tower und dem geplanten Green Ledger umfassende Lösungen für die Integration von Nachhaltigkeit in Finanzprozesse.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 48,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 30,
    investmentPriority: "Hoch",
    realcoreExpertise: false,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP Sustainability Control Tower",
        description:
          "Zentrale Plattform für ESG-Reporting, Carbon Footprint Tracking (Scope 1, 2, 3), Nachhaltigkeitskennzahlen und regulatorische Berichterstattung nach CSRD/ESRS.",
        available: true,
        module: "SAP Sustainability",
      },
      {
        name: "SAP Responsible Design and Production",
        description:
          "Lösung für Produktkonformität, erweiterte Herstellerverantwortung (EPR) und Kreislaufwirtschaft mit Tracking von Materialzusammensetzungen.",
        available: true,
        module: "SAP Sustainability",
      },
      {
        name: "SAP Green Ledger",
        description:
          "Integrierte Nachhaltigkeitsbuchhaltung im Hauptbuch für automatisiertes Carbon Accounting parallel zur Finanzbuchhaltung. Jede Finanztransaktion erhält eine CO2-Bewertung.",
        available: false,
        plannedDate: "2027",
        module: "S/4HANA Cloud",
      },
    ],
    alternatives: [
      {
        name: "Persefoni / Watershed",
        description:
          "Spezialisierte Carbon-Accounting-Plattformen für Scope-1/2/3-Emissionserfassung mit automatisierter Datensammlung und CDP-Reporting.",
        vendor: "Persefoni / Watershed",
      },
      {
        name: "Sphera / Ecoinvent",
        description:
          "LCA-Datenbanken und Product Carbon Footprint Tools für detaillierte Lebenszyklusanalysen.",
        vendor: "Sphera",
      },
    ],
    keyBenefits: [
      "CSRD/ESRS-Compliance fristgerecht umgesetzt",
      "Transparente Scope-1/2/3-CO2-Bilanz",
      "Integration von Nachhaltigkeit in Finanzprozesse",
      "Nachhaltige Lieferketten-Transparenz nach LKSG",
    ],
    useCases: [
      "Automatisiertes ESG-Reporting nach CSRD",
      "Product Carbon Footprint Berechnung",
      "Lieferketten-Due-Diligence nach LkSG",
      "Green Procurement und Lieferantenbewertung",
    ],
    icon: "leaf",
    industries: ["Automotive", "Chemie & Pharma", "Energie & Versorgung", "Fertigung & Maschinenbau", "Handel & Konsumgüter", "Logistik & Transport"],
  },
  {
    id: "composable-integration",
    title: "API-First & Event-Driven Architecture",
    category: "Integration",
    description:
      "Moderne Integrationsarchitekturen basieren auf APIs, Events und Microservices für Echtzeit-Datenaustausch. SAP Integration Suite ist SAPs zentrale iPaaS-Lösung und deckt Cloud Integration (CPI), API Management, Open Connectors, Integration Advisor und Trading Partner Management ab. Event-driven Architecture über SAP Event Mesh und Advanced Event Mesh (basierend auf Solace) ermöglicht asynchrone, lose gekoppelte Systemlandschaften.",
    impact: "Hoch",
    status: "established",
    maturityPercent: 80,
    gartnerPhase: "Plateau of Productivity",
    marketAdoption: 58,
    investmentPriority: "Kritisch",
    realcoreExpertise: true,
    timelineYear: 2023,
    sapSolutions: [
      {
        name: "SAP Integration Suite",
        description:
          "Umfassende iPaaS mit Cloud Integration (CPI), API Management, Open Connectors (200+ Third-Party-Adapter), Integration Advisor (KI-gestütztes B2B-Mapping) und Migration Assessment.",
        available: true,
        module: "SAP BTP Integration",
      },
      {
        name: "SAP Advanced Event Mesh (Solace)",
        description:
          "Enterprise-Event-Broker für Event Streaming, Event Mesh und Event Management. Unterstützt AMQP, MQTT, REST und JMS für Multi-Cloud- und Hybrid-Szenarien.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Graph (Beta)",
        description:
          "Einheitliche API über alle SAP-Geschäftsobjekte hinweg. Ermöglicht den Zugriff auf SAP-Daten über eine einzelne, konsistente RESTful API mit automatischem Data Joining.",
        available: true,
        module: "SAP BTP",
      },
    ],
    alternatives: [
      {
        name: "MuleSoft Anypoint Platform",
        description:
          "Enterprise-iPaaS mit API-Led Connectivity, Anypoint Exchange und umfassendem API-Lifecycle-Management.",
        vendor: "Salesforce/MuleSoft",
      },
      {
        name: "Boomi AtomSphere",
        description:
          "Cloud-native iPaaS mit Low-Code-Integration, API-Management und Master Data Hub.",
        vendor: "Boomi",
      },
      {
        name: "Confluent (Apache Kafka)",
        description:
          "Data-Streaming-Plattform basierend auf Apache Kafka für Event-Driven Architecture in Echtzeit.",
        vendor: "Confluent",
      },
    ],
    keyBenefits: [
      "Echtzeit-Datensynchronisation über alle Systeme",
      "Flexible, lose gekoppelte Systemlandschaft",
      "50% reduzierte Integrationskosten durch Wiederverwendung",
      "Zukunftssichere Architektur für Composable Enterprise",
    ],
    useCases: [
      "SAP-zu-Non-SAP-Echtzeit-Integration",
      "B2B-Integration mit Lieferanten und Partnern",
      "Event-basierte Bestandsaktualisierung über Systeme",
      "API-Gateway für SAP-Backend-Services",
    ],
    icon: "plug",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Telekommunikation"],
  },
  {
    id: "digital-twin",
    title: "Digital Twins & Industrie 4.0",
    category: "Automatisierung",
    description:
      "Digitale Zwillinge bilden physische Assets, Produktionslinien und gesamte Lieferketten virtuell ab. In Kombination mit IoT-Sensordaten, KI und Echtzeit-Analytics ermöglichen sie Predictive Maintenance, Produktionsoptimierung und What-if-Simulationen. SAP Digital Manufacturing und SAP Asset Performance Management liefern die Grundlage für industrielle Digital-Twin-Szenarien. Der Markt für Digital Twins wächst laut MarketsandMarkets auf 110 Milliarden USD bis 2028.",
    impact: "Hoch",
    status: "emerging",
    maturityPercent: 40,
    gartnerPhase: "Trough of Disillusionment",
    marketAdoption: 22,
    investmentPriority: "Mittel",
    realcoreExpertise: false,
    timelineYear: 2026,
    sapSolutions: [
      {
        name: "SAP Digital Manufacturing (DM)",
        description:
          "Cloud-MES-Lösung mit Digital-Twin-Fähigkeiten, Echtzeit-Produktionssteuerung, Qualitätsmanagement und Integration in S/4HANA Manufacturing.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
      {
        name: "SAP Asset Performance Management (APM)",
        description:
          "Predictive Maintenance und Asset Health Monitoring auf Basis von IoT-Sensordaten mit Machine-Learning-gestützter Ausfallvorhersage.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
      {
        name: "SAP Product Lifecycle Management (PLM)",
        description:
          "Produktlebenszyklusmanagement mit Engineering Change Management und Integration in Digital-Twin-Modelle für virtuelle Produktentwicklung.",
        available: true,
        module: "S/4HANA",
      },
    ],
    alternatives: [
      {
        name: "Siemens Xcelerator / MindSphere",
        description:
          "Industrielle IoT- und Digital-Twin-Plattform mit umfassendem CAD/CAM/PLM-Ökosystem und Open-API-Architektur.",
        vendor: "Siemens",
      },
      {
        name: "PTC ThingWorx / Creo",
        description:
          "IoT-Plattform mit AR-Integration (Vuforia) für industrielle Digital Twins und Remote Assistance.",
        vendor: "PTC",
      },
      {
        name: "Microsoft Azure Digital Twins",
        description:
          "Cloud-Plattform für die Erstellung von Digital-Twin-Graphen mit DTDL (Digital Twins Definition Language) und Azure IoT Hub.",
        vendor: "Microsoft",
      },
    ],
    keyBenefits: [
      "30% Reduktion ungeplanter Ausfallzeiten durch Predictive Maintenance",
      "Virtuelle Produktionsoptimierung vor realer Umsetzung",
      "Beschleunigte Marktreife durch digitale Simulation",
      "Echtzeit-Visibilität über alle Assets",
    ],
    useCases: [
      "Predictive Maintenance für Produktionsanlagen",
      "Virtuelle Inbetriebnahme neuer Fertigungslinien",
      "Echtzeit-Produktionssteuerung und -optimierung",
      "Supply-Chain-Simulation und Szenarioplanung",
    ],
    icon: "cpu",
    industries: ["Automotive", "Fertigung & Maschinenbau", "Energie & Versorgung", "Logistik & Transport"],
  },
  {
    id: "quantum-ready",
    title: "Quantum Computing Readiness",
    category: "KI & Machine Learning",
    description:
      "Quantencomputer versprechen exponentielle Beschleunigung für Optimierungsprobleme, Materialforschung und Kryptographie. IBM plant bis 2029 einen fehlerkorrigierten Quantencomputer mit 100.000 Qubits. Für SAP-Kunden ist vor allem die Quantum-Ready-Kryptographie relevant: NIST hat 2024 die ersten Post-Quantum-Kryptographie-Standards veröffentlicht (ML-KEM, ML-DSA). SAP hat bisher keine eigene Quantum-Lösung, die Vorbereitung auf Post-Quantum-Sicherheit ist jedoch kritisch.",
    impact: "Niedrig",
    status: "future",
    maturityPercent: 12,
    gartnerPhase: "Innovation Trigger",
    marketAdoption: 5,
    investmentPriority: "Beobachten",
    realcoreExpertise: false,
    timelineYear: 2029,
    sapSolutions: [],
    alternatives: [
      {
        name: "IBM Qiskit / IBM Quantum Network",
        description:
          "Führendes Quantum-Computing-Ökosystem mit 1.121-Qubit-Condor-Prozessor, Qiskit Runtime und Cloud-Zugang für Unternehmen.",
        vendor: "IBM",
      },
      {
        name: "Google Quantum AI (Willow)",
        description:
          "Quantenprozessor mit unterhalb der Fehlerschwelle liegender Fehlerkorrektur. Cloud-Zugang über Google Cloud.",
        vendor: "Google",
      },
      {
        name: "Amazon Braket",
        description:
          "AWS-Service für Quantum-Computing-Experimente mit Zugang zu Quantencomputern von IonQ, Rigetti und D-Wave.",
        vendor: "Amazon",
      },
    ],
    keyBenefits: [
      "Lösungen für bisher nicht berechenbare Optimierungsprobleme",
      "Post-Quantum-Kryptographie als Sicherheitsvorsorge",
      "Wettbewerbsvorteil durch frühe Kompetenzentwicklung",
      "Revolutionäre Fortschritte in Materialwissenschaft und Pharma",
    ],
    useCases: [
      "Supply-Chain-Optimierung mit Quantum Annealing",
      "Portfolio-Optimierung im Finanzsektor",
      "Migration zu Post-Quantum-Kryptographie (NIST-Standards)",
      "Molekülsimulation für Materialforschung",
    ],
    icon: "atom",
    industries: ["Chemie & Pharma", "Finanzdienstleistungen", "Energie & Versorgung"],
  },
  {
    id: "edge-computing",
    title: "Edge Computing & 5G-Integration",
    category: "Cloud & Infrastruktur",
    description:
      "Edge Computing verlagert Rechenleistung an den Netzwerkrand für Echtzeit-Verarbeitung mit minimaler Latenz. In Kombination mit 5G-Campusnetzen entstehen neue Industrial-IoT-Szenarien für Fertigung, Logistik und Einzelhandel. SAP Edge Services ermöglicht lokale Datenverarbeitung nahe an der Quelle mit automatischer Synchronisation in die SAP-Cloud. Der globale Edge-Computing-Markt wächst laut IDC auf über 300 Milliarden USD bis 2028.",
    impact: "Mittel",
    status: "growing",
    maturityPercent: 52,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 28,
    investmentPriority: "Mittel",
    realcoreExpertise: false,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP Edge Services",
        description:
          "Edge-Computing-Runtime für die lokale Datenvorverarbeitung, Filterung und Aggregation von IoT-Daten mit automatischer Cloud-Synchronisation in SAP-Systeme.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
      {
        name: "SAP Digital Manufacturing (Edge Deployment)",
        description:
          "On-Premise/Edge-Deployment-Option für SAP Digital Manufacturing mit lokaler MES-Funktionalität und Offline-Fähigkeit.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
    ],
    alternatives: [
      {
        name: "AWS Outposts / Wavelength / Local Zones",
        description:
          "Hybride Edge-Computing-Infrastruktur mit AWS-Services nahe am Endnutzer oder in der Fabrikhalle.",
        vendor: "Amazon",
      },
      {
        name: "Azure Stack Edge / Azure IoT Edge",
        description:
          "Edge-Computing mit Azure-KI-Modellen und Container-Workloads direkt auf Edge-Hardware.",
        vendor: "Microsoft",
      },
      {
        name: "Google Distributed Cloud Edge",
        description:
          "Google-Cloud-Services auf Edge-Hardware für 5G-Szenarien und lokale Datenverarbeitung.",
        vendor: "Google",
      },
    ],
    keyBenefits: [
      "Sub-Millisekunden-Latenz für Echtzeit-Anwendungen",
      "Offline-Fähigkeit für produktionskritische Szenarien",
      "Reduzierte Bandbreitenkosten durch lokale Vorverarbeitung",
      "Datensouveränität durch lokale Verarbeitung",
    ],
    useCases: [
      "Qualitätskontrolle mit KI-Vision an der Produktionslinie",
      "Echtzeit-Bestandserfassung im Lager",
      "Autonome mobile Roboter in der Logistik",
      "5G-Campusnetz für vernetzte Fertigung",
    ],
    icon: "radio",
    industries: ["Automotive", "Fertigung & Maschinenbau", "Logistik & Transport", "Handel & Konsumgüter", "Telekommunikation"],
  },
  {
    id: "low-code",
    title: "Low-Code / No-Code & Citizen Development",
    category: "Automatisierung",
    description:
      "Gartner prognostiziert, dass bis 2026 über 80% der Softwareprodukte von Nicht-Programmierern entwickelt werden. SAP Build ist SAPs Low-Code-Suite für die Demokratisierung der Entwicklung im SAP-Ökosystem. Citizen Developer erstellen eigenständig Anwendungen, Automatisierungen und Integrationen ohne tiefes Coding-Wissen. Die Governance durch Fusion Teams (IT + Fachbereich) ist entscheidend für den Erfolg.",
    impact: "Hoch",
    status: "established",
    maturityPercent: 75,
    gartnerPhase: "Plateau of Productivity",
    marketAdoption: 48,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Build Apps",
        description:
          "Visuelle Drag-and-Drop-Entwicklungsumgebung für Web- und Mobile-Apps mit SAP-Backend-Integration. Ehemals SAP AppGyver, jetzt vollständig in SAP Build integriert.",
        available: true,
        module: "SAP Build",
      },
      {
        name: "SAP Build Process Automation",
        description:
          "Low-Code-Workflows und RPA-Bots für die Automatisierung von Geschäftsprozessen mit vorgefertigten SAP-Szenarien.",
        available: true,
        module: "SAP Build",
      },
      {
        name: "SAP Build Work Zone",
        description:
          "Zentrales Arbeitsportal für personalisierte Aufgaben, Workflows und Business-Apps mit Integration aller SAP- und Drittanbieter-Anwendungen.",
        available: true,
        module: "SAP Build",
      },
    ],
    alternatives: [
      {
        name: "Microsoft Power Platform (Power Apps, Power Automate, Power BI)",
        description:
          "Umfassendes Low-Code-Ökosystem mit Dataverse, AI Builder und tiefer Integration in Microsoft 365 und Dynamics.",
        vendor: "Microsoft",
      },
      {
        name: "Mendix / OutSystems",
        description:
          "Enterprise-Low-Code-Plattformen für komplexe Anwendungen mit DevOps-Integration und Cloud-nativer Architektur.",
        vendor: "Siemens / OutSystems",
      },
      {
        name: "Retool / Appsmith",
        description:
          "Low-Code-Plattformen für interne Tools mit direktem Datenbankzugriff und API-Integration.",
        vendor: "Retool / Appsmith",
      },
    ],
    keyBenefits: [
      "10x schnellere Applikationsentwicklung als klassisches Coding",
      "Entlastung der IT-Abteilung durch Citizen Development",
      "Niedrigere Einstiegshürde für SAP-Erweiterungen",
      "Schnellere Reaktion auf Fachbereichsanforderungen",
    ],
    useCases: [
      "Self-Service-Apps für Genehmigungsworkflows",
      "Fachbereichs-Dashboards mit SAP-Daten",
      "Mobile Datenerfassung in Produktion und Lager",
      "Automatisierte Onboarding-Prozesse",
    ],
    icon: "blocks",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Öffentlicher Sektor", "Professional Services"],
  },
  {
    id: "sovereign-cloud",
    title: "Sovereign Cloud & DSGVO-Compliance",
    category: "Cloud & Infrastruktur",
    description:
      "Datensouveränität wird zum zentralen Thema für europäische Unternehmen. Sovereign Cloud garantiert, dass Daten in Europa verbleiben, europäischem Recht unterliegen und von europäischem Personal betrieben werden. SAP bietet mit der Sovereign Cloud Edition Lösungen speziell für regulierte Branchen. GAIA-X als europäische Cloud-Initiative setzt Standards für Datensouveränität und Interoperabilität.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 45,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 25,
    investmentPriority: "Hoch",
    realcoreExpertise: false,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP S/4HANA Cloud, Sovereign Edition",
        description:
          "EU-Access-kontrollierte Cloud-Umgebung mit garantierter Datenresidenz in Europa, europäischem Betriebspersonal und erhöhten Compliance-Standards für regulierte Branchen.",
        available: true,
        module: "RISE with SAP",
      },
      {
        name: "SAP Private Cloud mit EU Access",
        description:
          "Hyperscaler-gehostete SAP-Umgebung mit EU-Access-Kontrolle, verschlüsselter Datenhaltung und Einschränkung des Zugriffs auf EU-Personal.",
        available: true,
        module: "RISE with SAP",
      },
    ],
    alternatives: [
      {
        name: "T-Systems / Delos Cloud (SAP-zertifiziert)",
        description:
          "Deutsche souveräne Cloud-Infrastruktur auf Basis von Microsoft Azure mit T-Systems als Datentreuhänder.",
        vendor: "T-Systems / Microsoft",
      },
      {
        name: "OVHcloud / IONOS / Open Telekom Cloud",
        description:
          "Europäische Cloud-Anbieter mit garantierter Datenresidenz, DSGVO-Konformität und C5-Zertifizierung.",
        vendor: "Europäische Anbieter",
      },
    ],
    keyBenefits: [
      "100% DSGVO- und EU-Compliance garantiert",
      "Datensouveränität für regulierte Branchen (Finanzen, Gesundheit, öffentliche Verwaltung)",
      "Schutz vor extraterritorialen Datenzugriffen (CLOUD Act)",
      "GAIA-X-konforme Cloud-Architektur",
    ],
    useCases: [
      "Public-Sector-SAP-Systeme mit BSI C5-Attestierung",
      "Finanzdienstleister mit BAIT/DORA-Anforderungen",
      "Gesundheitswesen mit Patientendaten (KHZG)",
      "KRITIS-Unternehmen mit erhöhten Sicherheitsanforderungen",
    ],
    icon: "cloud",
    industries: ["Finanzdienstleistungen", "Öffentlicher Sektor", "Gesundheitswesen", "Energie & Versorgung"],
  },
  {
    id: "composable-commerce",
    title: "Composable Commerce & CX",
    category: "User Experience",
    description:
      "Composable Commerce ersetzt monolithische E-Commerce-Plattformen durch eine modulare Architektur aus Best-of-Breed-Komponenten. MACH-Architektur (Microservices, API-first, Cloud-native, Headless) ermöglicht schnelle Anpassung an Marktanforderungen. SAP Commerce Cloud unterstützt headless-Szenarien, während Emarsys KI-gesteuerte Personalisierung liefert.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 55,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 32,
    investmentPriority: "Mittel",
    realcoreExpertise: false,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP Commerce Cloud",
        description:
          "Enterprise-E-Commerce-Plattform mit Headless-API, B2B- und B2C-Szenarien, Product Content Management und nativer S/4HANA-Integration.",
        available: true,
        module: "SAP CX",
      },
      {
        name: "SAP Emarsys Customer Engagement",
        description:
          "KI-gestützte Omnichannel-Marketing-Plattform mit Echtzeit-Personalisierung, Predictive Analytics und Customer Lifecycle Management.",
        available: true,
        module: "SAP CX",
      },
      {
        name: "SAP Customer Data Platform (CDP)",
        description:
          "Einheitliche Kundendatenplattform für 360-Grad-Kundenprofile mit Consent-Management und Segmentierung.",
        available: true,
        module: "SAP CX",
      },
    ],
    alternatives: [
      {
        name: "Commercetools / VTEX",
        description:
          "Cloud-native, headless-first Commerce-Plattformen nach MACH-Prinzipien mit API-getriebenem Ansatz.",
        vendor: "Commercetools / VTEX",
      },
      {
        name: "Shopify Plus",
        description:
          "Enterprise-E-Commerce-Plattform mit umfangreichem App-Ökosystem und Headless-Storefront-API (Hydrogen).",
        vendor: "Shopify",
      },
    ],
    keyBenefits: [
      "Schnellere Time-to-Market für neue Commerce-Features",
      "Personalisierte Kundenerlebnisse über alle Kanäle",
      "Flexible Best-of-Breed-Architektur",
      "Nahtlose Integration von Commerce und ERP",
    ],
    useCases: [
      "Headless B2B-Webshop mit SAP-Backend",
      "Omnichannel-Personalisierung mit Emarsys",
      "Unified Commerce für Retail (Online + Store)",
      "Customer Data Platform für 360-Grad-Sicht",
    ],
    icon: "shopping-cart",
    industries: ["Handel & Konsumgüter", "Fertigung & Maschinenbau", "Chemie & Pharma"],
  },
  {
    id: "devops-platform",
    title: "Platform Engineering & DevOps für SAP",
    category: "Plattform & DevOps",
    description:
      "Platform Engineering baut interne Developer-Plattformen, die Self-Service-Infrastruktur bereitstellen und Entwicklerproduktivität maximieren. Für SAP-Landschaften bedeutet das: CI/CD-Pipelines für ABAP und Fiori, GitOps für BTP-Deployments, automatisierte Testframeworks und Infrastructure-as-Code für SAP-Systemlandschaften. SAP hat mit SAP Cloud Transport Management und gCTS die Grundlage gelegt.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 50,
    gartnerPhase: "Peak of Inflated Expectations",
    marketAdoption: 25,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP Cloud Transport Management (cTMS)",
        description:
          "Cloud-basiertes Transportmanagement für BTP-Artefakte (MTA, HTML5, Integration Content) mit Landscaping und Transportrouten.",
        available: true,
        module: "SAP BTP DevOps",
      },
      {
        name: "gCTS (Git-enabled Change and Transport System)",
        description:
          "Git-Integration für das ABAP-Transportsystem. Ermöglicht ABAP-Entwicklung mit Git-Workflows, Branching und Code Reviews.",
        available: true,
        module: "S/4HANA ABAP",
      },
      {
        name: "SAP Continuous Integration and Delivery (CI/CD)",
        description:
          "Managed CI/CD-Service auf der BTP für automatisierte Builds, Tests und Deployments von SAP-Anwendungen (CAP, Fiori, ABAP).",
        available: true,
        module: "SAP BTP DevOps",
      },
    ],
    alternatives: [
      {
        name: "GitHub Actions / GitLab CI für SAP",
        description:
          "Open-Source-CI/CD-Pipelines mit SAP-spezifischen Actions (project piper) für ABAP, Fiori und BTP-Deployments.",
        vendor: "GitHub / GitLab",
      },
      {
        name: "Terraform / Pulumi für SAP BTP",
        description:
          "Infrastructure-as-Code-Tools mit SAP BTP Terraform Provider für automatisierte Subaccount- und Service-Provisionierung.",
        vendor: "HashiCorp / Pulumi",
      },
    ],
    keyBenefits: [
      "80% schnellere Deployment-Zyklen durch CI/CD-Automatisierung",
      "Reproduzierbare SAP-Landschaften durch Infrastructure-as-Code",
      "Developer Self-Service reduziert Wartezeiten",
      "Qualitätssicherung durch automatisierte Tests und Code Reviews",
    ],
    useCases: [
      "CI/CD-Pipeline für SAP Fiori Apps mit automatisierten Tests",
      "GitOps-Workflow für SAP BTP-Deployments",
      "Automatisierte ABAP-Code-Qualitätsprüfung",
      "Infrastructure-as-Code für SAP BTP Subaccounts",
    ],
    icon: "git-branch",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Telekommunikation", "Professional Services"],
  },
  {
    id: "btp-strategy",
    title: "SAP BTP als Innovationsplattform",
    category: "Plattform & DevOps",
    description:
      "Die SAP Business Technology Platform ist die strategische Erweiterungsplattform für S/4HANA. Mit über 100 Services in den Bereichen Application Development, Integration, Data & Analytics, AI und Automation ist die BTP der zentrale Baustein für die Clean-Core-Strategie. Das SAP Cloud Application Programming Model (CAP) wird zum Standard für Side-by-Side-Entwicklung. ABAP Cloud als Cloud-ready ABAP-Tier ermöglicht die Wiederverwendung von ABAP-Know-how.",
    impact: "Sehr hoch",
    status: "established",
    maturityPercent: 70,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 45,
    investmentPriority: "Kritisch",
    realcoreExpertise: true,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Cloud Application Programming Model (CAP)",
        description:
          "Open-Source-Framework für die Entwicklung von Cloud-Anwendungen auf der BTP mit CDS, Node.js/Java und nativer SAP-Service-Integration. De-facto-Standard für Side-by-Side-Extensions.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "ABAP Cloud (Steampunk)",
        description:
          "Cloud-fähiger ABAP-Tier auf der BTP für ABAP-Entwickler. RAP (ABAP RESTful Application Programming Model) als modernes Entwicklungsmodell für Fiori-Apps und APIs.",
        available: true,
        module: "SAP BTP ABAP Environment",
      },
      {
        name: "SAP HANA Cloud",
        description:
          "Cloud-native In-Memory-Datenbank mit Multi-Model-Unterstützung (relational, graph, spatial, document) und nativer Data Lake Integration (SAP HANA Cloud Data Lake).",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Business Application Studio (BAS)",
        description:
          "Cloud-basierte IDE auf VS Code-Basis für die Entwicklung von SAP Fiori, CAP, ABAP und Mobile Apps mit SAP-spezifischen Extensions.",
        available: true,
        module: "SAP BTP",
      },
    ],
    alternatives: [
      {
        name: "Vercel / Netlify + Headless SAP",
        description:
          "Frontend-Cloud-Plattformen für React/Next.js-Anwendungen mit SAP OData/REST Backend-Integration.",
        vendor: "Vercel / Netlify",
      },
    ],
    keyBenefits: [
      "Zentrale Plattform für alle SAP-Erweiterungen und Innovationen",
      "Clean-Core-Konformität durch Side-by-Side-Architektur",
      "Multi-Cloud-Unterstützung (AWS, Azure, GCP, Alibaba)",
      "Wiederverwendung von ABAP-Know-how in der Cloud",
    ],
    useCases: [
      "Side-by-Side-Extensions für S/4HANA Cloud",
      "Custom Fiori Apps mit SAP CAP Backend",
      "ABAP Cloud Microservices für komplexe Geschäftslogik",
      "Zentrale Event-basierte Architektur auf BTP",
    ],
    icon: "server",
    industries: ["Automotive", "Chemie & Pharma", "Energie & Versorgung", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Öffentlicher Sektor", "Gesundheitswesen", "Telekommunikation", "Professional Services"],
  },
  {
    id: "ai-governance",
    title: "KI-Governance & EU AI Act",
    category: "Sicherheit",
    description:
      "Der EU AI Act ist seit August 2024 in Kraft und stellt weltweit die erste umfassende KI-Regulierung dar. Ab Februar 2025 gelten Verbote für inakzeptable KI-Risiken, ab August 2025 Transparenzpflichten, und ab August 2026 müssen Hochrisiko-KI-Systeme vollständig konform sein. Für SAP-Kunden bedeutet das: Dokumentation aller KI-Modelle, Bias-Testing, Erklärbarkeit und menschliche Aufsicht für Hochrisiko-Entscheidungen.",
    impact: "Hoch",
    status: "emerging",
    maturityPercent: 30,
    gartnerPhase: "Innovation Trigger",
    marketAdoption: 15,
    investmentPriority: "Hoch",
    realcoreExpertise: false,
    timelineYear: 2026,
    sapSolutions: [
      {
        name: "SAP AI Lifecycle Management",
        description:
          "Governance-Funktionen in SAP AI Core für Model Monitoring, Bias Detection, Explainability und Audit Trails für KI-Modelle im SAP-Ökosystem.",
        available: true,
        module: "SAP BTP AI",
      },
      {
        name: "SAP AI Ethics Toolkit (geplant)",
        description:
          "Geplantes Toolkit für die Bewertung und Dokumentation von KI-Risiken gemäß EU AI Act mit integrierter Risikokategorisierung und Compliance-Reporting.",
        available: false,
        plannedDate: "Q2 2026",
        module: "SAP BTP AI",
      },
    ],
    alternatives: [
      {
        name: "IBM AI Governance (OpenPages + watsonx.governance)",
        description:
          "Enterprise-KI-Governance-Plattform mit Model Risk Management, Fairness-Testing und regulatorischem Compliance-Reporting.",
        vendor: "IBM",
      },
      {
        name: "Credo AI / Holistic AI",
        description:
          "Spezialisierte KI-Governance-Plattformen für Risikobewertung, Compliance-Dokumentation und Responsible-AI-Frameworks.",
        vendor: "Credo AI / Holistic AI",
      },
    ],
    keyBenefits: [
      "EU AI Act Compliance ab August 2026 sichergestellt",
      "Transparente und erklärbare KI-Entscheidungen",
      "Reduziertes Risiko durch Bias-Erkennung und -Mitigation",
      "Vertrauenswürdige KI als Wettbewerbsvorteil",
    ],
    useCases: [
      "Risikokategorisierung aller eingesetzten KI-Systeme nach EU AI Act",
      "Dokumentation und Monitoring von KI-Modellen in SAP",
      "Bias-Testing für HR-KI in SuccessFactors",
      "Erklärbarkeits-Reports für Finanz-KI",
    ],
    icon: "scale",
    industries: ["Finanzdienstleistungen", "Gesundheitswesen", "Öffentlicher Sektor", "Chemie & Pharma"],
  },
  {
    id: "observability",
    title: "Full-Stack Observability & AIOps",
    category: "Plattform & DevOps",
    description:
      "Moderne SAP-Landschaften sind hybrid und komplex: S/4HANA, BTP-Services, Drittanbieter-Systeme und Cloud-Infrastruktur müssen ganzheitlich überwacht werden. AIOps nutzt Machine Learning für Anomalie-Erkennung, Root-Cause-Analysis und automatisierte Remediation. SAP Cloud ALM bietet Monitoring und Operations für SAP-Landschaften, während Dynatrace und Datadog die führenden Drittanbieter-Plattformen sind.",
    impact: "Hoch",
    status: "growing",
    maturityPercent: 55,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 35,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2025,
    sapSolutions: [
      {
        name: "SAP Cloud ALM (Operations)",
        description:
          "Cloud-basiertes Application Lifecycle Management mit Real User Monitoring, Health Monitoring, Integration Monitoring und Business Process Monitoring für SAP-Landschaften.",
        available: true,
        module: "SAP Cloud ALM",
      },
      {
        name: "SAP Focused Run (On-Premise)",
        description:
          "Advanced Monitoring und Alerting für grosse On-Premise-SAP-Landschaften mit System Monitoring, Configuration Validation und Synthetic User Monitoring.",
        available: true,
        module: "SAP Focused Run",
      },
    ],
    alternatives: [
      {
        name: "Dynatrace (mit SAP-Modul)",
        description:
          "Full-Stack-Observability-Plattform mit nativem SAP-Monitoring, Code-Level-Visibility in ABAP und automatischer KI-Root-Cause-Analyse (Davis AI).",
        vendor: "Dynatrace",
      },
      {
        name: "Datadog / Splunk",
        description:
          "Cloud-native Monitoring-Plattformen mit Log-Management, APM, Infrastructure Monitoring und Security Monitoring.",
        vendor: "Datadog / Splunk (Cisco)",
      },
    ],
    keyBenefits: [
      "50% schnellere Mean-Time-to-Resolution (MTTR)",
      "Proaktive Fehlererkennung vor Benutzer-Impact",
      "End-to-End-Visibilität über hybride SAP-Landschaften",
      "Automatisierte Remediation für Standardprobleme",
    ],
    useCases: [
      "End-to-End-Monitoring einer RISE-with-SAP-Landschaft",
      "Proaktive Performance-Optimierung für S/4HANA",
      "Business-Process-Monitoring für Order-to-Cash",
      "AIOps-basierte Anomalie-Erkennung in Batch-Jobs",
    ],
    icon: "activity",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Telekommunikation", "Professional Services"],
  },
  {
    id: "ux-fiori",
    title: "SAP Fiori & Next-Gen UX",
    category: "User Experience",
    description:
      "SAP Fiori ist das zentrale UX-Framework für alle SAP-Anwendungen. Mit Fiori Elements, Flexible Programming Model und dem neuen Horizon Theme hat SAP die Benutzererfahrung massiv verbessert. SAP Build Work Zone dient als zentrales Portal für personalisierte Aufgaben und Apps. Mobile-First-Design, barrierefreie Gestaltung (WCAG 2.1) und KI-gestützte UX-Personalisierung sind die aktuellen Schwerpunkte.",
    impact: "Hoch",
    status: "established",
    maturityPercent: 82,
    gartnerPhase: "Plateau of Productivity",
    marketAdoption: 60,
    investmentPriority: "Hoch",
    realcoreExpertise: true,
    timelineYear: 2023,
    sapSolutions: [
      {
        name: "SAP Fiori (Horizon Theme)",
        description:
          "Modernes Design-System mit Horizon Theme, SAPUI5 2.x, Fiori Elements Templates (List Report, Worklist, Object Page, Overview Page) und Flexible Programming Model.",
        available: true,
        module: "SAP UI5 / Fiori",
      },
      {
        name: "SAP Build Work Zone (Standard & Advanced)",
        description:
          "Zentrales digitales Arbeitsportal mit personalisierten Spaces, Pages und Business Content aus SAP und Drittanwendungen.",
        available: true,
        module: "SAP BTP",
      },
      {
        name: "SAP Mobile Start",
        description:
          "Native Mobile App für den Zugriff auf SAP Fiori Apps, Notifications, ToDos und SAP SuccessFactors auf iOS und Android.",
        available: true,
        module: "SAP Mobile",
      },
    ],
    alternatives: [
      {
        name: "React / Angular + OData",
        description:
          "Custom-Frontend-Frameworks mit direkter Anbindung an SAP OData APIs für maximale Gestaltungsfreiheit ausserhalb von Fiori.",
        vendor: "Open Source",
      },
    ],
    keyBenefits: [
      "Konsistente User Experience über alle SAP-Module",
      "WCAG-2.1-konforme Barrierefreiheit",
      "70% weniger Custom-UI-Entwicklung durch Fiori Elements",
      "Personalisierte Arbeitsbereiche steigern Produktivität",
    ],
    useCases: [
      "Migration von SAP GUI auf Fiori für Kernprozesse",
      "Aufbau eines zentralen Fiori Launchpad mit Work Zone",
      "Mobile Fiori Apps für Vertrieb und Service",
      "Barrierefreie SAP-Oberflächen nach WCAG 2.1",
    ],
    icon: "layout",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Finanzdienstleistungen", "Handel & Konsumgüter", "Logistik & Transport", "Öffentlicher Sektor", "Gesundheitswesen", "Telekommunikation", "Professional Services"],
  },
  {
    id: "supply-chain-resilience",
    title: "Resiliente Lieferketten & Control Tower",
    category: "Daten & Analytics",
    description:
      "Die Krisen der letzten Jahre (Pandemie, Suezkanal, Chip-Mangel, geopolitische Spannungen) haben die Verwundbarkeit globaler Lieferketten offengelegt. Supply Chain Resilience erfordert Echtzeit-Visibilität, Risikomanagement, Szenarioplanung und agile Reaktionsfähigkeit. SAPs Integrated Business Planning (IBP) und Supply Chain Control Tower bilden die technologische Grundlage für resiliente, KI-gestützte Lieferketten.",
    impact: "Sehr hoch",
    status: "growing",
    maturityPercent: 60,
    gartnerPhase: "Slope of Enlightenment",
    marketAdoption: 35,
    investmentPriority: "Kritisch",
    realcoreExpertise: false,
    timelineYear: 2024,
    sapSolutions: [
      {
        name: "SAP Integrated Business Planning (IBP)",
        description:
          "Cloud-basierte Planungsplattform für Demand Planning, Supply Planning, Inventory Optimization, Sales & Operations Planning (S&OP) und Response & Supply.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
      {
        name: "SAP Supply Chain Control Tower",
        description:
          "Echtzeit-Dashboard für End-to-End-Supply-Chain-Visibilität mit KI-gestützter Anomalie-Erkennung, Alerting und Szenarioplanung.",
        available: true,
        module: "SAP Digital Supply Chain",
      },
      {
        name: "SAP Business Network",
        description:
          "Digitales Netzwerk (ehemals Ariba Network) für die Zusammenarbeit mit Lieferanten, Logistikdienstleistern und Partnern mit über 5,5 Millionen Unternehmen.",
        available: true,
        module: "SAP Business Network",
      },
    ],
    alternatives: [
      {
        name: "Kinaxis RapidResponse",
        description:
          "Agile Supply-Chain-Planungsplattform mit Concurrent-Planning-Ansatz und Echtzeit-What-if-Szenarien.",
        vendor: "Kinaxis",
      },
      {
        name: "Blue Yonder / o9 Solutions",
        description:
          "KI-native Supply-Chain-Planning-Plattformen mit Machine-Learning-basierter Demand Sensing und Autonomous Planning.",
        vendor: "Blue Yonder / o9",
      },
    ],
    keyBenefits: [
      "Echtzeit-Visibilität über die gesamte Lieferkette",
      "40% bessere Forecast-Genauigkeit durch KI",
      "Schnellere Reaktion auf Störungen durch Szenarioplanung",
      "Reduktion von Sicherheitsbeständen durch verbesserte Planung",
    ],
    useCases: [
      "Demand Sensing mit Machine Learning für volatile Märkte",
      "Echtzeit-Supply-Chain-Risk-Monitoring",
      "S&OP-Prozess mit kollaborativer Planung",
      "Multi-Tier-Lieferantenmanagement über SAP Business Network",
    ],
    icon: "truck",
    industries: ["Automotive", "Chemie & Pharma", "Fertigung & Maschinenbau", "Handel & Konsumgüter", "Logistik & Transport"],
  },
]

export const sapRoadmap = [
  {
    year: 2023,
    items: [
      "Clean Core Strategie offiziell eingeführt (SAP TechEd)",
      "SAP Joule KI-Copilot Launch für S/4HANA Cloud",
      "SAP Integration Suite mit Trading Partner Management",
      "ABAP Cloud (Steampunk) General Availability",
      "SAP Analytics Cloud mit Planning-Integration",
      "SAP Cloud ALM als Standard-ALM für Cloud-Kunden",
    ],
  },
  {
    year: 2024,
    items: [
      "SAP Business AI: 80+ vordefinierte Szenarien live",
      "SAP Datasphere mit KI-gestützter Datenexploration",
      "SAP Build Suite vollständig in BTP integriert",
      "SAP Signavio nativ in SAP Cloud ALM eingebunden",
      "EU AI Act in Kraft getreten (August 2024)",
      "NIS2-Richtlinie umgesetzt (Oktober 2024)",
      "SAP S/4HANA 2023 FPS02 mit Clean Core Dashboard",
      "NIST Post-Quantum-Standards veröffentlicht (ML-KEM, ML-DSA)",
    ],
  },
  {
    year: 2025,
    items: [
      "SAP Sustainability Control Tower mit CSRD/ESRS-Templates",
      "SAP S/4HANA Cloud Sovereign Edition GA (EU Access)",
      "SAP Business Data Cloud für unternehmensweite KI",
      "DevOps-Toolchain für SAP: gCTS + CI/CD + Terraform",
      "CSRD-Reporting-Pflicht für grosse Unternehmen",
      "EU AI Act Transparenzpflichten ab August 2025",
      "SAP Fiori Horizon Theme als neuer Standard",
      "SAP Advanced Event Mesh Ausbau (Multi-Cloud)",
    ],
  },
  {
    year: 2026,
    items: [
      "SAP Joule Collaborative Agents (Q3 2026)",
      "SAP AI Agent Builder auf BTP (Q4 2026)",
      "SAP AI Ethics Toolkit für EU AI Act (Q2 2026)",
      "EU AI Act: Hochrisiko-KI vollständig konform (August 2026)",
      "DSAG Technologietage 2026",
      "SAP S/4HANA Cloud 2026 mit Next-Gen Planning",
      "SAP Build Code mit generativer KI-Unterstützung",
    ],
  },
  {
    year: 2027,
    items: [
      "SAP Green Ledger: CO2-Bewertung je Finanztransaktion",
      "Nur noch Clean-Core-konforme neue S/4HANA-Features",
      "Vollständige BTP-Service-Konsolidierung",
      "Next-Gen SAP Fiori mit KI-Personalisierung",
      "SAP HANA Cloud mit Vector-Search für RAG",
      "Autonomous ERP: KI-gesteuerte Standardprozesse",
    ],
  },
  {
    year: 2028,
    items: [
      "Ende Mainstream-Wartung SAP ECC 6.0 (31.12.2027)",
      "Post-Quantum Cryptography Readiness für SAP-Systeme",
      "Autonomous Enterprise: 50% automatisierte Entscheidungen",
      "SAP Digital Twin Platform für Lieferketten",
      "Extended Wartung ECC nur noch kostenpflichtig",
    ],
  },
  {
    year: 2030,
    items: [
      "Ende Extended Wartung ECC 6.0 (geplant)",
      "100% Cloud-native SAP-Landschaften als Standard",
      "Quantum-Computing erste SAP-Szenarien produktiv",
      "Vollautonome Supply-Chain-Steuerung",
    ],
  },
]
