"use client"

import Image from "next/image"

export function EmpoweringSection() {
  return (
    <section className="bg-[#FEF5D0]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 lg:gap-32 items-stretch h-[700px] overflow-hidden">
          {/* Left Content */}
          <div className="space-y-8 py-16 md:py-24">
            <h2 className="font-[family-name:var(--font-anton)] text-4xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-tight text-black">
              EMPOWERING RESIDENTS
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase border-b-2 border-black pb-1 inline-block">
                  INDIVIDUALISED APPROACH
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-black mt-4">
                  Residents see the positive impact of our tailored approach. We value each resident as unique and
                  create plans that empower them to reach their potential. Our adaptive method meets their evolving
                  needs, ensuring they have the resources to thrive.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold mb-3 uppercase border-b-2 border-black pb-1 inline-block">
                  PRIVACY RESPECTED
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-black mt-4">
                  Our priority is to provide residents with a comfortable living space. Each private bedroom meets the
                  unique needs of our residents. We create a warm environment that feels like home, empowering them to
                  live independently and reach their potential.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Grid with Animations */}
          <div className="grid grid-cols-2 gap-4 overflow-hidden h-full">
            {/* First Column - Scrolls Up */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-1.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-2.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-3.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-4.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-5.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-1.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-2.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-3.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-4.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-5.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second Column - Scrolls Down */}
            <div className="flex flex-col gap-4 animate-scroll-down">
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-1.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-2.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-3.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-4.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-5.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-1.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-2.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-3.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-4.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image-5.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[190px] flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/Grid/Image.png"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
