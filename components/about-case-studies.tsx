"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Maximize, ArrowUpRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const selectedStudies = [
    {
        id: 1,
        title: "TVS Service Center",
        location: "Raipur",
        image: "/images/tvs-service-center.jpg",
        area: "1,300 Sq.Ft.",
        challenges: [
            "Heat from vehicle engines & equipment",
            "Dust and fumes in workshop area",
            "Need for consistent airflow during repairs",
        ],
    },
    {
        id: 3,
        title: "Sheetal Motors",
        location: "Raipur",
        image: "/images/sheetal-motors.jpg",
        area: "2,300 Sq.Ft.",
        challenges: [
            "Large showroom with glass facade",
            "Uniform cooling across multi-level space",
            "Maintaining comfortable customer experience",
        ],
    },
    {
        id: 8,
        title: "Marriage Hall",
        location: "Raipur",
        image: "/images/marriage-hall.jpg",
        area: "3,500 Sq.Ft.",
        challenges: [
            "Large crowd cooling during events",
            "High ceiling ventilation challenges",
            "Quick temperature control for gatherings",
        ],
    },
]

export function AboutCaseStudies() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-aos="fade-up">
                    <div>
                        <h4 className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-2">Our Work</h4>
                        <h2 className="text-4xl font-black text-slate-900">Featured Projects</h2>
                    </div>
                    <Link href="/case">
                        <Button variant="outline" className="group border-slate-300 hover:border-lime-500 hover:text-lime-600">
                            View All Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedStudies.map((study, idx) => {
                        const isHovered = hoveredId === study.id

                        return (
                            <Link href="/case" key={study.id}>
                                <div

                                    className="relative rounded-2xl overflow-hidden cursor-pointer h-[350px] transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.02]"
                                    onMouseEnter={() => setHoveredId(study.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 50}
                                >
                                    {/* Background Image */}
                                    <Image
                                        src={study.image || "/placeholder.svg"}
                                        alt={study.title}
                                        fill
                                        className={`object-cover transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
                                    />

                                    {/* Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 transition-opacity duration-300 ${isHovered
                                                ? "bg-gradient-to-t from-sky-900/90 via-sky-900/60 to-sky-900/30"
                                                : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                            }`}
                                    />

                                    {/* Badge - Area Covered */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                                        <div className="text-sky-700">
                                            <Maximize className="w-5 h-5" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sky-900 font-bold text-sm leading-tight">{study.area}</p>
                                            <p className="text-gray-500 text-xs">Covered</p>
                                        </div>
                                    </div>

                                    <div
                                        className={`absolute left-4 right-4 top-20 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                                            }`}
                                    >
                                        <p className="text-white font-black text-lg mb-3">Challenges Solved:</p>
                                        <ul className="space-y-2">
                                            {study.challenges.map((challenge, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-white/90 text-base font-semibold">
                                                    <span className="text-lime-400 mt-0.5">•</span>
                                                    <span>{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer Card */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div
                                            className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between shadow-lg hover:bg-white/98 transition-colors"
                                        >
                                            <div className="text-left">
                                                <h3 className="text-sky-900 font-black text-xl leading-tight">{study.title}</h3>
                                                <p className="text-gray-600 text-base font-semibold mt-1">{study.location}</p>
                                            </div>
                                            <div
                                                className={`w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center text-white transition-all duration-300 flex-shrink-0 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                                    }`}
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
