"use client"
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: "Is there a free trial available for AI-powered development?",
      answer:
        "Yes, we offer a 40-hour risk-free trial for our AI-powered development services. If you want, we'll provide you with a personalized onboarding session to get you started with our AI-driven code generation and automated testing frameworks.",
    },
    {
      id: 2,
      question: "Can I change my development plan later?",
      answer:
        "Of course. Our pricing scales with your development needs. Chat with our friendly team to find a solution that works for your company size and project requirements.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "We understand that business needs change. You can cancel your plan at any time and we'll refund you the difference for any unused portion of your development services subscription.",
    },
    {
      id: 4,
      question: "Can I integrate with existing development workflows?",
      answer:
        "Yes, our AI-powered development platform integrates seamlessly with popular tools including GitHub, Jira, and Jenkins through our robust API connections and DevOps automation.",
    },
    {
      id: 5,
      question: "What does 'AI-powered code generation' mean?",
      answer:
        "Our AI analyzes project requirements, existing codebases, and best practices to generate optimized code automatically. The system learns from successful deployments to continuously improve code quality and delivery speed.",
    },
    {
      id: 6,
      question: "How does the 1-hour developer hiring work?",
      answer:
        "Our AI-powered talent matching system analyzes your project requirements and instantly matches you with pre-vetted developers from our pool of 450+ experts across 100+ technologies.",
    },
    {
      id: 7,
      question: "How does the digital transformation process work?",
      answer:
        "We conduct a comprehensive assessment of your legacy systems, create a modernization roadmap, and implement AI-driven solutions for automation, cloud migration, and process optimization.",
    },
    {
      id: 8,
      question: "Can I customize the AI development solutions?",
      answer:
        "Absolutely! You can customize AI models, development frameworks, and automation workflows based on your industry requirements, compliance needs, and business objectives.",
    },
    {
      id: 9,
      question: "What kind of analytics and reporting do you provide?",
      answer:
        "We provide comprehensive analytics including development velocity metrics, code quality assessments, project timeline predictions, and ROI tracking for your IT investments.",
    },
    {
      id: 10,
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes! We provide complete onboarding, AI tool training, development best practices, and 24/7 technical support through our dedicated project management team.",
    },
    {
      id: 11,
      question: "Can I use this for multiple development projects?",
      answer:
        "Of course! You can run unlimited development projects, manage multiple teams, and handle various technology stacks simultaneously within our comprehensive platform.",
    },
    {
      id: 12,
      question: "How secure is my intellectual property?",
      answer:
        "We maintain enterprise-grade security with signed NDAs, IP protection guarantees, and ISO 27001 compliance. All your code and business data is protected with industry-leading security measures.",
    },
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  const FAQItem = ({ faq }) => (
    <div className="mb-4 sm:mb-6">
      <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20">
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
        >
          <div className="flex items-start gap-3 sm:gap-4 flex-1">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mt-1">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-6 pr-2 sm:pr-4">{faq.question}</h3>
          </div>
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            {openFaq === faq.id ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            )}
          </div>
        </button>
        
        <div className={`transition-all duration-300 ease-in-out ${
          openFaq === faq.id 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 sm:px-6 pb-4 sm:pb-5 pl-12 sm:pl-16 md:pl-20">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[350px] lg:h-[625px] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/hero.webp" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white text-center">
              FAQ &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
                SUPPORT
              </span>
            </h1>
           
          </div>
        </div>
      </section>

      <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Frequently Asked
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500"> Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Get answers to common questions about our AI-powered development, full-stack solutions, digital transformation, and comprehensive IT outsourcing services.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              {leftColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightColumnFAQs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-black/20 backdrop-blur-xl rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our AI development experts are here to help you get the most out of our revolutionary IT outsourcing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-purple-400/30 shadow-lg shadow-purple-500/25 text-sm sm:text-base">
                  Start AI Development
                </button>
                <button className="bg-black/20 backdrop-blur-xl text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}