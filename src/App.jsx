import { useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Home/HomePage.jsx";
import PostPage from "./Pages/Post/PostPage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";

function App() {

  return (
    <>
      <AppHeader />
      <div style={{maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes> 
      </div>
    </>
  );
}

export default App;
