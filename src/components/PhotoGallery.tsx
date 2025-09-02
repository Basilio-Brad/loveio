import React, { useState } from 'react';
import { Heart, Camera, Sparkles } from 'lucide-react';

// Import all photos
import photo1 from '../assets/img/photo1.jpg';
import photo2 from '../assets/img/photo2.jpg';
import photo4 from '../assets/img/photo4.jpg';
import photo5 from '../assets/img/photo5.jpg';
import photo6 from '../assets/img/photo6.jpg';
import photo8 from '../assets/img/photo8.jpg';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: photo1,
      caption: "Nuestro primer paseo juntos 💕"
    },
    {
      id: 2,
      url: photo2,
      caption: "Esa sonrisa que me enamora cada día 😍"
    },
    {
      id: 3,
      url: photo8,
      caption: "Momentos de pura felicidad ✨"
    },
    {
      id: 4,
      url: photo4,
      caption: "Aventuras que recordaremos siempre 🌟"
    },
    {
      id: 5,
      url: photo5,
      caption: "Tu mirada que me dice todo 💖"
    },
    {
      id: 6,
      url: photo6,
      caption: "Juntos hacia el infinito 💫"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 animate-gradient py-20 px-4 overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(5)].map((_, i) => (
        <Heart 
          key={i}
          className="absolute text-pink-300/40 animate-float-gentle pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            left: `${10 + i * 20}%`,
            fontSize: `${1.2 + Math.random() * 0.8}rem`,
            animationDelay: `${i * 1.2}s`
          }}
        />
      ))}
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-float-gentle">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-8 h-8 text-pink-500 mr-3 animate-pulse-love" />
            <h2 className="text-4xl md:text-6xl font-elegant font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Nuestros Momentos
            </h2>
            <Sparkles className="w-8 h-8 text-pink-500 ml-3 animate-twinkle" />
          </div>
          <p className="text-xl text-rose-600/80 max-w-2xl mx-auto font-romantic">
            Cada fotografía cuenta una historia, cada sonrisa un "te amo" silencioso 📸💕
          </p>
        </div>

        {/* Beautiful Romantic Photo Collage */}
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            
            {/* Photo 1 - Large */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-1 transition-all duration-500"
              style={{ animationDelay: '0s' }}
              onClick={() => setSelectedPhoto(photos[0].id)}
              onMouseEnter={() => setHoveredPhoto(photos[0].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-xl">
                <img
                  src={photos[0].url}
                  alt={photos[0].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[0].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 2 - Medium */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-2 transition-all duration-500"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setSelectedPhoto(photos[1].id)}
              onMouseEnter={() => setHoveredPhoto(photos[1].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[1].url}
                  alt={photos[1].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[1].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 3 - Square */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:-rotate-1 transition-all duration-500"
              style={{ animationDelay: '0.4s' }}
              onClick={() => setSelectedPhoto(photos[2].id)}
              onMouseEnter={() => setHoveredPhoto(photos[2].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[2].url}
                  alt={photos[2].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '1/1' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[2].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 4 - Wide */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-3 transition-all duration-500"
              style={{ animationDelay: '0.6s' }}
              onClick={() => setSelectedPhoto(photos[3].id)}
              onMouseEnter={() => setHoveredPhoto(photos[3].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[3].url}
                  alt={photos[3].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[3].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 5 - Tall */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:-rotate-2 transition-all duration-500"
              style={{ animationDelay: '0.8s' }}
              onClick={() => setSelectedPhoto(photos[4].id)}
              onMouseEnter={() => setHoveredPhoto(photos[4].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[4].url}
                  alt={photos[4].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '2/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[4].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 6 - Medium */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-1 transition-all duration-500"
              style={{ animationDelay: '1s' }}
              onClick={() => setSelectedPhoto(photos[5].id)}
              onMouseEnter={() => setHoveredPhoto(photos[5].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[5].url}
                  alt={photos[5].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '4/5' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[5].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 7 - Square */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:-rotate-3 transition-all duration-500"
              style={{ animationDelay: '1.2s' }}
              onClick={() => setSelectedPhoto(photos[0].id)}
              onMouseEnter={() => setHoveredPhoto(photos[0].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[0].url}
                  alt={photos[0].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '1/1' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[0].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 8 - Wide */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-2 transition-all duration-500"
              style={{ animationDelay: '1.4s' }}
              onClick={() => setSelectedPhoto(photos[1].id)}
              onMouseEnter={() => setHoveredPhoto(photos[1].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[1].url}
                  alt={photos[1].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '16/10' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[1].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 9 - Medium */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:-rotate-1 transition-all duration-500"
              style={{ animationDelay: '1.6s' }}
              onClick={() => setSelectedPhoto(photos[2].id)}
              onMouseEnter={() => setHoveredPhoto(photos[2].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[2].url}
                  alt={photos[2].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '3/4' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[2].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 10 - Small Square */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-3 transition-all duration-500"
              style={{ animationDelay: '1.8s' }}
              onClick={() => setSelectedPhoto(photos[3].id)}
              onMouseEnter={() => setHoveredPhoto(photos[3].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[3].url}
                  alt={photos[3].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '1/1' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[3].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 11 - Vertical */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:-rotate-2 transition-all duration-500"
              style={{ animationDelay: '2s' }}
              onClick={() => setSelectedPhoto(photos[4].id)}
              onMouseEnter={() => setHoveredPhoto(photos[4].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[4].url}
                  alt={photos[4].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '9/16' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[4].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

            {/* Photo 12 - Wide */}
            <div 
              className="break-inside-avoid mb-4 love-card group cursor-pointer animate-float-gentle transform hover:rotate-1 transition-all duration-500"
              style={{ animationDelay: '2.2s' }}
              onClick={() => setSelectedPhoto(photos[5].id)}
              onMouseEnter={() => setHoveredPhoto(photos[5].id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass animate-glow border-4 border-white shadow-lg">
                <img
                  src={photos[5].url}
                  alt={photos[5].caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '21/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredPhoto === photos[5].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white animate-pulse-love" fill="currentColor" />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
        
        <div className="text-center mt-16 animate-float-gentle" style={{ animationDelay: '1.8s' }}>
          <p className="text-2xl font-elegant text-pink-600 italic glass rounded-3xl px-8 py-6 inline-block backdrop-blur-sm">
            "Cada imagen es un fragmento de nuestro amor infinito" 💝
          </p>
        </div>
      </div>

      {/* Modal for selected photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl w-full">
            <img
              src={photos.find(p => p.id === selectedPhoto)?.url}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;