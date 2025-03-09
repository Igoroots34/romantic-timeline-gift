
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  caption?: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ imageUrl, isOpen, onClose, caption }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl animate-scale-in"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        <img
          src={imageUrl}
          alt={caption || "Gallery image"}
          className="object-contain max-h-[80vh] w-auto"
        />
        
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-center">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
