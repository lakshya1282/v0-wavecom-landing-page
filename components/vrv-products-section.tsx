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
    name: "Chiller",
    mainImage: "/images/vrv/products/chiller.png",
    components: [],
    description: [
      "Advanced VRV chiller system for modern commercial applications.",
      "Engineered for maximum efficiency and reliability.",
      "Perfect for office buildings, shopping malls, and commercial facilities.",
      "Features smart temperature control with zoning capabilities.",
      "Energy efficient design reducing operational costs significantly.",
    ],
  },
  {
    name: "VRV",
    mainImage: "/images/vrv/products/vrv.png",
    components: [],
    description: [
      "Premium VRV system combining advanced technology and performance.",
      "Intelligent capacity control for optimal efficiency.",
      "Remote monitoring capabilities with mobile app integration.",
      "Designed for high-demand commercial and industrial applications.",
      "Industry-leading energy efficiency and reliability.",
    ],
  },
  {
    name: "Duct AC",
    mainImage: "/images/vrv/products/ductAc.JPG",
    components: [],
    description: [
      "Advanced duct air conditioning system for centralized cooling.",
      "Perfect for large residential and commercial spaces.",
      "Seamless integration with existing ventilation systems.",
      "Quiet operation with advanced noise reduction technology.",
      "Energy-efficient design with precise temperature control.",
    ],
  },
]

export function VrvProductsSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-20 text-sky-900 leading-tight" data-aos="fade-up">
          VRV+AHU Products Range
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
