import React from 'react';
import {
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home', icon: <Home size={16} /> },
    { label: 'About', href: '#about', icon: <User size={16} /> },
    { label: 'Skills', href: '#skills', icon: <Code size={16} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { label: 'Projects', href: '#projects', icon: <FolderOpen size={16} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              Rohit Kumar <span className="text-blue-400">Maurya</span>
            </h3>
            <div className="text-blue-400 font-medium mb-3">
              Java Developer & Software Engineer
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Passionate software developer creating innovative solutions and building 
              scalable applications. Always eager to learn new technologies and tackle 
              challenging problems.
            </p>
          </div>
          
          {/* CENTER */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-medium mb-4">Get In Touch</h4>

            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              
              <div className="flex items-center justify-center md:justify-start gap-2">
                <User size={16} />
                <span className="text-white font-medium">
                  Rohit Kumar Maurya
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} />
                <span>Chandauli, Uttar Pradesh, India</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} />
                <span className="hover:text-blue-400 transition-colors">
                  +91 9569XXXX85
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} />
                <a 
                  href="mailto:rohitmaurya3545@gmail.com" 
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  rohitmaurya3545@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 sm:pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Rohit Kumar Maurya. All rights reserved.
            <br />
            Made by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Rohit Kumar Maurya
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
