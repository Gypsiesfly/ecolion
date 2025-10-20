"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { StickyNav } from "@/components/sticky-nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const [hasGlinted, setHasGlinted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const titleRef = useRef<HTMLHeadingElement>(null)

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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-white">
      <StickyNav />

      {/* About Us Hero Section */}
      <section 
        className="py-16 md:py-24 px-4 md:px-8 lg:px-12 xl:px-16" 
        data-hero-section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Large heading on the left */}
            <div className="lg:col-span-4">
              <h1 
                ref={titleRef}
                className={`font-[family-name:var(--font-anton)] text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] uppercase bg-gradient-to-r from-black via-gray-400 to-black bg-[length:200%_auto] bg-clip-text text-transparent ${
                  hasGlinted ? 'animate-[shimmer_3s_linear_1]' : ''
                }`}
              >
                ABOUT US
              </h1>
            </div>

            {/* Center text block */}
            <div className="lg:col-span-4 flex items-start pt-0 lg:pt-8">
              <p className="text-sm md:text-base leading-relaxed">
                Our organization is proudly led by a dedicated and passionate mother who recognizes the challenges faced
                by young individuals in today's society. With a strong commitment to empowering and supporting youth,
                our founder established this organization to offer a safe and nurturing environment for those at risk of
                homelessness. We aim to foster a welcoming and inclusive atmosphere that resembles a home, where our
                residents can cultivate the skills necessary for independent living and realize their full potential.
              </p>
            </div>

            {/* Large image on the right */}
            <div className="lg:col-span-4">
              <div 
                className="relative w-full max-w-[324px] h-[450px] transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                }}
              >
                <Image
                  src="/images/About/Section Image-1.png"
                  alt="Young people together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small image bottom left */}
            <div className="lg:col-span-4 lg:col-start-1">
              <div 
                className="relative w-full max-w-[324px] h-[123px] transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
                }}
              >
                <Image
                  src="/images/About/Section Image.png"
                  alt="Person relaxing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        className="bg-[#171E19] text-white py-16 md:py-24 px-4 md:px-8 lg:px-12 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">OUR STORY</h2>

          <div className="grid lg:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div 
              className="relative w-[386px] h-[452px] -ml-8 md:-ml-12 lg:-ml-16 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
              }}
            >
              <Image
                src="/images/About/Section Image-2.png"
                alt="Community support"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: All text content in three paragraphs */}
            <div className="space-y-6 font-[family-name:var(--font-anton)] text-[27px] text-[#FEF5D0] leading-relaxed">
              <p>
                We began our journey to create a secure environment for young adults facing homelessness. Acknowledging
                community resource scarcity, we established a space for skill development and independence.
              </p>
              <p>
                In Kent and Medway, we foster a supportive atmosphere for residents to feel at home. Our team is
                committed to exceptional care, helping residents pursue personal goals and optimal living.
              </p>
              <p>
                As we expand, our dedication to residents remains strong, aiming to empower individuals to realize their
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="bg-[#FEF5D0] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">THE TEAM</h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Founder */}
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl uppercase">
                CHIOMA OLI,
                <br />
                FOUNDER
              </h3>
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <Image src="/images/About/Founder Image.png" alt="Chioma Oli" fill className="object-cover" />
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                Mrs Chioma Oli embodies a caring mother and empathic leader. With a User Experience Researcher
                background, she crafts solutions to enhance team performance and growth. Her PhD in Law from SOAS and
                degree in International Law and Human Geography enrich our care approach. Her caregiver experience
                deepens her empathy. In our accommodation, every young person finds a nurturing environment focused on
                their growth.
              </p>
            </div>

            {/* Manager */}
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-anton)] text-3xl md:text-4xl uppercase">
                MRS MICHELLE JOHN,
                <br />
                MANAGER
              </h3>
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <Image src="/images/About/profile.png" alt="Mrs Michelle John" fill className="object-cover" />
              </div>
              <p className="text-sm md:text-base leading-relaxed">
                Meet our manager, an expert in social care with 24 years of experience. She excelled in advocacy and
                client assessment, supporting homeless individuals at Thames Reach. Her roles with Carr-Gomm and Look
                Ahead enriched her experience. She began her career supporting disabled and senior citizens and earned a
                BSc in Psychology and a Postgraduate Certificate in Dual Diagnosis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
