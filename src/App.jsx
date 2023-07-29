import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import VideoListingPage from './Pages/VideoListingPage';
import { VideoContext } from './contexts/VideoContext';
import { categories } from './Data/categories'; 
import Sidebar from './components/Sidebar'; 

const App = () => {
  // Define state and functions to manage video data here

  // Placeholder implementation of handleCategoryClick function
  const handleCategoryClick = (category) => {
    // Implement the logic for handling category click here
    // You can perform any action you need, such as updating the state, etc.
  };

  return (
    <Router>
      <Sidebar /> 
      <Routes>
        <Route
          path="/"
          element={<HomePage categories={categories} onCategoryClick={handleCategoryClick} />}
        />
        <Route
          path="/videos/:category"
          element={<VideoListingPage />}
        />
       
      </Routes>
    </Router>
  );
};

export default App;
