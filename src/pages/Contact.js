// Frontend/src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = "My Portfolio | Contact";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out to me for any questions or opportunities. 
                I'll get back to you as soon as possible.
              </p>
              
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span>wahlahatarim@gmail.com</span>
              </div>
              
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+6285867431606</span>
              </div>
              
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Purbalingga, Jawa Tengah, Indonesia</span>
              </div>
              
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              {submitted ? (
                <div className="success-message">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && <div className="error-message">{error}</div>}
                  
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;