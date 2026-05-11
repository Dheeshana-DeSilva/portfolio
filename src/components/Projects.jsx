import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaFigma, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import sportsItemsImg from '../assets/sports-items.jpg';
import bookFairImg from '../assets/book-fair.jpg';
import UnibeatImg from '../assets/unibeat.png';
import kelaniXchangeImg from '../assets/KelaniXchange.png';

const projectsData = [
  {
    id: 4,
    title: "KelaniXchange – University Marketplace",
    subtitle: "Individual Project",
    description: "A MERN stack marketplace for university students to buy, sell, and exchange items, featuring JWT authentication and university email registration.",
    features: [
      "Building a MERN stack marketplace for university students to buy, sell, and exchange items.",
      "Implementing JWT authentication with university email based registration.",
      "Developing item listings, category browsing, user profiles, and listing management.",
      "Adding item exchange requests where sellers can accept or reject offers.",
      "Designing a responsive and user friendly interface for student marketplace needs."
    ],
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: kelaniXchangeImg,
    repoLink: "https://github.com/Dheeshana-DeSilva/KelaniXchange"
  },
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
  },
  {
    id: 3,
    title: "UniBeat Event Management System",
    subtitle: "UI/UX Design Prototype",
    description: "A comprehensive event management platform tailored for university students, staff, and public guests.",
    features: [
      "Designed an intuitive discovery and hosting interface for Students to easily find and create events.",
      "Created a dashboard for University Staff to approve university-sponsored events and monitor analytics.",
      "Developed a streamlined, no-login browsing experience for Public Guests with clear access rules."
    ],
    tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
    image: UnibeatImg,
    figmaLink: "https://www.figma.com/proto/oX5eiKvUiMpg8vzoZSJM5U/UniBeat?page-id=0%3A1&node-id=2-6&viewport=113%2C80%2C0.38&t=hLPx76m1ZM1krlfd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A6&show-proto-sidebar=1"
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
            <p className="projects-subtitle">Some of my recent work.</p>
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
                  <a href={activeProject.figmaLink || activeProject.repoLink} target="_blank" rel="noopener noreferrer" className="carousel-repo-link">
                    {activeProject.figmaLink ? <FaFigma className="repo-icon" /> : <FaGithub className="repo-icon" />}
                    {activeProject.figmaLink ? ' Figma Prototype' : ' GitHub Repo'}
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
