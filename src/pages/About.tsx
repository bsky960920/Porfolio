import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Confidence in oneself is the first step on the road to success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">My Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am Inoue Shota, a Full Stack Developer with 7 years of hands on
                experience. I am a passion developer for creating
                dynamic and user-friendly web applications, I thrive in environments that
                challenge my technical skills and creativity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am eager to contribute my
                expertise to innovative projects and collaborate with like-minded
                professionals. I have no problem with overtime work.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'll not lose faith
                despite the current difficult, I`m some I can make it.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <User className="h-6 w-6 mr-2 text-purple-400" />
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-purple-400" />
                  <span> Based in Shibuya, Japan</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-purple-400" />
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="h-5 w-5 mr-3 text-purple-400" />
                  <span>28+ Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
              <div className="space-y-3">
                <div className="text-gray-300">• Frontend Development with React & TypeScript</div>
                <div className="text-gray-300">• Backend Development with Node.js</div>
                <div className="text-gray-300">• Database Design & Management</div>
                <div className="text-gray-300">• WordPress, Shopify</div>
                <div className="text-gray-300">• Documetn Processing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Let's Work Together</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            After see your this, we thought you weight be a good candidate
          </p>
          <Link
            to="/contact"
            >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Start a Conversation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;