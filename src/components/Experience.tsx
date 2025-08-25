import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional development milestones
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 rounded-full p-3">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bachelor of Technology</h3>
                    <div className="text-blue-400 font-medium">Lovely Professional University</div>
                    <div className="text-gray-300">Phagwara, Punjab</div>
                  </div>
                  <div className="text-gray-400 mt-2 lg:mt-0">2021 - 2025</div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Completed Computer Science and Engineering with focus on software development, 
                  data structures, algorithms, and modern web technologies. Maintaining excellent 
                  academic performance while working on various projects.
                </p>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-blue-400" />
                      Specialized in Java programming and software engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-blue-400" />
                      Completed advanced courses in Data Structures & Algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-blue-400" />
                      Worked on multiple full-stack development projects
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-blue-400" />
                      Active participant in coding competitions and hackathons
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <div className="flex items-start gap-6">
              <div className="bg-green-600 rounded-full p-3">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Higher Secondary Education</h3>
                    <div className="text-green-400 font-medium">Universal Public School</div>
                    <div className="text-gray-300">Science Stream</div>
                  </div>
                  <div className="text-gray-400 mt-2 lg:mt-0">2019 - 2021</div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Completed higher secondary education with Science stream, focusing on Mathematics, 
                  Physics, and Chemistry with excellent academic performance. Built strong foundation 
                  in analytical thinking and problem-solving.
                </p>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-green-400" />
                      Achieved excellent grades in Mathematics and Physics
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-green-400" />
                      Developed strong analytical and logical thinking skills
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-green-400" />
                      Participated in science exhibitions and competitions
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={16} className="text-green-400" />
                      Built foundation for engineering studies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 rounded-full p-2">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Java Programming Certification</h4>
                  <div className="text-orange-400">Coursera - 2024</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-full p-2">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Database Management MySQL</h4>
                  <div className="text-purple-400">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;