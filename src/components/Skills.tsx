import React from 'react';

interface SkillProps {
  name: string;
  level: string;
  percentage: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-blue-400 text-sm">{level}</span>
        <span className="text-gray-400 text-sm">{percentage}%</span>
      </div>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-3">
      <div 
        className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const programmingLanguages = [
    { name: 'Java', level: 'Expert', percentage: 90 },
    { name: 'JavaScript', level: 'Advanced', percentage: 60 },
  ];

  const frameworks = [
    { name: 'React.js', level: 'Advanced', percentage: 75 },
    { name: 'Next.js', level: 'Beginner', percentage: 30},
  ];

  const databases = [
    { name: 'MySQL', level: 'Advanced', percentage: 85 },
    { name: 'Git', level: 'Expert', percentage: 90 },
  ];

  const coreConcepts = [
    { name: 'OOP Concepts', level: 'Expert', percentage: 95 },
    { name: 'Data Structures Algorithms', level: 'Advanced', percentage: 72 },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's an overview of my technical skills and proficiency levels across different technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Programming Languages</h3>
              {programmingLanguages.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Frameworks & Libraries</h3>
              {frameworks.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Databases & Tools</h3>
              {databases.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Core Concepts</h3>
              {coreConcepts.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;