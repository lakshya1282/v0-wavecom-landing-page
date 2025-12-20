"use client"

import { useState } from "react"
import Image from "next/image"
import { Thermometer, VolumeX, Maximize, ArrowUpRight } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  location: string
  image: string
  badge: {
    icon: "temp" | "silent" | "area"
    value: string
    label: string
  }
  challenge: string
  solution: string
  result: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Apex Steelworks Manufacturing Unit",
    location: "Raipur Industrial Estate",
    image: "/industrial-manufacturing-facility-with-workers-and.jpg",
    badge: { icon: "temp", value: "12°C", label: "Temp Drop" },
    challenge: "High heat trapping in weaving section.",
    solution: "Top-discharge units with humidity control.",
    result: "Ambient temp reduced by 10°C.",
  },
  {
    id: 2,
    title: "Grand Horizon Banquet Hall",
    location: "Mumbai City Centre",
    image: "/modern-banquet-hall-interior-with-hvac-ceiling-duc.jpg",
    badge: { icon: "silent", value: "Silent", label: "Operation" },
    challenge: "Noise disruption during events.",
    solution: "VRV+AHU system with acoustic insulation.",
    result: "Zero noise complaints from guests.",
  },
  {
    id: 3,
    title: "E-Kart Logistics Hub (Zone B)",
    location: "Chennai Logistics Park",
    image: "/large-warehouse-logistics-center-with-cooling-syst.jpg",
    badge: { icon: "area", value: "15,000 Sq. Ft.", label: "Covered" },
    challenge: "Uneven cooling in massive warehouse.",
    solution: "HVLS fans with evaporative cooling.",
    result: "Uniform temperature across all zones.",
  },
]

const BadgeIcon = ({ type }: { type: "temp" | "silent" | "area" }) => {
  switch (type) {
    case "temp":
      return <Thermometer className="w-4 h-4" />
    case "silent":
      return <VolumeX className="w-4 h-4" />
    case "area":
      return <Maximize className="w-4 h-4" />
  }
}

export function CaseStudiesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">Cooling in Action</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">See how Wavecom solutions transformed these spaces</p>
        </div>

        {/* Cards Container - using CSS Grid for stable layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px]">
          {caseStudies.map((study) => {
            const isHovered = hoveredId === study.id

            return (
              <div
                key={study.id}
                className="relative rounded-3xl overflow-hidden cursor-pointer h-[400px] md:h-full transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-aos="fade-up"
                data-aos-delay={study.id * 100}
              >
                {/* Background Image */}
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className={`object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered
                      ? "bg-gradient-to-t from-black/80 via-black/50 to-black/20"
                      : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  }`}
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                  <div className="text-sky-700">
                    <BadgeIcon type={study.badge.icon} />
                  </div>
                  <div className="text-right">
                    <p className="text-sky-900 font-bold text-sm leading-tight">{study.badge.value}</p>
                    <p className="text-gray-500 text-xs">{study.badge.label}</p>
                  </div>
                </div>

                {/* Challenge/Solution/Result - Only visible on hover */}
                <div
                  className={`absolute left-4 right-4 bottom-32 transition-all duration-300 ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="space-y-1 text-white text-sm">
                    <p>
                      <span className="font-bold">Challenge:</span> {study.challenge}
                    </p>
                    <p>
                      <span className="font-bold">Solution:</span> {study.solution}
                    </p>
                    <p>
                      <span className="font-bold">Result:</span> {study.result}
                    </p>
                  </div>
                </div>

                {/* Footer Card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between shadow-lg">
                    <div>
                      <h3 className="text-sky-900 font-bold text-lg leading-tight">{study.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{study.location}</p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white transition-all duration-300 ${
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
