import { useEffect, useState } from 'react';

export const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[1] w-[400px] h-[400px] rounded-full opacity-15 transition-transform duration-100"
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)',
        left: pos.x - 200,
        top: pos.y - 200,
      }}
    />
  );
};
