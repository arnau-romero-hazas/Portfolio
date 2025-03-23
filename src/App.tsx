import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <LanguageSelector />
      
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/arnau-romero-hazas" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/arnau-romero-hazas-0128b0200/" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="aromerohazas@gmail.com"
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
              <h2 className="text-3xl font-bold">{t('about.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span>{t('about.skills')}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span>{t('about.experience')}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                  <span>{t('about.education')}</span>
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
              <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
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
                      {t('projects.description')}
                    </p>
                    <div className="flex gap-2">
                      <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.liveDemo')}
                      </a>
                      <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 ml-4">
                        <Github className="w-4 h-4" />
                        {t('projects.sourceCode')}
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
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <p className="text-gray-300 mb-8">
              {t('contact.description')}
            </p>
            <a 
              href="mailto:aromerohazas@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t('contact.button')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Arnau Romero Hazas. {t('footer.rights')}</p>
      </footer>
    </div>
  );
}

export default App;