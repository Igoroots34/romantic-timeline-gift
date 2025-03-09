
import React, { useState } from 'react';
import { Star, Heart, Compass } from 'lucide-react';

// Sample dreams data - replace with your own future plans
const dreamsData = [
  {
    id: 1,
    title: "Travel the World",
    description: "Visit the most beautiful places in the world together.",
    icon: <Compass className="w-6 h-6 text-love-400" />,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Build a Home",
    description: "Create our perfect little sanctuary filled with love.",
    icon: <Heart className="w-6 h-6 text-love-400" />,
    image: "https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Grow Together",
    description: "Support each other through all of life's adventures.",
    icon: <Star className="w-6 h-6 text-love-400" />,
    image: "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const DreamsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="max-w-5xl mx-auto w-full">
      <h2 className="section-title text-center">Our Dreams</h2>
      <p className="section-subtitle">The beautiful future we're building together</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="order-2 md:order-1">
          {dreamsData.map((dream, index) => (
            <div 
              key={dream.id}
              className={`p-6 rounded-2xl mb-4 transition-all duration-500 cursor-pointer ${
                activeIndex === index 
                  ? 'glass-card border-love-400/30 transform scale-105' 
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-full bg-love-500/10">
                  {dream.icon}
                </div>
                <h3 className="text-xl font-semibold">{dream.title}</h3>
              </div>
              
              <p className="text-white/70 pl-14">{dream.description}</p>
            </div>
          ))}
        </div>
        
        <div className="order-1 md:order-2 relative h-[300px] md:h-full">
          {dreamsData.map((dream, index) => (
            <div 
              key={dream.id}
              className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ${
                activeIndex === index 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={dream.image} 
                alt={dream.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-semibold text-white">{dream.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DreamsSection;
