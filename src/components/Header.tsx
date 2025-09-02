import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';

type TimeElapsed = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
};

const msPerDay = 1000 * 60 * 60 * 24;

const calculateElapsed = (start: Date, now: Date): TimeElapsed => {
  // Calculate calendar month difference first
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());

  // Build the candidate date by adding 'months' to start
  const candidate = new Date(start.getTime());
  candidate.setMonth(start.getMonth() + months);

  // If candidate is in the future, step back one month
  if (candidate.getTime() > now.getTime()) {
    months -= 1;
    candidate.setMonth(start.getMonth() + months);
  }

  const diffMs = now.getTime() - candidate.getTime();
  const days = Math.floor(diffMs / msPerDay);
  const hours = Math.floor((diffMs % msPerDay) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return { months, days, hours, minutes };
};

const FloatingHeart: React.FC<{ delay: number }> = ({ delay }) => {
  const [position, setPosition] = useState({ left: Math.random() * 100 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({ left: Math.random() * 100 });
    }, 8000 + delay * 1000);
    
    return () => clearInterval(interval);
  }, [delay]);
  
  return (
    <div 
      className="floating-heart text-2xl"
      style={{ 
        left: `${position.left}%`,
        animationDelay: `${delay}s`,
        fontSize: `${1 + Math.random() * 1}rem`
      }}
    >
      💖
    </div>
  );
};

const SparkleEffect: React.FC<{ index: number }> = ({ index }) => (
  <Sparkles 
    className={`absolute w-4 h-4 text-pink-300 animate-twinkle`}
    style={{
      top: `${20 + (index * 15) % 60}%`,
      left: `${10 + (index * 23) % 80}%`,
      animationDelay: `${index * 0.5}s`
    }}
  />
);

const StatCard: React.FC<{ value: number; label: string; animateKey: number; index: number }> = ({ value, label, animateKey, index }) => {
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    // Trigger pop animation when animateKey changes
    setPopped(true);
    const t = setTimeout(() => setPopped(false), 500);
    return () => clearTimeout(t);
  }, [animateKey]);

  return (
    <div className={`love-card glass rounded-xl p-4 bg-gradient-to-br from-pink-50/80 to-rose-100/80 backdrop-blur-sm animate-float-gentle animate-glow`}
         style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="relative">
        <Heart className="absolute -top-1 -right-1 w-3 h-3 text-pink-400 animate-pulse-love" />
        <div className={`${popped ? 'pop-anim' : ''} text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-text-glow`}>
          {value}
        </div>
        <div className="text-sm font-medium text-pink-500/80 mt-1">{label}</div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({ months: 0, days: 0, hours: 0, minutes: 0 });
  const [tick, setTick] = useState(0); // used to force animation on change

  useEffect(() => {
    // Fecha de inicio de la relación (ajusta esta fecha si es necesario)
    const startDate = new Date('2024-06-02T00:00:00');

    const updateTime = () => {
      const now = new Date();
      const computed = calculateElapsed(startDate, now);
      setTimeElapsed(computed);
      setTick((t) => t + 1);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 animate-gradient py-12 px-4 min-h-screen flex items-center">
      {/* Floating Hearts */}
      {[...Array(8)].map((_, i) => (
        <FloatingHeart key={i} delay={i} />
      ))}
      
      {/* Sparkle Effects */}
      {[...Array(12)].map((_, i) => (
        <SparkleEffect key={i} index={i} />
      ))}
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23fce7f3%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative max-w-5xl mx-auto text-center w-full">
        {/* Title Section */}
        <div className="mb-12 animate-float-gentle">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-pink-500 mr-4 animate-pulse-love" />
            <div className="text-center">
              <h1 className="text-5xl md:text-8xl font-romantic font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient leading-tight">
                {timeElapsed.months} Meses
              </h1>
              <h2 className="text-2xl md:text-4xl font-elegant bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mt-2">
                de Amor Infinito 💕
              </h2>
            </div>
            <Heart className="w-12 h-12 text-pink-500 ml-4 animate-pulse-love" style={{ animationDelay: '1s' }} />
          </div>
          
          <p className="text-lg md:text-xl text-rose-600/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Cada segundo contigo es un regalo, cada minuto una bendición, cada día una nueva razón para amarte más 💖
          </p>
        </div>

        {/* Stats Container */}
     {/*   <div className="glass rounded-3xl p-8 shadow-2xl border border-pink-200/30 backdrop-blur-xl animate-glow">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-6 h-6 text-rose-500 mr-3 animate-pulse-love" />
            <h3 className="text-xl font-romantic font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Nuestro Tiempo Juntos ✨
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard value={timeElapsed.months} label="Meses 💝" animateKey={tick} index={0} />
            <StatCard value={timeElapsed.days} label="Días 🌸" animateKey={tick + 1} index={1} />
            <StatCard value={timeElapsed.hours} label="Horas ⏰" animateKey={tick + 2} index={2} />
            <StatCard value={timeElapsed.minutes} label="Minutos 💕" animateKey={tick + 3} index={3} />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-rose-500/70 font-medium italic">
              "Y seguimos escribiendo nuestra historia de amor..." 💌
            </p>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;