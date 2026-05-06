import React from 'react';
import './HomeAbout.css';
import aboutImage from '../../../../assets/images/agency_workspace_hero.png';

const HomeAbout = () => {
  return (
    <section className="home-about-section">
      <div className="home-about-container">
        <div className="home-about-image-wrapper">
          <img 
            src={aboutImage} 
            alt="Our Digital Agency Workspace" 
            className="home-about-image" 
          />
        </div>
        <div className="home-about-content">
          <h4 className="home-about-subtitle gradient-text">Our Mission</h4>
          <h2 className="home-about-title">Solving Complex Digital Problems</h2>
          <p className="home-about-description">
            At OrangesWorld, we believe in the power of modern design and robust engineering to solve the most complex digital challenges. Our team of expert developers and UI/UX designers collaborate in a state-of-the-art workspace to craft high-quality, minimal, and professional solutions that elevate your brand's digital presence.
          </p>
          <ul className="home-about-list">
            <li><span className="check-icon">✓</span> Cutting-edge Web Technologies</li>
            <li><span className="check-icon">✓</span> User-Centric Design Philosophy</li>
            <li><span className="check-icon">✓</span> Scalable & Secure Architecture</li>
          </ul>
          <button className="home-about-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
