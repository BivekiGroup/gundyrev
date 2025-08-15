'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';
import { Phone, Mail, Landmark, Shield } from 'lucide-react';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Основное содержимое футера */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            
            {/* О компании */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">GUNDYREV</h3>
              <p className="text-gray-300 text-sm mb-4">
                Комплексные IT-решения для бизнеса. От разработки программного обеспечения 
                до поставки электроники.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105"
                >
                  Связаться с нами
                </button>
              </div>
            </div>

            {/* Услуги */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/development" className="text-gray-300 hover:text-white transition-colors">
                    Разработка ПО
                  </a>
                </li>
                <li>
                  <a href="/electronics" className="text-gray-300 hover:text-white transition-colors">
                    Поставка электроники
                  </a>
                </li>

                <li>
                  <a href="/secure-t" className="text-gray-300 hover:text-white transition-colors">
                    Информационная безопасность
                  </a>
                </li>
                <li>
                  <a href="/drweb" className="text-gray-300 hover:text-white transition-colors">
                    Антивирусная защита
                  </a>
                </li>
                <li>
                  <a href="/solovey" className="text-gray-300 hover:text-white transition-colors">
                    Видеосвязь Соловей
                  </a>
                </li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-400" />
                  <a 
                    href="tel:+74951234567" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <a 
                    href="mailto:info@gundyrev.ru" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@gundyrev.ru
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span>📍</span>
                  <span className="text-gray-300">
                    г. Москва, ул. Примерная, д. 1
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>🕒</span>
                  <span className="text-gray-300">
                    Пн-Пт: 9:00-18:00 МСК
                  </span>
                </li>
              </ul>

              {/* Отделы */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-gray-200 mb-2">Отделы:</h5>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>Продажи: sales@gundyrev.ru</li>
                  <li>Поддержка: support@gundyrev.ru</li>
                  <li>Бухгалтерия: accounting@gundyrev.ru</li>
                </ul>
              </div>
            </div>

            {/* Юридическая информация */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Юридические данные</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <h5 className="text-gray-200 font-medium mb-1">Полное наименование:</h5>
                  <p className="text-gray-300 text-xs">
                    ООО &quot;ГУНДЫРЕВ&quot;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <h5 className="text-gray-200 font-medium mb-1 text-xs">ИНН:</h5>
                    <p 
                      className="text-gray-300 text-xs cursor-pointer hover:text-white transition-colors"
                      onClick={() => copyToClipboard('7701234567', 'inn')}
                      title="Нажмите для копирования"
                    >
                      7701234567
                      {copySuccess === 'inn' && <span className="text-green-400 ml-1">✓</span>}
                    </p>
                  </div>
                  <div>
                    <h5 className="text-gray-200 font-medium mb-1 text-xs">КПП:</h5>
                    <p 
                      className="text-gray-300 text-xs cursor-pointer hover:text-white transition-colors"
                      onClick={() => copyToClipboard('770101001', 'kpp')}
                      title="Нажмите для копирования"
                    >
                      770101001
                      {copySuccess === 'kpp' && <span className="text-green-400 ml-1">✓</span>}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="text-gray-200 font-medium mb-1 text-xs">ОГРН:</h5>
                  <p 
                    className="text-gray-300 text-xs cursor-pointer hover:text-white transition-colors"
                    onClick={() => copyToClipboard('1234567890123', 'ogrn')}
                    title="Нажмите для копирования"
                  >
                    1234567890123
                    {copySuccess === 'ogrn' && <span className="text-green-400 ml-1">✓</span>}
                  </p>
                </div>

                <div>
                  <h5 className="text-gray-200 font-medium mb-1 text-xs">Юридический адрес:</h5>
                  <p className="text-gray-300 text-xs">
                    123456, г. Москва, ул. Примерная, д. 1, стр. 1, оф. 101
                  </p>
                </div>

                <div>
                  <h5 className="text-gray-200 font-medium mb-1 text-xs">Генеральный директор:</h5>
                  <p className="text-gray-300 text-xs">
                    Гундырев Александр Владимирович
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Банковские реквизиты */}
          <div className="border-t border-gray-700 pt-6 mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Банковские реквизиты</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h5 className="text-gray-200 font-medium mb-2">Расчётный счёт:</h5>
                <p 
                  className="text-gray-300 cursor-pointer hover:text-white transition-colors font-mono"
                  onClick={() => copyToClipboard('40702810123456789012', 'rs')}
                  title="Нажмите для копирования"
                >
                  40702810123456789012
                  {copySuccess === 'rs' && <span className="text-green-400 ml-2">✓</span>}
                </p>
              </div>
              <div>
                <h5 className="text-gray-200 font-medium mb-2">Корреспондентский счёт:</h5>
                <p 
                  className="text-gray-300 cursor-pointer hover:text-white transition-colors font-mono"
                  onClick={() => copyToClipboard('30101810123456789012', 'ks')}
                  title="Нажмите для копирования"
                >
                  30101810123456789012
                  {copySuccess === 'ks' && <span className="text-green-400 ml-2">✓</span>}
                </p>
              </div>
              <div>
                <h5 className="text-gray-200 font-medium mb-2">БИК:</h5>
                <p 
                  className="text-gray-300 cursor-pointer hover:text-white transition-colors font-mono"
                  onClick={() => copyToClipboard('123456789', 'bik')}
                  title="Нажмите для копирования"
                >
                  123456789
                  {copySuccess === 'bik' && <span className="text-green-400 ml-2">✓</span>}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              ПАО &quot;Банк ПРИМЕРНЫЙ&quot;, г. Москва
            </p>
          </div>

          {/* Нижняя часть футера */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ООО &quot;ГУНДЫРЕВ&quot;. Все права защищены.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="/contacts" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </a>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  О компании
                </a>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Обратная связь
                </button>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-500">
                <div>
                  <p className="flex items-center gap-2">
                    <Landmark className="w-4 h-4" />
                    Работаем с государственными закупками по 44-ФЗ и 223-ФЗ
                  </p>
                  <p className="mt-1 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Соответствуем требованиям информационной безопасности
                  </p>
                </div>
                <div>
                  <p>
                    📜 Лицензии и сертификаты соответствия
                  </p>
                  <p className="mt-1">
                    ⚖️ Деятельность ведётся в соответствии с законодательством РФ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultType="general"
        title="Обратная связь"
      />
    </>
  );
} 
