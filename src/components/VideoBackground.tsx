import { useRef, useEffect } from "react";

const VideoBackground = ({ visible }: { visible: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // slow motion (0.5 = half speed)
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: "blur(2px) brightness(0.35)" }}
      >
        <source src="/wedding-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsla(140,25%,10%,0.6) 0%, hsla(140,25%,10%,0.3) 40%, hsla(140,25%,10%,0.6) 100%)",
        }}
      />
    </div>
  );
};

export default VideoBackground;