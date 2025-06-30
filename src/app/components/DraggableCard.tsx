'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  containerHeight?: number;
  onLanded?: () => void;
  onDragStart?: () => void;
  onDragEnd?: (wasDragging: boolean) => void;
}

export default function DraggableCard({ 
  children, 
  className = '', 
  initialX = 0, 
  initialY = 0,
  containerHeight,
  onLanded,
  onDragStart,
  onDragEnd
}: DraggableCardProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [isFalling, setIsFalling] = useState(true);
  const [isDropFalling, setIsDropFalling] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [fallDirection, setFallDirection] = useState({ x: 0, rotation: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const lastPosition = useRef({ x: initialX, y: initialY });
  const dragStartTime = useRef<number>(0);
  
  // Динамическая высота приземления - оставляем место для полного блока
  const getGroundY = () => {
    const cardHeight = 160; // Примерная высота карточки
    const bottomPadding = 40; // Дополнительный отступ
    const totalOffset = cardHeight + bottomPadding; // ~200px
    
    if (containerHeight) {
      return containerHeight - totalOffset;
    }
    if (typeof window !== 'undefined') {
      const viewportHeight = window.innerHeight * 0.8; // 80vh
      return Math.max(viewportHeight, 700) - totalOffset;
    }
    return 500; // Fallback для SSR
  };
  
  const GROUND_Y = getGroundY();

  // Инициализация случайного направления падения (только для анимации, не для движения)
  useEffect(() => {
    const randomRotation = (Math.random() - 0.5) * 20; // Только небольшая ротация
    setFallDirection({ x: 0, rotation: randomRotation }); // x = 0 для прямого падения
  }, []);

  // Анимация первоначального падения
  useEffect(() => {
    if (!isFalling) return;

    const fallDuration = 2000 + Math.random() * 1000; // 2-3 секунды
    const startY = initialY;
    const startX = initialX;
    const endX = initialX; // Падаем строго вниз, без отклонений
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / fallDuration, 1);
      
      // Easing function для более реалистичного падения
      const easeOutBounce = (t: number) => {
        if (t < 1 / 2.75) {
          return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
          return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        } else if (t < 2.5 / 2.75) {
          return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        } else {
          return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
      };

      const easedProgress = easeOutBounce(progress);
      const currentY = startY + (GROUND_Y - startY) * easedProgress;
      const currentX = startX + (endX - startX) * progress; // Теперь это просто startX

      setPosition({ x: currentX, y: currentY });
      lastPosition.current = { x: currentX, y: currentY };

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsFalling(false);
        if (onLanded) {
          setTimeout(() => onLanded(), 100);
        }
      }
    };

    // Начинаем падение сразу без задержки
    requestAnimationFrame(animate);
  }, [initialY, initialX, fallDirection, onLanded, isFalling]);

  // Анимация падения после отпускания
  useEffect(() => {
    if (!isDropFalling) return;

    const fallDuration = 800;
    const startX = position.x;
    const startY = position.y;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / fallDuration, 1);
      
      // Easing для падения с отскоком
      const easeOutBounce = (t: number) => {
        if (t < 1 / 2.75) {
          return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
          return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        } else if (t < 2.5 / 2.75) {
          return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        } else {
          return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
      };

      const easedProgress = easeOutBounce(progress);
      const currentY = startY + (GROUND_Y - startY) * easedProgress;

      setPosition({ x: startX, y: currentY });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsDropFalling(false);
      }
    };

    requestAnimationFrame(animate);
  }, [isDropFalling, position.x, position.y]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isFalling || isDropFalling || !cardRef.current) return;
    
    // Рассчитываем смещение относительно текущей позиции блока
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastPosition.current = position;
    dragStartTime.current = Date.now();
    
    // Уведомляем родительский компонент о начале перетаскивания
    if (onDragStart) {
      onDragStart();
    }
    
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || isFalling || isDropFalling) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    // Рассчитываем скорость для инерции
    setVelocity({
      x: newX - lastPosition.current.x,
      y: newY - lastPosition.current.y
    });
    
    setPosition({ x: newX, y: newY });
    lastPosition.current = { x: newX, y: newY };
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const dragDuration = Date.now() - dragStartTime.current;
      const dragDistance = Math.sqrt(
        Math.pow(position.x - lastPosition.current.x, 2) + 
        Math.pow(position.y - lastPosition.current.y, 2)
      );
      const wasDragging = dragDuration > 150 && dragDistance > 10; // Считаем перетаскиванием если больше 150ms И больше 10px движения
      
      setIsDragging(false);
      
      // Уведомляем родительский компонент об окончании перетаскивания
      if (onDragEnd) {
        onDragEnd(wasDragging); // Передаем информацию о том, было ли это реальное перетаскивание
      }
      
      if (wasDragging) {
        // Запускаем падение вниз сразу после перетаскивания
        setIsDropFalling(true);
      }
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isFalling || isDropFalling || !cardRef.current) return;
    
    const touch = e.touches[0];
    // Рассчитываем смещение относительно текущей позиции блока
    setDragOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastPosition.current = position;
    dragStartTime.current = Date.now();
    
    // Уведомляем родительский компонент о начале перетаскивания
    if (onDragStart) {
      onDragStart();
    }
    
    e.preventDefault();
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || isFalling || isDropFalling) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - dragOffset.x;
    const newY = touch.clientY - dragOffset.y;
    
    // Рассчитываем скорость для инерции
    setVelocity({
      x: newX - lastPosition.current.x,
      y: newY - lastPosition.current.y
    });
    
    setPosition({ x: newX, y: newY });
    lastPosition.current = { x: newX, y: newY };
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const dragDuration = Date.now() - dragStartTime.current;
      const dragDistance = Math.sqrt(
        Math.pow(position.x - lastPosition.current.x, 2) + 
        Math.pow(position.y - lastPosition.current.y, 2)
      );
      const wasDragging = dragDuration > 150 && dragDistance > 10; // Считаем перетаскиванием если больше 150ms И больше 10px движения
      
      setIsDragging(false);
      
      // Уведомляем родительский компонент об окончании перетаскивания
      if (onDragEnd) {
        onDragEnd(wasDragging); // Передаем информацию о том, было ли это реальное перетаскивание
      }
      
      if (wasDragging) {
        // Запускаем падение вниз сразу после перетаскивания
        setIsDropFalling(true);
      }
    }
  };

  // Event listeners
  useEffect(() => {
    if (isDragging && !isFalling && !isDropFalling) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      document.body.style.touchAction = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    };
  }, [isDragging, isFalling, isDropFalling, dragOffset, velocity]);

  const getTransform = () => {
    const velocityRotation = isDragging ? Math.max(-15, Math.min(15, velocity.x * 0.5)) : 0;
    const hoverEffect = isDragging ? Math.sin(Date.now() * 0.005) * 2 : 0;
    
    if (isFalling) {
      return `rotate(${fallDirection.rotation}deg)`; // Только небольшая начальная ротация, без колебаний
    } else if (isDragging) {
      return `rotate(${3 + velocityRotation + hoverEffect}deg) scale(1.08) translateZ(0)`;
    } else if (isDropFalling) {
      return 'rotate(0deg) scale(0.95)'; // Прямое падение без поворота
    }
    return 'rotate(0deg) scale(1) translateZ(0)';
  };

  return (
    <div
      ref={cardRef}
      className={`${className} ${isDragging ? 'z-50' : 'z-10'} ${
        isDragging ? 'shadow-2xl' : 'transition-all duration-300'
      } ${
        isFalling ? 'animate-pulse' : 
        isDropFalling ? 'opacity-90' : 
        'hover:scale-105 hover:shadow-lg'
      }`}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isFalling || isDropFalling ? 'default' : (isDragging ? 'grabbing' : 'grab'),
        transform: getTransform(),
        touchAction: 'none',
        pointerEvents: isFalling ? 'none' : 'auto',
        willChange: isDragging ? 'transform' : 'auto',
        filter: isDragging ? 'brightness(1.15) saturate(1.3) drop-shadow(0 10px 20px rgba(0,0,0,0.3))' : 'none',
        transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
} 