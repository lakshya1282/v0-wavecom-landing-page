import { StickyHeader } from "@/components/sticky-header-new"
import { IndustrialHeroSection } from "@/components/industrial-hero-section"
import { WhyChooseIndustrial } from "@/components/why-choose-industrial"
import { IndustrialProductsSection } from "@/components/industrial-products-section"
import { WhyWavecomIndustrial } from "@/components/why-wavecom-industrial"
import { DoneProjectsSection } from "@/components/done-projects-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"

export default function IndustrialPage() {
  return (
    <>
      <main>
        <StickyHeader />
        <IndustrialHeroSection />
        <WhyChooseIndustrial />
        <IndustrialProductsSection />
        <WhyWavecomIndustrial />
        <DoneProjectsSection />
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
