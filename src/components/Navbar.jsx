import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'
import profileImg from '../assets/profile.webp'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        {/* Logo */}
        <span className="nav-logo">
          <img src={profileImg} alt="Profile" className="nav-profile-pic" />
          <span className="nav-name">Dheeshana</span>
        </span>

        {/* Right Side Group */}
        <div className="nav-menu-group">
          {/* Desktop Links */}
          <ul className="nav-links">
            {[
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'articles', label: 'Article' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side controls (Theme Toggle + Hamburger) */}
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {[
            { id: 'about', label: 'About' },
            { id: 'education', label: 'Education' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'articles', label: 'Article' },
            { id: 'contact', label: 'Contact' }
          ].map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar