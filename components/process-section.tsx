"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "The first step is to get in touch with us. You can do this by filling out the form on our website or by giving us a call to arrange a time for you to come and visit us and see our properties.",
    image: "/images/steps/Image-2.png",
    imagePosition: "left",
    buttons: [
      { text: "Register now", icon: "arrow" },
      { text: "Give us a call", icon: "phone" },
    ],
  },
  {
    number: "02",
    title: "Assessment",
    description: [
      "During your contact we'll conduct an assessment to understand what you, your needs and how we can best support you. This includes discussing your goals, preferences, and any support needs you may have.",
      "We work closely with you to explore all available funding options, including government assistance, private grants, and personal financing.",
    ],
    image: "/images/steps/Image-1.png",
    imagePosition: "left",
    buttons: [{ text: "Learn more", icon: "arrow" }],
  },
  {
    number: "03",
    title: "Personalised Support Plan",
    description:
      "Should we deem our services suitable for you, based on your needs, we will work with you to create a personalized support plan that outlines the services we will provide, and the actions we will take to help you achieve your goals. We understand that each person is different and we'll ensure that your support plan is tailored to your individual needs and preferences.",
    image: "/images/steps/Image-3.png",
    imagePosition: "left",
    buttons: [{ text: "Give us a call", icon: "phone" }],
  },
  {
    number: "04",
    title: "Accommodation & Support",
    description:
      "We provide safe and comfortable housing as well as provide ongoing support and guidance from our dedicated team of professionals. Our goal is to help you develop the skills and confidence you need to live independently and achieve your goals.",
    image: "/images/steps/Image.png",
    imagePosition: "left",
    buttons: [{ text: "Get started", icon: "arrow" }],
  },
  {
    number: "05",
    title: "Move-On Services",
    description:
      "We provide safe and comfortable housing as well as provide ongoing support and guidance from our dedicated team of professionals. Our goal is to help you develop the skills and confidence you need to live independently and achieve your goals.",
    image: "/images/steps/Image-4.png",
    imagePosition: "left",
    buttons: [],
  },
]

export function ProcessSection() {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set())
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const hasExpandedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Expand step when it comes into view (scrolling down)
              if (!hasExpandedRef.current.has(index)) {
                setTimeout(() => {
                  setExpandedSteps(prev => new Set([...prev, index]))
                  hasExpandedRef.current.add(index)
                }, 1200 + index * 200)
              }
            } else {
              // Close step when it leaves viewport (scrolling up)
              const rect = ref.getBoundingClientRect()
              if (rect.bottom < 0) {
                setExpandedSteps(prev => {
                  const newSet = new Set(prev)
                  newSet.delete(index)
                  return newSet
                })
                hasExpandedRef.current.delete(index)
              }
            }
          })
        },
        { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
        hasExpandedRef.current.delete(index)
      } else {
        newSet.add(index)
        hasExpandedRef.current.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl text-center mb-12 md:mb-16">Our process</h2>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={(el) => { stepRefs.current[index] = el }}
              className="border-b border-gray-200/60"
            >
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:opacity-70 transition-opacity"
              >
                <span className="font-[family-name:var(--font-anton)] text-[65px] tracking-tight uppercase">
                  STEP {step.number}
                </span>
                <div
                  className={`h-[60px] w-[60px] rounded-full border border-black flex items-center justify-center transition-transform duration-300 ${
                    expandedSteps.has(index) ? "rotate-90" : ""
                  }`}
                >
                  <ArrowRight className="h-7 w-7" strokeWidth={1.5} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-[1200ms] ease-in-out ${
                  expandedSteps.has(index) ? "max-h-[800px] pb-8 md:pb-12 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                  {/* Image - Always on left */}
                  <div className="w-full md:w-[35%] relative aspect-[3/4] md:aspect-auto md:h-[300px] lg:h-[350px] flex-shrink-0">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>

                  {/* Content - Always on right */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-4 md:mb-6">{step.title}</h3>

                    {Array.isArray(step.description) ? (
                      <ol className="space-y-3 mb-[20px]">
                        {step.description.map((item, i) => (
                          <li key={i} className="text-sm md:text-base leading-relaxed">
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-sm md:text-base leading-relaxed mb-[20px]">{step.description}</p>
                    )}

                    {/* Buttons */}
                    {step.buttons.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {step.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            className="bg-[#FEF5D0] hover:bg-[#FEF5D0]/90 text-black font-medium px-6 py-3 flex items-center gap-3 transition-colors"
                          >
                            {button.icon === "phone" && <Phone className="h-5 w-5" />}
                            <span>{button.text}</span>
                            <div className="bg-black p-2">
                              <ArrowRight className="h-4 w-4 text-white" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
