// src/pages/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'Pengalaman Membangun Aplikasi POS Inventory',
      date: '25 Juni 2025',
      content:
        'Dalam proyek ini, saya membangun aplikasi POS dan Inventory menggunakan React.js di frontend dan Express.js di backend, dengan integrasi MySQL. Tantangan terbesarnya adalah sinkronisasi data stock secara real-time.'
    },
    {
      title: 'Belajar Deployment Fullstack di Vercel dan Render',
      date: '20 Mei 2025',
      content:
        'Saya belajar bagaimana melakukan deployment frontend React.js ke Vercel dan backend Express.js ke Render. Ini membantu saya memahami pentingnya environment variable dan pengelolaan port.'
    },
    {
      title: 'Mengelola Proyek Menggunakan Git dan GitHub',
      date: '10 April 2025',
      content:
        'Version control adalah hal penting dalam pengembangan perangkat lunak. Dengan Git, saya bisa melacak perubahan dan bekerja secara kolaboratif.'
    }
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog & Pengalaman</h2>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
