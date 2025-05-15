import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="py-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Arnau Romero Hazas. {t('footer.rights')}</p>
    </footer>
  )
}

export default Footer