"use client"

import { Wind, Smartphone, Zap, Snowflake, TrendingDown, Leaf } from "lucide-react"

const features = [
  {
    icon: Wind,
    title: "100% Fresh Air",
    description: "Provides continuous fresh air circulation for healthier indoor environments",
  },
  {
    icon: Smartphone,
    title: "Remote Control",
    description: "Smart control from anywhere with our intuitive mobile app",
  },
  {
    icon: Zap,
    title: "Auto Cleaning",
    description: "Automatic cleaning cycles maintain peak performance effortlessly",
  },
  {
    icon: Snowflake,
    title: "Large Cooling Space",
    description: "Designed to efficiently cool large warehouses and commercial spaces",
  },
  {
    icon: TrendingDown,
    title: "Reduce Bills by 80%",
    description: "Dramatically lower electricity costs compared to traditional AC systems",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Environment-friendly technology with zero refrigerants",
  },
]

export function WhyChooseVrv() {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-sky-900 leading-tight">
            Why Choose VRV+AHU Cooling
          </h2>
          <p className="text-emerald-600 text-lg md:text-xl max-w-4xl mx-auto font-bold">
            Advanced cooling technology for modern commercial and industrial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-blue-100">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-black mb-2 text-sky-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-sky-800 font-bold">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
