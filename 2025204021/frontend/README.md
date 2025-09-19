# Notes App Frontend

A simple React application for managing notes with full CRUD operations.

## What I Built

This is a clean, minimal notes app that lets you:

- Create new notes with title and content
- View all your notes in a nice grid layout  
- Edit existing notes by clicking the edit button
- Delete notes with a confirmation prompt
- Real-time updates - everything syncs with the backend instantly

## Tech Stack

- React 19 with hooks for state management
- Vite for fast development and building
- Axios for API calls to the backend
- CSS Grid for responsive layout
- Express backend with MongoDB (CORS enabled)

## How to Run

1. Start the backend first:
   ```bash
   cd ../backend
   npm start
   ```

2. Then start the frontend:
   ```bash
   npm run dev
   ```

3. Open your browser: http://localhost:5173

## Features

- Form validation - Won't let you create empty notes
- Loading states - Shows feedback while saving/loading
- Error handling - Displays helpful error messages
- Responsive design - Works on mobile and desktop
- Clean UI - Simple, easy-to-use interface

The app connects to the backend at http://localhost:5001 and handles all the API communication automatically. Just start both servers and you're good to go!
