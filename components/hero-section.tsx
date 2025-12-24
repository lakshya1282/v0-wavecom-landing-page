"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

const products = [
  { name: "Evaporative Cooling", href: "/products" },
  { name: "Industrial Fans", href: "/industrial" },
  { name: "VRV+AHU Cooling", href: "/vrv" },
]

export function HeroSection() {
  const [showInspired, setShowInspired] = useState(false)
  const [showNature, setShowNature] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
    <section className="relative min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/Video/home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 px-4 py-3 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <img src="/images/wc" alt="Wave Coolers Logo" className="h-16 md:h-20 w-auto drop-shadow-lg" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            <Link
              href="/"
              className="text-sm lg:text-base font-semibold text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-sm lg:text-base font-semibold text-white/90 transition-colors hover:text-white drop-shadow-md"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-100 transition-all duration-200 ${
                isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}>
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="text-sm lg:text-base font-semibold text-white/90 transition-colors hover:text-white drop-shadow-md"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-sm px-4 py-2">
              Get Quote
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-white/20 mt-4 rounded-lg py-4">
            <nav className="space-y-3 px-4">
              <Link
                href="/"
                className="block text-base font-semibold text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Products */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-base font-semibold text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>

                {isProductsOpen && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {products.map((product) => (
                      <li key={product.href}>
                        <Link
                          href={product.href}
                          className="block text-sm font-semibold text-white/80 hover:text-white transition-colors py-1"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsProductsOpen(false)
                          }}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/contact"
                className="block text-base font-semibold text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link href="/contact" className="block pt-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-sm py-2">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className="absolute inset-x-0 top-32 z-10 flex flex-col items-start justify-center px-6 pt-8 md:px-16 lg:px-24">
        <div className="relative text-left space-y-2">
          {/* "Inspired by" text - green italic */}
          <div
            className={`transition-all duration-1000 ease-out ${
              showInspired ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <span
              className="font-serif text-lg italic tracking-wide md:text-xl lg:text-2xl"
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

          {/* "Nature." text - 3D chunky white with period */}
          <h1
            className={`font-display text-7xl font-black md:text-8xl lg:text-9xl leading-tight transition-all duration-1000 ease-out ${
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

      {/* Bottom Content */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 px-6 pb-8 transition-all duration-1000 delay-500 ${
          showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
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
