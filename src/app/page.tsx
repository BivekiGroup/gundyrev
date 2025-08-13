'use client';

import { useState, useEffect } from 'react';
import { 
  Rocket, 
  Lightbulb, 
  BarChart3, 
  Palette, 
  Settings, 
  Database, 
  Zap,
  Building,
  GraduationCap,
  Hospital,
  Landmark,
  DollarSign,
  Factory,
  Cpu,
  Star,
  ClipboardList,
  Trophy,
  Shield,
  Briefcase,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';
import Navigation from './components/Navigation';
import InteractiveBlocks from './components/InteractiveBlocks';
import ContactModal from './components/ContactModal';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [liveCounters, setLiveCounters] = useState({
    projects: 0,
    clients: 0,
    lines: 0,
    uptime: 0
  });
  const [currentCodeExample, setCurrentCodeExample] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Инициализация
  useEffect(() => {
    setMounted(true);
  }, []);

  // Анимация счетчиков
  useEffect(() => {
    if (!mounted) return;

    const targets = { projects: 127, clients: 45, lines: 50000, uptime: 99.9 };
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
        lines: Math.floor(targets.lines * progress),
        uptime: Math.floor(targets.uptime * progress * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [mounted]);

  const codeExamples = [
    {
      title: "React + TypeScript",
      code: `const App: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <Dashboard data={data} />;
};`
    },
    {
      title: "Node.js API",
      code: `app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
});`
    },
    {
      title: "Python ML",
      code: `import tensorflow as tf

model = tf.keras.Sequential([
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')`
    }
  ];

  // Переключение примеров кода
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentCodeExample(prev => (prev + 1) % codeExamples.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted, codeExamples.length]);



  // Отслеживание мыши
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  const technologies = [
    'React', 'Node.js', 'Python', 'TypeScript', 'Docker', 'AWS', 'PostgreSQL', 
    'MongoDB', 'Redis', 'Kubernetes', 'GraphQL', 'Next.js', 'Vue.js', 'Django',
    'Express', 'FastAPI', 'Nginx', 'Linux', 'Git', 'Jenkins', 'Terraform'
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Загрузка...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section с заголовком и интерактивными элементами */}
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Заголовок и описание */}
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
              <span className="gradient-text">GUNDYREV</span>
            </h1>
            {/* Голографические линии */}
            <div className="absolute -inset-4 opacity-20">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border border-green-400 rounded-lg"
                  style={{
                    animation: `hologram ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Комплексные IT-решения для бизнеса. От разработки до поставки оборудования.
          </p>

          {/* Живые счетчики под описанием */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">{liveCounters.projects}+</div>
              <div className="text-gray-400 text-sm">Проектов</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-1 rounded-full transition-all duration-2000"
                  style={{ width: `${(liveCounters.projects / 127) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">{liveCounters.clients}+</div>
              <div className="text-gray-400 text-sm">Клиентов</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-1 rounded-full transition-all duration-2000"
                  style={{ width: `${(liveCounters.clients / 45) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">{liveCounters.lines.toLocaleString()}+</div>
              <div className="text-gray-400 text-sm">Строк кода</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-teal-400 h-1 rounded-full transition-all duration-2000"
                  style={{ width: `${(liveCounters.lines / 50000) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">{liveCounters.uptime}%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
              <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-orange-400 h-1 rounded-full transition-all duration-2000"
                  style={{ width: `${(liveCounters.uptime / 99.9) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Призывы к действию */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Rocket className="w-5 h-5" />
              Обсудить проект
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Lightbulb className="w-5 h-5" />
              Получить консультацию
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <BarChart3 className="w-5 h-5" />
              Заказать презентацию
            </button>
          </div>

          {/* Интерактивные частицы с реакцией на мышь */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => {
              const baseX = (i * 3.33) % 100;
              const baseY = (i * 7.77) % 100;
              const mouseInfluence = 50;
              const dx = (mousePosition.x / window.innerWidth * 100) - baseX;
              const dy = (mousePosition.y / window.innerHeight * 100) - baseY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const influence = Math.max(0, mouseInfluence - distance) / mouseInfluence;
              
              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-green-400 rounded-full transition-all duration-300"
                  style={{
                    left: `${baseX + dx * influence * 0.3}%`,
                    top: `${baseY + dy * influence * 0.3}%`,
                    opacity: 0.3 + influence * 0.7,
                    transform: `scale(${1 + influence * 2})`,
                    boxShadow: `0 0 ${2 + influence * 8}px rgba(16, 185, 129, ${0.5 + influence * 0.5})`,
                    animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Современная секция технологий */}
      <section className="section-padding bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Наши технологии</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Мы используем передовые технологии для создания инновационных решений
            </p>
          </div>

          {/* Категории технологий */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                category: 'Frontend',
                icon: <Palette className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500',
                techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
                description: 'Современные пользовательские интерфейсы'
              },
              {
                category: 'Backend',
                icon: <Settings className="w-8 h-8" />,
                color: 'from-blue-500 to-cyan-500',
                techs: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
                description: 'Мощные серверные решения'
              },
              {
                category: 'Database',
                icon: <Database className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-500',
                techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
                description: 'Надежное хранение данных'
              },
              {
                category: 'DevOps',
                icon: <Zap className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500',
                techs: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
                description: 'Автоматизация и развертывание'
              }
            ].map((category, categoryIndex) => (
              <div
                key={category.category}
                className="glass-effect p-6 rounded-xl hover-glow transition-all duration-500 group hover:scale-105"
                style={{
                  animationDelay: `${categoryIndex * 0.2}s`
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center">{category.category}</h3>
                <p className="text-gray-400 text-sm text-center mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:text-white"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      • {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Интерактивная диаграмма экспертизы */}
          <div className="glass-effect p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Уровень экспертизы</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: 'React Development', level: 95, color: 'from-blue-400 to-blue-600' },
                { skill: 'Node.js Backend', level: 90, color: 'from-green-400 to-green-600' },
                { skill: 'Cloud Infrastructure', level: 88, color: 'from-purple-400 to-purple-600' },
                { skill: 'Database Design', level: 92, color: 'from-cyan-400 to-cyan-600' },
                { skill: 'DevOps & CI/CD', level: 85, color: 'from-orange-400 to-orange-600' },
                { skill: 'Mobile Development', level: 80, color: 'from-pink-400 to-pink-600' }
              ].map((skill, index) => (
                <div key={skill.skill} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.skill}</span>
                    <span className="text-green-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative`}
                      style={{ 
                        width: mounted ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Облако технологий */}
          <div className="relative h-80 glass-effect rounded-xl p-8 overflow-hidden">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Облако технологий</h3>
            
            <div className="relative h-full">
              {technologies.map((tech, index) => {
                const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
                const size = sizes[index % sizes.length];
                const colors = [
                  'text-green-400', 'text-blue-400', 'text-purple-400', 
                  'text-cyan-400', 'text-pink-400', 'text-yellow-400'
                ];
                const color = colors[index % colors.length];
                
                // Детерминированные позиции для облака
                const x = (index * 17 + 13) % 85 + 5;
                const y = (index * 23 + 29) % 70 + 10;
                
                return (
                  <div
                    key={tech}
                    className={`absolute ${size} ${color} font-mono cursor-pointer hover:scale-125 transition-all duration-300 hover:text-white`}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animation: `float ${3 + (index % 4)}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px currentColor';
                      e.currentTarget.style.zIndex = '100';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = 'none';
                      e.currentTarget.style.zIndex = '1';
                    }}
                  >
                    {tech}
                  </div>
                );
              })}
              
              {/* Соединительные линии между технологиями */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                {technologies.slice(0, 10).map((_, i) => {
                  const x1 = ((i * 17 + 13) % 85 + 5);
                  const y1 = ((i * 23 + 29) % 70 + 10);
                  const x2 = (((i + 1) * 17 + 13) % 85 + 5);
                  const y2 = (((i + 1) * 23 + 29) % 70 + 10);
                  
                  return (
                    <line
                      key={i}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="rgba(0, 255, 136, 0.3)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Статистика технологий */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center glass-effect p-6 rounded-xl hover-glow transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">21+</div>
              <div className="text-gray-400">Технологий в стеке</div>
            </div>
            
            <div className="text-center glass-effect p-6 rounded-xl hover-glow transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-400">Лет опыта</div>
            </div>
            
            <div className="text-center glass-effect p-6 rounded-xl hover-glow transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400">Современные решения</div>
            </div>
          </div>
        </div>
      </section>

      {/* Интерактивный код-редактор */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Живой код</h2>
            <p className="text-xl text-gray-300">Примеры нашего кода в реальном времени</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{codeExamples[currentCodeExample].title}</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>{codeExamples[currentCodeExample].code}</code>
                </pre>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {codeExamples.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCodeExample ? 'bg-green-400' : 'bg-gray-600'
                    }`}
                    onClick={() => setCurrentCodeExample(index)}
              />
            ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <h4 className="text-lg font-bold mb-3 text-green-400 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Современные технологии
                </h4>
                <p className="text-gray-300">
                  Используем последние версии фреймворков и библиотек для создания производительных приложений
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <h4 className="text-lg font-bold mb-3 text-blue-400 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Чистый код
                </h4>
                <p className="text-gray-300">
                  Следуем принципам SOLID, используем TypeScript и покрываем код тестами
                </p>
              </div>
              
              <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
                <h4 className="text-lg font-bold mb-3 text-purple-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Высокая производительность
                </h4>
                <p className="text-gray-300">
                  Оптимизируем каждую строчку кода для максимальной скорости работы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">О нас</h2>
              <p className="text-gray-300 text-lg mb-6">
                GUNDYREV — это команда профессионалов, специализирующихся на создании 
                современных IT-решений и поставке высококачественного оборудования.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Мы работаем с государственными и коммерческими организациями, 
                предоставляя полный спектр услуг от разработки программного обеспечения 
                до комплексных поставок электроники по 44-ФЗ и 223-ФЗ.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-gray-400">лет опыта</div>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-gray-400">проектов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Наши принципы</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Качество превыше всего
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Соблюдение сроков
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Прозрачность процессов
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Наши клиенты</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Нам доверяют ведущие организации и компании России
            </p>
          </div>

          {/* Client Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="glass-effect p-6 rounded-xl text-center hover-glow transition-all duration-300 hover:scale-105">
              <div className="text-green-400 mb-3 flex justify-center">
                <Landmark className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-400">Госорганы</div>
            </div>
            
            <div className="glass-effect p-6 rounded-xl text-center hover-glow transition-all duration-300 hover:scale-105">
              <div className="text-blue-400 mb-3 flex justify-center">
                <Building className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">30+</div>
              <div className="text-gray-400">Коммерческие организации</div>
            </div>
            
            <div className="glass-effect p-6 rounded-xl text-center hover-glow transition-all duration-300 hover:scale-105">
              <div className="text-purple-400 mb-3 flex justify-center">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">8+</div>
              <div className="text-gray-400">Образовательные учреждения</div>
            </div>
            
            <div className="glass-effect p-6 rounded-xl text-center hover-glow transition-all duration-300 hover:scale-105">
              <div className="text-red-400 mb-3 flex justify-center">
                <Hospital className="w-10 h-10" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">12+</div>
              <div className="text-gray-400">Медицинские организации</div>
            </div>
          </div>

          {/* Client Types Showcase */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                category: 'Государственные структуры',
                icon: <Landmark className="w-8 h-8" />,
                description: 'Министерства, ведомства, муниципальные образования',
                examples: ['Администрации регионов', 'Министерства', 'Муниципальные учреждения'],
                color: 'from-blue-500 to-indigo-600',
                projects: '25+ проектов'
              },
              {
                category: 'Финансовые организации',
                icon: <DollarSign className="w-8 h-8" />,
                description: 'Банки, страховые компании, инвестиционные фонды',
                examples: ['Региональные банки', 'Страховые компании', 'Микрофинансовые организации'],
                color: 'from-green-500 to-emerald-600',
                projects: '18+ проектов'
              },
              {
                category: 'Производственные предприятия',
                icon: <Factory className="w-8 h-8" />,
                description: 'Промышленные компании и производители',
                examples: ['Машиностроительные заводы', 'Пищевые производства', 'Текстильные фабрики'],
                color: 'from-orange-500 to-red-600',
                projects: '22+ проектов'
              },
              {
                category: 'IT и Телеком',
                icon: <Cpu className="w-8 h-8" />,
                description: 'Технологические компании и операторы связи',
                examples: ['IT-интеграторы', 'Провайдеры связи', 'Разработчики ПО'],
                color: 'from-purple-500 to-pink-600',
                projects: '15+ проектов'
              },
              {
                category: 'Образование и наука',
                icon: <GraduationCap className="w-8 h-8" />,
                description: 'Университеты, школы, научные институты',
                examples: ['Высшие учебные заведения', 'Школы и лицеи', 'НИИ и лаборатории'],
                color: 'from-cyan-500 to-blue-600',
                projects: '12+ проектов'
              },
              {
                category: 'Медицина и здравоохранение',
                icon: <Hospital className="w-8 h-8" />,
                description: 'Больницы, клиники, медицинские центры',
                examples: ['Региональные больницы', 'Частные клиники', 'Диагностические центры'],
                color: 'from-teal-500 to-green-600',
                projects: '14+ проектов'
              }
            ].map((clientType, index) => (
              <div
                key={clientType.category}
                className="glass-effect p-6 rounded-xl hover-glow transition-all duration-500 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${clientType.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {clientType.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{clientType.category}</h3>
                <p className="text-gray-400 text-sm mb-4">{clientType.description}</p>
                
                <div className="space-y-2 mb-4">
                  {clientType.examples.map((example) => (
                    <div
                      key={example}
                      className="text-sm text-gray-300 flex items-center"
                    >
                      <span className="text-green-400 mr-2">•</span>
                      {example}
                    </div>
                  ))}
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${clientType.color} text-white`}>
                  {clientType.projects}
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Отзывы клиентов</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "Команда GUNDYREV профессионально подошла к решению наших задач по автоматизации документооборота. Проект выполнен качественно и в срок.",
                  author: "Александр Петров",
                  position: "Начальник IT-отдела",
                  company: "Администрация г. Вологда",
                  rating: 5
                },
                {
                  text: "Отличная работа по поставке серверного оборудования. Все требования 44-ФЗ соблюдены, документооборот организован четко.",
                  author: "Мария Сидорова",
                  position: "Заместитель директора",
                  company: "ГБУЗ ВО \"Областная больница\"",
                  rating: 5
                },
                {
                  text: "Разработали для нас комплексную систему управления производством. Результат превзошел ожидания, ROI достигнут за 8 месяцев.",
                  author: "Дмитрий Козлов",
                  position: "Технический директор",
                  company: "ООО \"ВологдаМаш\"",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl hover-glow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-green-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us for Clients */}
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Почему нас выбирают</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <ClipboardList className="w-8 h-8" />,
                  title: 'Работа по 44-ФЗ и 223-ФЗ',
                  description: 'Полное соблюдение требований государственных закупок'
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: 'Высокое качество',
                  description: '98% проектов сдаются с первого раза без доработок'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Быстрая реализация',
                  description: 'Средний срок проекта на 30% меньше рыночного'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Гарантии и поддержка',
                  description: 'Расширенная гарантия и техподдержка 24/7'
                }
              ].map((advantage, index) => (
                <div
                  key={index}
                  className="text-center p-4 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  <div className="text-green-400 mb-3 flex justify-center">{advantage.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-gray-400 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA for Potential Clients */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">Хотите стать нашим клиентом?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к числу довольных клиентов GUNDYREV. Мы готовы обсудить ваш проект и предложить оптимальное решение.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <Briefcase className="w-5 h-5" />
                Стать клиентом
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <BarChart3 className="w-5 h-5" />
                Посмотреть портфолио
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Government Procurement Section */}
      <section className="section-padding bg-gradient-to-b from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Работаем с госзакупками</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Профессиональное участие в государственных и корпоративных закупках. 
              Соответствуем всем требованиям 44-ФЗ и 223-ФЗ.
            </p>
            
            {/* Яркие бейджи для снабженцев */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="glass-effect px-6 py-3 rounded-full border-2 border-green-500 bg-green-500/20 hover-glow transition-all duration-300">
                <span className="text-green-400 font-bold text-lg">44-ФЗ</span>
                <span className="text-white ml-2">Госзакупки</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full border-2 border-blue-500 bg-blue-500/20 hover-glow transition-all duration-300">
                <span className="text-blue-400 font-bold text-lg">223-ФЗ</span>
                <span className="text-white ml-2">Корпоративные закупки</span>
              </div>
              <div className="glass-effect px-6 py-3 rounded-full border-2 border-purple-500 bg-purple-500/20 hover-glow transition-all duration-300">
                <span className="text-purple-400 font-bold text-lg">Реестр ОПО</span>
                <span className="text-white ml-2">Отечественное ПО</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'IT-решения',
                description: 'Разработка и поставка программного обеспечения',
                features: ['SECURE-T', 'Соловей', 'Веб-приложения'],
                icon: <Cpu className="w-8 h-8" />,
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Оборудование',
                description: 'Поставка компьютерной техники и электроники',
                features: ['Серверы', 'Компьютеры', 'Сетевое оборудование'],
                icon: <Zap className="w-8 h-8" />,
                color: 'from-cyan-500 to-teal-600'
              },
              {
                title: 'Антивирусы',
                description: 'Лицензии Dr.Web для организаций',
                features: ['Enterprise Suite', 'Security Space', 'Mobile Security'],
                icon: <Shield className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Консультации',
                description: 'Техническая поддержка и сопровождение',
                features: ['Внедрение', 'Обучение', 'Поддержка 24/7'],
                icon: <Settings className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-600'
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="glass-effect p-6 rounded-xl hover-glow transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-sm text-gray-300 flex items-center"
                    >
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA для снабженцев */}
          <div className="glass-effect p-8 rounded-xl border-2 border-green-500/50">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Для снабженцев и закупщиков</span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Получите полный пакет документов для участия в тендере, включая сертификаты, 
                лицензии и техническую документацию. Поможем с подготовкой заявки.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-green-400 mb-3 flex justify-center">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Полный пакет документов</h4>
                  <p className="text-gray-400 text-sm">Сертификаты, лицензии, ТТХ</p>
                </div>
                
                <div className="text-center">
                  <div className="text-blue-400 mb-3 flex justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Консультации</h4>
                  <p className="text-gray-400 text-sm">Помощь в подготовке заявки</p>
                </div>
                
                <div className="text-center">
                  <div className="text-purple-400 mb-3 flex justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">Быстрая реакция</h4>
                  <p className="text-gray-400 text-sm">Ответ в течение 2 часов</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <ClipboardList className="w-5 h-5" />
                  Получить документы
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Консультация по тендеру
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="section-padding bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Наши направления</h2>
          <p className="text-xl text-gray-300 mb-8">
            Перетаскивайте блоки и изучайте наши услуги интерактивно
          </p>
        </div>
        
        {/* Interactive Blocks */}
        <InteractiveBlocks />
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300 mb-12">
            Готовы обсудить ваш проект? Мы всегда открыты для новых возможностей.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 mb-4 flex justify-center">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-300">info@gundyrev.ru</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 mb-4 flex justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Телефон</h3>
              <p className="text-gray-300">+7 (XXX) XXX-XX-XX</p>
            </div>
            
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 mb-4 flex justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Telegram</h3>
              <p className="text-gray-300">@gundyrev</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 GUNDYREV. Все права защищены.
          </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultType="general"
        title="Обсудить проект"
      />
    </div>
  );
}
