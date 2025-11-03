import React from 'react';
import './About.css';
import { assets } from '../../assets/frontend_assets/assets';

const About = () => {
  return (
    <div className="aboutus-container" id="about">
      <h1>About Us</h1>
      <p className="intro-text">
        Welcome to the Canteen Pre-Order System! Our mission is to reduce wait times, improve canteen efficiency, and provide students with a smooth food-ordering experience.
      </p>
      
      <div className="developers-section">
        <div className="developer-card">
          <img src={assets.naureen} alt="Naureen Khan" className="developer-image" />
          <h2>Naureen Khan</h2>
          <p>Roll No: 23AI04</p>
          <p>
            Naureen  focused on the backend logic and helped integrate the ordering system for real-time efficiency and performance.
          </p>
        </div>

        <div className="developer-card">
          <img src={assets.mariya} alt="Mariya Shaikh" className="developer-image" />
          <h2>Mariya Shaikh</h2>
          <p>Roll No: 23AI12</p>
          <p>
            Mariya is passionate about building user-friendly applications and handled the front-end design and UX of this system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
