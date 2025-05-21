# Phishing Campaign Dashboard Application

## Overview

This is a React application for monitoring and managing phishing security campaigns. The dashboard provides visualization of phishing campaign metrics, security insights, and campaign management capabilities. It's built using a modern tech stack with React, Drizzle ORM, and a RESTful API architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React Application**: Single-page application built with React
- **Routing**: Using Wouter for lightweight client-side routing
- **State Management**: Uses React Query for server state management
- **UI Component Library**: Custom components built on top of Radix UI primitives with shadcn/ui styling patterns
- **Styling**: Tailwind CSS with a customized theme and CSS variables for design tokens

### Backend Architecture
- **Server**: Express.js server with API routes
- **Database Access**: Drizzle ORM for PostgreSQL database operations
- **API Design**: RESTful API endpoints for data operations
- **Authentication**: Planned but not fully implemented yet

### Data Model
- Uses Drizzle ORM schema with PostgreSQL
- Main entities include:
  - Users
  - Campaigns
  - Departments (for metrics)

## Key Components

### Frontend Components
1. **Dashboard**: Main view showing security metrics and campaign summaries
2. **Campaign Details**: Detailed view for individual phishing campaigns
3. **Layout Components**: 
   - Header with search and notifications
   - Sidebar for navigation
   - Mobile responsive menu
4. **UI Components**: Comprehensive UI component library based on Radix UI primitives

### Backend Components
1. **Express Server**: Handles HTTP requests and serves the SPA
2. **API Routes**: Endpoints for data operations
3. **Storage Layer**: Abstraction for database operations (currently using memory storage for development)
4. **Vite Integration**: Server-side integration with Vite for development

## Data Flow

1. **API Request Flow**:
   - Frontend makes requests to the API endpoints
   - Express server processes requests
   - Data is retrieved/stored via the database layer
   - Responses are returned as JSON

2. **Campaign Data Flow**:
   - Campaign metrics are fetched from the API
   - Data is transformed and displayed in charts and tables
   - User interactions update the UI state

3. **Authentication Flow** (planned):
   - Login credentials will be validated against stored user records
   - Sessions will be managed securely
   - Protected routes will require authentication

## External Dependencies

### Frontend Dependencies
- **React** and React DOM for UI
- **Wouter** for routing
- **Tanstack Query** (React Query) for data fetching
- **Radix UI** components for accessible UI primitives
- **Tailwind CSS** for styling
- **Clsx/cva** for conditional class names
- **Bootstrap Icons** for iconography

### Backend Dependencies
- **Express** for the web server
- **Drizzle ORM** for database operations
- **Zod** for validation (via Drizzle integration)
- **Neon Database** integration for PostgreSQL (serverless)

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Frontend: Vite builds the React application
   - Backend: ESBuild bundles the server code

2. **Environment Variables**:
   - `DATABASE_URL`: Required for database connection
   - `NODE_ENV`: Controls development/production behaviors

3. **Execution**:
   - Development: `npm run dev` runs the server with live reload
   - Production: `npm run start` runs the optimized build

4. **Database**:
   - The schema is defined in `shared/schema.ts`
   - Migrations can be run with `npm run db:push`

## Development Guidelines

1. **Component Structure**:
   - Maintain separation between UI components and business logic
   - Use the shared component library for consistent styling

2. **API Integration**:
   - Use React Query for data fetching and caching
   - Follow RESTful patterns for API endpoint organization

3. **Styling Approach**:
   - Use Tailwind utility classes for styling
   - Leverage the design system's color and spacing variables

4. **State Management**:
   - Use React Query for server state
   - Use React's built-in state management for UI state

5. **Database Operations**:
   - Define schemas in the shared directory
   - Use Drizzle's type-safe query builders