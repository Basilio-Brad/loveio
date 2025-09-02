import React, { useState, useEffect } from 'react';
import { Heart, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    months: 15,
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Fecha de inicio de la relación (ajusta esta fecha)
    const startDate = new Date('2023-10-15T00:00:00');
    
    const updateTime = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      
      setTimeElapsed({
        months,
        days: remainingDays,
        hours,
        minutes
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 py-8 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23fce7f3%22 fill-opacity=%220.3%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-pink-500 mr-3 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            15 Meses de Amor
          </h1>
          <Heart className="w-8 h-8 text-pink-500 ml-3 animate-pulse" />
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200/50">
          <div className="flex items-center justify-center mb-3">
            <Calendar className="w-5 h-5 text-rose-500 mr-2" />
            <p className="text-rose-700 font-semibold">Tiempo Juntos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-3">
              <div className="text-2xl font-bold text-pink-600">{timeElapsed.months}</div>
              <div className="text-sm text-pink-500">Meses</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-3">
              <div className="text-2xl font-bold text-pink-600">{timeElapsed.days}</div>
              <div className="text-sm text-pink-500">Días</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-3">
              <div className="text-2xl font-bold text-pink-600">{timeElapsed.hours}</div>
              <div className="text-sm text-pink-500">Horas</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-3">
              <div className="text-2xl font-bold text-pink-600">{timeElapsed.minutes}</div>
              <div className="text-sm text-pink-500">Minutos</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;