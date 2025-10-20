"use client"

import { StickyNav } from "@/components/sticky-nav"
import { Footer } from "@/components/footer"
import { AmenitiesScrollIndicator } from "@/components/amenities-scroll-indicator"
import Image from "next/image"
import { Anton } from "next/font/google"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"

const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function FAQsPage() {
  const [currentCard, setCurrentCard] = useState(0)

  const cards = [
    {
      title: "AMENITIES",
      image: "/images/FAQS/Rectangle 8.png",
      startNumber: 1,
      items: [
        "High-speed Wi-Fi access in all rooms and common areas.",
        "A shared lounge area with comfortable seating, a flat-screen TV, and gaming consoles.",
        "Fully equipped kitchen with modern appliances and dining area."
      ]
    },
    {
      title: "FACILITIES",
      image: "/images/FAQS/Rectangle 25.png",
      startNumber: 4,
      items: [
        "On-site laundry facilities with modern washers and dryers.",
        "A communal garden or outdoor area for residents to relax and socialise.",
        "Easy access to local gym or fitness centre with modern equipment and workout programs."
      ]
    },
    {
      title: "ACTIVITIES",
      image: "/images/FAQS/Rectangle 26.png",
      startNumber: 7,
      items: [
        "Personal storage space for residents' belongings.",
        "Regular social activities and events, such as movie nights, game nights, and barbecues.",
        "Support services, including counselling and life skills training.",
        "24/7 on-site staff availability for any emergencies or assistance needed."
      ]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]")
      if (!heroSection) return

      const rect = heroSection.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      const scrolled = Math.max(0, -sectionTop)
      const maxScroll = sectionHeight - windowHeight
      const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1)

      // Divide progress into 3 sections for 3 cards
      if (progress < 0.33) {
        setCurrentCard(0)
      } else if (progress < 0.66) {
        setCurrentCard(1)
      } else {
        setCurrentCard(2)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const faqs = [
    {
      question: "What is supported accommodation?",
      answer:
        "Supported accommodation is housing with additional support for individuals who may need help with everyday tasks, such as budgeting, cooking, and maintaining their living space.",
    },
    {
      question: "What types of accommodation are available?",
      answer:
        "At the moment we have a 4 bedroom bungalow and a 3 bedroom flat that are both fully furnished and equipped with all necessary amenities.",
    },
    {
      question: "Who is eligible for supported accommodation?",
      answer:
        "Our services are available to 16 to 25 year olds who are at risk of homelessness and need extra support to live independently. We also work with individuals who have experienced mental health challenges, substance misuse issues, or other difficult life circumstances.",
    },
    {
      question: "How do I apply for supported accommodation?",
      answer:
        "You can fill out our online application form or contact us directly to schedule a free assessment.",
    },
    {
      question: "How much does it cost to stay in Ecolion supported accommodation?",
      answer:
        "We believe in transparent pricing and do not have any hidden costs. The cost of rent and utilities are covered by housing benefits, and we work with residents to develop a budget for other expenses.",
    },
    {
      question: "What qualifications do your staff members have?",
      answer:
        "Our staff members are highly qualified and experienced in working with young people who are at risk of homelessness. They have a variety of certifications and degrees, including social work, counseling, and psychology. In addition, all staff members undergo regular training and professional development to ensure they are up-to-date on the latest best practices and techniques for supporting our residents.",
    },
    {
      question: "How is your organization funded?",
      answer:
        "Our organization is funded through a combination of housing benefits, grants, and donations. We are committed to using our resources efficiently and transparently to provide the best possible support for our residents.",
    },
    {
      question: "What are the benefits of supported accommodation?",
      answer:
        "The benefits of supported accommodation are numerous. First and foremost, it provides a safe and secure living environment for individuals who may otherwise be at risk of homelessness or facing other difficulties. It also offers the opportunity for residents to develop their skills and gain independence, with support from experienced staff. In addition, supported accommodation provides access to education and training programs, as well as healthcare and other essential services. It can also be a more cost-effective option than other forms of accommodation, as residents share the cost of rent and utilities. Overall, supported accommodation can have a positive impact on individuals' lives and help them achieve their goals.",
    },
    {
      question: "What kind of accommodation do you offer?",
      answer:
        "We have a 4 bedroom bungalow and a 3 bedroom flat that are both fully furnished and equipped with all necessary amenities.",
    },
    {
      question: "What kind of support do you offer residents?",
      answer:
        "We offer a range of support services, including help with budgeting, cooking, and other life skills. We also provide access to education and training programs, mental health support, and move-on services to help residents find and maintain their own independent accommodation.",
    },
    {
      question: "How is my privacy and security protected?",
      answer:
        "We take the privacy and security of our residents very seriously. We have strict policies in place to ensure that personal information is kept confidential and that our properties are safe and secure. We also work with residents to create a personalized safety plan to address any concerns they may have.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <StickyNav />

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden" data-hero-section>
        <h1 className="text-[36px] mb-16 font-normal">FAQS</h1>

        {/* Dynamic Cards Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl">
          {/* Left Image */}
          <div className="relative w-full max-w-md h-[400px] md:h-[450px]">
            <Image
              src={cards[currentCard].image}
              alt={cards[currentCard].title}
              fill
              className="object-cover transition-opacity duration-500"
              key={`image-${currentCard}`}
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className={`${anton.className} text-4xl md:text-5xl transition-opacity duration-500`} key={`title-${currentCard}`}>
              {cards[currentCard].title}
            </h2>

            <div className="space-y-6">
              {cards[currentCard].items.map((item, index) => (
                <div key={`${currentCard}-${index}`} className="flex gap-4 items-start transition-opacity duration-500">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                    <span className={`${anton.className} text-2xl`}>{cards[currentCard].startNumber + index}</span>
                  </div>
                  <p className="text-base leading-relaxed pt-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AmenitiesScrollIndicator />
      </section>

      {/* FAQ Section */}
      <section className="bg-[#171E19] py-20 px-6 md:px-12 lg:px-24">
        <h2 className={`${anton.className} text-4xl md:text-5xl lg:text-6xl text-white text-center mb-16`}>
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-sm border-none">
                <AccordionTrigger className="px-6 py-4 text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  )
}
