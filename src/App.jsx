import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import VideoListingPage from './Pages/VideoListingPage';
import { categories } from './Data/categories';
import Sidebar from './components/Sidebar';
import { videos } from './Data/videos';
import SingleVideoPage from './Pages/SingleVideoPage';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<HomePage categories={categories} onCategoryClick={handleCategoryClick} />}
            />
            <Route
              path="/videos/:category"
              element={<VideoListingPage videos={videos} selectedCategory={selectedCategory} />}
            />
            <Route
              path="/videos/:videoId"
              element={<SingleVideoPage videos={videos} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
