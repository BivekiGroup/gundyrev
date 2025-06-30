import Navigation from '../components/Navigation';

export default function DrWeb() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Dr.Web Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-emerald-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">Dr</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-green-400">Dr.Web</h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Официальный партнер Dr.Web — надежная антивирусная защита для бизнеса и дома
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
              Продукты Dr.Web
            </button>
            <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Получить лицензию
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Продукты <span className="text-green-400">Dr.Web</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения антивирусной защиты для различных потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web Security Space</h3>
              <p className="text-gray-300 mb-4">
                Комплексная защита для домашних компьютеров и ноутбуков
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Антивирус и антишпион</li>
                <li>• Файрвол</li>
                <li>• Антиспам</li>
                <li>• Родительский контроль</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web Enterprise Suite</h3>
              <p className="text-gray-300 mb-4">
                Корпоративное решение для защиты бизнеса
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Централизованное управление</li>
                <li>• Защита серверов</li>
                <li>• Почтовая безопасность</li>
                <li>• Мобильная защита</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web Mobile Security</h3>
              <p className="text-gray-300 mb-4">
                Защита мобильных устройств Android и iOS
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Антивирус для мобильных</li>
                <li>• Антивор</li>
                <li>• URL-фильтр</li>
                <li>• Родительский контроль</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web Gateway Security</h3>
              <p className="text-gray-300 mb-4">
                Защита интернет-шлюзов и почтовых серверов
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Фильтрация трафика</li>
                <li>• Антиспам</li>
                <li>• Контент-фильтр</li>
                <li>• Защита от фишинга</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web Cloud</h3>
              <p className="text-gray-300 mb-4">
                Облачные решения безопасности
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Облачная консоль</li>
                <li>• Удаленное управление</li>
                <li>• Автоматические обновления</li>
                <li>• Масштабируемость</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500">
              <div className="text-green-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">Dr.Web CureIt!</h3>
              <p className="text-gray-300 mb-4">
                Бесплатная утилита для лечения зараженных компьютеров
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Не требует установки</li>
                <li>• Быстрое сканирование</li>
                <li>• Лечение вирусов</li>
                <li>• Регулярные обновления</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Брендбук <span className="text-green-400">Dr.Web</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Соблюдение фирменного стиля и требований бренда Dr.Web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">Фирменные цвета</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded"></div>
                  <div>
                    <p className="font-semibold">Dr.Web Green</p>
                    <p className="text-sm text-gray-400">#00B04F</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded"></div>
                  <div>
                    <p className="font-semibold">Dr.Web Dark</p>
                    <p className="text-sm text-gray-400">#2C2C2C</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded border"></div>
                  <div>
                    <p className="font-semibold">Dr.Web White</p>
                    <p className="text-sm text-gray-400">#FFFFFF</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">Логотип</h3>
              <div className="glass-effect p-8 rounded-lg">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">Dr</span>
                  </div>
                  <span className="text-4xl font-bold text-green-400">Dr.Web</span>
                </div>
                <p className="text-gray-300 text-center text-sm">
                  Официальный логотип Dr.Web должен использоваться без изменений
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">Правила использования бренда</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-green-400">✓ Разрешено:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Использование официального логотипа</li>
                  <li>• Соблюдение фирменных цветов</li>
                  <li>• Указание статуса партнера</li>
                  <li>• Размещение сертификатов</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-red-400">✗ Запрещено:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Изменение логотипа</li>
                  <li>• Использование неофициальных цветов</li>
                  <li>• Искажение пропорций</li>
                  <li>• Нарушение позиционирования</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Партнерство с <span className="text-green-400">Dr.Web</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-4">Сертифицированный партнер</h3>
              <p className="text-gray-300">
                Официальный статус партнера Dr.Web с подтвержденной компетенцией
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-4">Обученные специалисты</h3>
              <p className="text-gray-300">
                Наши эксперты прошли официальное обучение по продуктам Dr.Web
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-4">Техническая поддержка</h3>
              <p className="text-gray-300">
                Полная техническая поддержка внедрения и использования решений
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg border-l-4 border-green-500">
            <h2 className="text-3xl font-bold mb-6">
              Нужна защита от <span className="text-green-400">Dr.Web</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Поможем выбрать и внедрить оптимальное решение Dr.Web для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                Получить консультацию
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Заказать лицензию
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
            © 2024 GUNDYREV. Официальный партнер Dr.Web.
          </p>
          <p className="text-gray-500 text-sm">
            Dr.Web — надежная антивирусная защита
          </p>
        </div>
      </footer>
    </>
  );
} 