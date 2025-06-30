import React from 'react';
import '../styles/Home.css';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <section id="Home" className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hi, I'm <span>Sharma</span></h1>
          <h2>Frontend Developer</h2>
          <p>
            I'm a passionate frontend developer skilled in React.js, JavaScript, and the MERN stack.
            I specialize in building clean, responsive, and user-friendly web applications.
          </p>
          <a href="#Projects" className="home-btn">View Projects</a>
        </div>
        <div className="home-image">
          <img src={profile} alt="Vanshika Sharma" />
        </div>
      </div>
    </section>
  );
}

export default Home;