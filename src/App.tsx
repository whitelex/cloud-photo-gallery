import React, { useState, useEffect, useCallback } from 'react';
import { Photo } from './types';
import { fetchPhotosFromS3 } from './services/photoService';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const loadPhotos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedPhotos = await fetchPhotosFromS3();
      setPhotos(fetchedPhotos);
    } catch (err) {
      setError('Failed to fetch photos. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-400 bg-red-900/20 p-4 rounded-lg">
          <p>{error}</p>
          <button
            onClick={loadPhotos}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    if (photos.length === 0) {
      return (
        <div className="text-center text-gray-400">
          <p>No photos found in the gallery.</p>
        </div>
      );
    }

    return <PhotoGrid photos={photos} onPhotoSelect={handleSelectPhoto} />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
