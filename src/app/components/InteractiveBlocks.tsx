'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Monitor, 
  Zap, 
  Shield, 
  Bird, 
  Settings 
} from 'lucide-react';
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
      icon: <Monitor className="w-10 h-10" />,
      color: "from-purple-500 to-indigo-500",
      link: "/development",
    },
    {
      id: 2,
      title: "Поставка электроники",
      description: "B2B/B2G поставки по 44-ФЗ и 223-ФЗ",
      icon: <Zap className="w-10 h-10" />,
      color: "from-cyan-500 to-teal-500",
      link: "/electronics",
    },

    {
      id: 3,
      title: "Соловей",
      description: "Платформа видеосвязи",
      icon: <Bird className="w-10 h-10" />,
      color: "from-amber-500 to-yellow-500",
      link: "/solovey",
    },
    {
      id: 4,
      title: "Secure-T",
      description: "Информационная безопасность",
      icon: <Shield className="w-10 h-10" />,
      color: "from-red-500 to-orange-500",
      link: "/secure-t",
    },
    {
      id: 5,
      title: "Dr.Web",
      description: "Антивирусные решения",
      icon: <Settings className="w-10 h-10" />,
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
      { x: 450, y: -350 }
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
              className={`glass-effect p-6 rounded-lg bg-gradient-to-br ${block.color} bg-opacity-10 hover:bg-opacity-20 hover-glow transition-all duration-300 border border-white/10 cursor-pointer hover:scale-105`}
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
                <div className="text-white">{block.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{block.title}</h3>
                  <p className="text-gray-300 text-sm">{block.description}</p>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <span className="text-xs text-gray-400">Кликните для перехода →</span>
              </div>
            </div>
          </DraggableCard>
        );
      })}

    </div>
  );
} 