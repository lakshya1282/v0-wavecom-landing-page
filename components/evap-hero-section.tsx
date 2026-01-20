"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function EvapHeroSection() {
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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Video Background - Improved for mobile */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/Video/vrv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CTAs - Responsive positioning */}
      <div className="absolute bottom-6 sm:bottom-12 right-4 sm:right-8 z-20">
        <div className={`transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <Button
              size="sm"
              className="sm:size-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
            >
              <Phone size={16} className="sm:size-5" />
              <span className="text-sm sm:text-base">Consult Engineer</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="sm:size-lg border-white text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Learn More
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
