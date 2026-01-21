"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { StickyHeader } from "@/components/sticky-header-new"
import { Footer } from "@/components/footer"
import { Maximize, ArrowUpRight, Search, ChevronDown } from "lucide-react"

// Wavecon Branding Colors (OKLCH)
const COLORS = {
  primaryBlue: "oklch(0.55 0.15 220)",
  chartBlue: "oklch(0.398 0.07 227.392)", // Deeper blue from palette
  lightGreen: "oklch(0.95 0.02 160)",
  darkGreenText: "oklch(0.3 0.05 160)",
  accentEmerald: "oklch(0.65 0.18 160)"
}

const CATEGORIES = ["All Categories", "Evaporative Cooling", "Industrial Fans", "VRV + AHU Cooling"]

const projects = [
  // ... (projects array remains unchanged)
  {
    title: "High-Volume Industrial Pole Fan",
    category: "Industrial Fans",
    image: "/images/industry/projects/fan.png",
    overlayText: "Industrial Airflow",
    description: "Large-scale air circulation machine with aerodynamic blades for open-plan spaces. Moves massive air volumes at low speeds without noise.",
    videoUrl: "https://youtu.be/ncQCgZRQ_qw?si=gM9UExyDsT8niRhH",
  },
  {
    title: "Commercial Kitchen Extraction Hood",
    category: "Industrial Fans",
    image: "/images/industry/projects/WhatsApp Image 2025-12-23 at 5.08.23 PM.png",
    overlayText: "Kitchen Ventilation",
    description: "Wall-mounted hood captures heat, smoke, and grease vapors with optimal suction design and integrated lighting.",
    videoUrl: "https://youtu.be/e2aSaiv2k1M?si=Yd2LPbUVXVdVzt4w",
  },
  {
    title: "Vertical Discharge Rooftop Ventilator",
    category: "Evaporative Cooling",
    image: "/images/industry/projects/chim.png",
    overlayText: "Rooftop Efficiency",
    description: "Rooftop mounting unit with weather cowl protection. Provides high-velocity vertical air discharge without re-entrainment.",
    videoUrl: "https://youtu.be/hFxGf1qPkdI?si=LIP3HH7pKp0oB8zg",
  },
  {
    title: "TVS Service Center",
    category: "Evaporative Cooling",
    image: "/images/tvs-service-center.jpg",
    overlayText: "Service Excellence",
    description: "Professional cooling solutions installed for automotive service center to maintain optimal working conditions in the service bay.",
    videoUrl: "https://youtu.be/ncQCgZRQ_qw?si=gM9UExyDsT8niRhH",
  },
  {
    title: "Sheetal Motors",
    category: "Evaporative Cooling",
    image: "/images/sheetal-motors.jpg",
    overlayText: "Showroom Comfort",
    description: "Advanced evaporative cooling system deployed to keep the automotive showroom and workshop cool and comfortable year-round.",
    videoUrl: "https://youtu.be/BV3U3YZdcBA?si=W5cajo8C5O6diyrI",
  },
  {
    title: "Bluebirds Hospital",
    category: "Evaporative Cooling",
    image: "/images/hospital.jpg",
    overlayText: "Medical Care",
    description: "Medical-grade cooling solution providing precise temperature control for hospital operations and patient comfort areas.",
    videoUrl: "https://youtu.be/wUfCsEH2qRM?si=luSeXTaWpWNKkDWM",
  },
  {
    title: "Centrifugal Exhaust Blower System",
    category: "VRV + AHU Cooling",
    image: "/images/industry/projects/WhatsApp Image 2025-12-23 at 5.08.23 PM (2).png",
    overlayText: "High-Pressure Extraction",
    description: "Heavy-duty centrifugal blower in durable housing. Designed for high-resistance applications with complex ducting networks.",
    videoUrl: "https://youtu.be/e2aSaiv2k1M?si=Yd2LPbUVXVdVzt4w",
  },
  {
    title: "Bagline",
    category: "VRV + AHU Cooling",
    image: "/images/vrv/bagline.png",
    overlayText: "VRV Innovation",
    description: "Advanced VRV cooling system implemented for Bagline to provide optimal temperature control and comfort in their facility.",
    videoUrl: "https://youtu.be/ncQCgZRQ_qw?si=gM9UExyDsT8niRhH",
  },
  {
    title: "Collective",
    category: "VRV + AHU Cooling",
    image: "/images/vrv/collective.png",
    overlayText: "Climate Control",
    description: "VRV+AHU cooling solution deployed at Collective for superior climate control and modern air handling.",
    videoUrl: "https://youtu.be/hFxGf1qPkdI?si=LIP3HH7pKp0oB8zg",
  },
  {
    title: "Levis",
    category: "VRV + AHU Cooling",
    image: "/images/vrv/levis.png",
    overlayText: "Precision Cooling",
    description: "Professional VRV cooling system installed at Levis to ensure comfortable and controlled indoor environment.",
    videoUrl: "https://youtu.be/BV3U3YZdcBA?si=W5cajo8C5O6diyrI",
  },
  {
    title: "Supershop",
    category: "VRV + AHU Cooling",
    image: "/images/vrv/supershop.png",
    overlayText: "Retail Excellence",
    description: "VRV cooling system implemented for Supershop retail environment to maintain optimal shopping conditions.",
    videoUrl: "https://youtu.be/wUfCsEH2qRM?si=luSeXTaWpWNKkDWM",
  },
]

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null)

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/)?.[1]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : ""
  }

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All Categories" || p.category === selectedCategory
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <>
      <style>{`
        [role="banner"] {
          background-color: white !important;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        }
        [role="banner"] a {
          color: #1e293b !important;
        }
        [role="banner"] button.bg-lime-500, [role="banner"] .get-quote-btn {
          background-color: ${COLORS.accentEmerald} !important;
          color: white !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
        }
      `}</style>

      <main className="min-h-screen bg-white">
        <StickyHeader />

        {/* Hero Section - UPDATED CASE STUDIES SECTION */}
        <section 
          className="relative pt-12 pb-12 md:pt-20 md:pb-16 px-6 bg-gradient-to-r from-blue-600 to-blue-800"
        >
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="text-left">
              {/* Breadcrumbs */}
              <p className="text-white/90 text-sm mb-2 font-semibold">Home &gt; Case Studies</p>
              <h1 className="text-5xl md:text-7xl font-black pt-8 text-white tracking-tight uppercase">
                CASE STUDIES
              </h1>
            </div>

            {/* Unified Search Pill */}
            <div className="flex w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden h-14 md:h-16">
              <div className="relative border-r border-gray-100 flex items-center min-w-[140px] md:min-w-[180px]">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-full px-4 pr-10 text-sm md:text-base font-bold text-gray-700 bg-transparent outline-none appearance-none cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              
              <div className="relative flex-grow flex items-center">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full px-6 text-sm md:text-base font-medium text-gray-700 placeholder-gray-400 outline-none"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600">
                  <Search className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Cards - (Remains unchanged) */}
        <section className="container mx-auto max-w-7xl py-24 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredIndex === index
              return (
                <div
                  key={index}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isHovered
                        ? "bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-blue-900/40"
                        : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    }`}
                  />

                  {/* Badge - Category */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                    <div className="text-blue-700">
                      <Maximize className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <p className="text-blue-900 font-bold text-sm leading-tight">{project.category}</p>
                      <p className="text-gray-500 text-xs">Category</p>
                    </div>
                  </div>

                  {/* Hover Content - Description */}
                  <div
                    className={`absolute left-4 right-4 top-20 transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <p className="text-white font-black text-lg mb-3">Project Details:</p>
                    <p className="text-white/90 text-base font-semibold leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Card */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => setSelectedVideoUrl(project.videoUrl)}
                      className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between shadow-lg hover:bg-white/98 transition-colors"
                    >
                      <div className="text-left">
                        <h3 className="text-blue-900 font-black text-lg leading-tight">{project.title}</h3>
                        <p className="text-gray-600 text-sm font-semibold mt-1">{project.overlayText}</p>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white transition-all duration-300 flex-shrink-0 ${
                          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />

      {/* Video Modal */}
      {selectedVideoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideoUrl(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>

            {/* Video Container */}
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={getYouTubeEmbedUrl(selectedVideoUrl)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
