
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6">
          <Heart className="w-6 h-6 text-love-500 mr-2 animate-heartbeat" />
          <h3 className="text-2xl font-semibold text-gradient">Forever & Always</h3>
          <Heart className="w-6 h-6 text-love-500 ml-2 animate-heartbeat" />
        </div>
        
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          This is just the beginning of our beautiful journey. I love you more with each passing day.
        </p>
        
        <div className="glass-card inline-block py-3 px-6 rounded-full">
          <span className="text-white/90">Made with love for </span>
          <span className="love-text-gradient font-semibold">You</span>
        </div>
        
        <p className="mt-8 text-white/50 text-sm">
          © {new Date().getFullYear()} | Our Love Story
        </p>
      </div>
    </footer>
  );
};

export default Footer;
