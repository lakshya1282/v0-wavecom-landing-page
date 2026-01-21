"use client"

import Image from "next/image"

export function AboutHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/wavecon-about.png"
                    alt="About Wavecon"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl" data-aos="fade-up">

                </div>
            </div>
        </section>
    )
}
