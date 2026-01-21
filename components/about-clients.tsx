"use client"

import Image from "next/image"

const clients = [
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

export function AboutClients() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h4 className="text-lime-600 font-bold uppercase tracking-widest text-sm mb-4">Our Partners</h4>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        We are proud to have delivered sustainable cooling solutions to some of the most respected names in the region.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center grayscale hover:grayscale-0 transition-all duration-500" data-aos="fade-up">
                    {clients.map((client) => (
                        <div key={client.id} className="w-full h-24 relative opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
