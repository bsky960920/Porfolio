import React from 'react';
import { Code, Database, Cloud, Palette, Monitor, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5 & CSS3", level: 92 },
        { name: "React & Next & TypeScript", level: 95 },
        { name: "Vue.js & Nuxt.js", level: 88 },
        { name: "Tailwind CSS & Chakra UI", level: 90 },
        { name: "JavaScript ES6+", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 97 },
        { name: "Node.js & Express", level: 90 },
        { name: "Python & Django", level: 85 },
        { name: "Microservices", level: 85 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 94 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Firebase", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter & Dart", level: 78 },
        { name: "Progressive Web Apps", level: 90 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Store Deployment", level: 82 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma & Adobe XD", level: 88 },
        { name: "UI/UX Design", level: 85 },
        { name: "Git & GitHub", level: 95 },
        { name: "Agile Methodology", level: 90 },
        { name: "Testing (Jest, Cypress)", level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
            Technology is constantly evolving, and I'm committed to staying up-to-date with the latest trends and best practices. 
            I regularly explore new frameworks, tools, and methodologies to deliver cutting-edge solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20">
              AI & Machine Learning
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20">
              Web3 & Blockchain
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20">
              Serverless Architecture
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm border border-white/20">
              Edge Computing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;