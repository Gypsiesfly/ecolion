import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Anton } from "next/font/google"
import localFont from "next/font/local"
import { Suspense } from "react"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})

const ttHoves = localFont({
  src: [
    {
      path: "../public/Fonts/TT Hoves Pro Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/TT Hoves Pro Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-tt-hoves",
})

export const metadata: Metadata = {
  title: "Ecolion Supported Housing Limited",
  description: "Supporting young people with safety, stability, and growth",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ttHoves.variable} ${anton.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
