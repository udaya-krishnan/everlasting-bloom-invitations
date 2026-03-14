import { useState } from "react";
import FloralOverlay from "@/components/FloralOverlay";
import VideoBackground from "@/components/VideoBackground";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ScratchCard from "@/components/ScratchCard";
import FloatingPetals from "@/components/FloatingPetals";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Opening floral curtain */}
      {!opened && <FloralOverlay onOpen={() => setOpened(true)} />}

      {/* Background video */}
      <VideoBackground visible={opened} />

      {/* Floating petals */}
      {opened && <FloatingPetals />}

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection visible={opened} />
        <CountdownTimer visible={opened} />
        <ScratchCard visible={opened} />

        {/* Footer */}
        {opened && (
          <footer className="relative z-10 text-center py-12 px-6">
            <p
              className="font-serif text-muted-foreground text-sm tracking-widest uppercase animate-fade-up"
              style={{ animationDelay: "3.2s", opacity: 0 }}
            >
              We can't wait to celebrate with you
            </p>
          </footer>
        )}
      </main>

      {/* Music toggle */}
      <MusicToggle shouldPlay={opened} />
    </div>
  );
};

export default Index;
