"use client"

import Image from "next/image"

export function WhyWaveconVrv() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Title and Content - Left */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-20 text-sky-900 leading-tight" data-aos="fade-up">
              Why Wavecon VRV Solutions
            </h2>

            <div className="grid grid-cols-1 gap-16 items-stretch">
              {/* Company Appreciation */}
              <div className="space-y-6 flex flex-col justify-start" data-aos="fade-right" data-aos-duration="800">
                <p className="text-base md:text-lg text-sky-800 font-bold leading-relaxed">
                  Wavecon is your trusted partner for advanced VRV+AHU cooling solutions. Our technology delivers superior performance and energy efficiency for modern commercial spaces.
                </p>

                <p className="text-base md:text-lg text-sky-800 font-bold leading-relaxed">
                  With proven expertise in climate control systems, we provide comprehensive solutions tailored to your specific requirements. Our VRV systems reduce energy consumption significantly while maintaining perfect temperature control.
                </p>

                <p className="text-base md:text-lg text-sky-800 font-bold leading-relaxed">
                  Experience the difference with our commitment to:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sky-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base md:text-lg font-bold">Advanced VRV technology for optimal performance</span>
                  </li>
                  <li className="flex items-start gap-3 text-sky-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base md:text-lg font-bold">Smart zone control and temperature management</span>
                  </li>
                  <li className="flex items-start gap-3 text-sky-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base md:text-lg font-bold">Reliable installation and ongoing support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sky-800">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base md:text-lg font-bold">Cost-effective solutions with long-term benefits</span>
                  </li>
                </ul>

                <p className="text-base md:text-lg text-emerald-600 font-bold leading-relaxed pt-4">
                  Choose Wavecon for VRV solutions that perfectly match your commercial cooling needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative" data-aos="fade-left" data-aos-duration="800">
            <div className="relative w-full h-fit overflow-hidden rounded-2xl shadow-xl sticky top-24">
              <Image
                src="/images/evap/leftcard.png"
                alt="Wavecon VRV Solutions"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
