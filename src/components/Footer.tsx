import React from 'react';
import { Heart, Infinity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 text-pink-200 mr-2 animate-pulse" />
            <Infinity className="w-8 h-8 text-white" />
            <Heart className="w-6 h-6 text-pink-200 ml-2 animate-pulse" />
          </div>
          
          <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Por Siempre y Para Siempre
          </h4>
          
          <p className="text-pink-100 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Que estos 15 meses sean solo el comienzo de una vida entera llena de amor, 
            risas, aventuras y sueños cumplidos. Contigo, cada día es San Valentín.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              Con todo mi amor,
            </p>
            <p className="text-2xl font-serif font-bold text-yellow-200">
              Tu [Nombre] 💕
            </p>
          </div>
        </div>

        <div className="border-t border-pink-300/30 pt-6">
          <p className="text-pink-200 text-sm">
            Creado con 💖 para celebrar nuestro amor • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;