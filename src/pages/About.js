import React, { useEffect } from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
  useEffect(() => {
    document.title = "Portofolio Saya | Tentang";
  }, []);

  const skills = [
  { name: 'HTML/CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 70 },
  { name: 'SQL / Database', level: 70 },
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
                Saya adalah seorang Web Developer yang memiliki ketertarikan besar dalam membangun aplikasi web yang fungsional dan mudah digunakan. 
                Saya fokus pada pengembangan antarmuka yang responsif serta memahami dasar-dasar pengelolaan sistem backend untuk mendukung kinerja aplikasi.
              </p>
              <p>
                Di luar dunia pengembangan, saya gemar mendaki, membaca blog teknologi, dan berkontribusi pada proyek open-source. 
                Saya percaya bahwa pembelajaran berkelanjutan sangat penting dalam dunia teknologi yang terus berkembang, dan saya selalu siap mempelajari hal-hal baru untuk mengembangkan kemampuan dan wawasan saya sebagai developer.
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
