import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ categories, onCategoryClick }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    onCategoryClick(categoryName);
    navigate(`/videos/${categoryName}`);
  };

  return (
    <div className="home-page">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category._id}
            className="card"
            onClick={() => handleCategoryClick(category.category)}
          >
            <img src={category.thumbnail} alt={category.category} />
            <p>{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
