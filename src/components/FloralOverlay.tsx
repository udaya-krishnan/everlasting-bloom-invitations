import { useState } from "react";
import floralOverlayImg from "@/assets/floral-overlay.jpg";

interface FloralOverlayProps {
  onOpen: () => void;
}

const FloralOverlay = ({ onOpen }: FloralOverlayProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleTap = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => onOpen(), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={handleTap}
    >
      {/* Floral pieces that scatter */}
      {Array.from({ length: 12 }).map((_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const angle = (Math.random() - 0.5) * 120;
        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 400;
        
        return (
          <div
            key={i}
            className="absolute overflow-hidden"
            style={{
              width: "33.34%",
              height: "33.34%",
              left: `${col * 25}%`,
              top: `${row * 33.34}%`,
              transition: isOpening
                ? `all ${1.2 + Math.random() * 0.6}s cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
              transform: isOpening
                ? `translate(${tx}px, ${ty}px) rotate(${angle}deg) scale(0.3)`
                : "translate(0, 0) rotate(0deg) scale(1)",
              opacity: isOpening ? 0 : 1,
            }}
          >
            <img
              src={floralOverlayImg}
              alt=""
              className="w-full h-full object-cover"
              style={{
                objectPosition: `${col * 33}% ${row * 33}%`,
                transform: "scale(3)",
                transformOrigin: `${col * 33 + 16}% ${row * 33 + 16}%`,
              }}
            />
          </div>
        );
      })}

      {/* Center text */}
      <div
        className="relative z-10 text-center px-8"
        style={{
          transition: isOpening ? "all 0.8s ease-out" : "none",
          opacity: isOpening ? 0 : 1,
          transform: isOpening ? "scale(0.8)" : "scale(1)",
        }}
      >
        <p className="font-heading text-ivory text-lg tracking-[0.3em] uppercase mb-4 animate-gentle-pulse">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-gold-gradient mb-6">
          You're Invited
        </h1>
        <p className="font-serif text-ivory/80 text-base tracking-[0.2em] uppercase animate-gentle-pulse">
          Tap anywhere to open the invitation
        </p>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/40 -z-0" />
    </div>
  );
};

export default FloralOverlay;
