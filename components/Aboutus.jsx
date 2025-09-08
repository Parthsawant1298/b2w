"use client"
import { useState, useEffect } from "react"
import Testimonials from "@/components/Testimonial"

// Button component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AboutUsPage() {
  const [backgroundType, setBackgroundType] = useState('video') // Start with video first
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Background images for carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ]

  // Auto-change background images every 5 seconds when using image fallback
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

  // Handle video error - fallback to images
  const handleVideoError = () => {
    setBackgroundType('image')
  }
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[470px] md:h-[350px] lg:h-[625px] overflow-hidden">
        {/* Background Video or Image Carousel */}
        {backgroundType === 'video' ? (
          <div className="absolute inset-0 z-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onError={handleVideoError}
            >
              <source src="/images/background.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="absolute inset-0 z-0">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-center bg-no-repeat transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover"
                }}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center">
              ABOUT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                US
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-6 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="B2W Infotech AI-powered development platform"
                className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto rounded-lg shadow-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
                  We provide you the best <span className="text-gray-900">AI-powered development</span> experience
                </h1>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  Revolutionary IT outsourcing platform combining AI-driven code generation, automated testing, 
                  digital transformation, and comprehensive full-stack development - everything businesses need to find order in the midst of chaos.
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">80%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Faster
                    <br />
                    Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">40%</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Cost
                    <br />
                    Reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">1200+</div>
                  <div className="text-gray-700 text-xs sm:text-sm">
                    Completed
                    <br />
                    Projects
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wider border border-blue-400/30 shadow-lg shadow-blue-500/25">
                  START AI DEVELOPMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Process Content */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                We provide the best <span className="text-gray-900">AI-powered development</span> process
              </h2>

              {/* Process Steps */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Step 1 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Project Analysis & AI Planning
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Our AI analyzes your requirements, existing systems, and business objectives. We create detailed project roadmaps with intelligent resource allocation and predictive timeline estimates for optimal development planning.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      AI-Driven Development & Testing
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Our expert teams leverage AI-powered code generation, automated testing frameworks, and continuous integration. Real-time quality assurance and intelligent debugging ensure faster delivery with superior code quality.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">
                      Deployment & Ongoing Support
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      Seamless deployment with comprehensive monitoring, 24/7 technical support, and continuous optimization. Our AI-driven maintenance ensures peak performance, security updates, and scalable growth for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI-powered development process visualization"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-lg shadow-lg border border-blue-500/30 shadow-lg shadow-blue-500/10"
              />
            </div>
          
          </div>
        </div>
      </section>
        <Testimonials />
    </div>
  )
}