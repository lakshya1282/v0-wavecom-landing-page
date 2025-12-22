"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sky-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/wc.png"
                alt="Wavecom Logo"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 font-semibold leading-relaxed text-sm">
              Innovative cooling solutions for residential, commercial, and industrial applications.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Evaporative Coolers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Industrak Systems
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  VRV AHU
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Send us a Message
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-emerald-400 font-semibold transition-colors text-sm"
                >
                  Get Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
          <p className="font-semibold">
            © {currentYear} Wavecom. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-emerald-400 transition-colors font-semibold">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors font-semibold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
