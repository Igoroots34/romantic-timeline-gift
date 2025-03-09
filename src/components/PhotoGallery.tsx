
import React, { useState } from 'react';
import PhotoModal from './PhotoModal';

// Sample photo data - replace with your actual photos
const galleryPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Our first vacation together"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1539758462369-43adaa19bc1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Weekend getaway"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Coffee date"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1523371020170-5fb0da80ba3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Sunset strolls"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540206351-8eb36dfd96ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "That concert we loved"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Just another perfect day"
  }
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryPhotos)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (photo: (typeof galleryPhotos)[0]) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="section-title text-center">Our Memories</h2>
      <p className="section-subtitle">Every picture tells a story of our love</p>
      
      <div className="gallery-grid">
        {galleryPhotos.map(photo => (
          <div 
            key={photo.id} 
            className="gallery-item animate-fade-in" 
            onClick={() => openModal(photo)}
          >
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm md:text-base">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      <PhotoModal 
        imageUrl={selectedPhoto?.url || ''} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        caption={selectedPhoto?.caption}
      />
    </div>
  );
};

export default PhotoGallery;
