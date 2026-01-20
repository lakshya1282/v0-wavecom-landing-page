"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Always visible */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/wc"
              alt="Wavecon Logo"
              width={150}
              height={48}
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex gap-6 md:gap-12 items-center">
              <li>
                <Link
                  href="/"
                  className={`text-base md:text-lg font-semibold transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className={`text-base md:text-lg font-semibold transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-base md:text-lg font-semibold transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Get Quote Button */}
          <Link href="/contact">
            <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-base md:text-lg px-6 py-3">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
