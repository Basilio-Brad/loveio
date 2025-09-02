import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InteractiveMessages from './components/InteractiveMessages';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <MusicPlayer />
      <Header />
      <main>
        <HeroSection />
        <InteractiveMessages />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;