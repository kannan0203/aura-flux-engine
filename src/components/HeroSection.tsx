import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const fullText = 'Welcome to the Future';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) { clearInterval(interval); setTimeout(() => setShowCursor(false), 2000); }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const playClick = () => {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 800;
      g.gain.value = 0.1;
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start();
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-primary uppercase tracking-[0.5em] text-xs md:text-sm mb-6 animate-slide-up">
          ⟐ Explore the Digital Frontier ⟐
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{ fontFamily: 'Orbitron' }}
        >
          <span className="gradient-text">{text}</span>
          {showCursor && (
            <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle" style={{ animation: 'typing-cursor 0.8s step-end infinite' }} />
          )}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.3s', animation: 'slide-up 0.8s ease-out 0.5s both' }}>
          Step into a world where technology meets imagination. Discover innovations that redefine what's possible.
        </p>
        <button
          onClick={playClick}
          className="relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm overflow-hidden group animate-pulse-glow"
          style={{ fontFamily: 'Orbitron', animation: 'slide-up 0.8s ease-out 0.8s both, pulse-glow 2s ease-in-out infinite' }}
        >
          <span className="relative z-10">Enter the NEXUX</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
        <div className="mt-20 animate-bounce">
          <ChevronDown className="mx-auto text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  );
};
