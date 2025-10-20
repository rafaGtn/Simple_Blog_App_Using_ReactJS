# Simple Blog App Using ReactJS

A simple blog application built with React, featuring blog posts, comments, and likes functionality.

# YOU CAN VISIT WEB SITE WITH THIS LINK 
https://simple-blog-app-using-react-js.vercel.app/

## 🚀 Features

- **Home Page**: Welcome page with a list of recent blog posts
- **Post Page**: Detailed view of individual blog posts with:
  - Full post content
  - Like button (with Redux state management)
  - Add comments functionality
- **About Page**: Information about the blog
- **Navigation**: Seamless routing between pages using React Router

## 🛠️ Technologies Used

- **React** (v19.1.1) - UI library
- **React Router DOM** (v7.9.4) - Navigation and routing
- **Redux Toolkit** (v2.9.1) - State management for likes
- **Vite** (v7.1.7) - Build tool and dev server

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx                 # Main app component with routes
├── main.jsx               # App entry point with Redux Provider
├── assets/
│   └── data.json          # Blog posts data
├── components/
│   ├── AppButton/         # Reusable button component
│   ├── AppHeader/         # Navigation header
│   ├── AppPost/           # Post card component (uses Redux)
│   └── Comments.jsx       # Comments display component
├── Pages/
│   ├── Home/              # Home page
│   ├── Post/              # Individual post page
│   └── About/             # About page
├── redux/
│   └── slices/
│       └── postsSlice.js  # Redux slice for likes management
└── store/
    └── store.js           # Redux store configuration
```

## ✨ Key Features Implementation

### 1. Like Functionality (Redux)

- Likes are managed using **Redux Toolkit**
- Each post can be liked/unliked
- Like state persists across navigation
- Redux store keeps track of liked posts

### 2. Comments (useState)

- Users can add comments on post pages
- Comments are managed with React `useState` hook
- Each comment shows author and text

### 3. Routing (React Router)

- Home page at `/`
- Individual post pages at `/post/:id`
- About page at `/about`
- Smooth navigation without page reloads

## 🎯 Evaluation Criteria Coverage

✅ **Project Setup & Git**

- Git repository created
- All dependencies in package.json
- Clean project structure

✅ **Pages & Routing**

- Home, Post, and About pages implemented
- React Router configured
- Seamless navigation

✅ **Functionality**

- ✅ Add comments feature
- ✅ Like posts feature
- ✅ Navigation without reloading

✅ **React Best Practices**

- One component per file
- Proper use of props and state
- useState and useEffect hooks
- Semantic HTML tags
- Responsive to user interactions

## 🔧 How It Works

### Redux for Likes

When user clicks like button:

1. `toggleLike` action is dispatched
2. Redux updates the state
3. UI automatically reflects the change
4. Like status persists across pages

### Comments with useState

Comments are managed locally in each PostPage component using React's built-in state management.

## 🌐 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

This project demonstrates:

- React fundamentals
- Routing with React Router
- State management (Redux + useState)
- Component-based architecture
- User interactions


## 👨‍💻 Author

Rafkat Gatin
