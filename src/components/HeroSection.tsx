import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-rose-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block mb-8">
            <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-yellow-400 animate-spin" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text leading-tight">
              Mi Amor Eterno
            </h2>
            <Sparkles className="absolute -bottom-4 -right-4 w-6 h-6 text-yellow-400 animate-spin" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100/50 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-3xl"></div>
            <div className="relative">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-light">
                Cada día a tu lado es una nueva página en nuestra historia de amor. 
                <span className="text-pink-600 font-semibold"> 15 meses </span>
                han pasado volando, pero cada momento contigo se siente eterno y perfecto.
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mb-6 rounded-full"></div>
              
              <p className="text-base md:text-lg text-gray-600 italic">
                "El amor no se mide en tiempo, sino en la profundidad de los sentimientos 
                y la alegría compartida en cada instante."
              </p>
              
              <div className="flex justify-center mt-8">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg font-semibold tracking-wide">
                  Te Amo Infinitamente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;