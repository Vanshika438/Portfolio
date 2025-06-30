import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="About" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer who enjoys creating clean and responsive websites. I love turning ideas into beautiful, functional interfaces. Currently, I'm focused on learning and building real-world projects using React.
          </p>
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>💻 HTML, CSS, JavaScript</li>
            <li>⚛️ React.js, JSX, Hooks</li>
            <li>🎨 UI/UX Design Principles</li>
            <li>🛠 Git & GitHub</li>
            <li>📱 Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

