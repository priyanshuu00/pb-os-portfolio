# PB OS - Personal Portfolio

A unique, interactive personal portfolio website designed as a web-based operating system. Built with modern web technologies, this project simulates a futuristic desktop environment to showcase projects, experience, achievements, and contact information.

## Features

- **Interactive Desktop Interface:** A familiar, yet futuristic OS environment complete with drag-and-drop windows, minimization, and active taskbar functionality.
- **Custom Boot Sequence:** A realistic system initialization boot screen (with skipped navigation capability and reduced-motion support).
- **Responsive Window Management:** Fully resizable windows (8-direction resizing) and flexible window layering (z-index) that accurately simulates a real desktop.
- **Terminal Emulator:** A fully functional terminal UI with interactive commands (`help`, `about`, `contact`, `github`, `echo`, `clear`, etc.). 
- **Optimized & Responsive:** Carefully crafted CSS to ensure layout integrity and consistent visual rhythms from desktop down to mobile viewports. No global scrollbars; everything is contained within the OS simulation.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** Custom CSS + Tailwind CSS v4
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/priyanshuu00/your-repo-name.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd your-repo-name
   ```

3. **Install dependencies:**
   This project uses `pnpm`.
   ```bash
   pnpm install
   ```
   *(Alternatively, use `npm install` or `yarn install` if preferred).*

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the PB OS environment in action.

## Deployment

This is a static-ready Next.js application, which means it can be deployed easily with zero configuration on platforms like **Vercel** or **Netlify**.

To create an optimized production build manually:
```bash
pnpm build
```

## Structure

- `app/page.tsx` - The core entry point containing the desktop grid, taskbar, boot sequence logic, and window manager state.
- `app/globals.css` - Custom CSS containing the OS window styles, taskbar gradients, desktop grid layout, and terminal aesthetics.
- `public/` - Contains all static assets including the background video, profile pictures, and project images.

## Contact

- **GitHub:** [@priyanshuu00](https://github.com/priyanshuu00)
- **LinkedIn:** [Priyanshu Bhatt](https://www.linkedin.com/in/priyanshu-bhatt-1b00b6321/)
