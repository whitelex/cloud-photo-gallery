
import { Photo } from '../types';

// --- MOCK SERVICE ---
// This function simulates fetching a list of image objects from an AWS S3 bucket.
// In a real-world application, this would involve using the AWS SDK to list
// objects in a bucket and return their URLs.
// For this demo, we are using placeholder images from picsum.photos to provide
// a functional and visually appealing gallery without needing real AWS credentials.

export const fetchPhotosFromS3 = async (): Promise<Photo[]> => {
  console.log('Fetching photos from mock S3 service...');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Mock data representing files in an S3 bucket
  const mockPhotos: Photo[] = [
    { id: '1', url: 'https://picsum.photos/id/1018/1000/600', alt: 'A path leading into a misty, mountainous forest.', width: 1000, height: 600 },
    { id: '2', url: 'https://picsum.photos/id/1015/1000/600', alt: 'A person standing on a rock looking at a serene lake and mountains.', width: 1000, height: 600 },
    { id: '3', url: 'https://picsum.photos/id/1025/1000/600', alt: 'A cute pug dog wrapped in a blanket.', width: 1000, height: 600 },
    { id: '4', url: 'https://picsum.photos/id/1040/1000/600', alt: 'A vibrant cityscape at dusk with light trails from traffic.', width: 1000, height: 600 },
    { id: '5', url: 'https://picsum.photos/id/1041/1000/600', alt: 'A calm ocean with waves gently crashing on the shore.', width: 1000, height: 600 },
    { id: '6', url: 'https://picsum.photos/id/1043/1000/600', alt: 'A close-up of a bright yellow sunflower.', width: 1000, height: 600 },
    { id: '7', url: 'https://picsum.photos/id/1050/1000/600', alt: 'A winding road through a desert landscape.', width: 1000, height: 600 },
    { id: '8', url: 'https://picsum.photos/id/106/1000/600', alt: 'A solitary tree in a field of snow.', width: 1000, height: 600 },
    { id: '9', url: 'https://picsum.photos/id/1074/1000/600', alt: 'A collection of colorful books on a shelf.', width: 1000, height: 600 },
    { id: '10', url: 'https://picsum.photos/id/1080/1000/600', alt: 'A golden retriever puppy playing in the grass.', width: 1000, height: 600 },
    { id: '11', url: 'https://picsum.photos/id/20/1000/600', alt: 'Fog rolling over a coastal landscape.', width: 1000, height: 600 },
    { id: '12', url: 'https://picsum.photos/id/219/1000/600', alt: 'A hot air balloon festival with many balloons in the sky.', width: 1000, height: 600 },
  ];

  // Randomly throw an error to test error handling UI
  // if (Math.random() > 0.8) {
  //   throw new Error("Mock API Error: Could not connect to S3.");
  // }

  return mockPhotos;
};
