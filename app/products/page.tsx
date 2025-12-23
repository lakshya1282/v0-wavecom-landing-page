import Link from "next/link"
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
        <div className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <Link href="/products" className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
               View all projects Evaporative Cooling →
            </Link>
          </div>
        </div>
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
