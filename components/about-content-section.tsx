"use client"

import { Wind, Sun, Droplets, Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"

export function AboutContentSection() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Who is Wavecon */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right">
                        <h4 className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-4">Our Identity</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            Engineering the Future of <span className="text-lime-600">Air.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                            <p>
                                Wavecon is not just an HVAC company; we are an engineering firm dedicated to solving the thermal challenges of modern industry. We deliver precision-engineered sustainable climate control solutions.
                            </p>
                            <p>
                                Our core philosophy moves beyond traditional energy-intensive cooling. We deploy smart, physics-driven natural cooling technologies that drastically reduce operational expenditures (`OpEx`) while optimizing human and machine performance.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200" data-aos="fade-left">
                        <video
                            src="/Video/abou1.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster="/Video/about.webp"
                        />
                    </div>
                </div>

                {/* Natural Cooling Explained - Technical Grid */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-8" data-aos="fade-up">
                        <div className="max-w-2xl">
                            <h4 className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-4">Core Technology</h4>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                                The Physics of Natural Cooling
                            </h2>
                        </div>
                        <p className="text-slate-500 font-medium mt-4 md:mt-0 max-w-md text-right md:text-left">
                            Harnessing thermodynamics for maximum efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                        {[
                            {
                                icon: Wind,
                                title: "100% Fresh Air Intake",
                                desc: "Systems engineered to reject stale recirculated air, constantly introducing oxygen-rich filtered outdoor air."
                            },
                            {
                                icon: Droplets,
                                title: "Adiabatic Cooling",
                                desc: "Leveraging the enthalpy of vaporization to lower dry-bulb temperature significantly without compressors."
                            },
                            {
                                icon: Sun,
                                title: "Thermal Displacement",
                                desc: "Positive pressure ventilation actively pushes accumulated heat stratification out of the building envelope."
                            },
                            {
                                icon: Leaf,
                                title: "Decarbonization",
                                desc: "Achieving up to 80% reduction in electrical load, directly contributing to Scope 2 emission reductions."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 hover:bg-slate-50 transition-colors group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="mb-8 text-slate-400 group-hover:text-lime-600 transition-colors">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    )
}
