"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Brain, User, LogOut, ChevronDown, Settings } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const profileMenuRef = useRef(null);
  
  // Navigation items (same for both authenticated and unauthenticated)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];
  
  // Auth check on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/user', {
        method: 'GET',
        credentials: 'include',
        cache: 'no-store'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        // User not authenticated, but that's okay for this header
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Close mobile menu on outside click and escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle click outside profile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    
    if (isProfileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isProfileMenuOpen]);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        setUser(null);
        setIsProfileMenuOpen(false);
        router.push('/');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  return (
    <header
      ref={headerRef}
      className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 bg-black/20 backdrop-blur-xl border border-purple-500/30 shadow-lg shadow-purple-500/10 rounded-2xl sm:rounded-3xl lg:rounded-4xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src="/images/logo.jpg" 
              alt="B2W Infotech Logo" 
              className="h-8 w-8 object-contain"
              onError={(e) => {
                // Fallback to Brain icon if logo.png is not found
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <Brain className="h-7 w-7 text-purple-400 hidden" />
            <span className="text-white font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">B2W Infotech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`py-2 px-3 font-medium rounded-md relative transition-colors duration-200 text-gray-300 hover:text-white
                     after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400
                     after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                     hover:after:w-3/4 ${
                       pathname === item.path ? "text-white after:w-3/4" : ""
                     }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Show loading state */}
            {isLoading ? (
              <div className="animate-pulse bg-purple-500/20 h-10 w-24 rounded-lg border border-purple-400/30"></div>
            ) : user ? (
              /* Authenticated User Profile - Desktop */
              <div className="hidden lg:block">
                <div className="relative" ref={profileMenuRef}>
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none transition-colors group"
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup="true"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 border-2 border-purple-400/50 overflow-hidden flex items-center justify-center group-hover:border-purple-300 transition-colors">
                      {user.profilePicture ? (
                        <img 
                          src={user.profilePicture} 
                          alt={user.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={20} className="text-purple-300" />
                      )}
                    </div>
                    <span className="font-medium text-white">{user.name?.split(' ')[0]}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 text-purple-300 ${
                        isProfileMenuOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-xl rounded-lg shadow-xl border border-purple-500/30 py-2 z-10">
                      <div className="px-4 py-3 border-b border-purple-500/20">
                        <p className="text-sm font-medium text-white truncate">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                      
                      <Link 
                        href="/profile" 
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <User size={16} className="mr-3" />
                        <span>Change Profile</span>
                      </Link>
                      
                      <div className="border-t border-purple-500/20 mt-2 pt-2">
                        <button 
                          onClick={handleLogout}
                          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors"
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-4xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30"
                >
                  Login
                </button>
              </Link>
            )}
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              onClick={toggleMobileMenu}
            >
              <div className="space-y-1.5 w-6">
                <span 
                  className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block w-6 h-0.5 bg-purple-400 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-black/90 backdrop-blur-xl border-t border-purple-500/30 rounded-b-2xl`}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.path}
                  className={`block text-center py-3 px-4 mx-4 text-lg font-medium rounded-lg relative transition-colors duration-200 text-gray-300 hover:text-white
                           after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400
                           after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                           hover:after:w-3/4 ${
                             pathname === item.path ? "text-white after:w-3/4" : ""
                           }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* Mobile Authentication Section */}
            {isLoading ? (
              <div className="flex justify-center pt-4">
                <div className="animate-pulse bg-purple-500/20 h-12 w-32 rounded-lg border border-purple-400/30"></div>
              </div>
            ) : user ? (
              /* Authenticated User Profile - Mobile */
              <div className="mt-6 pt-6 border-t border-purple-500/30">
                <div className="flex items-center space-x-3 mb-6 px-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 border-2 border-purple-400/50 overflow-hidden flex items-center justify-center">
                    {user.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={24} className="text-purple-300" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
                
                <div className="space-y-2 px-4">
                  <Link 
                    href="/profile" 
                    className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-gray-300 hover:text-white px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border border-purple-400/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Change Profile
                  </Link>
                  
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 px-4 py-3 rounded-lg text-center transition-all duration-300 font-medium flex items-center justify-center border border-red-400/30"
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
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium min-w-[140px] hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg shadow-purple-500/25 border border-purple-400/30"
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
  );
};

export default Header;