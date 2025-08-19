'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { 
  ShoppingCart, 
  Monitor, 
  Smartphone, 
  Plug, 
  Server, 
  Globe, 
  ClipboardList, 
  CheckCircle, 
  Package, 
  Truck, 
  Home, 
  Star, 
  Zap, 
  FileText, 
  Building2, 
  Package2, 
  Wrench, 
  MapPin, 
  DollarSign, 
  X
} from 'lucide-react';

export default function Electronics() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>>([]);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
    icon: string;
  }>>([]);

  // Modals
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const [specForm, setSpecForm] = useState({ name: '', email: '', company: '', items: '' });
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', time: '' });

  const openModal = (type: 'catalog' | 'spec' | 'callback') => {
    if (type === 'catalog') setIsCatalogModalOpen(true);
    if (type === 'spec') setIsSpecModalOpen(true);
    if (type === 'callback') setIsCallbackModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModals = () => {
    setIsCatalogModalOpen(false);
    setIsSpecModalOpen(false);
    setIsCallbackModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleSpecChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSpecForm(prev => ({ ...prev, [name]: value }));
  };
  const handleCallbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallbackForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSpecSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${specForm.name}! Мы подготовим КП и свяжемся по ${specForm.email}.`);
    setSpecForm({ name: '', email: '', company: '', items: '' });
    closeModals();
  };
  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заявка на звонок принята, ${callbackForm.name}. Мы перезвоним на ${callbackForm.phone}.`);
    setCallbackForm({ name: '', phone: '', time: '' });
    closeModals();
  };

  const categories = [
    { id: 'all', name: 'Все товары', icon: <ShoppingCart className="w-5 h-5" />, color: 'cyan' },
    { id: 'computers', name: 'Компьютеры', icon: <Monitor className="w-5 h-5" />, color: 'blue' },
    { id: 'phones', name: 'Телефоны', icon: <Smartphone className="w-5 h-5" />, color: 'green' },
    { id: 'accessories', name: 'Аксессуары', icon: <Plug className="w-5 h-5" />, color: 'purple' },
    { id: 'servers', name: 'Серверы', icon: <Server className="w-5 h-5" />, color: 'orange' },
    { id: 'network', name: 'Сеть', icon: <Globe className="w-5 h-5" />, color: 'teal' }
  ];

  const products = [
    { id: '1', name: 'MacBook Pro 16"', price: 250000, category: 'computers', stock: 15, rating: 4.9 },
    { id: '2', name: 'iPhone 15 Pro', price: 120000, category: 'phones', stock: 25, rating: 4.8 },
    { id: '3', name: 'Dell XPS 13', price: 180000, category: 'computers', stock: 8, rating: 4.7 },
    { id: '4', name: 'Samsung Galaxy S24', price: 95000, category: 'phones', stock: 20, rating: 4.6 },
    { id: '5', name: 'Зарядное устройство 65W', price: 3500, category: 'accessories', stock: 50, rating: 4.5 },
    { id: '6', name: 'HP ProLiant DL380', price: 450000, category: 'servers', stock: 3, rating: 4.9 },
    { id: '7', name: 'Cisco Catalyst 9300', price: 320000, category: 'network', stock: 5, rating: 4.8 },
    { id: '8', name: 'Кабель USB-C 2м', price: 1200, category: 'accessories', stock: 100, rating: 4.4 }
  ];

  const deliverySteps = [
    { name: 'Заказ получен', icon: <ClipboardList className="w-6 h-6" />, completed: true },
    { name: 'Подтверждение', icon: <CheckCircle className="w-6 h-6" />, completed: true },
    { name: 'Сборка', icon: <Package className="w-6 h-6" />, completed: true },
    { name: 'Отправка', icon: <Truck className="w-6 h-6" />, completed: false },
    { name: 'Доставка', icon: <Home className="w-6 h-6" />, completed: false }
  ];

  // Генерация электронных частиц
  useEffect(() => {
    const icons = ['⚡', '🔋', '💾', '🔌', '📡', '💻', '📱', '🖥️'];
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${8 + Math.random() * 12}s`,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setParticles(newParticles);
  }, []);

  // Анимация прогресса доставки
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryStatus(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-teal-900"></div>
        
        {/* Анимированные электронные частицы */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute text-2xl opacity-60 floating-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            >
              {particle.icon}
            </div>
          ))}
        </div>
        
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
          
          {/* Интерактивные статистики */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-gray-400">Товаров в наличии</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold gradient-text">24ч</div>
              <div className="text-sm text-gray-400">Быстрая доставка</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm text-gray-400">Выигранных тендеров</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold gradient-text">99%</div>
              <div className="text-sm text-gray-400">Довольных клиентов</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => setIsCalculatorOpen(true)}
              className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 transform hover:scale-105"
            >
              Калькулятор стоимости
            </button>
            <button onClick={() => openModal('catalog')} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow transition-all duration-300 transform hover:scale-105">
              Каталог товаров
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="glass-effect px-4 py-2 rounded-full hover-glow transition-all duration-300">
              <span className="text-cyan-400">44-ФЗ</span> • Госзакупки
            </div>
            <div className="glass-effect px-4 py-2 rounded-full hover-glow transition-all duration-300">
              <span className="text-teal-400">223-ФЗ</span> • Корпоративные закупки
            </div>
            <div className="glass-effect px-4 py-2 rounded-full hover-glow transition-all duration-300">
              <span className="text-green-400">B2B</span> • Коммерческие поставки
            </div>
          </div>
        </div>
      </section>

      {/* Интерактивный каталог товаров */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Интерактивный <span className="gradient-text">каталог</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Выберите категорию и добавьте товары в корзину для расчета стоимости
            </p>
          </div>

          {/* Фильтр категорий */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-${category.color}-500 text-white shadow-lg hover-glow`
                    : 'glass-effect text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="mr-2 flex items-center">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Товары */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800/50 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  <div className="text-4xl mb-4 text-center">
                     {product.category === 'computers' && <Monitor className="w-8 h-8 mx-auto" />}
                     {product.category === 'phones' && <Smartphone className="w-8 h-8 mx-auto" />}
                     {product.category === 'accessories' && <Plug className="w-8 h-8 mx-auto" />}
                     {product.category === 'servers' && <Server className="w-8 h-8 mx-auto" />}
                     {product.category === 'network' && <Globe className="w-8 h-8 mx-auto" />}
                  </div>
                  
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg"></div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-400">{product.rating}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold gradient-text">
                    {formatPrice(product.price)}
                  </span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    product.stock > 10 ? 'bg-green-500/20 text-green-400' : 
                    product.stock > 0 ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {product.stock > 0 ? `${product.stock} шт.` : 'Нет в наличии'}
                  </span>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className="w-full px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Добавить в корзину
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Трекер доставки */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Трекер <span className="gradient-text">доставки</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Отслеживайте статус вашего заказа в реальном времени
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-lg">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Заказ #12345</h3>
                  <p className="text-gray-400">Ожидаемая доставка: завтра до 18:00</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold gradient-text">{deliveryStatus}%</div>
                  <div className="text-sm text-gray-400">Готовность</div>
                </div>
              </div>

              {/* Прогресс бар */}
              <div className="mb-8">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${deliveryStatus}%` }}
                  ></div>
                </div>
              </div>

              {/* Этапы доставки */}
              <div className="flex justify-between">
                {deliverySteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                      step.completed ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                      <div className="text-xl">{step.icon}</div>
                    </div>
                    <span className={`text-sm ${step.completed ? 'text-green-400' : 'text-gray-400'}`}>
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Procurement */}
      <section className="section-padding bg-white-light">
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
                <div className="text-cyan-400 text-3xl mb-3 flex justify-center"><ClipboardList className="w-8 h-8" /></div>
                <h4 className="font-bold mb-2">Опыт участия</h4>
                <p className="text-gray-300 text-sm">Более 500 выигранных тендеров</p>
              </div>
              
              <div className="text-center">
                <div className="text-teal-400 text-3xl mb-3 flex justify-center"><Star className="w-8 h-8" /></div>
                <h4 className="font-bold mb-2">Высокий рейтинг</h4>
                <p className="text-gray-300 text-sm">Надежный поставщик без нарушений</p>
              </div>
              
              <div className="text-center">
                <div className="text-green-400 text-3xl mb-3 flex justify-center"><Zap className="w-8 h-8" /></div>
                <h4 className="font-bold mb-2">Быстрая поставка</h4>
                <p className="text-gray-300 text-sm">Соблюдение всех сроков контракта</p>
              </div>
              
              <div className="text-center">
                <div className="text-blue-400 text-3xl mb-3 flex justify-center"><FileText className="w-8 h-8" /></div>
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
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><Building2 className="w-8 h-8" /></div>
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
              <div className="text-blue-400 text-4xl mb-4 flex justify-center"><Package2 className="w-8 h-8" /></div>
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
              <div className="text-purple-400 text-4xl mb-4 flex justify-center"><Wrench className="w-8 h-8" /></div>
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
      <section className="section-padding bg-white-light">
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

      {/* Калькулятор стоимости */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold gradient-text">Калькулятор стоимости</h3>
              <button
                onClick={() => setIsCalculatorOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4 flex justify-center"><ShoppingCart className="w-12 h-12" /></div>
                <p className="text-gray-400">Корзина пуста. Добавьте товары из каталога.</p>
              </div>
            ) : (
              <div>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-400">Количество: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{formatPrice(item.price * item.quantity)}</div>
                        <div className="text-sm text-gray-400">{formatPrice(item.price)} за шт.</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Итого:</span>
                    <span className="gradient-text">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                    <span>НДС 20%:</span>
                    <span>{formatPrice(getTotalPrice() * 0.2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400 mt-1">
                    <span>Доставка:</span>
                    <span>{getTotalPrice() > 50000 ? 'Бесплатно' : formatPrice(2000)}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                    Оформить заказ
                  </button>
                  <button 
                    onClick={() => setCartItems([])}
                    className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Очистить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Корзина (фиксированная) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="glass-effect p-4 rounded-full hover-glow transition-all duration-300 transform hover:scale-110"
          >
            <div className="relative">
              <ShoppingCart className="w-8 h-8" />
              <div className="absolute -top-2 -right-2 bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Интерактивная карта складов */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">склады</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Быстрая доставка из ближайшего склада
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: 'Москва', address: 'Варшавское шоссе, 125', stock: '8500+ товаров', delivery: '2-4 часа', load: 85 },
              { city: 'Санкт-Петербург', address: 'Индустриальный пр., 44', stock: '6200+ товаров', delivery: '4-6 часов', load: 72 },
              { city: 'Екатеринбург', address: 'Кольцовский тракт, 18', stock: '4800+ товаров', delivery: '6-8 часов', load: 91 },
              { city: 'Новосибирск', address: 'Красный пр., 220', stock: '3500+ товаров', delivery: '1-2 дня', load: 68 },
              { city: 'Казань', address: 'Оренбургский тракт, 85', stock: '2900+ товаров', delivery: '1-2 дня', load: 79 },
              { city: 'Нижний Новгород', address: 'Московское шоссе, 15', stock: '3200+ товаров', delivery: '1-2 дня', load: 83 }
            ].map((warehouse, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h3 className="text-xl font-bold">{warehouse.city}</h3>
                    <p className="text-sm text-gray-400">{warehouse.address}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Товаров:</span>
                    <span className="text-cyan-400 font-semibold">{warehouse.stock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Доставка:</span>
                    <span className="text-teal-400 font-semibold">{warehouse.delivery}</span>
                  </div>
                </div>
                
                <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${warehouse.load}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Загруженность склада: {warehouse.load}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Анимированная схема подключения */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Схема <span className="gradient-text">подключения</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Как работает наша система поставок
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {[
                { icon: <ClipboardList className="w-8 h-8" />, title: 'Заявка', desc: 'Получаем вашу спецификацию' },
                { icon: <DollarSign className="w-8 h-8" />, title: 'Расчет', desc: 'Формируем коммерческое предложение' },
                { icon: <Package className="w-8 h-8" />, title: 'Сборка', desc: 'Комплектуем заказ на складе' },
                { icon: <Truck className="w-8 h-8" />, title: 'Доставка', desc: 'Доставляем в указанное место' },
                { icon: <CheckCircle className="w-8 h-8" />, title: 'Приемка', desc: 'Подписываем документы' }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover-glow transition-all duration-300 transform hover:scale-110">
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 max-w-32">{step.desc}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-10 left-full w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg hover-glow transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">
              Нужна поставка <span className="gradient-text">оборудования</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Отправьте нам спецификацию — подготовим коммерческое предложение в течение дня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openModal('spec')} className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
                Отправить спецификацию
              </button>
              <button onClick={() => openModal('callback')} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow transition-all duration-300 transform hover:scale-105">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-3xl font-bold gradient-text">GUNDYREV</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 GUNDYREV. Все права защищены.
          </p>
          <p className="text-gray-500 text-sm">
            Поставка электроники для бизнеса и государственных организаций
          </p>
        </div>
      </footer>
      
      {/* Catalog Modal */}
      {isCatalogModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect p-6 rounded-lg max-w-2xl w-full relative border border-cyan-500/30">
            <button onClick={closeModals} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform">×</button>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Категории каталога</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setSelectedCategory(c.id); closeModals(); }}
                  className="glass-effect p-3 rounded-md text-left hover:bg-white/10 transition-colors text-sm"
                >
                  <div className="flex items-center gap-2 text-gray-200">{c.icon} <span>{c.name}</span></div>
                </button>
              ))}
            </div>
            <div className="text-xs text-gray-400 mt-4">Совет: можно выбирать категории фильтрами в каталоге.</div>
            <div className="mt-4 text-right">
              <button onClick={closeModals} className="px-5 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Закрыть</button>
            </div>
          </div>
        </div>
      )}

      {/* Send Specification Modal */}
      {isSpecModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect p-6 rounded-lg w-[520px] max-w-[92vw] relative border border-cyan-500/30">
            <button onClick={closeModals} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform">×</button>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Отправить спецификацию</h3>
            <form onSubmit={handleSpecSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input name="name" value={specForm.name} onChange={handleSpecChange} required className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
                <input type="email" name="email" value={specForm.email} onChange={handleSpecChange} required className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
                <input name="company" value={specForm.company} onChange={handleSpecChange} className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Список позиций *</label>
                <textarea name="items" value={specForm.items} onChange={handleSpecChange} required rows={4} placeholder="Укажите модели, количество и предпочтения по брендам..." className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div className="flex gap-4 pt-2">
                <button type="button" onClick={closeModals} className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Отмена</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-cyan-500 text-black rounded-md hover:bg-cyan-600 transition-colors text-sm">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Callback Modal */}
      {isCallbackModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect p-6 rounded-lg w-[520px] max-w-[92vw] relative border border-cyan-500/30">
            <button onClick={closeModals} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform">×</button>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Заказать звонок</h3>
            <form onSubmit={handleCallbackSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input name="name" value={callbackForm.name} onChange={handleCallbackChange} required className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Телефон *</label>
                <input name="phone" value={callbackForm.phone} onChange={handleCallbackChange} required className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Удобное время</label>
                <input name="time" value={callbackForm.time} onChange={handleCallbackChange} placeholder="Например, завтра 11:00–13:00" className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"/>
              </div>
              <div className="flex gap-4 pt-2">
                <button type="button" onClick={closeModals} className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Отмена</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-cyan-500 text-black rounded-md hover:bg-cyan-600 transition-colors text-sm">Заказать</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 
