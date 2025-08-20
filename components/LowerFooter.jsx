"use client";
import Head from 'next/head';

export default function CTASection() {
  return (
    <div className="relative bg-black overflow-hidden">
      <Head>
        <title>B2W Infotech | AI-Powered Software Development & IT Outsourcing</title>
        <meta name="description" content="Revolutionary AI-powered software development and IT outsourcing solutions. Transform your business with custom AI development and digital transformation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: "cover",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/80" />
      
      <main className="relative z-10 flex items-center justify-center px-4 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
         
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Revolutionize Your <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Development Process?
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join 1200+ companies worldwide using our AI-powered development solutions for faster delivery, 
            smarter processes, and revolutionary digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg shadow-purple-500/25 border border-purple-400/30">
              Start AI Development
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            
            <button className="group inline-flex items-center px-8 py-4 bg-black/20 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/20 text-white text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              Get Free Consultation
              <svg
                className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
      

       
        </div>
      </main>
    </div>
  )
}