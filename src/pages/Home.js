// Frontend/src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = "Portofolio Saya | Beranda";
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Halo, saya <span>Bagus Adi Suratno</span></h1>
          <h2 className="fade-in">Pengembang JavaScript Fullstack</h2>
          <p className="fade-in">
            Saya membangun pengalaman digital yang luar biasa dengan teknologi web modern.
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/portfolio" className="btn">Lihat Karya Saya</Link>
            <Link to="/contact" className="btn btn-outline">Hubungi Saya</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
