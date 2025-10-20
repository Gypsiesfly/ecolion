"use client"

import { useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#171E19] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-[#FEF5D0] text-4xl font-light hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <nav className="flex flex-col items-center justify-center gap-5 -mt-10">
            <a
              href="/"
              className="text-3xl md:text-4xl font-medium text-[#FEF5D0] hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-3xl md:text-4xl font-medium text-[#FEF5D0] hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-3xl md:text-4xl font-medium text-[#FEF5D0] hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/resources"
              className="text-3xl md:text-4xl font-medium text-[#FEF5D0] hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources & Policies
            </a>
            <a
              href="/contact"
              className="text-3xl md:text-4xl font-medium text-[#FEF5D0] hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}

      <section data-hero-section className="relative bg-[#171E19] text-[#FEF5D0] overflow-hidden m-[10px] sm:m-[15px]">
        <div className="flex justify-end py-3 px-4 sm:py-4 md:px-[30px]">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label="Toggle menu">
            <Image
              src="/desktop-menu.svg"
              alt="Menu"
              width={50}
              height={22}
              className="w-8 h-4 sm:w-10 sm:h-5 md:w-[50px] md:h-[22px]"
            />
          </button>
        </div>

        <div className="px-4 pb-6 pt-0 sm:p-6 md:px-[30px] md:pt-[3px] md:pb-[30px]">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-6 lg:gap-8 items-center lg:items-end">
            <div className="relative w-full lg:flex-1 aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden flex-shrink-0 self-start lg:self-end">
              <video 
                src="/hero-image.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 lg:flex-[0.5] w-full">
              <h1 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight uppercase tracking-tight text-balance pr-0 lg:max-w-[520px] xl:max-w-[600px] bg-gradient-to-r from-[#FEF5D0] via-white to-[#FEF5D0] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                SUPPORTING YOUNG PEOPLE WITH SAFETY, STABILITY, AND GROWTH.
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl text-white">
                A home for young people aged 16 to 25 at risk of homelessness
              </p>
              <div className="relative w-full h-12 sm:h-14 md:h-14 lg:h-16">
                <a 
                  href="/contact" 
                  className="w-full h-full bg-white text-black font-medium text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <span>Register now</span>
                  <div className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 w-10 sm:w-12 md:w-14 lg:w-[56px] bg-black flex items-center justify-center">
                    <Image
                      src="/arrow-icon.svg"
                      alt="Arrow"
                      width={36}
                      height={50}
                      className="w-5 h-7 sm:w-6 sm:h-8 md:w-7 md:h-9 lg:w-9 lg:h-12"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
