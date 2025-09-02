import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Fotos de ejemplo de Pexels con temática romántica
  const photos = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Nuestro primer atardecer juntos"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Caminando de la mano"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Momentos de felicidad"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Risas compartidas"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Abrazos que curan el alma"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Cada día es una aventura"
    }
  ];

  const openLightbox = (photoId: number) => {
    setSelectedPhoto(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex].id);
  };

  const selectedPhotoData = photos.find(photo => photo.id === selectedPhoto);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50/30 to-rose-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-pink-500 mr-3" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-pink-700">
              Nuestros Momentos
            </h3>
          </div>
          <p className="text-gray-600 text-lg">
            Una colección de recuerdos que guardamos en el corazón
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onClick={() => openLightbox(photo.id)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedPhotoData.url}
                alt={selectedPhotoData.caption}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50">
                <p className="text-center text-gray-700 font-medium text-lg">
                  {selectedPhotoData.caption}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => navigatePhoto('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigatePhoto('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;