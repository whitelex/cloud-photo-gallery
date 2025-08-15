# ☁️ Cloud Photo Gallery

A simple and elegant web application to browse your photos. It features a responsive, multi-device friendly design for an optimal viewing experience on desktops, tablets, and mobile devices.

## ✨ Features

- **Responsive Design**: A fully responsive layout that looks great on any screen size.
- **Dynamic Photo Grid**: Displays photos in a clean, modern grid.
- **Image Modal Viewer**: Click on any photo to view a larger version in a sleek modal overlay with keyboard navigation (`Esc` to close).
- **Smooth Loading Experience**: Skeletons and animations provide a pleasant user experience while images are loading.
- **Error Handling**: Gracefully handles and displays errors if photos fail to load, with a retry option.
- **Modern Stack**: Built with React, TypeScript, Vite, and styled with Tailwind CSS for a professional and maintainable codebase.
- **Optimized for Production**: Uses Vite to compile and bundle all assets into optimized static files for maximum performance.

## 🚀 Tech Stack

- **React 18**: For building the user interface.
- **TypeScript**: For static typing and improved developer experience.
- **Vite**: For a fast development experience and optimized production builds.
- **Tailwind CSS**: For utility-first styling.

## ▶️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher is recommended)

### Local Development

1.  **Install Dependencies**: Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Start the development server**: This command starts the Vite dev server.
    ```bash
    npm run dev
    ```

3.  **Open your browser** and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 🚀 Deploying to Cloudflare Pages (or similar)

Deploying is now much simpler. You only need to provide a **build command** and specify the **build output directory**.

### Step-by-Step Instructions

1.  **Commit and Push Your Latest Code**: Make sure you have committed all the latest changes (including the new `vite.config.ts`, `src` directory, and updated `package.json`) and pushed them to your Git repository (GitHub, GitLab, etc.).
    ```bash
    git add .
    git commit -m "feat: Implement Vite build system"
    git push
    ```

2.  **Configure Your Cloudflare Pages Project**: In your project settings, use the following configuration:
    - **Build command**: `npm install && npm run build`
    - **Build output directory**: `dist`
    - **Leave any other fields blank** (like "Deploy command").

3.  **Save and Redeploy**.

---

## 🚨 Troubleshooting

### "My deployed site is a blank page!"

If you see a blank page after deploying and your build logs show a command like `shx cp -r ...` instead of Vite commands, it means your deployment service is using an **old version of your code**.

**Solution:** The most important step is to **push your latest code changes to your Git repository**. Your deployment platform can only build the code that you've pushed.

1.  Confirm all the new files (`vite.config.ts`, `src/`, etc.) are saved locally.
2.  Run `git status` to see your changes.
3.  Run the following commands to commit and push:
    ```bash
    git add .
    git commit -m "Update build process to Vite"
    git push
    ```
4.  Trigger a new deployment. The new logs should now show Vite running the build, and your site will work correctly.
