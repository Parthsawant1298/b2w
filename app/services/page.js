"use client"
import Link from "next/link"
import { Code, Smartphone, Brain, Cloud, Building2, Shield, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import HeroServices from "@/components/HeroServices"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  // Mapping of service names to actual slugs in servicesData.js
  const serviceNameToSlug = {
    "IT Outsourcing": "it-outsourcing",
    "Custom Software Development": "custom-software-development",
    "AI Strategy & Implementation": "ai-strategy-implementation",
    "Web & Mobile Development": "web-mobile-development",
    "MVP Development": "mvp-development",
    "Staff Augmentation": "staff-augmentation",
    "Legacy Modernization": "legacy-modernization",
    "UI/UX Design": "ui-ux-design",
    "DevOps & Automation": "devops-automation",
    "Generative AI": "generative-ai",
    "RPA Solutions": "rpa-solutions",
    "Predictive Analytics": "predictive-analytics",
    "Healthcare Solutions": "healthcare-solutions",
    "FinTech Solutions": "fintech-solutions",
    "Retail Solutions": "retail-solutions",
    "Manufacturing Solutions": "manufacturing-solutions",
  }

  const serviceCategories = [
    {
      name: "Core Services",
      icon: Code,
      color: "blue",
      description: "Comprehensive IT outsourcing and custom software development solutions",
      services: [
        "IT Outsourcing",
        "Custom Software Development",
        "AI Strategy & Implementation",
        "Web & Mobile Development",
        "MVP Development",
        "Staff Augmentation",
      ],
    },
    {
      name: "AI & Automation",
      icon: Brain,
      color: "cyan",
      description: "Cutting-edge AI solutions and intelligent automation technologies",
      services: [
        "Generative AI",
        "RPA Solutions",
        "Predictive Analytics",
        "DevOps & Automation",
        "Legacy Modernization",
        "UI/UX Design",
      ],
    },
    {
      name: "Industry Solutions",
      icon: Building2,
      color: "blue",
      description: "Specialized software solutions for specific industry verticals",
      services: [
        "Healthcare Solutions",
        "FinTech Solutions",
        "Retail Solutions",
        "Manufacturing Solutions",
      ],
    },
    {
      name: "Digital Transformation",
      icon: Cloud,
      color: "cyan",
      description: "End-to-end digital transformation and modernization services",
      services: [
        "Legacy System Migration",
        "Cloud Migration",
        "Process Automation",
        "Data Analytics",
        "API Integration",
        "Microservices Architecture",
      ],
    },
  ]

  return (
    <main>
      <Header />
      <HeroServices />
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/2 rounded-full blur-3xl"></div>
        </div>

      {/* Services Grid */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-400"
              >
                <div className="p-6 sm:p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
                      category.color === "cyan"
                        ? "bg-cyan-500/20 border border-cyan-400/30"
                        : "bg-blue-500/20 border border-blue-400/30"
                    } mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon
                      className={`h-8 w-8 ${category.color === "cyan" ? "text-cyan-600" : "text-blue-600"}`}
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>

                  <div className="space-y-2 mb-6">
                    {category.services.slice(0, 4).map((service, serviceIndex) => {
                      // Get the correct slug from the mapping or create one from service name
                      const serviceSlug = serviceNameToSlug[service] || service.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                      return (
                        <Link key={serviceIndex} href={`/services/${serviceSlug}`}>
                          <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors p-2 rounded hover:bg-blue-50">
                            <ChevronRight size={16} className="mr-2 text-blue-500" />
                            {service}
                          </div>
                        </Link>
                      )
                    })}
                    {category.services.length > 4 && (
                      <div className="text-sm text-gray-500 font-medium">
                        +{category.services.length - 4} more services
                      </div>
                    )}
                  </div>

                  <Link href={`/services/category/${
                    category.name === "Core Services" ? "core-services" :
                    category.name === "AI & Automation" ? "ai-automation" :
                    category.name === "Industry Solutions" ? "industry-solutions" :
                    category.name === "Digital Transformation" ? "digital-transformation" :
                    "core-services" // fallback
                  }`}>
                    <button
                      className={`w-full ${
                        category.color === "cyan"
                          ? "bg-blue-800 hover:bg-blue-900"
                          : "bg-blue-800 hover:bg-blue-900"
                      } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg border border-blue-400/30`}
                    >
                      Explore {category.name}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to{" "}
            <span className="text-blue-800">Transform</span>{" "}
            Your Business?
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join 1200+ companies worldwide who have transformed their businesses with B2W Infotech's AI-powered development solutions. With 15+ years of experience and ISO certifications, we deliver exceptional results across all industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 text-lg">
                Start Your Project Today
              </button>
            </Link>
            <Link href="/faq">
              <button className="border border-gray-400 hover:border-gray-500 hover:bg-gray-100 text-gray-700 hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 bg-white text-lg">
                Have Questions?
              </button>
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}
