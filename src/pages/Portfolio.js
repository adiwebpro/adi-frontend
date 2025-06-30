// Frontend/src/pages/Portfolio.js
import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import ProjectCard from '../pages/ProjectCard';
import ProjectForm from '../pages/ProjectForm';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    document.title = "My Portfolio | Projects";
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDeleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      setProjects(projects.filter(project => project.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFormSubmit = async (projectData) => {
    try {
      let response;
      if (editingProject) {
        // Update existing project
        response = await fetch(`http://localhost:5000/api/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(projectData)
        });
      } else {
        // Add new project
        response = await fetch('http://localhost:5000/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(projectData)
        });
      }
      
      if (!response.ok) {
        throw new Error(editingProject ? 'Failed to update project' : 'Failed to add project');
      }
      
      const updatedProject = await response.json();
      
      if (editingProject) {
        setProjects(projects.map(p => 
          p.id === editingProject.id ? updatedProject : p
        ));
      } else {
        setProjects([...projects, updatedProject]);
      }
      
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return (
    <div className="portfolio-page">
      <section className="portfolio-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          
          <div className="portfolio-actions">
            <button onClick={handleAddProject} className="btn">
              Add New Project
            </button>
          </div>
          
          {showForm && (
            <ProjectForm 
              project={editingProject}
              onSubmit={handleFormSubmit}
              onCancel={() => setShowForm(false)}
            />
          )}
          
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                onEdit={() => handleEditProject(project)}
                onDelete={() => handleDeleteProject(project.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;