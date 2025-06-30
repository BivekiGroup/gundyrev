import Navigation from '../components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            О <span className="gradient-text">нас</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            GUNDYREV — это команда профессионалов, создающих инновационные IT-решения для современного бизнеса
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Наша <span className="gradient-text">история</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Компания GUNDYREV была основана с целью предоставления комплексных IT-решений, 
                которые действительно работают и приносят результат. Мы начинали как небольшая 
                команда разработчиков, а сегодня представляем собой многопрофильную IT-компанию 
                с широким спектром услуг.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                За годы работы мы накопили огромный опыт в различных областях информационных 
                технологий — от разработки программного обеспечения до поставки сложного 
                электронного оборудования. Наш подход основан на глубоком понимании потребностей 
                клиентов и применении самых современных технологий.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Сегодня мы гордимся тем, что являемся надежным партнером как для частных 
                компаний, так и для государственных организаций, предоставляя им качественные 
                решения, которые помогают развивать их бизнес и повышать эффективность работы.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">2019</span>
                  </div>
                  <h3 className="text-xl font-bold">Основание компании</h3>
                </div>
                <p className="text-gray-300">Начало деятельности в сфере разработки ПО</p>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2020</span>
                  </div>
                  <h3 className="text-xl font-bold">Расширение услуг</h3>
                </div>
                <p className="text-gray-300">Добавление поставки электроники и системной интеграции</p>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2022</span>
                  </div>
                  <h3 className="text-xl font-bold">Государственные контракты</h3>
                </div>
                <p className="text-gray-300">Начало работы с госсектором по 44-ФЗ и 223-ФЗ</p>
              </div>

              <div className="glass-effect p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">2024</span>
                  </div>
                  <h3 className="text-xl font-bold">Полный спектр услуг</h3>
                </div>
                <p className="text-gray-300">Комплексный поставщик IT-решений и оборудования</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">ценности</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Результативность</h3>
              <p className="text-gray-300">
                Мы ориентированы на достижение конкретных результатов и решение реальных задач бизнеса
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">Профессионализм</h3>
              <p className="text-gray-300">
                Высокая экспертиза и постоянное развитие компетенций в области IT-технологий
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Партнерство</h3>
              <p className="text-gray-300">
                Долгосрочные отношения с клиентами, основанные на взаимном доверии и понимании
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Инновации</h3>
              <p className="text-gray-300">
                Использование передовых технологий и современных подходов к решению задач
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Надежность</h3>
              <p className="text-gray-300">
                Гарантированное качество услуг и соблюдение всех договорных обязательств
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-4">Развитие</h3>
              <p className="text-gray-300">
                Постоянное совершенствование процессов и расширение спектра предоставляемых услуг
              </p>
            </div>
          </div>

          <div className="glass-effect p-12 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-6">Наша миссия</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Предоставлять комплексные IT-решения, которые помогают нашим клиентам достигать 
              бизнес-целей, повышать эффективность работы и успешно развиваться в цифровой экономике. 
              Мы стремимся быть надежным технологическим партнером, который понимает потребности 
              бизнеса и предлагает оптимальные решения.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">направления</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексный подход к решению IT-задач любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4">💻</div>
              <h4 className="text-lg font-bold mb-3">Разработка ПО</h4>
              <p className="text-gray-300 text-sm mb-4">
                Веб-приложения, мобильные приложения, десктопные программы
              </p>
              <a href="/development" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-bold mb-3">Поставка электроники</h4>
              <p className="text-gray-300 text-sm mb-4">
                От аксессуаров до серверного оборудования, работа с госзакупками
              </p>
              <a href="/electronics" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4">🔒</div>
              <h4 className="text-lg font-bold mb-3">UX Софт</h4>
              <p className="text-gray-300 text-sm mb-4">
                Программное обеспечение для улучшения пользовательского опыта
              </p>
              <a href="/ux-software" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-3xl mb-4">🐦</div>
              <h4 className="text-lg font-bold mb-3">Соловей</h4>
              <p className="text-gray-300 text-sm mb-4">
                Платформа видеосвязи на поддомене заказчика
              </p>
              <a href="/solovey" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4">🛡️</div>
              <h4 className="text-lg font-bold mb-3">Secure-T</h4>
              <p className="text-gray-300 text-sm mb-4">
                Решения информационной безопасности и защиты данных
              </p>
              <a href="/secure-t" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4">🔧</div>
              <h4 className="text-lg font-bold mb-3">Dr.Web</h4>
              <p className="text-gray-300 text-sm mb-4">
                Официальный партнер Dr.Web, антивирусные решения
              </p>
              <a href="/drweb" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">🏢</div>
              <h4 className="text-lg font-bold mb-3">B2B решения</h4>
              <p className="text-gray-300 text-sm mb-4">
                Корпоративные поставки и индивидуальные условия
              </p>
              <span className="text-yellow-400 text-sm font-medium">Консультации</span>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-3xl mb-4">🏛️</div>
              <h4 className="text-lg font-bold mb-3">B2G решения</h4>
              <p className="text-gray-300 text-sm mb-4">
                Работа с государственными организациями по 44-ФЗ и 223-ФЗ
              </p>
              <span className="text-pink-400 text-sm font-medium">Тендеры</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему выбирают <span className="gradient-text">нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">Наши преимущества</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Комплексный подход</h4>
                    <p className="text-gray-300">Решаем задачи любой сложности — от простых поставок до сложных IT-проектов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Опыт работы с госсектором</h4>
                    <p className="text-gray-300">Знаем все тонкости работы по 44-ФЗ и 223-ФЗ, имеем успешный опыт участия в тендерах</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Собственные разработки</h4>
                    <p className="text-gray-300">Создаем уникальные программные решения под специфические задачи клиентов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Партнерства с ведущими брендами</h4>
                    <p className="text-gray-300">Официальные партнерские отношения с производителями оборудования и ПО</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Постпроектная поддержка</h4>
                    <p className="text-gray-300">Обеспечиваем техническую поддержку и сопровождение после завершения проектов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <p className="text-gray-300">Выполненных проектов</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <p className="text-gray-300">Довольных клиентов</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <p className="text-gray-300">Лет на рынке</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <p className="text-gray-300">Техническая поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Готовы стать нашим <span className="gradient-text">партнером</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Свяжитесь с нами для обсуждения вашего проекта или получения консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                Связаться с нами
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Заказать консультацию
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
            Ваш надежный IT-партнер для решения любых технологических задач
          </p>
        </div>
      </footer>
    </>
  );
} 