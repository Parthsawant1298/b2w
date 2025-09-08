import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-4xl mb-6 lg:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight text-center lg:text-left">
              B2W Infotech: <span className="text-black">Revolutionary AI-Powered</span> IT Outsourcing Solutions
            </h2>
          </div>
          <div className="text-center lg:text-right lg:mt-2">
            <div className="bg-white backdrop-blur-xl border border-gray-300 rounded-2xl p-4 shadow-lg shadow-gray-400/25">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">1200+</div>
              <div className="text-xs sm:text-sm text-gray-700">Completed Projects Worldwide</div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl shadow-xl border border-gray-300 overflow-hidden shadow-lg shadow-gray-400/25">
                            <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="B2W Infotech Team"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {/* Innovation Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border border-blue-400/30">
                🚀 AI-Powered Innovation Leader
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight text-center lg:text-left">
              Transforming IT outsourcing with <span className="text-black">AI-driven development</span> and transparent processes.
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center lg:text-left">
              B2W Infotech revolutionizes IT outsourcing by solving critical challenges like lack of transparency, overspending,lengthy development cycles,and unreliable deliverables. We leverage AI-powered code generation, automated testing frameworks, and predictive analytics to deliver scalable solutions faster and more efficiently. Our mission is to help businesses "find order in the midst of chaos" through full-stack development, digital transformation, and comprehensive managed services for IT outsourcing.
              
            </p>

            

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto shadow-lg shadow-blue-500/25 border border-blue-400/30">
                Start AI Development
              </button>
              <button className="border border-gray-400 hover:border-gray-500 hover:bg-gray-100 text-gray-700 hover:text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 bg-white text-sm sm:text-base w-full sm:w-auto">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}