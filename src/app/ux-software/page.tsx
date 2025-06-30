import Navigation from '../components/Navigation';

export default function UXSoftware() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Софт для улучшения <span className="gradient-text">UX</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Программное обеспечение для повышения качества пользовательского опыта в сети интернет
          </p>
          <div className="glass-effect p-4 rounded-lg inline-block mb-8">
            <p className="text-sm text-gray-400">
              * Данная страница носит информационный характер. Публичная оферта отсутствует.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возможности <span className="gradient-text">нашего ПО</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексное решение для оптимизации работы в интернете
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Ускорение соединения</h3>
              <p className="text-gray-300">
                Оптимизация сетевых маршрутов для повышения скорости загрузки контента
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Защита данных</h3>
              <p className="text-gray-300">
                Шифрование трафика для обеспечения конфиденциальности пользователей
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-4">Глобальный доступ</h3>
              <p className="text-gray-300">
                Доступ к контенту без географических ограничений
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Стабильность</h3>
              <p className="text-gray-300">
                Надежное соединение с минимальными разрывами связи
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Анонимность</h3>
              <p className="text-gray-300">
                Сокрытие реального IP-адреса для защиты приватности
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Кроссплатформенность</h3>
              <p className="text-gray-300">
                Поддержка всех популярных операционных систем и устройств
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Как это <span className="gradient-text">работает</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Установка</h3>
              <p className="text-gray-300">
                Простая установка программы на ваше устройство
              </p>
            </div>

            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Настройка</h3>
              <p className="text-gray-300">
                Автоматическая настройка оптимальных параметров
              </p>
            </div>

            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Использование</h3>
              <p className="text-gray-300">
                Наслаждайтесь улучшенным интернет-опытом
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Преимущества использования нашего <span className="gradient-text">ПО</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Повышение производительности</h4>
                    <p className="text-gray-300">Оптимизация сетевых соединений для более быстрой работы</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Защита конфиденциальности</h4>
                    <p className="text-gray-300">Надежное шифрование и защита персональных данных</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Простота использования</h4>
                    <p className="text-gray-300">Интуитивно понятный интерфейс и автоматические настройки</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Техническая поддержка</h4>
                    <p className="text-gray-300">Круглосуточная поддержка пользователей</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Свяжитесь с нами</h3>
              <p className="text-gray-300 text-center mb-6">
                Получите консультацию по внедрению решений для улучшения UX
              </p>
              <div className="text-center">
                <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300">
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Важная информация</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Данная страница носит исключительно информационный характер и не является публичной офертой. 
              Описанное программное обеспечение предназначено для улучшения пользовательского опыта 
              в сети интернет в рамках действующего законодательства. Все решения разрабатываются 
              с учетом требований безопасности и конфиденциальности данных.
            </p>
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
            Программное обеспечение для улучшения пользовательского опыта
          </p>
        </div>
      </footer>
    </>
  );
} 