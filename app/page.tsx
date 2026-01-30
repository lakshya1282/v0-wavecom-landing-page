import { HeroSection } from "@/components/hero-section"
import { HomeStickyHeader } from "@/components/home-sticky-header"
import { ProductSection } from "@/components/product-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ClientsSection } from "@/components/clients-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"
import { AskQueriesPopup } from "@/components/ask-queries-popup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wavecon – Cooling The Future, Naturally",
  description:
    "Wavecon delivers complete air solutions including evaporative cooling systems, industrial ventilation, and VRV + AHU HVAC solutions for commercial and industrial use.",
  keywords: [
    "raipur",
    "wavecon",
    "duct cooler raipur",
    "duct cooling raipur",
    "thewavecon",
    "evaporative cooling systems",
    "industrial ventilation",
    "industrial fans",
    "VRV cooling",
    "AHU HVAC",
    "commercial cooling solutions",
    "Wavecon",
    "wavecon",
    "wavecon raipur",
    "wave raipur"
  ],
  alternates: {
    canonical: "https://wavecon.com",
  },
}

export default function Home() {
  return (
    <>
      <HomeStickyHeader />
      <main>
        <HeroSection />
        <ProductSection />
        <CaseStudiesSection />
        <ClientsSection />
        <ShareChallengesSection />
        <AskQueriesPopup />
      </main>
      <Footer />
    </>
  )
}
