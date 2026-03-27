import { useState, useRef, useEffect } from 'react';

export const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Use a royalty-free ambient tone generated via oscillator
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);

    // Create ambient drone
    const createOsc = (freq: number, type: OscillatorType, vol: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = vol;
      osc.connect(g);
      g.connect(gainNode);
      osc.start();
      return { osc, gain: g };
    };

    const oscs = [
      createOsc(60, 'sine', 0.3),
      createOsc(90, 'sine', 0.15),
      createOsc(120, 'triangle', 0.08),
      createOsc(180, 'sine', 0.05),
    ];

    audioRef.current = { ctx, gainNode, oscs } as any;

    return () => {
      oscs.forEach(o => o.osc.stop());
      ctx.close();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current as any;
    if (!audio) return;
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
    const target = playing ? 0 : 0.4;
    audio.gainNode.gain.linearRampToValueAtTime(target, audio.ctx.currentTime + 0.5);
    setPlaying(!playing);
  };

  return (
    <button onClick={toggle} className="p-2 rounded-full glass hover:neon-border transition-all flex items-center gap-1.5" title={playing ? 'Pause music' : 'Play music'}>
      <div className="flex items-end gap-0.5 h-4">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-primary transition-all"
            style={{
              height: playing ? undefined : '4px',
              animation: playing ? `equalizer-bar ${0.3 + i * 0.15}s ease-in-out infinite ${i * 0.1}s` : 'none',
            }}
          />
        ))}
      </div>
    </button>
  );
};
