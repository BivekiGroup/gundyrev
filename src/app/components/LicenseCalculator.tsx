'use client';

import { useState } from 'react';

interface LicensePrice {
  name: string;
  price: number;
  description: string;
  minNodes: number;
  maxNodes: number;
}

const licenseData: LicensePrice[] = [
  {
    name: 'Dr.Web Security Space',
    price: 890,
    description: 'Комплексная защита для домашних пользователей',
    minNodes: 1,
    maxNodes: 5
  },
  {
    name: 'Dr.Web Enterprise Suite',
    price: 1250,
    description: 'Корпоративное решение для предприятий',
    minNodes: 5,
    maxNodes: 1000
  },
  {
    name: 'Dr.Web Mobile Security',
    price: 650,
    description: 'Защита мобильных устройств',
    minNodes: 1,
    maxNodes: 100
  },
  {
    name: 'Dr.Web Gateway Security',
    price: 1890,
    description: 'Защита интернет-шлюзов и серверов',
    minNodes: 1,
    maxNodes: 50
  },
  {
    name: 'Dr.Web Cloud',
    price: 750,
    description: 'Облачные решения безопасности',
    minNodes: 1,
    maxNodes: 500
  }
];

export default function LicenseCalculator() {
  const [selectedLicense, setSelectedLicense] = useState<string>('');
  const [nodeCount, setNodeCount] = useState<number>(1);
  const [duration, setDuration] = useState<number>(12);
  const [showResult, setShowResult] = useState(false);

  const getCurrentLicense = () => {
    return licenseData.find(license => license.name === selectedLicense);
  };

  const calculatePrice = () => {
    const license = getCurrentLicense();
    if (!license) return 0;

    let basePrice = license.price * nodeCount;
    
    // Скидки за количество
    if (nodeCount >= 100) {
      basePrice *= 0.85; // 15% скидка
    } else if (nodeCount >= 50) {
      basePrice *= 0.9; // 10% скидка
    } else if (nodeCount >= 20) {
      basePrice *= 0.95; // 5% скидка
    }

    // Скидки за длительность
    if (duration >= 36) {
      basePrice *= 0.8; // 20% скидка за 3 года
    } else if (duration >= 24) {
      basePrice *= 0.85; // 15% скидка за 2 года
    } else if (duration >= 12) {
      basePrice *= 0.9; // 10% скидка за 1 год
    }

    return Math.round(basePrice);
  };

  const handleCalculate = () => {
    if (selectedLicense && nodeCount > 0) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedLicense('');
    setNodeCount(1);
    setDuration(12);
    setShowResult(false);
  };

  return (
    <div className="glass-effect p-8 rounded-lg border border-green-500/30">
      <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">
        Калькулятор стоимости лицензий Dr.Web
      </h3>

      <div className="space-y-6">
        {/* Выбор лицензии */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Выберите продукт *
          </label>
          <select
            value={selectedLicense}
            onChange={(e) => {
              setSelectedLicense(e.target.value);
              setShowResult(false);
            }}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
          >
            <option value="">Выберите продукт Dr.Web</option>
            {licenseData.map((license) => (
              <option key={license.name} value={license.name}>
                {license.name} - от {license.price}₽/узел
              </option>
            ))}
          </select>
          {selectedLicense && (
            <p className="text-sm text-gray-400 mt-2">
              {getCurrentLicense()?.description}
            </p>
          )}
        </div>

        {/* Количество узлов */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Количество узлов *
          </label>
          <input
            type="number"
            value={nodeCount}
            onChange={(e) => {
              setNodeCount(parseInt(e.target.value) || 1);
              setShowResult(false);
            }}
            min={getCurrentLicense()?.minNodes || 1}
            max={getCurrentLicense()?.maxNodes || 1000}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
            placeholder="Введите количество узлов"
          />
          {selectedLicense && (
            <p className="text-sm text-gray-400 mt-2">
              Доступно: {getCurrentLicense()?.minNodes} - {getCurrentLicense()?.maxNodes} узлов
            </p>
          )}
        </div>

        {/* Длительность лицензии */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Срок лицензии
          </label>
          <select
            value={duration}
            onChange={(e) => {
              setDuration(parseInt(e.target.value));
              setShowResult(false);
            }}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
          >
            <option value={6}>6 месяцев</option>
            <option value={12}>1 год (скидка 10%)</option>
            <option value={24}>2 года (скидка 15%)</option>
            <option value={36}>3 года (скидка 20%)</option>
          </select>
        </div>

        {/* Кнопки */}
        <div className="flex space-x-4">
          <button
            onClick={handleCalculate}
            disabled={!selectedLicense || nodeCount <= 0}
            className="flex-1 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 disabled:bg-gray-600 disabled:text-gray-400 transition-colors"
          >
            Рассчитать стоимость
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Очистить
          </button>
        </div>

        {/* Результат */}
        {showResult && (
          <div className="mt-6 p-6 bg-green-900/20 border border-green-500/30 rounded-lg">
            <h4 className="text-xl font-bold text-green-400 mb-4">Расчет стоимости</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Продукт:</span>
                <span className="text-white font-semibold">{selectedLicense}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Количество узлов:</span>
                <span className="text-white font-semibold">{nodeCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Срок лицензии:</span>
                <span className="text-white font-semibold">{duration} мес.</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-300">Итоговая стоимость:</span>
                  <span className="text-green-400 font-bold">{calculatePrice().toLocaleString()}₽</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Включено в стоимость:</strong>
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Техническая поддержка</li>
                <li>• Обновления вирусных баз</li>
                <li>• Обновления программного обеспечения</li>
                <li>• Консультации по настройке</li>
              </ul>
            </div>
          </div>
        )}

        {/* Информация о скидках */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <h5 className="text-lg font-semibold text-blue-400 mb-3">Доступные скидки</h5>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-300 font-medium mb-2">По количеству узлов:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• 20+ узлов: скидка 5%</li>
                <li>• 50+ узлов: скидка 10%</li>
                <li>• 100+ узлов: скидка 15%</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 font-medium mb-2">По сроку лицензии:</p>
              <ul className="text-gray-400 space-y-1">
                <li>• 1 год: скидка 10%</li>
                <li>• 2 года: скидка 15%</li>
                <li>• 3 года: скидка 20%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 