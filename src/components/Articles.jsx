import React, { useState } from 'react';
import './Articles.css';
import { FaBook, FaEye, FaUsers, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ciaTriadImg from '../assets/cia_triad.png';

const articlesData = [
  {
    id: 1,
    title: "What is DevOps? A Simple Guide for Beginners",
    summary: "DevOps brings software developers and IT operations teams together to build, test, and release software faster and more efficiently.",
    date: "May 4, 2025",
    readTime: "4 min read",
    tags: ["DevOps", "CI/CD", "Cloud"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@dheeshanadesilva2002/what-is-devops-a-simple-guide-for-beginners-106eb3d7fc25"
  },
  {
    id: 2,
    title: "Understanding the CIA Triad in Cyber Security",
    summary: "A basic concept in cyber security covering Confidentiality, Integrity, and Availability to ensure a holistic approach to data protection.",
    date: "Jul 16, 2024",
    readTime: "4 min read",
    tags: ["Security", "CIA Triad", "Cybersecurity"],
    image: ciaTriadImg,
    link: "https://medium.com/@dheeshanadesilva2002/understanding-the-cia-triad-in-cyber-security-d11facb1de3b"
  },
  {
    id: 3,
    title: "The Hidden World of Software Licensing",
    summary: "Key licensing models, what they allow, and how to choose the right one to keep your project safe and shareable.",
    date: "May 3, 2025",
    readTime: "4 min read",
    tags: ["Software", "Security", "Licensing"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@dheeshanadesilva2002/the-hidden-world-of-software-licensing-1ff891015088"
  },
  {
    id: 4,
    title: "A Hybrid Supercapacitor-Battery Solar System",
    summary: "A laboratory-scale hybrid PV prototype integrating supercapacitors with lithium-ion batteries to improve efficiency and power stability.",
    date: "Dec 24, 2025",
    readTime: "5 min read",
    tags: ["Research", "Electronics", "PV System"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@dheeshanadesilva2002/bridging-the-gap-in-renewable-energy-a-hybrid-supercapacitor-battery-solar-system-e80f460f3934"
  },
  {
    id: 5,
    title: "DesilOS: A Simple Operating System to Display Hardware Information",
    summary: "A bootable OS kernel built entirely with Assembly language, to display real-time hardware information straight from the BIOS.",
    date: "Jun 25, 2025",
    readTime: "4 min read",
    tags: ["OS", "Assembly", "Low-Level"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@dheeshanadesilva2002/desilos-a-simple-operating-system-to-display-hardware-information-cda0fc47cd6d"
  },
  {
    id: 6,
    title: "Stored Procedures in MySQL: The Basics and Beyond",
    summary: "Stored procedures are like recipes for your database—pre-written sets of SQL instructions stored directly on the server.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    tags: ["MySQL", "Database", "SQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    link: "https://medium.com/@dheeshanadesilva2002/understanding-stored-procedures-in-mysql-d5f4f538e6c9"
  }
];

const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(window.innerWidth > 768 ? 3 : 1);

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth > 768 ? 3 : 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate if window resizes and currentIndex goes out of bounds
  const totalPages = Math.ceil(articlesData.length / cardsPerPage);
  React.useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(Math.max(0, totalPages - 1));
    }
  }, [cardsPerPage, currentIndex, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const activeArticles = articlesData.slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage);

  return (
    <section id="articles" className="articles-section">
      <div className="articles-container">

        {/* Header and Stats */}
        <div className="articles-header">
          <h2 className="articles-title">My <span>Articles</span></h2>
          <div className="articles-intro">
            <p className="articles-subtitle">Welcome to my tech blog!</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Article">
            <FaChevronLeft />
          </button>

          <div className="carousel-content articles-grid">
            {activeArticles.map((article) => (
              <div className="carousel-card" key={article.id}>
                <div className="carousel-image-container">
                  <img src={article.image} alt={article.title} className="carousel-image" />
                </div>
                <div className="carousel-card-body">
                  <h3 className="carousel-card-title">{article.title}</h3>
                  <p className="carousel-card-description">{article.summary}</p>
                  
                  <div className="carousel-card-tags">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="carousel-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="carousel-card-footer">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="carousel-repo-link">
                      <FaBook className="repo-icon" /> READ ARTICLE <FaArrowRight className="link-arrow" style={{marginLeft: '0.5rem'}} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control next" onClick={nextSlide} aria-label="Next Article">
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="articles-footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <a href="https://medium.com/@dheeshanadesilva2002" target="_blank" rel="noopener noreferrer" className="medium-profile-btn">
            View Medium Profile <FaArrowRight className="link-arrow" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Articles;
