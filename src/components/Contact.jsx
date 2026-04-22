import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:dheeshanadesilva2002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-left">
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-intro">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and interesting ideas.
          </p>

          <div className="contact-info-cards">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">EMAIL</span>
                <a href="mailto:dheeshanadesilva2002@gmail.com" className="contact-card-value" style={{ textDecoration: 'none', color: 'inherit' }}>dheeshanadesilva2002@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaGithub className="contact-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">GITHUB</span>
                <a href="https://github.com/Dheeshana-DeSilva" target="_blank" rel="noopener noreferrer" className="contact-card-value" style={{ textDecoration: 'none', color: 'inherit' }}>Dheeshana-DeSilva</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaLinkedinIn className="contact-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LINKEDIN</span>
                <a href="https://www.linkedin.com/in/dheeshana-de-silva2002/" target="_blank" rel="noopener noreferrer" className="contact-card-value" style={{ textDecoration: 'none', color: 'inherit' }}>dheeshana-desilva</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-form-container">
            <h3 className="form-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>NAME</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea name="message" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                SEND MESSAGE <FaPaperPlane className="submit-icon" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
