
import React, { useEffect, useState } from 'react';
import { ScrollProvider } from '../context/ScrollContext';
import LoveCounter from '../components/LoveCounter';
import PhotoGallery from '../components/PhotoGallery';
import Timeline from '../components/Timeline';
import ScratchCard from '../components/ScratchCard';
import MovieSection from '../components/MovieSection';
import SpotifySection from '../components/SpotifySection';
import DreamsSection from '../components/DreamsSection';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';
import { Heart } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-12 h-12 text-love-500 mx-auto animate-heartbeat mb-4" />
          <h1 className="text-2xl font-semibold text-gradient">Loading our love story...</h1>
        </div>
      </div>
    );
  }
  
  return (
    <ScrollProvider>
      <div className="snap-container bg-gradient-to-b from-[#0f0f1a] to-[#1a0a1f]">
        {/* Love Counter Section */}
        <section className="snap-section section-container bg-dark-gradient" id="counter">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <LoveCounter />
        </section>
        
        <SectionDivider />
        
        {/* Photo Gallery Section */}
        <section className="snap-section section-container" id="gallery">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-80"></div>
          <PhotoGallery />
        </section>
        
        <SectionDivider inverted />
        
        {/* Timeline Section */}
        <section className="snap-section section-container" id="timeline">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
          <Timeline />
        </section>
        
        <SectionDivider />
        
        {/* Scratch Card Section */}
        <section className="snap-section section-container" id="scratch">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-80"></div>
          <ScratchCard message="I fall in love with you more every day. You're my forever person." />
        </section>
        
        <SectionDivider inverted />
        
        {/* Movie Section */}
        <section className="snap-section section-container" id="movies">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
          <MovieSection />
        </section>
        
        <SectionDivider />
        
        {/* Spotify Section */}
        <section className="snap-section section-container" id="playlist">
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-80"></div>
          <SpotifySection />
        </section>
        
        <SectionDivider inverted />
        
        {/* Dreams Section */}
        <section className="snap-section section-container" id="dreams">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482932772725-9d31293e9b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
          <DreamsSection />
        </section>
        
        {/* Footer */}
        <section className="section-container py-8" id="footer">
          <Footer />
        </section>
      </div>
    </ScrollProvider>
  );
};

export default Index;
