import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xbdqnqwp');

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
                <a href="mailto:dheeshanadesilva2002@gmail.com" className="contact-card-value" style={{ textDecoration: 'none' }}>dheeshanadesilva2002@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaGithub className="contact-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">GITHUB</span>
                <a href="https://github.com/Dheeshana-DeSilva" target="_blank" rel="noopener noreferrer" className="contact-card-value" style={{ textDecoration: 'none' }}>Dheeshana-DeSilva</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FaLinkedinIn className="contact-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">LINKEDIN</span>
                <a href="https://www.linkedin.com/in/dheeshana-de-silva2002/" target="_blank" rel="noopener noreferrer" className="contact-card-value" style={{ textDecoration: 'none' }}>dheeshana-desilva</a>
              </div>
            </div>
          </div>
        </div>


        <div className="contact-right">
          <div className="contact-form-container">
            <h3 className="form-title">Send a Message</h3>
            {state.succeeded ? (
              <div className="form-success-message">
                <p>Thanks for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>NAME</label>
                  <input type="text" name="name" placeholder="Your name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="field-error" />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" name="email" placeholder="your.email@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
                </div>
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea name="message" placeholder="Your message..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
                </div>
                {state.errors && state.errors.getFormErrors && state.errors.getFormErrors().length > 0 && (
                  <div className="form-error-message">
                    <p>⚠️ Something went wrong. Please try again.</p>
                  </div>
                )}
                <button type="submit" className="submit-btn" disabled={state.submitting}>
                  {state.submitting ? 'SENDING...' : 'SEND MESSAGE'} <FaPaperPlane className="submit-icon" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div >
    </section >
  );
};

export default Contact;
