// Frontend/src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = "My Portfolio | Home";
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Hi, I'm <span>Bagus Adi Suratno</span></h1>
          <h2 className="fade-in">Fullstack JavaScript Developer</h2>
          <p className="fade-in">
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/portfolio" className="btn">View My Work</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;