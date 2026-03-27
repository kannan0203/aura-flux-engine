import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, AlertCircle } from 'lucide-react';

export const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for background music from provided remote URL
    const remoteUrl = 'https://cdn.pixabay.com/download/audio/2026/03/12/audio_bea8e8877a.mp3?filename=alexgrohl-energetic-action-sport-500409.mp3';
    const fallbackUrl = '/bgm.mp3';
    const audio = new Audio(remoteUrl);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';

    audioRef.current = audio;

    const onError = () => {
      if (audio.src !== fallbackUrl) {
        console.warn('Remote BGM failed, trying fallback file /bgm.mp3.');
        audio.src = fallbackUrl;
        audio.load();
        audio.play().catch(() => setAudioError(true));
      } else {
        console.warn('Fallback BGM file missing or failed to load.');
        setAudioError(true);
      }
    };

    const onCanPlayThrough = () => setAudioError(false);

    audio.addEventListener('error', onError);
    audio.addEventListener('canplaythrough', onCanPlayThrough);

    return () => {
      audio.removeEventListener('error', onError);
      audio.removeEventListener('canplaythrough', onCanPlayThrough);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        // Resume audio context if suspended (required by some browsers)
        if (audio.context && audio.context.state === 'suspended') {
          await audio.context.resume();
        }
        await audio.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setAudioError(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !muted;
    setMuted(!muted);
  };

  if (audioError) {
    return (
      <button
        className="p-2 rounded-full glass hover:neon-border transition-all text-yellow-400"
        title="BGM file not found - add bgm.mp3 to public folder"
      >
        <AlertCircle size={18} />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className="p-2 rounded-full glass hover:neon-border transition-all"
        title={playing ? 'Pause Background Music' : 'Play Background Music'}
      >
        {playing ? (
          <Volume2 size={18} className="text-primary" />
        ) : (
          <VolumeX size={18} className="text-muted-foreground" />
        )}
      </button>
      {playing && (
        <button
          onClick={toggleMute}
          className="p-2 rounded-full glass hover:neon-border transition-all"
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <VolumeX size={16} className="text-red-400" />
          ) : (
            <Volume2 size={16} className="text-green-400" />
          )}
        </button>
      )}
    </div>
  );
};
