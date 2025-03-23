import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend technologies,
                  I create scalable solutions that solve real-world problems.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span>React, TypeScript, Node.js</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span>Computer Science Degree</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-12">
              <Code className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((project) => (
                <div key={project} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`} 
                    alt="Project Preview" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                    <p className="text-gray-400 mb-4">
                      A brief description of the project and the technologies used in its development.
                    </p>
                    <div className="flex gap-2">
                      <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 ml-4">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a 
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;