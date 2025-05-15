import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages, Menu, X } from 'lucide-react';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  // Estado para detectar si el usuario ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hook de efecto que detecta el scroll y cambia el estado de isScrolled
  useEffect(() => {
    const handleScroll = () => {
       // Si el usuario ha bajado más de 20 píxeles, cambiamos el estado a true
      setIsScrolled(window.scrollY > 20);
    };

    // Agregamos el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);
     // Cleanup: eliminamos el evento de scroll al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // [] indica que este efecto solo se ejecuta una vez al montar el componente

    // Función para hacer scroll suave a una sección específica
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Margen superior para evitar que quede pegado a la navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Agrega animación al desplazamiento
      });
      // Cerramos el menú móvil si está abierto
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Arnau Romero
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-8">
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
            >
              {t('about.title')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="relative text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
            >
              {t('projects.title')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-300 hover:text-white transition-colors group whitespace-nowrap"
            >
              {t('contact.title')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Right side items */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <Languages className="w-5 h-5" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-64 opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-left"
            >
              {t('about.title')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-left"
            >
              {t('projects.title')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-left"
            >
              {t('contact.title')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}