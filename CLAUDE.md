# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (preferred package manager is pnpm)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 application using the App Router with shadcn/ui components and a comprehensive theming system.

### Core Technologies
- **Next.js 15** with App Router and React 19
- **shadcn/ui** components with "new-york" style variant
- **TailwindCSS v4** with custom CSS variables for theming
- **next-themes** for theme switching (system/light/dark)
- **TypeScript** with strict configuration
- **pnpm** as package manager

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable components organized by category:
  - `ui/` - shadcn/ui components
  - `theme/` - Theme-related components
  - `layout/` - Header, Footer, navigation components
  - `buttons/` - Specialized button components
- `lib/` - Shared utilities (main utility is `cn` function for className merging)
- `hooks/` - Custom React hooks
- `utils/` - Standalone utilities like the custom logger

### Theming System
The app uses a sophisticated theming system:
- **CSS Variables**: All colors defined as CSS custom properties in `app/globals.css`
- **OKLCH Color Space**: Modern color definitions for better perceptual uniformity
- **Three Theme Modes**: System, light, and dark themes via next-themes
- **Theme Toggle**: Custom 3-button toggle component in header

### Key Features
- **Multiple Font Families**: Geist, JetBrains Mono, Silkscreen, Inter, Poppins, Space Grotesk
- **Custom CSS Utilities**: Helper classes like `.flex-center`, `.flex-center-col`, `.min-h-main`
- **Development Tools**: ViewportIndicator component shows only in development
- **Progress Bar**: Navigation progress indicator using @bprogress/next
- **Toast Notifications**: Sonner for user notifications
- **Custom Logger**: Development-friendly logger with boxed output and colors

### Component Patterns
- All components use TypeScript with proper typing
- shadcn/ui components are customized with project-specific styling
- Layout uses a flex-based structure with header, main content, and footer
- Theme provider wraps the entire application for consistent theming

### Development Notes
- Uses Turbopack for faster development builds
- ESLint configured with Next.js and TypeScript rules
- Custom TailwindCSS configuration with CSS variables integration
- Icons primarily from Lucide React
- Responsive design with mobile-first approach