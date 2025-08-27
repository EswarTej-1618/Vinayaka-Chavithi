import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Users, Heart, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/#about', icon: Heart },
    { name: 'Members', href: '/#members', icon: Users },
    { name: 'Contact', href: '/#contact', icon: Phone },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <span className="text-lg font-bold text-white">🕉</span>
            </div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text">
              Yuva Samiti
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isHomeTop = location.pathname === '/' && !isScrolled;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-1 transition-colors duration-200 group ${
                    isHomeTop ? 'text-white hover:text-orange-200' : 'text-gray-700 hover:text-blue-800'
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                location.pathname === '/' && !isScrolled ? 'text-white hover:text-orange-200' : 'text-gray-700 hover:text-blue-800'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="py-4 mt-2 rounded-lg shadow-lg md:hidden bg-white/95 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center px-4 py-3 space-x-3 text-gray-700 transition-all duration-200 hover:text-blue-800 hover:bg-blue-50"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


