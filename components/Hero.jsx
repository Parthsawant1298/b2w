"use client"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const bigCardRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [backgroundType, setBackgroundType] = useState('image') // 'image' or 'video'

  useEffect(() => {
    const handleScroll = () => {
      if (bigCardRef.current && !isAnimating) {
        const rect = bigCardRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          setIsAnimating(true)
          // Remove animation class first
          bigCardRef.current.classList.remove("scroll-flip-animation")
          // Force reflow
          bigCardRef.current.offsetHeight
          // Add animation class back
          bigCardRef.current.classList.add("scroll-flip-animation")

          // Reset after animation completes (1.2s)
          setTimeout(() => {
            setIsAnimating(false)
          }, 1200)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isAnimating])

  return (
    <div className="min-h-screen relative">
      {/* Background Image or Video */}
      {backgroundType === 'image' ? (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "cover"
          }}
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback to image if video fails */}
          <div 
            className="absolute inset-0 bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/background.jpg')",
              backgroundSize: "cover"
            }}
          />
        </video>
      )}
      
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 pt-20 sm:pt-24 md:pt-32 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
          Full-Stack AI-Powered
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Software Development
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl px-4 sm:px-0 animate-fade-in-up opacity-0 animation-delay-400">
          Revolutionary IT outsourcing with AI-driven development, transparent processes, and rapid deployment. 
          From custom software to digital transformation - we help businesses find order in the midst of chaos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 animate-fade-in-up opacity-0 animation-delay-600">
          <a
            href="#"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-200 font-medium shadow-lg shadow-purple-500/25 border border-purple-400/30 text-sm sm:text-base"
          >
            Start with AI Development
          </a>
          <a
            href="#"
            className="bg-black/20 backdrop-blur-xl border border-purple-500/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Demo Video */}
        <div className="w-full max-w-6xl mx-auto animate-fade-in-up opacity-0 animation-delay-800">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 big-card-container h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] border border-purple-500/30 bg-black/20 backdrop-blur-xl"
            ref={bigCardRef}
          >
            <iframe              
 src="https://www.youtube.com/embed/MUWu45U2bMU?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&showinfo=0&start=0&end=785&loop=1&playlist=MUWu45U2bMU"               
 title="B2W Infotech Platform Demo"               
 className="w-full h-full"               
 frameBorder="0"               
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"               
 allowFullScreen               
 loading="lazy"             
></iframe>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-24 w-full animate-fade-in-up opacity-0 animation-delay-1000">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16">Trusted by Industry Leaders</h2>
          <div className="overflow-hidden">
            {/* First Row - Moving Right */}
            <div className="flex animate-scroll-right mb-8 whitespace-nowrap">
              <div className="flex items-center justify-center min-w-[250px] px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-xl">MICROSOFT</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">GOOGLE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">APPLE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Netflix</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">TESLA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">AMAZON</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SPOTIFY</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Airbnb</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">MICROSOFT</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">GOOGLE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">APPLE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Netflix</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">TESLA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">AMAZON</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SPOTIFY</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Airbnb</span>
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex animate-scroll-left whitespace-nowrap">
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">META</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Uber</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">NVIDIA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SALESFORCE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">ADOBE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Slack</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">ZOOM</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SHOPIFY</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">META</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Uber</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">NVIDIA</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SALESFORCE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">ADOBE</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white italic text-lg sm:text-xl">Slack</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">ZOOM</span>
              </div>
              <div className="flex items-center justify-center min-w-[200px] sm:min-w-[250px] px-6 sm:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-white text-lg sm:text-xl">SHOPIFY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1.0s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(139, 92, 246, 0.3);
        }

        .big-card-container {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .scroll-flip-animation {
          animation: bigCardFlip 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes bigCardFlip {
          0% {
            transform: perspective(1200px) rotateX(-20deg) translateY(60px);
            opacity: 0.6;
          }
          50% {
            transform: perspective(1200px) rotateX(8deg) translateY(-15px);
            opacity: 0.85;
          }
          100% {
            transform: perspective(1200px) rotateX(0deg) translateY(0px);
            opacity: 1;
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
          opacity: 0.8;
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
          opacity: 0.8;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}