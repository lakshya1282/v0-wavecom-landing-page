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
    title: "Bagline",
    image: "/images/vrv/bagline.png",
    description: "Advanced VRV cooling system implemented for Bagline to provide optimal temperature control and comfort in their facility.",
    area: "1,500 Sq.Ft.",
    challenges: [
      "Consistent temperature maintenance",
      "Energy-efficient cooling solution",
      "Reliable system operation",
    ],
    objectPosition: "center 20%",
  },
  {
    title: "Collective",
    image: "/images/vrv/collective.png",
    description: "VRV+AHU cooling solution deployed at Collective for superior climate control and modern air handling.",
    area: "2,000 Sq.Ft.",
    challenges: [
      "Multi-zone temperature control",
      "Smart system integration",
      "Optimal airflow distribution",
    ],
  },
  {
    title: "Levis",
    image: "/images/vrv/levis.png",
    description: "Professional VRV cooling system installed at Levis to ensure comfortable and controlled indoor environment.",
    area: "1,800 Sq.Ft.",
    challenges: [
      "Precise temperature regulation",
      "Energy efficiency requirements",
      "Silent operation needs",
    ],
  },
  {
    title: "Supershop",
    image: "/images/vrv/supershop.png",
    description: "VRV cooling system implemented for Supershop retail environment to maintain optimal shopping conditions.",
    area: "2,200 Sq.Ft.",
    challenges: [
      "Consistent cooling for retail space",
      "Customer comfort priority",
      "Energy cost reduction",
    ],
  },
]

export function VrvProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-sky-900 leading-tight">
            Our satisfied customers
          </h2>
          <p className="text-emerald-600 text-lg md:text-xl font-bold">
            VRV+AHU cooling solutions trusted by leading businesses
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
