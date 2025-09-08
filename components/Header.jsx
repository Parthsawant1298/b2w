"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Brain, User, LogOut, ChevronDown, ChevronRight } from "lucide-react"

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [activeServiceCategory, setActiveServiceCategory] = useState(null)
  const [servicesHoverTimeout, setServicesHoverTimeout] = useState(null)
  const [categoryHoverTimeout, setCategoryHoverTimeout] = useState(null)
  const headerRef = useRef(null)
  const profileMenuRef = useRef(null)
  const servicesDropdownRef = useRef(null)

  // Inject critical CSS for contrast override
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      html body header div.mobile-menu-container,
      html body header div.mobile-menu-container *,
      html body header div.mobile-menu-container a,
      html body header div.mobile-menu-container div,
      html body header div.mobile-menu-container span {
        background-color: #ffffff !important;
        background: #ffffff !important;
        color: #000000 !important;
      }
      html body header div.mobile-menu-container a:hover {
        background-color: #eff6ff !important;
        background: #eff6ff !important;
        color: #1e40af !important;
      }
      html body header div.mobile-menu-container .active-link {
        background-color: #eff6ff !important;
        background: #eff6ff !important;
        color: #1e40af !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  // Navigation items with updated service structure
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      categories: [
        {
          name: "Web Development",
          services: [
            { name: "React Development", slug: "react-development" },
            { name: "Vue.js Development", slug: "vue-development" },
            { name: "Angular Development", slug: "angular-development" },
            { name: "Node.js Development", slug: "nodejs-development" },
            { name: "Python Development", slug: "python-development" },
            { name: "Java Development", slug: "java-development" },
            { name: ".NET Development", slug: "dotnet-development" },
          ]
        },
        {
          name: "Mobile Development",
          services: [
            { name: "React Native", slug: "react-native" },
            { name: "Flutter Development", slug: "flutter-development" },
            { name: "iOS Development", slug: "ios-development" },
            { name: "Android Development", slug: "android-development" },
          ]
        },
        {
          name: "AI & Machine Learning",
          services: [
            { name: "Custom AI Solutions", slug: "custom-ai-solutions" },
            { name: "Machine Learning", slug: "machine-learning" },
            { name: "Chatbot Development", slug: "chatbot-development" },
          ]
        },
        {
          name: "Cloud & DevOps",
          services: [
            { name: "AWS Development", slug: "aws-development" },
            { name: "DevOps Automation", slug: "devops-automation" },
          ]
        },
        {
          name: "Digital Transformation",
          services: [
            { name: "Digital Transformation", slug: "digital-transformation" },
          ]
        }
      ],
    },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ]

  // Close mobile menu on outside click and escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false)
        if (isServicesDropdownOpen) {
          setIsServicesDropdownOpen(false)
          setActiveServiceCategory(null)
        }
        if (isProfileMenuOpen) setIsProfileMenuOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen, isServicesDropdownOpen, isProfileMenuOpen])

  // Handle click outside services dropdown and profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false)
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
        setActiveServiceCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
      if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
    }
  }, [servicesHoverTimeout, categoryHoverTimeout])

  // Handle services dropdown hover with improved logic
  const handleServicesMouseEnter = () => {
    if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
    setIsServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false)
      setActiveServiceCategory(null)
    }, 200) // Increased delay for better UX
    setServicesHoverTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout)
  }

  const handleDropdownMouseLeave = () => {
    setIsServicesDropdownOpen(false)
    setActiveServiceCategory(null)
  }

  // Handle category hover with improved logic
  const handleCategoryMouseEnter = (categoryName) => {
    if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
    setActiveServiceCategory(categoryName)
  }

  const handleCategoryMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveServiceCategory(null)
    }, 200) // Increased delay for better UX
    setCategoryHoverTimeout(timeout)
  }

  const handleSubcategoryMouseEnter = () => {
    if (categoryHoverTimeout) clearTimeout(categoryHoverTimeout)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesDropdownOpen(false)
    setIsProfileMenuOpen(false)
    setActiveServiceCategory(null)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false)
      setActiveServiceCategory(null)
    }
  }

  // Auth check functionality
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/user", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Logout functionality
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })

      if (response.ok) {
        setUser(null)
        setIsProfileMenuOpen(false)
        router.push("/")
      }
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg shadow-gray-500/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsServicesDropdownOpen(false)
              setActiveServiceCategory(null)
            }}
          >
            <img
              src="/images/logo.png"
              alt="B2W Infotech Logo"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextElementSibling.style.display = "block"
              }}
            />
            <Brain className="h-7 w-7 text-blue-600 hidden" />
            <span className="text-gray-900 font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              B2W Infotech
            </span>
          </Link>

          {/* Desktop Navigation - Fixed positioning */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      ref={servicesDropdownRef}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <button
                        className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 text-gray-700 hover:text-blue-600 flex items-center gap-1
                         after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-600
                         after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                         hover:after:w-3/4 ${
                           pathname.startsWith("/services") ? "text-blue-600 after:w-3/4" : ""
                         } ${isServicesDropdownOpen ? "text-blue-600" : ""}`}
                        onClick={() => router.push("/services")}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Services Dropdown - Updated UI to match reference */}
                      {isServicesDropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-[60]"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                            <div className="space-y-2">
                              {item.categories.map((category) => (
                                <div
                                  key={category.name}
                                  className="relative"
                                  onMouseEnter={() => handleCategoryMouseEnter(category.name)}
                                  onMouseLeave={handleCategoryMouseLeave}
                                >
                                  <div className="flex items-center p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                                    <div className="flex-1">
                                      <h4 className="font-medium text-gray-900">{category.name}</h4>
                                      <p className="text-sm text-gray-500">
                                        {category.services.length} specializations
                                      </p>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-400" />
                                  </div>

                                  {/* Services Submenu - Updated UI */}
                                  {activeServiceCategory === category.name && (
                                    <div
                                      className="absolute left-full top-0 ml-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-[70]"
                                      onMouseEnter={handleSubcategoryMouseEnter}
                                    >
                                      <div className="p-3">
                                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                                          {category.name}
                                        </h5>
                                        <div className="space-y-1">
                                          {category.services.map((service) => (
                                            <Link
                                              key={service.slug}
                                              href={`/services/${service.slug}`}
                                              className="block p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                              onClick={() => {
                                                setIsServicesDropdownOpen(false)
                                                setActiveServiceCategory(null)
                                              }}
                                            >
                                              {service.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* View All Services Link */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <Link
                                href="/services"
                                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                onClick={() => {
                                  setIsServicesDropdownOpen(false)
                                  setActiveServiceCategory(null)
                                }}
                              >
                                View All Services
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 text-gray-700 hover:text-blue-600
                       after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-600
                       after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                       hover:after:w-3/4 ${pathname === item.path ? "text-blue-600 after:w-3/4" : ""}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Authenticated User Profile - Desktop */}
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 h-10 w-24 rounded-lg border border-gray-300"></div>
            ) : user ? (
              <div className="hidden lg:block">
                <div className="relative" ref={profileMenuRef}>
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors group"
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="true"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center group-hover:border-blue-300 transition-colors">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture || "/placeholder.svg"}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={20} className="text-blue-600" />
                      )}
                    </div>
                    <span className="font-medium text-gray-900">{user.name?.split(" ")[0]}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-blue-600 ${
                        isProfileMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-gray-200 py-2 z-[60]">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-600 truncate">{user.email}</p>
                      </div>

                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <User size={16} className="mr-3" />
                        <span>Change Profile</span>
                      </Link>

                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          <LogOut size={16} className="mr-3" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Unauthenticated Login Button - Desktop */
              <Link href="/login" className="hidden lg:block">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
              onClick={toggleMobileMenu}
            >
              <div className="space-y-1.5 w-6">
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with injected CSS override */}
        <div
          className={`mobile-menu-container lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200 rounded-b-2xl">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.path}
                      className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 ${
                        pathname.startsWith("/services") ? "active-link" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Note: Dropdown content removed for mobile - services redirect directly to /services */}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 ${
                      pathname === item.path ? "active-link" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Authenticated User Profile - Mobile */}
            {isLoading ? (
              <div className="flex justify-center pt-4">
                <div className="animate-pulse bg-gray-200 h-12 w-32 rounded-lg border border-gray-300"></div>
              </div>
            ) : user ? (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-6 px-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture || "/placeholder.svg"}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={24} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-2 px-4">
                  <Link
                    href="/profile"
                    className="w-full px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Change Profile
                  </Link>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleLogout()
                    }}
                    className="w-full px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              /* Unauthenticated Login Button - Mobile */
              <div className="flex justify-center pt-2 pb-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium min-w-[140px] hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-blue-500/25 border border-blue-400/30">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header