import { HeroSection } from "@/components/hero-section"
import { HomeStickyHeader } from "@/components/home-sticky-header"
import { ProductSection } from "@/components/product-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ClientsSection } from "@/components/clients-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"

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
      </main>
      <Footer />
    </>
  )
}
