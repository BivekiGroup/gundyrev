'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import DraggableCard from './DraggableCard';

export default function InteractiveBlocks() {
  const [mounted, setMounted] = useState(false);
  const [landedCount, setLandedCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [wasRecentlyDragged, setWasRecentlyDragged] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const landedCountRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Получаем реальную высоту контейнера
    const updateContainerHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setContainerHeight(height);
      }
    };
    
    // Обновляем высоту при монтировании и изменении размера окна
    updateContainerHeight();
    window.addEventListener('resize', updateContainerHeight);
    
    return () => {
      window.removeEventListener('resize', updateContainerHeight);
    };
  }, []);

  const handleBlockLanded = useCallback(() => {
    landedCountRef.current += 1;
    setLandedCount(landedCountRef.current);
  }, []);

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback((wasDragging: boolean) => {
    // Сбрасываем состояние перетаскивания сразу
    setIsDragging(false);
    
    // Если было реальное перетаскивание, блокируем клики на короткое время
    if (wasDragging) {
      setWasRecentlyDragged(true);
      setTimeout(() => {
        setWasRecentlyDragged(false);
      }, 300); // 300мс блокировки после перетаскивания
    }
  }, []);

  if (!mounted) return null;

  const blocks = [
    {
      id: 1,
      title: "Разработка ПО",
      description: "Веб, мобильные и десктопные приложения",
      icon: "💻",
      color: "from-purple-500 to-indigo-500",
      link: "/development",
    },
    {
      id: 2,
      title: "Поставка электроники",
      description: "B2B/B2G поставки по 44-ФЗ и 223-ФЗ",
      icon: "⚡",
      color: "from-cyan-500 to-teal-500",
      link: "/electronics",
    },
    {
      id: 3,
      title: "UX Софт",
      description: "Улучшение пользовательского опыта",
      icon: "🔒",
      color: "from-blue-500 to-purple-500",
      link: "/ux-software",
    },
    {
      id: 4,
      title: "Соловей",
      description: "Платформа видеосвязи",
      icon: "🐦",
      color: "from-amber-500 to-yellow-500",
      link: "/solovey",
    },
    {
      id: 5,
      title: "Secure-T",
      description: "Информационная безопасность",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
      link: "/secure-t",
    },
    {
      id: 6,
      title: "Dr.Web",
      description: "Антивирусные решения",
      icon: "🔧",
      color: "from-green-500 to-emerald-500",
      link: "/drweb",
    },
  ];

  // Генерируем детерминированные начальные позиции для каждого блока
  const getInitialPosition = (index: number) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const cardWidth = 288; // w-72 = 18rem = 288px
    const safeZoneWidth = Math.max(600, screenWidth - cardWidth - 80);
    
    // Детерминированные позиции на основе индекса - более разбросанные
    const positions = [
      { x: 50, y: -300 },
      { x: 350, y: -650 },
      { x: 650, y: -450 },
      { x: 150, y: -800 },
      { x: 450, y: -350 },
      { x: 250, y: -550 }
    ];
    
    const basePos = positions[index % positions.length];
    
    // Адаптируем позицию под ширину экрана
    const adaptedX = Math.min(basePos.x, safeZoneWidth - 50);
    const finalX = adaptedX + (index * 123) % (safeZoneWidth - adaptedX - 50);
    
    // Добавляем дополнительную высоту для каждого блока
    const extraHeight = (index * 200) + ((index * 17) % 300);
    
    return {
      x: Math.max(20, Math.min(finalX, safeZoneWidth - 20)),
      y: basePos.y - extraHeight
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '80vh', minHeight: '700px' }}
    >




      {/* Падающие блоки */}
      {blocks.map((block, index) => {
        const initialPos = getInitialPosition(index);
        return (
          <DraggableCard
            key={block.id}
            initialX={initialPos.x}
            initialY={initialPos.y}
            containerHeight={containerHeight}
            className="w-72 draggable-card"
            onLanded={handleBlockLanded}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div 
              className={`glass-effect p-6 rounded-lg bg-gradient-to-br ${block.color} bg-opacity-20 hover-glow transition-all duration-300 border border-white/10 cursor-pointer`}
              onClick={(e) => {
                // Предотвращаем переход если сейчас идет перетаскивание или недавно было перетаскивание
                if (isDragging || wasRecentlyDragged) {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Клик заблокирован - идет или недавно было перетаскивание');
                  return;
                }
                // Переходим по ссылке только при чистом клике
                console.log('Чистый клик по блоку:', block.title, 'Переход на:', block.link);
                window.location.href = block.link;
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{block.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{block.title}</h3>
                  <p className="text-gray-300 text-sm">{block.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-400">Кликните для перехода →</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </DraggableCard>
        );
      })}

      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>



      {/* Сетка для визуального ориентира */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full floating-particle"
            style={{
              left: `${(i * 7 + 13) % 100}%`,
              top: `${(i * 11 + 23) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
} 