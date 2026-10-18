"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Phone, CheckCircle2, ChevronDown, AlertCircle, Wind, Sparkles } from "lucide-react"

const SERVICES = [
  "Evaporative Cooling Systems",
  "VRV + AHU Cooling Systems",
  "Industrial Ventilation Systems",
  "HVLS Fans & Exhaust Solutions",
  "Commercial Air Conditioning (HVAC)",
  "Maintenance & Annual Service",
]

const COMPANY_PHONE = "9153441111"
const DISPLAY_PHONE = "+91 91534 41111"

export function QuickServiceModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("Raipur")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // Show after visitor lands on website
    const timer = setTimeout(() => {
      const hasDismissed = sessionStorage.getItem("wavecon_quick_service_closed")
      if (!hasDismissed) {
        setIsOpen(true)
      }
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("wavecon_quick_service_closed", "true")
  }

  const openWhatsAppFallback = (enteredName: string, enteredPhone: string, selectedService: string, selectedLocation: string) => {
    const text = `*New Quick Service Request (Wavecon)*\n\n*Name:* ${enteredName || "Client"}\n*Phone:* ${enteredPhone}\n*Service Requested:* ${selectedService}\n*Location:* ${selectedLocation || "Raipur"}\n\n_Please contact me back regarding this cooling solution inquiry._`
    const url = `https://wa.me/91${COMPANY_PHONE}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!service) {
      setErrorMessage("Please select a service.")
      return
    }

    if (!name.trim()) {
      setErrorMessage("Please enter your name.")
      return
    }

    const cleanPhone = phone.trim().replace(/[^0-9]/g, "")
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/quick-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          service,
          location: location.trim() || "Raipur",
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        throw new Error(data.error || "Server recording failed")
      }
    } catch (err) {
      console.warn("Server logging failed, triggering WhatsApp fallback:", err)
      setErrorMessage("Redirecting to WhatsApp to send your inquiry...")
      setTimeout(() => {
        openWhatsAppFallback(name.trim(), cleanPhone, service, location.trim() || "Raipur")
        setSubmitted(true)
      }, 1000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-sky-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl shadow-sky-950/20 border border-sky-100 z-10 my-auto"
          >
            {/* Header with Wavecon Oceanic Gradient */}
            <div className="relative bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800 px-6 pt-7 pb-6 text-white text-center overflow-hidden">
              {/* Subtle decorative circles */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-lime-400/20 blur-lg pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/80 hover:text-white hover:bg-white/15 transition cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold tracking-[0.18em] text-lime-300 mb-3 shadow-xs">
                <Wind className="w-3.5 h-3.5 text-lime-300 shrink-0" />
                <span className="[word-spacing:0.18em]">WAVECON AIR SOLUTIONS</span>
              </div>

              <h2 className="text-2xl sm:text-[28px] font-extrabold uppercase text-white tracking-[0.08em] [word-spacing:0.25em] drop-shadow-xs">
                Get Quick Service
              </h2>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-lime-600 shadow-inner">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-sky-950">Inquiry Received!</h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-sky-900">{name}</span>. Our cooling experts will connect with you right away.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${COMPANY_PHONE}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 hover:bg-lime-400 text-sky-950 font-bold px-7 py-3 text-sm shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Phone className="h-4 w-4 fill-sky-950" />
                      <span>Call Now : {DISPLAY_PHONE}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-600 font-medium">
                        <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                        Select Service
                      </label>
                      <div className="relative">
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full appearance-none rounded-xl bg-sky-50/60 border border-sky-100 px-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                          required
                        >
                          <option value="" disabled className="text-gray-400">
                            Choose an air or cooling solution...
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s} className="text-gray-900">
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-sky-700" />
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full rounded-xl bg-sky-50/60 border border-sky-100 px-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        maxLength={15}
                        className="w-full rounded-xl bg-sky-50/60 border border-sky-100 px-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>

                    {/* Location Field (Defaults to Raipur) */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sky-900 mb-1.5">
                        Location / City
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Raipur"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                          className="w-full rounded-xl bg-sky-50/60 border border-sky-100 pl-10 pr-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                        />
                        <MapPin className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-lime-500 fill-lime-500" />
                      </div>
                    </div>

                    <p className="text-[11px] text-center text-gray-500 pt-1">
                      By clicking &apos;BOOK NOW&apos;, you agree to receive a callback from our team.
                    </p>

                    {/* Primary Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-sky-950 font-black tracking-wide py-3.5 text-base shadow-lg shadow-lime-500/25 transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-sky-950" />
                      <span>{loading ? "PROCESSING..." : "BOOK NOW"}</span>
                    </button>
                  </form>

                  {/* Or Call Section */}
                  <div className="mt-5 pt-4 border-t border-gray-100 text-center">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1.5">
                      Or Connect Directly
                    </span>
                    <a
                      href={`tel:${COMPANY_PHONE}`}
                      className="inline-flex items-center justify-center gap-2 text-sky-700 hover:text-blue-800 font-extrabold text-base transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span>Call Now : {COMPANY_PHONE}</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
