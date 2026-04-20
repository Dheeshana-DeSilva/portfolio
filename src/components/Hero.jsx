import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaMedium, FaDownload } from 'react-icons/fa'
import profileImg from '../assets/profile.png'
import './Hero.css'

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      {/* Background Abstract Elements */}
      <div className="bg-shape dark-blue-1"></div>
      <div className="bg-shape dark-blue-2"></div>
      <div className="bg-shape red-1"></div>
      <div className="bg-shape red-2"></div>


      {/* Pagination (right side) */}
      <div className="hero-pagination">
        <span className="page-num active">01</span>
        <span className="page-num">02</span>
        <span className="page-num">03</span>
        <span className="page-num">04</span>
      </div>

      <div className="hero-container">
        {/* Left - Text */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <p className="hero-greeting">
            Hello, I am
          </p>

          {/* Name */}
          <h1 className="hero-title">
            Dheeshana<br />
            De Silva
          </h1>

          {/* Description */}
          <p className="hero-subtitle">
            A <span className="highlight-red">software engineering </span> Undergraduate
          </p>

          {/* Social Links */}
          <div className="find-me-section">
            <h3 className="find-me-title">Find Me on</h3>
            <div className="social-icons">
              <a href="https://github.com/Dheeshana-DeSilva" target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/dheeshana-de-silva2002" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://medium.com/@dheeshanadesilva2002" target="_blank" rel="noreferrer" className="social-icon">
                <FaMedium />
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="/CV.pdf" download className="btn btn-secondary">
              <FaDownload style={{ marginRight: '0.5rem', fontSize: '0.9rem' }} />
              CV
            </a>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-circle"></div>
          <img
            src={profileImg}
            alt="Dheeshana De Silva"
            className="hero-image"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero