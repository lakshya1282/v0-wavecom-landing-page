"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function ProductsHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.play().catch(() => {
        // Autoplay was prevented, video will show first frame
      })
    }

    // Show content after delay
    const timer = setTimeout(() => setShowContent(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-fixed bg-cover bg-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ zIndex: -1 }}
      >
        <source src="/images/evap/ev.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {/* CTAs - Bottom Left */}
      <div className="absolute bottom-8 left-4 md:left-8 z-20">
        <div className={`transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
            >
              Get Quote
            </Button>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-6"
            >
              <Phone size={20} />
              Consult an Engineer
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white/50 hover:text-white hover:bg-white/20 bg-white/5 px-6 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-white">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
