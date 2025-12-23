import Link from "next/link"
import { StickyHeader } from "@/components/sticky-header-new"
import { VrvHeroSection } from "@/components/vrv-hero-section"
import { WhyChooseVrv } from "@/components/why-choose-vrv"
import { VrvProductsSection } from "@/components/vrv-products-section"
import { WhyWaveconVrv } from "@/components/why-wavecon-vrv"
import { VrvProjectsSection } from "@/components/vrv-projects-section"
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
        <WhyWaveconVrv />
        <VrvProjectsSection />
        <div className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <Link href="/vrv" className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              View all projects VRV+AHU Cooling →
            </Link>
          </div>
        </div>
        <ShareChallengesSection />
      </main>
      <Footer />
    </>
  )
}
