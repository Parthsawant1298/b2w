"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CircularShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [radius, setRadius] = useState(300);

  const showcaseItems = [
    {
      title: "AI-Powered Development",
      description: "Revolutionary AI-driven code generation and automated testing frameworks for faster, smarter development cycles",
      image: "/images/section-1.jpg"
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web and mobile applications with modern frameworks, cloud integration, and scalable architecture",
      image: "/images/section-2.jpg"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive modernization with AI integration, intelligent automation, and predictive analytics for your business",
      image: "/images/section-3.jpg"
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated technical teams with white-glove service and round-the-clock assistance for seamless project delivery",
      image: "/images/section-1.jpg"
    }
  ];

  const updateRadius = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) { // mobile
      setRadius(150);
    } else if (width < 1024) { // tablet
      setRadius(200);
    } else { // desktop
      setRadius(300);
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const autoPlay = setInterval(goToNext, 5000);
    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="bg-black py-16 md:py-20 overflow-hidden relative">
      {/* Background Effects - matching your platform style */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">B2W Infotech?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-20">
            Revolutionary AI-powered IT outsourcing solutions for digital transformation and full-stack development
          </p>
        </div>

        <div className="relative h-[28rem] md:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            {showcaseItems.map((item, idx) => {
              const position = (idx - currentIndex + showcaseItems.length) % showcaseItems.length;
              const angle = (position * (360 / showcaseItems.length)) * (Math.PI / 180);
              
              let translateX = Math.sin(angle) * radius;
              let translateZ = Math.cos(angle) * radius;
              let scale = position === 0 ? 1 : 0.7;
              let opacity = position === 0 ? 1 : 0.3;

              return (
                <div
                  key={idx}
                  className="absolute w-full max-w-[280px] md:max-w-lg transition-all duration-700 ease-out"
                  style={{
                    transform: `translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
                    opacity,
                    zIndex: position === 0 ? 10 : 1
                  }}
                >
                  <div 
                    className="bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-purple-500/30"
                    style={{
                      boxShadow: position === 0 ? '0 0 15px 3px rgba(147, 51, 234, 0.5)' : 'none'
                    }}
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full 
              bg-black/20 backdrop-blur-xl hover:bg-purple-500/20 transition-colors border border-purple-500/30 hover:border-purple-400/50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full 
              bg-black/20 backdrop-blur-xl hover:bg-purple-500/20 transition-colors border border-purple-500/30 hover:border-purple-400/50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {showcaseItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-8 md:w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full' 
                    : 'w-1 h-1 bg-gray-600 hover:bg-purple-400 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularShowcase;