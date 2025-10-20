"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    icon: "/Icons/house card.svg",
    title: "Accommodation",
    description:
      "We provide a spacious 4-bedroom house and a 3-bedroom flat in Kent. Our furnished accommodations include essential amenities for comfortable living.",
  },
  {
    icon: "/Icons/pc.svg",
    title: "Person Centered",
    description:
      "We offer flexible support packages tailored to individual needs. Residents can access support 24/7, and we collaborate to meet their needs.",
  },
  {
    icon: "/Icons/handshake.svg",
    title: "Promoting Independence",
    description:
      "We provide a safe environment for young people aged 16 to 25 at risk of homelessness. We empower residents to develop skills for independent living.",
  },
  {
    icon: "/Icons/security.svg",
    title: "Security",
    description:
      "Security is crucial. We have policies for all. Staff identify risks and follow protocols. We maintain security with CCTV and access control, collaborating with authorities.",
  },
]

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lockedScrollPositionRef = useRef<number | null>(null)
  const touchStartRef = useRef<{ x: number; y: number; scrollLeft: number } | null>(null)
  const isScrollingHorizontallyRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight
      
      if (!isInView) {
        lockedScrollPositionRef.current = null
        return
      }

      const container = scrollContainerRef.current
      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft

      // Only handle horizontal scroll if there's content to scroll
      if (maxScroll <= 0) return

      // Scrolling down
      if (e.deltaY > 0) {
        if (currentScroll < maxScroll - 1) {
          e.preventDefault()
          
          // Lock page scroll position on first trigger
          if (lockedScrollPositionRef.current === null) {
            lockedScrollPositionRef.current = window.scrollY
          }
          
          // Scroll cards horizontally
          container.scrollLeft = Math.min(currentScroll + e.deltaY * 2, maxScroll)
          
          // Keep page locked
          window.scrollTo(0, lockedScrollPositionRef.current)
        } else {
          // Reached end, unlock
          lockedScrollPositionRef.current = null
        }
      }
      // Scrolling up
      else if (e.deltaY < 0) {
        if (currentScroll > 1) {
          e.preventDefault()
          
          // Lock page scroll position when scrolling back
          if (lockedScrollPositionRef.current === null) {
            lockedScrollPositionRef.current = window.scrollY
          }
          
          // Scroll cards horizontally in reverse
          container.scrollLeft = Math.max(currentScroll + e.deltaY * 2, 0)
          
          // Keep page locked
          window.scrollTo(0, lockedScrollPositionRef.current)
        } else {
          // Reached start, unlock to allow normal scroll up
          lockedScrollPositionRef.current = null
        }
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (!scrollContainerRef.current) return
      
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        scrollLeft: scrollContainerRef.current.scrollLeft
      }
      isScrollingHorizontallyRef.current = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!scrollContainerRef.current || !touchStartRef.current) return
      
      const touch = e.touches[0]
      const deltaX = touchStartRef.current.x - touch.clientX
      const deltaY = touchStartRef.current.y - touch.clientY
      
      // Determine scroll direction on first significant movement
      if (!isScrollingHorizontallyRef.current && (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10)) {
        isScrollingHorizontallyRef.current = Math.abs(deltaX) > Math.abs(deltaY)
      }
      
      // If scrolling horizontally, prevent vertical scroll and handle horizontal scroll
      if (isScrollingHorizontallyRef.current) {
        e.preventDefault()
        scrollContainerRef.current.scrollLeft = touchStartRef.current.scrollLeft + deltaX
      }
    }

    const handleTouchEnd = () => {
      touchStartRef.current = null
      isScrollingHorizontallyRef.current = false
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: true })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
      container.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchmove', handleTouchMove)
        container.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-white flex items-center overflow-hidden m-[10px] sm:m-[15px]">
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-0">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "auto",
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-[340px] sm:w-[480px] md:w-[580px] lg:w-[680px] h-[240px] sm:h-[260px] md:h-[280px] snap-start flex overflow-hidden border border-[#171E19]">
              {/* Left section - 30% green background with cream/yellow icon */}
              <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-4 sm:p-6 md:p-8">
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
                />
              </div>

              {/* Right section - 70% white background with title and text */}
              <div className="w-[70%] bg-white p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-black">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
