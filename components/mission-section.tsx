"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export function MissionSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasGlinted, setHasGlinted] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasGlinted) {
            setHasGlinted(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [hasGlinted])

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden relative m-[15px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-8 lg:gap-12 xl:gap-16 items-center relative">
          {/* Left Image */}
          <div 
            className="relative w-full lg:w-[361px] h-[400px] lg:h-[500px] xl:h-[550px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          >
            <Image
              src="/images/Section Image1.jpg"
              alt="Supportive environment"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="space-y-6 md:space-y-8 lg:px-8">
            <h2 
              ref={titleRef}
              className={`font-[family-name:var(--font-anton)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[87px] leading-[1.1] uppercase tracking-tight bg-gradient-to-r from-black via-gray-600 to-black bg-[length:200%_auto] bg-clip-text text-transparent ${
                hasGlinted ? 'animate-[shimmer_3s_linear_1]' : ''
              }`}
            >
              OUR MISSION STATEMENT
            </h2>

            <div className="space-y-4 md:space-y-6 text-black">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                At Ecolion Supported Housing Limited, we provide safe and supportive living for young adults at risk of
                homelessness. We empower residents with the tools and resources to live independently and achieve their
                goals, while fostering an inclusive community where everyone is welcomed and given a chance to succeed.
              </p>

              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                We believe every young person deserves a stable, nurturing home and we are dedicated to making a
                positive difference by helping them build the strong foundation they need to thrive.
              </p>
            </div>
          </div>

          {/* Right Image - Overflows to the right */}
          <div 
            className="hidden lg:block relative w-full h-[500px] xl:h-[550px] lg:-mr-[70%] xl:-mr-[80%] transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
            }}
          >
            <Image src="/images/Section Image.png" alt="Urban community street scene" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
