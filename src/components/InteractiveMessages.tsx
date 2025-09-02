import React, { useState } from 'react';
import { Heart, Star, Coffee, Gift, Sparkles, Lock, Unlock } from 'lucide-react';

interface Message {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
  envelope: string;
}

const LoveCard: React.FC<{ 
  message: Message; 
  isOpen: boolean; 
  onToggle: () => void; 
  delay: number 
}> = ({ message, isOpen, onToggle, delay }) => {
  return (
    <div 
      className="relative group animate-float-gentle cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onClick={onToggle}
    >
      {/* Card Container */}
      <div className="relative w-full h-80 perspective-1000">
        
        {/* Card Front (Envelope) */}
        <div className={`absolute inset-0 w-full h-full transition-all duration-700 transform-style-preserve-3d ${
          isOpen ? 'rotate-y-180' : ''
        }`}>
          
          {/* Front Side - Envelope */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className={`relative w-full h-full bg-gradient-to-br ${message.envelope} rounded-2xl shadow-xl love-card animate-glow p-6`}>
              
              {/* Envelope Design */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm">
                {/* Envelope Top Flap */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl border-b border-white/30"></div>
                
                {/* Wax Seal Effect */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-4 border-red-400/50">
                    {isOpen ? (
                      <Unlock className="w-6 h-6 text-white" />
                    ) : (
                      <Lock className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Card Content Preview */}
              <div className="flex flex-col items-center justify-center h-full text-center relative z-10 mt-8">
                <div className={`p-4 rounded-full bg-gradient-to-br ${message.color} mb-4 shadow-lg animate-pulse-love`}>
                  {message.icon}
                </div>
                <h3 className="text-2xl font-elegant text-white font-bold mb-2 drop-shadow-lg">
                  {message.title}
                </h3>
                <p className="text-white/90 text-sm font-romantic">
                  Una carta especial para ti 💕
                </p>
                
                {/* Floating Hearts */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-4 h-4 text-white/60 animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Sparkles className="w-4 h-4 text-white/60 animate-twinkle" />
                </div>
              </div>
              
              {/* Instruction */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <p className="text-white/80 text-xs font-romantic animate-pulse">
                  Toca para abrir la carta 💌
                </p>
              </div>
            </div>
          </div>
          
          {/* Back Side - Letter Content */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl border border-amber-200/50 p-6 overflow-hidden">
              
              {/* Paper Texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23d4af37%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M0 0h20v20H0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              {/* Letter Header */}
              <div className="relative z-10 text-center mb-6">
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${message.color} mb-3 shadow-lg`}>
                  {message.icon}
                </div>
                <h3 className="text-2xl font-elegant text-amber-800 font-bold">
                  {message.title}
                </h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2"></div>
              </div>
              
              {/* Letter Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-amber-900/90 leading-relaxed font-serif text-sm mb-4 italic">
                    Mi amor,
                  </p>
                  <p className="text-amber-800 leading-relaxed text-sm mb-6">
                    {message.content}
                  </p>
                </div>
                
                {/* Letter Signature */}
                <div className="text-right">
                  <p className="text-amber-800 font-elegant text-lg mb-2">
                    Con todo mi amor,
                  </p>
                  <p className="text-amber-600 font-elegant text-xl">
                    Tu Persona Especial 💕
                  </p>
                  
                  {/* Decorative Hearts */}
                  <div className="flex justify-end mt-2 space-x-1">
                    <Heart className="w-3 h-3 text-red-400" fill="currentColor" />
                    <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
                    <Heart className="w-3 h-3 text-rose-400" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Close instruction */}
              <div className="absolute bottom-4 left-4">
                <p className="text-amber-600/70 text-xs font-romantic">
                  Toca para cerrar 📝
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveMessages: React.FC = () => {
  const [openMessages, setOpenMessages] = useState<Set<number>>(new Set());

  const messages: Message[] = [
    {
      id: 1,
      title: "Primer Recuerdo",
      content: "Recuerdo perfectamente nuestro primer encuentro. Tus ojos brillaron como estrellas y supe inmediatamente que eras especial. Ese momento cambió mi vida para siempre. Cada vez que pienso en ese día, mi corazón se llena de una calidez inexplicable.",
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-rose-500",
      envelope: "from-pink-400 to-rose-400"
    },
    {
      id: 2,
      title: "Lo Que Más Amo",
      content: "Amo tu sonrisa que ilumina mis días más oscuros, tu risa que es música armónica para mis oídos, y tu forma única de hacer que todo sea mejor. Eres mi persona favorita en todo el universo, mi refugio y mi hogar.",
      icon: <Star className="w-6 h-6 text-white" />,
      color: "from-yellow-400 to-orange-400",
      envelope: "from-purple-400 to-pink-400"
    },
    {
      id: 3,
      title: "Nuestros Sueños",
      content: "Sueño con todos los lugares que visitaremos juntos, con casarnos y con las aventuras que viviremos y los recuerdos que crearemos. Contigo, el futuro se ve brillante y lleno de amor. Cada plan que hacemos juntos es una promesa de felicidad.",
      icon: <Coffee className="w-6 h-6 text-white" />,
      color: "from-blue-400 to-purple-400",
      envelope: "from-indigo-400 to-purple-400"
    },
    {
      id: 4,
      title: "Promesa Eterna",
      content: "Te prometo amarte cada día más que el anterior, cuidar de tu corazón como el tesoro más preciado, y construir contigo la historia de amor más hermosa. Mi amor por ti es infinito, eterno y verdadero.",
      icon: <Gift className="w-6 h-6 text-white" />,
      color: "from-emerald-400 to-teal-400",
      envelope: "from-rose-400 to-pink-500"
    }
  ];

  const toggleMessage = (id: number) => {
    const newOpenMessages = new Set(openMessages);
    if (newOpenMessages.has(id)) {
      newOpenMessages.delete(id);
    } else {
      newOpenMessages.add(id);
    }
    setOpenMessages(newOpenMessages);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-amber-50/30 via-pink-50/20 to-rose-50/30 overflow-hidden">
      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <Heart 
          key={i}
          className="absolute text-pink-300/30 animate-float-gentle pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
            fontSize: `${0.8 + Math.random() * 0.4}rem`,
            animationDelay: `${i * 0.8}s`
          }}
        />
      ))}
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-float-gentle">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-pink-500 mr-3 animate-twinkle" />
            <h3 className="text-4xl md:text-5xl font-elegant font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Cartas del Corazón
            </h3>
            <Sparkles className="w-8 h-8 text-pink-500 ml-3 animate-twinkle" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg text-rose-600/80 font-romantic max-w-2xl mx-auto leading-relaxed">
            Cada sobre contiene un pedacito de mi alma, palabras que nacen del corazón solo para ti 💌✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {messages.map((message, index) => (
            <LoveCard
              key={message.id}
              message={message}
              isOpen={openMessages.has(message.id)}
              onToggle={() => toggleMessage(message.id)}
              delay={index * 0.2}
            />
          ))}
        </div>
        
        {/* Bottom Message */}
        <div className="text-center mt-16 animate-float-gentle" style={{ animationDelay: '1s' }}>
          <p className="text-xl font-elegant text-pink-600 italic">
            "Cada carta es un abrazo que viaja hasta tu corazón" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMessages;