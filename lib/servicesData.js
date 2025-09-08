// Comprehensive Services data structure - Based on Nimap Infotech research
export const servicesData = {
  // Frontend Development Services
  "react-development": {
    title: "React Development Services",
    category: "Web Development",
    icon: "⚛️",
    description: "Build modern, scalable web applications with React.js using cutting-edge tools and best practices.",
    longDescription:
      "Our React development services focus on creating high-performance, interactive user interfaces that provide exceptional user experiences. We leverage the latest React ecosystem including hooks, context API, and modern state management solutions to build scalable applications.",
    features: [
      "Custom React Application Development",
      "React Component Library Creation",
      "React Native Mobile Integration",
      "Server-Side Rendering (SSR) with Next.js",
      "Performance Optimization & Code Splitting",
      "React Testing with Jest & React Testing Library",
      "Redux/Context API State Management",
      "Progressive Web App (PWA) Development",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Redux",
      "TypeScript",
      "Jest",
      "React Router",
      "Material-UI",
      "Styled Components",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$2,999",
        duration: "2-4 weeks",
        features: [
          "Simple React web application",
          "Up to 5 components",
          "Basic state management",
          "Responsive design",
          "Basic testing setup",
        ],
      },
      professional: {
        name: "Professional",
        price: "$7,999",
        duration: "6-10 weeks",
        features: [
          "Complex React application",
          "Advanced state management",
          "API integration",
          "Performance optimization",
          "Comprehensive testing",
          "Deployment setup",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        features: [
          "Large-scale React ecosystem",
          "Microservices integration",
          "Advanced security implementation",
          "Scalability optimization",
          "24/7 support & maintenance",
          "Custom training & documentation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description:
          "Deep dive into your business requirements, user stories, and technical specifications to create a comprehensive development roadmap.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Design scalable React architecture with component hierarchy, state management strategy, and integration patterns.",
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "Agile development approach with continuous integration, automated testing, and regular code reviews.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "Production deployment with performance monitoring, maintenance support, and ongoing optimization.",
      },
    ],
    relatedServices: ["vue-development", "angular-development", "nextjs-development"],
  },

  "angular-development": {
    title: "Angular Development Services",
    category: "Web Development",
    icon: "🅰️",
    description: "Build enterprise-grade applications with Angular framework for scalable and maintainable solutions.",
    longDescription:
      "Our Angular development services deliver robust, enterprise-ready applications using Google's powerful framework. We create complex web applications with TypeScript, offering superior performance, maintainability, and scalability for large-scale business solutions.",
    features: [
      "Custom Angular Application Development",
      "Angular CLI & TypeScript Implementation",
      "Single Page Application (SPA) Development",
      "Progressive Web App (PWA) with Angular",
      "Angular Material UI Components",
      "RxJS Reactive Programming",
      "Angular Universal for SSR",
      "Enterprise Angular Architecture",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "Angular Material", "NgRx", "Angular CLI", "Jasmine", "Protractor"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,499",
        duration: "3-5 weeks",
        features: [
          "Basic Angular application",
          "Component-based architecture",
          "TypeScript implementation",
          "Responsive UI design",
          "Basic routing setup",
        ],
      },
      professional: {
        name: "Professional",
        price: "$8,999",
        duration: "8-12 weeks",
        features: [
          "Complex Angular application",
          "Advanced state management",
          "API integration & services",
          "Performance optimization",
          "Comprehensive testing suite",
          "PWA capabilities",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise Angular platform",
          "Microservices architecture",
          "Advanced security features",
          "Multi-language support",
          "24/7 technical support",
          "Team training & documentation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Project Architecture Planning",
        description:
          "Design enterprise-grade Angular architecture with TypeScript, component structure, and service layer planning.",
      },
      {
        step: 2,
        title: "Angular Development Setup",
        description:
          "Establish Angular CLI environment, implement TypeScript configurations, and set up development workflow.",
      },
      {
        step: 3,
        title: "Agile Development & Testing",
        description:
          "Iterative development with Angular best practices, automated testing, and continuous integration.",
      },
      {
        step: 4,
        title: "Deployment & Maintenance",
        description: "Production deployment with Angular Universal SSR, performance monitoring, and ongoing support.",
      },
    ],
    relatedServices: ["react-development", "vue-development", "typescript-development"],
  },

  "vue-development": {
    title: "Vue.js Development Services",
    category: "Web Development",
    icon: "🚀",
    description: "Create dynamic, progressive web applications with Vue.js framework and modern development practices.",
    longDescription:
      "Our Vue.js development expertise spans from simple single-page applications to complex enterprise solutions. We utilize Vue's progressive framework capabilities, excellent performance, and developer-friendly ecosystem to deliver outstanding web applications.",
    features: [
      "Custom Vue.js Application Development",
      "Vue Component Architecture Design",
      "Vuex State Management Implementation",
      "Vue Router for Single Page Applications",
      "Nuxt.js for Server-Side Rendering",
      "Vue CLI & Vite Build Optimization",
      "Vue Testing with Vue Test Utils",
      "Progressive Web App Development",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Vuex", "Vue Router", "TypeScript", "Vite", "Vuetify", "Quasar"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$2,799",
        duration: "2-4 weeks",
        features: [
          "Basic Vue.js application",
          "Component-based architecture",
          "Simple routing setup",
          "Responsive UI design",
          "Basic state management",
        ],
      },
      professional: {
        name: "Professional",
        price: "$7,499",
        duration: "6-10 weeks",
        features: [
          "Advanced Vue.js application",
          "Complex state management with Vuex",
          "API integration & data handling",
          "Performance optimization",
          "Testing framework setup",
          "Production deployment",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "12+ weeks",
        features: [
          "Enterprise-scale Vue ecosystem",
          "Microservices architecture",
          "Advanced security features",
          "Multi-language support",
          "24/7 technical support",
          "Team training & documentation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Project Planning",
        description:
          "Analyze requirements and create detailed project specifications with Vue.js architecture recommendations.",
      },
      {
        step: 2,
        title: "Vue Architecture Setup",
        description:
          "Establish Vue.js project structure, component hierarchy, and development environment configuration.",
      },
      {
        step: 3,
        title: "Agile Development",
        description:
          "Iterative development with regular demos, testing integration, and continuous feedback incorporation.",
      },
      {
        step: 4,
        title: "Launch & Maintenance",
        description:
          "Production deployment with performance monitoring and ongoing support for optimal application performance.",
      },
    ],
    relatedServices: ["react-development", "angular-development", "nuxt-development"],
  },

  // Backend Development Services
  "nodejs-development": {
    title: "Node.js Development Services",
    category: "Web Development",
    icon: "🟢",
    description:
      "Build scalable server-side applications and APIs with Node.js for high-performance backend solutions.",
    longDescription:
      "Our Node.js development services leverage JavaScript's server-side capabilities to create fast, scalable network applications. We specialize in building RESTful APIs, real-time applications, and microservices architectures using Node.js ecosystem.",
    features: [
      "RESTful API Development",
      "Real-time Application Development",
      "Microservices Architecture",
      "Express.js Framework Implementation",
      "Database Integration (MongoDB, PostgreSQL)",
      "Authentication & Authorization Systems",
      "WebSocket & Socket.io Integration",
      "Performance Optimization & Scaling",
    ],
    technologies: ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL", "Redis", "Socket.io", "JWT"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,499",
        duration: "3-5 weeks",
        features: [
          "Basic Node.js API development",
          "Database integration",
          "Authentication system",
          "Basic testing setup",
          "Documentation",
        ],
      },
      professional: {
        name: "Professional",
        price: "$8,999",
        duration: "8-12 weeks",
        features: [
          "Complex backend architecture",
          "Multiple database integration",
          "Advanced security implementation",
          "Performance optimization",
          "Comprehensive testing",
          "CI/CD pipeline setup",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Microservices architecture",
          "High-availability setup",
          "Advanced monitoring & logging",
          "Auto-scaling configuration",
          "24/7 support & maintenance",
          "Team training & handover",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "API Design & Planning",
        description:
          "Design RESTful API architecture, database schema, and integration requirements for optimal performance.",
      },
      {
        step: 2,
        title: "Backend Development",
        description: "Implement Node.js backend with proper error handling, validation, and security best practices.",
      },
      {
        step: 3,
        title: "Testing & Integration",
        description: "Comprehensive testing including unit tests, integration tests, and API endpoint validation.",
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description: "Production deployment with monitoring setup, performance tracking, and maintenance support.",
      },
    ],
    relatedServices: ["python-development", "express-api", "microservices-architecture"],
  },

  "python-development": {
    title: "Python Development Services",
    category: "Web Development",
    icon: "🐍",
    description: "Develop versatile applications with Python for web development, data science, and AI solutions.",
    longDescription:
      "Our Python development services leverage the language's versatility and extensive ecosystem to create robust web applications, data science solutions, and AI-powered systems. We use modern Python frameworks and best practices for scalable, maintainable code.",
    features: [
      "Django Web Framework Development",
      "Flask Microservices Development",
      "FastAPI High-Performance APIs",
      "Data Science & Analytics Solutions",
      "Machine Learning Model Development",
      "Web Scraping & Automation",
      "Database Integration & ORM",
      "RESTful API Development",
    ],
    technologies: ["Python", "Django", "Flask", "FastAPI", "SQLAlchemy", "Pandas", "NumPy", "Celery"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,299",
        duration: "3-5 weeks",
        features: [
          "Basic Python web application",
          "Django or Flask framework",
          "Database integration",
          "Basic API development",
          "Testing setup",
        ],
      },
      professional: {
        name: "Professional",
        price: "$8,499",
        duration: "8-12 weeks",
        features: [
          "Advanced Python application",
          "Complex data processing",
          "API integration & automation",
          "Performance optimization",
          "Comprehensive testing",
          "Deployment configuration",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise Python platform",
          "Microservices architecture",
          "Advanced data analytics",
          "ML model integration",
          "24/7 support & maintenance",
          "Custom training & documentation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Requirements & Architecture",
        description:
          "Analyze project requirements and design Python application architecture with appropriate frameworks.",
      },
      {
        step: 2,
        title: "Python Development",
        description:
          "Implement Python application with clean code practices, proper structure, and comprehensive documentation.",
      },
      {
        step: 3,
        title: "Testing & Optimization",
        description: "Thorough testing with pytest, performance optimization, and code quality assurance.",
      },
      {
        step: 4,
        title: "Deployment & Support",
        description: "Production deployment with monitoring, continuous integration, and ongoing maintenance support.",
      },
    ],
    relatedServices: ["django-development", "flask-development", "data-science"],
  },

  "java-development": {
    title: "Java Development Services",
    category: "Web Development",
    icon: "☕",
    description: "Build robust, enterprise-grade applications with Java for scalable and secure business solutions.",
    longDescription:
      "Our Java development services deliver enterprise-ready applications using Java's platform independence and robust ecosystem. We create scalable, secure, and high-performance applications for complex business requirements using Spring framework and modern Java technologies.",
    features: [
      "Enterprise Java Application Development",
      "Spring Framework Implementation",
      "Spring Boot Microservices",
      "Hibernate ORM Integration",
      "RESTful Web Services Development",
      "Java EE Enterprise Solutions",
      "Maven & Gradle Build Management",
      "JUnit Testing Framework",
    ],
    technologies: ["Java", "Spring Boot", "Spring Framework", "Hibernate", "Maven", "Gradle", "JUnit", "Apache Kafka"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,799",
        duration: "4-6 weeks",
        features: [
          "Basic Java application",
          "Spring Boot framework",
          "Database integration",
          "REST API development",
          "Basic security implementation",
        ],
      },
      professional: {
        name: "Professional",
        price: "$9,499",
        duration: "10-14 weeks",
        features: [
          "Enterprise Java application",
          "Microservices architecture",
          "Advanced security features",
          "Performance optimization",
          "Comprehensive testing",
          "CI/CD pipeline setup",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "18+ weeks",
        features: [
          "Large-scale Java ecosystem",
          "High-availability architecture",
          "Advanced monitoring & logging",
          "Scalability optimization",
          "24/7 support & maintenance",
          "Team training & consultation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Enterprise Architecture Design",
        description:
          "Design robust Java architecture with Spring framework, microservices pattern, and scalability considerations.",
      },
      {
        step: 2,
        title: "Java Development",
        description: "Implement Java application with Spring Boot, integrate databases, and develop RESTful services.",
      },
      {
        step: 3,
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing with JUnit, integration testing, and code quality analysis with SonarQube.",
      },
      {
        step: 4,
        title: "Production Deployment",
        description: "Deploy to production environments with monitoring, performance tuning, and maintenance support.",
      },
    ],
    relatedServices: ["spring-boot", "microservices-architecture", "enterprise-solutions"],
  },

  "dotnet-development": {
    title: ".NET Development Services",
    category: "Web Development",
    icon: "🟣",
    description:
      "Create powerful enterprise applications with .NET framework for Windows and cross-platform solutions.",
    longDescription:
      "Our .NET development services leverage Microsoft's comprehensive platform to build scalable, secure enterprise applications. We use .NET Core, ASP.NET, and modern C# to create cross-platform solutions with excellent performance and maintainability.",
    features: [
      "ASP.NET Core Web Application Development",
      "MVC & Web API Development",
      "Entity Framework Database Integration",
      "Blazor Frontend Development",
      "Microservices with .NET Core",
      "Azure Cloud Integration",
      "WPF Desktop Application Development",
      "Cross-Platform .NET Solutions",
    ],
    technologies: [".NET Core", "ASP.NET", "C#", "Entity Framework", "Blazor", "Azure", "SQL Server", "WPF"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,999",
        duration: "4-6 weeks",
        features: [
          "Basic .NET web application",
          "ASP.NET Core framework",
          "Database integration",
          "Web API development",
          "Basic authentication",
        ],
      },
      professional: {
        name: "Professional",
        price: "$9,999",
        duration: "10-16 weeks",
        features: [
          "Advanced .NET application",
          "Microservices architecture",
          "Azure cloud integration",
          "Advanced security features",
          "Performance optimization",
          "Comprehensive testing",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "20+ weeks",
        features: [
          "Enterprise .NET platform",
          "Multi-tier architecture",
          "Advanced Azure services",
          "High-availability setup",
          "24/7 support & maintenance",
          "Custom training & migration",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: ".NET Architecture Planning",
        description:
          "Design .NET application architecture with appropriate frameworks, cloud integration, and scalability planning.",
      },
      {
        step: 2,
        title: "Development & Integration",
        description:
          "Implement .NET application with clean architecture, integrate with databases and external services.",
      },
      {
        step: 3,
        title: "Testing & Optimization",
        description: "Comprehensive testing with unit tests, integration tests, and performance optimization.",
      },
      {
        step: 4,
        title: "Azure Deployment",
        description: "Deploy to Azure cloud platform with monitoring, scaling configuration, and maintenance support.",
      },
    ],
    relatedServices: ["azure-development", "csharp-development", "enterprise-solutions"],
  },

  // Mobile Development Services
  "react-native": {
    title: "React Native App Development",
    category: "Mobile Development",
    icon: "📱",
    description: "Build cross-platform mobile applications with React Native for iOS and Android platforms.",
    longDescription:
      "Our React Native development services enable you to reach both iOS and Android users with a single codebase. We create native-quality mobile applications that provide excellent performance and user experience across platforms.",
    features: [
      "Cross-Platform Mobile Development",
      "Native Module Integration",
      "Redux State Management",
      "Push Notifications Implementation",
      "Offline Data Synchronization",
      "App Store & Play Store Deployment",
      "Performance Optimization",
      "Third-party API Integration",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Redux",
      "React Navigation",
      "AsyncStorage",
      "Firebase",
      "CodePush",
      "Flipper",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$4,999",
        duration: "4-6 weeks",
        features: [
          "Basic cross-platform app",
          "Essential UI components",
          "Basic navigation",
          "Simple state management",
          "App store submission",
        ],
      },
      professional: {
        name: "Professional",
        price: "$12,999",
        duration: "10-14 weeks",
        features: [
          "Feature-rich mobile application",
          "Advanced UI/UX design",
          "Backend API integration",
          "Push notifications",
          "Performance optimization",
          "Comprehensive testing",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise-grade mobile solution",
          "Advanced security features",
          "Offline capabilities",
          "Analytics integration",
          "24/7 support & maintenance",
          "Custom feature development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Mobile Strategy & Design",
        description:
          "Define mobile strategy, create wireframes, and design intuitive user interfaces for optimal mobile experience.",
      },
      {
        step: 2,
        title: "Cross-Platform Development",
        description:
          "Develop React Native application with shared codebase while optimizing for platform-specific features.",
      },
      {
        step: 3,
        title: "Testing & Optimization",
        description:
          "Comprehensive testing on multiple devices, performance optimization, and platform-specific validations.",
      },
      {
        step: 4,
        title: "App Store Launch",
        description: "App store submission, launch support, and post-launch monitoring with performance analytics.",
      },
    ],
    relatedServices: ["flutter-development", "ios-development", "android-development"],
  },

  "flutter-development": {
    title: "Flutter App Development",
    category: "Mobile Development",
    icon: "🦋",
    description: "Create beautiful native applications for mobile, web, and desktop with Flutter framework.",
    longDescription:
      "Our Flutter development services deliver high-performance, visually appealing applications for multiple platforms using a single codebase. We leverage Flutter's powerful UI toolkit and Dart programming language to create native-quality experiences.",
    features: [
      "Cross-Platform Flutter Development",
      "Custom Widget Development",
      "State Management with Provider/Riverpod",
      "Native Platform Integration",
      "Firebase Backend Integration",
      "Offline Data Storage",
      "Performance Optimization",
      "App Store & Play Store Publishing",
    ],
    technologies: ["Flutter", "Dart", "Provider", "Riverpod", "Firebase", "SQLite", "Dio", "GetX"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$4,499",
        duration: "4-6 weeks",
        features: [
          "Basic Flutter application",
          "Custom UI components",
          "Simple state management",
          "Platform-specific features",
          "App store submission",
        ],
      },
      professional: {
        name: "Professional",
        price: "$11,999",
        duration: "10-14 weeks",
        features: [
          "Advanced Flutter application",
          "Complex UI/UX design",
          "Backend integration",
          "Advanced state management",
          "Performance optimization",
          "Comprehensive testing",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise Flutter platform",
          "Advanced security features",
          "Offline-first architecture",
          "Analytics & monitoring",
          "24/7 support & maintenance",
          "Custom plugin development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Flutter Strategy & Design",
        description: "Plan Flutter architecture, design custom widgets, and create platform-specific user experiences.",
      },
      {
        step: 2,
        title: "Flutter Development",
        description: "Implement Flutter application with Dart, integrate native features, and optimize performance.",
      },
      {
        step: 3,
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing across platforms, widget testing, and performance optimization.",
      },
      {
        step: 4,
        title: "Multi-Platform Deployment",
        description: "Deploy to multiple platforms, app store optimization, and post-launch support.",
      },
    ],
    relatedServices: ["react-native", "ios-development", "android-development"],
  },

  "ios-development": {
    title: "iOS App Development",
    category: "Mobile Development",
    icon: "🍎",
    description: "Build premium native iOS applications with Swift for iPhone and iPad platforms.",
    longDescription:
      "Our iOS development services create high-quality native applications specifically designed for Apple's ecosystem. We use Swift and latest iOS frameworks to deliver superior performance, security, and user experience that iOS users expect.",
    features: [
      "Native iOS App Development with Swift",
      "iPhone & iPad Application Design",
      "Core Data & CloudKit Integration",
      "Apple Pay & In-App Purchases",
      "Push Notifications & Background Tasks",
      "Apple Watch & TV App Development",
      "App Store Optimization & Submission",
      "iOS Security & Performance Optimization",
    ],
    technologies: ["Swift", "Xcode", "UIKit", "SwiftUI", "Core Data", "CloudKit", "Apple Pay", "TestFlight"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$5,999",
        duration: "5-8 weeks",
        features: [
          "Basic iOS application",
          "Swift development",
          "iPhone compatibility",
          "App Store submission",
          "Basic testing",
        ],
      },
      professional: {
        name: "Professional",
        price: "$14,999",
        duration: "12-16 weeks",
        features: [
          "Advanced iOS application",
          "iPhone & iPad support",
          "Complex UI/UX design",
          "Backend integration",
          "Performance optimization",
          "Comprehensive testing",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "18+ weeks",
        features: [
          "Enterprise iOS solution",
          "Advanced security features",
          "Apple ecosystem integration",
          "Enterprise app distribution",
          "24/7 support & maintenance",
          "Custom framework development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "iOS Strategy & Planning",
        description: "Define iOS app strategy, design user experience, and plan Apple ecosystem integration.",
      },
      {
        step: 2,
        title: "Swift Development",
        description: "Implement native iOS application with Swift, integrate Apple services, and optimize performance.",
      },
      {
        step: 3,
        title: "iOS Testing & Optimization",
        description:
          "Comprehensive testing on iOS devices, performance optimization, and App Store guidelines compliance.",
      },
      {
        step: 4,
        title: "App Store Launch",
        description: "App Store submission, launch strategy, and post-launch monitoring with analytics integration.",
      },
    ],
    relatedServices: ["swift-development", "apple-ecosystem", "mobile-app-design"],
  },

  "android-development": {
    title: "Android App Development",
    category: "Mobile Development",
    icon: "🤖",
    description: "Develop powerful native Android applications with Kotlin for Google Play Store.",
    longDescription:
      "Our Android development services create robust native applications for the Android ecosystem. We use Kotlin and modern Android frameworks to build scalable, secure, and performance-optimized applications for diverse Android devices.",
    features: [
      "Native Android App Development with Kotlin",
      "Material Design Implementation",
      "Android Jetpack Components",
      "Google Play Services Integration",
      "Firebase Backend Integration",
      "Room Database & Data Persistence",
      "Google Play Store Optimization",
      "Android Security & Performance Tuning",
    ],
    technologies: [
      "Kotlin",
      "Android Studio",
      "Jetpack Compose",
      "Room",
      "Firebase",
      "Retrofit",
      "Material Design",
      "Dagger",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$5,499",
        duration: "5-8 weeks",
        features: [
          "Basic Android application",
          "Kotlin development",
          "Material Design UI",
          "Play Store submission",
          "Basic testing",
        ],
      },
      professional: {
        name: "Professional",
        price: "$13,999",
        duration: "12-16 weeks",
        features: [
          "Advanced Android application",
          "Complex UI with Jetpack Compose",
          "Backend API integration",
          "Advanced features",
          "Performance optimization",
          "Comprehensive testing",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "18+ weeks",
        features: [
          "Enterprise Android solution",
          "Advanced security implementation",
          "Google ecosystem integration",
          "Enterprise app management",
          "24/7 support & maintenance",
          "Custom SDK development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Android Strategy & Design",
        description: "Plan Android app architecture, design Material UI, and define Google services integration.",
      },
      {
        step: 2,
        title: "Kotlin Development",
        description:
          "Implement native Android application with Kotlin, integrate Google services, and optimize for various devices.",
      },
      {
        step: 3,
        title: "Android Testing & Optimization",
        description:
          "Comprehensive testing across Android devices, performance optimization, and Play Store compliance.",
      },
      {
        step: 4,
        title: "Play Store Launch",
        description: "Google Play Store submission, launch optimization, and post-launch analytics integration.",
      },
    ],
    relatedServices: ["kotlin-development", "google-ecosystem", "mobile-app-design"],
  },

  // AI & Machine Learning Services
  "custom-ai-solutions": {
    title: "Custom AI Solutions Development",
    category: "AI & Machine Learning",
    icon: "🤖",
    description:
      "Develop tailored artificial intelligence solutions to automate processes and enhance business intelligence.",
    longDescription:
      "Our custom AI solutions are designed to address specific business challenges through intelligent automation, predictive analytics, and machine learning algorithms. We create AI systems that learn from your data and continuously improve performance.",
    features: [
      "Custom Machine Learning Models",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Predictive Analytics Implementation",
      "AI Chatbot Development",
      "Automated Decision Making Systems",
      "AI Model Training & Optimization",
      "AI Integration with Existing Systems",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI GPT",
      "Hugging Face",
      "AWS AI/ML",
      "Google AI Platform",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$8,999",
        duration: "6-10 weeks",
        features: [
          "Basic AI model development",
          "Data preprocessing & analysis",
          "Simple prediction algorithms",
          "Basic integration setup",
          "Performance evaluation",
        ],
      },
      professional: {
        name: "Professional",
        price: "$24,999",
        duration: "12-20 weeks",
        features: [
          "Advanced AI solution development",
          "Multi-model architecture",
          "Complex data pipeline",
          "Advanced analytics dashboard",
          "Continuous learning setup",
          "API development",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "24+ weeks",
        features: [
          "Enterprise-scale AI platform",
          "Multi-domain AI integration",
          "Advanced security & compliance",
          "Scalable cloud infrastructure",
          "24/7 AI monitoring & support",
          "Custom training & consultation",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "AI Strategy & Data Analysis",
        description:
          "Analyze business requirements, assess data quality, and define AI strategy with measurable goals.",
      },
      {
        step: 2,
        title: "Model Development & Training",
        description:
          "Develop custom AI models, train algorithms with your data, and optimize for performance and accuracy.",
      },
      {
        step: 3,
        title: "Integration & Testing",
        description: "Integrate AI solutions with existing systems, conduct thorough testing, and validate results.",
      },
      {
        step: 4,
        title: "Deployment & Optimization",
        description:
          "Deploy AI solutions to production, monitor performance, and continuously optimize for better results.",
      },
    ],
    relatedServices: ["machine-learning", "chatbot-development", "predictive-analytics"],
  },

  "machine-learning": {
    title: "Machine Learning Development",
    category: "AI & Machine Learning",
    icon: "🧠",
    description: "Build intelligent systems with machine learning algorithms for data-driven decision making.",
    longDescription:
      "Our machine learning development services create intelligent systems that learn from data to make predictions, classifications, and recommendations. We implement advanced ML algorithms and deep learning models for various business applications.",
    features: [
      "Supervised & Unsupervised Learning",
      "Deep Learning Neural Networks",
      "Predictive Modeling & Forecasting",
      "Classification & Regression Models",
      "Recommendation Systems",
      "Anomaly Detection Systems",
      "ML Model Deployment & Scaling",
      "Data Pipeline & Feature Engineering",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MLflow", "Docker", "Kubernetes"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$7,999",
        duration: "6-8 weeks",
        features: [
          "Basic ML model development",
          "Data analysis & preprocessing",
          "Simple prediction models",
          "Model evaluation metrics",
          "Basic deployment setup",
        ],
      },
      professional: {
        name: "Professional",
        price: "$19,999",
        duration: "12-16 weeks",
        features: [
          "Advanced ML algorithms",
          "Deep learning models",
          "Feature engineering",
          "Model optimization",
          "Production deployment",
          "Performance monitoring",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "20+ weeks",
        features: [
          "Enterprise ML platform",
          "Multi-model ensemble",
          "Real-time inference",
          "Scalable infrastructure",
          "24/7 monitoring & support",
          "Custom research & development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Data Analysis & Preparation",
        description: "Analyze data quality, perform feature engineering, and prepare datasets for ML model training.",
      },
      {
        step: 2,
        title: "Model Development & Training",
        description: "Develop and train ML models, tune hyperparameters, and optimize for performance metrics.",
      },
      {
        step: 3,
        title: "Model Validation & Testing",
        description:
          "Validate model performance, conduct A/B testing, and ensure reliability across different scenarios.",
      },
      {
        step: 4,
        title: "Production Deployment",
        description:
          "Deploy ML models to production, implement monitoring, and establish continuous learning pipelines.",
      },
    ],
    relatedServices: ["data-science", "ai-automation", "predictive-analytics"],
  },

  "chatbot-development": {
    title: "AI Chatbot Development",
    category: "AI & Machine Learning",
    icon: "💬",
    description: "Create intelligent conversational AI chatbots for customer service and business automation.",
    longDescription:
      "Our AI chatbot development services create sophisticated conversational interfaces that understand natural language and provide intelligent responses. We build chatbots for customer support, sales automation, and internal business processes.",
    features: [
      "Natural Language Understanding (NLU)",
      "Multi-Platform Chatbot Deployment",
      "Voice & Text Conversation Support",
      "Integration with CRM & Business Systems",
      "Machine Learning-Powered Responses",
      "Sentiment Analysis & Intent Recognition",
      "Multi-Language Support",
      "Analytics & Conversation Insights",
    ],
    technologies: [
      "OpenAI GPT",
      "Dialogflow",
      "Microsoft Bot Framework",
      "Rasa",
      "Python",
      "Node.js",
      "WebSocket",
      "MongoDB",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$4,999",
        duration: "4-6 weeks",
        features: [
          "Basic chatbot with predefined responses",
          "Simple intent recognition",
          "Web deployment",
          "Basic analytics",
          "Documentation & training",
        ],
      },
      professional: {
        name: "Professional",
        price: "$12,999",
        duration: "8-12 weeks",
        features: [
          "Advanced AI chatbot",
          "Natural language processing",
          "Multi-platform deployment",
          "CRM integration",
          "Advanced analytics",
          "Continuous learning setup",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise chatbot platform",
          "Advanced AI capabilities",
          "Multi-language support",
          "Enterprise system integration",
          "24/7 support & maintenance",
          "Custom AI model development",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Conversational Design",
        description: "Design conversation flows, define intents and entities, and create user experience strategies.",
      },
      {
        step: 2,
        title: "AI Development & Training",
        description: "Develop NLP models, train chatbot with conversation data, and implement AI responses.",
      },
      {
        step: 3,
        title: "Integration & Testing",
        description: "Integrate with business systems, test conversation accuracy, and optimize response quality.",
      },
      {
        step: 4,
        title: "Deployment & Optimization",
        description: "Deploy across platforms, monitor conversation quality, and continuously improve AI responses.",
      },
    ],
    relatedServices: ["nlp-development", "voice-assistants", "customer-automation"],
  },

  // Cloud & DevOps Services
  "aws-development": {
    title: "AWS Cloud Development Services",
    category: "Cloud & DevOps",
    icon: "☁️",
    description: "Build scalable cloud applications and infrastructure on Amazon Web Services platform.",
    longDescription:
      "Our AWS development services help businesses leverage the full power of Amazon Web Services to build scalable, secure, and cost-effective cloud solutions. We specialize in cloud-native applications, serverless architectures, and DevOps automation.",
    features: [
      "AWS Cloud Architecture Design",
      "Serverless Application Development",
      "Container Orchestration with EKS",
      "API Gateway & Lambda Functions",
      "RDS & DynamoDB Database Solutions",
      "S3 Storage & CloudFront CDN",
      "CI/CD Pipeline with CodePipeline",
      "AWS Security & Compliance Setup",
    ],
    technologies: ["AWS Lambda", "API Gateway", "RDS", "DynamoDB", "S3", "CloudFormation", "EKS", "CodePipeline"],
    pricing: {
      starter: {
        name: "Starter",
        price: "$5,999",
        duration: "4-8 weeks",
        features: [
          "Basic AWS cloud setup",
          "Simple serverless functions",
          "Database configuration",
          "Basic security setup",
          "Monitoring & logging",
        ],
      },
      professional: {
        name: "Professional",
        price: "$15,999",
        duration: "10-16 weeks",
        features: [
          "Advanced cloud architecture",
          "Auto-scaling configuration",
          "Multi-region deployment",
          "Advanced security features",
          "Performance optimization",
          "Disaster recovery setup",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "20+ weeks",
        features: [
          "Enterprise cloud platform",
          "Multi-account AWS setup",
          "Advanced compliance features",
          "24/7 cloud monitoring",
          "Dedicated support team",
          "Cloud migration services",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Cloud Assessment & Planning",
        description:
          "Evaluate current infrastructure, design AWS architecture, and create migration strategy for optimal performance.",
      },
      {
        step: 2,
        title: "Infrastructure Setup",
        description:
          "Implement AWS services, configure security groups, and establish networking for scalable cloud infrastructure.",
      },
      {
        step: 3,
        title: "Application Development",
        description:
          "Develop cloud-native applications with AWS services integration and automated deployment pipelines.",
      },
      {
        step: 4,
        title: "Optimization & Monitoring",
        description:
          "Optimize costs and performance, implement monitoring solutions, and provide ongoing cloud management.",
      },
    ],
    relatedServices: ["azure-development", "google-cloud", "devops-automation"],
  },

  "digital-transformation": {
    title: "Digital Transformation Services",
    category: "Digital Transformation",
    icon: "🔄",
    description: "Transform your business with comprehensive digital modernization and process automation.",
    longDescription:
      "Our digital transformation services help organizations modernize their operations through advanced technology integration, process automation, and digital strategy implementation for competitive advantage and operational efficiency.",
    features: [
      "Business Process Assessment & Optimization",
      "Legacy System Modernization",
      "Cloud Migration & Adoption",
      "Workflow Automation Implementation",
      "Data Analytics & Intelligence",
      "Customer Experience Enhancement",
      "Digital Strategy Development",
      "Change Management & Training",
    ],
    technologies: [
      "Cloud Platforms",
      "AI/ML",
      "RPA Tools",
      "Analytics Platforms",
      "API Integration",
      "Microservices",
      "IoT",
      "Blockchain",
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$9,999",
        duration: "8-12 weeks",
        features: [
          "Digital readiness assessment",
          "Basic process automation",
          "Cloud migration planning",
          "Initial system modernization",
          "Training & documentation",
        ],
      },
      professional: {
        name: "Professional",
        price: "$29,999",
        duration: "16-24 weeks",
        features: [
          "Comprehensive digital strategy",
          "Advanced automation implementation",
          "Multi-system integration",
          "Analytics & BI implementation",
          "Change management support",
          "Performance optimization",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "32+ weeks",
        features: [
          "Enterprise-wide transformation",
          "Advanced technology integration",
          "Custom platform development",
          "AI & ML implementation",
          "24/7 support & maintenance",
          "Ongoing optimization & scaling",
        ],
      },
    },
    process: [
      {
        step: 1,
        title: "Digital Assessment & Strategy",
        description:
          "Assess current digital maturity, identify transformation opportunities, and develop comprehensive digital strategy.",
      },
      {
        step: 2,
        title: "Technology Implementation",
        description:
          "Implement digital solutions, modernize systems, and integrate new technologies with existing infrastructure.",
      },
      {
        step: 3,
        title: "Process Automation & Training",
        description:
          "Automate business processes, train teams on new systems, and ensure smooth transition to digital operations.",
      },
      {
        step: 4,
        title: "Optimization & Scaling",
        description:
          "Monitor performance, optimize processes, and scale digital solutions for continued business growth.",
      },
    ],
    relatedServices: ["business-automation", "cloud-migration", "ai-integration"],
  },

  "devops-automation": {
    title: "DevOps & Automation Services",
    category: "Cloud & DevOps",
    icon: "⚙️",
    description: "Streamline development and deployment with DevOps practices and automation solutions.",
    longDescription:
      "Our DevOps automation services implement continuous integration, continuous delivery, and infrastructure automation to accelerate development cycles, improve code quality, and ensure reliable deployments.",
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
    pricing: {
      starter: {
        name: "Starter",
        price: "$6,999",
        duration: "4-6 weeks",
        features: [
          "Basic CI/CD pipeline setup",
          "Container configuration",
          "Automated testing integration",
          "Basic monitoring setup",
          "Documentation & training",
        ],
      },
      professional: {
        name: "Professional",
        price: "$16,999",
        duration: "8-12 weeks",
        features: [
          "Advanced DevOps implementation",
          "Infrastructure automation",
          "Multi-environment deployment",
          "Advanced monitoring & alerting",
          "Security integration",
          "Performance optimization",
        ],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom Quote",
        duration: "16+ weeks",
        features: [
          "Enterprise DevOps platform",
          "Multi-team collaboration setup",
          "Advanced security & compliance",
          "Scalable infrastructure",
          "24/7 monitoring & support",
          "Custom automation solutions",
        ],
      },
    },
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
