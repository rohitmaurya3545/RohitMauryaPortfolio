import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Profile</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a dedicated software developer with a strong foundation in Java programming 
                and web development. Completed B.Tech at Lovely Professional University, 
                I am passionate about creating efficient, scalable solutions and continuously 
                learning new technologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Education</div>
                    <div className="text-gray-300">Bachelor of Technology - Computer Science & Engineering</div>
                    <div className="text-blue-400">Lovely Professional University (2021 - 2025)</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-400" size={20} />
                  <div>
                    <div className="text-white font-medium">Location</div>
                    <div className="text-gray-300">Phagwara, Punjab, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Technologies & Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Programming Languages</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Frameworks & Tools</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>React.js</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Open Source', 'Problem Solving', 'Tech Blogging', 'Cricket'].map((interest) => (
                  <span key={interest} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="img/laptop.jpg" 
              alt="Rohit at work" 
              className="w-full max-w-md h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-300">Projects</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">Fresher</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">Java</div>
            <div className="text-gray-300">Experience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">252+</div>
            <div className="text-gray-300">Problems Solved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;