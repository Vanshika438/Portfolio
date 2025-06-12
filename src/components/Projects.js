import React from 'react';
import '../styles/Projects.css';

import PortfolioImg from '../assets/Portfolio-Gen.png';
import MakeupImg from '../assets/Glitz-Glam.png';
import EduImg from '../assets/Digital-Edu.png';

function Projects() {
  const projectData = [
    {
      title: 'Portfolio Generator',
      description: 'A web app that lets users generate portfolios from form inputs.',
      tech: 'React, CSS',
      image: PortfolioImg,
      live: 'https://68452e83650af742efe3c4da--portfolio-generator-portgen.netlify.app/',
      github: 'https://github.com/Vanshika438/Portfolio-Generator'
    },
    {
      title: 'Makeup Artist Website',
      description: 'Website for a makeup artist to showcase services, bookings, and testimonials.',
      tech: 'React, Node.js, Express, MongoDB',
      image: MakeupImg,
      live: 'https://your-live-link.com',
      github: 'https://github.com/Vanshika438/glitz-and-glam'
    },
    {
      title: 'Digital Education Platform',
      description: 'An e-learning platform with video lessons, quizzes, student playlists, and teacher uploads.',
      tech: 'MERN Stack, Google Auth, Chatbot Integration',
      image: EduImg,
      live: 'https://your-live-link.com',
      github: 'https://github.com/Vanshika438/Digital-Edu-Platform'
    }
  ];

  return (
    <section id="Projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span><strong>Tech:</strong> {project.tech}</span>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
