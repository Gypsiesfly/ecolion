"use client"

import { useEffect, useState } from "react"

export function AmenitiesScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]")
      if (!heroSection) return

      const rect = heroSection.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Calculate how far through the section we've scrolled
      // Progress goes from 0 (section at top of viewport) to 1 (section scrolled past)
      const scrolled = Math.max(0, -sectionTop)
      const maxScroll = sectionHeight - windowHeight
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1)

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute right-2 md:right-4 lg:right-8 top-1/4 h-1/2 w-[2px] flex flex-col items-center">
      {/* Top dark line */}
      <div
        className="w-[2px] bg-black transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress * 100}%` }}
      />

      {/* Circle indicator */}
      <div
        className="w-4 h-4 rounded-full border-2 border-black bg-white flex-shrink-0 transition-all duration-300 ease-out"
        style={{ transform: `translateY(0)` }}
      />

      {/* Bottom light line */}
      <div
        className="w-[2px] bg-gray-300 flex-1 transition-all duration-300 ease-out"
        style={{ height: `${(1 - scrollProgress) * 100}%` }}
      />
    </div>
  )
}
