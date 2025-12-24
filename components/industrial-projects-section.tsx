"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
  title: string
  image: string
  description: string
  area: string
  challenges: string[]
  objectPosition?: string
}

const projects: Project[] = [
  {
    title: " High-Volume Industrial Pole Fan",
    image: "/images/industry/projects/fan.png",
    description: "A large-scale air circulation machine designed for open-plan industrial or commercial spaces. The fan utilizes long-span aerodynamic blades to move massive volumes of air at low speeds, creating a cooling effect and preventing air stratification without the noise associated with high-speed floor fans.",
    area: "5,000 Sq.Ft.",
    challenges: [
      "High-temperature production environment",
      "Continuous 24/7 operation requirement",
      "Dust and emission control",
    ],
  },
  {
    title: "Vertical Discharge Rooftop Ventilator",
    image: "/images/industry/projects/chim.png",
    description: "An axial or centrifugal discharge unit designed for rooftop mounting. It includes a conical weather cowl (rain cap) to protect the internal motor and ducting from environmental elements while allowing for high-velocity vertical air discharge, preventing exhaust re-entrainment into the building.",
    area: "8,000 Sq.Ft.",
    challenges: [
      "Large open space ventilation",
      "Temperature stability for goods storage",
      "Energy-efficient cooling requirements",
    ],
  },
  {
    title: "Centrifugal Exhaust Blower System",
    image: "/images/industry/projects/WhatsApp Image 2025-12-23 at 5.08.23 PM (2).png",
    description: "This system features a heavy-duty centrifugal blower encased in a durable blue-coated housing, driven by a high-torque electric motor. It is designed for high-resistance applications, effectively pulling air through complex ducting networks to ensure consistent airflow in industrial or commercial environments.",
    area: "4,500 Sq.Ft.",
    challenges: [
      "Open space climate control",
      "Consistent temperature maintenance",
      "Customer comfort and ambiance",
    ],
    objectPosition: "center bottom",
  },
  {
    title: "Commercial Kitchen Extraction Hood",
    image: "/images/industry/projects/WhatsApp Image 2025-12-23 at 5.08.23 PM.png",
    description: "A wall-mounted kitchen ventilation hood designed to capture and filter heat, smoke, and grease-laden vapors. It functions as the primary intake point for the exhaust system, featuring a sloped design to facilitate optimal suction and integrated lighting for the workspace below.",
    area: "6,000 Sq.Ft.",
    challenges: [
      "Multi-floor air distribution",
      "Quiet operation for work environment",
      "Energy-efficient cooling solution",
    ],
  },
]

export function IndustrialProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-sky-900 leading-tight">
            Our satisfied customers
          </h2>
          <p className="text-emerald-600 text-lg md:text-xl font-bold">
            Industrial solutions trusted by manufacturing and logistics leaders
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="800"
            >
              {/* Image - Left Side */}
              <div
                className={`relative overflow-hidden rounded-lg shadow-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                    style={{ objectPosition: project.objectPosition || "center" }}
                  />
                  {/* Hover Overlay with Gradient */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredIndex === index
                        ? "bg-gradient-to-t from-sky-900/90 via-sky-900/60 to-sky-900/30 opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  
                  {/* Challenges Section */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-8 transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div>
                      <p className="text-white font-black text-lg mb-4">Challenges Solved:</p>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/90 text-base font-semibold">
                            <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Cooling Area Badge */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 inline-block self-start">
                      <p className="text-sky-900 font-bold text-sm">Coverage Area</p>
                      <p className="text-sky-700 font-black text-lg">{project.area}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - Right Side */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-sky-900 mb-4">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-emerald-500 rounded-full" />
                </div>
                <p className="text-base md:text-lg text-sky-800 font-bold leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
