import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onEdit, onDelete }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Lihat Demo
          </a>
          <button onClick={() => onEdit(project)} className="btn btn-outline">
          
          </button>
          <button onClick={() => onDelete(project.id)} className="btn btn-danger">
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
