import React from 'react';
import { Heart, Sparkles, Star, Calendar, MapPin, Coffee, Sunset, Camera, Gift } from 'lucide-react';

const TimelineEvent: React.FC<{ 
  icon: React.ReactNode; 
  date: string; 
  title: string; 
  description: string; 
  isLeft: boolean;
  delay: number;
}> = ({ icon, date, title, description, isLeft, delay }) => {
  return (
    <>
      {/* Desktop Layout */}
      <div className={`hidden md:flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center mb-12 animate-float-gentle`} 
           style={{ animationDelay: `${delay}s` }}>
        
        {/* Content Card */}
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <div className="love-card glass rounded-3xl p-6 backdrop-blur-xl animate-glow">
            <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-3`}>
              <Calendar className="w-4 h-4 text-pink-500 mr-2" />
              <span className="text-sm font-romantic text-pink-600 font-semibold">{date}</span>
            </div>
            <h3 className="text-xl font-elegant font-bold text-rose-700 mb-2">{title}</h3>
            <p className="text-rose-600/80 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Timeline Point */}
        <div className="w-2/12 flex justify-center">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-pink-300 to-rose-300 -top-12"></div>
            
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-love border-4 border-white">
              {icon}
            </div>
            
            {/* Sparkle Effect */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-twinkle" />
          </div>
        </div>

        {/* Empty Space */}
        <div className="w-5/12"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-start mb-8 animate-float-gentle pl-4" 
           style={{ animationDelay: `${delay}s` }}>
        
        {/* Timeline Point */}
        <div className="flex flex-col items-center mr-4 flex-shrink-0">
          <div className="relative">
            {/* Icon Circle - Smaller for mobile */}
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-love border-3 border-white">
              <div className="scale-75">
                {icon}
              </div>
            </div>
            
            {/* Sparkle Effect - Smaller */}
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-twinkle" />
          </div>
          
          {/* Connecting Line for mobile */}
          <div className="w-0.5 h-16 bg-gradient-to-b from-pink-300 to-rose-300 mt-2"></div>
        </div>

        {/* Content Card */}
        <div className="flex-1">
          <div className="love-card glass rounded-2xl p-4 backdrop-blur-xl animate-glow">
            <div className="flex items-center mb-2">
              <Calendar className="w-3 h-3 text-pink-500 mr-2" />
              <span className="text-xs font-romantic text-pink-600 font-semibold">{date}</span>
            </div>
            <h3 className="text-lg font-elegant font-bold text-rose-700 mb-2">{title}</h3>
            <p className="text-rose-600/80 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const HeroSection: React.FC = () => {
  const timelineEvents = [
    {
      icon: <Heart className="w-8 h-8 text-white" fill="currentColor" />,
      date: "2 de Junio, 2024",
      title: "El Día que Todo Cambió 💕",
      description: "Fue en el cine cuando nuestros corazones se unieron con el primer beso. Aqueel momento marcó nuestra historia."
    },
    {
      icon: <Coffee className="w-8 h-8 text-white" />,
      date: "Primeras Semanas",
      title: "Descubriendo el Amor ☕",
      description: "Conversaciones infinitas, risas compartidas y la emoción de conocernos. Cada día traía una nueva razón para sonreír."
    },
    {
      icon: <Camera className="w-8 h-8 text-white" />,
      date: "Nuestros Primeros Recuerdos",
      title: "Creando Memorias 📸",
      description: "Cada foto, cada momento capturado se convirtió en un tesoro. Comenzamos a escribir nuestra historia juntos."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      date: "Aventuras Juntos",
      title: "Explorando el Mundo 🗺️",
      description: "De la mano descubrimos nuevos lugares, pero el lugar más hermoso siempre era estar contigo, sin importar dónde."
    },
    {
      icon: <Sunset className="w-8 h-8 text-white" />,
      date: "Momentos Especiales",
      title: "Atardeceres Mágicos 🌅",
      description: "Cada puesta de sol se volvía más hermosa a tu lado. Los momentos simples se transformaban en recuerdos eternos."
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      date: "Hoy y Siempre",
      title: "Nuestro Presente 🎁",
      description: "Cada día contigo es un regalo. 15 meses que se sienten como una eternidad y al mismo tiempo como si apenas hubiera comenzado."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 animate-gradient py-20 px-4 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-pink-300/40 animate-float-gentle"
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
              fontSize: `${1 + Math.random() * 0.5}rem`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
        
        {[...Array(12)].map((_, i) => (
          <Star 
            key={i}
            className="absolute text-purple-300/30 animate-twinkle"
            style={{
              top: `${15 + i * 8}%`,
              right: `${5 + i * 10}%`,
              fontSize: `${0.6 + Math.random() * 0.4}rem`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-float-gentle px-4">
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-pink-500 mr-2 md:mr-4 animate-pulse-love" />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-elegant font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent text-center">
              Nuestra Historia de Amor
            </h2>
            <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-pink-500 ml-2 md:ml-4 animate-pulse-love" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-base md:text-xl text-rose-600/80 max-w-3xl mx-auto font-romantic leading-relaxed px-4">
            Una línea del tiempo de nuestros momentos más preciados, donde cada recuerdo es una joya en el collar de nuestro amor 💎✨
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line - Only on Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-rose-400 to-purple-400"></div>
          
          {/* Timeline Events */}
          <div className="md:space-y-0 space-y-4">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                icon={event.icon}
                date={event.date}
                title={event.title}
                description={event.description}
                isLeft={index % 2 === 0}
                delay={index * 0.2}
              />
            ))}
          </div>
          
          {/* Timeline End */}
          <div className="flex justify-center mt-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-pulse-love border-4 border-white">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 animate-float-gentle" style={{ animationDelay: '1.2s' }}>
          <div className="glass rounded-3xl p-8 backdrop-blur-xl animate-glow love-card max-w-3xl mx-auto">
            <p className="text-2xl font-elegant text-pink-600 italic leading-relaxed">
              "Y esta es solo el comienzo de nuestra historia... Los mejores capítulos están por escribirse" 
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <Heart className="w-6 h-6 text-red-400 animate-pulse-love" fill="currentColor" />
              <Heart className="w-7 h-7 text-pink-400 animate-pulse-love" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 text-rose-400 animate-pulse-love" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;