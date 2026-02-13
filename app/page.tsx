import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendsSection } from "@/components/trends-section"
import { OverviewSection } from "@/components/overview-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendsSection />
        <OverviewSection />
      </main>
      <Footer />
    </div>
  )
}
