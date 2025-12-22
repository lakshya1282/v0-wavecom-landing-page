import { StickyHeader } from "@/components/sticky-header"
import { EvapHeroSection } from "@/components/evap-hero-section"
import { WhyChooseEvap } from "@/components/why-choose-evap"
import { EvapProductsSectionNew } from "@/components/evap-products-section-new"
import { WhyWavecomSection } from "@/components/why-wavecom-section"
import { DoneProjectsSection } from "@/components/done-projects-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"

export default function VRVPage() {
  return (
    <>
      <main>
        <StickyHeader />
        <EvapHeroSection />
        <WhyChooseEvap />
        <EvapProductsSectionNew />
        <WhyWavecomSection />
        <DoneProjectsSection />
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
