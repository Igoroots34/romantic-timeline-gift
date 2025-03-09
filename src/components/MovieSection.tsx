
import React, { useState } from 'react';
import { Film, Play, Star } from 'lucide-react';

// Sample movie data - replace with your favorite movies
const movieData = [
  {
    id: 1,
    title: "The Notebook",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: 2004,
    rating: 4.8
  },
  {
    id: 2,
    title: "La La Land",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: 2016,
    rating: 4.7
  },
  {
    id: 3,
    title: "About Time",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: 2013,
    rating: 4.6
  },
  {
    id: 4,
    title: "Before Sunrise",
    image: "https://images.unsplash.com/photo-1611063154155-3073be9c7373?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    year: 1995,
    rating: 4.9
  }
];

const MovieSection: React.FC = () => {
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  
  return (
    <div className="max-w-6xl mx-auto w-full">
      <h2 className="section-title text-center">Movie Night</h2>
      <p className="section-subtitle">Our favorite films for the perfect date night</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <div 
            key={movie.id}
            className="movie-card glass-card"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <img 
              src={movie.image} 
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              style={{
                transform: hoveredMovie === movie.id ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            
            <div className="movie-overlay">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              
              <div className="flex justify-between items-center">
                <span className="text-white/70 text-sm">{movie.year}</span>
                
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white/90 text-sm">{movie.rating}</span>
                </div>
              </div>
              
              {hoveredMovie === movie.id && (
                <button className="mt-4 w-full flex items-center justify-center py-2 px-4 bg-love-500/90 hover:bg-love-500 rounded-lg text-white transition-all">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Together
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
