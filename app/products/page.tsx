import { StickyHeader } from "@/components/sticky-header-new"
import { ProductsHeroSection } from "@/components/products-hero-section"
import { WhyChooseEvap } from "@/components/why-choose-evap"
import { EvapProductsSectionNew } from "@/components/evap-products-section-new"
import { WhyWavecomSection } from "@/components/why-wavecom-section"
import { DoneProjectsSection } from "@/components/done-projects-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <>
      <main>
        <StickyHeader />
        <ProductsHeroSection />
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
