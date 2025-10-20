"use client"

import { useRef } from "react"
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

  // Simple scroll handler for navigation buttons
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const scrollAmount = container.offsetWidth * 0.8 // Scroll 80% of container width
    
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white m-[10px] sm:m-[15px] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#171E19]">Our Services</h2>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-sm text-gray-500">
            Scroll or use arrows to navigate
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Services Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] bg-white border-2 border-[#171E19] rounded-lg overflow-hidden"
            >
              <div className="h-full flex">
                <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-4">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                  />
                </div>

                <div className="w-[70%] p-4 sm:p-6 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#171E19]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
