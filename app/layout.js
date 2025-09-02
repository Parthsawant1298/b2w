import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: "swap", // Better performance
});

export const metadata = {
  metadataBase: new URL('https://www.b2winfotech.ai'),
  title: {
    default: "B2W Infotech - #1 AI-Powered Software Development & IT Outsourcing Company | Hire Developers in 1 Hour",
    template: "%s | B2W Infotech - AI-Driven Software Solutions"
  },
  description: "🚀 Leading AI-powered software development company with 1200+ completed projects. Hire expert developers in 1 hour ⚡ 40-hour risk-free trial ✅ Custom enterprise applications, mobile apps, web development, digital transformation & IT outsourcing services. Expertise in 100+ technologies including AI/ML, IoT, blockchain, cloud solutions.",
  
  keywords: [
    // Primary Keywords
    "software development company", "IT outsourcing services", "hire developers", "custom software development",
    "AI-powered development", "digital transformation", "mobile app development", "web development services",
    
    // Business Applications
    "ERP solutions", "CRM software development", "HRMS development", "project management tools",
    "accounting software", "enterprise applications", "business automation",
    
    // E-commerce & Retail
    "e-commerce platform development", "Shopify development", "Magento development", "WooCommerce development",
    "POS system development", "inventory management software", "order management systems",
    
    // Industry-Specific
    "healthcare software development", "hospital management system", "telemedicine platform",
    "education software", "LMS development", "e-learning platforms", "banking software",
    "fintech solutions", "core banking systems", "payment gateway integration",
    "real estate software", "property management systems",
    
    // Technologies
    "AI machine learning development", "chatbot development", "IoT applications", 
    "smart home apps", "automation tools", "RPA development", "cloud migration",
    "microservices architecture", "API development", "database design",
    
    // Platforms & Frameworks
    "React development", "Node.js development", "Python development", "Java development",
    "Angular development", "Vue.js development", "Flutter development", "React Native",
    "PHP development", "Laravel development", "Django development", ".NET development",
    
    // Creative & Multimedia
    "graphic design software", "video editing applications", "music production software",
    "Adobe integration", "creative suite development", "multimedia applications",
    
    // Enterprise Solutions  
    "SAP integration", "Oracle NetSuite", "Salesforce customization", "Microsoft Teams integration",
    "Office 365 development", "SharePoint development", "document management systems",
    
    // Location-based
    "software development India", "IT outsourcing India", "Mumbai software company",
    "Pune IT services", "nearshore development", "offshore development team",
    
    // Service-specific
    "dedicated development team", "staff augmentation", "MVP development", "SaaS development",
    "DevOps services", "quality assurance", "software testing", "maintenance support",
    "legacy system modernization", "cloud native development", "blockchain development"
  ].join(", "),
  
  authors: [{ 
    name: "B2W Infotech",
    url: "https://www.b2winfotech.ai"
  }],
  
  creator: "B2W Infotech",
  publisher: "B2W Infotech",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.b2winfotech.ai/",
    siteName: "B2W Infotech",
    title: "B2W Infotech - #1 AI-Powered Software Development & IT Outsourcing Company",
    description: "🚀 Leading AI-powered software development company with 1200+ completed projects. Hire expert developers in 1 hour ⚡ 40-hour risk-free trial ✅ Custom enterprise applications, mobile apps, web development & IT outsourcing services.",
    images: [
      {
        url: "https://www.b2winfotech.ai/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B2W Infotech - AI-Powered Software Development Company",
        type: "image/jpeg",
      },
      {
        url: "https://www.b2winfotech.ai/images/logo.png", 
        width: 800,
        height: 600,
        alt: "B2W Infotech Logo - Leading Software Development Company",
        type: "image/png",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "B2W Infotech - #1 AI-Powered Software Development Company",
    description: "🚀 Hire expert developers in 1 hour ⚡ 1200+ projects completed ✅ AI-driven custom software, mobile apps, IT outsourcing services",
    images: ["https://www.b2winfotech.ai/images/og-image.jpg"],
    creator: "@B2WInfotech",
    site: "@B2WInfotech",
  },
  
  alternates: {
    canonical: "https://www.b2winfotech.ai/",
    languages: {
      'en-US': 'https://www.b2winfotech.ai/',
      'en-GB': 'https://www.b2winfotech.ai/en-gb/',
    }
  },
  
  category: "Technology",
  
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code", 
    bing: "your-bing-verification-code",
  },
  
  other: {
    'application-name': 'B2W Infotech',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'B2W Infotech',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'theme-color': '#2563eb',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "B2W Infotech",
    "alternateName": "B2W Infotech Private Limited",
    "description": "Leading AI-powered software development and IT outsourcing company specializing in custom enterprise applications, mobile apps, web development, and digital transformation services with expertise in 100+ technologies.",
    "url": "https://www.b2winfotech.ai/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.b2winfotech.ai/images/logo.png",
      "width": 512,
      "height": 512
    },
    "image": [
      "https://www.b2winfotech.ai/images/logo.png",
      "https://www.b2winfotech.ai/images/office-mumbai.jpg",
      "https://www.b2winfotech.ai/images/office-pune.jpg"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra", 
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress", 
        "addressCountry": "United States"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": ["IN", "US", "GB", "AU", "CA"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/b2winfotech"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-200",
    "industry": "Software Development",
    "serviceType": [
      "Software Development",
      "IT Outsourcing", 
      "Digital Transformation",
      "AI/ML Solutions",
      "Mobile App Development",
      "Web Development",
      "Enterprise Applications",
      "Cloud Solutions"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "geoRadius": "10000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "End-to-end custom software development services"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "iOS and Android mobile application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Web Development",
            "description": "Responsive web application development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI/ML Solutions", 
            "description": "Artificial Intelligence and Machine Learning solutions"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite", 
    "name": "B2W Infotech",
    "url": "https://www.b2winfotech.ai/",
    "description": "Leading AI-powered software development and IT outsourcing company",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.b2winfotech.ai/"
    },
    "about": {
      "@type": "Organization",
      "name": "B2W Infotech"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint", 
        "urlTemplate": "https://www.b2winfotech.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "description": "Comprehensive software development and IT outsourcing services including AI-powered solutions, mobile apps, web applications, and enterprise software",
    "provider": {
      "@type": "Organization",
      "name": "B2W Infotech",
      "url": "https://www.b2winfotech.ai/"
    },
    "serviceType": "Software Development",
    "areaServed": ["India", "United States", "United Kingdom", "Australia", "Canada"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Resource Planning (ERP) Solutions",
            "description": "Custom ERP development including SAP, Odoo, Oracle NetSuite integration and customization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Customer Relationship Management (CRM) Development", 
            "description": "Custom CRM solutions and Salesforce, HubSpot, Zoho CRM customization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Platform Development",
            "description": "Shopify, Magento, WooCommerce development and custom e-commerce solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Software Development", 
            "description": "Hospital Management Systems, Telemedicine platforms, and healthcare applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Banking & Fintech Solutions",
            "description": "Core banking systems, payment gateways, trading platforms, and financial applications"
          }
        }
      ]
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
          "text": "You can hire expert developers from B2W Infotech within 1 hour through our unique '1 Hour Hiring Developer Policy'. We also offer a 40-hour risk-free trial to evaluate resources before committing."
        }
      },
      {
        "@type": "Question", 
        "name": "What technologies does B2W Infotech specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2W Infotech has expertise in 100+ technologies including AI/ML, mobile development (iOS/Android), web development (React, Angular, Node.js), enterprise solutions (SAP, Salesforce), e-commerce platforms (Shopify, Magento), and emerging technologies like IoT, blockchain, and cloud solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How many projects has B2W Infotech completed?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2W Infotech has successfully completed over 1,200 projects across various industries including healthcare, fintech, e-commerce, manufacturing, and education sectors."
        }
      },
      {
        "@type": "Question",
        "name": "What makes B2W Infotech different from other IT outsourcing companies?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "B2W Infotech stands out with AI-powered development processes, 1-hour developer hiring, 40-hour risk-free trials, 0% developer back-out guarantee, transparent communication, dedicated project managers, and 40% cost savings with faster delivery times."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Pune" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        {/* Business Information */}
        <meta name="rating" content="5" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        <meta name="language" content="English" />
        <meta name="doc-type" content="Web Page" />
        <meta name="doc-rights" content="Copywritten Work" />
        <meta name="doc-class" content="Living Document" />
        <meta name="classification" content="Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.b2winfotech.ai/" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
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
        
        {/* Additional Performance Optimizations */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        {children}
      </body>
    </html>
  );
}
