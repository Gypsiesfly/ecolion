import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/footer logo.svg"
              alt="Ecolion Housing"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Want to know more */}
          <Link
            href="/contact"
            className="flex items-center gap-3 bg-[#f1f1f1] px-6 py-3 hover:bg-[#e0e0e0] transition-colors group"
          >
            <span className="text-black font-medium transition-colors">Want to know more?</span>
            <div className="bg-[#000000] p-2 flex items-center justify-center transition-colors">
              <ArrowRight className="h-4 w-4 text-white transition-colors" />
            </div>
          </Link>

          {/* Send us a message */}
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#f1f1f1] px-6 py-3 hover:bg-[#e0e0e0] transition-colors group"
          >
            <span className="text-black font-medium transition-colors">Send us a message</span>
            <div className="bg-[#000000] p-2 flex items-center justify-center transition-colors">
              <MessageCircle className="h-4 w-4 text-white transition-colors" />
            </div>
          </Link>

          {/* Our socials */}
          <div className="flex items-center gap-3">
            <span className="text-black font-medium">Our socials</span>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#000000] p-2 hover:opacity-90 transition-opacity"
            >
              <Instagram className="h-5 w-5 text-white" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#000000] p-2 hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
