import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaMedium, FaDownload, FaChevronDown } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import profileImg from '../assets/profile.webp'
import './Hero.css'

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      {/* Background Abstract Elements & Dot Grids */}
      <div className="bg-shape grey-1"></div>
      <div className="bg-shape grey-2"></div>
      <div className="dot-grid top"></div>
      <div className="dot-grid side"></div>


      {/* Pagination (right side) */}
      <div className="hero-pagination">
        {['about', 'education', 'skills', 'projects', 'articles', 'contact'].map((section, index) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="page-num"
            activeClass="active"
            offset={0}
          >
            0{index + 1}
          </Link>
        ))}
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
            A <span className="highlight-grey">
              <Typewriter
                words={['Full Stack Developer', 'Software Engineering Undergraduate', 'Web Developer']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
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
            <a href="https://drive.google.com/drive/folders/1EB9j0zfb2t_55j_XNgRXnWmw3WF09dNq?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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
      
      {/* Scroll Down Indicator */}
      <div className="scroll-down-wrapper">
        <Link to="education" smooth={true} duration={500} className="scroll-down-btn" aria-label="Scroll to Education">
          <FaChevronDown />
        </Link>
      </div>
    </section>
  )
}

export default Hero