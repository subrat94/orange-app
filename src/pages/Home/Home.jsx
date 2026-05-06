import React from 'react';
import BannerSlider from './components/BannerSlider/BannerSlider';
import HomeAbout from './components/HomeAbout/HomeAbout';

const Home = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      {/* We removed the 3D orange and long scrolling sections 
          to focus purely on the attractive interactive banner slider! */}
      <BannerSlider />
      <HomeAbout />
    </div>
  );
};

export default Home;
