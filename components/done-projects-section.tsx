"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
  title: string
  image: string
  description: string
  area: string
  challenges: string[]
}

const projects: Project[] = [
  {
    title: "TVS Service Center",
    image: "/images/tvs-service-center.jpg",
    description: "Professional cooling solutions installed for automotive service center to maintain optimal working conditions in the service bay.",
    area: "1,300 Sq.Ft.",
    challenges: [
      "Heat from vehicle engines & equipment",
      "Dust and fumes in workshop area",
      "Need for consistent airflow during repairs",
    ],
  },
  {
    title: "Supershop",
    image: "/images/supershop.jpg",
    description: "Efficient cooling system implemented for retail supermarket chain to ensure comfortable shopping environment for customers.",
    area: "1,400 Sq.Ft.",
    challenges: [
      "Maintaining fresh air for customers",
      "Temperature control for perishable goods",
      "Energy-efficient cooling for retail space",
    ],
  },
  {
    title: "Sheetal Motors",
    image: "/images/sheetal-motors.jpg",
    description: "Advanced evaporative cooling system deployed to keep the automotive showroom and workshop cool and comfortable year-round.",
    area: "2,300 Sq.Ft.",
    challenges: [
      "Large showroom with glass facade",
      "Uniform cooling across multi-level space",
      "Maintaining comfortable customer experience",
    ],
  },
  {
    title: "Bluebirds Hospital",
    image: "/images/hospital.jpg",
    description: "Medical-grade cooling solution providing precise temperature control for hospital operations and patient comfort areas.",
    area: "1,200 Sq.Ft.",
    challenges: [
      "Sterile air quality for patient care",
      "Quiet operation for recovery wards",
      "24/7 reliable cooling system",
    ],
  },
]

export function DoneProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-sky-900 leading-tight">
            Our Done Projects
          </h2>
          <p className="text-emerald-600 text-lg md:text-xl font-bold">
            Trusted by leading businesses across diverse sectors
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
                      <p className="text-sky-900 font-bold text-sm">Cooling Area</p>
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
