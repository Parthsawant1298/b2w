"use client"
import React from "react"
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
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[470px] md:h-[350px] lg:h-[625px] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/hero.webp" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center">
              ABOUT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
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
                src="/images/about.jpg"
                alt="B2W Infotech AI-powered development platform"
                className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto rounded-lg shadow-lg border border-purple-500/30 shadow-lg shadow-purple-500/10"
              />
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
                  We provide you the best <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-powered development</span> experience
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  Revolutionary IT outsourcing platform combining AI-driven code generation, automated testing, 
                  digital transformation, and comprehensive full-stack development - everything businesses need to find order in the midst of chaos.
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">80%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Faster
                    <br />
                    Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">40%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Cost
                    <br />
                    Reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">1200+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">
                    Completed
                    <br />
                    Projects
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium tracking-wider border border-purple-400/30 shadow-lg shadow-purple-500/25">
                  START AI DEVELOPMENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              What Sets Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Platform</span> Apart
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover the unique features that make our AI-powered development platform the complete solution for modern IT outsourcing
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            {/* Central Circle */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl flex flex-col items-center justify-center mx-auto mb-6 sm:mb-8">
              <div className="text-sm sm:text-base font-bold text-white text-center">4 UNIQUE</div>
              <div className="text-xs sm:text-sm font-semibold text-purple-400 text-center">FEATURES</div>
              <div className="text-sm sm:text-base font-bold text-white text-center">PLATFORM</div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                    <div className="text-base sm:text-lg">🤖</div>
                  </div>
                </div>
                <h3 className="text-purple-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">AI-Powered Code Generation</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Revolutionary AI-driven code generation and automated testing frameworks. Experience intelligent development with predictive analytics, automated quality assurance, and real-time optimization for faster, smarter delivery cycles.
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                    <div className="text-base sm:text-lg">💻</div>
                  </div>
                </div>
                <h3 className="text-pink-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">Full-Stack Development</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  End-to-end web and mobile applications with modern frameworks, cloud integration, and scalable architecture. Our expert teams deliver comprehensive solutions across 100+ technologies with dedicated project management.
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                    <div className="text-base sm:text-lg">⚡</div>
                  </div>
                </div>
                <h3 className="text-purple-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">Digital Transformation</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Comprehensive modernization with AI integration, intelligent automation, and predictive analytics. Transform legacy systems with cloud migration, process optimization, and cutting-edge technology implementation.
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl mx-auto mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                    <div className="text-base sm:text-lg">🛡️</div>
                  </div>
                </div>
                <h3 className="text-pink-400 font-bold text-base sm:text-lg mb-2 sm:mb-3">Enterprise Security & Support</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  24/7 technical support with enterprise-grade security, IP protection, and comprehensive managed services. Dedicated teams ensure 99.9% uptime with ISO 27001 compliance and signed NDAs for complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Tablet and Desktop Layout */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-4xl mx-auto px-6 md:px-8">
                
                {/* Central Hub */}
                <div className="flex items-center justify-center mb-12 md:mb-16">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl flex flex-col items-center justify-center relative z-20">
                    <div className="text-2xl md:text-3xl font-bold text-white text-center">4 UNIQUE</div>
                    <div className="text-lg md:text-xl font-semibold text-purple-400 text-center mt-1">FEATURES</div>
                    <div className="text-2xl md:text-3xl font-bold text-white text-center">PLATFORM</div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                  
                  {/* Feature 1 - AI Code Generation */}
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl relative">
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                        <div className="text-2xl md:text-3xl">🤖</div>
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-bold text-lg md:text-xl mb-2 md:mb-3">AI-Powered Code Generation</h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                        Revolutionary AI-driven code generation and automated testing frameworks. Experience intelligent development with predictive analytics and real-time optimization.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 - Full-Stack Development */}
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl relative">
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                        <div className="text-2xl md:text-3xl">💻</div>
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-pink-400/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <div>
                      <h3 className="text-pink-400 font-bold text-lg md:text-xl mb-2 md:mb-3">Full-Stack Development</h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                        End-to-end web and mobile applications with modern frameworks, cloud integration, and scalable architecture across 100+ technologies.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 - Digital Transformation */}
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl relative">
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                        <div className="text-2xl md:text-3xl">⚡</div>
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div>
                      <h3 className="text-purple-400 font-bold text-lg md:text-xl mb-2 md:mb-3">Digital Transformation</h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                        Comprehensive modernization with AI integration, intelligent automation, and predictive analytics for complete business transformation.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 - Enterprise Security */}
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl relative">
                      <div className="w-16 h-16 md:w-18 md:h-18 bg-black/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-purple-400/30">
                        <div className="text-2xl md:text-3xl">🛡️</div>
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-pink-400/30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                    <div>
                      <h3 className="text-pink-400 font-bold text-lg md:text-xl mb-2 md:mb-3">Enterprise Security & Support</h3>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xs">
                        24/7 technical support with enterprise-grade security, IP protection, and comprehensive managed services with 99.9% uptime SLA.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Connecting Lines - Subtle and Modern */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                  
                  {/* Top connections */}
                  <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent -top-8 -left-16 transform -rotate-45"></div>
                  <div className="absolute w-32 h-0.5 bg-gradient-to-l from-pink-400/30 to-transparent -top-8 -right-16 transform rotate-45"></div>
                  
                  {/* Bottom connections */}
                  <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent top-8 -left-16 transform rotate-45"></div>
                  <div className="absolute w-32 h-0.5 bg-gradient-to-l from-pink-400/30 to-transparent top-8 -right-16 transform -rotate-45"></div>
                  
                </div>

              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-8 sm:mt-12 md:mt-20 px-4">
            <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
              Experience the future of IT outsourcing with features no other platform offers
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg hover:scale-105 transition-all duration-200 font-medium text-xs sm:text-sm md:text-base tracking-wider border border-purple-400/30 shadow-lg shadow-purple-500/25">
              EXPLORE AI DEVELOPMENT
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Process Content */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                We provide the best <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-powered development</span> process
              </h2>

              {/* Process Steps */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex-grow flex flex-col justify-center">
                {/* Step 1 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3">
                      Project Analysis & AI Planning
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Our AI analyzes your requirements, existing systems, and business objectives. We create detailed project roadmaps with intelligent resource allocation and predictive timeline estimates for optimal development planning.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3">
                      AI-Driven Development & Testing
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Our expert teams leverage AI-powered code generation, automated testing frameworks, and continuous integration. Real-time quality assurance and intelligent debugging ensure faster delivery with superior code quality.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3">
                      Deployment & Ongoing Support
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Seamless deployment with comprehensive monitoring, 24/7 technical support, and continuous optimization. Our AI-driven maintenance ensures peak performance, security updates, and scalable growth for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Image */}
            <div className="order-first lg:order-last">
              <img
                src="/images/section-1.jpg"
                alt="AI-powered development process visualization"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-full object-cover rounded-lg shadow-lg border border-purple-500/30 shadow-lg shadow-purple-500/10"
              />
            </div>
          
          </div>
        </div>
      </section>
        <Testimonials />
    </div>
  )
}