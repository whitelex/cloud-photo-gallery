
import React, { useEffect, useState } from 'react';
import { Photo } from '../types';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Match animation duration
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationClass = isClosing ? 'opacity-0' : 'opacity-100';
  const imageAnimationClass = isClosing ? 'scale-95' : 'scale-100';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${animationClass}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] transition-transform duration-300 ${imageAnimationClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.url}
          alt={photo.alt}
          className="object-contain w-full h-full max-h-[90vh] rounded-lg shadow-2xl"
        />
        <p className="absolute bottom-0 left-0 w-full p-4 text-center bg-black/50 text-white text-sm md:text-base">
          {photo.alt}
        </p>
      </div>
      
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
        aria-label="Close photo view"
      >
        <CloseIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PhotoModal;
