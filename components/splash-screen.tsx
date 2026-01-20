"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function SplashScreen() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [showFadeOut, setShowFadeOut] = useState(false)

  useEffect(() => {
    // Only show splash on home page
    if (pathname !== "/") {
      setIsVisible(false)
      return
    }

    // Check if splash has already been shown in this session
    const splashShown = sessionStorage.getItem("splashShown")
    
    if (splashShown) {
      // Splash already shown, hide it immediately
      setIsVisible(false)
      return
    }
    
    // Show splash only on homepage first visit
    setIsVisible(true)

    // Wait for video to end and then fade out
    const handleVideoEnd = () => {
      setShowFadeOut(true)
      // After fade out animation completes, hide splash
      const timer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem("splashShown", "true")
      }, 1000)
      return () => clearTimeout(timer)
    }

    // Get video element and add listener
    const video = document.querySelector('video[src*="splash"]') as HTMLVideoElement
    if (video) {
      video.play()
      video.addEventListener("ended", handleVideoEnd)
      return () => {
        video.removeEventListener("ended", handleVideoEnd)
      }
    }
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-9999 bg-black ${showFadeOut ? "animate-fade-out" : ""}`}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={() => {
          setShowFadeOut(true)
          setTimeout(() => {
            setIsVisible(false)
            sessionStorage.setItem("splashShown", "true")
          }, 1000)
        }}
      >
        <source src="/splash/splashs.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
