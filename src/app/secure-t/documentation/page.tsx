'use client';

import Navigation from '../../components/Navigation';

export default function SecureTDocumentation() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-orange-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Документация <span className="gradient-text">SECURE-T</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Полная документация по системе информационной безопасности
            </p>
          </div>

          {/* Documentation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Основная документация */}
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-4">Полная документация</h3>
              <p className="text-gray-300 mb-6">
                Подробное руководство по всем аспектам системы SECURE-T
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div>• Обзор системы</div>
                <div>• Основные решения</div>
                <div>• Технологии и архитектура</div>
                <div>• API документация</div>
              </div>
              <a 
                href="/docs/SECURE-T_Documentation.md" 
                target="_blank"
                className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Открыть документацию
              </a>
            </div>

            {/* Быстрый старт */}
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Быстрый старт</h3>
              <p className="text-gray-300 mb-6">
                Пошаговое руководство по быстрому развертыванию
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div>• Системные требования</div>
                <div>• Установка и настройка</div>
                <div>• Первоначальная конфигурация</div>
                <div>• Troubleshooting</div>
              </div>
              <a 
                href="/docs/SECURE-T_Quick_Start.md" 
                target="_blank"
                className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                Начать работу
              </a>
            </div>

            {/* Примеры конфигурации */}
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Примеры конфигурации</h3>
              <p className="text-gray-300 mb-6">
                Готовые конфигурации для различных сценариев
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div>• Основная конфигурация</div>
                <div>• Кластерная настройка</div>
                <div>• Политики безопасности</div>
                <div>• Интеграции</div>
              </div>
              <a 
                href="/docs/SECURE-T_Configuration_Examples.md" 
                target="_blank"
                className="inline-block px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300"
              >
                Посмотреть примеры
              </a>
            </div>

            {/* README */}
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-4">Обзор документации</h3>
              <p className="text-gray-300 mb-6">
                Навигация по всей документации SECURE-T
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-6">
                <div>• Структура документации</div>
                <div>• Быстрые ссылки</div>
                <div>• Контактная информация</div>
                <div>• Обновления</div>
              </div>
              <a 
                href="/docs/README.md" 
                target="_blank"
                className="inline-block px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300"
              >
                Обзор
              </a>
            </div>

            {/* Онлайн просмотр */}
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 md:col-span-2">
              <div className="text-red-400 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4">Онлайн просмотр документации</h3>
              <p className="text-gray-300 mb-6">
                Просматривайте документацию прямо в браузере без скачивания файлов
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => window.open('/api/docs/full', '_blank')}
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300"
                >
                  Полная документация
                </button>
                <button 
                  onClick={() => window.open('/api/docs/quickstart', '_blank')}
                  className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                  Быстрый старт
                </button>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Дополнительные <span className="gradient-text">ресурсы</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-bold mb-2">API Reference</h4>
                <p className="text-gray-300 text-sm mb-4">Справочник по REST API</p>
                <button className="text-blue-400 hover:text-blue-300 font-medium">
                  Скоро
                </button>
              </div>
              
              <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="font-bold mb-2">Руководство пользователя</h4>
                <p className="text-gray-300 text-sm mb-4">Для конечных пользователей</p>
                <button className="text-green-400 hover:text-green-300 font-medium">
                  Скоро
                </button>
              </div>
              
              <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold mb-2">Лучшие практики</h4>
                <p className="text-gray-300 text-sm mb-4">Рекомендации по безопасности</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium">
                  Скоро
                </button>
              </div>
              
              <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-bold mb-2">Troubleshooting</h4>
                <p className="text-gray-300 text-sm mb-4">Решение проблем</p>
                <button className="text-yellow-400 hover:text-yellow-300 font-medium">
                  Скоро
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-16 text-center">
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Нужна помощь с <span className="gradient-text">документацией</span>?
              </h2>
              <p className="text-gray-300 mb-6">
                Наша команда поддержки готова помочь вам разобраться с любыми вопросами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@secure-t.com"
                  className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300"
                >
                  Написать в поддержку
                </a>
                <a 
                  href="tel:+74951234567"
                  className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Позвонить: +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-3xl font-bold gradient-text">GUNDYREV</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 GUNDYREV. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm">
            Документация системы информационной безопасности SECURE-T
          </p>
        </div>
      </footer>
    </>
  );
} 