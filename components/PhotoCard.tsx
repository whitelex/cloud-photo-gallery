
import React, { useState } from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onSelect }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="group aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={() => onSelect(photo)}
    >
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
        )}
        <img
          src={photo.url}
          alt={photo.alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
            isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          } group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      </div>
    </div>
  );
};

export default PhotoCard;
