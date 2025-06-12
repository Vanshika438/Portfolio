import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="Home" className="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Vanshika</span></h1>
        <h2>Frontend Developer</h2>
        <p>
          I'm a passionate frontend developer skilled in React.js, JavaScript, and the MERN stack.
          I specialize in building clean, responsive, and user-friendly web applications.
          I'm always eager to learn, grow, and collaborate on exciting real-world projects.
        </p>
        <a href="#Projects" className="home-btn">View Projects</a>
      </div>
    </section>
  );
}

export default Home;
