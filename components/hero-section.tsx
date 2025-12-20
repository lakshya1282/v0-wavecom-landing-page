"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [showText, setShowText] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Start text animation after video begins
    const textTimer = setTimeout(() => setShowText(true), 800)
    const contentTimer = setTimeout(() => setShowContent(true), 1500)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fan_and_Cooler_Hero_Section_Video-ZaeL3bvYrDFwg36jpIIXJr8oPlftkf.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-full bg-white/95 px-4 py-2">
              <img src="/images/wc.png" alt="Wave Coolers Logo" className="h-10 w-auto md:h-12" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#products"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              Products
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
            <Phone className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </header>

      <div className="absolute inset-x-0 top-24 z-10 flex flex-col items-center justify-center px-6 pt-8">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            showText ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <span className="text-lg font-light tracking-widest text-white/80 drop-shadow-lg md:text-xl">
            Inspired by
          </span>
          <h1
            className={`mt-1 text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl transition-all duration-1000 delay-300 ${
              showText ? "translate-y-0 opacity-100 scale-100" : "translate-y-5 opacity-0 scale-95"
            }`}
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
          >
            Nature<span className="text-emerald-400">.</span>
          </h1>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 z-10 px-6 pb-8 transition-all duration-1000 delay-500 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Gradient for bottom text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />

        <div className="mx-auto max-w-7xl">
          {/* Tagline */}
          <div className="mb-4 text-center">
            <p className="text-lg text-white/90 drop-shadow-md md:text-xl">
              One Brand. One Ecosystem. <span className="font-semibold text-emerald-400">Total Air Solutions.</span>
            </p>
          </div>

          {/* Stats and CTA Row */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            {/* Stats Cards */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400">80%</div>
                <div className="text-xs text-white/80">Energy Savings</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-sky-400">20+</div>
                <div className="text-xs text-white/80">Years Lifespan</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-white/80">Fresh Natural Air</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Button size="lg" className="bg-emerald-500 px-6 text-white hover:bg-emerald-600">
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-white/60" />
      </div>
    </section>
  )
}
