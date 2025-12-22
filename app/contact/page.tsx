import { StickyHeader } from "@/components/sticky-header"
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
          background-color: #3b82f6 !important;
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
