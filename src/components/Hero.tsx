import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titles = ['Software Engineer', 'Java Developer', 'Problem Solver'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 whitespace-nowrap">
              Rohit Kumar <span className="text-blue-400">Maurya</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-300 mb-6 font-medium">
              <span className="inline-block min-h-[2rem]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Software Engineer with expertise in Java and web development.
              Completed B.Tech in Computer Science from Lovely Professional University, 
              delivering innovative solutions and building scalable applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="img/RohitKumarMauryass.pdf" 
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a 
                href="https://linkedin.com/in/rohit-kumar-maurya-525355248" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-200 font-medium"
              >
                <Mail size={20} />
                Send Message
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <img 
                  src="img/rohit.png"
                  alt="Professional Developer" 
                  className="w-72 h-72 rounded-full object-cover border-4 border-white/20"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Coder by Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;