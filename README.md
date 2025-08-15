# ☁️ Cloud Photo Gallery

A simple and elegant web application to browse your photos. It features a responsive, multi-device friendly design for an optimal viewing experience on desktops, tablets, and mobile devices.

## ✨ Features

- **Responsive Design**: A fully responsive layout that looks great on any screen size.
- **Dynamic Photo Grid**: Displays photos in a clean, modern grid.
- **Image Modal Viewer**: Click on any photo to view a larger version in a sleek modal overlay with keyboard navigation (`Esc` to close).
- **Smooth Loading Experience**: Skeletons and animations provide a pleasant user experience while images are loading.
- **Error Handling**: Gracefully handles and displays errors if photos fail to load, with a retry option.
- **Modern Stack**: Built with React, TypeScript, and styled with Tailwind CSS for a professional and maintainable codebase.
- **Static & Fast**: Built as a static site with hardcoded data for maximum performance and easy deployment on platforms like Cloudflare Pages.

## 🚀 Tech Stack

- **React 19**: For building the user interface.
- **TypeScript**: For static typing and improved developer experience.
- **Tailwind CSS**: For utility-first styling.
- **Zero Build**: Uses ES modules directly in the browser via `esm.sh` CDN for ultimate simplicity.

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

This project is a static web application and requires no build step.

### Local Development

1.  **Open your terminal** in the project's root directory.

2.  **Serve the files** using a simple local web server. If you have Node.js installed, you can use `npx serve`:
    ```bash
    npx serve
    ```

3.  **Open your browser** and navigate to the URL provided by the server (usually `http://localhost:3000`).

## 🚀 Deploying to Cloudflare Pages

This application is optimized for deployment on static hosting platforms like [Cloudflare Pages](https://pages.cloudflare.com/).

1.  **Push your code** to a GitHub or GitLab repository.
2.  **Create a new project** on the Cloudflare Pages dashboard.
3.  **Connect your repository** to the Cloudflare project.
4.  **Configure the build settings**:
    - **Build command**: Leave this blank.
    - **Build output directory**: Set this to `/` (or the root of your project).
5.  **Deploy!** Cloudflare Pages will automatically deploy your site and update it whenever you push new changes to your repository.
