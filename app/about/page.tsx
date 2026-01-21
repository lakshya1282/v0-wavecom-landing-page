import { StickyHeader } from "@/components/sticky-header-new"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutContentSection } from "@/components/about-content-section"
import { ShareChallengesSection } from "@/components/share-challenges-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Wavecon - Sustainable Cooling Leaders",
    description:
        "Learn about Wavecon, the pioneers in natural evaporative cooling and industrial ventilation. Experience 100% fresh air and energy efficiency.",
    keywords: [
        "About Wavecon",
        "sustainable cooling",
        "Company profile",
        "natural cooling benefits",
        "duct cooling",
    ],
    alternates: {
        canonical: "https://wavecon.com/about",
    },
}


import { CoolingExperienceSection } from "@/components/cooling-experience-section"
import { AboutCaseStudies } from "@/components/about-case-studies"
import { AboutClients } from "@/components/about-clients"

export default function AboutPage() {
    return (
        <>
            <main className="pt-20 md:pt-24">
                <StickyHeader theme="light" />
                <AboutHeroSection />
                <AboutContentSection />
                <CoolingExperienceSection />
                <AboutCaseStudies />
                <AboutClients />
                <ShareChallengesSection />
            </main>
            <Footer />
        </>
    )
}
