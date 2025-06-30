import React, { useEffect } from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg'; // <-- tambahkan ini

const About = () => {
  useEffect(() => {
    document.title = "My Portfolio | About";
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
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Fullstack JavaScript Developer with 3 years of experience building web applications.
                I specialize in creating responsive, user-friendly interfaces with React and robust backend systems with Node.js.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
                I believe in continuous learning and staying updated with the latest web technologies.
              </p>
              <div className="personal-info">
                <div>
                  <span>Name:</span> Bagus Adi Suratno
                </div>
                <div>
                  <span>Email:</span> wahlahatarim@gmail.com
                </div>
                <div>
                  <span>From:</span> Purbalingga, Jawa Tengah, Indonesia
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={profileImg} alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
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
