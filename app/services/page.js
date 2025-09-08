"use client"
import Link from "next/link"
import { Code, Smartphone, Brain, Cloud, Building2, Shield, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import HeroServices from "@/components/HeroServices"
import Footer from "@/components/Footer"

export default function ServicesPage() {
  // Mapping of service names to actual slugs in servicesData.js
  const serviceNameToSlug = {
    "React Development": "react-development",
    "Vue.js Development": "vue-development", 
    "Angular Development": "angular-development",
    "Next.js Development": "react-development", // Mapped to React as Next.js is React-based
    "Node.js Development": "nodejs-development",
    "Python Development": "python-development",
    "PHP Development": "python-development", // Mapped to Python as similar backend
    "Java Development": "java-development",
    ".NET Development": "dotnet-development",
    "iOS Development": "ios-development",
    "Android Development": "android-development",
    "React Native": "react-native",
    "Flutter Development": "flutter-development",
    "Custom AI Solutions": "custom-ai-solutions",
    "Chatbot Development": "chatbot-development",
    "Machine Learning": "machine-learning",
    "AWS Development": "aws-development",
    "DevOps Automation": "devops-automation",
    "Digital Transformation": "digital-transformation",
  }

  const serviceCategories = [
    {
      name: "Web Development",
      icon: Code,
      color: "blue",
      description: "Modern web applications with cutting-edge technologies",
      services: [
        "React Development",
        "Vue.js Development",
        "Angular Development",
        "Next.js Development",
        "Node.js Development",
        "Python Development",
        "PHP Development",
        "Java Development",
        "MERN Stack",
        "MEAN Stack",
        "Django + React",
        "Laravel + Vue",
      ],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "cyan",
      description: "Native and cross-platform mobile applications",
      services: [
        "iOS Development",
        "Android Development",
        "Swift Development",
        "Kotlin Development",
        "React Native",
        "Flutter Development",
        "Ionic Development",
        "Xamarin Development",
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "blue",
      description: "Intelligent solutions powered by artificial intelligence",
      services: [
        "Custom AI Solutions",
        "Chatbot Development",
        "AI Model Training",
        "Natural Language Processing",
        "Predictive Analytics",
        "Computer Vision",
        "Deep Learning",
        "ML Operations",
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "cyan",
      description: "Scalable cloud infrastructure and automated deployment",
      services: [
        "AWS Development",
        "Azure Development",
        "Google Cloud",
        "Cloud Migration",
        "CI/CD Pipeline",
        "Docker & Kubernetes",
        "Infrastructure as Code",
        "Monitoring & Analytics",
      ],
    },
    {
      name: "Enterprise Solutions",
      icon: Building2,
      color: "blue",
      description: "Comprehensive enterprise software and digital transformation",
      services: [
        "ERP Development",
        "CRM Solutions",
        "Digital Transformation",
        "Legacy Modernization",
        "Business Intelligence",
        "Data Warehousing",
        "Big Data Solutions",
        "Analytics Platforms",
      ],
    },
    {
      name: "Security & Support",
      icon: Shield,
      color: "cyan",
      description: "Robust security solutions and 24/7 technical support",
      services: [
        "Cybersecurity Solutions",
        "Penetration Testing",
        "Security Auditing",
        "Compliance Solutions",
        "24/7 Technical Support",
        "Maintenance Services",
        "Performance Optimization",
        "Managed Services",
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
                    category.name === "Web Development" ? "web-development" :
                    category.name === "Mobile Development" ? "mobile-development" :
                    category.name === "AI & Machine Learning" ? "ai-machine-learning" :
                    category.name === "Cloud & DevOps" ? "cloud-devops" :
                    category.name === "Enterprise Solutions" ? "enterprise-solutions" :
                    category.name === "Security & Support" ? "security-support" :
                    "web-development" // fallback
                  }`}>
                    <button
                      className={`w-full ${
                        category.color === "cyan"
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Transform</span>{" "}
            Your Business?
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join 1200+ companies worldwide who trust us with their digital transformation. Let's discuss how our
            AI-powered solutions can accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30 text-lg">
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
