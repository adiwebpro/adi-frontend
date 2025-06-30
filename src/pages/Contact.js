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
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
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
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="info-card-content">
                <h3>Let's talk about your project</h3>
                <p>I'm available for freelance work and would love to discuss your ideas.</p>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <a href="mailto:wahlahatarim@gmail.com">wahlahatarim@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <a href="tel:+6285867431606">+6285867431606</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <span>Purbalingga, Jawa Tengah, Indonesia</span>
                  </div>
                </div>
                
                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-card">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send me a message</h3>
                  
                  {error && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i>
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="form-input"
                    />
                    <label className="form-label">Name</label>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="form-input"
                    />
                    <label className="form-label">Email</label>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      className="form-input"
                    ></textarea>
                    <label className="form-label">Message</label>
                  </div>
                  
                  <button type="submit" className="btn btn-submit">
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane"></i>
                  </button>
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
