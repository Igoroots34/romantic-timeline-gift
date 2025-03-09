
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { calculateTimeTogether } from '../utils/dateUtils';

const LoveCounter: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState(calculateTimeTogether(new Date('2024-10-06')));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeTogether(new Date('2024-10-06')));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center mb-8 animate-float">
        <Heart className="w-8 h-8 mr-3 text-love-500 animate-heartbeat" />
        <h1 className="text-3xl md:text-5xl font-bold text-gradient">Our Love Story</h1>
        <Heart className="w-8 h-8 ml-3 text-love-500 animate-heartbeat" />
      </div>
      
      <p className="text-xl md:text-2xl mb-12 text-white/70">
        Every moment with you is a treasure
      </p>
      
      <div className="glass-card p-8 rounded-2xl w-full max-w-3xl">
        <h2 className="text-2xl md:text-3xl text-center mb-8 font-semibold">
          We've been together for
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold love-text-gradient mb-2">
              {timeElapsed.days}
            </span>
            <span className="text-sm md:text-base text-white/70">Days</span>
          </div>
          
          <div className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold love-text-gradient mb-2">
              {timeElapsed.hours}
            </span>
            <span className="text-sm md:text-base text-white/70">Hours</span>
          </div>
          
          <div className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold love-text-gradient mb-2">
              {timeElapsed.minutes}
            </span>
            <span className="text-sm md:text-base text-white/70">Minutes</span>
          </div>
          
          <div className="glass-card p-4 md:p-6 rounded-xl flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold love-text-gradient mb-2">
              {timeElapsed.seconds}
            </span>
            <span className="text-sm md:text-base text-white/70">Seconds</span>
          </div>
        </div>
        
        <p className="text-center mt-8 text-white/70">
          Since October 6, 2024
        </p>
      </div>
    </div>
  );
};

export default LoveCounter;
