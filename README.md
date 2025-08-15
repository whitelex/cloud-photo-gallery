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
- **Wrangler**: For local development and Cloudflare integration.

## 📂 Project Structure

```
.
├── components/          # Reusable React components
├── services/            # Data fetching logic
├── App.tsx              # Main application component
├── index.html           # HTML entry point
├── index.tsx            # React root renderer
├── metadata.json        # Application metadata
├── README.md            # This file
├── types.ts             # Shared TypeScript types
└── wrangler.toml        # Wrangler configuration for Cloudflare Pages
```

## ▶️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (Cloudflare's command-line tool)

### Local Development

1.  **Install Wrangler**: If you don't have it, install it globally.
    ```bash
    npm install -g wrangler
    ```

2.  **Start the development server**: Run the following command from your project root. This tells Wrangler to serve your static files from the current directory (`.`).
    ```bash
    wrangler pages dev .
    ```

3.  **Open your browser** and navigate to the URL provided by Wrangler (usually `http://localhost:8788`).

## 🚀 Deploying to Cloudflare Pages

This application is a static site, making deployment to [Cloudflare Pages](https://pages.cloudflare.com/) extremely simple via the recommended Git-integration.

### Step-by-Step Instructions

1.  **Push your code** to a GitHub or GitLab repository.
2.  **Log in** to your Cloudflare dashboard and navigate to **Workers & Pages**.
3.  Click **Create application** > **Pages** > **Connect to Git**.
4.  **Select your repository** and begin setup.
5.  **Configure the build settings** as follows:
    - **Framework preset**: Select `None`.
    - **Build command**: **LEAVE THIS BLANK**. This is the most important step.
    - **Build output directory**: Set this to `.` (a single dot, representing the root directory).
6.  **Save and Deploy!**

Cloudflare will now deploy your site. Any future `git push` to your connected branch will trigger a new deployment.

### 🚨 Troubleshooting: "Missing entry-point" Error

If your deployment fails with an error like `Missing entry-point to Worker script or to assets directory`, it is because you have entered a command (like `npx wrangler deploy`) into the **Build command** field in your Cloudflare Pages settings.

**Solution**: Go to your project's settings in the Cloudflare Pages dashboard (`Settings` > `Builds & deployments`) and **clear the Build command field**. Your project is a static site and does not require a build command.
