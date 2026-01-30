"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, X } from "lucide-react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function AskQueriesPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300 && !isDismissed) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isDismissed])

    if (isDismissed) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm w-full sm:w-auto"
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        {/* Header */}
                        <div className="bg-lime-500 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-white">
                                <MessageCircle className="w-5 h-5 fill-white" />
                                <span className="font-bold text-lg">Ask your queries</span>
                            </div>
                            <button
                                onClick={() => setIsDismissed(true)}
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Close popup"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5 bg-white">
                            <p className="text-gray-600 mb-4 text-sm">
                                Have questions about our cooling solutions? Connect with our experts instantly.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold">Support Number</p>
                                        <p className="text-sm font-bold text-gray-900">+91 91534 41111</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href="tel:+919153441111" className="w-full">
                                        <Button variant="outline" className="w-full gap-2 border-gray-200 hover:bg-gray-50 text-gray-700">
                                            <Phone className="w-4 h-4" />
                                            Call
                                        </Button>
                                    </a>
                                    <a
                                        href="https://wa.me/919153441111?text=Hi,%20I%20have%20a%20query%20regarding%20Wavecon%20cooling%20solutions."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full"
                                    >
                                        <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
                                            <MessageCircle className="w-4 h-4 fill-white" />
                                            Chat
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
