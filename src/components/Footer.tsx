import React from 'react';
import { Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';

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
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Rohit Kumar Maurya</h3>
            <div className="text-blue-400 font-medium mb-2">Java Developer & Software Engineer</div>
            <p className="text-gray-300 leading-relaxed">
              Passionate software developer creating innovative solutions and building 
              scalable applications. Always eager to learn new technologies and tackle 
              challenging problems.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <div>Rohit Kumar Maurya</div>
              <div>Chandauli, Uttar Pradesh, India</div>
              <div>+91 9569XXXX85</div>
              <a 
                href="mailto:rohitmaurya3545@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                rohitmaurya3545@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rohit Kumar Maurya. All rights reserved. 
            <br />
            Made by{' '}
           <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-semibold">
              Rohit Kumar Maurya
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;