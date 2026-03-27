import { useState } from 'react';
import { Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);

  const playClick = () => {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 600;
      g.gain.value = 0.08;
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start();
      osc.frequency.linearRampToValueAtTime(1200, ctx.currentTime + 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="max-w-xl mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 gradient-text transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'Orbitron' }}>
          Get in Touch
        </h2>
        <p className={`text-muted-foreground text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ready to step into the future? Let's connect.
        </p>
        <form
          onSubmit={handleSubmit}
          className={`glass rounded-2xl p-8 space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-background/50 border border-border/30 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full bg-background/50 border border-border/30 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              required
              rows={4}
              placeholder="Your Message"
              className="w-full bg-background/50 border border-border/30 rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group"
            style={{ fontFamily: 'Orbitron' }}
          >
            {sent ? '✓ Message Sent!' : <><Send size={16} className="group-hover:translate-x-1 transition-transform" /> Transmit</>}
          </button>
        </form>
      </div>
    </section>
  );
};
