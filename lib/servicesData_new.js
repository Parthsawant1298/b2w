// Comprehensive Services data structure - B2W Infotech Service Portfolio
export const servicesData = {
  // IT Outsourcing & Team as a Service
  "it-outsourcing": {
    title: "IT Outsourcing & Team as a Service",
    category: "IT Outsourcing",
    icon: "👥",
    description: "Scale your development capacity with dedicated, skilled IT professionals and agile development teams.",
    longDescription:
      "Our IT Outsourcing and Team as a Service (TaaS) solutions provide you with access to elite software development talent. We embed dedicated teams of developers, project managers, and specialists into your organization, ensuring seamless collaboration and accelerated project delivery. From short-term projects to long-term partnerships, we adapt to your needs.",
    features: [
      "Dedicated Development Teams",
      "Agile Project Management",
      "24/7 Technical Support",
      "Flexible Engagement Models",
      "Rapid Team Scaling",
      "Knowledge Transfer",
      "Quality Assurance Integration",
      "Project Rescue Services",
    ],
    technologies: [
      "Agile Methodologies",
      "Scrum Framework",
      "Jira & Confluence",
      "Slack & Microsoft Teams",
      "Git & Version Control",
      "CI/CD Pipelines",
      "Code Review Tools",
      "Project Management Tools",
    ],
    process: [
      {
        step: 1,
        title: "Requirements Assessment",
        description:
          "Deep analysis of your technical requirements, team composition needs, and project timelines.",
      },
      {
        step: 2,
        title: "Team Assembly & Onboarding",
        description:
          "Curate skilled professionals, conduct thorough onboarding, and integrate with your existing workflows.",
      },
      {
        step: 3,
        title: "Agile Development & Delivery",
        description:
          "Implement agile methodologies with daily standups, sprint planning, and continuous delivery cycles.",
      },
      {
        step: 4,
        title: "Performance Monitoring & Optimization",
        description:
          "Track team performance, ensure quality standards, and optimize processes for maximum efficiency.",
      },
    ],
    relatedServices: ["staff-augmentation", "project-rescue", "managed-services"],
  },

  // Custom Software Development
  "custom-software-development": {
    title: "Custom Software Development",
    category: "Software Development",
    icon: "⚙️",
    description: "Tailored software solutions designed to optimize your business processes and drive digital transformation.",
    longDescription:
      "Our custom software development services create bespoke applications that perfectly align with your business objectives. From ERP and CRM systems to workflow automation and business intelligence platforms, we engineer solutions that solve your unique challenges and deliver measurable ROI. Each project is built with scalability, security, and performance in mind.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Workflow Automation Systems",
      "Business Intelligence Platforms",
      "Inventory Management Systems",
      "Financial Management Software",
      "Healthcare Management Systems",
      "E-commerce Platforms",
    ],
    technologies: [
      "React.js", "Node.js", "Python", "Java", ".NET",
      "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure",
      "Docker", "Kubernetes", "REST APIs", "GraphQL"
    ],
    process: [
      {
        step: 1,
        title: "Business Analysis & Planning",
        description:
          "Comprehensive analysis of your business processes, pain points, and requirements to design optimal solutions.",
      },
      {
        step: 2,
        title: "Architecture & Design",
        description:
          "Create scalable system architecture, database design, and user experience flows for maximum efficiency.",
      },
      {
        step: 3,
        title: "Agile Development & Testing",
        description:
          "Iterative development with continuous integration, automated testing, and regular stakeholder feedback.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "Production deployment, user training, ongoing maintenance, and performance optimization support.",
      },
    ],
    relatedServices: ["erp-development", "crm-development", "workflow-automation"],
  },

  // AI Strategy & Implementation
  "ai-strategy-implementation": {
    title: "AI Strategy & Implementation",
    category: "AI & Machine Learning",
    icon: "🎯",
    description: "Strategic AI integration to transform your business operations with intelligent automation and predictive insights.",
    longDescription:
      "Our AI Strategy & Implementation services help you harness the power of artificial intelligence to revolutionize your business operations. We design comprehensive AI roadmaps, implement intelligent systems, and ensure successful adoption across your organization. From chatbots and predictive analytics to computer vision and NLP solutions, we deliver AI that drives real business value.",
    features: [
      "AI Readiness Assessment",
      "Custom AI Model Development",
      "Machine Learning Integration",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics Implementation",
      "AI Ethics & Governance",
      "Change Management Support",
    ],
    technologies: [
      "Python", "TensorFlow", "PyTorch", "OpenAI GPT",
      "Hugging Face", "AWS AI/ML", "Google AI Platform",
      "Azure AI", "Scikit-learn", "Keras"
    ],
    process: [
      {
        step: 1,
        title: "AI Strategy Development",
        description:
          "Assess your business needs, identify AI opportunities, and create a comprehensive AI implementation roadmap.",
      },
      {
        step: 2,
        title: "Data Preparation & Analysis",
        description:
          "Clean and prepare your data, perform exploratory analysis, and ensure data quality for AI model training.",
      },
      {
        step: 3,
        title: "AI Model Development & Training",
        description:
          "Develop custom AI models, train algorithms with your data, and optimize for accuracy and performance.",
      },
      {
        step: 4,
        title: "Integration & Deployment",
        description:
          "Integrate AI solutions into your existing systems, deploy to production, and provide ongoing optimization.",
      },
    ],
    relatedServices: ["generative-ai", "predictive-analytics", "ai-automation"],
  },

  // Web & Mobile App Development
  "web-mobile-development": {
    title: "Web & Mobile App Development",
    category: "Web Development",
    icon: "🌐",
    description: "Create stunning, high-performance web and mobile applications that engage users and drive business growth.",
    longDescription:
      "Our web and mobile app development services combine cutting-edge technology with exceptional user experience design. We build responsive web applications, native mobile apps, and cross-platform solutions that work seamlessly across all devices. From concept to launch, we ensure your digital products deliver outstanding performance and user satisfaction.",
    features: [
      "Responsive Web Application Development",
      "Native iOS & Android Apps",
      "Cross-Platform Mobile Solutions",
      "Progressive Web Apps (PWAs)",
      "E-commerce Platform Development",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: [
      "React.js", "Next.js", "Vue.js", "Angular",
      "React Native", "Flutter", "Swift", "Kotlin",
      "Node.js", "Python", "AWS", "Firebase",
      "MongoDB", "PostgreSQL", "Redis"
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "Understand your business goals, target audience, and technical requirements to define project scope.",
      },
      {
        step: 2,
        title: "UI/UX Design & Prototyping",
        description:
          "Create intuitive user interfaces, interactive prototypes, and comprehensive design systems.",
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Build robust applications with clean code, implement APIs, and integrate third-party services.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description:
          "Comprehensive testing across devices, performance optimization, and successful app store deployment.",
      },
    ],
    relatedServices: ["react-development", "mobile-app-development", "ui-ux-design"],
  },

  // MVP Development & Rapid Prototyping
  "mvp-development": {
    title: "MVP Development & Rapid Prototyping",
    category: "Product Development",
    icon: "🚀",
    description: "Transform your ideas into market-ready products with rapid MVP development and iterative prototyping.",
    longDescription:
      "Our MVP Development services help startups and enterprises validate ideas quickly and cost-effectively. We build minimum viable products that capture core functionality, test market fit, and attract early adopters. Using lean methodologies and agile development, we accelerate your path to market validation and product-market fit.",
    features: [
      "Rapid Prototyping & Wireframing",
      "MVP Strategy & Roadmap",
      "Lean Product Development",
      "User Testing & Validation",
      "Iterative Feature Development",
      "Market Research Integration",
      "Scalability Planning",
      "Post-MVP Development Support",
    ],
    technologies: [
      "React.js", "Node.js", "Python", "Firebase",
      "MongoDB", "AWS", "Vercel", "Figma",
      "Adobe XD", "Sketch", "InVision", "Miro"
    ],
    process: [
      {
        step: 1,
        title: "Idea Validation & Planning",
        description:
          "Validate your business idea, define MVP scope, and create a development roadmap with clear milestones.",
      },
      {
        step: 2,
        title: "Rapid Prototyping",
        description:
          "Create interactive prototypes, design mockups, and gather early user feedback for iteration.",
      },
      {
        step: 3,
        title: "MVP Development",
        description:
          "Build core features with clean architecture, implement essential functionality, and ensure quality.",
      },
      {
        step: 4,
        title: "Launch & Iteration",
        description:
          "Deploy MVP to target users, collect feedback, and plan iterations based on market response.",
      },
    ],
    relatedServices: ["startup-consulting", "product-strategy", "rapid-prototyping"],
  },

  // IT Staff Augmentation
  "staff-augmentation": {
    title: "IT Staff Augmentation",
    category: "IT Outsourcing",
    icon: "👨‍💻",
    description: "Access top-tier IT talent instantly with our staff augmentation services for immediate project needs.",
    longDescription:
      "Our IT Staff Augmentation services provide immediate access to skilled developers, designers, and technical specialists. Whether you need to fill skill gaps, accelerate project timelines, or handle peak workloads, we supply qualified professionals who integrate seamlessly with your existing teams. Available on flexible terms from hours to months.",
    features: [
      "Immediate Talent Access",
      "Flexible Engagement Terms",
      "Pre-vetted Professionals",
      "Seamless Team Integration",
      "Skill-Specific Expertise",
      "Project-Based Assignments",
      "Remote & On-site Options",
      "Performance Monitoring",
    ],
    technologies: [
      "Full-Stack Development",
      "Frontend Technologies",
      "Backend Technologies",
      "Mobile Development",
      "DevOps & Cloud",
      "AI/ML Development",
      "UI/UX Design",
      "Quality Assurance"
    ],
    process: [
      {
        step: 1,
        title: "Skill Assessment & Matching",
        description:
          "Identify your technical requirements and match you with professionals possessing the exact skills needed.",
      },
      {
        step: 2,
        title: "Professional Onboarding",
        description:
          "Complete background verification, technical assessment, and smooth integration with your team and processes.",
      },
      {
        step: 3,
        title: "Project Execution",
        description:
          "Monitor performance, ensure collaboration, and maintain communication throughout the engagement.",
      },
      {
        step: 4,
        title: "Performance Review & Extension",
        description:
          "Regular performance evaluations, feedback collection, and engagement extension based on satisfaction.",
      },
    ],
    relatedServices: ["it-outsourcing", "team-as-service", "project-consulting"],
  },

  // Legacy Modernization & Cloud Migration
  "legacy-modernization": {
    title: "Legacy Modernization & Cloud Migration",
    category: "Cloud & DevOps",
    icon: "🔄",
    description: "Modernize outdated systems and migrate to cloud infrastructure for improved performance and scalability.",
    longDescription:
      "Our Legacy Modernization and Cloud Migration services transform outdated, monolithic systems into modern, scalable, cloud-native applications. We help enterprises reduce technical debt, improve system performance, and unlock new capabilities through strategic modernization. From assessment to migration and optimization, we ensure minimal disruption and maximum ROI.",
    features: [
      "Legacy System Assessment",
      "Application Refactoring",
      "Database Migration",
      "Cloud Infrastructure Setup",
      "Microservices Architecture",
      "API Modernization",
      "Performance Optimization",
      "Security Enhancement",
    ],
    technologies: [
      "AWS", "Azure", "Google Cloud",
      "Docker", "Kubernetes", "Terraform",
      "Node.js", "Python", "Java",
      "PostgreSQL", "MongoDB", "Redis"
    ],
    process: [
      {
        step: 1,
        title: "Legacy Assessment",
        description:
          "Analyze existing systems, identify modernization opportunities, and create migration strategy.",
      },
      {
        step: 2,
        title: "Architecture Planning",
        description:
          "Design modern architecture, plan cloud infrastructure, and define migration phases.",
      },
      {
        step: 3,
        title: "Migration Execution",
        description:
          "Execute phased migration, refactor applications, and implement modern technologies.",
      },
      {
        step: 4,
        title: "Optimization & Support",
        description:
          "Performance tuning, monitoring setup, and ongoing support for optimized operations.",
      },
    ],
    relatedServices: ["cloud-migration", "application-modernization", "infrastructure-as-code"],
  },

  // UI/UX Design
  "ui-ux-design": {
    title: "UI/UX Design Services",
    category: "Design",
    icon: "🎨",
    description: "Create exceptional user experiences with modern design principles and user-centered design methodology.",
    longDescription:
      "Our UI/UX Design services focus on creating intuitive, engaging, and conversion-optimized digital experiences. We combine user research, modern design principles, and cutting-edge tools to deliver interfaces that users love and businesses need. From wireframes to polished prototypes, we ensure every interaction serves your business goals.",
    features: [
      "User Research & Analysis",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Interaction Design",
      "Usability Testing",
      "Design System Creation",
      "Accessibility Compliance",
    ],
    technologies: [
      "Figma", "Adobe XD", "Sketch", "InVision",
      "Principle", "Framer", "Miro", "UserTesting",
      "Hotjar", "Google Analytics", "Crazy Egg"
    ],
    process: [
      {
        step: 1,
        title: "Research & Discovery",
        description:
          "Conduct user interviews, analyze competitors, and define user personas and journey maps.",
      },
      {
        step: 2,
        title: "Design Strategy",
        description:
          "Create information architecture, user flows, and wireframes to establish design foundation.",
      },
      {
        step: 3,
        title: "Visual Design & Prototyping",
        description:
          "Develop high-fidelity designs, interactive prototypes, and design systems for consistency.",
      },
      {
        step: 4,
        title: "Testing & Iteration",
        description:
          "Conduct usability testing, gather feedback, and iterate designs for optimal user experience.",
      },
    ],
    relatedServices: ["ux-research", "visual-design", "design-systems"],
  },

  // DevOps & Automation
  "devops-automation": {
    title: "DevOps & Automation Services",
    category: "Cloud & DevOps",
    icon: "⚙️",
    description: "Streamline development and deployment with DevOps practices and automation solutions.",
    longDescription:
      "Our DevOps & Automation services implement continuous integration, continuous delivery, and infrastructure automation to accelerate development cycles, improve code quality, and ensure reliable deployments. We help organizations achieve faster time-to-market, higher reliability, and better collaboration between development and operations teams.",
    features: [
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (IaC)",
      "Container Orchestration",
      "Automated Testing & Quality Gates",
      "Monitoring & Logging Solutions",
      "Security Integration (DevSecOps)",
      "Performance Optimization",
      "Release Management Automation",
    ],
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "ELK Stack"],
    process: [
      {
        step: 1,
        title: "DevOps Assessment & Planning",
        description:
          "Assess current development processes, identify automation opportunities, and design DevOps strategy.",
      },
      {
        step: 2,
        title: "Infrastructure & Pipeline Setup",
        description: "Implement CI/CD pipelines, configure infrastructure automation, and set up monitoring solutions.",
      },
      {
        step: 3,
        title: "Integration & Testing",
        description:
          "Integrate security and quality gates, implement automated testing, and validate deployment processes.",
      },
      {
        step: 4,
        title: "Optimization & Maintenance",
        description:
          "Optimize performance, monitor system health, and provide ongoing DevOps support and improvements.",
      },
    ],
    relatedServices: ["ci-cd-pipeline", "infrastructure-automation", "cloud-monitoring"],
  },

  // AI-Powered Solutions
  "generative-ai": {
    title: "Generative AI Solutions",
    category: "AI & Machine Learning",
    icon: "✨",
    description: "Harness the power of generative AI for content creation, automation, and intelligent business solutions.",
    longDescription:
      "Our Generative AI solutions leverage cutting-edge AI models to create content, automate processes, and solve complex business challenges. From AI-powered content generation and creative design to intelligent automation and predictive systems, we help businesses unlock new possibilities with generative AI technology.",
    features: [
      "AI Content Generation",
      "Creative Design Automation",
      "Intelligent Document Processing",
      "Code Generation & Assistance",
      "AI-Powered Marketing Tools",
      "Automated Report Generation",
      "Smart Content Personalization",
      "AI-Assisted Product Design",
    ],
    technologies: [
      "OpenAI GPT", "DALL-E", "Stable Diffusion",
      "Hugging Face", "LangChain", "Pinecone",
      "AWS Bedrock", "Google Gemini"
    ],
    process: [
      {
        step: 1,
        title: "AI Opportunity Assessment",
        description:
          "Identify business processes that can benefit from generative AI and assess technical feasibility.",
      },
      {
        step: 2,
        title: "Model Selection & Customization",
        description:
          "Choose appropriate AI models, customize for your use case, and integrate with existing systems.",
      },
      {
        step: 3,
        title: "Implementation & Training",
        description:
          "Develop AI-powered solutions, train models with your data, and ensure reliable performance.",
      },
      {
        step: 4,
        title: "Deployment & Optimization",
        description:
          "Deploy AI solutions, monitor performance, and continuously optimize for better results.",
      },
    ],
    relatedServices: ["ai-automation", "content-generation", "intelligent-systems"],
  },

  "robotic-process-automation": {
    title: "Robotic Process Automation (RPA)",
    category: "Automation",
    icon: "🤖",
    description: "Automate repetitive business processes with intelligent RPA solutions for increased efficiency and accuracy.",
    longDescription:
      "Our Robotic Process Automation services help businesses automate repetitive, rule-based tasks using software robots. Combined with AI and machine learning, our RPA solutions can handle complex decision-making processes, extract data from unstructured sources, and integrate with existing systems to dramatically improve operational efficiency and reduce costs.",
    features: [
      "Process Discovery & Analysis",
      "Intelligent Document Processing",
      "Workflow Automation",
      "API Integration & Orchestration",
      "Cognitive Automation",
      "Exception Handling",
      "Scalability & Monitoring",
      "Compliance & Security",
    ],
    technologies: [
      "UiPath", "Automation Anywhere", "Microsoft Power Automate",
      "Python", "Computer Vision", "OCR", "NLP",
      "API Integration", "Database Connectors"
    ],
    process: [
      {
        step: 1,
        title: "Process Assessment",
        description:
          "Analyze existing workflows, identify automation opportunities, and prioritize processes for RPA implementation.",
      },
      {
        step: 2,
        title: "RPA Design & Development",
        description:
          "Design automation workflows, develop RPA bots, and implement intelligent decision-making capabilities.",
      },
      {
        step: 3,
        title: "Testing & Integration",
        description:
          "Test RPA solutions in controlled environments, integrate with existing systems, and validate performance.",
      },
      {
        step: 4,
        title: "Deployment & Management",
        description:
          "Deploy RPA solutions to production, monitor performance, and provide ongoing management and optimization.",
      },
    ],
    relatedServices: ["business-automation", "ai-integration", "workflow-optimization"],
  },

  "predictive-analytics": {
    title: "Predictive Analytics Solutions",
    category: "AI & Machine Learning",
    icon: "📊",
    description: "Transform your data into actionable insights with advanced predictive analytics and forecasting models.",
    longDescription:
      "Our Predictive Analytics solutions help businesses make data-driven decisions with advanced forecasting and insights. We build sophisticated models that analyze historical data, identify patterns, and predict future outcomes. From customer behavior prediction to demand forecasting and risk assessment, our solutions provide the intelligence needed for strategic decision-making.",
    features: [
      "Data Analysis & Preparation",
      "Predictive Modeling",
      "Customer Behavior Prediction",
      "Demand Forecasting",
      "Risk Assessment Models",
      "Real-time Analytics",
      "Interactive Dashboards",
      "Automated Reporting",
    ],
    technologies: [
      "Python", "R", "SQL", "Tableau", "Power BI",
      "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
      "Apache Spark", "Hadoop", "AWS SageMaker"
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment & Strategy",
        description:
          "Evaluate data quality, identify predictive opportunities, and develop analytics strategy aligned with business goals.",
      },
      {
        step: 2,
        title: "Model Development",
        description:
          "Build predictive models using statistical methods and machine learning algorithms tailored to your data.",
      },
      {
        step: 3,
        title: "Validation & Testing",
        description:
          "Validate model accuracy, conduct back-testing, and ensure reliability across different scenarios.",
      },
      {
        step: 4,
        title: "Deployment & Insights",
        description:
          "Deploy models to production, create interactive dashboards, and provide actionable business insights.",
      },
    ],
    relatedServices: ["data-analytics", "machine-learning", "business-intelligence"],
  },

  // Industry-Specific Solutions
  "healthcare-solutions": {
    title: "Healthcare Technology Solutions",
    category: "Industry Solutions",
    icon: "🏥",
    description: "Transform healthcare delivery with secure, compliant technology solutions for medical practices and healthcare organizations.",
    longDescription:
      "Our Healthcare Technology Solutions are designed specifically for the healthcare industry's unique requirements. We build HIPAA-compliant systems that improve patient care, streamline operations, and ensure regulatory compliance. From telemedicine platforms to electronic health records and medical imaging solutions, we deliver technology that enhances healthcare outcomes.",
    features: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Medical Imaging Solutions",
      "Patient Management Systems",
      "HIPAA Compliance Solutions",
      "Medical Device Integration",
      "Healthcare Analytics",
      "Appointment Scheduling Systems",
    ],
    technologies: [
      "React.js", "Node.js", "Python", "PostgreSQL",
      "AWS Health", "HIPAA Compliance Tools",
      "Medical APIs", "Secure Messaging",
      "Blockchain for Health Data", "AI Diagnostics"
    ],
    process: [
      {
        step: 1,
        title: "Healthcare Requirements Analysis",
        description:
          "Understand healthcare workflows, regulatory requirements, and integration needs for medical systems.",
      },
      {
        step: 2,
        title: "Compliance & Security Design",
        description:
          "Design HIPAA-compliant architecture, implement security measures, and ensure data privacy protection.",
      },
      {
        step: 3,
        title: "Healthcare Solution Development",
        description:
          "Build medical applications with specialized features, integrate with healthcare systems, and ensure usability.",
      },
      {
        step: 4,
        title: "Validation & Deployment",
        description:
          "Conduct medical validation, ensure regulatory compliance, and deploy with comprehensive training and support.",
      },
    ],
    relatedServices: ["telemedicine", "healthcare-compliance", "medical-software"],
  },

  "fintech-solutions": {
    title: "FinTech & Banking Solutions",
    category: "Industry Solutions",
    icon: "💰",
    description: "Build secure, scalable financial technology solutions with advanced security and regulatory compliance.",
    longDescription:
      "Our FinTech & Banking Solutions deliver secure, compliant financial technology platforms that meet the highest standards of security and regulatory requirements. From payment processing systems to investment platforms and banking applications, we build solutions that financial institutions and fintech startups trust for their most critical operations.",
    features: [
      "Payment Processing Systems",
      "Digital Banking Platforms",
      "Investment & Trading Platforms",
      "Cryptocurrency Solutions",
      "Regulatory Compliance Systems",
      "Fraud Detection & Prevention",
      "Risk Management Tools",
      "Financial Analytics",
    ],
    technologies: [
      "React.js", "Node.js", "Python", "Java",
      "PostgreSQL", "MongoDB", "Redis", "AWS",
      "PCI DSS Compliance", "Blockchain", "AI Security",
      "Real-time Processing", "Microservices"
    ],
    process: [
      {
        step: 1,
        title: "Financial Requirements Analysis",
        description:
          "Analyze financial workflows, regulatory requirements, and security standards for fintech solutions.",
      },
      {
        step: 2,
        title: "Security & Compliance Architecture",
        description:
          "Design secure architecture, implement encryption, and ensure compliance with financial regulations.",
      },
      {
        step: 3,
        title: "FinTech Development",
        description:
          "Build financial applications with real-time processing, secure transactions, and advanced analytics.",
      },
      {
        step: 4,
        title: "Security Testing & Deployment",
        description:
          "Conduct security audits, penetration testing, and deploy with comprehensive monitoring and support.",
      },
    ],
    relatedServices: ["payment-systems", "blockchain-finance", "regulatory-compliance"],
  },

  "retail-ecommerce": {
    title: "Retail & E-commerce Solutions",
    category: "Industry Solutions",
    icon: "🛒",
    description: "Create engaging e-commerce experiences with advanced retail technology for increased sales and customer satisfaction.",
    longDescription:
      "Our Retail & E-commerce Solutions help businesses create compelling online shopping experiences that drive conversions and customer loyalty. From custom e-commerce platforms to inventory management systems and customer analytics, we build retail technology that scales with your business and delights your customers.",
    features: [
      "Custom E-commerce Platforms",
      "Inventory Management Systems",
      "Customer Analytics & Insights",
      "Personalized Shopping Experiences",
      "Multi-channel Retail Solutions",
      "Loyalty Program Platforms",
      "Order Management Systems",
      "Mobile Commerce Apps",
    ],
    technologies: [
      "React.js", "Next.js", "Node.js", "Python",
      "MongoDB", "PostgreSQL", "Redis", "AWS",
      "Stripe", "PayPal", "Shopify API", "BigCommerce",
      "Analytics Tools", "AI Personalization"
    ],
    process: [
      {
        step: 1,
        title: "Retail Strategy & Analysis",
        description:
          "Analyze retail requirements, customer behavior, and market trends to design optimal e-commerce solutions.",
      },
      {
        step: 2,
        title: "E-commerce Architecture",
        description:
          "Design scalable platform architecture, payment integration, and customer experience flows.",
      },
      {
        step: 3,
        title: "Platform Development",
        description:
          "Build e-commerce platform with product catalogs, shopping carts, and secure payment processing.",
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description:
          "Deploy platform, implement analytics, and continuously optimize for conversions and user experience.",
      },
    ],
    relatedServices: ["ecommerce-platform", "retail-analytics", "mobile-commerce"],
  },
}

// Helper function to get service by slug
export function getServiceBySlug(slug) {
  return servicesData[slug] || null
}

// Helper function to get all service slugs
export function getAllServiceSlugs() {
  return Object.keys(servicesData)
}

// Helper function to get related services
export function getRelatedServices(currentSlug) {
  const currentService = servicesData[currentSlug]
  if (!currentService || !currentService.relatedServices) {
    return []
  }

  return currentService.relatedServices
    .map((slug) => ({
      slug,
      ...servicesData[slug],
    }))
    .filter((service) => service.title) // Filter out any undefined services
}

// Helper function to get services by category
export function getServicesByCategory(category) {
  return Object.entries(servicesData)
    .filter(([slug, service]) => service.category === category)
    .map(([slug, service]) => ({ slug, ...service }))
}

// Helper function to get all categories
export function getAllCategories() {
  const categories = [...new Set(Object.values(servicesData).map((service) => service.category))]
  return categories.sort()
}