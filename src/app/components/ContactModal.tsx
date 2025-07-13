'use client';

import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  title?: string;
}

export default function ContactModal({ 
  isOpen, 
  onClose, 
  defaultType = 'general',
  title = 'Связаться с нами'
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    type: defaultType
  });

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
    setFormData({ name: '', email: '', phone: '', company: '', message: '', type: defaultType });
    onClose();
  };

  const contactTypes = [
    { id: 'general', label: 'Общие вопросы', icon: '💬' },
    { id: 'sales', label: 'Отдел продаж', icon: '💼' },
    { id: 'support', label: 'Техподдержка', icon: '🔧' },
    { id: 'partnership', label: 'Партнёрство', icon: '🤝' },
    { id: 'consultation', label: 'Консультация', icon: '💡' },
    { id: 'demo', label: 'Демонстрация', icon: '🖥️' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-in-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold gradient-text">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200 hover:rotate-90 transform"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200"
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
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 resize-none transition-colors duration-200"
              placeholder="Опишите ваш запрос..."
              required
            ></textarea>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105"
            >
              Отправить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 glass-effect text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Отмена
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-600/20">
          <p className="text-sm text-gray-400 text-center">
            Или свяжитесь с нами напрямую: 
            <br />
            📞 <a href="tel:+74951234567" className="text-green-400 hover:text-green-300">+7 (495) 123-45-67</a>
            <br />
            📧 <a href="mailto:info@gundyrev.ru" className="text-green-400 hover:text-green-300">info@gundyrev.ru</a>
          </p>
        </div>
      </div>
    </div>
  );
} 