import Link from "next/link"
import { StickyHeader } from "@/components/sticky-header-new"
import { IndustrialHeroSection } from "@/components/industrial-hero-section"
import { WhyChooseIndustrial } from "@/components/why-choose-industrial"
import { IndustrialProductsSection } from "@/components/industrial-products-section"
import { WhyWaveconIndustrial } from "@/components/why-wavecon-industrial"
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
        <WhyWaveconIndustrial />
        <DoneProjectsSection />
        <div className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <Link href="/industrial" className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
               View all projects Industrial Fans →
            </Link>
          </div>
        </div>
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
