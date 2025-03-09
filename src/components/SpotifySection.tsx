
import React, { useState } from 'react';
import { Music, Play, Pause, Heart } from 'lucide-react';

// Sample playlist data - replace with your actual songs
const playlistData = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    duration: "4:23",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    duration: "4:29",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "At Last",
    artist: "Etta James",
    duration: "2:59",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    duration: "3:02",
    cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    duration: "4:41",
    cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const SpotifySection: React.FC = () => {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const [likedTracks, setLikedTracks] = useState<number[]>([]);
  
  const togglePlay = (trackId: number) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };
  
  const toggleLike = (trackId: number) => {
    if (likedTracks.includes(trackId)) {
      setLikedTracks(likedTracks.filter(id => id !== trackId));
    } else {
      setLikedTracks([...likedTracks, trackId]);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="section-title text-center">Our Playlist</h2>
      <p className="section-subtitle">The soundtrack of our love story</p>
      
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-love-500/30 rounded-xl flex items-center justify-center mr-4">
            <Music className="w-8 h-8 text-love-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Love Songs Playlist</h3>
            <p className="text-white/70 text-sm">Created with love for you</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {playlistData.map(track => (
            <div 
              key={track.id}
              className="flex items-center p-3 hover:bg-white/5 rounded-lg transition-all"
            >
              <div 
                className="w-12 h-12 relative mr-4 rounded-md overflow-hidden flex-shrink-0"
                style={{ backgroundImage: `url(${track.cover})`, backgroundSize: 'cover' }}
              >
                <button 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                  onClick={() => togglePlay(track.id)}
                >
                  {playingTrack === track.id ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
              
              <div className="flex-grow min-w-0">
                <p className="text-base font-medium truncate">{track.title}</p>
                <p className="text-white/60 text-sm truncate">{track.artist}</p>
              </div>
              
              <div className="flex items-center">
                <button 
                  className="mr-4"
                  onClick={() => toggleLike(track.id)}
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedTracks.includes(track.id) 
                        ? 'fill-love-500 text-love-500' 
                        : 'text-white/60 hover:text-white/90'
                    } transition-all`}
                  />
                </button>
                <span className="text-white/60 text-sm">{track.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center mt-6 text-white/70">
        Press play to hear the songs that make me think of you
      </p>
    </div>
  );
};

export default SpotifySection;
