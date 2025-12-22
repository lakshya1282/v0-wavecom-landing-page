import { StickyHeader } from "@/components/sticky-header-new"
import { ContactSection } from "@/components/contact-section-new"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <style>{`
        /* Force white header on contact page */
        [role="banner"] {
          background-color: white !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        }
        [role="banner"] a {
          color: #1e293b !important;
        }
        [role="banner"] button {
          color: #1e293b !important;
        }
        [role="banner"] button:not(.bg-lime-400) {
          background-color: transparent !important;
        }
        /* Ensure dropdown text is dark */
        [role="banner"] div.absolute a {
          color: #1f2937 !important;
        }
      `}</style>
      <main>
        <StickyHeader />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
