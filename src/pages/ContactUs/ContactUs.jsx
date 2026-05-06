import React, { useState } from 'react';
// import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [document, setDocument] = useState(null);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      formErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    if (!formData.message.trim()) formErrors.message = 'Message is required';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setDocument(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('Sending...');
    
    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
      if (document) {
        submitData.append('document', document);
      }

      // Posting to the local Node.js backend running on port 5000
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: submitData, // Browser automatically sets multipart/form-data boundary
      });
      
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setDocument(null);
        // Reset file input via its ID
        const fileInput = window.document.getElementById('docUpload');
        if (fileInput) fileInput.value = '';
      } else {
        setStatus(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Make sure the backend server is running on port 5000.');
    }
  };

  const inputStyle = (fieldName) => ({
    width: '100%', 
    padding: '1rem', 
    borderRadius: '8px', 
    border: errors[fieldName] ? '1px solid #ff4d4f' : '1px solid rgba(255,107,0,0.2)', 
    background: 'rgba(255,255,255,0.05)', 
    color: 'white', 
    boxSizing: 'border-box'
  });

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ padding: '4rem', maxWidth: '600px', width: '100%', textAlign: 'center', margin: '2rem' }}>
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Get in touch with our team of citrus experts.
        </p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name *" 
              value={formData.name}
              onChange={handleChange}
              style={inputStyle('name')} 
            />
            {errors.name && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.name}</span>}
          </div>

          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Your Email *" 
              value={formData.email}
              onChange={handleChange}
              style={inputStyle('email')} 
            />
            {errors.email && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
          </div>

          <div>
            <input 
              type="tel" 
              name="phone"
              placeholder="Your Phone Number *" 
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle('phone')} 
            />
            {errors.phone && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.phone}</span>}
          </div>

          <div>
            <label style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Upload Document (Optional)
            </label>
            <input 
              id="docUpload"
              type="file" 
              name="document"
              onChange={handleFileChange}
              style={inputStyle('document')} 
            />
          </div>

          <div>
            <textarea 
              name="message"
              placeholder="Message *" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle('message'), resize: 'vertical' }}
            ></textarea>
            {errors.message && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.message}</span>}
          </div>

          <button 
            type="submit"
            disabled={status === 'Sending...'}
            style={{ 
              padding: '1rem', 
              borderRadius: '8px', 
              background: status === 'Sending...' ? 'var(--text-secondary)' : 'var(--primary-orange)', 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '1.1rem', 
              marginTop: '1rem',
              cursor: status === 'Sending...' ? 'not-allowed' : 'pointer',
              border: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status && status !== 'Sending...' && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              borderRadius: '8px', 
              textAlign: 'center',
              backgroundColor: status.includes('successfully') ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
              color: status.includes('successfully') ? '#4caf50' : '#f44336'
            }}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
