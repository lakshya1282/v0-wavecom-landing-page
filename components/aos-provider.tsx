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

    const observeElements = () => {
      const elements = document.querySelectorAll("[data-aos]")
      elements.forEach((el) => {
        // Only observe if not already being observed
        if (!el.classList.contains("aos-animate")) {
          observer.observe(el)
        }
      })
    }

    // Initial observation
    observeElements()

    // Watch for DOM changes and re-observe new elements
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return <>{children}</>
}
