import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { MusicToggle } from './MusicToggle';

const navItems = ['Home', 'About', 'Features', 'Projects', 'Contact'];

export const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map(n => document.getElementById(n.toLowerCase()));
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)); }),
      { threshold: 0.3 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold tracking-wider gradient-text" style={{ fontFamily: 'Orbitron' }}>
          NEXUX
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm uppercase tracking-widest transition-all duration-300 hover:text-primary ${active === item ? 'text-primary neon-glow-blue' : 'text-muted-foreground'}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <MusicToggle />
          <button onClick={toggleTheme} className="p-2 rounded-full glass hover:neon-border transition-all">
            {isDark ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {navItems.map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="text-sm uppercase tracking-widest text-left py-2 hover:text-primary transition-colors">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
