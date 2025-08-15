'use client';

import { useState } from 'react';
import { 
  MessageCircle, 
  Briefcase, 
  Settings, 
  Lightbulb, 
  Phone, 
  Mail
} from 'lucide-react';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: string;
  title?: string;
}

export default function ContactModal({ isOpen, onClose, defaultType = 'general', title = 'Связаться с нами' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: defaultType,
    message: ''
  });

  const contactTypes = [
    { id: 'general', label: 'Общие вопросы', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'sales', label: 'Отдел продаж', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'support', label: 'Техподдержка', icon: <Settings className="w-5 h-5" /> },
    { id: 'development', label: 'Разработка', icon: <Settings className="w-5 h-5" /> },
    { id: 'consultation', label: 'Консультация', icon: <Lightbulb className="w-5 h-5" /> },
  ];

  const selectedType = contactTypes.find(t => t.id === formData.type);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] animate-slide-in-up">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold gradient-text">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Тип обращения</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                {selectedType?.icon}
              </div>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
                required
              >
                {contactTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Сообщение *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors duration-200 text-sm"
              placeholder="Опишите ваш запрос..."
              required
            ></textarea>
          </div>

          <div className="col-span-2 flex space-x-3 pt-2">
            <button type="submit" className="flex-1 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 text-sm">
              Отправить
            </button>
            <button type="button" onClick={onClose} className="px-5 py-2.5 glass-effect text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm">
              Отмена
            </button>
          </div>
        </form>

        <div className="mt-3 pt-2 border-t border-gray-600/20 text-center">
          <p className="text-xs text-gray-400">
            <Phone className="w-4 h-4 inline mr-1" /> <a href="tel:+74951234567" className="text-green-400 hover:text-green-300">+7 (495) 123-45-67</a>
            <span className="mx-2 text-gray-600">•</span>
            <Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:info@gundyrev.ru" className="text-green-400 hover:text-green-300">info@gundyrev.ru</a>
          </p>
        </div>
      </div>
    </div>
  );
} 
