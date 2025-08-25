import React from 'react';
import { ExternalLink, Code, ShoppingBag, Activity, Calculator } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'BeautyShop E-commerce Platform',
      category: 'Web Development',
      description: 'A complete e-commerce solution built for beauty product retailers. Features include product catalog, shopping cart, secure payment processing, order management.',
      achievements: [
        'Built a responsive e-commerce site with Home, Collection, Shop, and Offers.',
        'Enabled seamless browsing.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', '+2 more'],
      icon: <ShoppingBag className="text-blue-400" size={24} />,
      liveDemo: 'https://rohitmaurya3545.github.io/BeautyShop-Website/',
      viewCode: 'https://github.com/rohitmaurya3545/BeautyShop-Website'
    },
    {
      title: 'Kidney Disease Prediction System',
      category: 'Machine Learning',
      description: 'Advanced machine learning model to predict kidney disease using various health parameters with high accuracy. Built with Python and deployed using web framework.',
      achievements: [
        'High accuracy prediction model',
        'Comprehensive health parameter analysis'
      ],
      technologies: ['Python', 'Machine Learning', '+1 more'],
      icon: <Activity className="text-green-400" size={24} />,
      liveDemo: 'https://github.com/rohitmaurya3545',
      viewCode: 'https://github.com/rohitmaurya3545'
    },
    {
      title: 'CGPA Calculator Application Using Java',
      category: 'Desktop Application',
      description: 'Comprehensive web-based application for students to calculate their CGPA with an intuitive user interface and advanced features.',
      achievements: [
        'Intuitive user interface design',
        'Advanced calculation features'
      ],
      technologies: ['Java', 'OOPs', 'Swing', '+1 more'],
      icon: <Calculator className="text-purple-400" size={24} />,
      liveDemo: 'https://github.com/rohitmaurya3545/CGPAcalculatorr.com',
      viewCode: 'https://github.com/rohitmaurya3545/CGPAcalculatorr.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my recent work and notable achievements in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="text-blue-400 text-sm">{project.category}</div>
                </div>
              </div>
              
              {/* <div className="mb-4">
                <img 
                  src={`https://images.pexels.com/photos/${index === 0 ? '3184418' : index === 1 ? '1181675' : '4164418'}/pexels-photo-${index === 0 ? '3184418' : index === 1 ? '1181675' : '4164418'}.jpeg`}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div> */}
              <div className="mb-4">
                <img
                  src={`/img/${index === 0 ? 'beautyshop.jpeg' : index === 1 ? 'computer.jpg' : 'cgpacalculator.jpg'}`}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Key Achievements:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-medium mb-2 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <a 
                  href={project.viewCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <Code size={14} />
                  View Code
                </a>
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;