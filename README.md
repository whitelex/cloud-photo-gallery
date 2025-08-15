# ☁️ Cloud Photo Gallery

A simple and elegant web application to browse your photos stored in the cloud. It features a responsive, multi-device friendly design for an optimal viewing experience on desktops, tablets, and mobile devices.

## ✨ Features

- **Responsive Design**: A fully responsive layout that looks great on any screen size.
- **Dynamic Photo Grid**: Fetches and displays photos in a clean, modern grid.
- **Image Modal Viewer**: Click on any photo to view a larger version in a sleek modal overlay with keyboard navigation (`Esc` to close).
- **Smooth Loading Experience**: Skeletons and animations provide a pleasant user experience while images are loading.
- **Error Handling**: Gracefully handles and displays errors if photos fail to load, with a retry option.
- **Modern Stack**: Built with React, TypeScript, and styled with Tailwind CSS for a professional and maintainable codebase.
- **Simulated Backend**: Includes a mock service that simulates fetching photos from an AWS S3 bucket, making it easy to integrate with a real backend.

## 🚀 Tech Stack

- **React 19**: For building the user interface.
- **TypeScript**: For static typing and improved developer experience.
- **Tailwind CSS**: For utility-first styling.
- **No Build Step**: Uses ES modules directly in the browser via `esm.sh` CDN for simplicity.

## 📂 Project Structure

The project is organized into several key directories:

```
.
├── components/          # Reusable React components
│   ├── Header.tsx
│   ├── PhotoCard.tsx
│   ├── PhotoGrid.tsx
│   ├── PhotoModal.tsx
│   └── Spinner.tsx
├── services/            # Data fetching logic
│   └── photoService.ts
├── App.tsx              # Main application component
├── index.html           # HTML entry point
├── index.tsx            # React root renderer
├── metadata.json        # Application metadata
└── types.ts             # Shared TypeScript types
```

## ▶️ Getting Started

This project is set up to run directly in the browser without a complex build process.

### Prerequisites

You just need a modern web browser. No `npm install` is required.

### Running the Application

To run this project, you need to serve the files using a simple local web server.

1.  **Open your terminal** in the project's root directory.

2.  **Use a simple HTTP server**. If you have Node.js installed, you can use `npx serve`:
    ```bash
    npx serve
    ```

3.  **Open your browser** and navigate to the URL provided by the server (usually `http://localhost:3000`).

That's it! The photo gallery should now be running.

## 🔧 Configuration

The application currently uses a mock service to simulate fetching photos from an AWS S3 bucket.

To connect to a real S3 bucket, you will need to modify the `fetchPhotosFromS3` function in `services/photoService.ts`. This would typically involve:
1.  Setting up the AWS SDK for JavaScript (v3).
2.  Configuring your AWS credentials securely.
3.  Implementing the logic to list objects in your S3 bucket and generate URLs for them.
