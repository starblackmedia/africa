import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpeg';

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Discover the Next Big Thing in Music</h1>
        <p className="hero-subtitle">Join our community of artists, fans, and influencers</p>
        <div className="hero-buttons">
          <Link to="/discover" className="discover-btn">Discover Music</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
