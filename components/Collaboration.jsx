"use client";

import { LeftCurve, RightCurve } from "@/components/design/Collaboration";
import { collabApps } from "@/constants";

// Inline Button component with the styling matching the image
const InlineButton = ({ href, onClick, className = "", children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 uppercase tracking-wider text-sm font-medium transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

// Check icon component
const CheckIcon = () => (
  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Feature item that matches the image
const FeatureItem = ({ title }) => (
  <li className="flex items-start">
    <CheckIcon />
    <h6 className="ml-3 text-white text-sm sm:text-base font-medium leading-relaxed">{title}</h6>
  </li>
);

// Collaboration features array
const CollaborationFeatures = [
  {
    title: "AI-Powered Code Generation & Automation",
  },
  {
    title: "Full-Stack Development with Modern Frameworks",
  },
  {
    title: "Custom Digital Transformation Solutions",
  },
  {
    title: "Enterprise AI/ML Integration Services",
  },
  {
    title: "24/7 Dedicated Technical Support",
  },
];

const Collaboration = () => {
  return (
    <div className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10 max-w-7xl">
        <div className="lg:flex items-start gap-6 lg:gap-8 xl:gap-16">
          {/* Left Content Section */}
          <div className="max-w-full lg:max-w-[34rem] flex-shrink-0 mb-8 sm:mb-10 lg:mb-0">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight text-white">
              Platform for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Development</span> Excellence
            </h2>

            <ul className="mb-6 sm:mb-8 md:mb-12 space-y-3 sm:space-y-4">
              {CollaborationFeatures.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                />
              ))}
            </ul>

            {/* Button with gradient matching the image */}
            <InlineButton
              className="
                w-auto 
                bg-gradient-to-r
                from-purple-600
                to-pink-600
                text-white
                hover:from-purple-700
                hover:to-pink-700
                border-none
                shadow-lg
                shadow-purple-500/25
                border
                border-purple-400/30
                text-xs sm:text-sm
                px-4 sm:px-6
                py-2 sm:py-3
              "
            >
              START AI DEVELOPMENT
            </InlineButton>
          </div>

          {/* Right Visual Section */}
          <div className="lg:flex-1">
            <p className="text-gray-300 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 lg:max-w-[34rem] lg:mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Empowering businesses of all sizes to accelerate digital transformation 
            </p>

            {/* Circular Integration Diagram */}
            <div className="relative mx-auto flex w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[22rem] aspect-square border border-purple-500/30 rounded-full">
              {/* Central Brain Symbol */}
              <div className="flex w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 aspect-square m-auto border border-purple-500/30 rounded-full">
                <div className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 aspect-square m-auto bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                    <div className="text-center">
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">B2W AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rotating App Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <ul className="w-full h-full">
                  {collabApps.map((app, index) => {
                    const angle = (360 / collabApps.length) * index;
                    return (
                      <li
                        key={app.id || index}
                        className="absolute top-0 left-1/2 h-1/2 -ml-[1.2rem] sm:-ml-[1.4rem] md:-ml-[1.6rem] origin-bottom"
                        style={{
                          transform: `rotate(${angle}deg)`
                        }}
                      >
                        <div
                          className="relative -top-[1.2rem] sm:-top-[1.4rem] md:-top-[1.6rem] flex w-[2.4rem] h-[2.4rem] sm:w-[2.8rem] sm:h-[2.8rem] md:w-[3.2rem] md:h-[3.2rem] bg-black border border-purple-500/30 rounded-xl hover:border-purple-400/50 transition-colors"
                          style={{
                            transform: `rotate(-${angle}deg)`
                          }}
                        >
                          <img
                            className="m-auto transform hover:scale-110 transition-transform"
                            width={app.width || 16}
                            height={app.height || 16}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            alt={app.title || `App ${index + 1}`}
                            src={app.icon || `/images/app-icon-${index + 1}.svg`}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Collaboration;