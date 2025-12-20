"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize, ArrowUpRight } from "lucide-react"

interface CaseStudy {
  id: number
  title: string
  location: string
  image: string
  area: string
  challenges: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "TVS Service Center",
    location: "Raipur",
    image: "/images/tvs-service-center.jpg",
    area: "1,300 Sq.Ft.",
    challenges: [
      "Heat from vehicle engines & equipment",
      "Dust and fumes in workshop area",
      "Need for consistent airflow during repairs",
    ],
  },
  {
    id: 2,
    title: "Supershop",
    location: "Bemetara",
    image: "/images/supershop.jpg",
    area: "1,400 Sq.Ft.",
    challenges: [
      "Maintaining fresh air for customers",
      "Temperature control for perishable goods",
      "Energy-efficient cooling for retail space",
    ],
  },
  {
    id: 3,
    title: "Sheetal Motors",
    location: "Raipur",
    image: "/images/sheetal-motors.jpg",
    area: "2,300 Sq.Ft.",
    challenges: [
      "Large showroom with glass facade",
      "Uniform cooling across multi-level space",
      "Maintaining comfortable customer experience",
    ],
  },
  {
    id: 4,
    title: "Restaurant",
    location: "Raipur",
    image: "/images/restaurant.jpg",
    area: "1,500 Sq.Ft.",
    challenges: [
      "Kitchen heat and smoke extraction",
      "Comfortable dining atmosphere",
      "Odor control in semi-open space",
    ],
  },
  {
    id: 5,
    title: "Bluebirds Hospital",
    location: "Raipur",
    image: "/images/hospital.jpg",
    area: "1,200 Sq.Ft.",
    challenges: [
      "Sterile air quality for patient care",
      "Quiet operation for recovery wards",
      "24/7 reliable cooling system",
    ],
  },
  {
    id: 6,
    title: "Residential Bungalow",
    location: "Raipur",
    image: "/images/bungalow.jpg",
    area: "1,500 Sq.Ft.",
    challenges: [
      "Whole-house cooling solution",
      "Energy-efficient for daily use",
      "Silent operation for living spaces",
    ],
  },
  {
    id: 7,
    title: "Ramani Surgicals Office",
    location: "Raipur",
    image: "/images/office.jpg",
    area: "1,400 Sq.Ft.",
    challenges: [
      "Comfortable workstation environment",
      "Even air distribution across desks",
      "Low noise for focused work",
    ],
  },
  {
    id: 8,
    title: "Marriage Hall",
    location: "Raipur",
    image: "/images/marriage-hall.jpg",
    area: "3,500 Sq.Ft.",
    challenges: [
      "Large crowd cooling during events",
      "High ceiling ventilation challenges",
      "Quick temperature control for gatherings",
    ],
  },
]

export function CaseStudiesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-black text-sky-900 mb-4">Cooling in Action</h2>
          <p className="text-gray-600 text-xl font-semibold max-w-2xl mx-auto">See how Wavecom solutions transformed these spaces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => {
            const isHovered = hoveredId === study.id

            return (
              <div
                key={study.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer h-[450px] md:h-[500px] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredId(study.id)}
                onMouseLeave={() => setHoveredId(null)}
                data-aos="fade-up"
                data-aos-delay={index * 50}
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
                      ? "bg-gradient-to-t from-sky-900/90 via-sky-900/60 to-sky-900/30"
                      : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  }`}
                />

                {/* Badge - Area Covered */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                  <div className="text-sky-700">
                    <Maximize className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-sky-900 font-bold text-sm leading-tight">{study.area}</p>
                    <p className="text-gray-500 text-xs">Covered</p>
                  </div>
                </div>

                <div
                  className={`absolute left-4 right-4 top-20 transition-all duration-300 ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-white font-black text-lg mb-3">Challenges Solved:</p>
                  <ul className="space-y-2">
                    {study.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 text-base font-semibold">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Card */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between shadow-lg">
                  <div>
                      <h3 className="text-sky-900 font-black text-xl leading-tight">{study.title}</h3>
                      <p className="text-gray-600 text-base font-semibold mt-1">{study.location}</p>
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
