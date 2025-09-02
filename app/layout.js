import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://www.b2winfotech.ai'),
  
  title: {
    default: "B2W Infotech | #1 AI-Powered Software Development Company India | Hire Developers in 1 Hour | 1200+ Projects Completed",
    template: "%s | B2W Infotech - Leading AI-Driven Software Solutions India"
  },
  
  description: "🏆 B2W Infotech - India's #1 AI-powered software development company with 1200+ completed projects ✅ Hire expert developers in 1 hour ⚡ 40-hour risk-free trial 🚀 Custom enterprise applications, mobile apps, web development, digital transformation & IT outsourcing. Serving Mumbai, Pune, USA, UK, Australia. 100+ technologies including AI/ML, ERP, CRM, e-commerce platforms. 40% cost savings guaranteed.",
  
  keywords: [
    // Primary Brand Keywords - HIGH PRIORITY
    "B2W Infotech", "B2W Infotech India", "B2W Infotech Mumbai", "B2W Infotech Pune", "B2W Infotech AI",
    "B2W Infotech software development", "B2W Infotech IT outsourcing", "B2W artificial intelligence company",
    "B2W machine learning services", "B2W custom software development",
    
    // Primary Service Keywords - HIGHEST PRIORITY
    "software development company India", "AI-powered software development", "hire developers India", 
    "IT outsourcing services India", "custom software development Mumbai", "mobile app development India",
    "web development company Mumbai", "digital transformation services", "AI software development company",
    "machine learning development India", "artificial intelligence solutions", "custom app development",
    
    // Geographic + Service Combinations - HIGH PRIORITY
    "software development company Mumbai", "IT company Mumbai", "software company Pune",
    "hire developers Mumbai", "outsourcing company India", "tech company Maharashtra",
    "software development services Mumbai Pune", "IT outsourcing Mumbai", "app development Mumbai",
    
    // Technology-Specific Keywords - HIGH VOLUME
    "React development company India", "Node.js development services", "Python development company",
    "AI chatbot development", "machine learning solutions", "deep learning services",
    "React Native app development", "Flutter development services", "Angular development company",
    "Vue.js development services", "full-stack development company", "MEAN stack development",
    "MERN stack development", "Laravel development services", "Django development company",
    
    // Enterprise Solutions - HIGH VALUE
    "ERP software development", "CRM development services", "enterprise software solutions",
    "SAP integration services", "Salesforce customization", "Oracle NetSuite development",
    "Microsoft Dynamics development", "business automation solutions", "workflow automation",
    "process automation services", "robotic process automation", "RPA development",
    
    // E-commerce Keywords - HIGH CONVERSION
    "e-commerce development India", "Shopify development services", "Magento development company",
    "WooCommerce development", "online store development", "e-commerce platform development",
    "B2B marketplace development", "B2C e-commerce solutions", "multi-vendor marketplace",
    "payment gateway integration", "e-commerce mobile app", "shopping cart development",
    
    // Industry-Specific Solutions - TARGETED
    "healthcare software development India", "fintech software development", "banking software solutions",
    "insurance software development", "real estate software development", "education software solutions",
    "logistics software development", "supply chain management software", "inventory management system",
    "hospital management system", "clinic management software", "telemedicine app development",
    
    // Service Model Keywords - COMPETITIVE ADVANTAGE
    "hire dedicated developers", "offshore development team", "nearshore development services",
    "staff augmentation services", "remote development team", "dedicated development team",
    "project-based development", "hourly developer hiring", "contract developers India",
    "freelance development team", "outsourced development services", "vendor development team",
    
    // Technology Stack Keywords - TECHNICAL SEO
    "cloud application development", "AWS development services", "Azure cloud development",
    "microservices architecture", "API development services", "RESTful API development",
    "GraphQL development", "database design services", "MongoDB development",
    "PostgreSQL development", "MySQL development", "Redis implementation",
    
    // Modern Tech Keywords - TRENDING
    "blockchain development India", "cryptocurrency development", "NFT marketplace development",
    "IoT application development", "smart device development", "wearable app development",
    "AR VR development services", "metaverse development", "web3 development",
    "decentralized application development", "smart contract development",
    
    // Business Process Keywords - B2B FOCUSED
    "business process automation", "digital transformation consulting", "legacy system modernization",
    "cloud migration services", "DevOps implementation", "CI/CD pipeline setup",
    "quality assurance testing", "automated testing services", "performance optimization",
    "security audit services", "code review services", "technical consulting",
    
    // Competitive Keywords - MARKET POSITIONING
    "best software company India", "top IT company Mumbai", "leading software development",
    "trusted software partner", "reliable IT outsourcing", "cost-effective development",
    "quality software solutions", "experienced development team", "certified developers",
    "ISO certified software company", "CMMI level software company", "agile development services",
    
    // Long-tail Keywords - SPECIFIC SOLUTIONS
    "custom CRM software development for small business", "e-commerce mobile app with AI recommendations",
    "hospital management system with telemedicine", "real estate portal with virtual tours",
    "fintech app with blockchain integration", "logistics tracking system with IoT",
    "restaurant management software with online ordering", "education platform with video streaming",
    
    // Comparison Keywords - COMPETITIVE
    "B2W Infotech vs other software companies", "why choose B2W Infotech", "B2W Infotech reviews",
    "B2W Infotech portfolio", "B2W Infotech case studies", "B2W Infotech client testimonials",
    
    // Location-based Long-tail - LOCAL SEO
    "software development company near me Mumbai", "hire app developers in Mumbai",
    "web development services in Pune", "IT outsourcing company in Maharashtra",
    "custom software development in India", "offshore development center Mumbai"
  ].join(", "),
  
  authors: [{ 
    name: "B2W Infotech Private Limited",
    url: "https://www.b2winfotech.ai"
  }],
  
  creator: "B2W Infotech - Leading AI-Powered Software Development Company",
  publisher: "B2W Infotech Private Limited",
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.b2winfotech.ai/",
    siteName: "B2W Infotech - AI-Powered Software Development Company",
    title: "B2W Infotech | #1 AI-Powered Software Development Company India | 1200+ Projects",
    description: "🏆 B2W Infotech - India's #1 AI-powered software development company with 1200+ completed projects ✅ Hire expert developers in 1 hour ⚡ 40-hour risk-free trial 🚀 Custom enterprise applications, mobile apps, web development & IT outsourcing.",
    images: [
      {
        url: "https://www.b2winfotech.ai/images/og-b2w-infotech-main.jpg",
        width: 1200,
        height: 630,
        alt: "B2W Infotech - India's #1 AI-Powered Software Development Company with 1200+ Projects",
        type: "image/jpeg",
      },
      {
        url: "https://www.b2winfotech.ai/images/b2w-infotech-logo-2024.png", 
        width: 800,
        height: 600,
        alt: "B2W Infotech Official Logo - Leading AI Software Development Company India",
        type: "image/png",
      },
      {
        url: "https://www.b2winfotech.ai/images/b2w-team-mumbai-office.jpg",
        width: 1200,
        height: 800,
        alt: "B2W Infotech Mumbai Office - Expert Software Developers Team",
        type: "image/jpeg",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "B2W Infotech | #1 AI-Powered Software Development Company India",
    description: "🏆 India's #1 AI-powered software development company ✅ 1200+ projects ⚡ Hire developers in 1 hour 🚀 40% cost savings guaranteed",
    images: ["https://www.b2winfotech.ai/images/og-b2w-infotech-main.jpg"],
    creator: "@B2WInfotechAI",
    site: "@B2WInfotechAI",
  },
  
  alternates: {
    canonical: "https://www.b2winfotech.ai/",
    languages: {
      'en-US': 'https://www.b2winfotech.ai/',
      'en-IN': 'https://www.b2winfotech.ai/en-in/',
      'en-GB': 'https://www.b2winfotech.ai/en-gb/',
    }
  },
  
  category: "Software Development",
  classification: "Business Technology Services",
  
  verification: {
    google: "B2WInfotech2024GoogleSiteVerification",
    bing: "B2WInfotech2024BingSiteVerification",
    yandex: "B2WInfotech2024YandexSiteVerification",
  },
  
  other: {
    'application-name': 'B2W Infotech - AI Software Development',
    'msapplication-TileColor': '#1e40af',
    'msapplication-TileImage': '/images/ms-tile-b2w-infotech.png',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'B2W Infotech',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#1e40af',
    'color-scheme': 'light dark',
    'supported-color-schemes': 'light dark',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "TechnologyCompany"],
    "name": "B2W Infotech",
    "legalName": "B2W Infotech Private Limited",
    "alternateName": ["B2W Infotech India", "B2W AI Solutions", "B2W Software Company"],
    "description": "B2W Infotech is India's leading AI-powered software development company with 1200+ completed projects, specializing in custom enterprise applications, mobile apps, web development, and digital transformation services. We offer expert developers for hire in 1 hour with 40-hour risk-free trials.",
    "url": "https://www.b2winfotech.ai/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.b2winfotech.ai/images/b2w-infotech-logo-2024.png",
      "width": 512,
      "height": 512,
      "caption": "B2W Infotech Official Logo"
    },
    "image": [
      "https://www.b2winfotech.ai/images/b2w-infotech-logo-2024.png",
      "https://www.b2winfotech.ai/images/b2w-team-mumbai-office.jpg",
      "https://www.b2winfotech.ai/images/b2w-pune-development-center.jpg",
      "https://www.b2winfotech.ai/images/b2w-ai-development-workspace.jpg"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Business District, Bandra Kurla Complex",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra", 
        "postalCode": "400051",
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "IT Park, Hinjewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057", 
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress", 
        "addressRegion": "California",
        "addressCountry": "United States"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8080808080",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Marathi"],
        "areaServed": ["IN", "US", "GB", "AU", "CA", "DE", "FR"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support", 
        "telephone": "+91-8080808081",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/b2winfotech-ai",
      "https://github.com/b2winfotech",
      "https://www.facebook.com/b2winfotech.ai",
      "https://medium.com/@b2winfotech"
    ],
    "foundingDate": "2010-03-15",
    "foundingLocation": "Mumbai, Maharashtra, India",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 100,
      "maxValue": 500
    },
    "industry": ["Software Development", "Information Technology", "Artificial Intelligence"],
    "naics": "541511",
    "isicV4": "6201",
    "serviceType": [
      "Custom Software Development",
      "AI-Powered Development", 
      "IT Outsourcing Services",
      "Digital Transformation",
      "Mobile App Development",
      "Web Development",
      "Enterprise Applications",
      "Cloud Solutions",
      "Machine Learning Services",
      "Blockchain Development"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewBody": "B2W Infotech's AI-powered development transformed our entire digital infrastructure. They delivered our enterprise solution 60% faster than expected with incredible quality."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "B2W Infotech Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Custom Software Development",
            "description": "Revolutionary AI-driven custom software development with automated code generation and intelligent testing"
          },
          "price": "2999",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development (iOS & Android)",
            "description": "Native and cross-platform mobile application development with AI integration"
          },
          "price": "4999", 
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Web Development",
            "description": "Scalable web applications with modern frameworks and AI-powered features"
          },
          "price": "3999",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "AI/ML Solutions & Integration",
            "description": "Custom AI models, machine learning algorithms, and intelligent automation"
          },
          "price": "7999",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dedicated Development Team",
            "description": "On-demand expert developers available in 1 hour with 40-hour risk-free trial"
          },
          "price": "1999",
          "priceCurrency": "USD"
        }
      ]
    },
    "awards": [
      "Best AI-Powered Software Development Company 2024",
      "Top IT Outsourcing Company India 2023",
      "Excellence in Digital Transformation 2023"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "name": "B2W Infotech - AI-Powered Software Development Company",
    "alternateName": "B2W Infotech Official Website",
    "url": "https://www.b2winfotech.ai/",
    "description": "B2W Infotech is India's leading AI-powered software development company with 1200+ completed projects",
    "inLanguage": ["en-US", "en-IN"],
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.b2winfotech.ai/"
    },
    "about": {
      "@type": "Organization",
      "name": "B2W Infotech",
      "sameAs": "https://www.b2winfotech.ai/"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint", 
        "urlTemplate": "https://www.b2winfotech.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "B2W Infotech"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Software Development Services by B2W Infotech",
    "description": "Comprehensive AI-powered software development and IT outsourcing services including custom applications, mobile apps, web development, and digital transformation solutions with 1200+ completed projects",
    "provider": {
      "@type": "Organization",
      "name": "B2W Infotech",
      "url": "https://www.b2winfotech.ai/"
    },
    "serviceType": "AI-Powered Software Development",
    "category": "Technology Services",
    "areaServed": ["India", "United States", "United Kingdom", "Australia", "Canada", "Germany", "France"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.b2winfotech.ai/",
      "serviceSmsNumber": "+91-8080808080",
      "servicePhone": "+91-8080808080"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "B2W Infotech Development Services Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Resource Planning (ERP) Development",
            "description": "Custom ERP solutions with SAP, Oracle NetSuite, Odoo integration and AI-powered analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Customer Relationship Management (CRM) Solutions", 
            "description": "Advanced CRM development with Salesforce, HubSpot, Zoho customization and AI automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Platform Development",
            "description": "Shopify, Magento, WooCommerce development with AI recommendations and payment gateway integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Software Development", 
            "description": "Hospital Management Systems, Telemedicine platforms, clinic management with AI diagnostics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Banking & Fintech Solutions",
            "description": "Core banking systems, payment gateways, trading platforms with blockchain and AI integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Software Development",
            "description": "Property management systems, MLS software, real estate portals with virtual tours and AI matching"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1999",
      "highPrice": "99999",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.b2winfotech.ai/"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org", 
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can I hire developers from B2W Infotech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can hire expert developers from B2W Infotech within 1 hour through our unique '1 Hour Hiring Developer Policy'. We also offer a 40-hour risk-free trial to evaluate resources before committing to long-term projects."
        }
      },
      {
        "@type": "Question", 
        "name": "What technologies does B2W Infotech specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2W Infotech has expertise in 100+ technologies including AI/ML (TensorFlow, PyTorch), mobile development (React Native, Flutter, iOS, Android), web development (React, Angular, Node.js, Python), enterprise solutions (SAP, Salesforce, Oracle), e-commerce platforms (Shopify, Magento, WooCommerce), and emerging technologies like IoT, blockchain, AR/VR, and cloud solutions (AWS, Azure, Google Cloud)."
        }
      },
      {
        "@type": "Question",
        "name": "How many projects has B2W Infotech completed?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2W Infotech has successfully completed over 1,200 projects across various industries including healthcare, fintech, e-commerce, manufacturing, education, real estate, and logistics sectors. Our portfolio includes mobile apps, web applications, enterprise software, and AI-powered solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What makes B2W Infotech different from other IT outsourcing companies?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "B2W Infotech stands out with AI-powered development processes, 1-hour developer hiring, 40-hour risk-free trials, 0% developer back-out guarantee, transparent communication, dedicated project managers, 40% cost savings, faster delivery times, 24/7 support across multiple time zones, and strong IP protection with signed NDAs."
        }
      },
      {
        "@type": "Question",
        "name": "Does B2W Infotech provide services globally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, B2W Infotech serves clients globally with offices in Mumbai and Pune, India, and operations in the United States. We provide services to clients in India, USA, UK, Australia, Canada, Germany, France, and other countries with 24/7 support and multiple time zone coverage."
        }
      },
      {
        "@type": "Question",
        "name": "What AI services does B2W Infotech offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2W Infotech offers comprehensive AI services including custom AI model development, machine learning solutions, natural language processing, computer vision, predictive analytics, chatbot development, recommendation systems, automated testing frameworks, AI-powered code generation, and intelligent business process automation."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "B2W Infotech Mumbai Office",
    "image": "https://www.b2winfotech.ai/images/b2w-team-mumbai-office.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business District, Bandra Kurla Complex",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0596",
      "longitude": "72.8656"
    },
    "telephone": "+91-8080808080",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": "https://www.b2winfotech.ai/"
  };

  return (
    <html lang="en" itemScope itemType="https://schema.org/WebPage">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.0596;72.8656" />
        <meta name="ICBM" content="19.0596, 72.8656" />
        <meta name="DC.title" content="B2W Infotech - AI-Powered Software Development Company India" />
        <meta name="DC.creator" content="B2W Infotech Private Limited" />
        <meta name="DC.subject" content="AI Software Development, IT Outsourcing, Mobile Apps, Web Development" />
        <meta name="DC.description" content="India's #1 AI-powered software development company with 1200+ projects" />
        <meta name="DC.publisher" content="B2W Infotech Private Limited" />
        <meta name="DC.contributor" content="B2W Development Team" />
        <meta name="DC.date" content="2024-09-02" />
        <meta name="DC.type" content="website" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.b2winfotech.ai/" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="India, USA, UK, Australia, Canada" />
        <meta name="DC.rights" content="Copyright B2W Infotech Private Limited" />
        
        {/* Business Information */}
        <meta name="rating" content="4.9" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta name="expires" content="never" />
        <meta name="language" content="English" />
        <meta name="doc-type" content="Business Website" />
        <meta name="doc-rights" content="Copyrighted Work" />
        <meta name="doc-class" content="Living Document" />
        <meta name="classification" content="Software Development Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="Software Development Clients" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.b2winfotech.ai/" />
        
        {/* Alternative URLs for SEO */}
        <link rel="alternate" href="https://www.b2winfotech.ai/" hrefLang="en-us" />
        <link rel="alternate" href="https://www.b2winfotech.ai/en-in/" hrefLang="en-in" />
        <link rel="alternate" href="https://www.b2winfotech.ai/en-gb/" hrefLang="en-gb" />
        
        {/* Favicon and Icons - Optimized */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-57x57.png" sizes="57x57" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for Performance - Enhanced */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource Hints for Performance */}
        <link rel="preload" href="/fonts/geist-sans-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-sans-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/geist-mono-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/b2w-infotech-logo-2024.png" as="image" />
        <link rel="preload" href="/images/hero-bg-b2w.webp" as="image" />
        
        {/* Critical CSS Preload */}
        <link rel="preload" href="/styles/critical.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        
        {/* Rich Snippets - JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        <script
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema) 
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        
        {/* Google Analytics 4 - Enhanced */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'B2W Infotech - AI Software Development',
                custom_map: {
                  'custom_parameter_1': 'company_name',
                  'custom_parameter_2': 'service_type'
                }
              });
              gtag('event', 'page_view', {
                company_name: 'B2W Infotech',
                service_type: 'AI Software Development'
              });
            `
          }}
        />
        
        {/* Microsoft Clarity - User Behavior Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `
          }}
        />
        
        {/* Facebook Pixel - Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'FACEBOOK_PIXEL_ID');
              fbq('track', 'PageView');
            `
          }}
        />
        
        {/* LinkedIn Insight Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "LINKEDIN_PARTNER_ID";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `
          }}
        />
        <script async src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
        
        {/* Google Tag Manager - Enhanced */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `
          }}
        />
        
        {/* Hotjar - User Experience Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
          }}
        />
        
        {/* Additional Performance Optimizations */}
        <link rel="modulepreload" href="/js/main.js" />
        <link rel="prefetch" href="/api/contact" />
        <link rel="prefetch" href="/api/portfolio" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="B2W Infotech" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-window" content="width=1024;height=768" />
        <meta name="msapplication-navbutton-color" content="#1e40af" />
        
        {/* Additional Meta for Rich Snippets */}
        <meta property="business:contact_data:street_address" content="Business District, Bandra Kurla Complex" />
        <meta property="business:contact_data:locality" content="Mumbai" />
        <meta property="business:contact_data:region" content="Maharashtra" />
        <meta property="business:contact_data:postal_code" content="400051" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="business:contact_data:phone_number" content="+91-8080808080" />
        <meta property="business:contact_data:website" content="https://www.b2winfotech.ai/" />
        
        {/* Article/Blog Meta (for future content) */}
        <meta property="article:publisher" content="https://www.facebook.com/b2winfotech.ai" />
        <meta property="article:author" content="B2W Infotech Team" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="AI, Software Development, IT Outsourcing" />
        
        {/* Additional Social Meta */}
        <meta name="twitter:domain" content="b2winfotech.ai" />
        <meta name="twitter:url" content="https://www.b2winfotech.ai/" />
        <meta property="og:site_name" content="B2W Infotech - AI-Powered Software Development" />
        <meta property="og:updated_time" content="2024-09-02T12:00:00+05:30" />
        
        {/* LinkedIn Specific Meta */}
        <meta property="linkedin:owner" content="B2W Infotech Private Limited" />
        
        {/* Google-specific Meta */}
        <meta name="google-site-verification" content="B2WInfotech2024GoogleSiteVerification" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        
        {/* Bing/Yahoo Meta */}
        <meta name="msvalidate.01" content="B2WInfotech2024BingSiteVerification" />
        <meta name="y_key" content="B2WInfotech2024YahooSiteVerification" />
        
        {/* Additional Performance Meta */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
        
        {/* Structured Data for Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.b2winfotech.ai/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.b2winfotech.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        itemScope 
        itemType="https://schema.org/WebPage"
        data-theme="light"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
            title="Google Tag Manager"
          />
        </noscript>
        
        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=FACEBOOK_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {/* Skip to Content Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Main Content */}
        <div id="main-content" role="main" itemScope itemType="https://schema.org/WebPageElement">
          {children}
        </div>
        
        {/* Structured Data for Contact Information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "url": "https://www.b2winfotech.ai/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "B2W Infotech",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-8080808080",
                  "contactType": "customer service"
                }
              }
            })
          }}
        />
        
        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              function getCLS(onPerfEntry) {
                if (onPerfEntry && onPerfEntry instanceof Function) {
                  import('web-vitals').then(({getCLS}) => getCLS(onPerfEntry));
                }
              }
              
              function getFID(onPerfEntry) {
                if (onPerfEntry && onPerfEntry instanceof Function) {
                  import('web-vitals').then(({getFID}) => getFID(onPerfEntry));
                }
              }
              
              function getFCP(onPerfEntry) {
                if (onPerfEntry && onPerfEntry instanceof Function) {
                  import('web-vitals').then(({getFCP}) => getFCP(onPerfEntry));
                }
              }
              
              function getLCP(onPerfEntry) {
                if (onPerfEntry && onPerfEntry instanceof Function) {
                  import('web-vitals').then(({getLCP}) => getLCP(onPerfEntry));
                }
              }
              
              function getTTFB(onPerfEntry) {
                if (onPerfEntry && onPerfEntry instanceof Function) {
                  import('web-vitals').then(({getTTFB}) => getTTFB(onPerfEntry));
                }
              }
              
              // Report to analytics
              function sendToAnalytics(metric) {
                gtag('event', metric.name, {
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  non_interaction: true,
                });
              }
              
              getCLS(sendToAnalytics);
              getFID(sendToAnalytics);
              getFCP(sendToAnalytics);
              getLCP(sendToAnalytics);
              getTTFB(sendToAnalytics);
            `
          }}
        />
      </body>
    </html>
  );
}
