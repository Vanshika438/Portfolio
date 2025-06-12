import React from 'react';
import '../styles/Resume.css';
import resumePDF from '../assets/Resume.pdf';
import resumePreview from '../assets/resume-preview.png'; 

function Resume() {
  return (
    <section id="Resume" className="resume-section">
      <h2 className="section-title">My Resume</h2>

      <div className="resume-container">
        {/* Resume Image Preview */}
        <div className="resume-preview">
          <img
            src={resumePreview}
            alt="Resume Preview"
            className="resume-image"
          />
          <div className="resume-actions">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              📄 View Fullscreen
            </a>
            <a
              href={resumePDF}
              download
              className="download-btn"
            >
              📥 Download PDF
            </a>
          </div>
        </div>

        {/* Resume Highlights */}
        <div className="resume-details">
          <h3>Highlights</h3>
          <ul>
            <li><strong>🎓 Education:</strong> B.Tech in CSE, Mandsaur University (2023–2027)</li>
            <li><strong>💻 Frontend:</strong> React, JavaScript, CSS, Responsive Design</li>
            <li><strong>🛠️ Backend:</strong> Node.js, Express.js, MongoDB</li>
            <li><strong>🚀 Projects:</strong> Portfolio Generator, Digital Education Platform, Makeup Artist Website</li>
            <li><strong>⚙️ Tools:</strong> Git, GitHub, VSCode, Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
