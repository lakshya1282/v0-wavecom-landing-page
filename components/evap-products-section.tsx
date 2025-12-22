"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCard {
  id: string
  name: string
  image: string
  description: string
}

const products: ProductCard[] = [
  {
    id: "1",
    name: "Desert Cooler Pro",
    image: "/images/placeholder.jpg",
    description: "High-efficiency evaporative cooling system",
  },
  {
    id: "2",
    name: "AquaCool Max",
    image: "/images/placeholder.jpg",
    description: "Advanced water-based cooling solution",
  },
  {
    id: "3",
    name: "EcoFresh Elite",
    image: "/images/placeholder.jpg",
    description: "Eco-friendly fresh air distribution system",
  },
]

export function EvapProductsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our range of premium evaporative cooling solutions
          </p>
        </div>

        {/* Product Grid - Following the wireframe layout */}
        <div className="space-y-16">
          {/* First Product - Full width with side description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src={products[0].image}
                alt={products[0].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                About {products[0].name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products[0].description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Experience ultimate cooling comfort with our Desert Cooler Pro. Engineered for maximum efficiency, this system delivers 100% fresh air circulation while reducing your electricity bills by up to 80%.
              </p>
              <div className="pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Product Variants - Three Cards */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              Product Variants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((variant) => (
                <div
                  key={variant}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={variant * 100}
                >
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src="/images/placeholder.jpg"
                      alt={`Variant ${variant}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Model DC-{variant}00
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Premium cooling variant with advanced features
                    </p>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Product */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                About {products[1].name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products[1].description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our AquaCool Max system features smart automation, remote control capabilities, and automatic cleaning cycles to maintain optimal performance year-round.
              </p>
              <div className="pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src={products[1].image}
                alt={products[1].name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Third Product */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <Image
                src={products[2].image}
                alt={products[2].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                About {products[2].name}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {products[2].description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Built for sustainability, our EcoFresh Elite system combines environmental responsibility with powerful cooling performance, perfect for eco-conscious businesses.
              </p>
              <div className="pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Cool Your Space?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today for a consultation and find the perfect evaporative cooling solution for your needs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
