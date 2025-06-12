import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="Contact">
      <h2>Contact Me</h2>

      <div className="contact-options">
        <a href="mailto:vanshikasharma01012007@gmail.com" className="email-btn">📧 Email Me</a>
        <div className="social-links">
          <a href="https://github.com/Vanshika438" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vanshika-sharma-430878328" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <form
        action="https://formspree.io/f/mrbkqlza" 
        method="POST" 
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
