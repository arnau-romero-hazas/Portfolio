import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Code, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

const techColors: Record<string, string> = {
  React: 'bg-blue-600',
  ReactNative: 'bg-indigo-600',
  Nextjs: 'bg-black',
  TypeScript: 'bg-blue-800',
  JavaScript: 'bg-yellow-400',
  TailwindCSS: 'bg-cyan-600',
  CSS: 'bg-blue-300',
  Vite: 'bg-purple-500',
  Firebase: 'bg-yellow-500',
  Nodejs: 'bg-green-700',
  MongoDB: 'bg-green-600',
  Express: 'bg-gray-500',
  ExpoGO: 'bg-orange-500'
}

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage()
  const base = (import.meta as ImportMeta & { env: { BASE_URL: string } }).env.BASE_URL

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-64 bg-gray-900 flex items-center justify-center">
                  <img
                    src={`${base}${project.imageUrl}`}
                    alt={`Preview of ${project.title}`}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{t(project.descriptionKey)}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-sm px-3 py-1 rounded-full text-white ${techColors[tech] || 'bg-gray-600'}`}
                      >
                        {t(`tech.${tech}`)}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                   {project.hasLiveDemo === false ? (
                      <span className="inline-flex items-center gap-1 text-yellow-400 italic">
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.comingSoon')}
                      </span>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.liveDemo')}
                      </a>
                    )}

                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 ml-4"
                    >
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
  )
}

export default ProjectsSection