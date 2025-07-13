'use client';

import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';

export default function UXSoftware() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Живые метрики UX
  const [uxMetrics, setUxMetrics] = useState({
    loadingSpeed: 0,
    userSatisfaction: 0,
    pageViews: 0,
    bounceRate: 0
  });

  // Интерактивная карта серверов
  const [serverMap, setServerMap] = useState<Array<{
    id: number,
    x: number,
    y: number,
    status: 'active' | 'busy' | 'maintenance',
    location: string,
    ping: number
  }>>([]);

  // Живая демонстрация UX улучшений
  const [uxDemo, setUxDemo] = useState({
    beforeSpeed: 450,
    afterSpeed: 12,
    improvement: 0,
    isAnimating: false
  });

  // Уведомления об улучшениях
  const [uxNotifications, setUxNotifications] = useState<Array<{
    id: number,
    message: string,
    type: 'speed' | 'ux' | 'performance',
    timestamp: Date
  }>>([]);
  const [notificationId, setNotificationId] = useState(0);

  // Анимация метрик UX
  useEffect(() => {
    const targetMetrics = {
      loadingSpeed: 1.2,
      userSatisfaction: 98.2,
      pageViews: 2847960,
      bounceRate: 2.1
    };

    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setUxMetrics({
        loadingSpeed: Math.floor(targetMetrics.loadingSpeed * easeOut * 10) / 10,
        userSatisfaction: Math.floor(targetMetrics.userSatisfaction * easeOut * 10) / 10,
        pageViews: Math.floor(targetMetrics.pageViews * easeOut),
        bounceRate: Math.floor(targetMetrics.bounceRate * easeOut * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Инициализация карты серверов
  useEffect(() => {
    const servers = [
      { location: 'Москва', x: 65, y: 35, ping: 12 },
      { location: 'Санкт-Петербург', x: 63, y: 25, ping: 18 },
      { location: 'Нью-Йорк', x: 25, y: 40, ping: 85 },
      { location: 'Лондон', x: 52, y: 30, ping: 45 },
      { location: 'Токио', x: 85, y: 45, ping: 120 },
      { location: 'Сингапур', x: 80, y: 65, ping: 95 },
      { location: 'Франкфурт', x: 55, y: 32, ping: 38 },
      { location: 'Сидней', x: 88, y: 80, ping: 180 }
    ];

    const initialServers = servers.map((server, index) => ({
      id: index,
      x: server.x,
      y: server.y,
      status: Math.random() > 0.8 ? 'maintenance' as const : Math.random() > 0.3 ? 'active' as const : 'busy' as const,
      location: server.location,
      ping: server.ping
    }));

    setServerMap(initialServers);

    // Обновление статусов серверов
    const interval = setInterval(() => {
      setServerMap(prev => prev.map(server => ({
        ...server,
        status: Math.random() > 0.9 ? 'maintenance' as const : Math.random() > 0.2 ? 'active' as const : 'busy' as const,
        ping: server.ping + Math.floor(Math.random() * 20 - 10)
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Демонстрация UX улучшений
  useEffect(() => {
    const runDemo = () => {
      setUxDemo(prev => ({ ...prev, isAnimating: true, improvement: 0 }));
      
      setTimeout(() => {
        setUxDemo(prev => {
          if (!prev) return prev;
          const improvement = Math.floor(((prev.beforeSpeed - prev.afterSpeed) / prev.beforeSpeed) * 100);
          return { ...prev, improvement, isAnimating: false };
        });
      }, 2000);
    };

    const interval = setInterval(runDemo, 8000);
    runDemo(); // Запускаем сразу

    return () => clearInterval(interval);
  }, []);

  // Уведомления об улучшениях UX
  useEffect(() => {
    const uxMessages = [
      { message: 'Подключение к серверу в Германии установлено', type: 'speed' as const },
      { message: 'Пинг снижен до 12ms через оптимизацию маршрута', type: 'performance' as const },
      { message: 'Kill Switch активирован для защиты от утечек', type: 'ux' as const },
      { message: 'DNS-запросы перенаправлены на защищенные серверы', type: 'performance' as const },
      { message: 'Трафик зашифрован протоколом WireGuard', type: 'ux' as const },
      { message: 'Автоматическое переключение на резервный сервер', type: 'speed' as const },
      { message: 'Блокировка рекламы и трекеров активирована', type: 'ux' as const },
      { message: 'Скорость загрузки увеличена на 45% через сжатие', type: 'speed' as const }
    ];

    const addNotification = () => {
      const newNotification = {
        id: notificationId,
        ...uxMessages[Math.floor(Math.random() * uxMessages.length)],
        timestamp: new Date()
      };

      setUxNotifications(prev => [newNotification, ...prev.slice(0, 3)]);
      setNotificationId(prev => prev + 1);

      setTimeout(() => {
        setUxNotifications(prev => prev.filter(notif => notif.id !== newNotification.id));
      }, 6000);
    };

    const interval = setInterval(addNotification, 4000);
    return () => clearInterval(interval);
  }, [notificationId]);

  // Создание CSS анимаций
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ux-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }
      @keyframes slide-in-ux {
        from { transform: translateX(20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes server-ping {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.3); opacity: 1; }
      }
      @keyframes ux-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
      }
      @keyframes metric-count {
        from { transform: translateY(10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-ux-pulse { animation: ux-pulse 2s ease-in-out infinite; }
      .animate-slide-in-ux { animation: slide-in-ux 0.5s ease-out; }
      .animate-server-ping { animation: server-ping 2s ease-in-out infinite; }
      .animate-ux-glow { animation: ux-glow 3s ease-in-out infinite; }
      .animate-metric-count { animation: metric-count 0.6s ease-out; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleConsultationClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Navigation />
      
      {/* Уведомления об улучшениях UX */}
      <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
        {uxNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border-l-4 glass-effect animate-slide-in-ux ${
              notification.type === 'speed' ? 'border-blue-500 bg-blue-900/20' :
              notification.type === 'performance' ? 'border-green-500 bg-green-900/20' :
              'border-purple-500 bg-purple-900/20'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className={`text-xl animate-ux-pulse ${
                notification.type === 'speed' ? 'text-blue-400' :
                notification.type === 'performance' ? 'text-green-400' :
                'text-purple-400'
              }`}>
                {notification.type === 'speed' ? '⚡' : 
                 notification.type === 'performance' ? '🚀' : '✨'}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-300 font-medium">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {notification.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900"></div>
        
        {/* Интерактивная карта серверов */}
        <div className="absolute inset-0 opacity-30">
          {serverMap.map((server) => (
            <div
              key={server.id}
              className={`absolute w-4 h-4 rounded-full animate-server-ping cursor-pointer ${
                server.status === 'active' ? 'bg-green-500' :
                server.status === 'busy' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{
                left: `${server.x}%`,
                top: `${server.y}%`
              }}
              title={`${server.location} - ${server.ping}ms`}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Профессиональный <span className="gradient-text animate-ux-pulse">UX-софт</span>
          </h1>
                      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Программное решение для улучшения пользовательского опыта в сети интернет с серверами в 65+ странах
          </p>

          {/* Живые метрики UX-софта */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="glass-effect p-4 rounded-lg animate-ux-glow">
              <div className="text-2xl font-bold text-blue-400 animate-metric-count">{uxMetrics.loadingSpeed}s</div>
              <div className="text-sm text-gray-300">Время подключения</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-ux-glow">
              <div className="text-2xl font-bold text-green-400 animate-metric-count">{uxMetrics.userSatisfaction}%</div>
              <div className="text-sm text-gray-300">Стабильность соединения</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-ux-glow">
              <div className="text-2xl font-bold text-purple-400 animate-metric-count">{uxMetrics.pageViews.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Активных пользователей</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-ux-glow">
              <div className="text-2xl font-bold text-yellow-400 animate-metric-count">{uxMetrics.bounceRate}%</div>
              <div className="text-sm text-gray-300">Потеря пакетов</div>
            </div>
          </div>

          {/* Живая демонстрация улучшений */}
          <div className="glass-effect p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Сравнение пинга до и после оптимизации</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-red-400 font-bold mb-2">Без оптимизации (обычный провайдер)</div>
                <div className={`text-3xl font-bold ${uxDemo.isAnimating ? 'animate-ux-pulse' : ''}`}>
                  {uxDemo.beforeSpeed}ms
                </div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold mb-2">С UX-софтом (оптимизированный маршрут)</div>
                <div className={`text-3xl font-bold ${uxDemo.isAnimating ? 'animate-ux-pulse' : ''}`}>
                  {uxDemo.afterSpeed}ms
                </div>
              </div>
            </div>
            {uxDemo.improvement > 0 && (
              <div className="mt-4 text-center">
                <div className="text-blue-400 font-bold text-xl animate-metric-count">
                  Улучшение пинга на {uxDemo.improvement}%!
                </div>
              </div>
            )}
          </div>

          <div className="glass-effect p-4 rounded-lg inline-block mb-8">
            <p className="text-sm text-gray-400">
              * Данная страница носит информационный характер. Публичная оферта отсутствует.
            </p>
          </div>
        </div>
      </section>

      {/* UX-софт Features Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возможности <span className="gradient-text">UX-софта</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Профессиональное решение для улучшения пользовательского опыта с передовыми технологиями защиты и оптимизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-blue-400 text-4xl mb-4 group-hover:animate-ux-pulse">🚀</div>
              <h3 className="text-xl font-bold mb-4">Высокая скорость</h3>
              <p className="text-gray-300">
                WireGuard протокол обеспечивает скорость до 1 Гбит/с с минимальной задержкой
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-blue-400 text-sm font-medium">Пинг от 5ms | Без ограничений трафика</div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-purple-400 text-4xl mb-4 group-hover:animate-ux-pulse">🔒</div>
              <h3 className="text-xl font-bold mb-4">Военное шифрование</h3>
              <p className="text-gray-300">
                AES-256 шифрование с Perfect Forward Secrecy и защитой от утечек DNS
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-purple-400 text-sm font-medium">ChaCha20-Poly1305 | Secure Protocol 2.6</div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-ux-pulse">🌐</div>
              <h3 className="text-xl font-bold mb-4">Глобальная сеть</h3>
              <p className="text-gray-300">
                8500+ серверов в 65 странах с автоматическим выбором оптимального маршрута
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-green-400 text-sm font-medium">Tier-1 провайдеры | 10 Гбит/с порты</div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-yellow-400 text-4xl mb-4 group-hover:animate-ux-pulse">⚡</div>
              <h3 className="text-xl font-bold mb-4">Стабильность 99.9%</h3>
              <p className="text-gray-300">
                Резервирование серверов, автоматическое переключение и мониторинг 24/7
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-yellow-400 text-sm font-medium">SLA 99.9% | Резерв серверов</div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-red-400 text-4xl mb-4 group-hover:animate-ux-pulse">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Строгая No-Log политика</h3>
              <p className="text-gray-300">
                Независимый аудит подтверждает: мы не храним логи активности пользователей
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-red-400 text-sm font-medium">Аудит от Cure53 | Юрисдикция Панама</div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105">
              <div className="text-cyan-400 text-4xl mb-4 group-hover:animate-ux-pulse">📱</div>
              <h3 className="text-xl font-bold mb-4">Все платформы</h3>
              <p className="text-gray-300">
                Приложения для Windows, macOS, iOS, Android, Linux и роутеров
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-cyan-400 text-sm font-medium">До 10 устройств одновременно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Технические характеристики */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Технические <span className="gradient-text">характеристики</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Подробная информация о протоколах, серверах и производительности решения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg border border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Протоколы и шифрование</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Основной протокол:</span>
                    <span className="text-white font-semibold">WireGuard</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Резервный протокол:</span>
                    <span className="text-white font-semibold">Secure Protocol UDP/TCP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Шифрование:</span>
                    <span className="text-white font-semibold">AES-256-GCM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Аутентификация:</span>
                    <span className="text-white font-semibold">SHA-384</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Обмен ключами:</span>
                    <span className="text-white font-semibold">X25519</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Perfect Forward Secrecy:</span>
                    <span className="text-green-400 font-semibold">✓ Включено</span>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-lg border border-green-500/30">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Защита от утечек</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">DNS Leak Protection:</span>
                    <span className="text-green-400 font-semibold">✓ Активна</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">IPv6 Leak Protection:</span>
                    <span className="text-green-400 font-semibold">✓ Активна</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Kill Switch:</span>
                    <span className="text-green-400 font-semibold">✓ Встроен</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">WebRTC Block:</span>
                    <span className="text-green-400 font-semibold">✓ Активен</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Secure DNS:</span>
                    <span className="text-green-400 font-semibold">✓ Собственные серверы</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg border border-purple-500/30">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Производительность</h3>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Максимальная скорость</span>
                      <span className="text-purple-400 font-bold">1 Гбит/с</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Минимальная задержка</span>
                      <span className="text-blue-400 font-bold">5ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Время подключения</span>
                      <span className="text-green-400 font-bold">1.2s</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full animate-pulse" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Стабильность</span>
                      <span className="text-yellow-400 font-bold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full animate-pulse" style={{width: '99%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-lg border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Серверная инфраструктура</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">8,500+</div>
                    <div className="text-sm text-gray-300">Серверов</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-2">65</div>
                    <div className="text-sm text-gray-300">Стран</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-2">10 Гбит/с</div>
                    <div className="text-sm text-gray-300">Порты</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
                    <div className="text-sm text-gray-300">RAM-диски</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Как работает <span className="gradient-text">UX-софт</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Простое подключение к защищенной сети в 3 шага
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-ux-pulse transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Скачивание</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Загрузите приложение для вашей операционной системы
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-blue-400 text-sm">📱 Windows, macOS, iOS, Android, Linux</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-ux-pulse transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors">Авторизация</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Войдите в аккаунт и выберите оптимальный сервер
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-green-400 text-sm">🔑 Автоматический выбор сервера</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-ux-pulse transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Подключение</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Нажмите кнопку подключения и пользуйтесь безопасным интернетом
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-purple-400 text-sm">🔒 Защищенное соединение за 1.2 секунды</div>
              </div>
            </div>
          </div>

          {/* Интерактивная схема процесса */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold text-center mb-8 text-blue-400">Процесс установки защищенного соединения</h3>
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 animate-ux-pulse flex items-center justify-center">
                    <span className="text-white text-sm">🌐</span>
                  </div>
                  <div className="text-sm text-gray-300">Обычное соединение</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-2xl animate-ux-pulse">→</div>
                  <div className="text-sm text-gray-300">Шифрование</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2 animate-ux-pulse flex items-center justify-center">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <div className="text-sm text-gray-300">Защищенный туннель</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-2xl animate-ux-pulse">→</div>
                  <div className="text-sm text-gray-300">Маршрутизация</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 animate-ux-pulse flex items-center justify-center">
                    <span className="text-white text-sm">🛡️</span>
                  </div>
                  <div className="text-sm text-gray-300">Защищенный доступ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Преимущества использования нашего <span className="gradient-text">ПО</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300">
                  <div className="text-green-400 text-xl group-hover:animate-ux-pulse">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-green-400 transition-colors">Повышение производительности</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Оптимизация сетевых соединений для более быстрой работы</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-green-400 text-sm font-medium">🚀 До 73% быстрее</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300">
                  <div className="text-green-400 text-xl group-hover:animate-ux-pulse">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">Защита конфиденциальности</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Надежное шифрование и защита персональных данных</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-purple-400 text-sm font-medium">🔒 AES-256 шифрование</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300">
                  <div className="text-green-400 text-xl group-hover:animate-ux-pulse">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Простота использования</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Интуитивно понятный интерфейс и автоматические настройки</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-blue-400 text-sm font-medium">⚡ Настройка за 1 минуту</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-gray-800/30 p-4 rounded-lg transition-all duration-300">
                  <div className="text-green-400 text-xl group-hover:animate-ux-pulse">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2 group-hover:text-yellow-400 transition-colors">Техническая поддержка</h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Круглосуточная поддержка пользователей</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-yellow-400 text-sm font-medium">🕒 24/7 поддержка</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg animate-ux-glow">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Результаты использования</h3>
              
              {/* Живая статистика производительности */}
              <div className="space-y-6 mb-8">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">Скорость загрузки</span>
                    <span className="text-green-400 font-bold group-hover:animate-ux-pulse">+73%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-3 rounded-full transition-all duration-1000 group-hover:animate-ux-pulse" style={{width: '73%'}}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">Стабильность соединения</span>
                    <span className="text-blue-400 font-bold group-hover:animate-ux-pulse">+89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-1000 group-hover:animate-ux-pulse" style={{width: '89%'}}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">Уровень защиты</span>
                    <span className="text-purple-400 font-bold group-hover:animate-ux-pulse">+95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full transition-all duration-1000 group-hover:animate-ux-pulse" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors">Удовлетворенность пользователей</span>
                    <span className="text-yellow-400 font-bold group-hover:animate-ux-pulse">+92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full transition-all duration-1000 group-hover:animate-ux-pulse" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>

              {/* Живая статистика пользователей */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg group hover:bg-gray-800/70 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-400 animate-metric-count group-hover:animate-ux-pulse">2.8M+</div>
                  <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Активных пользователей</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg group hover:bg-gray-800/70 transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-400 animate-metric-count group-hover:animate-ux-pulse">99.98%</div>
                  <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Время работы</div>
                </div>
              </div>

              {/* Кнопка консультации */}
              <div className="text-center">
                <p className="text-gray-300 text-center mb-6">
                  Получите консультацию по выбору оптимального тарифа UX-софта
                </p>
                <button 
                  onClick={handleConsultationClick}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:from-blue-700 hover:to-purple-700 active:scale-95 cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 animate-ux-glow"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Получить консультацию</span>
                    <span className="text-lg">💬</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-effect p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Важная информация</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Данная страница носит исключительно информационный характер и не является публичной офертой. 
              Программное решение предназначено для улучшения пользовательского опыта и обеспечения приватности в интернете 
              в рамках действующего законодательства. Мы соблюдаем строгую политику no-logs 
              и используем только проверенные протоколы шифрования.
            </p>
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
            Профессиональное решение для улучшения пользовательского опыта в сети
          </p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
            
            <h3 className="text-2xl font-bold mb-6 gradient-text">Получить консультацию</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Расскажите о ваших потребностях..."
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 