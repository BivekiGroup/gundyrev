'use client';

import Navigation from '../components/Navigation';
import LicenseCalculator from '../components/LicenseCalculator';
import { useState, useEffect } from 'react';
import { 
  Shield, 
  RefreshCw, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  XCircle, 
  Smartphone, 
  Trophy, 
  Monitor, 
  Building2, 
  Globe, 
  Cloud, 
  Wrench 
} from 'lucide-react';

export default function DrWeb() {
  // Добавляем стили для анимации
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in-right {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .animate-slide-in-right {
        animation: slide-in-right 0.5s ease-out;
      }
      @keyframes float-in {
        from {
          transform: scale(0) rotate(180deg);
          opacity: 0;
        }
        to {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }
      }
      .animate-float-in {
        animation: float-in 0.6s ease-out;
      }
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
        }
        50% {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
        }
      }
      .animate-pulse-glow {
        animation: pulse-glow 2s infinite;
      }
      @keyframes bounce-in {
        0% {
          transform: translateY(100vh) scale(0.3);
          opacity: 0;
        }
        50% {
          transform: translateY(-30px) scale(1.05);
        }
        70% {
          transform: translateY(10px) scale(0.95);
        }
        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }
      .animate-bounce-in {
        animation: bounce-in 0.8s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [licenseForm, setLicenseForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    licenses: '',
    message: ''
  });
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Анимированная статистика
  const [stats, setStats] = useState({
    threatsBlocked: 0,
    devicesProtected: 0,
    updatesDaily: 0,
    yearsExperience: 0
  });

  // Живые уведомления
  const [notifications, setNotifications] = useState<Array<{id: number, message: string, type: 'threat' | 'update' | 'scan'}>>([]);
  const [notificationId, setNotificationId] = useState(0);

  // Дополнительные уведомления для разных частей экрана
  const [floatingAlerts, setFloatingAlerts] = useState<Array<{
    id: number, 
    message: string, 
    type: 'success' | 'warning' | 'info' | 'danger',
    position: 'top-left' | 'bottom-left' | 'bottom-right' | 'center',
    x: number,
    y: number
  }>>([]);
  const [alertId, setAlertId] = useState(0);



  // Анимация статистики
  useEffect(() => {
    const targets = {
      threatsBlocked: 15420000,
      devicesProtected: 2800000,
      updatesDaily: 150000,
      yearsExperience: 30
    };

    const duration = 2000; // 2 секунды
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const targetValue = targets[key as keyof typeof targets];
      const increment = targetValue / steps;
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        if (step < steps) {
          currentValue += increment;
          setStats(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
          step++;
        }
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  // Живые уведомления
  useEffect(() => {
    const threatMessages = [
      'Заблокирована попытка фишинга на drweb-user-2847',
      'Обнаружен троян на устройстве corp-laptop-156',
      'Предотвращена атака на почтовый сервер',
      'Заблокирован подозрительный URL-адрес',
      'Обновлены вирусные базы для 1,247 устройств',
      'Завершено сканирование сети компании',
      'Обнаружено и удалено вредоносное ПО'
    ];

    const addNotification = () => {
      const message = threatMessages[Math.floor(Math.random() * threatMessages.length)];
      const types: Array<'threat' | 'update' | 'scan'> = ['threat', 'update', 'scan'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      const newNotification = {
        id: notificationId,
        message,
        type
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      setNotificationId(prev => prev + 1);

      // Удаляем уведомление через 5 секунд
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 5000);
    };

    const interval = setInterval(addNotification, 3000);
    return () => clearInterval(interval);
  }, [notificationId]);

  // Плавающие алерты по всему экрану
  useEffect(() => {
    const floatingMessages = [
      { message: 'Система защищена', type: 'success' as const },
      { message: 'Подозрительная активность', type: 'warning' as const },
      { message: 'Обновление завершено', type: 'info' as const },
      { message: 'Угроза заблокирована', type: 'danger' as const },
      { message: 'Сканирование активно', type: 'info' as const },
      { message: 'Файрвол активен', type: 'success' as const },
      { message: 'Вирусные базы обновлены', type: 'info' as const }
    ];

    const positions: Array<'top-left' | 'bottom-left' | 'bottom-right' | 'center'> = 
      ['top-left', 'bottom-left', 'bottom-right', 'center'];

    const addFloatingAlert = () => {
      const messageData = floatingMessages[Math.floor(Math.random() * floatingMessages.length)];
      const position = positions[Math.floor(Math.random() * positions.length)];
      
      const newAlert = {
        id: alertId,
        ...messageData,
        position,
        x: Math.random() * 200 - 100, // Случайное смещение
        y: Math.random() * 100 - 50
      };

      setFloatingAlerts(prev => [newAlert, ...prev.slice(0, 6)]);
      setAlertId(prev => prev + 1);

      // Удаляем через 4 секунды
      setTimeout(() => {
        setFloatingAlerts(prev => prev.filter(a => a.id !== newAlert.id));
      }, 4000);
    };

    const interval = setInterval(addFloatingAlert, 2000);
    return () => clearInterval(interval);
  }, [alertId]);



  const handleProductsClick = () => {
    setIsProductsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleLicenseClick = () => {
    setIsLicenseModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleConsultationClick = () => {
    setIsConsultationModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsProductsModalOpen(false);
    setIsLicenseModalOpen(false);
    setIsConsultationModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleLicenseInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLicenseForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsultationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLicenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${licenseForm.name}! Мы свяжемся с вами для оформления лицензии.`);
    setLicenseForm({ name: '', email: '', company: '', product: '', licenses: '', message: '' });
    handleCloseModal();
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${consultationForm.name}! Наш специалист свяжется с вами.`);
    setConsultationForm({ name: '', email: '', company: '', message: '' });
    handleCloseModal();
  };
  return (
    <>
      <Navigation />
      
      {/* Hero Section - Dr.Web Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-emerald-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">Dr</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-green-400">Dr.Web</h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Официальный партнер Dr.Web — надежная антивирусная защита для бизнеса и дома
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleProductsClick}
              className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 hover:bg-green-600 active:scale-95 cursor-pointer"
            >
              Продукты Dr.Web
            </button>
            <button 
              onClick={handleLicenseClick}
              className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Получить лицензию
            </button>
          </div>
        </div>
      </section>

      {/* Live Security Dashboard */}
      <section className="section-padding bg-black/50 relative overflow-hidden bg-white-light">
        {/* Живые уведомления */}
        <div className="fixed top-20 right-4 z-40 space-y-2 max-w-sm">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border-l-4 glass-effect animate-slide-in-right animate-pulse-glow ${
                notification.type === 'threat' ? 'border-red-500 bg-red-900/20' :
                notification.type === 'update' ? 'border-blue-500 bg-blue-900/20' :
                'border-green-500 bg-green-900/20'
              }`}
            >
              <div className="flex items-start space-x-2">
                <div className={`text-lg animate-bounce ${
                  notification.type === 'threat' ? 'text-red-400' :
                  notification.type === 'update' ? 'text-blue-400' :
                  'text-green-400'
                }`}>
                  {notification.type === 'threat' ? <Shield className="w-5 h-5" /> : 
                   notification.type === 'update' ? <RefreshCw className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-sm text-gray-300">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">Только что</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Плавающие алерты в левом верхнем углу */}
        <div className="fixed top-20 left-4 z-40 space-y-2 max-w-sm">
          {floatingAlerts.filter(alert => alert.position === 'top-left').map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border glass-effect animate-float-in ${
                alert.type === 'success' ? 'border-green-500 bg-green-900/20' :
                alert.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                alert.type === 'info' ? 'border-blue-500 bg-blue-900/20' :
                'border-red-500 bg-red-900/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-lg ${
                  alert.type === 'success' ? 'text-green-400' :
                  alert.type === 'warning' ? 'text-yellow-400' :
                  alert.type === 'info' ? 'text-blue-400' : 'text-red-400'
                }`}>
                   {alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> : 
                    alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : 
                    alert.type === 'info' ? <Info className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <p className="text-sm text-gray-300">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Плавающие алерты в нижнем левом углу */}
        <div className="fixed bottom-20 left-4 z-40 space-y-2 max-w-sm">
          {floatingAlerts.filter(alert => alert.position === 'bottom-left').map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border glass-effect animate-bounce-in ${
                alert.type === 'success' ? 'border-green-500 bg-green-900/20' :
                alert.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                alert.type === 'info' ? 'border-blue-500 bg-blue-900/20' :
                'border-red-500 bg-red-900/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-lg animate-pulse ${
                  alert.type === 'success' ? 'text-green-400' :
                  alert.type === 'warning' ? 'text-yellow-400' :
                  alert.type === 'info' ? 'text-blue-400' : 'text-red-400'
                }`}>
                   {alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> : 
                    alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : 
                    alert.type === 'info' ? <Info className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <p className="text-sm text-gray-300">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Плавающие алерты в нижнем правом углу */}
        <div className="fixed bottom-20 right-4 z-40 space-y-2 max-w-sm">
          {floatingAlerts.filter(alert => alert.position === 'bottom-right').map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border glass-effect animate-slide-in-right ${
                alert.type === 'success' ? 'border-green-500 bg-green-900/20' :
                alert.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                alert.type === 'info' ? 'border-blue-500 bg-blue-900/20' :
                'border-red-500 bg-red-900/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-lg animate-spin ${
                  alert.type === 'success' ? 'text-green-400' :
                  alert.type === 'warning' ? 'text-yellow-400' :
                  alert.type === 'info' ? 'text-blue-400' : 'text-red-400'
                }`}>
                   {alert.type === 'success' ? <CheckCircle className="w-5 h-5" /> : 
                    alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : 
                    alert.type === 'info' ? <Info className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <p className="text-sm text-gray-300">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Защита в <span className="text-green-400">реальном времени</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dr.Web защищает миллионы устройств по всему миру каждую секунду
            </p>
          </div>

          {/* Анимированная статистика */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 border border-green-500/30">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><Shield className="w-8 h-8" /></div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {stats.threatsBlocked.toLocaleString()}+
              </div>
              <p className="text-gray-300">Угроз заблокировано</p>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '85%'}}></div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 border border-green-500/30">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><Smartphone className="w-8 h-8" /></div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {stats.devicesProtected.toLocaleString()}+
              </div>
              <p className="text-gray-300">Устройств защищено</p>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '92%'}}></div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 border border-green-500/30">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><RefreshCw className="w-8 h-8" /></div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {stats.updatesDaily.toLocaleString()}+
              </div>
              <p className="text-gray-300">Обновлений в день</p>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '78%'}}></div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 border border-green-500/30">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><Trophy className="w-8 h-8" /></div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {stats.yearsExperience}+
              </div>
              <p className="text-gray-300">Лет опыта</p>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Продукты <span className="text-green-400">Dr.Web</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения антивирусной защиты для различных потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Monitor className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web Security Space</h3>
              <p className="text-gray-300 mb-4">
                Комплексная защита для домашних компьютеров и ноутбуков
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Антивирус и антишпион</li>
                <li className="group-hover:text-gray-300 transition-colors">• Файрвол</li>
                <li className="group-hover:text-gray-300 transition-colors">• Антиспам</li>
                <li className="group-hover:text-gray-300 transition-colors">• Родительский контроль</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Security Space' }));
                    handleLicenseClick();
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Получить лицензию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Building2 className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web Enterprise Suite</h3>
              <p className="text-gray-300 mb-4">
                Корпоративное решение для защиты бизнеса
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Централизованное управление</li>
                <li className="group-hover:text-gray-300 transition-colors">• Защита серверов</li>
                <li className="group-hover:text-gray-300 transition-colors">• Почтовая безопасность</li>
                <li className="group-hover:text-gray-300 transition-colors">• Мобильная защита</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Enterprise Suite' }));
                    handleLicenseClick();
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Получить лицензию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Smartphone className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web Mobile Security</h3>
              <p className="text-gray-300 mb-4">
                Защита мобильных устройств Android и iOS
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Антивирус для мобильных</li>
                <li className="group-hover:text-gray-300 transition-colors">• Антивор</li>
                <li className="group-hover:text-gray-300 transition-colors">• URL-фильтр</li>
                <li className="group-hover:text-gray-300 transition-colors">• Родительский контроль</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Mobile Security' }));
                    handleLicenseClick();
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Получить лицензию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Globe className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web Gateway Security</h3>
              <p className="text-gray-300 mb-4">
                Защита интернет-шлюзов и почтовых серверов
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Фильтрация трафика</li>
                <li className="group-hover:text-gray-300 transition-colors">• Антиспам</li>
                <li className="group-hover:text-gray-300 transition-colors">• Контент-фильтр</li>
                <li className="group-hover:text-gray-300 transition-colors">• Защита от фишинга</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Gateway Security' }));
                    handleLicenseClick();
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Получить лицензию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Cloud className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web Cloud</h3>
              <p className="text-gray-300 mb-4">
                Облачные решения безопасности
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Облачная консоль</li>
                <li className="group-hover:text-gray-300 transition-colors">• Удаленное управление</li>
                <li className="group-hover:text-gray-300 transition-colors">• Автоматические обновления</li>
                <li className="group-hover:text-gray-300 transition-colors">• Масштабируемость</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Cloud' }));
                    handleLicenseClick();
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Получить лицензию
                </button>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-l-4 border-green-500 group hover:scale-105 hover:border-green-400">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-bounce"><Wrench className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-300 transition-colors">Dr.Web CureIt!</h3>
              <p className="text-gray-300 mb-4">
                Бесплатная утилита для лечения зараженных компьютеров
              </p>
              <ul className="text-sm text-gray-400 space-y-1 mb-4">
                <li className="group-hover:text-gray-300 transition-colors">• Не требует установки</li>
                <li className="group-hover:text-gray-300 transition-colors">• Быстрое сканирование</li>
                <li className="group-hover:text-gray-300 transition-colors">• Лечение вирусов</li>
                <li className="group-hover:text-gray-300 transition-colors">• Регулярные обновления</li>
              </ul>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => window.open('https://free.drweb.ru/cureit/', '_blank')}
                  className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Скачать бесплатно
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section className="section-padding bg-white-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg border-l-4 border-green-500">
            <h2 className="text-3xl font-bold mb-6">
              Нужна защита от <span className="text-green-400">Dr.Web</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Поможем выбрать и внедрить оптимальное решение Dr.Web для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleConsultationClick}
                className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 hover:bg-green-600 active:scale-95 cursor-pointer"
              >
                Получить консультацию
              </button>
              <button 
                onClick={handleLicenseClick}
                className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Заказать лицензию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* License Calculator Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <LicenseCalculator />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-3xl font-bold gradient-text">GUNDYREV</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 GUNDYREV. Официальный партнер Dr.Web.
          </p>
          <p className="text-gray-500 text-sm">
            Dr.Web — надежная антивирусная защита
          </p>
        </div>
      </footer>

      {/* Products Modal */}
      {isProductsModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 max-w-4xl w-full relative border border-green-500/30 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <h3 className="text-3xl font-bold mb-6 text-green-400">Продукты Dr.Web</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-bold mb-3 text-green-400">Dr.Web Security Space</h4>
                <p className="text-gray-300 mb-4">Комплексная защита для дома</p>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Антивирус и антишпион</li>
                  <li>• Файрвол и антиспам</li>
                  <li>• Родительский контроль</li>
                </ul>
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Security Space' }));
                    setIsProductsModalOpen(false);
                    setIsLicenseModalOpen(true);
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
                >
                  Заказать лицензию
                </button>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-bold mb-3 text-green-400">Dr.Web Enterprise Suite</h4>
                <p className="text-gray-300 mb-4">Корпоративное решение</p>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Централизованное управление</li>
                  <li>• Защита серверов</li>
                  <li>• Почтовая безопасность</li>
                </ul>
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Enterprise Suite' }));
                    setIsProductsModalOpen(false);
                    setIsLicenseModalOpen(true);
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
                >
                  Заказать лицензию
                </button>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-bold mb-3 text-green-400">Dr.Web Mobile Security</h4>
                <p className="text-gray-300 mb-4">Защита мобильных устройств</p>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Антивирус для мобильных</li>
                  <li>• Антивор и URL-фильтр</li>
                  <li>• Родительский контроль</li>
                </ul>
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Mobile Security' }));
                    setIsProductsModalOpen(false);
                    setIsLicenseModalOpen(true);
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
                >
                  Заказать лицензию
                </button>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-bold mb-3 text-green-400">Dr.Web Gateway Security</h4>
                <p className="text-gray-300 mb-4">Защита интернет-шлюзов</p>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Фильтрация трафика</li>
                  <li>• Антиспам и контент-фильтр</li>
                  <li>• Защита от фишинга</li>
                </ul>
                <button 
                  onClick={() => {
                    setLicenseForm(prev => ({ ...prev, product: 'Dr.Web Gateway Security' }));
                    setIsProductsModalOpen(false);
                    setIsLicenseModalOpen(true);
                  }}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
                >
                  Заказать лицензию
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* License Modal */}
      {isLicenseModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-green-500/30">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <h3 className="text-xl font-bold mb-4 text-green-400">Получить лицензию Dr.Web</h3>
            
            <form onSubmit={handleLicenseSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={licenseForm.name}
                  onChange={handleLicenseInputChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={licenseForm.email}
                  onChange={handleLicenseInputChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={licenseForm.company}
                  onChange={handleLicenseInputChange}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="product" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Продукт *
                </label>
                <select
                  id="product"
                  name="product"
                  value={licenseForm.product}
                  onChange={handleLicenseInputChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                >
                  <option value="">Выберите продукт</option>
                  <option value="Dr.Web Security Space">Dr.Web Security Space</option>
                  <option value="Dr.Web Enterprise Suite">Dr.Web Enterprise Suite</option>
                  <option value="Dr.Web Mobile Security">Dr.Web Mobile Security</option>
                  <option value="Dr.Web Gateway Security">Dr.Web Gateway Security</option>
                  <option value="Dr.Web Cloud">Dr.Web Cloud</option>
                </select>
              </div>

              <div>
                <label htmlFor="licenses" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Количество лицензий *
                </label>
                <input
                  type="number"
                  id="licenses"
                  name="licenses"
                  value={licenseForm.licenses}
                  onChange={handleLicenseInputChange}
                  required
                  min="1"
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Дополнительная информация
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={licenseForm.message}
                  onChange={handleLicenseInputChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Укажите особые требования или вопросы..."
                />
              </div>
              
              <div className="flex space-x-4 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-green-500/30">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            
            <h3 className="text-xl font-bold mb-4 text-green-400">Получить консультацию</h3>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-3">
              <div>
                <label htmlFor="cons-name" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Имя *
                </label>
                <input
                  type="text"
                  id="cons-name"
                  name="name"
                  value={consultationForm.name}
                  onChange={handleConsultationInputChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="cons-email" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="cons-email"
                  name="email"
                  value={consultationForm.email}
                  onChange={handleConsultationInputChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="cons-company" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Компания
                </label>
                <input
                  type="text"
                  id="cons-company"
                  name="company"
                  value={consultationForm.company}
                  onChange={handleConsultationInputChange}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="cons-message" className="block text-[11px] font-medium text-gray-300 mb-1.5">
                  Вопрос или задача *
                </label>
                <textarea
                  id="cons-message"
                  name="message"
                  value={consultationForm.message}
                  onChange={handleConsultationInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Опишите вашу задачу или вопрос по Dr.Web..."
                />
              </div>
              
              <div className="flex space-x-4 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
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
