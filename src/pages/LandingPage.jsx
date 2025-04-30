import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Create this CSS file for styling

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p className="tagline">Bringing nature's beauty to your home</p>
          <button 
            className="get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Our Nursery</h2>
        <p>
          At Paradise Nursery, we believe every home deserves a touch of green. 
          Since 2010, we've been providing the highest quality houseplants to 
          plant enthusiasts across the country. Our plants are sustainably grown 
          and carefully selected to thrive in your living space.
        </p>
        <p>
          Whether you're looking for air-purifying plants, low-maintenance 
          succulents, or exotic tropical varieties, we have something for 
          every plant lover.
        </p>
      </div>

      <div className="featured-plants">
        <h2>Popular Categories</h2>
        <div className="plant-categories">
          <div className="category-card">
            <div className="category-icon">🌿</div>
            <h3>Air Purifying</h3>
            <p>Plants that clean your air naturally</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🌵</div>
            <h3>Low Maintenance</h3>
            <p>Perfect for busy plant parents</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🌸</div>
            <h3>Flowering</h3>
            <p>Add color to your space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;