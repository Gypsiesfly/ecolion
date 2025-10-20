import { ArrowRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: "/images/SHC/Frame.svg",
    title: "ADAPTIVE",
    description:
      "Ecolion Supported Housing values adaptability. Our services meet changing needs, with flexible and providing personalised support to help residents achieve their goals.",
  },
  {
    icon: "/images/SHC/Frame-1.svg",
    title: "INNOVATIVE",
    description:
      "Ecolion Supported Housing Limited focuses on innovation and embraces residents' ideas. We review services and explore new technologies to improve care and create a safe environment.",
  },
  {
    icon: "/images/SHC/Frame-2.svg",
    title: "RESPONSIVE",
    description:
      "Ecolion Supported Housing Limited meets residents' needs. We create tailored environments and provide 24/7 support, ensuring safety and empowerment.",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-[#171E19] text-[#FEF5D0]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-anton)] text-[87px] leading-tight uppercase tracking-tight text-balance bg-gradient-to-r from-white via-[#FEF5D0] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
              SUPPORTED HOUSING YOU CAN TRUST
            </h2>

            <div className="relative w-full sm:max-w-md lg:max-w-[300px] h-14">
              <button className="w-full h-full bg-[#FEF5D0] text-black font-medium text-sm sm:text-base flex items-center justify-between px-2 hover:opacity-90 transition-opacity">
                <span className="flex-1 text-center">Start your journey today</span>
                <div className="w-12 sm:w-14 h-[calc(100%-8px)] bg-black flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-5 w-5 text-[#FEF5D0]" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Cards - matching services section card style */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex h-[200px] lg:h-[220px] w-full lg:w-[550px] overflow-hidden">
                <div className="w-[30%] bg-[#171E19] flex items-center justify-center p-4 lg:p-8">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={58}
                    height={58}
                    className="w-[58px] h-[58px]"
                  />
                </div>

                <div className="w-[70%] bg-white p-4 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-black">{feature.title}</h3>
                  <p className="text-sm lg:text-base leading-relaxed text-black">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
