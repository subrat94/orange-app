import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Particles from "react-tsparticles";
import { loadSlim } from "@tsparticles/slim";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BannerSlider.css';

const BannerSlider = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="banner-slider-container">
      {/* Floating Oranges/Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              resize: true,
            },
            modes: {
              bubble: { distance: 250, size: 10, duration: 2, opacity: 1 },
            },
          },
          particles: {
            color: { value: ["#ff9800", "#ffb74d", "#ff5722"] },
            links: {
              enable: false,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { 
              value: { min: 0.3, max: 0.7 },
              animation: { enable: true, speed: 1, minimumValue: 0.3 }
            },
            shape: { type: "circle" },
            size: { 
              value: { min: 2, max: 8 },
              animation: { enable: true, speed: 2, minimumValue: 2 }
            },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        speed={1000}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content-wrapper">
            <div className="slide-text">
              <h3 className="slide-subtitle gradient-text">Premium Experience</h3>
              <h1 className="slide-title">Welcome to OrangesWorld</h1>
              <p className="slide-description">Explore our digital ecosystem where vibrant citrus meets modern web technology.</p>
              <button className="slide-button">Get Started</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content-wrapper">
            <div className="slide-text">
              <h3 className="slide-subtitle gradient-text">Vibrant Quality</h3>
              <h1 className="slide-title">Unmatched Refreshment</h1>
              <p className="slide-description">We craft solutions that are as refreshing as a cold glass of orange juice.</p>
              <button className="slide-button">Learn More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content-wrapper">
            <div className="slide-text">
              <h3 className="slide-subtitle gradient-text">Organic Growth</h3>
              <h1 className="slide-title">Scale Naturally</h1>
              <p className="slide-description">Grow your digital presence with tools designed for organic engagement.</p>
              <button className="slide-button">Join Us</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
