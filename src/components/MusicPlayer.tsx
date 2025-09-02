import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Mostrar controles después de un momento, pero solo si ya no está el welcome
    if (!showWelcome) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Función para iniciar la experiencia con música
  const startExperience = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = volume;
        await audioRef.current.play();
        setIsPlaying(true);
        setShowWelcome(false);
        console.log('Música iniciada exitosamente');
      } catch (error) {
        console.log('Error al iniciar música:', error);
        // Aún así ocultar el welcome y mostrar controles
        setShowWelcome(false);
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/src/assets/lyrcs.mp3" type="audio/wav" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {/* Welcome Overlay */}
      {showWelcome && (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-8 animate-bounce">
              <div className="text-6xl mb-4">💕</div>
              <h1 className="text-4xl font-elegant text-pink-600 mb-4">
                Bienvenido a Nuestro Amor
              </h1>
            
            </div>
            
           <div className='w-full flex justify-center items-center'>
             <button
              onClick={startExperience}
              className="max-w-max bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4  rounded-full text-lg lg:text-xl font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse-love"
            >
             Entrar a Nuestro Mundo
            </button>
           </div>
            
         
          </div>
        </div>
      )}

      {/* Controles de música flotantes */}
      <div className={`fixed bottom-6 right-6 z-40 transform transition-all duration-500 ${
        isVisible && !showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-pink-200/50 group hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-pink-600 hover:text-pink-700 transition-colors duration-200"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${volume * 100}%, #fce7f3 ${volume * 100}%, #fce7f3 100%)`
                }}
              />
            </div>
          </div>
          
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-500 font-medium">
              {isPlaying ? '🎵 Reproduciendo' : '🎵 Pausado'}
            </p>
            <p className="text-xs text-pink-600 font-semibold">
              "Te amo y más"
            </p>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default MusicPlayer;