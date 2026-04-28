import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import sportsItemsImg from '../assets/sports-items.jpg';
import bookFairImg from '../assets/book-fair.jpg';

const projectsData = [
  {
    id: 1,
    title: "Book Fair Stall Reservation Platform",
    subtitle: "Group Project",
    description: "A full-stack stall reservation system with secure auth, responsive stall grids, and concurrent booking management.",
    features: [
      "Built secure Login/Signup using Spring Boot and React with PostgreSQL integration.",
      "Engineered a responsive Stall Grid in Tailwind CSS with real-time filtering by hall and status.",
      "Implemented unique database constraints and custom queries to manage concurrent stall bookings."
    ],
    tags: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    image: bookFairImg,
    repoLink: "https://github.com/Dheeshana-DeSilva/architecture_project"
  },
  {
    id: 2,
    title: "Sports Equipments E-Commerce Platform",
    subtitle: "Group Project",
    description: "A responsive e-commerce site featuring user authentication, profile management, and interactive product showcases.",
    features: [
      "Built a responsive, mobile-friendly UI using HTML, CSS, and JavaScript.",
      "Engineered secure Login/Registration and Profile Management using PHP.",
      "Managed version control and integrated front-end modules with the team using Git/GitHub."
    ],
    tags: ["HTML/CSS/JS", "PHP", "Git"],
    image: sportsItemsImg,
    repoLink: "https://github.com/Dheeshana-DeSilva/sports_eqiupments_stock"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const activeProject = projectsData[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured <span>Projects</span></h2>
          <div className="projects-intro">
            <p className="projects-subtitle">Some of my recent collaborative work and applications.</p>
          </div>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Project">
            <FaChevronLeft />
          </button>

          <div className="carousel-content">
            <div className="carousel-card">
              <div className="carousel-image-container">
                <img src={activeProject.image} alt={activeProject.title} className="carousel-image" />
              </div>
              <div className="carousel-card-body">
                <h3 className="carousel-card-title">{activeProject.title}</h3>
                <p className="carousel-card-description">{activeProject.description}</p>
                <div className="carousel-card-tags">
                  {activeProject.tags.map((tag, idx) => (
                    <span key={idx} className="carousel-tag">{tag}</span>
                  ))}
                </div>
                <div className="carousel-card-footer">
                  <a href={activeProject.repoLink} target="_blank" rel="noopener noreferrer" className="carousel-repo-link">
                    <FaGithub className="repo-icon" /> GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control next" onClick={nextSlide} aria-label="Next Project">
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
