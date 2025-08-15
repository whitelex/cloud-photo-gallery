# ☁️ Cloud Photo Gallery

A simple and elegant web application to browse your photos. It features a responsive, multi-device friendly design for an optimal viewing experience on desktops, tablets, and mobile devices.

## ✨ Features

- **Responsive Design**: A fully responsive layout that looks great on any screen size.
- **Dynamic Photo Grid**: Displays photos in a clean, modern grid.
- **Image Modal Viewer**: Click on any photo to view a larger version in a sleek modal overlay with keyboard navigation (`Esc` to close).
- **Smooth Loading Experience**: Skeletons and animations provide a pleasant user experience while images are loading.
- **Error Handling**: Gracefully handles and displays errors if photos fail to load, with a retry option.
- **Modern Stack**: Built with React, TypeScript, and styled with Tailwind CSS for a professional and maintainable codebase.
- **Static & Fast**: A simple build process bundles the static files for maximum performance and easy deployment on platforms like Cloudflare Pages.

## 🚀 Tech Stack

- **React 19**: For building the user interface.
- **TypeScript**: For static typing and improved developer experience.
- **Tailwind CSS**: For utility-first styling.
- **Zero Build (in development)**: Uses ES modules directly in the browser via `esm.sh` CDN for a fast development loop.
- **Wrangler**: For local development and Cloudflare integration.

## 📂 Project Structure

```
.
├── components/          # Reusable React components
├── services/            # Data fetching logic
├── dist/                # Build output directory
├── .gitignore           # Specifies intentionally untracked files to ignore
├── App.tsx              # Main application component
├── index.html           # HTML entry point
├── index.tsx            # React root renderer
├── metadata.json        # Application metadata
├── package.json         # Project definition and scripts
├── README.md            # This file
├── types.ts             # Shared TypeScript types
└── wrangler.toml        # Wrangler configuration for Cloudflare Pages
```

## ▶️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (Cloudflare's command-line tool)

### Local Development

1.  **Install Dependencies**: Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Start the development server**: This command tells Wrangler to serve your project files directly.
    ```bash
    npm run dev
    ```

3.  **Open your browser** and navigate to the URL provided by Wrangler (usually `http://localhost:8788`).

## 🚀 Deploying to Cloudflare Pages

This application is configured with a build step, making it easy to deploy to [Cloudflare Pages](https://pages.cloudflare.com/) via the recommended Git-integration.

### Step-by-Step Instructions

1.  **Push your code** to a GitHub or GitLab repository.
2.  **Log in** to your Cloudflare dashboard and navigate to **Workers & Pages**.
3.  Click **Create application** > **Pages** > **Connect to Git**.
4.  **Select your repository** and begin setup.
5.  **Configure the build settings** as follows:
    - **Framework preset**: Select `None`.
    - **Build command**: `npm install && npm run build`
    - **Build output directory**: `dist`
6.  **Save and Deploy!**

Cloudflare will now install dependencies, run the build script, and deploy the contents of the `dist` directory. Any future `git push` to your connected branch will trigger a new deployment.
