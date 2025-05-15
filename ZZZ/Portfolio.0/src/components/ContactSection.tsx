import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Github, Linkedin, Mail } from 'lucide-react'

const ContactSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <p className="text-gray-300 mb-8">{t('contact.description')}</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/arnau-romero-hazas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/arnau-romero-hazas-0128b0200/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:aromerohazas@gmail.com"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection