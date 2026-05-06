import React from 'react';
import './About.css';
import aboutOffice from '../../assets/images/about_office_banner.png';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="gradient-text">Who We Are</h1>
          <p>
            At OrangesWorld, we are passionate about bringing the freshest and most vibrant citrus experiences to the digital space. We believe in crafting technological solutions that are as refreshing and impactful as a glass of cold orange juice.
          </p>
        </section>

        {/* Featured Image Section */}
        <section className="about-image-section">
          <img src={aboutOffice} alt="Our Digital Agency Office" />
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded with a simple vision—to squeeze every drop of potential out of modern web technologies—OrangesWorld has grown into a leading digital agency. What started as a small team of passionate developers and designers has blossomed into a full-scale creative powerhouse.
            </p>
            <p>
              We realized that the web was becoming stale and generic. Our mission was to inject color, life, and unparalleled performance back into digital products. Today, we help businesses across the globe revitalize their digital presence with robust architectures and stunning, user-centric designs.
            </p>
          </div>
          <div className="story-content">
            <h2>Our Approach</h2>
            <p>
              We treat every project like a carefully nurtured orchard. From the initial seed of an idea to the final fruitful deployment, we apply rigorous quality standards. We combine state-of-the-art frameworks with timeless design principles.
            </p>
            <p>
              We don't just build websites; we build digital ecosystems that scale organically. Our process is highly collaborative, ensuring that our clients are involved at every step, making the journey as enjoyable as the destination.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-values">
          <h2 className="gradient-text">Our Core Values</h2>
          <div className="values-grid">
            
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Vibrant Innovation</h3>
              <p>We constantly explore cutting-edge technologies and design trends to ensure our solutions stand out in a crowded digital landscape.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Uncompromised Quality</h3>
              <p>Like a perfectly ripe orange, our products are delivered only when they meet our strict standards for performance, security, and aesthetics.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Organic Growth</h3>
              <p>We build scalable architectures that allow our clients' digital platforms to grow naturally alongside their business needs.</p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
