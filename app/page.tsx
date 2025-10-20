import { HeroSection } from "@/components/hero-section"
import { StickyNav } from "@/components/sticky-nav"
import { MissionSection } from "@/components/mission-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { EmpoweringSection } from "@/components/empowering-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div data-hero-section>
        <HeroSection />
      </div>
      <StickyNav />
      <MissionSection />
      <ServicesSection />
      <ProcessSection />
      <EmpoweringSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
