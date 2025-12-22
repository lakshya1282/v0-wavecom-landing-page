"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareChallengesSection() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Decorative wave element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Share your challenges with us.
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 font-semibold max-w-2xl mx-auto">
            We are happy to help.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <a href="/contact">
              <Button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold text-lg px-8 py-6 rounded-full group transition-all duration-300 hover:shadow-lg cursor-pointer">
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
