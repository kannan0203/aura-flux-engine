import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); setTimeout(onComplete, 400); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
          style={{ animation: 'loader-spin 1s linear infinite' }}
        />
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-secondary"
          style={{ animation: 'loader-spin 1.5s linear infinite reverse' }}
        />
        <div
          className="absolute inset-4 rounded-full border-2 border-transparent border-t-accent"
          style={{ animation: 'loader-spin 2s linear infinite' }}
        />
      </div>
      <p className="text-primary font-bold text-2xl tracking-widest" style={{ fontFamily: 'Orbitron' }}>
        {Math.min(Math.round(progress), 100)}%
      </p>
      <p className="text-muted-foreground mt-2 text-sm tracking-[0.3em] uppercase">Initializing</p>
    </div>
  );
};
