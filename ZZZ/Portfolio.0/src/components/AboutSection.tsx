import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { User, Code, Briefcase, GraduationCap, Download } from 'lucide-react'

const AboutSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">{t('about.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed">{t('about.description')}</p>
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
              <a
                href="/CVArnauRomeroHazas.pdf"
                download="Arnau_Romero_Hazas_CV.pdf"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-800 text-gray-300 px-3 py-3 rounded-lg transition-colors mt-4"
              >
                <Download className="w-5 h-5" />
                {t('CV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
