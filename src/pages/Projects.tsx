import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Cloud, Palette, Monitor, Zap } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    title: "E-Commerce Platform",
    description: "We make beauty shopping effortless with a seamless online store, ensuring fast, hassle-free purchases and quick delivery.",
    image: "https://porfolio-khaki-iota.vercel.app/images/1.PNG",
    technologies: ["Shopify", "PHP", "MySQL"],
    liveUrl: "https://aesthacosmetics.com/",
    githubUrl: "https://github.com/bsky960920"
  };

  const projects = [
    {
      title: "Sakeai",
      description: "Sakeai is a review service that lets you discover new sake",
      image: "https://porfolio-khaki-iota.vercel.app/images/2.PNG",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      icon: <Globe className="h-6 w-6" />,
      liveUrl: "https://www.sakeai.com/",
      githubUrl: "https://github.com/bsky960920"
    },
    {
      title: "Social food healthy",
      description: "A comprehensive food healthy platform for food managers with data visualization and automated reporting.",
      image: "https://porfolio-khaki-iota.vercel.app/images/3.PNG",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      icon: <Database className="h-6 w-6" />,
      liveUrl: "https://yumeya.life/",
      githubUrl: "https://github.com/bsky960920"
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      image: "https://porfolio-khaki-iota.vercel.app/images/4.PNG",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
      icon: <Monitor className="h-6 w-6" />,
      liveUrl: "https://www.drivedge.com/",
      githubUrl: "https://github.com/bsky960920"
    },
    {
      title: "Follow us @slatemilk",
      description: "Who said healthy meant sacrificing taste? Our drinks are packed with protein and have 0g added sugar, all while being unbelievably delicious.",
      image: "https://porfolio-khaki-iota.vercel.app/images/5.PNG",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      icon: <Zap className="h-6 w-6" />,
      liveUrl: "https://slatemilk.com/",
      githubUrl: "https://github.com/bsky960920"
    },
    {
      title: "WE BUILD, MAINTAIN  & MARKET WEBSITE",
      description: "An educational platform with course creation, student progress tracking, interactive quizzes, and video streaming.",
      image: "https://porfolio-khaki-iota.vercel.app/images/6.PNG",
      technologies: ["WordPress", "PHP", "MySQL"],
      icon: <Code className="h-6 w-6" />,
      liveUrl: "https://quartrback.com/",
      githubUrl: "https://github.com/bsky960920"
    },
    {
      title: "Restaurant Management System",
      description: "A complete restaurant solution with online ordering, table reservations, inventory management, and staff scheduling.",
      image: "https://porfolio-khaki-iota.vercel.app/images/7.PNG",
      technologies: ["Laravel", "MySQL", "Stripe"],
      icon: <Globe className="h-6 w-6" />,
      liveUrl: "https://twl.com.au/",
      githubUrl: "https://github.com/bsky960920"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am very pleased to finish this projects successfully.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Featured Project</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">{featuredProject.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={featuredProject.liveUrl}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">All Projects</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm rounded-full p-2">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Next Project?</h3>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            These projects showcase my expertise across different technologies and industries. I'm always excited to take on new challenges and bring innovative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </a>
            <a
              href="https://github.com/bsky960920"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
