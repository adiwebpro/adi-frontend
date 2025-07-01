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
    document.title = "Portofolio Saya | Kontak";
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
      setError('Semua kolom wajib diisi');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Alamat email tidak valid');
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
        throw new Error('Gagal mengirim pesan');
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
            <h2 className="section-title">Hubungi Saya</h2>
            <p className="section-subtitle">
              Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="info-card-content">
                <h3>Mari bicarakan proyek Anda</h3>
                <p>Saya tersedia untuk kerja freelance dan siap mendengar ide Anda.</p>

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
                    <h4>Telepon</h4>
                    <a href="tel:+6285867431606">+62 858-6743-1606</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-text">
                    <h4>Lokasi</h4>
                    <span>Purbalingga, Jawa Tengah, Indonesia</span>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Ikuti Saya</h4>
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
                  <h3>Pesan Berhasil Dikirim!</h3>
                  <p>Terima kasih telah menghubungi saya. Saya akan segera merespons.</p>
                  <button onClick={() => setSubmitted(false)} className="btn">
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Kirim Pesan</h3>

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
                      placeholder="Nama Anda"
                      className="form-input"
                    />
                    <label className="form-label">Nama</label>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Anda"
                      className="form-input"
                    />
                    <label className="form-label">Email</label>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Pesan Anda"
                      rows="5"
                      className="form-input"
                    ></textarea>
                    <label className="form-label">Pesan</label>
                  </div>

                  <button type="submit" className="btn btn-submit">
                    <span>Kirim Pesan</span>
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
