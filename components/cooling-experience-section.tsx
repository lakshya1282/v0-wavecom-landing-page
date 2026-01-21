"use client"

import { useState, useEffect, useRef } from "react"
import { Sun, Wind, Thermometer, Droplets, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CoolingExperienceSection() {
    const [isOn, setIsOn] = useState(false)
    const [temp, setTemp] = useState(42)
    const [airQuality, setAirQuality] = useState(40)

    // Animation effect for temperature and air quality
    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isOn) {
            // Cooling down
            interval = setInterval(() => {
                setTemp((prev) => {
                    if (prev <= 26) return 26
                    return prev - 1
                })
                setAirQuality((prev) => {
                    if (prev >= 100) return 100
                    return prev + 2
                })
            }, 50)
        } else {
            // Heating up (Reset)
            interval = setInterval(() => {
                setTemp((prev) => {
                    if (prev >= 42) return 42
                    return prev + 1
                })
                setAirQuality((prev) => {
                    if (prev <= 40) return 40
                    return prev - 2
                })
            }, 50)
        }

        return () => clearInterval(interval)
    }, [isOn])

    const sectionRef = useRef<HTMLElement>(null)

    // Scroll trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsOn(true)
                } else {
                    setIsOn(false)
                }
            },
            { threshold: 0.4 } // Trigger when 40% visible
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-[#0B1121] overflow-hidden relative transition-colors duration-1000">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Control */}
                    <div className="space-y-8">
                        {/* Status Badge & Temp Monitor */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-500 ${isOn
                                ? "bg-lime-950/50 border-lime-800 text-lime-400"
                                : "bg-red-950/50 border-red-800 text-red-500"
                                }`}>
                                <div className={`w-2 h-2 rounded-full ${isOn ? "bg-lime-400 animate-pulse" : "bg-red-500 animate-pulse"}`} />
                                <span className="text-sm font-mono tracking-wider">
                                    SYSTEM_STATUS: {isOn ? "OPTIMIZED" : "OVERHEATED"}
                                </span>
                            </div>

                            {/* Live Temp Indicator - Moved here */}
                            <div className="flex items-center gap-2 text-white/80 font-mono">
                                <Thermometer className={`w-4 h-4 ${isOn ? "text-lime-400" : "text-red-500"}`} />
                                <span className="text-lg">
                                    {temp}°C <span className="text-xs text-gray-500 ml-1">AMBIENT</span>
                                </span>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                                Precision Ductable <br />
                                <span className={`transition-colors duration-1000 ${isOn ? "text-lime-400" : "text-red-500"}`}>
                                    Systems
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                We don't just blow air; we manage airflow dynamics. Our ductable units allow for precise CFD-level control of air distribution, targeting thermal hotspots specifically rather than wasting energy cooling empty volume.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            {[
                                "Static Pressure Optimization",
                                "Zone-Specific Thermal Control",
                                "Automated Dampers & VFD Integration"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <ArrowRight className={`w-4 h-4 ${isOn ? "text-lime-400" : "text-red-500"}`} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Metrics Display */}
                    <div className="relative">
                        {/* Background Glow Effect */}
                        <div className={`absolute inset-0 blur-[100px] opacity-30 transition-colors duration-1000 ${isOn ? "bg-lime-500" : "bg-red-600"
                            }`} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {/* Delta T Potential */}
                            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl md:col-span-1">
                                <div className="flex flex-col h-full justify-between gap-8">
                                    <div>
                                        <span className={`text-5xl font-bold transition-colors duration-500 ${isOn ? "text-white" : "text-red-400"
                                            }`}>
                                            {isOn ? "20°C" : "0°C"}
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                                        Delta T Potential
                                    </span>
                                </div>
                            </div>

                            {/* Refrigerants */}
                            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl md:col-span-1">
                                <div className="flex flex-col h-full justify-between gap-8">
                                    <div>
                                        <span className={`text-5xl font-bold transition-colors duration-500 ${isOn ? "text-lime-400" : "text-white"
                                            }`}>
                                            0%
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                                        Refrigerants
                                    </span>
                                </div>
                            </div>

                            {/* Low Maintenance - Matches Screenshot */}
                            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-2xl md:col-span-2">
                                <div className="flex flex-col h-full justify-between gap-4">
                                    <div>
                                        <span className="text-4xl md:text-5xl font-serif font-bold text-white">
                                            Low
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                                        MAINTENANCE CAPEX
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
