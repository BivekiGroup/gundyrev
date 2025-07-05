'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [teamMemberFlipped, setTeamMemberFlipped] = useState<number | null>(null);
  const [liveCounters, setLiveCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0
  });
  const [workDaySimulation, setWorkDaySimulation] = useState({
    currentTime: '09:00',
    currentActivity: 'Планирование задач',
    teamStatus: 'active'
  });
  const [floatingTechs, setFloatingTechs] = useState<Array<{
    id: number;
    tech: string;
    x: string;
    y: string;
    delay: number;
    duration: number;
  }>>([]);
  const [competencyGraph, setCompetencyGraph] = useState({
    activeNode: null as string | null,
    connections: [] as Array<{from: string, to: string}>
  });
  const [backgroundParticles, setBackgroundParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
  }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const timelineSteps = [
    { year: '2019', title: 'Основание компании', description: 'Начало деятельности в сфере разработки ПО', color: 'bg-green-500' },
    { year: '2020', title: 'Расширение услуг', description: 'Добавление поставки электроники и системной интеграции', color: 'bg-blue-500' },
    { year: '2021', title: 'Первые крупные проекты', description: 'Реализация комплексных IT-решений для бизнеса', color: 'bg-purple-500' },
    { year: '2022', title: 'Государственные контракты', description: 'Начало работы с госсектором по 44-ФЗ и 223-ФЗ', color: 'bg-amber-500' },
    { year: '2023', title: 'Собственные продукты', description: 'Запуск Соловей и других авторских решений', color: 'bg-cyan-500' },
    { year: '2024', title: 'Полный спектр услуг', description: 'Комплексный поставщик IT-решений и оборудования', color: 'bg-pink-500' }
  ];

  const teamMembers = [
    {
      name: 'Александр Гундырев',
      role: 'Основатель и CEO',
      avatar: '👨‍💼',
      skills: ['Стратегия', 'Управление', 'Бизнес-процессы'],
      experience: '10+ лет',
      projects: '200+',
      description: 'Визионер компании, определяет стратегическое направление развития'
    },
    {
      name: 'Мария Петрова',
      role: 'CTO',
      avatar: '👩‍💻',
      skills: ['Архитектура', 'DevOps', 'Команда'],
      experience: '8+ лет',
      projects: '150+',
      description: 'Руководит техническим направлением и командой разработки'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Lead Developer',
      avatar: '👨‍💻',
      skills: ['React', 'Node.js', 'Python'],
      experience: '6+ лет',
      projects: '100+',
      description: 'Ведущий разработчик, эксперт по современным технологиям'
    },
    {
      name: 'Елена Смирнова',
      role: 'Project Manager',
      avatar: '👩‍💼',
      skills: ['Agile', 'Scrum', 'Планирование'],
      experience: '7+ лет',
      projects: '80+',
      description: 'Координирует проекты и обеспечивает качественную реализацию'
    },
    {
      name: 'Антон Васильев',
      role: 'DevOps Engineer',
      avatar: '👨‍🔧',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      experience: '5+ лет',
      projects: '60+',
      description: 'Отвечает за инфраструктуру и автоматизацию процессов'
    },
    {
      name: 'Ольга Новикова',
      role: 'UX/UI Designer',
      avatar: '👩‍🎨',
      skills: ['Figma', 'Prototyping', 'Research'],
      experience: '4+ лет',
      projects: '90+',
      description: 'Создает интуитивные и красивые пользовательские интерфейсы'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Docker', 'AWS', 'PostgreSQL', 
    'TypeScript', 'Next.js', 'Kubernetes', 'Redis', 'GraphQL', 'MongoDB',
    'Vue.js', 'Express', 'Nginx', 'Linux', 'Git', 'Jenkins'
  ];

  const competencies = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'Next.js'],
    'Backend': ['Node.js', 'Python', 'Express', 'GraphQL'],
    'Database': ['PostgreSQL', 'MongoDB', 'Redis'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
    'Infrastructure': ['Linux', 'Nginx', 'Git']
  };

  const workDayActivities = [
    { time: '09:00', activity: 'Планирование задач', icon: '📋' },
    { time: '10:00', activity: 'Разработка', icon: '💻' },
    { time: '11:30', activity: 'Code Review', icon: '🔍' },
    { time: '13:00', activity: 'Обед', icon: '🍽️' },
    { time: '14:00', activity: 'Встреча с клиентом', icon: '🤝' },
    { time: '15:30', activity: 'Тестирование', icon: '🧪' },
    { time: '17:00', activity: 'Деплой', icon: '🚀' },
    { time: '18:00', activity: 'Планирование на завтра', icon: '📅' }
  ];

  // Автоматическое переключение временной шкалы
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineStep(prev => (prev + 1) % timelineSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Анимация счетчиков
  useEffect(() => {
    const targets = { projects: 500, clients: 150, years: 5, support: 24 };
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setLiveCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        support: Math.floor(targets.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Генерация плавающих технологий
  useEffect(() => {
    const techs = technologies.map((tech, i) => ({
      id: i,
      tech,
      x: `${10 + (i * 80) % 80}%`,
      y: `${20 + (i * 60) % 60}%`,
      delay: i * 0.5,
      duration: 8 + (i % 4)
    }));
    setFloatingTechs(techs);
  }, []);

  // Симуляция рабочего дня
  useEffect(() => {
    let activityIndex = 0;
    const interval = setInterval(() => {
      const activity = workDayActivities[activityIndex];
      setWorkDaySimulation({
        currentTime: activity.time,
        currentActivity: activity.activity,
        teamStatus: activity.time === '13:00' ? 'break' : 'active'
      });
      activityIndex = (activityIndex + 1) % workDayActivities.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Инициализация монтирования
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTeamMemberClick = (index: number) => {
    setTeamMemberFlipped(teamMemberFlipped === index ? null : index);
  };

  const handleCompetencyClick = (competency: string) => {
    setCompetencyGraph(prev => ({
      ...prev,
      activeNode: prev.activeNode === competency ? null : competency
    }));
  };

  // Генерация фоновых частиц (детерминированно)
  useEffect(() => {
    if (!mounted) return;
    
    const colors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: (i * 17 + 23) % 100,
      y: (i * 31 + 47) % 100,
      vx: ((i % 7) - 3) * 0.1,
      vy: ((i % 5) - 2) * 0.1,
      size: (i % 3) + 1,
      color: colors[i % colors.length],
      opacity: 0.3 + (i % 7) * 0.1
    }));
    setBackgroundParticles(particles);
  }, [mounted]);

  // Анимация частиц
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setBackgroundParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;
        let newVx = particle.vx;
        let newVy = particle.vy;

        // Отскок от границ
        if (newX <= 0 || newX >= 100) {
          newVx = -newVx;
          newX = newX <= 0 ? 0 : 100;
        }
        if (newY <= 0 || newY >= 100) {
          newVy = -newVy;
          newY = newY <= 0 ? 0 : 100;
        }

        // Притяжение к курсору
        const mouseInfluence = 0.02;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
        const dx = (mousePosition.x / screenWidth * 100) - newX;
        const dy = (mousePosition.y / screenHeight * 100) - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 20) {
          newVx += dx * mouseInfluence / distance;
          newVy += dy * mouseInfluence / distance;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx * 0.99, // Затухание
          vy: newVy * 0.99
        };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [mounted, mousePosition]);

  // Отслеживание позиции мыши
  useEffect(() => {
    if (!mounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mounted]);

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-gray-900"></div>
        
        {/* Интерактивный фон с частицами */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Анимированная сетка */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite"/>
                  </path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Волновые эффекты */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 15}%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
                  animation: `wave ${8 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Анимированные частицы */}
          {mounted && backgroundParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full pointer-events-none transition-all duration-100"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
          
          {/* Соединительные линии между близкими частицами */}
          {mounted && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {backgroundParticles.map((particle1, i) => 
                backgroundParticles.slice(i + 1).map((particle2, j) => {
                  const dx = particle1.x - particle2.x;
                  const dy = particle1.y - particle2.y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  
                  if (distance < 15) {
                    return (
                      <line
                        key={`${i}-${j}`}
                        x1={`${particle1.x}%`}
                        y1={`${particle1.y}%`}
                        x2={`${particle2.x}%`}
                        y2={`${particle2.y}%`}
                        stroke={particle1.color}
                        strokeWidth="1"
                        opacity={0.1 + (0.8 - distance / 15) * 0.7}
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>
          )}
          
          {/* Дополнительные световые эффекты */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animation: `twinkle ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Плавающие технологии */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingTechs.map((tech) => (
            <div
              key={tech.id}
              className="absolute text-sm font-mono text-gray-500 opacity-30 pointer-events-none"
              style={{
                left: tech.x,
                top: tech.y,
                animation: `float ${tech.duration}s ease-in-out infinite`,
                animationDelay: `${tech.delay}s`
              }}
            >
              {tech.tech}
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            О <span className="gradient-text">нас</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            GUNDYREV — это команда профессионалов, создающих инновационные IT-решения для современного бизнеса
          </p>
        </div>
      </section>

      {/* Интерактивное представление компании */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Кто мы <span className="gradient-text">такие</span>
            </h2>
            <p className="text-xl text-gray-300">Познакомьтесь с GUNDYREV через интерактивную презентацию</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Анимированная схема компании */}
            <div className="relative h-96 glass-effect rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20">
                {/* Центральный логотип */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xl">G</span>
                  </div>
                  <div className="text-center mt-2 text-sm font-bold text-green-400">GUNDYREV</div>
                </div>

                {/* Орбитальные элементы услуг */}
                <div className="absolute inset-0">
                  {[
                    { name: 'Разработка ПО', icon: '💻', angle: 0, color: 'text-purple-400' },
                    { name: 'Электроника', icon: '⚡', angle: 60, color: 'text-cyan-400' },
                    { name: 'Соловей', icon: '🐦', angle: 120, color: 'text-amber-400' },
                    { name: 'Secure-T', icon: '🛡️', angle: 180, color: 'text-red-400' },
                    { name: 'Dr.Web', icon: '🔧', angle: 240, color: 'text-green-400' },
                    { name: 'UX Софт', icon: '🎨', angle: 300, color: 'text-blue-400' }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 rounded-full glass-effect flex items-center justify-center hover-glow transition-all duration-300 cursor-pointer"
                      style={{
                        left: `${50 + 35 * Math.cos((service.angle * Math.PI) / 180)}%`,
                        top: `${50 + 35 * Math.sin((service.angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={service.name}
                    >
                      <span className={`text-xl ${service.color}`}>{service.icon}</span>
                    </div>
                  ))}
                </div>

                {/* Соединительные линии */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <circle id="orbit" cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" strokeDasharray="5,5">
                    </circle>
                  </defs>
                  <use href="#orbit"/>
                </svg>
              </div>
            </div>

            {/* Интерактивная информация */}
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold">Наша миссия</h3>
                </div>
                <p className="text-gray-300">
                  Создавать технологические решения, которые действительно работают и приносят пользу нашим клиентам
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold">Наше видение</h3>
                </div>
                <p className="text-gray-300">
                  Стать ведущей IT-компанией, которая помогает бизнесу развиваться с помощью современных технологий
                </p>
              </div>

              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">💡</span>
                  </div>
                  <h3 className="text-xl font-bold">Наш подход</h3>
                </div>
                <p className="text-gray-300">
                  Комплексный подход к решению задач — от анализа потребностей до постпроектной поддержки
                </p>
              </div>
            </div>
          </div>

          {/* Живая карта экспертизы */}
          <div className="glass-effect p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Области нашей <span className="gradient-text">экспертизы</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Разработка',
                  skills: ['React', 'Node.js', 'Python', 'Mobile Apps'],
                  level: 95,
                  color: 'bg-purple-500',
                  icon: '🔧'
                },
                {
                  category: 'Инфраструктура',
                  skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
                  level: 88,
                  color: 'bg-blue-500',
                  icon: '🏗️'
                },
                {
                  category: 'Безопасность',
                  skills: ['Secure-T', 'Dr.Web', 'Защита данных'],
                  level: 92,
                  color: 'bg-red-500',
                  icon: '🛡️'
                },
                {
                  category: 'Поставки',
                  skills: ['Электроника', 'Серверы', 'Госзакупки'],
                  level: 90,
                  color: 'bg-cyan-500',
                  icon: '📦'
                },
                {
                  category: 'Консалтинг',
                  skills: ['Архитектура', 'Планирование', 'Оптимизация'],
                  level: 85,
                  color: 'bg-green-500',
                  icon: '💼'
                },
                {
                  category: 'Поддержка',
                  skills: ['24/7', 'Мониторинг', 'Обслуживание'],
                  level: 97,
                  color: 'bg-amber-500',
                  icon: '🔧'
                }
              ].map((area, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${area.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white">{area.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold">{area.category}</h4>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-sm text-gray-400">• {skill}</div>
                    ))}
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm">
                      <span>Экспертиза</span>
                      <span className="text-green-400">{area.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${area.color} transition-all duration-1000`}
                        style={{ width: `${area.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Интерактивная временная шкала */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наша <span className="gradient-text">история</span>
            </h2>
            <p className="text-xl text-gray-300">Путь от стартапа до ведущей IT-компании</p>
          </div>

          <div className="relative">
            {/* Временная линия */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Точка на временной линии */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-gray-900 transition-all duration-500 ${
                    activeTimelineStep === index ? `${step.color} scale-125 animate-pulse` : 'bg-gray-600'
                  }`}></div>
                  
                  {/* Карточка события */}
                  <div className={`w-5/12 ${
                    activeTimelineStep === index ? 'scale-105' : 'scale-100'
                  } transition-all duration-500`}>
                    <div className={`glass-effect p-6 rounded-lg ${
                      activeTimelineStep === index ? 'ring-2 ring-green-400' : ''
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step.color}`}>
                          {step.year}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Команда */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наша <span className="gradient-text">команда</span>
            </h2>
            <p className="text-xl text-gray-300">Профессионалы, которые создают будущее</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative h-80 cursor-pointer"
                onClick={() => handleTeamMemberClick(index)}
              >
                <div className={`absolute inset-0 w-full h-full transition-all duration-700 transform-gpu ${
                  teamMemberFlipped === index ? 'rotateY-180' : ''
                }`} style={{ transformStyle: 'preserve-3d' }}>
                  
                  {/* Лицевая сторона */}
                  <div className="absolute inset-0 w-full h-full glass-effect rounded-lg p-6 flex flex-col items-center justify-center text-center hover-glow transition-all duration-300"
                       style={{ backfaceVisibility: 'hidden' }}>
                    <div className="text-6xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <div className="text-sm text-gray-500">Нажмите для подробностей</div>
                  </div>
                  
                  {/* Обратная сторона */}
                  <div className="absolute inset-0 w-full h-full glass-effect rounded-lg p-6 flex flex-col justify-center"
                       style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <h3 className="text-lg font-bold mb-3 text-green-400">{member.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{member.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Опыт:</span>
                        <span className="text-xs text-white">{member.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-400">Проекты:</span>
                        <span className="text-xs text-white">{member.projects}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Живые счетчики достижений */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наши <span className="gradient-text">достижения</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-green-400 mb-4 count-up">
                {liveCounters.projects}+
              </div>
              <p className="text-gray-300">Выполненных проектов</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-400 transition-all duration-2000"
                  style={{ width: `${(liveCounters.projects / 500) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-blue-400 mb-4 count-up">
                {liveCounters.clients}+
              </div>
              <p className="text-gray-300">Довольных клиентов</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 transition-all duration-2000"
                  style={{ width: `${(liveCounters.clients / 150) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-purple-400 mb-4 count-up">
                {liveCounters.years}+
              </div>
              <p className="text-gray-300">Лет на рынке</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-400 transition-all duration-2000"
                  style={{ width: `${(liveCounters.years / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="text-5xl font-bold text-amber-400 mb-4 count-up">
                {liveCounters.support}/7
              </div>
              <p className="text-gray-300">Техническая поддержка</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-400 transition-all duration-2000"
                  style={{ width: `${(liveCounters.support / 24) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Интерактивный граф компетенций */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наши <span className="gradient-text">компетенции</span>
            </h2>
            <p className="text-xl text-gray-300">Технологии, которыми мы владеем</p>
          </div>

          <div className="relative h-96 glass-effect rounded-lg p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
            
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-8 h-full">
              {Object.entries(competencies).map(([category, techs]) => (
                <div key={category} className="relative">
                  <button
                    onClick={() => handleCompetencyClick(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 ${
                      competencyGraph.activeNode === category
                        ? 'bg-purple-500 text-white scale-125'
                        : 'glass-effect text-gray-300 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                  
                  {/* Связанные технологии */}
                  {competencyGraph.activeNode === category && (
                    <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="flex flex-wrap gap-2 justify-center max-w-xs">
                        {techs.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm animate-fadeIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">ценности</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Результативность</h3>
              <p className="text-gray-300">
                Мы ориентированы на достижение конкретных результатов и решение реальных задач бизнеса
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">Профессионализм</h3>
              <p className="text-gray-300">
                Высокая экспертиза и постоянное развитие компетенций в области IT-технологий
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Партнерство</h3>
              <p className="text-gray-300">
                Долгосрочные отношения с клиентами, основанные на взаимном доверии и понимании
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Инновации</h3>
              <p className="text-gray-300">
                Использование передовых технологий и современных подходов к решению задач
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Надежность</h3>
              <p className="text-gray-300">
                Гарантированное качество услуг и соблюдение всех договорных обязательств
              </p>
            </div>

            <div className="glass-effect p-8 rounded-lg text-center hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-4">Развитие</h3>
              <p className="text-gray-300">
                Постоянное совершенствование процессов и расширение спектра предоставляемых услуг
              </p>
            </div>
          </div>

          <div className="glass-effect p-12 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-6">Наша миссия</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Предоставлять комплексные IT-решения, которые помогают нашим клиентам достигать 
              бизнес-целей, повышать эффективность работы и успешно развиваться в цифровой экономике. 
              Мы стремимся быть надежным технологическим партнером, который понимает потребности 
              бизнеса и предлагает оптимальные решения.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">направления</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексный подход к решению IT-задач любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4">💻</div>
              <h4 className="text-lg font-bold mb-3">Разработка ПО</h4>
              <p className="text-gray-300 text-sm mb-4">
                Веб-приложения, мобильные приложения, десктопные программы
              </p>
              <a href="/development" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-cyan-400 text-3xl mb-4">⚡</div>
              <h4 className="text-lg font-bold mb-3">Поставка электроники</h4>
              <p className="text-gray-300 text-sm mb-4">
                От аксессуаров до серверного оборудования, работа с госзакупками
              </p>
              <a href="/electronics" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4">🔒</div>
              <h4 className="text-lg font-bold mb-3">UX Софт</h4>
              <p className="text-gray-300 text-sm mb-4">
                Программное обеспечение для улучшения пользовательского опыта
              </p>
              <a href="/ux-software" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-amber-400 text-3xl mb-4">🐦</div>
              <h4 className="text-lg font-bold mb-3">Соловей</h4>
              <p className="text-gray-300 text-sm mb-4">
                Платформа видеосвязи на поддомене заказчика
              </p>
              <a href="/solovey" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-3xl mb-4">🛡️</div>
              <h4 className="text-lg font-bold mb-3">Secure-T</h4>
              <p className="text-gray-300 text-sm mb-4">
                Решения информационной безопасности и защиты данных
              </p>
              <a href="/secure-t" className="text-red-400 hover:text-red-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-3xl mb-4">🔧</div>
              <h4 className="text-lg font-bold mb-3">Dr.Web</h4>
              <p className="text-gray-300 text-sm mb-4">
                Официальный партнер Dr.Web, антивирусные решения
              </p>
              <a href="/drweb" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Подробнее →
              </a>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-3xl mb-4">🏢</div>
              <h4 className="text-lg font-bold mb-3">B2B решения</h4>
              <p className="text-gray-300 text-sm mb-4">
                Корпоративные поставки и индивидуальные условия
              </p>
              <span className="text-yellow-400 text-sm font-medium">Консультации</span>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-pink-400 text-3xl mb-4">🏛️</div>
              <h4 className="text-lg font-bold mb-3">B2G решения</h4>
              <p className="text-gray-300 text-sm mb-4">
                Работа с государственными организациями по 44-ФЗ и 223-ФЗ
              </p>
              <span className="text-pink-400 text-sm font-medium">Тендеры</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему выбирают <span className="gradient-text">нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-400">Наши преимущества</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Комплексный подход</h4>
                    <p className="text-gray-300">Решаем задачи любой сложности — от простых поставок до сложных IT-проектов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Опыт работы с госсектором</h4>
                    <p className="text-gray-300">Знаем все тонкости работы по 44-ФЗ и 223-ФЗ, имеем успешный опыт участия в тендерах</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Собственные разработки</h4>
                    <p className="text-gray-300">Создаем уникальные программные решения под специфические задачи клиентов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Партнерства с ведущими брендами</h4>
                    <p className="text-gray-300">Официальные партнерские отношения с производителями оборудования и ПО</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold mb-2">Постпроектная поддержка</h4>
                    <p className="text-gray-300">Обеспечиваем техническую поддержку и сопровождение после завершения проектов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <p className="text-gray-300">Выполненных проектов</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                <p className="text-gray-300">Довольных клиентов</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <p className="text-gray-300">Лет на рынке</p>
              </div>
              
              <div className="glass-effect p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <p className="text-gray-300">Техническая поддержка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-effect p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Готовы стать нашим <span className="gradient-text">партнером</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Свяжитесь с нами для обсуждения вашего проекта или получения консультации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover-glow transition-all duration-300">
                Связаться с нами
              </button>
              <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Заказать консультацию
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
            Ваш надежный IT-партнер для решения любых технологических задач
          </p>
        </div>
      </footer>
    </>
  );
} 