import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <header className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">{t('hero.subtitle')}</p>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">{t('hero.name')}</p>
      </div>
    </header>
  )
}

export default HeroSection
