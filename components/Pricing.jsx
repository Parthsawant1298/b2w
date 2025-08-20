import { Check } from "lucide-react"

export default function PricingPlans() {
  const plans = [
    {
      name: "Startup",
      price: "$2,999",
      period: "/month",
      billing: "billed yearly",
      billingNote: "or $3,499 billed monthly",
      buttonText: "Start AI Development",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: false,
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      billing: "billed yearly", 
      billingNote: "or $9,499 billed monthly",
      buttonText: "Start AI Development",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$15,999",
      period: "/month",
      billing: "billed yearly",
      billingNote: "or $18,999 billed monthly",
      buttonText: "Start AI Development", 
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: false,
    },
    {
      name: "Custom",
      price: "Contact us",
      period: "",
      billing: "for tailored solutions",
      billingNote: "",
      buttonText: "Get Consultation",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: false,
    },
  ]

  const topFeatures = [
    { name: "Dedicated Development Team", startup: "3-5 developers", professional: "8-12 developers", enterprise: "15-25 developers", custom: "Unlimited team" },
    {
      name: "AI-Powered Code Generation",
      startup: "50 hours/month",
      professional: "150 hours/month", 
      enterprise: "300 hours/month",
      custom: "Unlimited",
    },
    {
      name: "Custom Software Development",
      startup: "1 project",
      professional: "3 projects",
      enterprise: "Unlimited projects",
      custom: "Enterprise solutions",
    },
    {
      name: "Digital Transformation",
      startup: "Basic consulting",
      professional: "Advanced strategy",
      enterprise: "Full transformation",
      custom: "End-to-end solutions",
    },
    {
      name: "AI/ML Integration",
      startup: "Basic AI tools",
      professional: "Advanced AI/ML",
      enterprise: "Custom AI models",
      custom: "Proprietary AI systems",
    },
    { name: "Development Speed", startup: "40% faster", professional: "60% faster", enterprise: "80% faster", custom: "Maximum efficiency" },
    {
      name: "Support & Maintenance",
      startup: "Business hours",
      professional: "24/7 support",
      enterprise: "Dedicated support",
      custom: "White-glove service",
    },
  ]

  const productCapabilities = [
    { name: "AI-Driven Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Full-Stack Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Mobile App Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Web Application Development", startup: true, professional: true, enterprise: true, custom: true },
    { name: "Advanced AI/ML Solutions", startup: false, professional: true, enterprise: true, custom: true },
    { name: "Digital Transformation", startup: false, professional: true, enterprise: true, custom: true },
    { name: "API Development & Integration", startup: false, professional: true, enterprise: true, custom: true },
    { name: "Custom AI Model Development", startup: false, professional: false, enterprise: true, custom: true },
    { name: "Enterprise Architecture", startup: false, professional: false, enterprise: true, custom: true },
    { name: "White-label Solutions", startup: false, professional: false, enterprise: false, custom: true },
    { name: "Dedicated Project Manager", startup: false, professional: false, enterprise: false, custom: true },
  ]

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      {/* Background Effects - matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Driven Development</span> Pricing Plans
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From startups to enterprises, choose the perfect AI-powered development solution. Accelerate your digital transformation with our comprehensive full-stack development and AI integration services.
          </p>
        </div>

        {/* Most Popular Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-purple-500/25 border border-purple-400/30">
            MOST POPULAR
          </div>
        </div>

        {/* Mobile Plans Layout */}
        <div className="block lg:hidden space-y-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl p-6 border ${plan.popular ? "border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10" : "border-purple-500/30"} shadow-lg shadow-purple-500/10`}
            >
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-4 ${plan.popular ? "text-purple-300" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 text-lg">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{plan.billing}</p>
                {plan.billingNote && <p className="text-xs text-gray-400 mb-6">{plan.billingNote}</p>}
                <button
                  className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Pricing Section */}
        <div className="hidden lg:block bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden mb-8 border border-purple-500/30 shadow-lg shadow-purple-500/10">
          <div className="grid grid-cols-5 min-h-[400px]">
            {/* Left Column - Choose your plan */}
            <div className="bg-black/40 p-8 flex items-center justify-center border-r border-purple-500/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white leading-tight">
                  Choose
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">your plan</span>
                </h2>
              </div>
            </div>

            {/* Pricing Cards */}
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 text-center border-r border-purple-500/30 last:border-r-0 flex flex-col justify-between ${plan.popular ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10" : "bg-black/10"}`}
              >
                <div>
                  <h3 className={`text-xl font-bold mb-6 ${plan.popular ? "text-purple-300" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{plan.billing}</p>
                  {plan.billingNote && <p className="text-xs text-gray-400 mb-8">{plan.billingNote}</p>}
                </div>
                <button
                  className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Table */}
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
          {/* Top Features Section */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 sm:px-8 py-4 border-b border-purple-500/30">
            <h3 className="text-lg font-bold text-white">Development Features</h3>
          </div>

          {/* Mobile Features Layout */}
          <div className="block lg:hidden">
            {topFeatures.map((feature, index) => (
              <div key={index} className="border-b border-purple-500/20 last:border-b-0 p-4">
                <div className="flex items-center mb-3">
                  <span className="font-medium text-white">{feature.name}</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center">
                    <span className="text-xs text-purple-300 font-bold">?</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-300 mb-1">Startup</div>
                    <div className="text-gray-300">{feature.startup}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300 mb-1">Professional</div>
                    <div className="text-gray-300">{feature.professional}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300 mb-1">Enterprise</div>
                    <div className="text-gray-300">{feature.enterprise}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300 mb-1">Custom</div>
                    <div className="text-gray-300">{feature.custom}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Features Layout */}
          <div className="hidden lg:block">
            {topFeatures.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-5 border-b border-purple-500/20 last:border-b-0 hover:bg-purple-500/10 transition-colors"
              >
                <div className="px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 font-medium text-white border-r border-purple-500/30 flex items-center">
                  <span>{feature.name}</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center">
                    <span className="text-xs text-purple-300 font-bold">?</span>
                  </div>
                </div>
                <div className="px-8 py-4 text-center text-gray-300 border-r border-purple-500/30 flex items-center justify-center">
                  {feature.startup}
                </div>
                <div className="px-8 py-4 text-center text-gray-300 border-r border-purple-500/30 flex items-center justify-center">
                  {feature.professional}
                </div>
                <div className="px-8 py-4 text-center text-gray-300 border-r border-purple-500/30 flex items-center justify-center">
                  {feature.enterprise}
                </div>
                <div className="px-8 py-4 text-center text-gray-300 flex items-center justify-center">
                  {feature.custom}
                </div>
              </div>
            ))}
          </div>

          {/* Product Capabilities Section */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 sm:px-8 py-4 border-b border-purple-500/30">
            <h3 className="text-lg font-bold text-white">Development Capabilities</h3>
          </div>

          {/* Mobile Capabilities Layout */}
          <div className="block lg:hidden">
            {productCapabilities.map((capability, index) => (
              <div key={index} className="border-b border-purple-500/20 last:border-b-0 p-4">
                <div className="font-medium text-white mb-3">{capability.name}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Startup</span>
                    {capability.startup ? (
                      <Check className="w-5 h-5 text-purple-400" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Professional</span>
                    {capability.professional ? (
                      <Check className="w-5 h-5 text-purple-400" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Enterprise</span>
                    {capability.enterprise ? (
                      <Check className="w-5 h-5 text-purple-400" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Custom</span>
                    {capability.custom ? (
                      <Check className="w-5 h-5 text-purple-400" />
                    ) : (
                      <span className="text-gray-500 text-lg">—</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Capabilities Layout */}
          <div className="hidden lg:block">
            {productCapabilities.map((capability, index) => (
              <div
                key={index}
                className="grid grid-cols-5 border-b border-purple-500/20 last:border-b-0 hover:bg-purple-500/10 transition-colors"
              >
                <div className="px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 font-medium text-white border-r border-purple-500/30 flex items-center">
                  {capability.name}
                </div>
                <div className="px-8 py-4 text-center border-r border-purple-500/30 flex items-center justify-center">
                  {capability.startup ? (
                    <Check className="w-5 h-5 text-purple-400" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center border-r border-purple-500/30 flex items-center justify-center">
                  {capability.professional ? (
                    <Check className="w-5 h-5 text-purple-400" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center border-r border-purple-500/30 flex items-center justify-center">
                  {capability.enterprise ? (
                    <Check className="w-5 h-5 text-purple-400" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
                <div className="px-8 py-4 text-center flex items-center justify-center">
                  {capability.custom ? (
                    <Check className="w-5 h-5 text-purple-400" />
                  ) : (
                    <span className="text-gray-500 text-lg">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}