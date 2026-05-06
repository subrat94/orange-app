import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About';
import ContactUs from '../pages/ContactUs/ContactUs';
import Career from '../pages/Career/Career';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
};

export default AppRoutes;
