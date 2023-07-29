import React from 'react';
import './HomePage.css'; 

const HomePage = ({ categories, onCategoryClick }) => {
  return (
    <div className="home-page">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category._id} className="card" onClick={() => onCategoryClick(category._id)}>
            <img src={category.thumbnail} alt={category.category} />
            <p>{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
