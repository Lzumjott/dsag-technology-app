import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendsSection } from "@/components/trends-section"
import { GartnerHypeCycle } from "@/components/gartner-hype-cycle"
import { OverviewSection } from "@/components/overview-section"
import { SapCoverageMatrix } from "@/components/sap-coverage-matrix"
import { RoadmapSection } from "@/components/roadmap-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendsSection />
        <GartnerHypeCycle />
        <OverviewSection />
        <SapCoverageMatrix />
        <RoadmapSection />
        <ExpertiseSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
