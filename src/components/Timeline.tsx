
import React, { useRef, useEffect, useState } from 'react';
import { Calendar, Heart } from 'lucide-react';

// Sample timeline events - replace with your own events
const timelineEvents = [
  {
    id: 1,
    date: "October 6, 2024",
    title: "First Met",
    description: "The day our paths crossed and our journey began."
  },
  {
    id: 2,
    date: "October 15, 2024",
    title: "First Date",
    description: "Our magical first date that I'll never forget."
  },
  {
    id: 3,
    date: "November 12, 2024",
    title: "Official Couple",
    description: "The day we decided to make it official."
  },
  {
    id: 4,
    date: "December 25, 2024",
    title: "First Holiday",
    description: "Our first holiday season spent together."
  },
  {
    id: 5,
    date: "January 15, 2025",
    title: "First Trip",
    description: "Our unforgettable weekend getaway."
  },
  {
    id: 6,
    date: "February 14, 2025",
    title: "Valentine's Day",
    description: "Our first Valentine's Day celebration."
  }
];

const Timeline: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const items = scrollContainerRef.current.querySelectorAll('.timeline-item');
      const containerCenter = scrollContainerRef.current.offsetWidth / 2;
      
      let closestItem = 0;
      let closestDistance = Infinity;
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });
      
      setActiveEvent(closestItem);
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <div className="w-full">
      <h2 className="section-title text-center">Our Journey</h2>
      <p className="section-subtitle">The beautiful timeline of our love story</p>
      
      <div 
        className="timeline-container scrollbar-none pb-8"
        ref={scrollContainerRef}
      >
        {timelineEvents.map((event, index) => (
          <div 
            key={event.id}
            className={`timeline-item glass-card p-6 transition-all duration-500 ${
              activeEvent === index 
                ? 'scale-105 border-love-400 shadow-lg shadow-love-500/20' 
                : 'scale-95 opacity-70'
            }`}
          >
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 text-love-400" />
              <span className="text-sm text-white/70">{event.date}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {event.title}
              {activeEvent === index && (
                <Heart className="w-4 h-4 ml-2 text-love-500 animate-heartbeat" />
              )}
            </h3>
            
            <p className="text-white/70">{event.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        {timelineEvents.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-all ${
              activeEvent === index 
                ? 'bg-love-500 w-4' 
                : 'bg-white/30'
            }`}
            onClick={() => {
              if (scrollContainerRef.current) {
                const items = scrollContainerRef.current.querySelectorAll('.timeline-item');
                items[index].scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center'
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
