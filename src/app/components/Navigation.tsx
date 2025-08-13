'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  Shield, 
  Settings, 
  Zap, 
  Monitor, 
  Bird, 
  Phone, 
  Moon, 
  Sun 
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ContactModal from './ContactModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const productItems = [
    { 
      category: 'Безопасность',
      items: [
        { href: '/secure-t', label: 'Secure-T', description: 'Комплексная защита', icon: <Shield className="w-5 h-5" /> },
        { href: '/drweb', label: 'Dr.Web', description: 'Антивирусная защита', icon: <Settings className="w-5 h-5" /> },
      ]
    },
    {
      category: 'Разработка',
      items: [
        { href: '/development', label: 'Веб-разработка', description: 'Сайты и приложения', icon: <Monitor className="w-5 h-5" /> },
        { href: '/solovey', label: 'Соловей', description: 'Платформа видеосвязи', icon: <Bird className="w-5 h-5" /> },
      ]
    },
    {
      category: 'Поставки',
      items: [
        { href: '/electronics', label: 'Электроника', description: 'B2B/B2G поставки', icon: <Zap className="w-5 h-5" /> },
      ]
    }
  ];

  const menuItems = [
    { href: '/about', label: 'О компании' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">GUNDYREV</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Продукты с выпадающим меню */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
                <span>Продукты</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Улучшенное выпадающее меню с категориями */}
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 glass-effect rounded-lg shadow-lg border border-gray-600/20 overflow-hidden dropdown-menu">
                  <div className="py-2">
                    {productItems.map((category, categoryIndex) => (
                      <div key={category.category} className={categoryIndex > 0 ? 'border-t border-gray-600/20 mt-2 pt-2' : ''}>
                        <div className="px-4 py-2">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            {category.category}
                          </h4>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-md transition-all duration-200 group"
                              >
                                <div className="text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200">
                                  {item.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{item.label}</div>
                                  <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Остальные пункты меню */}
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Кнопка "Оставить заявку" */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-green-600 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Оставить заявку
            </button>

            {/* Улучшенный переключатель темы */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`theme-toggle ${theme}`}
                aria-label="Переключить тему"
                title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
              >
                <Moon 
                  className={`w-4 h-4 transition-all duration-300 ${
                    theme === 'dark' ? 'scale-110 opacity-100' : 'scale-75 opacity-50'
                  }`}
                />
                <Sun 
                  className={`w-4 h-4 transition-all duration-300 ${
                    theme === 'light' ? 'scale-110 opacity-100' : 'scale-75 opacity-50'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Мобильная кнопка "Оставить заявку" */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-md font-medium text-xs hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
            </button>

            {/* Мобильный переключатель темы */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle ${theme}`}
              aria-label="Переключить тему"
              title={theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
            >
              <Moon 
                className={`w-4 h-4 transition-all duration-300 ${
                  theme === 'dark' ? 'scale-110 opacity-100' : 'scale-75 opacity-50'
                }`}
              />
              <Sun 
                className={`w-4 h-4 transition-all duration-300 ${
                  theme === 'light' ? 'scale-110 opacity-100' : 'scale-75 opacity-50'
                }`}
              />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Улучшенное мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect mt-2 rounded-lg">
              {/* Мобильные продукты по категориям */}
              {productItems.map((category, categoryIndex) => (
                <div key={category.category} className={`${categoryIndex > 0 ? 'border-t border-gray-600/20 pt-2 mt-2' : ''} pb-2`}>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                    {category.category}
                  </div>
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium rounded-md hover:bg-gray-700/30"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="text-green-400 mr-3">{item.icon}</div>
                      <div className="flex-1">
                        <div>{item.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}

              {/* Основные пункты меню */}
              <div className="border-t border-gray-600/20 pt-2 mt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium rounded-md hover:bg-gray-700/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Кнопка "Оставить заявку" в мобильном меню */}
                <button
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-md hover:from-green-600 hover:to-emerald-600 transition-all duration-200 mt-2 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Модальное окно контактов */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultType="sales"
        title="Оставить заявку"
      />
    </nav>
  );
} 