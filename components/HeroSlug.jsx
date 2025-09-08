"use client"
import { useEffect, useState } from "react"

export default function HeroSlug({ service }) {
  const [backgroundType, setBackgroundType] = useState('video') // 'image' or 'video' - Start with video first
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Background images for carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ]

  // Auto-change background images every 5 seconds
  useEffect(() => {
    if (backgroundType === 'image') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [backgroundType, backgroundImages.length])

  // Functions to manually control background
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    )
  }

  const toggleBackgroundType = () => {
    setBackgroundType(prev => prev === 'image' ? 'video' : 'image')
  }

  // Handle video error - fallback to images
  const handleVideoError = () => {
    setBackgroundType('image')
  }

  // Fallback service data if not provided
  const defaultService = {
    title: "Professional Development Services",
    category: "Software Development",
    longDescription: "Expert development services tailored to your business needs with cutting-edge technology and best practices."
  }

  const currentService = service || defaultService

  return (
    <div className="bg-black min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">

      {/* Background Video or Image Carousel */}
      {backgroundType === 'video' ? (
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError} // Fallback to images if video fails
          >
            <source src="/images/background.mp4" type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
        </div>
      ) : (
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-40' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover"
              }}
            />
          ))}
        </div>
      )}

      {/* Background Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={toggleBackgroundType}
          className="bg-black/50 backdrop-blur-md border border-blue-500/30 text-white px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-all duration-200 text-sm"
        >
          {backgroundType === 'image' ? 'Video' : 'Images'}
        </button>
        {backgroundType === 'image' && (
          <>
            <button
              onClick={prevImage}
              className="bg-black/50 backdrop-blur-md border border-blue-500/30 text-white px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-all duration-200"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="bg-black/50 backdrop-blur-md border border-blue-500/30 text-white px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-all duration-200"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Image Indicators */}
      {backgroundType === 'image' && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-blue-500' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Hero Content - Service Specific */}
      <div className="flex items-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] pt-8 sm:pt-10 md:pt-12 relative z-10">
        {/* Service Content - Taking full width and centered */}
        <div className="w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              {currentService.title}
            </span>
            <br />
            Solutions
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto animate-fade-in-up opacity-0 animation-delay-400">
            {currentService.longDescription || "Professional development services with cutting-edge technology, transparent processes, and rapid deployment tailored to your business needs."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25 border border-blue-400/30 text-sm sm:text-base"
            >
              Get Started Now
            </a>
            <a
              href="/contact"
              className="bg-black/20 backdrop-blur-xl border border-blue-500/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
