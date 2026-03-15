import dividerImg from "@/assets/floral-divider.png";

interface HeroSectionProps {
  visible?: boolean;
}

const HeroSection = ({ visible = true }: HeroSectionProps) => {
  if (!visible) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 z-10">
      <div className="text-center max-w-lg mx-auto">

        {/* Bismillah */}
        <p
          className="font-serif text-gold-light text-sm tracking-[0.3em] uppercase mb-8 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>

        {/* Bride name */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl text-gold-gradient animate-soft-glow animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Fatima
        </h1>

        {/* Ampersand */}
        <p
          className="font-heading text-bougainvillea-light text-3xl my-4 italic animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          &
        </p>

        {/* Groom name */}
        <h1
          className="font-display text-6xl sm:text-7xl md:text-8xl text-gold-gradient animate-soft-glow animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          Ahmed
        </h1>

        {/* Floral Divider */}
        <div
          className="my-8 flex justify-center animate-fade-up"
          style={{ animationDelay: "1.5s" }}
        >
          <img
            src={dividerImg}
            alt="floral divider"
            className="w-56 sm:w-72 opacity-80"
          />
        </div>

        {/* Invitation text */}
        <p
          className="font-serif text-ivory/80 text-lg sm:text-xl leading-relaxed tracking-wide animate-fade-up"
          style={{ animationDelay: "1.8s" }}
        >
          Together with their families
          <br />
          invite you to celebrate their wedding
        </p>

      </div>
    </section>
  );
};

export default HeroSection;