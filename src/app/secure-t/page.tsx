import Navigation from '../components/Navigation';

export default function SecureT() {
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
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">SECURE-T</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Комплексные решения для информационной безопасности и защиты данных
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300">
              Наши решения
            </button>
            <a 
              href="/secure-t/documentation" 
              className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
            >
              Документация
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Решения <span className="gradient-text">SECURE-T</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Передовые технологии защиты информации для современного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-4">Криптографическая защита</h3>
              <p className="text-gray-300">
                Современные алгоритмы шифрования для защиты конфиденциальных данных
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-orange-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Сетевая безопасность</h3>
              <p className="text-gray-300">
                Комплексная защита сетевой инфраструктуры от внешних угроз
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Мониторинг безопасности</h3>
              <p className="text-gray-300">
                Системы мониторинга и анализа инцидентов информационной безопасности
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4">Аудит безопасности</h3>
              <p className="text-gray-300">
                Проведение комплексного аудита систем информационной безопасности
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Интеграция систем</h3>
              <p className="text-gray-300">
                Интеграция решений безопасности с существующей IT-инфраструктурой
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-4">Обучение персонала</h3>
              <p className="text-gray-300">
                Программы обучения сотрудников основам информационной безопасности
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Используемые <span className="gradient-text">технологии</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">AES-256</h4>
              <p className="text-gray-300 text-sm">Шифрование данных</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">RSA-4096</h4>
              <p className="text-gray-300 text-sm">Асимметричное шифрование</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">SHA-3</h4>
              <p className="text-gray-300 text-sm">Хеширование</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">PKI</h4>
              <p className="text-gray-300 text-sm">Инфраструктура ключей</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">SIEM</h4>
              <p className="text-gray-300 text-sm">Управление событиями</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">DLP</h4>
              <p className="text-gray-300 text-sm">Защита от утечек</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">WAF</h4>
              <p className="text-gray-300 text-sm">Веб-защита</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300">
              <h4 className="font-bold mb-2">IDS/IPS</h4>
              <p className="text-gray-300 text-sm">Обнаружение вторжений</p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Documentation */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Материалы и <span className="gradient-text">документация</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4">📄</div>
              <h4 className="text-lg font-bold mb-3">Техническая документация</h4>
              <p className="text-gray-300 mb-4">Подробные руководства по внедрению и настройке</p>
              <button className="text-blue-400 hover:text-blue-300 font-medium">Скачать →</button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-bold mb-3">Методические материалы</h4>
              <p className="text-gray-300 mb-4">Лучшие практики информационной безопасности</p>
              <button className="text-green-400 hover:text-green-300 font-medium">Скачать →</button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4">🔧</div>
              <h4 className="text-lg font-bold mb-3">Инструменты настройки</h4>
              <p className="text-gray-300 mb-4">Утилиты для конфигурирования системы</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium">Скачать →</button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4">📊</div>
              <h4 className="text-lg font-bold mb-3">Отчеты и аналитика</h4>
              <p className="text-gray-300 mb-4">Шаблоны отчетов и аналитические данные</p>
              <button className="text-red-400 hover:text-red-300 font-medium">Скачать →</button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">🎓</div>
              <h4 className="text-lg font-bold mb-3">Обучающие материалы</h4>
              <p className="text-gray-300 mb-4">Курсы и тренинги по безопасности</p>
              <button className="text-yellow-400 hover:text-yellow-300 font-medium">Скачать →</button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4">📋</div>
              <h4 className="text-lg font-bold mb-3">Сертификаты и лицензии</h4>
              <p className="text-gray-300 mb-4">Документы о соответствии стандартам</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium">Скачать →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Нужна консультация по <span className="gradient-text">SECURE-T</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Наши эксперты помогут подобрать оптимальное решение для вашей организации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300">
                Получить консультацию
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Заказать аудит
              </button>
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
            Решения информационной безопасности SECURE-T
          </p>
        </div>
      </footer>
    </>
  );
} 