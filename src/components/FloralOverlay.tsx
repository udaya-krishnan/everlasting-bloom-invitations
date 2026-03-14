import { useState, useMemo } from "react";
import floralOverlayImg from "@/assets/floral-overlay.jpg";

interface FloralOverlayProps {
  onOpen: () => void;
}

const FloralOverlay = ({ onOpen }: FloralOverlayProps) => {
  const [isOpening, setIsOpening] = useState(false);

  // Pre-compute random values so they don't change on re-render
  const pieces = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;
      // Gentle, natural drift directions based on position
      const centerX = (col - 1.5) * 1.2;
      const centerY = (row - 1) * 1.1;
      const tx = centerX * 120 + (Math.random() - 0.5) * 60;
      const ty = centerY * 100 + Math.random() * 80 + 40;
      const angle = centerX * 12 + (Math.random() - 0.5) * 15;
      const delay = Math.random() * 0.4;
      const duration = 2.0 + Math.random() * 0.8;
      return { row, col, tx, ty, angle, delay, duration };
    });
  }, []);

  const handleTap = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => onOpen(), 2400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={handleTap}
    >
      {/* Floral pieces that drift gently like petals */}
      {pieces.map((piece, i) => (
        <div
          key={i}
          className="absolute overflow-hidden"
          style={{
            width: "33.34%",
            height: "33.34%",
            left: `${piece.col * 25}%`,
            top: `${piece.row * 33.34}%`,
            transition: isOpening
              ? `transform ${piece.duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${piece.delay}s, opacity ${piece.duration * 0.7}s ease-in ${piece.delay + piece.duration * 0.3}s`
              : "none",
            transform: isOpening
              ? `translate(${piece.tx}px, ${piece.ty}px) rotate(${piece.angle}deg) scale(0.7)`
              : "translate(0, 0) rotate(0deg) scale(1)",
            opacity: isOpening ? 0 : 1,
          }}
        >
          <img
            src={floralOverlayImg}
            alt=""
            className="w-full h-full object-cover"
            style={{
              objectPosition: `${piece.col * 33}% ${piece.row * 33}%`,
              transform: "scale(3)",
              transformOrigin: `${piece.col * 33 + 16}% ${piece.row * 33 + 16}%`,
            }}
          />
        </div>
      ))}

      {/* Center text */}
      <div
        className="relative z-10 text-center px-8"
        style={{
          transition: isOpening
            ? "opacity 1s ease-out, transform 1s ease-out"
            : "none",
          opacity: isOpening ? 0 : 1,
          transform: isOpening ? "scale(0.95) translateY(20px)" : "scale(1) translateY(0)",
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
