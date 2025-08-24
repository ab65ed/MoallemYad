# Memorial Website Project

## Overview

This is a Persian memorial website built as a full-stack application to honor and commemorate a beloved teacher. The site features a comprehensive tribute structure with multiple themed sections including "Blackboard," "Arena," "Canvas," "Guide," "Cafe," "Mirror," "Final," and "Gallery." The application is designed as a bilingual (Persian RTL) memorial platform with a modern, respectful aesthetic using a blue, gold, and cream color scheme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with dedicated pages for each memorial section
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom Persian/RTL support and memorial-themed color palette
- **State Management**: TanStack Query (React Query) for server state management
- **Typography**: Vazirmatn Persian font with fallback to standard web fonts

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js server with custom middleware for logging and error handling
- **Development**: Development/production mode separation with Vite integration for HMR
- **Storage Interface**: Abstract storage layer with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API design with `/api` prefix routing

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) with UUID primary keys and user authentication schema
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Current State**: In-memory storage implementation with database-ready interface

### Authentication and Authorization
- **Schema**: User table with username/password fields using Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Security**: Prepared for secure password hashing and session-based authentication

### Build and Development
- **Build System**: Vite for frontend bundling with esbuild for server-side compilation
- **Development Server**: Integrated Vite dev server with Express backend proxy
- **TypeScript**: Strict TypeScript configuration with path mapping for clean imports
- **Asset Management**: Vite-based asset handling with custom alias resolution

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js TypeScript execution (tsx)
- **Build Tools**: Vite, esbuild, TypeScript compiler

### UI and Styling
- **Component Library**: Radix UI primitives (30+ components)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Design System**: shadcn/ui components with class-variance-authority
- **Utilities**: clsx for conditional classes, date-fns for date handling

### Database and ORM
- **Database**: Neon Database (PostgreSQL serverless)
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Store**: connect-pg-simple for PostgreSQL session management

### Development and Quality
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Development**: Replit-specific plugins for enhanced development experience
- **Error Handling**: Runtime error overlay for development debugging

### Additional Utilities
- **UI Enhancements**: Embla Carousel, Command palette (cmdk)
- **ID Generation**: nanoid for unique identifiers
- **Type Safety**: Comprehensive TypeScript support across full stack