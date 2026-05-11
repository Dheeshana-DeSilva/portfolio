import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Articles from './components/Articles'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved || 'dark'
  })
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Education />
      <TechStack />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
      
      {showTopBtn && (
        <button className="back-to-top-btn" onClick={() => scroll.scrollToTop({ duration: 500 })} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default App