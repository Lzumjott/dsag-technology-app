import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendsSection } from "@/components/trends-section"
import { OverviewSection } from "@/components/overview-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendsSection />
        <OverviewSection />
        <RoadmapSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </div>
  )
}
