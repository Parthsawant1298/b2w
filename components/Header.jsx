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
          name: "Core Services",
          services: [
            { name: "IT Outsourcing", slug: "it-outsourcing" },
            { name: "Custom Software Development", slug: "custom-software-development" },
            { name: "AI Strategy & Implementation", slug: "ai-strategy-implementation" },
            { name: "Web & Mobile Development", slug: "web-mobile-development" },
          ]
        },
        {
          name: "Specialized Solutions",
          services: [
            { name: "MVP Development", slug: "mvp-development" },
            { name: "Staff Augmentation", slug: "staff-augmentation" },
            { name: "Legacy Modernization", slug: "legacy-modernization" },
            { name: "UI/UX Design", slug: "ui-ux-design" },
          ]
        },
        {
          name: "AI & Automation",
          services: [
            { name: "DevOps & Automation", slug: "devops-automation" },
            { name: "Generative AI", slug: "generative-ai" },
            { name: "RPA Solutions", slug: "rpa-solutions" },
            { name: "Predictive Analytics", slug: "predictive-analytics" },
          ]
        },
        {
          name: "Industry Solutions",
          services: [
            { name: "Healthcare Solutions", slug: "healthcare-solutions" },
            { name: "FinTech Solutions", slug: "fintech-solutions" },
            { name: "Retail Solutions", slug: "retail-solutions" },
            { name: "Manufacturing Solutions", slug: "manufacturing-solutions" },
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
      className="sticky top-0 z-50"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #D9D9D9'
      }}
    >
      {/* Top contact bar */}
      <div 
        className="py-2 px-4"
        style={{
          backgroundColor: '#1e40af',
          color: '#FFFFFF'
        }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <span>📞 +91 7798001001</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <span>✉️ b2winfotek@gmail.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span>🏆 15+ Years • 1200+ Projects • ISO Certified • AI-Powered Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsServicesDropdownOpen(false)
              setActiveServiceCategory(null)
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="B2W Infotech Logo"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                e.target.style.display = "none"
                e.target.nextElementSibling.style.display = "block"
              }}
            />
            <Brain className="h-7 w-7 text-blue-600 hidden" />
            <div>
              <h1 
                className="text-xl font-bold"
                style={{ color: '#000000' }}
              >
                B2W Infotech
              </h1>
              <p 
                className="text-sm"
                style={{ color: '#6B7280' }}
              >
                AI-Powered Software Development
              </p>
            </div>
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
                        className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 flex items-center gap-1 ${
                           pathname.startsWith("/services") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                         } ${isServicesDropdownOpen ? "text-blue-600" : ""}`}
                        style={{ color: pathname.startsWith("/services") || isServicesDropdownOpen ? '#1e40af' : '#000000' }}
                        onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                        onMouseLeave={(e) => e.target.style.color = pathname.startsWith("/services") || isServicesDropdownOpen ? '#1e40af' : '#000000'}
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
                      className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 ${
                        pathname === item.path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={{ color: pathname === item.path ? '#1e40af' : '#000000' }}
                      onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                      onMouseLeave={(e) => e.target.style.color = pathname === item.path ? '#1e40af' : '#000000'}
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
                    <div className="w-10 h-10 rounded-full bg-blue-800/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center group-hover:border-blue-300 transition-colors">
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
                <button 
                  className="px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    backgroundColor: '#1e40af',
                    color: '#FFFFFF',
                    boxShadow: '0 0 0 2px #1e40af'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1e40af'}
                >
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
              onClick={toggleMobileMenu}
              style={{ color: '#000000' }}
            >
              {isMobileMenuOpen ? (
                <div className="space-y-1.5 w-6">
                  <span className="block w-6 h-0.5 bg-gray-700 rotate-45 translate-y-2 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 opacity-0 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-2 transition-all duration-300" />
                </div>
              ) : (
                <div className="space-y-1.5 w-6">
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                  <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-300" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with injected CSS override */}
        <div
          className={`mobile-menu-container lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            borderTop: '1px solid #D9D9D9'
          }}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <Link
                      href={item.path}
                      className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 ${
                        pathname.startsWith("/services") ? "active-link" : ""
                      }`}
                      style={{ color: pathname.startsWith("/services") ? '#1e40af' : '#000000' }}
                      onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                      onMouseLeave={(e) => e.target.style.color = pathname.startsWith("/services") ? '#1e40af' : '#000000'}
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
                    style={{ color: pathname === item.path ? '#1e40af' : '#000000' }}
                    onMouseEnter={(e) => e.target.style.color = '#1e40af'}
                    onMouseLeave={(e) => e.target.style.color = pathname === item.path ? '#1e40af' : '#000000'}
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
                  <div className="w-12 h-12 rounded-full bg-blue-800/20 border-2 border-blue-400/50 overflow-hidden flex items-center justify-center">
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
                  <button 
                    className="px-8 py-3 rounded-lg font-medium min-w-[140px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: '#1e40af',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#1e40af'}
                  >
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