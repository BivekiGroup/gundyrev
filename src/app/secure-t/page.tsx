'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function SecureT() {
  // Живые уведомления безопасности
  const [securityAlerts, setSecurityAlerts] = useState<Array<{
    id: number,
    message: string,
    type: 'threat' | 'scan' | 'update' | 'block',
    timestamp: Date
  }>>([]);
  const [alertId, setAlertId] = useState(0);

  // Дополнительные уведомления для разных углов
  const [leftBottomAlerts, setLeftBottomAlerts] = useState<Array<{
    id: number,
    message: string,
    type: 'critical' | 'warning' | 'info',
    timestamp: Date
  }>>([]);
  const [rightBottomAlerts, setRightBottomAlerts] = useState<Array<{
    id: number,
    message: string,
    type: 'encryption' | 'firewall' | 'backup',
    timestamp: Date
  }>>([]);
  const [centerAlerts, setCenterAlerts] = useState<Array<{
    id: number,
    message: string,
    type: 'system' | 'network' | 'data',
    position: 'left' | 'right',
    timestamp: Date
  }>>([]);

  // Анимированная статистика
  const [stats, setStats] = useState({
    threatsBlocked: 0,
    systemsProtected: 0,
    dataEncrypted: 0,
    uptime: 0
  });

  // Интерактивная карта угроз
  const [threatMap, setThreatMap] = useState<Array<{
    id: number,
    x: number,
    y: number,
    type: 'malware' | 'phishing' | 'ddos' | 'intrusion',
    intensity: number
  }>>([]);

  // Состояние системы
  const [systemStatus, setSystemStatus] = useState({
    firewall: 'active',
    encryption: 'active',
    monitoring: 'active',
    backup: 'active'
  });

  // Модальные окна
  const [isSolutionsModalOpen, setIsSolutionsModalOpen] = useState(false);
  const [isDocumentationModalOpen, setIsDocumentationModalOpen] = useState(false);

  // Форма для решений
  const [solutionsForm, setSolutionsForm] = useState({
    name: '',
    email: '',
    company: '',
    solution: '',
    message: ''
  });

  // Форма для документации
  const [documentationForm, setDocumentationForm] = useState({
    name: '',
    email: '',
    company: '',
    documentType: '',
    message: ''
  });

  // Анимация статистики
  useEffect(() => {
    const targetStats = {
      threatsBlocked: 2847,
      systemsProtected: 156,
      dataEncrypted: 99.8,
      uptime: 99.97
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats({
        threatsBlocked: Math.floor(targetStats.threatsBlocked * easeOut),
        systemsProtected: Math.floor(targetStats.systemsProtected * easeOut),
        dataEncrypted: Math.floor(targetStats.dataEncrypted * easeOut * 10) / 10,
        uptime: Math.floor(targetStats.uptime * easeOut * 100) / 100
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Живые уведомления безопасности
  useEffect(() => {
    const securityMessages = [
      { message: 'Заблокирована попытка SQL-инъекции', type: 'block' as const },
      { message: 'Обнаружена подозрительная сетевая активность', type: 'threat' as const },
      { message: 'Завершено сканирование на вирусы', type: 'scan' as const },
      { message: 'Обновлены правила файрвола', type: 'update' as const },
      { message: 'Заблокирован доступ к вредоносному домену', type: 'block' as const },
      { message: 'Обнаружена попытка брутфорса', type: 'threat' as const },
      { message: 'Выполнено резервное копирование данных', type: 'update' as const },
      { message: 'Заблокирован подозрительный трафик', type: 'block' as const }
    ];

    const addAlert = () => {
      const newAlert = {
        id: alertId,
        ...securityMessages[Math.floor(Math.random() * securityMessages.length)],
        timestamp: new Date()
      };

      setSecurityAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      setAlertId(prev => prev + 1);

      // Удаляем через 8 секунд
      setTimeout(() => {
        setSecurityAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
      }, 8000);
    };

    const interval = setInterval(addAlert, 3000);
    return () => clearInterval(interval);
  }, [alertId]);

  // Уведомления левый нижний угол
  useEffect(() => {
    const leftBottomMessages = [
      { message: 'Критическая уязвимость обнаружена', type: 'critical' as const },
      { message: 'Предупреждение: высокая нагрузка на сервер', type: 'warning' as const },
      { message: 'Информация: обновление политик безопасности', type: 'info' as const },
      { message: 'Критично: попытка несанкционированного доступа', type: 'critical' as const },
      { message: 'Предупреждение: превышен лимит подключений', type: 'warning' as const },
      { message: 'Информация: резервное копирование завершено', type: 'info' as const }
    ];

    const addLeftBottomAlert = () => {
      const newAlert = {
        id: Math.random(),
        ...leftBottomMessages[Math.floor(Math.random() * leftBottomMessages.length)],
        timestamp: new Date()
      };

      setLeftBottomAlerts(prev => [newAlert, ...prev.slice(0, 3)]);

      setTimeout(() => {
        setLeftBottomAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
      }, 7000);
    };

    const interval = setInterval(addLeftBottomAlert, 4000);
    return () => clearInterval(interval);
  }, []);

  // Уведомления правый нижний угол
  useEffect(() => {
    const rightBottomMessages = [
      { message: 'Шифрование данных: 256-bit AES активно', type: 'encryption' as const },
      { message: 'Файрвол: заблокировано 47 подключений', type: 'firewall' as const },
      { message: 'Резервное копирование: 98% завершено', type: 'backup' as const },
      { message: 'Шифрование: ключи успешно обновлены', type: 'encryption' as const },
      { message: 'Файрвол: новые правила применены', type: 'firewall' as const },
      { message: 'Резервирование: проверка целостности данных', type: 'backup' as const }
    ];

    const addRightBottomAlert = () => {
      const newAlert = {
        id: Math.random(),
        ...rightBottomMessages[Math.floor(Math.random() * rightBottomMessages.length)],
        timestamp: new Date()
      };

      setRightBottomAlerts(prev => [newAlert, ...prev.slice(0, 3)]);

      setTimeout(() => {
        setRightBottomAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
      }, 6000);
    };

    const interval = setInterval(addRightBottomAlert, 3500);
    return () => clearInterval(interval);
  }, []);

  // Центральные боковые уведомления
  useEffect(() => {
    const centerMessages = [
      { message: 'Системный мониторинг: все компоненты в норме', type: 'system' as const },
      { message: 'Сетевая активность: трафик в пределах нормы', type: 'network' as const },
      { message: 'Защита данных: все файлы зашифрованы', type: 'data' as const },
      { message: 'Системная диагностика: ошибок не обнаружено', type: 'system' as const },
      { message: 'Сетевая безопасность: периметр защищен', type: 'network' as const },
      { message: 'Целостность данных: проверка пройдена', type: 'data' as const }
    ];

    const addCenterAlert = () => {
      const positions = ['left', 'right'] as const;
      const newAlert = {
        id: Math.random(),
        ...centerMessages[Math.floor(Math.random() * centerMessages.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        timestamp: new Date()
      };

      setCenterAlerts(prev => [newAlert, ...prev.slice(0, 4)]);

      setTimeout(() => {
        setCenterAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
      }, 5000);
    };

    const interval = setInterval(addCenterAlert, 2500);
    return () => clearInterval(interval);
  }, []);

  // Обработчики для модальных окон
  const handleSolutionsClick = () => {
    setIsSolutionsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleDocumentationClick = () => {
    setIsDocumentationModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsSolutionsModalOpen(false);
    setIsDocumentationModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleSolutionsInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSolutionsForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDocumentationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDocumentationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSolutionsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${solutionsForm.name}! Наш специалист свяжется с вами для обсуждения решения "${solutionsForm.solution}".`);
    setSolutionsForm({ name: '', email: '', company: '', solution: '', message: '' });
    handleCloseModal();
  };

  const handleDocumentationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за запрос, ${documentationForm.name}! Документация "${documentationForm.documentType}" будет отправлена на ${documentationForm.email}.`);
    setDocumentationForm({ name: '', email: '', company: '', documentType: '', message: '' });
    handleCloseModal();
  };

  // Интерактивная карта угроз
  useEffect(() => {
    const generateThreatPoint = () => {
      const threatTypes = ['malware', 'phishing', 'ddos', 'intrusion'] as const;
      return {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        intensity: Math.random() * 0.8 + 0.2
      };
    };

    const updateThreatMap = () => {
      setThreatMap(prev => {
        const newPoints = Array.from({ length: 3 }, generateThreatPoint);
        return [...newPoints, ...prev.slice(0, 12)];
      });
    };

    const interval = setInterval(updateThreatMap, 2000);
    return () => clearInterval(interval);
  }, []);

  // Создание CSS анимаций динамически
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-secure {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }
      @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes slide-left {
        from { transform: translateX(20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-right {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes bounce-in {
        0% { transform: scale(0.8) translateY(-10px); opacity: 0; }
        50% { transform: scale(1.05) translateY(0); opacity: 0.8; }
        100% { transform: scale(1) translateY(0); opacity: 1; }
      }
      @keyframes threat-pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.2); opacity: 1; }
      }
      @keyframes secure-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
        50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
      }
      @keyframes critical-flash {
        0%, 100% { border-color: rgba(239, 68, 68, 0.5); }
        50% { border-color: rgba(239, 68, 68, 1); }
      }
      .animate-pulse-secure { animation: pulse-secure 2s ease-in-out infinite; }
      .animate-slide-up { animation: slide-up 0.5s ease-out; }
      .animate-slide-left { animation: slide-left 0.5s ease-out; }
      .animate-slide-right { animation: slide-right 0.5s ease-out; }
      .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
      .animate-threat-pulse { animation: threat-pulse 1.5s ease-in-out infinite; }
      .animate-secure-glow { animation: secure-glow 3s ease-in-out infinite; }
      .animate-critical-flash { animation: critical-flash 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-orange-900"></div>
        
        {/* Интерактивная карта угроз */}
        <div className="absolute inset-0 opacity-30">
          {threatMap.map((threat) => (
            <div
              key={threat.id}
              className={`absolute w-3 h-3 rounded-full animate-threat-pulse ${
                threat.type === 'malware' ? 'bg-red-500' :
                threat.type === 'phishing' ? 'bg-yellow-500' :
                threat.type === 'ddos' ? 'bg-purple-500' :
                'bg-orange-500'
              }`}
              style={{
                left: `${threat.x}%`,
                top: `${threat.y}%`,
                opacity: threat.intensity
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text animate-pulse-secure">SECURE-T</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Комплексные решения для информационной безопасности и защиты данных
          </p>
          
          {/* Краткое описание продукта */}
          <div className="glass-effect p-6 rounded-lg max-w-3xl mx-auto mb-8 border border-red-500/30">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Что такое SECURE-T?</h2>
            <p className="text-gray-300 text-lg mb-4">
              SECURE-T — это российская система защиты информации, сертифицированная ФСТЭК России. 
              Обеспечивает комплексную защиту корпоративных данных от внешних и внутренних угроз.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Сертификат ФСТЭК РФ</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Соответствие 44-ФЗ и 223-ФЗ</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Реестр отечественного ПО</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Техподдержка 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Живая статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="glass-effect p-4 rounded-lg animate-secure-glow">
              <div className="text-2xl font-bold text-red-400">{stats.threatsBlocked.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Угроз заблокировано</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-secure-glow">
              <div className="text-2xl font-bold text-orange-400">{stats.systemsProtected}</div>
              <div className="text-sm text-gray-300">Систем защищено</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-secure-glow">
              <div className="text-2xl font-bold text-yellow-400">{stats.dataEncrypted}%</div>
              <div className="text-sm text-gray-300">Данных зашифровано</div>
            </div>
            <div className="glass-effect p-4 rounded-lg animate-secure-glow">
              <div className="text-2xl font-bold text-green-400">{stats.uptime}%</div>
              <div className="text-sm text-gray-300">Время работы</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSolutionsClick}
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 animate-pulse-secure hover:bg-red-600 active:scale-95 cursor-pointer"
            >
              Наши решения
            </button>
            <button 
              onClick={handleDocumentationClick}
              className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Документация
            </button>
          </div>
        </div>

        {/* Живые уведомления безопасности - только в hero блоке */}
        <div className="absolute top-20 right-4 z-50 space-y-2 max-w-sm">
          {securityAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border-l-4 glass-effect animate-slide-up ${
                alert.type === 'threat' ? 'border-red-500 bg-red-900/20' :
                alert.type === 'block' ? 'border-orange-500 bg-orange-900/20' :
                alert.type === 'scan' ? 'border-blue-500 bg-blue-900/20' :
                'border-green-500 bg-green-900/20'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`text-xl animate-pulse-secure ${
                  alert.type === 'threat' ? 'text-red-400' :
                  alert.type === 'block' ? 'text-orange-400' :
                  alert.type === 'scan' ? 'text-blue-400' :
                  'text-green-400'
                }`}>
                  {alert.type === 'threat' ? '⚠️' : 
                   alert.type === 'block' ? '🛡️' : 
                   alert.type === 'scan' ? '🔍' : '✅'}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300 font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {alert.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Статус системы - только в hero блоке */}
        <div className="absolute top-20 left-4 z-50 space-y-2 max-w-xs">
          <div className="glass-effect p-4 rounded-lg border border-red-500/30">
            <h4 className="text-sm font-bold text-red-400 mb-3">Статус системы</h4>
            <div className="space-y-2">
              {Object.entries(systemStatus).map(([key, status]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-xs text-gray-300 capitalize">
                    {key === 'firewall' ? 'Файрвол' :
                     key === 'encryption' ? 'Шифрование' :
                     key === 'monitoring' ? 'Мониторинг' : 'Резервирование'}
                  </span>
                  <div className={`w-2 h-2 rounded-full animate-pulse-secure ${
                    status === 'active' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Уведомления левый нижний угол - только в hero блоке */}
        <div className="absolute bottom-4 left-4 z-50 space-y-2 max-w-sm">
          {leftBottomAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border-l-4 glass-effect animate-bounce-in ${
                alert.type === 'critical' ? 'border-red-500 bg-red-900/20 animate-critical-flash' :
                alert.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                'border-blue-500 bg-blue-900/20'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`text-lg animate-pulse-secure ${
                  alert.type === 'critical' ? 'text-red-400' :
                  alert.type === 'warning' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}>
                  {alert.type === 'critical' ? '🚨' : 
                   alert.type === 'warning' ? '⚠️' : 'ℹ️'}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300 font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {alert.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Уведомления правый нижний угол - только в hero блоке */}
        <div className="absolute bottom-4 right-4 z-50 space-y-2 max-w-sm">
          {rightBottomAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border-l-4 glass-effect animate-slide-left ${
                alert.type === 'encryption' ? 'border-purple-500 bg-purple-900/20' :
                alert.type === 'firewall' ? 'border-orange-500 bg-orange-900/20' :
                'border-green-500 bg-green-900/20'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`text-lg animate-pulse-secure ${
                  alert.type === 'encryption' ? 'text-purple-400' :
                  alert.type === 'firewall' ? 'text-orange-400' :
                  'text-green-400'
                }`}>
                  {alert.type === 'encryption' ? '🔐' : 
                   alert.type === 'firewall' ? '🔥' : '💾'}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300 font-medium">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {alert.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Центральные боковые уведомления - только в hero блоке */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-40 space-y-2 max-w-xs">
          {centerAlerts.filter(alert => alert.position === 'left').map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border glass-effect animate-slide-right ${
                alert.type === 'system' ? 'border-indigo-500 bg-indigo-900/20' :
                alert.type === 'network' ? 'border-cyan-500 bg-cyan-900/20' :
                'border-pink-500 bg-pink-900/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-lg animate-pulse-secure ${
                  alert.type === 'system' ? 'text-indigo-400' :
                  alert.type === 'network' ? 'text-cyan-400' :
                  'text-pink-400'
                }`}>
                  {alert.type === 'system' ? '🖥️' : 
                   alert.type === 'network' ? '🌐' : '📁'}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-300 font-medium">{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-40 space-y-2 max-w-xs">
          {centerAlerts.filter(alert => alert.position === 'right').map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border glass-effect animate-slide-left ${
                alert.type === 'system' ? 'border-indigo-500 bg-indigo-900/20' :
                alert.type === 'network' ? 'border-cyan-500 bg-cyan-900/20' :
                'border-pink-500 bg-pink-900/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`text-lg animate-pulse-secure ${
                  alert.type === 'system' ? 'text-indigo-400' :
                  alert.type === 'network' ? 'text-cyan-400' :
                  'text-pink-400'
                }`}>
                  {alert.type === 'system' ? '🖥️' : 
                   alert.type === 'network' ? '🌐' : '📁'}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-300 font-medium">{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* О продукте SECURE-T */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Что такое <span className="gradient-text">SECURE-T</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              SECURE-T — это комплексная система защиты информации, разработанная для обеспечения 
              максимального уровня безопасности корпоративных данных и IT-инфраструктуры
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg border border-red-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-red-400 text-3xl animate-pulse-secure">🛡️</div>
                  <h3 className="text-xl font-bold">Многоуровневая защита</h3>
                </div>
                <p className="text-gray-300">
                  Система использует многоуровневую архитектуру защиты, включающую криптографические методы, 
                  сетевую безопасность и мониторинг в реальном времени
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-orange-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-orange-400 text-3xl animate-pulse-secure">⚡</div>
                  <h3 className="text-xl font-bold">Быстрое реагирование</h3>
                </div>
                <p className="text-gray-300">
                  Автоматическое обнаружение и блокировка угроз в режиме реального времени 
                  с минимальным влиянием на производительность системы
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-yellow-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-yellow-400 text-3xl animate-pulse-secure">🔧</div>
                  <h3 className="text-xl font-bold">Простота внедрения</h3>
                </div>
                <p className="text-gray-300">
                  Гибкая архитектура позволяет легко интегрировать SECURE-T 
                  с существующей IT-инфраструктурой без кардинальных изменений
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect p-8 rounded-lg border border-purple-500/30 text-center">
                <div className="text-purple-400 text-5xl mb-4 animate-pulse-secure">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Основная цель</h3>
                <p className="text-gray-300 text-lg">
                  Обеспечить максимальную защиту корпоративных данных при сохранении 
                  высокой производительности и удобства использования
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-4 rounded-lg text-center border border-green-500/30">
                  <div className="text-green-400 text-2xl mb-2 animate-pulse-secure">99.9%</div>
                  <p className="text-sm text-gray-300">Надежность</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center border border-blue-500/30">
                  <div className="text-blue-400 text-2xl mb-2 animate-pulse-secure">24/7</div>
                  <p className="text-sm text-gray-300">Мониторинг</p>
                </div>
              </div>
            </div>
          </div>

          {/* Вопросы и ответы */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h3>

            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-lg font-semibold text-red-400">Что включает в себя система SECURE-T?</h4>
                    <div className="text-red-400 text-xl group-open:rotate-180 transition-transform">▼</div>
                  </summary>
                  <div className="mt-4 text-gray-300 space-y-3">
                    <p>SECURE-T включает в себя:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Модуль криптографической защиты данных</li>
                      <li>Систему мониторинга безопасности в реальном времени</li>
                      <li>Средства контроля доступа и аутентификации</li>
                      <li>Инструменты аудита и анализа инцидентов</li>
                      <li>Интерфейс управления и настройки</li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-lg font-semibold text-orange-400">Как быстро можно внедрить SECURE-T?</h4>
                    <div className="text-orange-400 text-xl group-open:rotate-180 transition-transform">▼</div>
                  </summary>
                  <div className="mt-4 text-gray-300">
                    <p>
                      Время внедрения зависит от масштаба инфраструктуры. Для небольших организаций 
                      базовое развертывание занимает 1-2 недели. Для крупных предприятий с комплексной 
                      настройкой — от 1 до 3 месяцев. Наша команда обеспечивает полную поддержку 
                      на всех этапах внедрения.
                    </p>
                  </div>
                </details>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-lg font-semibold text-yellow-400">Какие требования к системе для работы SECURE-T?</h4>
                    <div className="text-yellow-400 text-xl group-open:rotate-180 transition-transform">▼</div>
                  </summary>
                  <div className="mt-4 text-gray-300">
                    <p>
                      Минимальные требования: Windows Server 2016+ или Linux (Ubuntu 18.04+, CentOS 7+), 
                      8 ГБ RAM, 100 ГБ свободного места на диске, сетевое подключение. 
                      Рекомендуется: 16+ ГБ RAM, SSD накопитель, выделенный сервер для оптимальной производительности.
                    </p>
                  </div>
                </details>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-lg font-semibold text-green-400">Предоставляется ли техническая поддержка?</h4>
                    <div className="text-green-400 text-xl group-open:rotate-180 transition-transform">▼</div>
                  </summary>
                  <div className="mt-4 text-gray-300">
                    <p>
                      Да, мы предоставляем полную техническую поддержку 24/7. Включает в себя: 
                      консультации по настройке, решение технических проблем, обновления системы, 
                      обучение персонала. Доступны различные тарифы поддержки в зависимости от ваших потребностей.
                    </p>
                  </div>
                </details>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-lg font-semibold text-purple-400">Можно ли получить демо-версию для тестирования?</h4>
                    <div className="text-purple-400 text-xl group-open:rotate-180 transition-transform">▼</div>
                  </summary>
                  <div className="mt-4 text-gray-300">
                    <p>
                      Конечно! Мы предоставляем полнофункциональную демо-версию на 30 дней. 
                      Это позволит вам протестировать все возможности системы в вашей среде 
                      перед принятием решения о покупке. Для получения демо-версии свяжитесь с нашими специалистами.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Решения <span className="gradient-text">SECURE-T</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Передовые технологии защиты информации для современного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-red-400 text-4xl mb-4 group-hover:animate-pulse-secure">🔐</div>
              <h3 className="text-xl font-bold mb-4">Криптографическая защита</h3>
              <p className="text-gray-300">
                Современные алгоритмы шифрования для защиты конфиденциальных данных
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-red-400 text-sm font-medium hover:text-red-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-orange-400 text-4xl mb-4 group-hover:animate-pulse-secure">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Сетевая безопасность</h3>
              <p className="text-gray-300">
                Комплексная защита сетевой инфраструктуры от внешних угроз
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-orange-400 text-sm font-medium hover:text-orange-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-yellow-400 text-4xl mb-4 group-hover:animate-pulse-secure">📊</div>
              <h3 className="text-xl font-bold mb-4">Мониторинг безопасности</h3>
              <p className="text-gray-300">
                Системы мониторинга и анализа инцидентов информационной безопасности
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-yellow-400 text-sm font-medium hover:text-yellow-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-purple-400 text-4xl mb-4 group-hover:animate-pulse-secure">🔍</div>
              <h3 className="text-xl font-bold mb-4">Аудит безопасности</h3>
              <p className="text-gray-300">
                Проведение комплексного аудита систем информационной безопасности
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-purple-400 text-sm font-medium hover:text-purple-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-blue-400 text-4xl mb-4 group-hover:animate-pulse-secure">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Интеграция систем</h3>
              <p className="text-gray-300">
                Интеграция решений безопасности с существующей IT-инфраструктурой
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-blue-400 text-sm font-medium hover:text-blue-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>

            <div 
              onClick={() => {
                window.location.href = '/secure-t/documentation';
              }}
              className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-pulse-secure">📚</div>
              <h3 className="text-xl font-bold mb-4">Обучение персонала</h3>
              <p className="text-gray-300">
                Программы обучения сотрудников основам информационной безопасности
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  href="/secure-t/documentation"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="text-green-400 text-sm font-medium hover:text-green-300 cursor-pointer"
                >
                  Подробнее →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Используемые <span className="gradient-text">технологии</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'AES-256', desc: 'Шифрование данных', color: 'red' },
              { name: 'RSA-4096', desc: 'Асимметричное шифрование', color: 'orange' },
              { name: 'SHA-3', desc: 'Хеширование', color: 'yellow' },
              { name: 'PKI', desc: 'Инфраструктура ключей', color: 'green' },
              { name: 'SIEM', desc: 'Управление событиями', color: 'blue' },
              { name: 'DLP', desc: 'Защита от утечек', color: 'purple' },
              { name: 'WAF', desc: 'Веб-защита', color: 'pink' },
              { name: 'IDS/IPS', desc: 'Обнаружение вторжений', color: 'indigo' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-effect p-6 rounded-lg text-center hover-glow transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold mb-2 group-hover:animate-pulse-secure">{tech.name}</h4>
                <p className="text-gray-300 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Documentation Block */}
      <section className="section-padding bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-effect p-12 rounded-lg text-center border border-red-500/30 animate-secure-glow">
            <div className="text-red-400 text-6xl mb-6 animate-pulse-secure">📚</div>
            <h2 className="text-4xl font-bold mb-6">
              Полная <span className="gradient-text">документация</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Получите доступ к полной технической документации SECURE-T с подробными руководствами, 
              примерами конфигураций и инструкциями по внедрению
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/docs/SECURE-T_Documentation.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:bg-red-600 active:scale-95 flex items-center justify-center gap-2 animate-pulse-secure"
              >
                <span>📖</span>
                Открыть документацию
              </a>
              <a 
                href="/docs/SECURE-T_Quick_Start.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                Быстрый старт
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="glass-effect p-6 rounded-lg border border-red-500/20 group hover:scale-105 transition-all duration-300">
                <div className="text-red-400 text-2xl mb-3 group-hover:animate-pulse-secure">🔧</div>
                <h4 className="font-bold mb-2">Установка и настройка</h4>
                <p className="text-gray-300 text-sm">
                  Пошаговые инструкции по установке и первоначальной настройке системы
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-orange-500/20 group hover:scale-105 transition-all duration-300">
                <div className="text-orange-400 text-2xl mb-3 group-hover:animate-pulse-secure">⚙️</div>
                <h4 className="font-bold mb-2">Конфигурация</h4>
                <p className="text-gray-300 text-sm">
                  Подробные примеры конфигураций для различных сценариев использования
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-yellow-500/20 group hover:scale-105 transition-all duration-300">
                <div className="text-yellow-400 text-2xl mb-3 group-hover:animate-pulse-secure">🚀</div>
                <h4 className="font-bold mb-2">API и интеграция</h4>
                <p className="text-gray-300 text-sm">
                  Руководство по использованию API и интеграции с внешними системами
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Сертификаты и лицензии */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Сертификаты и <span className="gradient-text">лицензии</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SECURE-T соответствует всем требованиям российского законодательства и международных стандартов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-blue-400 text-4xl mb-4 group-hover:animate-pulse-secure">🏆</div>
              <h3 className="text-xl font-bold mb-4">Сертификат ФСТЭК</h3>
              <p className="text-gray-300 mb-4">
                Сертификат соответствия требованиям безопасности информации № РОСС RU.0001.01БИ00 от 15.03.2024
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Класс защиты: КС1, КС2, КС3 | Срок действия: до 2027 года
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Сертификат ФСТЭК' }));
                  handleDocumentationClick();
                }}
                className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
              >
                Скачать сертификат →
              </button>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-green-400 text-4xl mb-4 group-hover:animate-pulse-secure">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Лицензия ФСБ</h3>
              <p className="text-gray-300 mb-4">
                Лицензия на разработку и производство средств защиты конфиденциальной информации № 149 от 22.08.2023
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Включает: криптографические средства, СКЗИ | Срок действия: до 2028 года
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Лицензия ФСБ' }));
                  handleDocumentationClick();
                }}
                className="text-green-400 hover:text-green-300 font-medium cursor-pointer"
              >
                Скачать лицензию →
              </button>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-purple-400 text-4xl mb-4 group-hover:animate-pulse-secure">🌍</div>
              <h3 className="text-xl font-bold mb-4">ISO 27001:2013</h3>
              <p className="text-gray-300 mb-4">
                Международный стандарт системы менеджмента информационной безопасности
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Сертификат № ISO/IEC 27001-2024-RU-001 | Действителен до 2027 года
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'ISO 27001' }));
                  handleDocumentationClick();
                }}
                className="text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
              >
                Скачать сертификат →
              </button>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-red-400 text-4xl mb-4 group-hover:animate-pulse-secure">📋</div>
              <h3 className="text-xl font-bold mb-4">Реестр Минпромторга</h3>
              <p className="text-gray-300 mb-4">
                Включение в единый реестр российских программ для ЭВМ и баз данных
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Номер в реестре: 14158 | Класс ПО: 27.22.11.110 | Статус: Действующий
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Реестр Минпромторга' }));
                  handleDocumentationClick();
                }}
                className="text-red-400 hover:text-red-300 font-medium cursor-pointer"
              >
                Скачать справку →
              </button>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-yellow-400 text-4xl mb-4 group-hover:animate-pulse-secure">✅</div>
              <h3 className="text-xl font-bold mb-4">Соответствие ГОСТ</h3>
              <p className="text-gray-300 mb-4">
                Соответствие требованиям ГОСТ Р 50922-2006, ГОСТ Р 51241-2017 и другим стандартам
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Включает: ГОСТ 28147-89, ГОСТ Р 34.11-2012, ГОСТ Р 34.10-2012
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Соответствие ГОСТ' }));
                  handleDocumentationClick();
                }}
                className="text-yellow-400 hover:text-yellow-300 font-medium cursor-pointer"
              >
                Скачать документы →
              </button>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-cyan-400 text-4xl mb-4 group-hover:animate-pulse-secure">🔐</div>
              <h3 className="text-xl font-bold mb-4">Криптографические алгоритмы</h3>
              <p className="text-gray-300 mb-4">
                Использование сертифицированных отечественных криптографических алгоритмов
              </p>
              <div className="text-sm text-gray-400 mb-4">
                Алгоритмы: Кузнечик, Магма, Стрибог | Сертификат ФСБ № 149/2023
              </div>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Криптографические алгоритмы' }));
                  handleDocumentationClick();
                }}
                className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
              >
                Скачать спецификацию →
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-8 rounded-lg border border-green-500/30">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Полный комплект документов</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Получите полный пакет сертификатов, лицензий и документов о соответствии для вашей организации
              </p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Полный комплект документов' }));
                  handleDocumentationClick();
                }}
                className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:bg-green-600 animate-pulse-secure"
              >
                Получить полный комплект
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Обучающие инструкции */}
      <section className="section-padding bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Обучение и <span className="gradient-text">инструкции</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексная система обучения для эффективного использования SECURE-T
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-blue-400 text-3xl mb-4 group-hover:animate-pulse-secure">📚</div>
              <h4 className="text-lg font-bold mb-3">Руководство пользователя</h4>
              <p className="text-gray-300 mb-4">Подробное руководство по работе с интерфейсом и основными функциями</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Первые шаги в системе</li>
                <li>• Настройка рабочего места</li>
                <li>• Основные операции</li>
                <li>• Решение типовых задач</li>
              </ul>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Руководство пользователя' }));
                  handleDocumentationClick();
                }}
                className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
              >
                Скачать руководство →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-green-400 text-3xl mb-4 group-hover:animate-pulse-secure">⚙️</div>
              <h4 className="text-lg font-bold mb-3">Руководство администратора</h4>
              <p className="text-gray-300 mb-4">Техническое руководство для системных администраторов</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Установка и настройка</li>
                <li>• Управление пользователями</li>
                <li>• Мониторинг системы</li>
                <li>• Резервное копирование</li>
              </ul>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Руководство администратора' }));
                  handleDocumentationClick();
                }}
                className="text-green-400 hover:text-green-300 font-medium cursor-pointer"
              >
                Скачать руководство →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-purple-400 text-3xl mb-4 group-hover:animate-pulse-secure">🎥</div>
              <h4 className="text-lg font-bold mb-3">Видеоуроки</h4>
              <p className="text-gray-300 mb-4">Серия обучающих видеороликов для быстрого освоения</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Быстрый старт (15 мин)</li>
                <li>• Настройка безопасности (25 мин)</li>
                <li>• Работа с отчетами (20 мин)</li>
                <li>• Устранение неполадок (30 мин)</li>
              </ul>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Видеоуроки' }));
                  handleDocumentationClick();
                }}
                className="text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
              >
                Получить доступ →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-red-400 text-3xl mb-4 group-hover:animate-pulse-secure">🎓</div>
              <h4 className="text-lg font-bold mb-3">Онлайн-курсы</h4>
              <p className="text-gray-300 mb-4">Интерактивные курсы с практическими заданиями</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Базовый курс (8 часов)</li>
                <li>• Продвинутый курс (16 часов)</li>
                <li>• Курс для администраторов (24 часа)</li>
                <li>• Сертификация специалистов</li>
              </ul>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Онлайн-курсы' }));
                  handleDocumentationClick();
                }}
                className="text-red-400 hover:text-red-300 font-medium cursor-pointer"
              >
                Записаться на курс →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-yellow-400 text-3xl mb-4 group-hover:animate-pulse-secure">🔧</div>
              <h4 className="text-lg font-bold mb-3">Практические сценарии</h4>
              <p className="text-gray-300 mb-4">Готовые сценарии для типовых задач безопасности</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Настройка политик безопасности</li>
                <li>• Реагирование на инциденты</li>
                <li>• Аудит системы</li>
                <li>• Интеграция с внешними системами</li>
              </ul>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Практические сценарии' }));
                  handleDocumentationClick();
                }}
                className="text-yellow-400 hover:text-yellow-300 font-medium cursor-pointer"
              >
                Скачать сценарии →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 group">
              <div className="text-cyan-400 text-3xl mb-4 group-hover:animate-pulse-secure">📞</div>
              <h4 className="text-lg font-bold mb-3">Персональное обучение</h4>
              <p className="text-gray-300 mb-4">Индивидуальные занятия с экспертом по безопасности</p>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                <li>• Консультации специалиста</li>
                <li>• Разбор конкретных задач</li>
                <li>• Настройка под ваши потребности</li>
                <li>• Сопровождение внедрения</li>
              </ul>
              <button 
                onClick={() => {
                  setSolutionsForm(prev => ({ ...prev, solution: 'Персональное обучение' }));
                  handleSolutionsClick();
                }}
                className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
              >
                Заказать консультацию →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Работа с госзакупками */}
      <section className="section-padding bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Работа с <span className="gradient-text">госзакупками</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              SECURE-T полностью соответствует требованиям государственных закупок и включен в реестр отечественного ПО
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg border border-green-500/30">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Соответствие требованиям 44-ФЗ и 223-ФЗ</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <h4 className="font-semibold mb-2">Реестр отечественного ПО</h4>
                      <p className="text-gray-300 text-sm">Включен в единый реестр российских программ (№14158)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <h4 className="font-semibold mb-2">Импортозамещение</h4>
                      <p className="text-gray-300 text-sm">100% российская разработка без зарубежных компонентов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <h4 className="font-semibold mb-2">Техническая поддержка</h4>
                      <p className="text-gray-300 text-sm">Гарантированная поддержка на территории РФ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-green-400 text-xl">✅</div>
                    <div>
                      <h4 className="font-semibold mb-2">Сертификация</h4>
                      <p className="text-gray-300 text-sm">Все необходимые сертификаты ФСТЭК и лицензии ФСБ</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-lg font-bold mb-4 text-blue-400">Классификация по ОКПД2</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Код:</span>
                    <span className="text-white">58.29.22.110</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Категория:</span>
                    <span className="text-white">Программное обеспечение безопасности</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Класс:</span>
                    <span className="text-white">Средства защиты информации</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg border border-yellow-500/30">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Документы для снабженцев</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📋</span>
                      <div>
                        <p className="font-medium">Коммерческое предложение</p>
                        <p className="text-sm text-gray-400">Готовое КП для госзакупок</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setDocumentationForm(prev => ({ ...prev, documentType: 'Коммерческое предложение для госзакупок' }));
                        handleDocumentationClick();
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Скачать
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-medium">Техническое задание</p>
                        <p className="text-sm text-gray-400">Образец ТЗ для тендера</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setDocumentationForm(prev => ({ ...prev, documentType: 'Техническое задание' }));
                        handleDocumentationClick();
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Скачать
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📑</span>
                      <div>
                        <p className="font-medium">Пакет документов</p>
                        <p className="text-gray-400 text-sm">Все сертификаты и лицензии</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setDocumentationForm(prev => ({ ...prev, documentType: 'Пакет документов для госзакупок' }));
                        handleDocumentationClick();
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Скачать
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium">Прайс-лист</p>
                        <p className="text-sm text-gray-400">Актуальные цены и условия</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setDocumentationForm(prev => ({ ...prev, documentType: 'Прайс-лист' }));
                        handleDocumentationClick();
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
                    >
                      Скачать
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-lg border border-purple-500/30">
                <h4 className="text-lg font-bold mb-4 text-purple-400">Поддержка при участии в тендерах</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>Консультации по техническим требованиям</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>Помощь в подготовке документации</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>Демонстрация возможностей системы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span>Расчет стоимости под конкретный проект</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-effect p-8 rounded-lg border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Специальное предложение для госзаказчиков</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Получите персональную консультацию по работе с госзакупками и специальные условия для государственных организаций
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    setSolutionsForm(prev => ({ ...prev, solution: 'Консультация по госзакупкам' }));
                    handleSolutionsClick();
                  }}
                  className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:bg-emerald-600 animate-pulse-secure"
                >
                  Консультация по госзакупкам
                </button>
                <button 
                  onClick={() => {
                    setDocumentationForm(prev => ({ ...prev, documentType: 'Полный пакет для госзакупок' }));
                    handleDocumentationClick();
                  }}
                  className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Получить документы
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Documentation */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Дополнительные <span className="gradient-text">материалы</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4">📄</div>
              <h4 className="text-lg font-bold mb-3">Техническая документация</h4>
              <p className="text-gray-300 mb-4">Подробные руководства по внедрению и настройке</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Полная документация' }));
                  handleDocumentationClick();
                }}
                className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-bold mb-3">Методические материалы</h4>
              <p className="text-gray-300 mb-4">Лучшие практики информационной безопасности</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Методические материалы' }));
                  handleDocumentationClick();
                }}
                className="text-green-400 hover:text-green-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4">🔧</div>
              <h4 className="text-lg font-bold mb-3">Инструменты настройки</h4>
              <p className="text-gray-300 mb-4">Утилиты для конфигурирования системы</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Инструменты настройки' }));
                  handleDocumentationClick();
                }}
                className="text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4">📊</div>
              <h4 className="text-lg font-bold mb-3">Отчеты и аналитика</h4>
              <p className="text-gray-300 mb-4">Шаблоны отчетов и аналитические данные</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Отчеты и аналитика' }));
                  handleDocumentationClick();
                }}
                className="text-red-400 hover:text-red-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">🎓</div>
              <h4 className="text-lg font-bold mb-3">Обучающие материалы</h4>
              <p className="text-gray-300 mb-4">Курсы и тренинги по безопасности</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Обучающие материалы' }));
                  handleDocumentationClick();
                }}
                className="text-yellow-400 hover:text-yellow-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4">📋</div>
              <h4 className="text-lg font-bold mb-3">Сертификаты и лицензии</h4>
              <p className="text-gray-300 mb-4">Документы о соответствии стандартам</p>
              <button 
                onClick={() => {
                  setDocumentationForm(prev => ({ ...prev, documentType: 'Сертификаты и лицензии' }));
                  handleDocumentationClick();
                }}
                className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
              >
                Скачать →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Нужна консультация по <span className="gradient-text">SECURE-T</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Наши эксперты помогут подобрать оптимальное решение для вашей организации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSolutionsForm(prev => ({ ...prev, solution: 'Консультация' }));
                  handleSolutionsClick();
                }}
                className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 cursor-pointer"
              >
                Получить консультацию
              </button>
              <button 
                onClick={() => {
                  setSolutionsForm(prev => ({ ...prev, solution: 'Аудит безопасности' }));
                  handleSolutionsClick();
                }}
                className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                Заказать аудит
              </button>
            </div>
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
            Решения информационной безопасности SECURE-T
          </p>
        </div>
      </footer>

      {/* Модальное окно "Наши решения" */}
      {isSolutionsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-red-500/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-400">Наши решения SECURE-T</h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSolutionsSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={solutionsForm.name}
                  onChange={handleSolutionsInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={solutionsForm.email}
                  onChange={handleSolutionsInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={solutionsForm.company}
                  onChange={handleSolutionsInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Интересующее решение *
                </label>
                <select
                  name="solution"
                  value={solutionsForm.solution}
                  onChange={handleSolutionsInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Выберите решение</option>
                  <option value="Криптографическая защита">Криптографическая защита</option>
                  <option value="Сетевая безопасность">Сетевая безопасность</option>
                  <option value="Мониторинг безопасности">Мониторинг безопасности</option>
                  <option value="Аудит безопасности">Аудит безопасности</option>
                  <option value="Интеграция систем">Интеграция систем</option>
                  <option value="Обучение персонала">Обучение персонала</option>
                  <option value="Комплексное решение">Комплексное решение</option>
                  <option value="Консультация по госзакупкам">Консультация по госзакупкам</option>
                  <option value="Персональное обучение">Персональное обучение</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  name="message"
                  value={solutionsForm.message}
                  onChange={handleSolutionsInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Расскажите о ваших потребностях в области информационной безопасности..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                  Отправить заявку
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно "Документация" */}
      {isDocumentationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto border border-red-500/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-red-400">Документация SECURE-T</h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Доступная документация:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-white font-medium">Полная документация</p>
                    <p className="text-gray-400 text-sm">Техническое руководство</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-white font-medium">Быстрый старт</p>
                    <p className="text-gray-400 text-sm">Руководство по установке</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <p className="text-white font-medium">Примеры конфигураций</p>
                    <p className="text-gray-400 text-sm">Готовые настройки</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleDocumentationSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={documentationForm.name}
                  onChange={handleDocumentationInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={documentationForm.email}
                  onChange={handleDocumentationInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={documentationForm.company}
                  onChange={handleDocumentationInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Тип документации *
                </label>
                <select
                  name="documentType"
                  value={documentationForm.documentType}
                  onChange={handleDocumentationInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Выберите тип документации</option>
                  <option value="Полная документация">Полная документация</option>
                  <option value="Быстрый старт">Быстрый старт</option>
                  <option value="Примеры конфигураций">Примеры конфигураций</option>
                  <option value="API документация">API документация</option>
                  <option value="Руководство пользователя">Руководство пользователя</option>
                  <option value="Руководство администратора">Руководство администратора</option>
                  <option value="Видеоуроки">Видеоуроки</option>
                  <option value="Онлайн-курсы">Онлайн-курсы</option>
                  <option value="Практические сценарии">Практические сценарии</option>
                  <option value="Сертификат ФСТЭК">Сертификат ФСТЭК</option>
                  <option value="Лицензия ФСБ">Лицензия ФСБ</option>
                  <option value="ISO 27001">ISO 27001</option>
                  <option value="Реестр Минпромторга">Реестр Минпромторга</option>
                  <option value="Соответствие ГОСТ">Соответствие ГОСТ</option>
                  <option value="Криптографические алгоритмы">Криптографические алгоритмы</option>
                  <option value="Коммерческое предложение для госзакупок">Коммерческое предложение для госзакупок</option>
                  <option value="Техническое задание">Техническое задание</option>
                  <option value="Пакет документов для госзакупок">Пакет документов для госзакупок</option>
                  <option value="Прайс-лист">Прайс-лист</option>
                  <option value="Полный комплект документов">Полный комплект документов</option>
                  <option value="Полный пакет для госзакупок">Полный пакет для госзакупок</option>
                  <option value="Все документы">Все документы</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Комментарий
                </label>
                <textarea
                  name="message"
                  value={documentationForm.message}
                  onChange={handleDocumentationInputChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Укажите, для каких целей вам нужна документация..."
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                  Получить документацию
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 