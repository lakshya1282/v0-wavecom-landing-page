"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ChevronDown } from "lucide-react"

const products = [
  { name: "Evaporative Cooling", href: "/products" },
  { name: "Industrial Fans", href: "/industrial" },
  { name: "VRV+AHU Cooling", href: "/vrv" },
]

export function HeroSection() {
  const [showInspired, setShowInspired] = useState(false)
  const [showNature, setShowNature] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, video will show first frame
      })
    }

    // Staggered text animation sequence
    const inspiredTimer = setTimeout(() => setShowInspired(true), 600)
    const natureTimer = setTimeout(() => setShowNature(true), 1200)
    const contentTimer = setTimeout(() => setShowContent(true), 1800)

    return () => {
      clearTimeout(inspiredTimer)
      clearTimeout(natureTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Video Container with better mobile handling */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
          className="w-full h-full object-cover"
        >
          <source src="/Video/home.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-x-0 top-0 h-40 sm:h-48 bg-linear-to-b from-black/60 via-black/40 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 pt-20 sm:px-6 md:px-16 lg:px-24">
        <div className="text-left space-y-2">
          {/* "Inspired by" text - green italic */}
          <div
            className={`transition-all duration-1000 ease-out ${
              showInspired ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <span
              className="font-serif text-sm sm:text-lg italic tracking-wide md:text-xl lg:text-2xl"
              style={{
                background: "linear-gradient(180deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              }}
            >
              Inspired by
            </span>
          </div>

          {/* "Nature." text - responsive sizing */}
          <h1
            className={`font-display font-black leading-tight transition-all duration-1000 ease-out text-5xl sm:text-6xl md:text-8xl lg:text-9xl ${
              showNature ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
            }`}
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f0f0f0 30%, #ffffff 50%, #e0e0e0 70%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              filter: `
                drop-shadow(0 2px 0 rgba(200,200,200,0.8))
                drop-shadow(0 4px 0 rgba(180,180,180,0.6))
                drop-shadow(0 6px 2px rgba(0,0,0,0.2))
                drop-shadow(0 10px 10px rgba(0,0,0,0.15))
              `,
            }}
          >
            Nature.
          </h1>
        </div>
      </div>

      {/* Bottom Content - Improved mobile layout */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 px-4 pb-6 sm:px-6 sm:pb-8 transition-all duration-1000 delay-500 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent -z-10" />

        <div className="mx-auto max-w-7xl">
          {/* Tagline */}
          <div className="mb-4 text-center">
            <p className="text-base sm:text-lg text-white/90 drop-shadow-md md:text-xl">
              One Brand. One Ecosystem. <span className="font-semibold text-emerald-400">Total Air Solutions.</span>
            </p>
          </div>

          {/* Stats and CTA Row - Stack on mobile */}
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            {/* Stats Cards - Responsive grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start">
              <div className="rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400">80%</div>
                <div className="text-xs text-white/80">Energy Savings</div>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm">
                <div className="text-lg sm:text-2xl font-bold text-sky-400">20+</div>
                <div className="text-xs text-white/80">Years Lifespan</div>
              </div>
              <div className="rounded-lg sm:rounded-xl border border-white/20 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-white/80">Fresh Natural Air</div>
              </div>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button size="sm" className="sm:size-lg bg-emerald-500 px-4 sm:px-6 text-white hover:bg-emerald-600 w-full sm:w-auto">
                Explore Products
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="sm:size-lg border-white/30 bg-white/10 px-4 sm:px-6 text-white backdrop-blur-sm hover:bg-white/20 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white/60" />
      </div>
    </section>
  )
}
