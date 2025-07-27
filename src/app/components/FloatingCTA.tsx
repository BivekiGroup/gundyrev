'use client';

import { useState, useEffect } from 'react';
import { Phone, Lightbulb } from 'lucide-react';
import ContactModal from './ContactModal';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const ctaTexts = [
    'Оставить заявку',
    'Бесплатная консультация',
    'Заказать звонок',
    'Получить предложение'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % ctaTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
          style={{
            animation: 'pulse 2s infinite'
          }}
        >
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
            <span className="transition-all duration-300">
              {ctaTexts[currentText]}
            </span>
          </div>
          
          {/* Анимированное кольцо */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
          
          {/* Градиентное свечение */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-50 blur-md -z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
        </button>

        {/* Дополнительные мини-кнопки */}
        <div className="mt-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200"
            title="Заказать консультацию"
          >
            <Lightbulb className="w-4 h-4 inline mr-1" />
            Консультация
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full px-4 py-2 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600 transition-colors duration-200"
            title="Демонстрация продукта"
          >
            🖥️ Демо
          </button>
        </div>
      </div>

      {/* Мобильная фиксированная панель снизу */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 p-3 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {ctaTexts[currentText]}
        </button>
      </div>

      {/* Модальное окно */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType="sales"
        title="Оставить заявку"
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
        }
      `}</style>
    </>
  );
} 