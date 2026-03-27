import { useState, useCallback, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Particles } from '@/components/Particles';
import { MouseGlow } from '@/components/MouseGlow';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      document.documentElement.classList.toggle('dark', !prev);
      return !prev;
    });
  }, []);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <MouseGlow />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
