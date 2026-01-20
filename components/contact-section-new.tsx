"use client"

import { useState } from "react"

const industries = [
  "Select Industry",
  "Healthcare",
  "Manufacturing",
  "Retail & Commercial",
  "Hospitality",
  "Education",
  "Data Centers",
  "Agriculture",
  "Warehousing & Logistics",
  "Other",
]

const countries = [
  { code: "IN", name: "India", phone: "+91" },
  { code: "US", name: "United States", phone: "+1" },
  { code: "UK", name: "United Kingdom", phone: "+44" },
  { code: "CA", name: "Canada", phone: "+1" },
  { code: "AU", name: "Australia", phone: "+61" },
  { code: "SG", name: "Singapore", phone: "+65" },
  { code: "MY", name: "Malaysia", phone: "+60" },
  { code: "TH", name: "Thailand", phone: "+66" },
  { code: "PH", name: "Philippines", phone: "+63" },
  { code: "ID", name: "Indonesia", phone: "+62" },
  { code: "AE", name: "UAE", phone: "+971" },
  { code: "SA", name: "Saudi Arabia", phone: "+966" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    company: "",
    country: "IN",
    industry: "",
    phone: "",
    email: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.message.trim()) newErrors.message = "Please complete this required field."
    if (!formData.name.trim()) newErrors.name = "Please complete this required field."
    if (!formData.company.trim()) newErrors.company = "Please complete this required field."
    if (!formData.country) newErrors.country = "Please complete this required field."
    if (!formData.industry) newErrors.industry = "Please complete this required field."
    if (!formData.phone.trim()) newErrors.phone = "Please complete this required field."
    if (!formData.email.trim()) newErrors.email = "Please complete this required field."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email."

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Add API call here
    }
  }

  const selectedCountry = countries.find((c) => c.code === formData.country)

  return (
    <section className="w-full bg-white py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-20 md:pt-24">
        {/* Left Side - Blue Background with Text */}
        <div className="bg-linear-to-br from-blue-600 to-blue-800 flex flex-col justify-center p-8 md:p-12 text-white order-2 lg:order-1">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Share your cooling challenges with us.
              </h1>
              <p className="text-lg md:text-xl font-semibold text-white/90">
                Get in touch with Wavecon and see what our affordable cooling solutions can do for your business.
              </p>
            </div>

            {/* Person Card */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <div className="w-14 h-14 rounded-full bg-emerald-400 flex items-center justify-center text-white font-black text-lg">
                  W
                </div>
              </div>
              <div>
                <p className="font-black text-lg">Wavecon Team</p>
                <p className="text-white/80 font-semibold text-sm">COOLING SOLUTIONS EXPERT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center p-6 md:p-12 order-1 lg:order-2 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-black text-sky-900 mb-8">How can we help you?</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 placeholder-gray-400 min-h-25 text-sm ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
              </div>

              {/* Name and Company */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.company}</p>}
                </div>
              </div>

              {/* Country and Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 text-sm ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.country}</p>}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={selectedCountry?.phone || "+91"}
                    disabled
                    className="w-16 px-2 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 font-semibold text-center text-sm"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 text-sm ${
                    errors.industry ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry === "Select Industry" ? "" : industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industry && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.industry}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 rounded-full transition-all duration-300 hover:shadow-lg text-sm"
              >
                Send
              </button>

              {/* Success Message */}
              <p className="text-center text-gray-600 italic font-semibold text-xs">
                We will get back to you shortly.
              </p>

              {/* Privacy Notice */}
              <div className="text-xs text-gray-600 leading-relaxed">
                <p>
                  Wavecon needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our{" "}
                  <a href="#" className="text-sky-600 hover:text-sky-800 font-semibold">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
