# Next.js 14 TypeScript Template

A clean, modern starter template for Next.js 14 with TypeScript, TailwindCSS, Zustand, react-hot-toast, shadcn/ui, Zod, Lucide, next-themes, Roboto, Prettier, and ESLint.

## Features

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS (with centralized styles in `src/styles/`)
- Zustand for global state management
- react-hot-toast for global, reusable notifications
- shadcn/ui components
- Zod for validation
- Lucide for icons
- next-themes for dark mode
- Roboto font (all weights) globally
- Prettier & ESLint
- Robust featured-fetch utility
- Global styles, components, hooks, utils, types, constants
- Common layout, error, loading, and typography components
- Easy environment variable management with Zod
- Dynamic routes and custom 404 page
- Single Responsibility Principle (SRP) structure

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and update values as needed.
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Project Structure

- `src/app/` - App routes, layouts, and pages (including dynamic routes)
- `src/components/` - Global components (Typography, Header, Footer, Providers, etc.)
- `src/hooks/` - Global hooks (theme, localStorage, react-hot-toast, etc.)
- `src/store/` - Zustand global state store
- `src/utils/` - Utilities (featured-fetch, logger, localStorage, react-hot-toast, etc.)
- `src/types/` - Global types
- `src/constants/` - Global constants
- `src/styles/` - Centralized global styles (Tailwind, fonts)
- `public/` - Static assets

## Customization

- Add your own components, hooks, and utilities as needed.
- Use shadcn/ui components as required. Notifications are handled globally with react-hot-toast utilities and hooks.
- Use Zustand for global state, and the provided hooks/utils for localStorage and notifications.
- Use Zod for form and API validation.
