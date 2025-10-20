"use client"

import { StickyNav } from "@/components/sticky-nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
// Icons removed - using SVG images instead
import { useState, useEffect, useRef } from "react"

const serviceCards = [
  {
    number: "1",
    title: "JOB READINESS PROGRAMS",
    description1:
      "We offer job-readiness services to help our residents gain the necessary skills and confidence to enter the workforce.",
    description2:
      "Our team works closely with local employers and job training programs to provide residents with job-seeking resources and guidance. We provide workshops and training sessions that cover resume writing, interview skills, and job search strategies to give residents the best chance of success in their job search.",
    image: "/images/Services/Image.png",
    alt: "Application form on desk",
  },
  {
    number: "2",
    title: "GAMING CONSOLES",
    description1:
      "We offer entertainment options like gaming consoles. Regular movie screenings in communal areas allow residents to enjoy shared experiences. Our cozy areas create a warm atmosphere for socializing and relaxing.",
    description2: "Unwind with housemates by playing games on our high-quality consoles.",
    image: "/images/Services/Image-1.png",
    alt: "Young people playing video games together",
  },
  {
    number: "3",
    title: "BICYCLE ACCESS",
    description1:
      "We provide access to a range of bicycles, whether you're interested in cruising around town or exploring nearby parks and trails.",
    description2:
      "Our bicycles are available for lending to all our residents, so you can enjoy a fun and healthy way to get around the local area. Plus, our staff are happy to provide recommendations for bike routes and trails that suit your interests and fitness level.",
    image: "/images/Services/Image-2.png",
    alt: "Young man with bicycle outdoors",
  },
  {
    number: "4",
    title: "ACCESSIBLE GYM FACILITIES",
    description1:
      "Our property is conveniently located near a local gym, and we are dedicated to promoting health and wellness among our residents. We provide assistance with gym access to help residents stay active and healthy.",
    description2: "",
    image: "/images/Services/Image-3.png",
    alt: "Person exercising on treadmill",
  },
  {
    number: "5",
    title: "MOVE-ON ASSISTANCE",
    description1:
      "Our move-on services help residents find and maintain independent accommodation. We assist with budgeting, life skills, and provide personalized support to ensure they thrive in their new homes.",
    description2: "",
    image: "/images/Services/Image-4.png",
    alt: "Two people in conversation",
  },
]

export default function ServicesPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lockedScrollPositionRef = useRef<number | null>(null)
  const touchStartRef = useRef<{ x: number; y: number; scrollLeft: number } | null>(null)
  const isScrollingHorizontallyRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Check if section is in view with more lenient boundaries
      const isInView = rect.top <= viewportHeight * 0.3 && rect.bottom >= viewportHeight * 0.3
      
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
          
          // Scroll cards horizontally with smoother speed
          container.scrollLeft = Math.min(currentScroll + e.deltaY * 3, maxScroll)
          
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
          
          // Scroll cards horizontally in reverse with smoother speed
          container.scrollLeft = Math.max(currentScroll + e.deltaY * 3, 0)
          
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
    <div className="min-h-screen bg-white">
      <StickyNav />

      {/* Services Hero Section */}
      <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden" data-hero-section>
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-normal text-center text-black mb-16">
            SERVICES
          </h1>

          <div className="w-full flex justify-center">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "auto",
              }}
            >
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[60vw] snap-start"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start h-full">
                    {/* Image - Top on mobile, Left on desktop */}
                    <div className="relative w-full md:w-[40%] h-[200px] md:h-[320px] flex-shrink-0">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.alt}
                        fill
                        quality={100}
                        priority
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Content - Bottom on mobile, Right on desktop */}
                    <div className="flex flex-col space-y-4 w-full md:w-[60%] py-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-3xl font-bold">{card.number}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-black font-[family-name:var(--font-anton)] uppercase leading-tight">
                          {card.title}
                        </h2>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm md:text-base text-black leading-relaxed">{card.description1}</p>
                        {card.description2 && (
                          <p className="text-sm md:text-base text-black leading-relaxed">{card.description2}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#171E19]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center text-white mb-16 font-[family-name:var(--font-anton)]">
            OTHER COOL PERKS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CCTV Card */}
            <div className="flex overflow-hidden h-[200px]">
              <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-6">
                <Image src="/Icons/services/CCTV.svg" alt="CCTV" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="w-[70%] bg-white p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-3 text-black">CCTV</h3>
                <p className="text-sm leading-relaxed text-black">
                  Our property is equipped with CCTV surveillance for your safety and security. Rest assured, we
                  strictly adhere to data privacy policy and will always respect your privacy.
                </p>
              </div>
            </div>

            {/* High speed Wi-Fi Card */}
            <div className="flex overflow-hidden h-[200px]">
              <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-6">
                <Image src="/Icons/services/High speed wifi.svg" alt="Wi-Fi" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="w-[70%] bg-white p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-3 text-black">High speed Wi-Fi</h3>
                <p className="text-sm leading-relaxed text-black">
                  The property is equipped with high-speed Wi-Fi, offering an unmetered and uninterrupted connection for
                  your convenience.
                </p>
              </div>
            </div>

            {/* Educational Trips Card */}
            <div className="flex overflow-hidden h-[200px]">
              <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-6">
                <Image src="/Icons/services/edu trips.svg" alt="Educational Trips" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="w-[70%] bg-white p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-3 text-black">Educational Trips</h3>
                <p className="text-sm leading-relaxed text-black">
                  Enjoy educational trips to museums and exciting places. Expand your knowledge while having fun and
                  exploring the world.
                </p>
              </div>
            </div>

            {/* Movie Nights Card */}
            <div className="flex overflow-hidden h-[200px]">
              <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-6">
                <Image src="/Icons/services/movie nights.svg" alt="Movie Nights" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="w-[70%] bg-white p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-3 text-black">Movie Nights</h3>
                <p className="text-sm leading-relaxed text-black">
                  Join us for movie nights! We host screenings in cozy areas for relaxation and socializing with
                  housemates. Movie nights foster community and belonging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
