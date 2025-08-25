import React, { useState } from 'react';
import { Home, Menu, X, User, Globe, Laptop, Brain, Briefcase, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', icon: <Home size={16} /> },
    { label: 'About', href: '#about', icon: <User size={16} /> },
    { label: 'Skills', href: '#skills', icon: <Globe size={16} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { label: 'Projects', href: '#projects', icon: <Laptop size={16} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Rohit Kumar Maurya
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 py-2"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 mt-4 text-center"
              >
                Hire Me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;