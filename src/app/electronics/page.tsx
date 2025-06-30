import Navigation from '../components/Navigation';

export default function Electronics() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-teal-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Поставка <span className="gradient-text">электроники</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Комплексные поставки электронного оборудования для бизнеса и государственных организаций
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
              Каталог оборудования
            </button>
            <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Получить КП
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="glass-effect px-4 py-2 rounded-full">
              <span className="text-cyan-400">44-ФЗ</span> • Госзакупки
            </div>
            <div className="glass-effect px-4 py-2 rounded-full">
              <span className="text-teal-400">223-ФЗ</span> • Корпоративные закупки
            </div>
            <div className="glass-effect px-4 py-2 rounded-full">
              <span className="text-green-400">B2B</span> • Коммерческие поставки
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Категории <span className="gradient-text">оборудования</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              От простых аксессуаров до сложного серверного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">🔌</div>
              <h3 className="text-lg font-bold mb-3">Аксессуары</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Зарядные устройства</li>
                <li>• Кабели и переходники</li>
                <li>• Чехлы и защитные пленки</li>
                <li>• Подставки и держатели</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-teal-400 text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-3">Компьютеры и ноутбуки</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Настольные ПК</li>
                <li>• Ноутбуки и ультрабуки</li>
                <li>• Планшеты</li>
                <li>• Моноблоки</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🖥️</div>
              <h3 className="text-lg font-bold mb-3">Периферия</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Мониторы и проекторы</li>
                <li>• Принтеры и МФУ</li>
                <li>• Клавиатуры и мыши</li>
                <li>• Веб-камеры и микрофоны</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-bold mb-3">Сетевое оборудование</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Маршрутизаторы</li>
                <li>• Коммутаторы</li>
                <li>• Точки доступа Wi-Fi</li>
                <li>• Сетевые кабели</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🖨️</div>
              <h3 className="text-lg font-bold mb-3">Офисная техника</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Принтеры и сканеры</li>
                <li>• Копировальные аппараты</li>
                <li>• Ламинаторы</li>
                <li>• Уничтожители документов</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-3">Мобильные устройства</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Смартфоны</li>
                <li>• Планшеты</li>
                <li>• Электронные книги</li>
                <li>• Носимые устройства</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">🔊</div>
              <h3 className="text-lg font-bold mb-3">Аудио и видео</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Колонки и наушники</li>
                <li>• Микрофоны</li>
                <li>• Камеры и видеорегистраторы</li>
                <li>• Системы видеонаблюдения</li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-orange-400 text-4xl mb-4">🖲️</div>
              <h3 className="text-lg font-bold mb-3">Серверное оборудование</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Серверы и рабочие станции</li>
                <li>• Системы хранения данных</li>
                <li>• ИБП и стабилизаторы</li>
                <li>• Серверные шкафы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Procurement */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Работа с <span className="gradient-text">госзакупками</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Профессиональное участие в тендерах по 44-ФЗ и 223-ФЗ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">44-ФЗ • Государственные закупки</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Участие в электронных аукционах</h4>
                    <p className="text-gray-300 text-sm">Работа на всех федеральных торговых площадках</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Конкурсы и котировки</h4>
                    <p className="text-gray-300 text-sm">Подготовка конкурсной документации</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Малые закупки</h4>
                    <p className="text-gray-300 text-sm">Поставки до 600 тыс. рублей</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">223-ФЗ • Корпоративные закупки</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-teal-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Закупки госкорпораций</h4>
                    <p className="text-gray-300 text-sm">РЖД, Газпром, Роснефть и другие</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-teal-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Муниципальные предприятия</h4>
                    <p className="text-gray-300 text-sm">Коммунальные и транспортные компании</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-teal-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Субъекты естественных монополий</h4>
                    <p className="text-gray-300 text-sm">Энергетические и телекоммуникационные компании</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Наши преимущества в госзакупках</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-3xl mb-3">📋</div>
                <h4 className="font-bold mb-2">Опыт участия</h4>
                <p className="text-gray-300 text-sm">Более 500 выигранных тендеров</p>
              </div>
              
              <div className="text-center">
                <div className="text-teal-400 text-3xl mb-3">🏆</div>
                <h4 className="font-bold mb-2">Высокий рейтинг</h4>
                <p className="text-gray-300 text-sm">Надежный поставщик без нарушений</p>
              </div>
              
              <div className="text-center">
                <div className="text-green-400 text-3xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Быстрая поставка</h4>
                <p className="text-gray-300 text-sm">Соблюдение всех сроков контракта</p>
              </div>
              
              <div className="text-center">
                <div className="text-blue-400 text-3xl mb-3">📄</div>
                <h4 className="font-bold mb-2">Все документы</h4>
                <p className="text-gray-300 text-sm">Полный пакет сертификатов и лицензий</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Услуги для <span className="gradient-text">бизнеса</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-4">Корпоративные поставки</h3>
              <p className="text-gray-300 mb-4">
                Комплексное оснащение офисов и производственных помещений
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Индивидуальные условия</li>
                <li>• Отсрочка платежа</li>
                <li>• Гарантийное обслуживание</li>
                <li>• Логистические решения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-4">Складская программа</h3>
              <p className="text-gray-300 mb-4">
                Поддержание складских остатков популярных позиций
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Быстрая отгрузка</li>
                <li>• Резервирование товара</li>
                <li>• Консигнационные поставки</li>
                <li>• Управление запасами</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">Сервисное обслуживание</h3>
              <p className="text-gray-300 mb-4">
                Полный цикл технической поддержки оборудования
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Установка и настройка</li>
                <li>• Гарантийный ремонт</li>
                <li>• Техническая поддержка</li>
                <li>• Обучение персонала</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">партнеры</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Работаем с ведущими производителями электроники
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Apple', 'Samsung', 'Lenovo', 'HP', 'Dell', 'ASUS',
              'Acer', 'MSI', 'Canon', 'Epson', 'Cisco', 'D-Link',
              'TP-Link', 'Huawei', 'Xiaomi', 'Sony', 'LG', 'Philips'
            ].map((brand) => (
              <div key={brand} className="glass-effect p-4 rounded-lg text-center hover-glow transition-all duration-300">
                <span className="font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Нужна поставка <span className="gradient-text">оборудования</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Отправьте нам спецификацию — подготовим коммерческое предложение в течение дня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                Отправить спецификацию
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Заказать звонок
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
            Поставка электроники для бизнеса и государственных организаций
          </p>
        </div>
      </footer>
    </>
  );
} 