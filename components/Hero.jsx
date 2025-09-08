"use client"
import { useEffect, useState } from "react"

export default function Hero() {
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

  return (
    <div className="bg-black min-h-[70vh] sm:min-h-[80vh] md:min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">

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
      
      {/* Hero Content - Left Side */}
      <div className="flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-10 sm:pt-12 md:pt-16 relative z-10">
        {/* Left Side Content - Taking about 70% width */}
        <div className="w-full lg:w-4/5 xl:w-3/4 text-left -mt-16 sm:-mt-20 md:-mt-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up opacity-0 animation-delay-200">
            Full-Stack AI-Powered
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Software Development
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl animate-fade-in-up opacity-0 animation-delay-400">
            Revolutionary IT outsourcing with AI-driven development, transparent processes, and rapid deployment. 
            From custom software to digital transformation - we help businesses find order in the midst of chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 animate-fade-in-up opacity-0 animation-delay-600">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 hover:scale-105 transition-all duration-200 font-medium shadow-lg shadow-blue-500/25 border border-blue-400/30 text-sm sm:text-base"
            >
              Start with AI Development
            </a>
            <a
              href="#"
              className="bg-black/20 backdrop-blur-xl border border-blue-500/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 font-medium text-sm sm:text-base"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
        {/* Right side remains empty for background images to show */}
        <div className="hidden lg:block w-1/5 xl:w-1/4"></div>
      </div>

      {/* Company Logos - Hidden on mobile */}
      <div className="hidden sm:block mt-24 w-full animate-fade-in-up opacity-0 animation-delay-1000 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">Trusted by Industry Leaders</h2>
        <div className="overflow-hidden">
          {/* First Row - Moving Right */}
          <div className="flex animate-scroll-right mb-8 whitespace-nowrap">
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">MICROSOFT</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">GOOGLE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">APPLE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Netflix</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">TESLA</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AMAZON</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SPOTIFY</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Airbnb</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">MICROSOFT</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">GOOGLE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">APPLE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Netflix</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">TESLA</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">AMAZON</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SPOTIFY</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Airbnb</span>
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">META</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Uber</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">NVIDIA</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SALESFORCE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ADOBE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Slack</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ZOOM</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SHOPIFY</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">META</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Uber</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">NVIDIA</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SALESFORCE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ADOBE</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white italic text-lg sm:text-xl">Slack</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">ZOOM</span>
            </div>
            <div className="flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[250px] px-4 sm:px-6 md:px-8 hover:scale-110 transition-all duration-300 cursor-pointer">
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">SHOPIFY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}