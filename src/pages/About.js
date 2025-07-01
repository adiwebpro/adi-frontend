import React, { useEffect } from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
  useEffect(() => {
    document.title = "Portofolio Saya | Tentang";
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 85 }
  ];

  return (
    <div className="about-page">
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Tentang Saya</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Siapa Saya</h3>
              <p>
                Saya adalah seorang Fullstack Developer JavaScript yang bersemangat dengan pengalaman lebih dari 3 tahun dalam membangun aplikasi web.
                Saya ahli dalam menciptakan antarmuka yang responsif dan ramah pengguna menggunakan React, serta sistem backend yang kuat menggunakan Node.js.
              </p>
              <p>
                Di luar aktivitas ngoding, saya senang mendaki, membaca blog teknologi, dan berkontribusi pada proyek open-source.
                Saya percaya pada pembelajaran berkelanjutan dan pentingnya mengikuti perkembangan teknologi web terbaru.
              </p>
              <div className="personal-info">
                <div>
                  <span>Nama:</span> Bagus Adi Suratno
                </div>
                <div>
                  <span>Email:</span> wahlahatarim@gmail.com
                </div>
                <div>
                  <span>Asal:</span> Purbalingga, Jawa Tengah, Indonesia
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={profileImg} alt="Foto Profil" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Kemampuan Saya</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
