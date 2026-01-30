import Link from "next/link"
import { ArrowRight, Wind, Fan, ThermometerSnowflake } from "lucide-react"
import { HomeStickyHeader } from "@/components/home-sticky-header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | Wavecon",
  description: "Explore our range of cooling solutions including Evaporative Cooling, Industrial Fans, and VRV+AHU systems.",
}

const categories = [
  {
    title: "Evaporative Cooling",
    description: "Eco-friendly and energy-efficient cooling for large industrial and commercial spaces.",
    icon: Wind,
    href: "/evaporative-cooling",
    color: "text-lime-600",
    bg: "bg-lime-50",
    border: "border-lime-100",
    hoverBorder: "group-hover:border-lime-500",
    shadow: "hover:shadow-lime-500/10",
  },
  {
    title: "Industrial Fans",
    description: "High-performance HVLS and exhaust fans for optimal air circulation.",
    icon: Fan,
    href: "/industrial",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    hoverBorder: "group-hover:border-sky-500",
    shadow: "hover:shadow-sky-500/10",
  },
  {
    title: "VRV + AHU Cooling",
    description: "Advanced HVAC solutions for precise temperature control and comfort.",
    icon: ThermometerSnowflake,
    href: "/vrv",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-600",
    shadow: "hover:shadow-blue-500/10",
  },
]

export default function ProductsPage() {
  return (
    <>
      <HomeStickyHeader />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Our <span className="text-lime-500">Products</span>
            </h1>
            <p className="text-lg text-gray-600">
              Discover our comprehensive range of industrial and commercial cooling solutions designed for efficiency and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative p-8 rounded-2xl bg-white border ${category.border} ${category.hoverBorder} hover:shadow-xl ${category.shadow} transition-all duration-500 flex flex-col items-start h-full`}
              >
                <div className={`p-4 rounded-xl ${category.bg} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-lime-600 transition-colors">
                  {category.title}
                </h2>

                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 group-hover:text-lime-600 transition-colors mt-auto font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
