"use client";

import Navigation from '../components/Navigation';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Settings, 
  Bot, 
  Wrench,
  Briefcase,
  BarChart3,
  Store
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Development() {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isDiscussModalOpen, setIsDiscussModalOpen] = useState(false);

  const [discussForm, setDiscussForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleOpenProjects = () => {
    setIsProjectsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleOpenDiscuss = () => {
    setIsDiscussModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModals = () => {
    setIsProjectsModalOpen(false);
    setIsDiscussModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDiscussChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDiscussForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDiscussSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за обращение, ${discussForm.name}! Мы свяжемся с вами для обсуждения проекта.`);
    setDiscussForm({ name: '', email: '', company: '', projectType: '', message: '' });
    handleCloseModals();
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Разработка <span className="gradient-text">ПО</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Создаем современные программные решения для автоматизации бизнес-процессов и цифровой трансформации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleOpenProjects} className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover-glow transition-all duration-300">
              Наши проекты
            </button>
            <button onClick={handleOpenDiscuss} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow hover:scale-105 transition-all duration-300">
              Обсудить проект
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наши <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный цикл разработки программного обеспечения от идеи до внедрения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-4xl mb-4 flex justify-center"><Globe className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Веб-разработка</h3>
              <p className="text-gray-300 mb-4">
                Создание современных веб-приложений и сайтов
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• React, Next.js, Vue.js</li>
                <li>• Node.js, Python, PHP</li>
                <li>• Адаптивный дизайн</li>
                <li>• SEO-оптимизация</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-indigo-400 text-4xl mb-4 flex justify-center"><Smartphone className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Мобильная разработка</h3>
              <p className="text-gray-300 mb-4">
                Нативные и кроссплатформенные мобильные приложения
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• iOS (Swift, Objective-C)</li>
                <li>• Android (Kotlin, Java)</li>
                <li>• React Native, Flutter</li>
                <li>• Публикация в App Store/Google Play</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4 flex justify-center"><Monitor className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Десктопные приложения</h3>
              <p className="text-gray-300 mb-4">
                Программы для Windows, macOS и Linux
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• .NET, WPF, WinForms</li>
                <li>• Electron, Qt</li>
                <li>• Python (Tkinter, PyQt)</li>
                <li>• Кроссплатформенность</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-green-400 text-4xl mb-4 flex justify-center"><Settings className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Backend и API</h3>
              <p className="text-gray-300 mb-4">
                Серверная логика и интеграционные решения
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• REST API, GraphQL</li>
                <li>• Микросервисная архитектура</li>
                <li>• Базы данных (SQL, NoSQL)</li>
                <li>• Облачные решения</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-yellow-400 text-4xl mb-4 flex justify-center"><Bot className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Автоматизация</h3>
              <p className="text-gray-300 mb-4">
                Системы автоматизации бизнес-процессов
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• CRM и ERP системы</li>
                <li>• Workflow automation</li>
                <li>• Интеграция с 1С</li>
                <li>• Документооборот</li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-lg hover-glow transition-all duration-300">
              <div className="text-red-400 text-4xl mb-4 flex justify-center"><Wrench className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold mb-4">Техническая поддержка</h3>
              <p className="text-gray-300 mb-4">
                Сопровождение и развитие готовых решений
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Обновления и доработки</li>
                <li>• Исправление ошибок</li>
                <li>• Оптимизация производительности</li>
                <li>• Техническая документация</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Наш <span className="gradient-text">стек технологий</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400 text-center">Frontend</h3>
              <div className="space-y-3">
                {['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <div key={tech} className="glass-effect p-3 rounded text-center hover-glow transition-all duration-300">
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-400 text-center">Backend</h3>
              <div className="space-y-3">
                {['Node.js', 'Python', 'C#/.NET', 'Java', 'Go', 'PHP'].map((tech) => (
                  <div key={tech} className="glass-effect p-3 rounded text-center hover-glow transition-all duration-300">
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400 text-center">Базы данных</h3>
              <div className="space-y-3">
                {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'ClickHouse'].map((tech) => (
                  <div key={tech} className="glass-effect p-3 rounded text-center hover-glow transition-all duration-300">
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-400 text-center">DevOps</h3>
              <div className="space-y-3">
                {['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Nginx'].map((tech) => (
                  <div key={tech} className="glass-effect p-3 rounded text-center hover-glow transition-all duration-300">
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Процесс <span className="gradient-text">разработки</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Структурированный подход к созданию качественного ПО
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-purple-500">
                <span className="text-2xl font-bold gradient-text">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Анализ требований</h3>
              <p className="text-gray-300">
                Детальное изучение задач и формирование технического задания
              </p>
            </div>

            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-indigo-500">
                <span className="text-2xl font-bold gradient-text">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Проектирование</h3>
              <p className="text-gray-300">
                Создание архитектуры, дизайна и планирование разработки
              </p>
            </div>

            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-blue-500">
                <span className="text-2xl font-bold gradient-text">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Разработка</h3>
              <p className="text-gray-300">
                Программирование с регулярными демонстрациями результатов
              </p>
            </div>

            <div className="text-center">
              <div className="glass-effect w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <span className="text-2xl font-bold gradient-text">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Тестирование и запуск</h3>
              <p className="text-gray-300">
                Комплексное тестирование, исправление ошибок и внедрение
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Примеры наших <span className="gradient-text">проектов</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-purple-400 text-3xl mb-4 flex justify-center"><Briefcase className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">CRM-система</h4>
              <p className="text-gray-300 mb-4">
                Система управления клиентами для торговой компании
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">PostgreSQL</span>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-indigo-400 text-3xl mb-4 flex justify-center"><BarChart3 className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">Система аналитики</h4>
              <p className="text-gray-300 mb-4">
                Платформа для анализа данных и создания отчетов
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Django</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">ClickHouse</span>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg hover-glow transition-all duration-300">
              <div className="text-blue-400 text-3xl mb-4 flex justify-center"><Store className="w-6 h-6" /></div>
              <h4 className="text-lg font-bold mb-3">E-commerce платформа</h4>
              <p className="text-gray-300 mb-4">
                Интернет-магазин с интеграцией платежных систем
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Stripe</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">MongoDB</span>
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
              Готовы начать <span className="gradient-text">проект</span>?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Обсудим ваши задачи и предложим оптимальное техническое решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleOpenDiscuss} className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-lg hover-glow hover:scale-105 transition-all duration-300">
                Обсудить проект
              </button>
              <button onClick={handleOpenDiscuss} className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 hover-glow hover:scale-105 transition-all duration-300">
                Получить смету
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
            Разработка программного обеспечения любой сложности
          </p>
        </div>
      </footer>

      {/* Projects Modal */}
      {isProjectsModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 max-w-3xl w-full relative border border-purple-500/30 max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 text-purple-400">Наши проекты</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-effect p-4 rounded-md border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2 text-purple-300"><Briefcase className="w-5 h-5" /> CRM-система</div>
                <p className="text-gray-300 text-sm mb-3">Система управления клиентами для торговой компании</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">React</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Node.js</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">PostgreSQL</span>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-md border border-indigo-500/20">
                <div className="flex items-center gap-2 mb-2 text-indigo-300"><BarChart3 className="w-5 h-5" /> Система аналитики</div>
                <p className="text-gray-300 text-sm mb-3">Платформа для анализа данных и отчетов</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Python</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Django</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">ClickHouse</span>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-md border border-blue-500/20 md:col-span-2">
                <div className="flex items-center gap-2 mb-2 text-blue-300"><Store className="w-5 h-5" /> E-commerce платформа</div>
                <p className="text-gray-300 text-sm mb-3">Интернет-магазин с интеграцией платежей и складского учета</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Stripe</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={handleOpenDiscuss}
                className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 hover-glow hover:scale-105 transition-all duration-300 text-sm"
              >
                Обсудить проект
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Discuss Project Modal */}
      {isDiscussModalOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-lg p-6 w-[520px] max-w-[92vw] relative border border-purple-500/30">
            <button
              onClick={handleCloseModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors duration-200 hover:rotate-90 transform"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 text-purple-400">Обсудить проект</h3>

            <form onSubmit={handleDiscussSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={discussForm.name}
                  onChange={handleDiscussChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={discussForm.email}
                  onChange={handleDiscussChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Компания</label>
                <input
                  type="text"
                  name="company"
                  value={discussForm.company}
                  onChange={handleDiscussChange}
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Тип проекта *</label>
                <select
                  name="projectType"
                  value={discussForm.projectType}
                  onChange={handleDiscussChange}
                  required
                  className="w-full px-3 py-1.5 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                >
                  <option value="">Выберите тип</option>
                  <option value="Веб-приложение">Веб-приложение</option>
                  <option value="Мобильное приложение">Мобильное приложение</option>
                  <option value="Backend/API">Backend/API</option>
                  <option value="Автоматизация">Автоматизация</option>
                  <option value="Десктопное приложение">Десктопное приложение</option>
                  <option value="Другое">Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-300 mb-1.5">Описание задачи *</label>
                <textarea
                  name="message"
                  value={discussForm.message}
                  onChange={handleDiscussChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Кратко опишите проект, цели и сроки..."
                />
              </div>

              <div className="flex space-x-4 pt-2">
                <button
                  type="button"
                  onClick={handleCloseModals}
                  className="flex-1 px-4 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors text-sm"
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
