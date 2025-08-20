import Image from "next/image"

export default function About() {
  return (
    <div className="bg-black min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      {/* Background Effects - matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-4xl mb-6 lg:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-center lg:text-left">
              B2W Infotech: <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Revolutionary AI-Powered</span> IT Outsourcing Solutions
            </h2>
          </div>
          <div className="text-center lg:text-right lg:mt-2">
            <div className="bg-black/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4 shadow-lg shadow-purple-500/25">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">1200+</div>
              <div className="text-xs sm:text-sm text-gray-300">Completed Projects Worldwide</div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl border border-purple-500/30 overflow-hidden shadow-lg shadow-purple-500/10">
              <Image
                src="/images/about.jpg"
                alt="B2W Infotech AI-powered development platform showing intelligent code generation and automated testing"
                width={600}
                height={100}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {/* Innovation Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-xl">
                🚀 AI-Powered Innovation Leader
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight text-center lg:text-left">
              Transforming IT outsourcing with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-driven development</span> and transparent processes.
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center lg:text-left">
              B2W Infotech revolutionizes IT outsourcing by solving critical challenges like lack of transparency, overspending,lengthy development cycles,and unreliable deliverables. We leverage AI-powered code generation, automated testing frameworks, and predictive analytics to deliver scalable solutions faster and more efficiently. Our mission is to help businesses "find order in the midst of chaos" through full-stack development, digital transformation, and comprehensive managed services for IT outsourcing.
              
            </p>

            

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto shadow-lg shadow-purple-500/25 border border-purple-400/30">
                Start AI Development
              </button>
              <button className="border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 text-gray-300 hover:text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 bg-black/20 backdrop-blur-xl text-sm sm:text-base w-full sm:w-auto">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}