"use client"

import type React from "react"
import { useEffect } from "react"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    // Observe all elements with data-aos attribute
    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
