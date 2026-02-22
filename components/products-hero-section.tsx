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
      // Try to play immediately
      videoElement.play().catch(() => {
        // Autoplay was prevented
      })
    }

    // Show content immediately (no delay)
    setShowContent(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-black overflow-x-auto overflow-y-hidden md:overflow-hidden">
      {/* Video Background - Improved for mobile */}
      <div className="relative h-screen min-w-[100vw] md:absolute md:inset-0 md:w-full md:h-full">
        <video
          ref={videoRef}
          className="h-full w-auto max-w-none min-w-full md:w-full md:object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/images/evap/ev.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>



      {/* CTAs - Responsive positioning and layout */}
      <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-8 z-20">
        <div className={`transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center">
            <Button
              size="sm"
              className="sm:size-lg bg-lime-500 hover:bg-lime-600 text-white px-3 sm:px-6 text-sm sm:text-base"
            >
              Get Quote
            </Button>
            <Button
              size="sm"
              className="sm:size-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 text-sm sm:text-base"
            >
              <Phone size={16} className="sm:size-5" />
              <span>Consult Engineer</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-white">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
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
