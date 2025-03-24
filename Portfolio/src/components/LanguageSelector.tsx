import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex items-center gap-2"
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}