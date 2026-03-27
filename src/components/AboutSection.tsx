import { useState } from 'react';
import { Cpu, Globe, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  { icon: Cpu, title: 'AI-Powered', desc: 'Harnessing artificial intelligence to create adaptive, intelligent systems.', detail: 'Our AI models process millions of data points in real-time, learning and evolving to deliver personalized experiences that anticipate your needs before you even know them.' },
  { icon: Globe, title: 'Globally Connected', desc: 'Bridging distances with seamless, borderless digital experiences.', detail: 'With edge computing nodes across 50+ regions, we deliver sub-millisecond latency worldwide. Our mesh network ensures zero downtime and infinite scalability.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Blazing performance that pushes the boundaries of speed.', detail: 'Built on cutting-edge WebAssembly and GPU-accelerated rendering, our platform delivers frame-perfect 120fps experiences even on complex 3D visualizations.' },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Orbitron' }}>
          About NEXUX
        </h2>
        <p className={`text-muted-foreground text-center mb-16 max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          We're building the infrastructure for tomorrow's digital reality
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`glass rounded-2xl p-8 cursor-pointer group transition-all duration-500 hover:neon-border hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <card.icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={40} />
              <h3 className="text-xl font-bold mb-3 text-foreground" style={{ fontFamily: 'Orbitron' }}>{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              <div className={`overflow-hidden transition-all duration-500 ${expanded === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-primary/80 leading-relaxed border-t border-border/30 pt-4">{card.detail}</p>
              </div>
              <p className="text-xs text-primary mt-4 uppercase tracking-wider">{expanded === i ? '↑ Collapse' : '↓ Tap to explore'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
