"use client";
import React, { useState, useEffect } from 'react';
import { Code, Cpu, Zap, Users, TrendingUp, Shield } from 'lucide-react';

export default function B2WServicesWithStats() {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    developers: 0,
    clients: 0,
    technologies: 0
  });

  const finalStats = {
    projects: 1200,
    developers: 450,
    clients: 890,
    technologies: 100
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedStats({
        projects: Math.floor(finalStats.projects * easeOutCubic),
        developers: Math.floor(finalStats.developers * easeOutCubic),
        clients: Math.floor(finalStats.clients * easeOutCubic),
        technologies: Math.floor(finalStats.technologies * easeOutCubic)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "AI-Powered Development",
      icon: Cpu,
      image: "/images/section-1.jpg",
      iconColor: "purple",
      description: "Revolutionary AI-driven code generation, automated testing frameworks, and intelligent development processes for faster delivery."
    },
    {
      title: "Full-Stack Solutions",
      icon: Code,
      image: "/images/section-2.jpg",
      iconColor: "pink",
      description: "End-to-end web and mobile applications with modern frameworks, cloud integration, and scalable architecture solutions."
    },
    {
      title: "Digital Transformation",
      icon: Zap,
      image: "/images/section-3.jpg",
      iconColor: "purple",
      description: "Comprehensive modernization with AI integration, intelligent automation, and predictive analytics for business optimization."
    },
    {
      title: "Dedicated Development Teams",
      icon: Users,
      image: "/images/about.jpg",
      iconColor: "pink",
      description: "On-demand software experts available within 1 hour with risk-free trials and dedicated project management support."
    },
    {
      title: "AI/ML Integration Services",
      icon: TrendingUp,
      image: "/images/hero.webp",
      iconColor: "purple",
      description: "Custom AI models, machine learning solutions, and intelligent automation to optimize your business processes."
    },
    {
      title: "Enterprise Security & Support",
      icon: Shield,
      image: "/images/section-1.jpg",
      iconColor: "pink",
      description: "24/7 technical support with enterprise-grade security, IP protection, and comprehensive managed services."
    }
  ];

  const stats = [
    {
      number: animatedStats.projects,
      suffix: '+',
      label: 'Completed Projects Worldwide',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: animatedStats.developers,
      suffix: '+',
      label: 'Expert Developers Available',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    },
    {
      number: animatedStats.clients,
      suffix: '+',
      label: 'Satisfied Global Clients',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: animatedStats.technologies,
      suffix: '+',
      label: 'Technologies & Frameworks',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-500/30',
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Background Effects - matching your platform */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Services Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight leading-tight">
              Discover the Power of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Driven Development</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive AI-powered IT outsourcing solutions designed to transform your business 
              with revolutionary development processes and digital transformation.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/20 backdrop-blur-xl shadow-lg border border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-purple-400/50 shadow-lg shadow-purple-500/10"
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute left-4 sm:left-6 top-4 sm:top-6">
                  <div className={`rounded-xl sm:rounded-2xl ${
                    service.iconColor === "pink" 
                      ? "bg-pink-500/20 hover:bg-pink-500/30 border border-pink-400/30" 
                      : "bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30"
                  } p-2 sm:p-3 backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}>
                    <service.icon className={`h-5 w-5 sm:h-7 sm:w-7 ${
                      service.iconColor === "pink" 
                        ? "text-pink-400" 
                        : "text-purple-400"
                    }`} />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-left mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Our Platform <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              We help you unleash the power of AI-driven development to transform your business processes 
              and connect with revolutionary IT outsourcing solutions worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group relative bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border ${stat.borderColor} hover:shadow-2xl hover:scale-105 hover:border-purple-400/50 transition-all duration-500 overflow-hidden shadow-lg shadow-purple-500/10`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 ${stat.bgColor} rounded-full -mr-8 sm:-mr-10 -mt-8 sm:-mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${stat.bgColor} border ${stat.borderColor} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-xl`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="relative z-10">
                  <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black ${stat.color} mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number.toLocaleString()}{stat.suffix}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-300 font-semibold text-xs sm:text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <div className="inline-flex items-center space-x-2 text-gray-300 bg-black/20 backdrop-blur-xl border border-purple-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full border-2 border-black"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-full border-2 border-black"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full border-2 border-black"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                  +
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300">Join thousands of successful businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}