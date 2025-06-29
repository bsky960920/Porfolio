import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Code, Zap, Users, Award } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Full Stack
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Developer
              </span>
            </h1>
            <div style={{ marginBottom: "130px" }}>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              I guarantee the qualification of my result and try hard to sets by my clients
            </p>
          </div>
          <div style={{ marginBottom: "50px" }}>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/bsky960920/"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:inoue.sho@gmail.com"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
          <div style={{ marginBottom: "100px" }}>
          </div>
          <div className="text-gray-400">
            <p className="text-sm mb-4">Scroll down to explore more</p>
            <button
              onClick={() => scrollToSection('highlights')}
              className="animate-bounce cursor-pointer hover:text-white transition-colors"
            >
              <ArrowRight className="h-6 w-6 mx-auto rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div id="highlights" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              You will get to know another trust wroth and talent programmer by choosing me and I will be honored to complete another task perfectly.
              I would make a plan amd finish the task step by step if I meet challenge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Clean and understandable Code</h3>
              <p className="text-gray-300 leading-relaxed">
                Writing maintainable, scalable code that follows industry best practices and modern standards
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fast Performance</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimized applications with lightning-fast load times and smooth user interactions
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group text-center">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">User-Focused(UI, UX)</h3>
              <p className="text-gray-300 leading-relaxed">
                Designing intuitive interfaces that prioritize user experience and accessibility
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 group text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Delivering exceptional results through thorough testing and attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div id="stats" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Proven <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Track Record</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Numbers that speak to my commitment and expertise
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">28+</div>
                <div className="text-purple-300 font-semibold">Projects Completed</div>
                <div className="text-gray-400 text-sm">Across various industries</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">8+</div>
                <div className="text-blue-300 font-semibold">Years Experience</div>
                <div className="text-gray-400 text-sm">In full stack development</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">17+</div>
                <div className="text-green-300 font-semibold">Technologies</div>
                <div className="text-gray-400 text-sm">Mastered and applied</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-pink-300 font-semibold">Client Satisfaction</div>
                <div className="text-gray-400 text-sm">On delivered projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Next Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            I always respect You.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;