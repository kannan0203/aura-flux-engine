import { Shield, Layers, BarChart3, Code2, Sparkles, Lock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Shield, title: 'Quantum Security', desc: 'Post-quantum encryption protocols protecting every byte' },
  { icon: Layers, title: 'Neural Architecture', desc: 'Self-evolving system architecture that adapts in real-time' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'AI-driven insights that forecast trends before they emerge' },
  { icon: Code2, title: 'Zero-Code Builder', desc: 'Build complex applications with natural language commands' },
  { icon: Sparkles, title: 'Holographic UI', desc: 'Next-gen interface design with spatial computing support' },
  { icon: Lock, title: 'Biometric Auth', desc: 'Multi-factor authentication with neural pattern recognition' },
];

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Orbitron' }}>
          Features
        </h2>
        <p className={`text-muted-foreground text-center mb-16 max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Cutting-edge capabilities that define the next era of technology
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 group cursor-default transition-all duration-500 hover:neon-border hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <f.icon className="text-primary group-hover:text-accent transition-colors duration-300" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Orbitron' }}>{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
