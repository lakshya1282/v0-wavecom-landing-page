"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

const products = [
  { name: "Evaporative Cooling", href: "/products" },
  { name: "Industrial Fans", href: "/industrial" },
  { name: "VRV+AHU Cooling", href: "/vrv" },
]

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Visible on scroll or always on contact page */}
          {(isScrolled || pathname === "/contact") && (
            <Link href="/" className="flex-shrink-0 z-50">
              <Image
                src="/images/wc.png"
                alt="Wavecon Logo"
                width={150}
                height={48}
                className="h-16 w-auto"
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8 lg:gap-12 items-center">
              <li>
                <Link
                  href="/"
                  className={`text-base lg:text-lg font-semibold transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`text-base lg:text-lg font-semibold transition-colors hover:opacity-70 flex items-center gap-1 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100 transition-all duration-200 ${
                  isProductsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-3 text-base font-semibold text-gray-900 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`text-base lg:text-lg font-semibold transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-900" : "text-blue-500"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button - Visible on scroll or always on contact page */}
          {(isScrolled || pathname === "/contact") && (
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-base md:text-lg px-6 py-3">
                Get Quote
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-button z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-blue-500"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-blue-500"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-base font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* Mobile Products Section */}
              <li>
                <button
                  className="flex items-center justify-between w-full text-base font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Products Dropdown */}
                {isProductsOpen && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {products.map((product) => (
                      <li key={product.href}>
                        <Link
                          href={product.href}
                          className="block text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors py-1"
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
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block text-base font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>

              {/* Mobile CTA Button */}
              <li className="pt-2">
                <Link href="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-sm py-3">
                    Get Quote
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
