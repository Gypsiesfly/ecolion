"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Ecolion homes logo1.svg"
              alt="Ecolion Housing"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                pathname === '/' 
                  ? 'bg-primary-foreground text-primary' 
                  : 'hover:text-emerald-500'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                pathname === '/about' 
                  ? 'bg-primary-foreground text-primary' 
                  : 'hover:text-emerald-500'
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                pathname === '/services' 
                  ? 'bg-primary-foreground text-primary' 
                  : 'hover:text-emerald-500'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/resources" 
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                pathname === '/resources' || pathname === '/faqs' || pathname === '/privacy-policy' 
                  ? 'bg-primary-foreground text-primary' 
                  : 'hover:text-emerald-500'
              }`}
            >
              Resources & Policies
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-sm ${
                pathname === '/contact' 
                  ? 'bg-primary-foreground text-primary' 
                  : 'hover:text-emerald-500'
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
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-4 pb-4 md:hidden">
            <Link
              href="/"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources & Policies
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex items-center gap-4 pt-2">
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
          </nav>
        )}
      </div>
    </header>
  )
}
