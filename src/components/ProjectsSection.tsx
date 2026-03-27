import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projects = [
  { title: 'Project Aurora', tag: 'AI / ML', color: 'from-primary to-secondary', desc: 'An autonomous AI system that generates and optimizes code in real-time, reducing development cycles by 10x.' },
  { title: 'NeuroLink', tag: 'BCI', color: 'from-secondary to-accent', desc: 'Brain-computer interface platform enabling direct neural communication with digital systems.' },
  { title: 'Quantum Mesh', tag: 'Infrastructure', color: 'from-accent to-primary', desc: 'Decentralized quantum computing network that distributes processing across global nodes.' },
  { title: 'HoloVerse', tag: 'XR', color: 'from-primary to-accent', desc: 'Immersive mixed-reality workspace that transforms how teams collaborate across dimensions.' },
  { title: 'SynthOS', tag: 'Operating System', color: 'from-secondary to-primary', desc: 'A self-healing operating system that anticipates failures and auto-optimizes resource allocation.' },
  { title: 'CryptoVault', tag: 'Security', color: 'from-accent to-secondary', desc: 'Military-grade quantum-resistant encryption platform protecting the world\'s most sensitive data.' },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Orbitron' }}>
          Projects
        </h2>
        <p className={`text-muted-foreground text-center mb-16 max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Flagship innovations pushing the boundaries of possibility
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${p.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-primary mb-2">{p.tag}</span>
                <h3 className="font-bold text-lg" style={{ fontFamily: 'Orbitron' }}>{p.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <div className="relative glass rounded-2xl p-8 max-w-lg w-full neon-border" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <span className="text-xs uppercase tracking-widest text-primary">{projects[selected].tag}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4" style={{ fontFamily: 'Orbitron' }}>{projects[selected].title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{projects[selected].desc}</p>
            <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm uppercase tracking-wider">
              <ExternalLink size={16} /> View Project
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
