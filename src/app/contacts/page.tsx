'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Contacts() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: 'general'
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // Анимация появления
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in-up {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes contact-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.2); }
        50% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.4); }
      }
      @keyframes copy-feedback {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      .animate-slide-in-up { animation: slide-in-up 0.6s ease-out; }
      .animate-contact-glow { animation: contact-glow 3s ease-in-out infinite; }
      .animate-copy-feedback { animation: copy-feedback 0.3s ease-out; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за обращение, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: '', email: '', phone: '', company: '', message: '', type: 'general' });
    setIsFormOpen(false);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const contactTypes = [
    { id: 'general', label: 'Общие вопросы', icon: '💬' },
    { id: 'sales', label: 'Отдел продаж', icon: '💼' },
    { id: 'support', label: 'Техподдержка', icon: '🔧' },
    { id: 'partnership', label: 'Партнёрство', icon: '🤝' }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8 animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Контакты</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы.
            </p>
          </div>

          {/* Быстрые контакты */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div 
              className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 animate-slide-in-up cursor-pointer"
              onClick={() => copyToClipboard('+7 (495) 123-45-67', 'phone')}
              onMouseEnter={() => setHoveredCard('phone')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
              {copySuccess === 'phone' && (
                <p className="text-green-400 text-sm mt-2 animate-copy-feedback">Скопировано!</p>
              )}
              {hoveredCard === 'phone' && (
                <p className="text-gray-400 text-xs mt-2">Нажмите для копирования</p>
              )}
            </div>

            <div 
              className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 animate-slide-in-up cursor-pointer"
              onClick={() => copyToClipboard('info@gundyrev.ru', 'email')}
              onMouseEnter={() => setHoveredCard('email')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@gundyrev.ru</p>
              {copySuccess === 'email' && (
                <p className="text-green-400 text-sm mt-2 animate-copy-feedback">Скопировано!</p>
              )}
              {hoveredCard === 'email' && (
                <p className="text-gray-400 text-xs mt-2">Нажмите для копирования</p>
              )}
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 animate-slide-in-up">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold mb-2">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
              <p className="text-gray-400 text-sm mt-1">МСК</p>
            </div>
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105"
          >
            Написать нам
          </button>
        </div>
      </section>

      {/* Детальные контакты */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Полная <span className="gradient-text">информация</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Вся необходимая информация для связи с нашими отделами
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактные отделы */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Отделы компании</h3>
              
              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💼</span>
                  <h4 className="text-xl font-bold">Отдел продаж</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📞 +7 (495) 123-45-67 доб. 101</p>
                  <p 
                    className="cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('sales@gundyrev.ru', 'sales-email')}
                  >
                    📧 sales@gundyrev.ru
                    {copySuccess === 'sales-email' && <span className="text-green-400 ml-2">✓</span>}
                  </p>
                  <p>👤 Менеджер: Иван Петров</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔧</span>
                  <h4 className="text-xl font-bold">Техническая поддержка</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📞 +7 (495) 123-45-67 доб. 102</p>
                  <p 
                    className="cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('support@gundyrev.ru', 'support-email')}
                  >
                    📧 support@gundyrev.ru
                    {copySuccess === 'support-email' && <span className="text-green-400 ml-2">✓</span>}
                  </p>
                  <p>⏰ 24/7 для критических задач</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h4 className="text-xl font-bold">Бухгалтерия</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📞 +7 (495) 123-45-67 доб. 103</p>
                  <p 
                    className="cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('accounting@gundyrev.ru', 'accounting-email')}
                  >
                    📧 accounting@gundyrev.ru
                    {copySuccess === 'accounting-email' && <span className="text-green-400 ml-2">✓</span>}
                  </p>
                  <p>👤 Главный бухгалтер: Елена Сидорова</p>
                  <p>⏰ Пн-Пт: 9:00-17:00</p>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤝</span>
                  <h4 className="text-xl font-bold">Партнёрство</h4>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>📞 +7 (495) 123-45-67 доб. 104</p>
                  <p 
                    className="cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('partners@gundyrev.ru', 'partners-email')}
                  >
                    📧 partners@gundyrev.ru
                    {copySuccess === 'partners-email' && <span className="text-green-400 ml-2">✓</span>}
                  </p>
                  <p>👤 Директор по развитию: Анна Козлова</p>
                </div>
              </div>
            </div>

            {/* Юридическая информация */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Юридическая информация</h3>
              
              <div className="glass-effect p-6 rounded-lg space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Полное наименование</h4>
                  <p className="text-gray-300">
                    Общество с ограниченной ответственностью "ГУНДЫРЕВ"
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Юридический адрес</h4>
                  <p className="text-gray-300">
                    123456, г. Москва, ул. Примерная, д. 1, стр. 1, оф. 101
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-200">ИНН</h4>
                    <p 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                      onClick={() => copyToClipboard('7701234567', 'inn')}
                    >
                      7701234567
                      {copySuccess === 'inn' && <span className="text-green-400 ml-2">✓</span>}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-200">КПП</h4>
                    <p 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                      onClick={() => copyToClipboard('770101001', 'kpp')}
                    >
                      770101001
                      {copySuccess === 'kpp' && <span className="text-green-400 ml-2">✓</span>}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">ОГРН</h4>
                  <p 
                    className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('1234567890123', 'ogrn')}
                  >
                    1234567890123
                    {copySuccess === 'ogrn' && <span className="text-green-400 ml-2">✓</span>}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Банковские реквизиты</h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>Р/С:</span>
                      <span 
                        className="cursor-pointer hover:text-white transition-colors"
                        onClick={() => copyToClipboard('40702810123456789012', 'rs')}
                      >
                        40702810123456789012
                        {copySuccess === 'rs' && <span className="text-green-400 ml-2">✓</span>}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>К/С:</span>
                      <span 
                        className="cursor-pointer hover:text-white transition-colors"
                        onClick={() => copyToClipboard('30101810123456789012', 'ks')}
                      >
                        30101810123456789012
                        {copySuccess === 'ks' && <span className="text-green-400 ml-2">✓</span>}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>БИК:</span>
                      <span 
                        className="cursor-pointer hover:text-white transition-colors"
                        onClick={() => copyToClipboard('123456789', 'bik')}
                      >
                        123456789
                        {copySuccess === 'bik' && <span className="text-green-400 ml-2">✓</span>}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      ПАО "Банк ПРИМЕРНЫЙ", г. Москва
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Генеральный директор</h4>
                  <p className="text-gray-300">Гундырев Александр Владимирович</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно формы */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold gradient-text">Связаться с нами</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Тип обращения
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
                  required
                >
                  {contactTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 