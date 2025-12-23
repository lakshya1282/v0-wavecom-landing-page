import { StickyHeader } from "@/components/sticky-header-new"
import { VrvHeroSection } from "@/components/vrv-hero-section"
import { WhyChooseVrv } from "@/components/why-choose-vrv"
import { VrvProductsSection } from "@/components/vrv-products-section"
import { WhyWavecomVrv } from "@/components/why-wavecom-vrv"
import { DoneProjectsSection } from "@/components/done-projects-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"

export default function VRVPage() {
  return (
    <>
      <main>
        <StickyHeader />
        <VrvHeroSection />
        <WhyChooseVrv />
        <VrvProductsSection />
        <WhyWavecomVrv />
        <DoneProjectsSection />
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
