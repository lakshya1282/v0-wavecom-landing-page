"use client"

import Image from "next/image"

interface Product {
  name: string
  mainImage: string
  components: {
    id: string
    image: string
    label: string
  }[]
  description: string[]
}

const products: Product[] = [
  {
    name: "Industrial Fans",
    mainImage: "/images/evap/wind/main.png",
    components: [],
    description: [
      "Heavy-duty industrial fans engineered for maximum airflow.",
      "Designed for harsh industrial environments and challenging conditions.",
      "Perfect for factories, warehouses, and large commercial spaces.",
      "Features robust construction with minimal maintenance requirements.",
      "Significantly reduces heat buildup and improves worker safety.",
    ],
  },
  {
    name: "Heavy-Duty Ventilation",
    mainImage: "/images/evap/Ocean/main.png",
    components: [
      {
        id: "1",
        image: "/images/evap/Ocean/Screenshot 2025-12-21 172206.png",
        label: "Component 1",
      },
      {
        id: "2",
        image: "/images/evap/Ocean/Screenshot 2025-12-21 172214.png",
        label: "Component 2",
      },
      {
        id: "3",
        image: "/images/evap/Ocean/Screenshot 2025-12-21 172221.png",
        label: "Component 3",
      },
    ],
    description: [
      "Professional-grade ventilation system for industrial applications.",
      "Advanced air circulation technology for optimal environment control.",
      "Remote operation and monitoring capabilities available.",
      "Built for continuous operation in demanding industrial settings.",
      "Premium durability with comprehensive warranty and support.",
    ],
  },
]

export function IndustrialProductsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-20 text-sky-900 leading-tight" data-aos="fade-up">
          Industrial Fans Range
        </h2>

        <div className="space-y-24">
          {products.map((product, productIndex) => (
            <div key={productIndex}>
              {/* Product Layout - Alternating */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 ${
                  productIndex % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                data-aos={productIndex % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="800"
              >
                {/* Left Side - Image and Components Grid */}
                <div>
                  {/* Main Product Image */}
                  <div className="relative w-full h-96 overflow-hidden rounded-lg mb-8 shadow-xl bg-white flex items-center justify-center">
                    <Image
                      src={product.mainImage}
                      alt={`${product.name} main product`}
                      width={450}
                      height={350}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Components Grid - 3 cards */}
                  {product.components.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      {product.components.map((component) => (
                        <div
                          key={component.id}
                          className="flex flex-col items-center"
                        >
                          <div className="relative w-full h-24 md:h-28 overflow-hidden rounded-lg mb-3 bg-white shadow-md flex items-center justify-center">
                            <Image
                              src={component.image}
                              alt={`${product.name} ${component.label}`}
                              width={150}
                              height={120}
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm text-center text-gray-600 font-medium">
                            Description
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side - About Product */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-sky-900 mb-4 leading-tight">
                      About {product.name}
                    </h3>
                    <div className="w-20 h-2 bg-emerald-500 rounded-full mb-6" />
                  </div>

                  {product.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-sky-800 leading-relaxed text-base md:text-lg font-bold"
                      data-aos="fade-up"
                      data-aos-delay={idx * 50}
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {productIndex < products.length - 1 && (
                <div className="border-b-2 border-gray-200 my-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
