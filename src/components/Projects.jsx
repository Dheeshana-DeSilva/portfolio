import React from 'react';
import './Projects.css';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
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
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured <span>Projects</span></h2>
          <div className="projects-intro">
            <p className="projects-subtitle">Some of my recent collaborative work and applications.</p>
          </div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-header-info">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>- {feature}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub className="link-icon" /> VIEW REPOSITORY <FaArrowRight className="link-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
