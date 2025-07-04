import React, { useState, useEffect } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ project, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageUrl: '',
    liveUrl: ''
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies.join(', '),
        imageUrl: project.imageUrl,
        liveUrl: project.liveUrl
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim())
    };
    onSubmit(projectData);
  };

  return (
    <div className="project-form-overlay">
      <div className="project-form">
        <h3>{project ? 'Edit Proyek' : 'Tambah Proyek Baru'}</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul Proyek</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Deskripsi</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Teknologi (pisahkan dengan koma)</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>URL Gambar</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>URL Live Demo</label>
            <input
              type="text"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="btn btn-outline">
              Batal
            </button>
            <button type="submit" className="btn">
              {project ? 'Perbarui' : 'Tambahkan'} Proyek
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
