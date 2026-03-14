import { MapPin, Navigation } from "lucide-react";

const EventLocation = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  const venueName = "The Grand Ballroom";
  const address = "123 Royal Avenue, City Center, Riyadh, Saudi Arabia";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName + " " + address)}`;

  return (
    <section className="relative z-10 px-6 py-16">
      <div
        className="max-w-sm mx-auto text-center animate-fade-up"
        style={{ animationDelay: "3.4s", opacity: 0 }}
      >
        <h2 className="font-display text-4xl text-gold-gradient mb-8">
          Venue
        </h2>

        <div className="glass-card p-8 gold-glow">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h3 className="font-heading text-xl text-primary mb-2">
            {venueName}
          </h3>

          <p className="font-serif text-muted-foreground text-sm leading-relaxed mb-6">
            {address}
          </p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-serif text-sm text-primary tracking-wide hover:bg-primary/20 transition-colors duration-300"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
