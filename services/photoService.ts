import { Photo } from '../types';

// --- Hardcoded Photo Data ---
// This file provides a hardcoded list of photo objects. For this demo, we are using
// placeholder images from picsum.photos. The links are static and pre-defined.
// This application is designed to be deployed as a static site on services like
// Cloudflare Pages.

export const fetchPhotosFromS3 = async (): Promise<Photo[]> => {
  const hardcodedPhotos: Photo[] = [
    { id: '1', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250613_172252.jpg', alt: '', width: 1000, height: 600 },
    { id: '2', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20241111_142855%20(1).jpg', alt: '', width: 1000, height: 600 },
    { id: '3', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20241111_162258%20(1).jpg', alt: '', width: 1000, height: 600 },
    { id: '4', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20241216_165243%20(1).jpg', alt: '', width: 1000, height: 600 },
    { id: '5', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250710_153256.jpg', alt: '', width: 1000, height: 600 },
    { id: '6', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250714_171136.jpg', alt: '', width: 1000, height: 600 },
    { id: '7', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250715_111215.jpg', alt: '', width: 1000, height: 600 },
    { id: '8', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250424_163212.jpg', alt: '', width: 1000, height: 600 },
    { id: '9', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250404_122156.jpg', alt: '', width: 1000, height: 600 },
    { id: '10', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250417_140007.jpg', alt: '', width: 1000, height: 600 },
    { id: '11', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250416_180338.jpg', alt: '', width: 1000, height: 600 },
    { id: '12', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250304_192622.jpg', alt: '', width: 1000, height: 600 },
    { id: '13', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20231214_183329.jpg', alt: '', width: 1000, height: 600 },
    { id: '14', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20231214_183338.jpg', alt: '', width: 1000, height: 600 },
    { id: '15', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20241122_135244.jpg', alt: '', width: 1000, height: 600 },
    { id: '16', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20240201_173254.jpg', alt: '', width: 1000, height: 600 },
    { id: '17', url: 'https://pub-73ed1ce74c3649779fab5923bbcef3c8.r2.dev/20250328_152337.jpg', alt: '', width: 1000, height: 600 }
  ];

  // The function is async to maintain the same signature as a real API call.
  // This allows the UI to handle loading states without modification if a real
  // data source is added later.
  return hardcodedPhotos;
};
