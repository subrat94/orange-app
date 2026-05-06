import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand & Description */}
        <div className="footer-col footer-brand">
          <span className="footer-logo">OrangesWorld</span>
          <p>
            Pioneering digital excellence. We combine modern design with robust engineering to deliver scalable and refreshing web experiences.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" title="Twitter">TW</a>
            <a href="#" className="social-icon" title="LinkedIn">IN</a>
            <a href="#" className="social-icon" title="Instagram">IG</a>
            <a href="#" className="social-icon" title="Facebook">FB</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <span className="contact-icon">📍</span>
              <span>IIT Bhubaneswar Research and Enturpanerhip Park,behind Hotel Swosti premium,<br/>Bhubaneswar,Odisha,751013</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <span>+91-6370637635<br/>+91-6370494326<br/>+91-8249312508</span>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <span><br/></span>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="footer-col footer-map">
          <h3>Our Location</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.876299504017!2d85.82487827461031!3d20.305386712231652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190960e87ea9f7%3A0x2751e4229071fe17!2sIIT%20Bhubaneswar%20Research%20and%20Entrepreneurship%20Park!5e0!3m2!1sen!2sin!4v1777968300577!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <span>OrangesWorld</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
