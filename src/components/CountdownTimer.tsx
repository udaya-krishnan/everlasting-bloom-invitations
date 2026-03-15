import { useState, useEffect } from "react";

const CountdownTimer = ({ visible }: { visible: boolean }) => {

  // Generate random future time (1–30 days)
  const generateRandomDate = () => {
    const now = Date.now();
    const randomDays = Math.floor(Math.random() * 30) + 1;
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    return (
      now +
      randomDays * 86400000 +
      randomHours * 3600000 +
      randomMinutes * 60000 +
      randomSeconds * 1000
    );
  };

  const [targetDate] = useState(generateRandomDate());
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate - Date.now());

      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!visible) return null;

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="relative z-10 px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <h2
          className="font-display text-4xl text-gold-gradient mb-8 animate-fade-up"
          style={{ animationDelay: "2.2s", opacity: 0 }}
        >
          Counting Down
        </h2>

        <div
          className="grid grid-cols-4 gap-3 animate-fade-up"
          style={{ animationDelay: "2.5s", opacity: 0 }}
        >
          {units.map((u) => (
            <div key={u.label} className="glass-card p-4 gold-glow text-center">
              <span className="font-heading text-3xl sm:text-4xl text-primary block">
                {String(u.value).padStart(2, "0")}
              </span>

              <span className="font-serif text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1 block">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;