"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function FaqSection() {
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
      question: "What kind of analytics and reporting do you provide?",
      answer:
        "We provide comprehensive analytics including development velocity metrics, code quality assessments, project timeline predictions, and ROI tracking for your IT investments.",
    },
  ]

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Split FAQs into two columns for larger screens
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0)
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1)

  const FAQItem = ({ faq }) => (
    <div className="mb-4 sm:mb-6">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 h-auto">
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full px-4 sm:px-6 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset min-h-[80px]"
          aria-expanded={openFaq === faq.id}
          aria-controls={`faq-answer-${faq.id}`}
          aria-label={`Toggle answer for: ${faq.question}`}
        >
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-6 pr-2 sm:pr-4 flex-1">
            {faq.question}
          </h3>
          <div className="flex-shrink-0 ml-2 sm:ml-4">
            {openFaq === faq.id ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </button>
        
        <div className={`transition-all duration-300 ease-in-out ${
          openFaq === faq.id 
            ? 'max-h-[200px] opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`} id={`faq-answer-${faq.id}`} aria-hidden={openFaq !== faq.id}>
          <div className="px-4 sm:px-6 pb-6">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base min-h-[60px]">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 sm:py-20" style={{backgroundColor: '#ecf1f2'}}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 text-sm font-medium">Questions? Look here</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked<br />questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Get answers to common questions about our AI-powered development, full-stack solutions, 
            and comprehensive IT outsourcing services.
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
      </div>
    </section>
  )
}