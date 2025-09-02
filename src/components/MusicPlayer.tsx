import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Mostrar controles después de un momento
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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
      {/* Audio element - usando una URL de ejemplo ya que no podemos acceder a Spotify directamente */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {/* Controles de música flotantes */}
      <div className={`fixed bottom-6 right-6 z-40 transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
              "Amor del Bueno"
            </p>
          </div>
        </div>
      </div>

      {/* Nota sobre la música */}
      <div className={`fixed top-6 right-6 z-30 transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 shadow-lg max-w-xs">
          <p className="text-yellow-800 text-sm">
            💡 <strong>Nota:</strong> Para escuchar "Amor del Bueno" de Reyli Barba, 
            abre tu reproductor de música favorito en paralelo.
          </p>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;