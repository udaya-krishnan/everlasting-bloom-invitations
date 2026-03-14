import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = ({ shouldPlay }: { shouldPlay: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    // Replace with your own music file URL
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.3;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Start music only when shouldPlay transitions to true (after tap)
  useEffect(() => {
    if (shouldPlay && !hasStarted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  }, [shouldPlay, hasStarted]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!shouldPlay) return null;

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 glass-card p-3 gold-glow hover:scale-110 transition-transform duration-300"
      style={{ borderRadius: "50%" }}
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Volume2 className="w-5 h-5 text-primary" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default MusicToggle;
