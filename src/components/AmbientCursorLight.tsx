import React, { useEffect, useState } from 'react';

export const AmbientCursorLight: React.FC = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700"
      style={{ opacity: isVisible ? 1 : 0.5 }}
      aria-hidden="true"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] opacity-25 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(66,133,244,0.6) 0%, rgba(66,133,244,0.2) 40%, rgba(255,255,255,0) 70%)',
          left: `${pos.x - 300}px`,
          top: `${pos.y - 300}px`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 transition-transform duration-150 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(251,188,5,0.5) 0%, rgba(234,67,53,0.2) 45%, rgba(255,255,255,0) 70%)',
          left: `${pos.x - 180}px`,
          top: `${pos.y - 180}px`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-[100px] opacity-15 transition-transform duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(52,168,83,0.5) 0%, rgba(66,133,244,0.2) 50%, rgba(255,255,255,0) 70%)',
          left: `${pos.x - 120}px`,
          top: `${pos.y - 120}px`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
};
