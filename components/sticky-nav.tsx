"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Hand } from "lucide-react"
import Image from "next/image"

export function StickyNav() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]")
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        // Trigger when the top of hero section goes above viewport
        setIsSticky(rect.top < 0)
      } else {
        setIsSticky(window.scrollY > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`bg-[#171E19] transition-all duration-500 ease-in-out z-40 ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : "relative mx-[15px] mt-[21px]"
        }`}
      >
        <div className="px-[30px]">
          <div className="flex items-center justify-between py-4">
            {/* Logo on dark background */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Ecolion homes logo.svg"
                alt="Ecolion Housing"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <div className="hidden md:block bg-[#FEF5D0] rounded-sm px-6 py-3">
              <div className="flex items-center gap-8">
                <Link 
                  href="/" 
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                    pathname === '/' 
                      ? 'bg-black text-white' 
                      : 'text-black hover:text-black/70'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                    pathname === '/about' 
                      ? 'bg-black text-white' 
                      : 'text-black hover:text-black/70'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                    pathname === '/services' 
                      ? 'bg-black text-white' 
                      : 'text-black hover:text-black/70'
                  }`}
                >
                  Services
                </Link>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button 
                    className={`text-sm font-medium transition-colors flex items-center gap-1 px-3 py-2 rounded-sm ${
                      pathname === '/faqs' || pathname === '/privacy-policy' 
                        ? 'bg-black text-white' 
                        : 'text-black hover:text-black/70'
                    }`}
                  >
                    Resources & Policies
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`absolute top-full left-0 pt-1 transition-all duration-200 ease-out ${
                      isDropdownOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-black rounded-sm shadow-lg py-2 min-w-[220px]">
                      <Link
                        href="/faqs"
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === '/faqs'
                            ? 'bg-white text-black'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        FAQs
                      </Link>
                      <Link
                        href="/privacy-policy"
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          pathname === '/privacy-policy'
                            ? 'bg-white text-black'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/contact" 
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                    pathname === '/contact' 
                      ? 'bg-black text-white' 
                      : 'text-black hover:text-black/70'
                  }`}
                >
                  Contact Us
                </Link>
                <div className="flex items-center gap-4">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/Icons/Instagram.svg" 
                      alt="Instagram" 
                      width={20} 
                      height={20} 
                      className="hover:opacity-70 transition-opacity"
                    />
                  </Link>
                  <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/Icons/tiktok.svg" 
                      alt="TikTok" 
                      width={20} 
                      height={20} 
                      className="hover:opacity-70 transition-opacity"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:hidden bg-[#FEF5D0] rounded-sm px-4 py-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-black/70 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen p-8 md:p-12">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-black hover:text-black/70 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-10 w-10 stroke-[3]" />
            </button>

            {/* Menu Items with Alternating Layout */}
            <div className="max-w-6xl mx-auto mt-16 space-y-8">
              {/* HOME - Left: Icon + Text, Right: Description Box */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-center group"
              >
                <div className="flex items-center gap-4">
                  {pathname === '/' && <Hand className="h-12 w-12 md:h-16 md:w-16 text-black rotate-90" strokeWidth={2} />}
                  <h2
                    className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    HOME
                  </h2>
                </div>
                <div className="bg-[#171E19] p-6 md:p-8 flex items-center justify-between gap-4 group-hover:bg-[#171E19]/90 transition-colors">
                  <p className="text-[#FEF5D0] text-sm md:text-base">
                    Discover the mission and vision of Ecolion Homes.
                  </p>
                  <span className="text-[#FEF5D0] text-4xl md:text-5xl font-bold shrink-0">01</span>
                </div>
              </Link>

              {/* ABOUT US - Left: Description Box, Right: Text */}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-center group"
              >
                <div className="bg-[#171E19] p-6 md:p-8 flex items-center justify-between gap-4 order-2 md:order-1 group-hover:bg-[#171E19]/90 transition-colors">
                  <p className="text-[#FEF5D0] text-sm md:text-base">
                    Discover all the essential information about our organization.
                  </p>
                  <span className="text-[#FEF5D0] text-4xl md:text-5xl font-bold shrink-0">02</span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase text-right order-1 md:order-2"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  ABOUT US
                </h2>
              </Link>

              {/* SERVICES - Left: Text, Right: Description Box */}
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-center group"
              >
                <h2
                  className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  SERVICES
                </h2>
                <div className="bg-[#171E19] p-6 md:p-8 flex items-center justify-between gap-4 group-hover:bg-[#171E19]/90 transition-colors">
                  <span className="text-[#FEF5D0] text-4xl md:text-5xl font-bold shrink-0">03</span>
                  <p className="text-[#FEF5D0] text-sm md:text-base text-right">
                    A comprehensive overview of the services we provide.
                  </p>
                </div>
              </Link>

              {/* RESOURCES & POLICIES - Left: Description Box, Right: Text */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-center">
                <div className="bg-[#171E19] p-6 md:p-8 flex items-center justify-between gap-4 order-2 md:order-1">
                  <p className="text-[#FEF5D0] text-sm md:text-base">
                    A review of our Frequently Asked Questions and privacy policies.
                  </p>
                  <span className="text-[#FEF5D0] text-4xl md:text-5xl font-bold shrink-0">04</span>
                </div>
                <h2
                  className="text-4xl md:text-6xl font-black tracking-tight text-black uppercase text-right order-1 md:order-2 leading-tight"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  RESOURCES & POLICIES
                </h2>
              </div>

              {/* Sub-links for Resources & Policies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-8">
                <Link
                  href="/faqs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#FEF5D0] p-4 md:p-6 hover:bg-[#FEF5D0]/80 transition-colors"
                >
                  <p className="text-black text-lg md:text-xl font-semibold">FAQs</p>
                </Link>
                <Link
                  href="/privacy-policy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#FEF5D0] p-4 md:p-6 hover:bg-[#FEF5D0]/80 transition-colors"
                >
                  <p className="text-black text-lg md:text-xl font-semibold">Privacy Policy</p>
                </Link>
              </div>

              {/* CONTACT US - Left: Text, Right: Description Box */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-center group"
              >
                <h2
                  className="text-5xl md:text-7xl font-black tracking-tight text-black uppercase"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  CONTACT US
                </h2>
                <div className="bg-[#171E19] p-6 md:p-8 flex items-center justify-between gap-4 group-hover:bg-[#171E19]/90 transition-colors">
                  <p className="text-[#FEF5D0] text-sm md:text-base">Reach out to us with any questions or concerns.</p>
                  <span className="text-[#FEF5D0] text-4xl md:text-5xl font-bold shrink-0">05</span>
                </div>
              </Link>
            </div>

            {/* Social Icons at Bottom */}
            <div className="flex items-center justify-center gap-6 mt-16 mb-8">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171E19] rounded-full p-4 hover:bg-[#171E19]/80 transition-colors"
              >
                <Image 
                  src="/Icons/Instagram.svg" 
                  alt="Instagram" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8"
                />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171E19] rounded-full p-4 hover:bg-[#171E19]/80 transition-colors"
              >
                <Image 
                  src="/Icons/tiktok.svg" 
                  alt="TikTok" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyNav
