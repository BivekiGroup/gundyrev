'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { 
  Bird, 
  Lightbulb, 
  Users, 
  Monitor, 
  MessageSquare, 
  Smartphone, 
  Shield, 
  BarChart3, 
  Palette, 
  Plug, 
  Building2, 
  GraduationCap, 
  Handshake, 
  Stethoscope, 
  Scale, 
  Landmark, 
  Wrench, 
  Tv, 
  Check, 
  Video, 
  Phone, 
  VolumeX, 
  Mic 
} from 'lucide-react';

export default function Solovey() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [participants, setParticipants] = useState(3);
  const [soundWaves, setSoundWaves] = useState<Array<{
    id: number;
    delay: string;
    duration: string;
    scale: number;
  }>>([]);
  const [networkNodes, setNetworkNodes] = useState<Array<{
    id: number;
    x: string;
    y: string;
    connected: boolean;
    pulse: boolean;
  }>>([]);
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1247,
    callsToday: 8934,
    dataTransferred: 2.3,
    uptime: 99.97
  });
  const [calculatorData, setCalculatorData] = useState({
    employees: 50,
    meetingsPerWeek: 10,
    travelCostPerMeeting: 5000
  });

  // Modals
  const [isImplementModalOpen, setIsImplementModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  const [implementForm, setImplementForm] = useState({ name: '', email: '', company: '', message: '' });
  const [demoForm, setDemoForm] = useState({ name: '', email: '', company: '', message: '' });
  const [consultForm, setConsultForm] = useState({ name: '', email: '', company: '', message: '' });

  const openModal = (type: 'implement' | 'demo' | 'consult') => {
    if (type === 'implement') setIsImplementModalOpen(true);
    if (type === 'demo') setIsDemoModalOpen(true);
    if (type === 'consult') setIsConsultModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModals = () => {
    setIsImplementModalOpen(false);
    setIsDemoModalOpen(false);
    setIsConsultModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    form: 'implement' | 'demo' | 'consult'
  ) => {
    const { name, value } = e.target;
    const setter = form === 'implement' ? setImplementForm : form === 'demo' ? setDemoForm : setConsultForm;
    setter(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, form: 'implement' | 'demo' | 'consult') => {
    e.preventDefault();
    const data = form === 'implement' ? implementForm : form === 'demo' ? demoForm : consultForm;
    alert(`Спасибо, ${data.name}! Мы свяжемся с вами.`);
    if (form === 'implement') setImplementForm({ name: '', email: '', company: '', message: '' });
    if (form === 'demo') setDemoForm({ name: '', email: '', company: '', message: '' });
    if (form === 'consult') setConsultForm({ name: '', email: '', company: '', message: '' });
    closeModals();
  };

  const avatars = [
    { name: 'Анна', role: 'Менеджер', status: 'speaking', avatar: '👩‍💼' },
    { name: 'Михаил', role: 'Разработчик', status: 'listening', avatar: '👨‍💻' },
    { name: 'Елена', role: 'Дизайнер', status: 'muted', avatar: '👩‍🎨' },
    { name: 'Дмитрий', role: 'Аналитик', status: 'listening', avatar: '👨‍💼' },
    { name: 'Ольга', role: 'HR', status: 'speaking', avatar: '👩‍🏫' },
    { name: 'Алексей', role: 'CEO', status: 'listening', avatar: '👨‍🚀' }
  ];

  // Генерация звуковых волн соловья
  useEffect(() => {
    const waves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: `${i * 0.2}s`,
      duration: `${2 + (i * 0.3)}s`,
      scale: 0.5 + (i * 0.1)
    }));
    setSoundWaves(waves);
  }, []);

  // Генерация сетевых узлов
  useEffect(() => {
    const predefinedPositions = [
      { x: '25%', y: '30%' }, { x: '75%', y: '25%' }, { x: '15%', y: '60%' },
      { x: '85%', y: '70%' }, { x: '45%', y: '15%' }, { x: '55%', y: '85%' },
      { x: '30%', y: '45%' }, { x: '70%', y: '55%' }, { x: '20%', y: '75%' },
      { x: '80%', y: '40%' }, { x: '40%', y: '80%' }, { x: '60%', y: '20%' }
    ];
    
    const nodes = predefinedPositions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      connected: i % 3 !== 0, // 2 из 3 узлов подключены
      pulse: i % 2 === 0 // каждый второй пульсирует
    }));
    setNetworkNodes(nodes);
  }, []);

  // Обновление живой статистики
  useEffect(() => {
    let counter = 0;
    const patterns = [
      { users: 3, calls: 2, data: 0.05, uptime: 0.01 },
      { users: -1, calls: 1, data: 0.08, uptime: 0.02 },
      { users: 5, calls: 3, data: 0.03, uptime: -0.01 },
      { users: -2, calls: 1, data: 0.07, uptime: 0.01 },
      { users: 4, calls: 2, data: 0.04, uptime: 0.02 }
    ];
    
    const interval = setInterval(() => {
      const pattern = patterns[counter % patterns.length];
      setLiveStats(prev => ({
        activeUsers: Math.max(1200, prev.activeUsers + pattern.users),
        callsToday: prev.callsToday + pattern.calls,
        dataTransferred: prev.dataTransferred + pattern.data,
        uptime: Math.min(99.99, Math.max(99.95, prev.uptime + pattern.uptime))
      }));
      counter++;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const calculateSavings = () => {
    const { employees, meetingsPerWeek, travelCostPerMeeting } = calculatorData;
    const monthlyTravelCost = meetingsPerWeek * 4 * travelCostPerMeeting;
    const yearlyTravelCost = monthlyTravelCost * 12;
    const soloveyYearlyCost = employees * 1000; // примерная стоимость за пользователя в год
    const savings = yearlyTravelCost - soloveyYearlyCost;
    return { yearlyTravelCost, soloveyYearlyCost, savings };
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(Math.floor(num));
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-black to-yellow-900"></div>
        
        {/* Анимированные звуковые волны соловья */}
        <div className="absolute inset-0 flex items-center justify-center">
          {soundWaves.map((wave) => (
            <div
              key={wave.id}
              className="absolute border-2 border-amber-500/30 rounded-full animate-ping"
              style={{
                width: `${100 + wave.id * 50}px`,
                height: `${100 + wave.id * 50}px`,
                animationDelay: wave.delay,
                animationDuration: wave.duration,
                transform: `scale(${wave.scale})`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center relative">
                <Bird className="w-8 h-8 text-black" />
                {/* Анимированные звуковые линии */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-amber-400 rounded-full animate-pulse"
                      style={{
                        height: `${8 + i * 4}px`,
                        marginLeft: `${i * 3}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-amber-400">Соловей</h1>
            </div>
          </div>
          
          {/* Живая статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-amber-400">{formatNumber(liveStats.activeUsers)}</div>
              <div className="text-sm text-gray-400">Активных пользователей</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-yellow-400">{formatNumber(liveStats.callsToday)}</div>
              <div className="text-sm text-gray-400">Звонков сегодня</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-green-400">{liveStats.dataTransferred.toFixed(1)} ТБ</div>
              <div className="text-sm text-gray-400">Передано данных</div>
            </div>
            <div className="glass-effect p-4 rounded-lg hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-blue-400">{liveStats.uptime.toFixed(2)}%</div>
              <div className="text-sm text-gray-400">Время работы</div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Профессиональная платформа для видеосвязи и онлайн-встреч на вашем домене
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => setIsCallActive(!isCallActive)}
              className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 transform hover:scale-105"
            >
              {isCallActive ? 'Завершить демо' : 'Попробовать демо'}
            </button>
            <button onClick={() => openModal('implement')} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow transition-all duration-300 transform hover:scale-105">
              Заказать внедрение
            </button>
          </div>
          
          <div className="glass-effect p-4 rounded-lg inline-block">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Устанавливается на поддомене заказчика с нашей технической поддержкой
            </p>
          </div>
        </div>
      </section>

      {/* Живая демонстрация видеозвонка */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Живая <span className="text-amber-400">демонстрация</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Посмотрите, как выглядит интерфейс видеоконференции
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="glass-effect rounded-lg overflow-hidden p-6">
              {/* Заголовок конференции */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Еженедельная планерка</span>
                  <span className="text-sm text-gray-400">12:34</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Участников: {participants}</span>
                  <button
                    onClick={() => setParticipants(prev => Math.min(prev + 1, 6))}
                    className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded text-sm hover:bg-amber-500/30 transition-colors"
                  >
                    + Добавить
                  </button>
                </div>
              </div>

              {/* Сетка участников */}
              <div className={`grid gap-4 mb-6 ${
                participants <= 2 ? 'grid-cols-1 md:grid-cols-2' :
                participants <= 4 ? 'grid-cols-2 md:grid-cols-2' :
                'grid-cols-2 md:grid-cols-3'
              }`}>
                {avatars.slice(0, participants).map((participant, index) => (
                  <div
                    key={index}
                    className={`relative bg-gray-800 rounded-lg aspect-video flex flex-col items-center justify-center transition-all duration-500 ${
                      participant.status === 'speaking' ? 'ring-2 ring-amber-500 scale-105' : ''
                    } ${isCallActive ? 'animate-fadeIn' : 'opacity-50'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-4xl mb-2">{participant.avatar}</div>
                    <div className="text-center">
                      <div className="font-semibold text-sm">{participant.name}</div>
                      <div className="text-xs text-gray-400">{participant.role}</div>
                    </div>
                    
                    {/* Индикатор статуса */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1">
                      {participant.status === 'speaking' && (
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-amber-500 rounded-full animate-pulse"
                              style={{
                                height: `${4 + i * 2}px`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      )}
                      {participant.status === 'muted' && (
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <VolumeX className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Панель управления */}
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Mic className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Video className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Monitor className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Сетевая визуализация */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Сетевая <span className="text-amber-400">архитектура</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Распределенная система для надежной связи
            </p>
          </div>

          <div className="relative h-96 glass-effect rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-yellow-900/20">
              {/* Сетевые узлы */}
              {networkNodes.map((node) => (
                <div key={node.id}>
                  <div
                    className={`absolute w-4 h-4 rounded-full transition-all duration-1000 ${
                      node.connected ? 'bg-green-500' : 'bg-red-500'
                    } ${node.pulse ? 'animate-pulse' : ''}`}
                    style={{ left: node.x, top: node.y }}
                  />
                  {/* Соединительные линии */}
                  {node.connected && node.id < networkNodes.length - 1 && (
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ zIndex: -1 }}
                    >
                      <line
                        x1={node.x}
                        y1={node.y}
                        x2={networkNodes[node.id + 1]?.x || '50%'}
                        y2={networkNodes[node.id + 1]?.y || '50%'}
                        stroke="rgba(245, 158, 11, 0.3)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    </svg>
                  )}
                </div>
              ))}
              
              {/* Центральный сервер */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <Monitor className="w-4 h-4 text-black" />
                </div>
                <div className="text-center mt-2 text-sm text-amber-400 font-semibold">
                  Соловей Сервер
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Калькулятор экономии */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Калькулятор <span className="text-amber-400">экономии</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Рассчитайте экономию от внедрения видеосвязи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Параметры вашей компании</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Количество сотрудников</label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={calculatorData.employees}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, employees: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center mt-2 text-amber-400 font-bold">{calculatorData.employees}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Встреч в неделю</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={calculatorData.meetingsPerWeek}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, meetingsPerWeek: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center mt-2 text-amber-400 font-bold">{calculatorData.meetingsPerWeek}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Стоимость командировки (₽)</label>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={calculatorData.travelCostPerMeeting}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, travelCostPerMeeting: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center mt-2 text-amber-400 font-bold">{formatCurrency(calculatorData.travelCostPerMeeting)}</div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Ваша экономия</h3>
              
              {(() => {
                const savings = calculateSavings();
                return (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-lg">
                      <span>Расходы на командировки в год:</span>
                      <span className="font-bold text-red-400">{formatCurrency(savings.yearlyTravelCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-amber-500/10 rounded-lg">
                      <span>Стоимость Соловей в год:</span>
                      <span className="font-bold text-amber-400">{formatCurrency(savings.soloveyYearlyCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg border-2 border-green-500">
                      <span className="font-bold">Экономия в год:</span>
                      <span className="font-bold text-green-400 text-xl">{formatCurrency(savings.savings)}</span>
                    </div>
                    
                    <div className="text-center mt-6">
                      <div className="text-3xl font-bold text-green-400 mb-2">
                        {savings.savings > 0 ? Math.round(savings.yearlyTravelCost / savings.soloveyYearlyCost) : 0}x
                      </div>
                      <div className="text-sm text-gray-400">окупаемость инвестиций</div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возможности <span className="text-amber-400">Соловей</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полнофункциональная платформа для корпоративных коммуникаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-4xl mb-4 flex justify-center"><Video className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">HD видеосвязь</h3>
              <p className="text-gray-300">
                Качественная видеосвязь в разрешении до 4K с адаптивной настройкой под канал связи
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4 flex justify-center"><Users className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Групповые конференции</h3>
              <p className="text-gray-300">
                Поддержка до 100 участников одновременно с возможностью модерации
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-orange-400 text-4xl mb-4 flex justify-center"><Monitor className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Демонстрация экрана</h3>
              <p className="text-gray-300">
                Совместное использование экрана, презентаций и приложений
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><MessageSquare className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Чат и файлообмен</h3>
              <p className="text-gray-300">
                Встроенный чат с возможностью отправки файлов и ссылок
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4 flex justify-center"><Smartphone className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Мультиплатформенность</h3>
              <p className="text-gray-300">
                Работает в браузере, на мобильных устройствах и десктопе
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4 flex justify-center"><Shield className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Безопасность</h3>
              <p className="text-gray-300">
                End-to-end шифрование и защита от несанкционированного доступа
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4 flex justify-center"><BarChart3 className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Аналитика</h3>
              <p className="text-gray-300">
                Детальная статистика использования и отчеты по конференциям
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4 flex justify-center"><Palette className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Брендинг</h3>
              <p className="text-gray-300">
                Настройка интерфейса под корпоративный стиль заказчика
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-4xl mb-4 flex justify-center"><Plug className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">API интеграция</h3>
              <p className="text-gray-300">
                Возможность интеграции с корпоративными системами через API
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Варианты <span className="text-amber-400">размещения</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">На поддомене заказчика</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Check className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Ваш домен</h4>
                    <p className="text-gray-300 text-sm">meet.yourcompany.ru или conference.yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Check className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Полный контроль</h4>
                    <p className="text-gray-300 text-sm">Управление пользователями и настройками</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Check className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Корпоративный стиль</h4>
                    <p className="text-gray-300 text-sm">Логотип, цвета и дизайн под ваш бренд</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Check className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Техподдержка</h4>
                    <p className="text-gray-300 text-sm">Наша команда обеспечивает работу сервиса</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Пример интеграции</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">https://meet.company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">Основной домен для конференций</div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">https://api.meet.company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">API для интеграции с системами</div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-amber-400 text-sm font-mono">admin@company.ru</div>
                  <div className="text-gray-400 text-xs mt-1">Административный доступ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Сценарии <span className="text-amber-400">использования</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-3xl mb-4 flex justify-center"><Building2 className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Корпоративные встречи</h4>
              <p className="text-gray-300 text-sm">
                Планерки, совещания, презентации для сотрудников
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4 flex justify-center"><GraduationCap className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Обучение и тренинги</h4>
              <p className="text-gray-300 text-sm">
                Дистанционное обучение персонала и клиентов
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4 flex justify-center"><Handshake className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Переговоры с клиентами</h4>
              <p className="text-gray-300 text-sm">
                Презентации продуктов и услуг потенциальным клиентам
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4 flex justify-center"><Stethoscope className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Телемедицина</h4>
              <p className="text-gray-300 text-sm">
                Консультации врачей и медицинские консилиумы
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4 flex justify-center"><Scale className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Юридические консультации</h4>
              <p className="text-gray-300 text-sm">
                Удаленные консультации и судебные заседания
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4 flex justify-center"><Landmark className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Государственные услуги</h4>
              <p className="text-gray-300 text-sm">
                Прием граждан и межведомственное взаимодействие
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4 flex justify-center"><Wrench className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Техническая поддержка</h4>
              <p className="text-gray-300 text-sm">
                Удаленная диагностика и решение проблем
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-3xl mb-4 flex justify-center"><Tv className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Вебинары и события</h4>
              <p className="text-gray-300 text-sm">
                Массовые онлайн-мероприятия и конференции
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Технические <span className="text-amber-400">характеристики</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Системные требования</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Браузеры</h4>
                  <p className="text-gray-300 text-sm">Chrome 70+, Firefox 68+, Safari 12+, Edge 79+</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Мобильные устройства</h4>
                  <p className="text-gray-300 text-sm">iOS 12+, Android 7+</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Пропускная способность</h4>
                  <p className="text-gray-300 text-sm">Минимум 1 Мбит/с на участника</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Серверные требования</h4>
                  <p className="text-gray-300 text-sm">4 CPU, 8GB RAM, 100GB SSD</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-amber-400">Функциональность</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Максимальное количество участников</h4>
                  <p className="text-gray-300 text-sm">До 100 одновременно</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Качество видео</h4>
                  <p className="text-gray-300 text-sm">До 4K (3840x2160) при наличии канала</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Запись конференций</h4>
                  <p className="text-gray-300 text-sm">MP4, автоматическая загрузка в облако</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Интеграции</h4>
                  <p className="text-gray-300 text-sm">REST API, WebHooks, календари</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Стоимость <span className="text-amber-400">внедрения</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Гибкие тарифные планы для организаций любого размера
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Стартовый</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 50 000 ₽</div>
              <p className="text-gray-300 mb-6">Базовая конфигурация для малого бизнеса</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• До 25 участников</li>
                <li>• Базовый брендинг</li>
                <li>• Техподдержка в рабочее время</li>
                <li>• 3 месяца сопровождения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300 border-2 border-amber-500">
              <div className="text-amber-400 text-sm font-bold mb-2">ПОПУЛЯРНЫЙ</div>
              <h3 className="text-xl font-bold mb-4">Корпоративный</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 150 000 ₽</div>
              <p className="text-gray-300 mb-6">Полнофункциональное решение для среднего бизнеса</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• До 100 участников</li>
                <li>• Полный брендинг</li>
                <li>• API интеграция</li>
                <li>• 24/7 техподдержка</li>
                <li>• 12 месяцев сопровождения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Энтерпрайз</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">от 500 000 ₽</div>
              <p className="text-gray-300 mb-6">Масштабируемое решение для крупных организаций</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Неограниченное количество участников</li>
                <li>• Кластерная архитектура</li>
                <li>• Индивидуальная разработка</li>
                <li>• Выделенная техподдержка</li>
                <li>• SLA 99.9%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Готовы запустить <span className="text-amber-400">Соловей</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Обсудим ваши потребности и подготовим индивидуальное предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openModal('demo')} className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105">
                Заказать демо
              </button>
              <button onClick={() => openModal('consult')} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow transition-all duration-300 hover:scale-105">
                Получить консультацию
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
            Соловей — профессиональная платформа видеосвязи
          </p>
        </div>
      </footer>

      {/* Implement Modal */}
      {isImplementModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-amber-500/30">
            <button
              onClick={closeModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Заказать внедрение</h3>
            <form onSubmit={(e) => handleSubmit(e, 'implement')} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={implementForm.name}
                  onChange={(e) => handleFormChange(e, 'implement')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={implementForm.email}
                  onChange={(e) => handleFormChange(e, 'implement')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
                <input
                  type="text"
                  name="company"
                  value={implementForm.company}
                  onChange={(e) => handleFormChange(e, 'implement')}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Комментарий</label>
                <textarea
                  name="message"
                  value={implementForm.message}
                  onChange={(e) => handleFormChange(e, 'implement')}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  placeholder="Опишите требования и сроки..."
                />
              </div>
              <div className="flex space-x-4 pt-2">
                <button type="button" onClick={closeModals} className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Отмена</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors text-sm">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-amber-500/30">
            <button
              onClick={closeModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Заказать демо</h3>
            <form onSubmit={(e) => handleSubmit(e, 'demo')} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={demoForm.name}
                  onChange={(e) => handleFormChange(e, 'demo')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={demoForm.email}
                  onChange={(e) => handleFormChange(e, 'demo')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
                <input
                  type="text"
                  name="company"
                  value={demoForm.company}
                  onChange={(e) => handleFormChange(e, 'demo')}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Комментарий</label>
                <textarea
                  name="message"
                  value={demoForm.message}
                  onChange={(e) => handleFormChange(e, 'demo')}
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  placeholder="Задачи и желаемые сроки..."
                />
              </div>
              <div className="flex space-x-4 pt-2">
                <button type="button" onClick={closeModals} className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Отмена</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors text-sm">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Consult Modal */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-amber-500/30">
            <button
              onClick={closeModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Получить консультацию</h3>
            <form onSubmit={(e) => handleSubmit(e, 'consult')} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={consultForm.name}
                  onChange={(e) => handleFormChange(e, 'consult')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={consultForm.email}
                  onChange={(e) => handleFormChange(e, 'consult')}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
                <input
                  type="text"
                  name="company"
                  value={consultForm.company}
                  onChange={(e) => handleFormChange(e, 'consult')}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Вопрос *</label>
                <textarea
                  name="message"
                  value={consultForm.message}
                  onChange={(e) => handleFormChange(e, 'consult')}
                  rows={4}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  placeholder="Опишите ваш вопрос по Соловью..."
                />
              </div>
              <div className="flex space-x-4 pt-2">
                <button type="button" onClick={closeModals} className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm">Отмена</button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors text-sm">Отправить</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 
