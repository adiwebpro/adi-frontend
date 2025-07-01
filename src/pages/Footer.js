import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17..." opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86..." opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32..." fill="currentColor"></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>Bagus Adi Suratno</h3>
          <p>Fullstack Developer JavaScript yang berfokus pada pembuatan pengalaman web modern dengan semangat dan presisi.</p>
          <div className="footer-social">
            <a href="https://github.com/adiwebpro/adi-frontend" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/adi_kheir?igsh=MTF4dW44eHh1OHY4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Tautan Cepat</h3>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/about">Tentang</a></li>
            <li><a href="/portfolio">Portofolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Kontak</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Info Kontak</h3>
          <ul className="contact-info">
            <li><i className="fas fa-envelope"></i> wahlahatarim@gmail.com</li>
            <li><i className="fas fa-phone"></i> +62 858-6743-1606</li>
            <li><i className="fas fa-map-marker-alt"></i> Purbalingga, Jawa Tengah, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bagus Adi Suratno. Hak cipta dilindungi undang-undang.</p>
        <p>Dibuat dengan <i className="fas fa-heart"></i> dan React</p>
      </div>
    </footer>
  );
};

export default Footer;
