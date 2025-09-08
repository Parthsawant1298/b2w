"use client"
import Link from "next/link"
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-500/20 relative overflow-hidden">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="B2W Infotech Logo" 
                  className="h-8 w-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <Brain className="h-8 w-8 text-blue-600 hidden" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  B2W Infotech
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Revolutionary AI-powered IT outsourcing solutions. We help businesses find order in the midst of chaos through full-stack development, digital transformation, and comprehensive managed services.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">1200+</span>
                <span>Projects Completed Worldwide</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Web Development", href: "/services/category/web-development" },
                  { name: "Mobile Development", href: "/services/category/mobile-development" },
                  { name: "AI & Machine Learning", href: "/services/category/ai-machine-learning" },
                  { name: "Cloud & DevOps", href: "/services/category/cloud-devops" },
                  { name: "React Development", href: "/services/react-development" },
                  { name: "Node.js Development", href: "/services/nodejs-development" },
                  { name: "React Native Apps", href: "/services/react-native" },
                  { name: "All Services", href: "/services" }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Login", href: "/login" },
                  { name: "Register", href: "/register" },
                  { name: "User Profile", href: "/profile" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-blue-500/30 pb-2">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p className="font-medium text-white">Global Offices</p>
                    <p>Mumbai, India</p>
                    <p>Pune, India</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-600 flex-shrink-0" />
                  <a 
                    href="mailto:contact@b2winfotech.com" 
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    contact@b2winfotech.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-600 flex-shrink-0" />
                  <a 
                    href="tel:+1-555-B2W-TECH" 
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    +1 (555) B2W-TECH
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-white">Quick Actions</p>
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Mail size={16} />
                    <span>Get a Quote</span>
                  </Link>
                  <Link 
                    href="/services"
                    className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Globe size={16} />
                    <span>Browse Services</span>
                  </Link>
                  <Link 
                    href="/login"
                    className="inline-flex items-center space-x-2 text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Linkedin size={16} />
                    <span>Client Portal</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Ready to Start Your Project?
                </h3>
                <p className="text-sm text-gray-300">
                  Get in touch with our experts for a free consultation and project estimate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 whitespace-nowrap">
                    Get Free Consultation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap">
                    View Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-400">
                <p>© 2024 B2W Infotech. All rights reserved.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <p>🔒 ISO 27001 Certified</p>
                <p>⚡ 99.9% Uptime SLA</p>
                <p>🌍 Global Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}