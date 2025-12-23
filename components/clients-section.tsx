'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Client {
  id: string
  name: string
  logo: string
}

const clients: Client[] = [
  { id: '1', name: 'Ashok', logo: '/thumbnails/ashok.svg' },
  { id: '2', name: 'Bagline', logo: '/thumbnails/BAGLINE.svg' },
  { id: '3', name: 'Bansal', logo: '/thumbnails/bansal.png' },
  { id: '4', name: 'Bluebird', logo: '/thumbnails/bluebird.avif' },
  { id: '5', name: 'eBlu', logo: '/thumbnails/eblu.png' },
  { id: '6', name: 'Levis', logo: '/thumbnails/LEVIS.png' },
  { id: '7', name: 'Louise Phillipe', logo: '/thumbnails/louise_phillipe.avif' },
  { id: '8', name: 'Raymond', logo: '/thumbnails/raymond.png' },
  { id: '9', name: 'Shankara Hospital', logo: '/thumbnails/shankara.png' },
  { id: '10', name: 'TVS', logo: '/thumbnails/tvs.svg' },
  { id: '11', name: 'VIP', logo: '/thumbnails/vip.svg' },
]

export function ClientsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Clone logos for infinite scroll effect
    const logosWrapper = container.querySelector('[data-logos]') as HTMLElement
    if (!logosWrapper) return

    // Get the total width of one full set of logos
    const firstChild = logosWrapper.firstElementChild as HTMLElement
    if (!firstChild) return

    // Clone all children to create infinite effect
    const logosToClone = Array.from(logosWrapper.children).slice(0, clients.length)
    logosToClone.forEach((logo) => {
      const clonedLogo = logo.cloneNode(true)
      logosWrapper.appendChild(clonedLogo)
    })

    // Set up scrolling animation
    let scrollPosition = 0
    const scrollSpeed = 1.5 // pixels per frame

    const animate = () => {
      if (!logosWrapper) return

      scrollPosition += scrollSpeed
      const scrollWidth = firstChild.offsetWidth * clients.length
      
      // Reset scroll position for infinite effect
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0
      }

      logosWrapper.style.transform = `translateX(-${scrollPosition}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Clients Who Trust Us
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold max-w-2xl mx-auto">
            Join leading brands that have transformed their spaces with Wavecon solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-hidden py-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Fade Effect Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Logos Wrapper */}
          <div
            data-logos
            className="flex gap-8 md:gap-12 lg:gap-16 will-change-transform"
            style={{
              width: 'max-content',
            }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: '140px',
                  height: '80px',
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center px-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain object-center"
                    priority={parseInt(client.id) <= 2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Trust Statement */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-muted-foreground text-base md:text-lg font-semibold">
            🌟 Trusted by <span className="font-black text-foreground">500+ Clients</span> across various industries
          </p>
        </div>
      </div>
    </section>
  )
}
