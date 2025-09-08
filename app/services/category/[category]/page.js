"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import HeroSlug from "@/components/HeroSlug"
import Footer from "@/components/Footer"
import { getServicesByCategory } from "../../../../lib/servicesData"

export default function CategoryPage() {
  const params = useParams()
  const category = params.category

  // Map URL category to display name
  const categoryDisplayNames = {
    "web-development": "Web Development",
    "mobile-development": "Mobile Development", 
    "ai-machine-learning": "AI & Machine Learning",
    "cloud-devops": "Cloud & DevOps",
    "enterprise-solutions": "Enterprise Solutions",
    "security-support": "Security & Support"
  }

  // Map URL category to service category names used in servicesData
  const categoryMappings = {
    "web-development": "Web Development",
    "mobile-development": "Mobile Development",
    "ai-machine-learning": "AI & Machine Learning", 
    "cloud-devops": "Cloud & DevOps",
    "enterprise-solutions": "Digital Transformation",
    "security-support": "Security & Support"
  }

  const displayName = categoryDisplayNames[category] || "Services"
  const serviceCategory = categoryMappings[category] || "Web Development"
  
  // Get services for this category
  const categoryServices = getServicesByCategory(serviceCategory)

  // Create hero service object for the category
  const heroService = {
    title: `${displayName} Services`,
    category: displayName,
    longDescription: `Explore our comprehensive ${displayName.toLowerCase()} solutions designed to accelerate your business growth with cutting-edge technology and expert implementation.`
  }

  if (categoryServices.length === 0) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Category Not Found</h1>
            <p className="text-gray-700 mb-8">The service category you're looking for doesn't exist.</p>
            <Link href="/services">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                View All Services
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <HeroSlug service={heroService} />
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>

        {/* Breadcrumb & Back Navigation */}
        <section className="relative z-10 pt-8 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Services
            </Link>

            <div className="flex items-center text-sm text-gray-600 mb-8">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-black">{displayName}</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Our <span className="text-blue-600">{displayName}</span> Services
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choose from our comprehensive range of {displayName.toLowerCase()} solutions tailored to meet your specific business requirements.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service, index) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gray-400 cursor-pointer">
                    <div className="p-6 sm:p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{service.icon}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <ChevronRight size={16} className="mr-2 text-blue-500 flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500 font-medium">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Starting from <span className="font-semibold text-blue-600">{service.pricing?.starter?.price || "Custom Quote"}</span>
                        </div>
                        <div className="flex items-center text-blue-600 font-medium text-sm">
                          Learn More <ChevronRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {categoryServices.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No services found in this category.</p>
                <Link href="/services">
                  <button className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
                    View All Services
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" style={{ backgroundColor: "#EFF9F0" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Get Started with <span className="text-blue-600">{displayName}</span>?
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Let's discuss your {displayName.toLowerCase()} requirements and create a custom solution that drives your business forward with expert implementation and ongoing support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 text-lg">
                  Start Your Project Today
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-gray-400 hover:border-gray-500 hover:bg-gray-100 text-gray-700 hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 bg-white text-lg">
                  Schedule Free Consultation
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
