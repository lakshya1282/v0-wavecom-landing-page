"use client"

import type React from "react"

import Image from "next/image"
import {
  Wind,
  Tv2,
  SparklesIcon,
  CircleDot,
  Leaf,
  Volume2,
  Smartphone,
  GitBranch,
  Building2,
  Zap,
  Fan,
  Airplay,
  Thermometer,
  Shield,
} from "lucide-react"
import { useState } from "react"

interface KeyFeature {
  icon: React.ReactNode
  text: string
}

interface Product {
  title: string
  subtitle?: string
  description: string
  features: string[]
  keyFeatures: KeyFeature[]
  image: string
  imageAlt: string
  reverse?: boolean
}

const products: Product[] = [
  {
    title: "Evaporative Cooling Systems",
    subtitle: "Duct Air Cooling Systems",
    description:
      "Our evaporative cooling systems provide an eco-friendly and cost-effective alternative to traditional air conditioning. Using the natural process of water evaporation, these systems deliver fresh, cool air while consuming up to 80% less energy than conventional AC units.",
    features: [
      "100% Fresh Natural Air - No recirculation",
      "Up to 80% Energy Savings compared to AC",
      "Eco-Friendly with zero harmful emissions",
      "Ideal for large industrial spaces",
      "Low maintenance and operating costs",
      "20+ Years of reliable lifespan",
    ],
    keyFeatures: [
      { icon: <Wind className="w-5 h-5" />, text: "100% Fresh Natural Air" },
      { icon: <Tv2 className="w-5 h-5" />, text: "Remote Controlled Operation" },
      { icon: <SparklesIcon className="w-5 h-5" />, text: "Auto Cleaning System" },
      { icon: <CircleDot className="w-5 h-5" />, text: "Designed for Large Cooling Zones" },
      { icon: <Leaf className="w-5 h-5" />, text: "Up to 80% Lower Electricity Cost" },
    ],
    image: "/images/evaporative-cooling.jpg",
    imageAlt: "Wavecon Evaporative Cooling Systems - Duct Air Cooling Units",
    reverse: false,
  },
  {
    title: "VRV+AHU Cooling Systems",
    subtitle: "Smart, Silent & Scalable Climate Solutions",
    description:
      "Our VRV+AHU systems combine Variable Refrigerant Volume technology with Air Handling Units to deliver precise, efficient climate control for commercial and large-scale applications. These intelligent systems offer whisper-quiet operation, centralized control, and exceptional energy efficiency for modern buildings.",
    features: [
      "Precision temperature control for every zone",
      "Ultra-quiet operation for comfort environments",
      "Centralized smart control via app or remote",
      "Flexible piping for complex building layouts",
      "Scalable solutions for any building size",
      "Industry-leading energy efficiency ratings",
    ],
    keyFeatures: [
      { icon: <Volume2 className="w-5 h-5" />, text: "Quiet, Comfortable Airflow" },
      { icon: <Smartphone className="w-5 h-5" />, text: "App/Remote/Control Support" },
      { icon: <GitBranch className="w-5 h-5" />, text: "Long Piping Flexibility" },
      { icon: <Building2 className="w-5 h-5" />, text: "AHU-Based Large Area Cooling" },
      { icon: <Zap className="w-5 h-5" />, text: "Strong Energy Efficiency" },
    ],
    image: "/vrv-ahu-cooling-system-commercial-hvac-units.jpg",
    imageAlt: "Wavecon VRV+AHU Cooling Systems - Smart Climate Solutions",
    reverse: true,
  },
  {
    title: "Industrial Ventilation Systems",
    subtitle: "HVLS Fans • Industrial Exhaust • Fresh Air Units",
    description:
      "Our comprehensive industrial ventilation solutions ensure optimal air quality and circulation in large-scale facilities. From high-volume low-speed (HVLS) fans to powerful exhaust systems and fresh air units, we provide complete air management for factories, warehouses, and industrial complexes.",
    features: [
      "HVLS Fans for massive air circulation",
      "Industrial exhaust for fume & dust removal",
      "Fresh Air Units (FAU/MAU) for clean air supply",
      "Heat, smoke & odor extraction systems",
      "Comprehensive electrical protection",
      "Custom solutions for any industrial space",
    ],
    keyFeatures: [
      { icon: <Fan className="w-5 h-5" />, text: "HVLS Fans" },
      { icon: <Airplay className="w-5 h-5" />, text: "Industrial Exhaust Systems" },
      { icon: <Wind className="w-5 h-5" />, text: "Fresh Air Units (FAU/MAU)" },
      { icon: <Thermometer className="w-5 h-5" />, text: "Heat, Smoke & Odor Extraction" },
      { icon: <Shield className="w-5 h-5" />, text: "Electrical Protection System" },
    ],
    image: "/industrial-ventilation-hvls-fans.jpg",
    imageAlt: "Wavecon Industrial Ventilation Systems - HVLS Fans & Exhaust",
    reverse: false,
  },
]

export function ProductSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          {/* Green leaf icon */}
          <div className="flex justify-center mb-4">
            <Leaf className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wider text-sky-900 font-black">
            OUR PRODUCTS
          </h2>
          <p className="text-gray-600 mt-3 text-xl font-semibold">Cooling the future, naturally.</p>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4" />
        </div>

        {/* Product Items */}
        <div className="space-y-16 md:space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos={product.reverse ? "fade-left" : "fade-right"}
              data-aos-delay={index * 100}
              className={`flex flex-col ${
                product.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-stretch`}
            >
              {/* Image with Hover Overlay */}
              <div className="w-full lg:w-1/2" data-aos="zoom-in" data-aos-delay={index * 100 + 200}>
                <div
                  className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.imageAlt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 bg-sky-900/95 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h4 className="text-white text-2xl md:text-3xl font-black tracking-wide mb-6 border-b-2 border-emerald-400 pb-2">
                      KEY FEATURES:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-md">
                      {product.keyFeatures.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 text-white"
                          style={{
                            animation:
                              hoveredIndex === index ? `fadeInUp 0.3s ease-out ${featureIndex * 0.1}s both` : "none",
                          }}
                        >
                          <span className="flex-shrink-0 text-emerald-400">{feature.icon}</span>
                          <span className="text-sm md:text-base font-semibold">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                <div data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 mb-2">{product.title}</h3>
                  {product.subtitle && (
                    <p className="text-xl md:text-2xl text-emerald-600 font-bold">{product.subtitle}</p>
                  )}
                </div>

                <p
                  className="text-gray-600 text-lg md:text-xl leading-relaxed font-semibold"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 150}
                >
                  {product.description}
                </p>

                <ul className="space-y-3" data-aos="fade-up" data-aos-delay={index * 100 + 200}>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sky-800">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm md:text-base font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={index * 100 + 250}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 font-bold transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
