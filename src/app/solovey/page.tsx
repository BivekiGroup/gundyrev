import Navigation from '../components/Navigation';

export default function Solovey() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-black to-yellow-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-2xl">🐦</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-amber-400">Соловей</h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Профессиональная платформа для видеосвязи и онлайн-встреч на вашем домене
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
              Попробовать демо
            </button>
            <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Заказать внедрение
            </button>
          </div>
          
          <div className="glass-effect p-4 rounded-lg inline-block">
            <p className="text-sm text-gray-400">
              💡 Устанавливается на поддомене заказчика с нашей технической поддержкой
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возможности <span className="text-amber-400">Соловей</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полнофункциональная платформа для корпоративных коммуникаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold mb-4">HD видеосвязь</h3>
              <p className="text-gray-300">
                Качественная видеосвязь в разрешении до 4K с адаптивной настройкой под канал связи
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4">Групповые конференции</h3>
              <p className="text-gray-300">
                Поддержка до 100 участников одновременно с возможностью модерации
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-orange-400 text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-4">Демонстрация экрана</h3>
              <p className="text-gray-300">
                Совместное использование экрана, презентаций и приложений
              </p>
            </div>

            <div className="text-green-400 p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-4">Чат и файлообмен</h3>
              <p className="text-gray-300">
                Встроенный чат с возможностью отправки файлов и ссылок
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Мультиплатформенность</h3>
              <p className="text-gray-300">
                Работает в браузере, на мобильных устройствах и десктопе
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Безопасность</h3>
              <p className="text-gray-300">
                End-to-end шифрование и защита от несанкционированного доступа
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Аналитика</h3>
              <p className="text-gray-300">
                Детальная статистика использования и отчеты по конференциям
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">Брендинг</h3>
              <p className="text-gray-300">
                Настройка интерфейса под корпоративный стиль заказчика
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-4">API интеграция</h3>
              <p className="text-gray-300">
                Возможность интеграции с корпоративными системами через API
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Варианты <span className="text-amber-400">размещения</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">На поддомене заказчика</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-amber-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Ваш домен</h4>
                    <p className="text-gray-300 text-sm">meet.yourcompany.ru или conference.yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-amber-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Полный контроль</h4>
                    <p className="text-gray-300 text-sm">Управление пользователями и настройками</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-amber-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Корпоративный стиль</h4>
                    <p className="text-gray-300 text-sm">Логотип, цвета и дизайн под ваш бренд</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-amber-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Техподдержка</h4>
                    <p className="text-gray-300 text-sm">Наша команда обеспечивает работу сервиса</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Пример интеграции</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">https://meet.company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">Основной домен для конференций</div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">https://api.meet.company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">API для интеграции с системами</div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">admin@company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">Административный доступ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Сценарии <span className="text-amber-400">использования</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-3xl mb-4">🏢</div>
              <h4 className="text-lg font-bold mb-3">Корпоративные встречи</h4>
              <p className="text-gray-300 text-sm">
                Планерки, совещания, презентации для сотрудников
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">🎓</div>
              <h4 className="text-lg font-bold mb-3">Обучение и тренинги</h4>
              <p className="text-gray-300 text-sm">
                Дистанционное обучение персонала и клиентов
              </p>
            </div>

            <div className="text-green-400 p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-bold mb-3">Переговоры с клиентами</h4>
              <p className="text-gray-300 text-sm">
                Презентации продуктов и услуг потенциальным клиентам
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4">🏥</div>
              <h4 className="text-lg font-bold mb-3">Телемедицина</h4>
              <p className="text-gray-300 text-sm">
                Консультации врачей и медицинские консилиумы
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4">⚖️</div>
              <h4 className="text-lg font-bold mb-3">Юридические консультации</h4>
              <p className="text-gray-300 text-sm">
                Удаленные консультации и судебные заседания
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4">🏛️</div>
              <h4 className="text-lg font-bold mb-3">Государственные услуги</h4>
              <p className="text-gray-300 text-sm">
                Прием граждан и межведомственное взаимодействие
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4">🔧</div>
              <h4 className="text-lg font-bold mb-3">Техническая поддержка</h4>
              <p className="text-gray-300 text-sm">
                Удаленная диагностика и решение проблем
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-3xl mb-4">📺</div>
              <h4 className="text-lg font-bold mb-3">Вебинары и события</h4>
              <p className="text-gray-300 text-sm">
                Массовые онлайн-мероприятия и конференции
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Технические <span className="text-amber-400">характеристики</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Системные требования</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Браузеры</h4>
                  <p className="text-gray-300 text-sm">Chrome 70+, Firefox 68+, Safari 12+, Edge 79+</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Мобильные устройства</h4>
                  <p className="text-gray-300 text-sm">iOS 12+, Android 7+</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Пропускная способность</h4>
                  <p className="text-gray-300 text-sm">Минимум 1 Мбит/с на участника</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Серверные требования</h4>
                  <p className="text-gray-300 text-sm">4 CPU, 8GB RAM, 100GB SSD</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Функциональность</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Максимальное количество участников</h4>
                  <p className="text-gray-300 text-sm">До 100 одновременно</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Качество видео</h4>
                  <p className="text-gray-300 text-sm">До 4K (3840x2160) при наличии канала</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Запись конференций</h4>
                  <p className="text-gray-300 text-sm">MP4, автоматическая загрузка в облако</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Интеграции</h4>
                  <p className="text-gray-300 text-sm">REST API, WebHooks, календари</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Стоимость <span className="text-amber-400">внедрения</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Гибкие тарифные планы для организаций любого размера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Стартовый</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 50 000 ₽</div>
              <p className="text-gray-300 mb-6">Базовая конфигурация для малого бизнеса</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• До 25 участников</li>
                <li>• Базовый брендинг</li>
                <li>• Техподдержка в рабочее время</li>
                <li>• 3 месяца сопровождения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-2 border-amber-500">
              <div className="text-amber-400 text-sm font-bold mb-2">ПОПУЛЯРНЫЙ</div>
              <h3 className="text-xl font-bold mb-4">Корпоративный</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 150 000 ₽</div>
              <p className="text-gray-300 mb-6">Полнофункциональное решение для среднего бизнеса</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• До 100 участников</li>
                <li>• Полный брендинг</li>
                <li>• API интеграция</li>
                <li>• 24/7 техподдержка</li>
                <li>• 12 месяцев сопровождения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Энтерпрайз</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 500 000 ₽</div>
              <p className="text-gray-300 mb-6">Масштабируемое решение для крупных организаций</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Неограниченное количество участников</li>
                <li>• Кластерная архитектура</li>
                <li>• Индивидуальная разработка</li>
                <li>• Выделенная техподдержка</li>
                <li>• SLA 99.9%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Готовы запустить <span className="text-amber-400">Соловей</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Обсудим ваши потребности и подготовим индивидуальное предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                Заказать демо
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Получить консультацию
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
            Соловей — профессиональная платформа видеосвязи
          </p>
        </div>
      </footer>
    </>
  );
} 