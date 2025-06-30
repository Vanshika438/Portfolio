import React, { useEffect, useRef } from 'react';
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
      live: '',
      github: 'https://github.com/Vanshika438/Portfolio-Generator'
    },
    {
      title: 'Makeup Artist Website',
      description: 'Website for a makeup artist to showcase services, bookings, and testimonials.',
      tech: 'React, Node.js, Express, MongoDB',
      image: MakeupImg,
      live: 'https://glitz-and-glam.netlify.app/',
      github: 'https://github.com/Vanshika438/glitz-and-glam'
    },
    {
      title: 'Digital Education Platform',
      description: 'An e-learning platform with video lessons, quizzes, student playlists, and teacher uploads.',
      tech: 'MERN Stack, Google Auth, Chatbot Integration',
      image: EduImg,
      live: '',
      github: 'https://github.com/Vanshika438/Digital-Edu-Platform'
    }
  ];

  const sectionRef = useRef();
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Projects" className="projects" ref={sectionRef}>
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            ref={(el) => (projectCardsRef.current[index] = el)}
            aria-label={`Project: ${project.title}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-img" 
              loading="lazy"
            />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech-stack"><strong>Tech:</strong> {project.tech}</span>
              <div className="project-links">
                {project.live ? (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="disabled-link" aria-hidden="true">
                    Live (Coming Soon)
                  </span>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;