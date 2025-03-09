
import React, { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  message: string;
  coverImage?: string;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ 
  message,
  coverImage = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [percentScratched, setPercentScratched] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    // Set canvas dimensions
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Load and draw cover image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = coverImage;
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    
    // Variables for scratch effect
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    // Calculate scratched percentage
    const calculateScratchedPercentage = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparent = 0;
      let total = data.length / 4;
      
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 10) transparent++;
      }
      
      const percent = (transparent / total) * 100;
      setPercentScratched(percent);
      
      if (percent > 50 && !isScratched) {
        setIsScratched(true);
      }
    };
    
    // Event handlers for scratch effect
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      
      // Get coordinates
      let x, y;
      if ('touches' in e) {
        const touch = e.touches[0];
        x = touch.clientX - canvas.getBoundingClientRect().left;
        y = touch.clientY - canvas.getBoundingClientRect().top;
      } else {
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
      }
      
      lastX = x;
      lastY = y;
    };
    
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      
      // Get coordinates
      let x, y;
      if ('touches' in e) {
        const touch = e.touches[0];
        x = touch.clientX - canvas.getBoundingClientRect().left;
        y = touch.clientY - canvas.getBoundingClientRect().top;
      } else {
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
      }
      
      // Scratch effect
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.lineWidth = 40;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      
      lastX = x;
      lastY = y;
      
      // Calculate scratched percentage
      calculateScratchedPercentage();
    };
    
    const handleMouseUp = () => {
      isDrawing = false;
    };
    
    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    
    // Touch events
    canvas.addEventListener('touchstart', handleMouseDown);
    canvas.addEventListener('touchmove', handleMouseMove);
    canvas.addEventListener('touchend', handleMouseUp);
    
    // Clean up
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      
      canvas.removeEventListener('touchstart', handleMouseDown);
      canvas.removeEventListener('touchmove', handleMouseMove);
      canvas.removeEventListener('touchend', handleMouseUp);
    };
  }, [coverImage]);
  
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="section-title text-center">Secret Message</h2>
      <p className="section-subtitle">Scratch to reveal a special message from me to you</p>
      
      <div className="scratch-card relative rounded-2xl overflow-hidden" ref={containerRef}>
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-xl bg-love-gradient">
          <p className={`transition-opacity duration-500 ${isScratched ? 'opacity-100' : 'opacity-90'}`}>
            {message}
          </p>
        </div>
        <canvas ref={canvasRef} className="absolute inset-0 cursor-pointer"></canvas>
      </div>
      
      <p className="text-center mt-4 text-white/70">
        {isScratched ? 'Message revealed!' : `Scratch the card to reveal (${Math.round(percentScratched)}% complete)`}
      </p>
    </div>
  );
};

export default ScratchCard;
