import Navigation from './components/Navigation';
import InteractiveBlocks from './components/InteractiveBlocks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding pt-52">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">GUNDYREV</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Комплексные IT-решения для бизнеса. От разработки до поставки оборудования.
          </p>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full floating-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">О нас</h2>
              <p className="text-gray-300 text-lg mb-6">
                GUNDYREV — это команда профессионалов, специализирующихся на создании 
                современных IT-решений и поставке высококачественного оборудования.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Мы работаем с государственными и коммерческими организациями, 
                предоставляя полный спектр услуг от разработки программного обеспечения 
                до комплексных поставок электроники по 44-ФЗ и 223-ФЗ.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400">лет опыта</div>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-gray-400">проектов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Наши принципы</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Качество превыше всего
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Соблюдение сроков
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Прозрачность процессов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Наши направления</h2>
          <p className="text-xl text-gray-300 mb-8">
            Перетаскивайте блоки и изучайте наши услуги интерактивно
          </p>
        </div>
        
        {/* Interactive Blocks */}
        <InteractiveBlocks />
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300 mb-12">
            Готовы обсудить ваш проект? Мы всегда открыты для новых возможностей.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-300">info@gundyrev.ru</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-white">Телефон</h3>
              <p className="text-gray-300">+7 (XXX) XXX-XX-XX</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 text-white">Telegram</h3>
              <p className="text-gray-300">@gundyrev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 GUNDYREV. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
