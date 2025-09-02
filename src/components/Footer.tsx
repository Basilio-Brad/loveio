import React from 'react';
import { Heart, Infinity, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-pink-600 animate-gradient text-white py-16 px-4 overflow-hidden">
      {/* Floating Hearts Background */}
      {[...Array(12)].map((_, i) => (
        <Heart 
          key={i}
          className="absolute text-white/20 animate-float-gentle pointer-events-none"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + (i * 17) % 90}%`,
            fontSize: `${0.8 + Math.random() * 0.6}rem`,
            animationDelay: `${i * 0.4}s`
          }}
        />
      ))}
      
      {/* Sparkle Stars */}
      {[...Array(8)].map((_, i) => (
        <Star 
          key={i}
          className="absolute text-yellow-200/40 animate-twinkle pointer-events-none"
          style={{
            top: `${20 + i * 10}%`,
            right: `${10 + (i * 12) % 80}%`,
            fontSize: `${0.6 + Math.random() * 0.4}rem`,
            animationDelay: `${i * 0.6}s`
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="animate-float-gentle mb-10">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-pink-200 mr-3 animate-pulse-love" fill="currentColor" />
            <Infinity className="w-12 h-12 text-white animate-pulse-love" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-8 h-8 text-pink-200 ml-3 animate-pulse-love" fill="currentColor" style={{ animationDelay: '1s' }} />
          </div>
          
          <h4 className="text-3xl md:text-5xl font-elegant font-bold mb-6">
            Por Siempre y Para Siempre ∞
          </h4>
          
          <p className="text-pink-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Que estos meses sean solo el comienzo de una vida entera llena de amor, 
            risas, aventuras y sueños cumplidos. Contigo, cada día es una nueva razón para sonreír.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 mb-8 animate-glow love-card backdrop-blur-xl">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold mb-4 text-pink-100">
              Con todo mi amor infinito,
            </p>
            <p className="text-3xl md:text-4xl font-elegant font-bold text-yellow-200">
              Tu Dramático 💕✨
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <Heart className="w-5 h-5 text-red-300 animate-pulse-love" fill="currentColor" />
              <Heart className="w-6 h-6 text-pink-300 animate-pulse-love" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-5 h-5 text-rose-300 animate-pulse-love" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        <div className="border-t border-pink-300/30 pt-8">
          <div className="animate-float-gentle" style={{ animationDelay: '0.5s' }}>
          
            <p className="text-pink-200 text-sm">
              Creado con 💖 para celebrar nuestro amor eterno • {new Date().getFullYear()} • ∞
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;