import React from 'react';
import './Articles.css';
import { FaBook, FaEye, FaUsers, FaArrowRight } from 'react-icons/fa';
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
  return (
    <section id="articles" className="articles-section">
      <div className="articles-container">

        {/* Header and Stats */}
        <div className="articles-header">
          <h2 className="articles-title">My <span>Articles</span></h2>
          <div className="articles-intro">
            <p className="articles-subtitle">Welcome to my tech blog!</p>
            <a href="https://medium.com/@dheeshanadesilva2002" target="_blank" rel="noopener noreferrer" className="medium-profile-btn">
              View Medium Profile <FaArrowRight className="link-arrow" />
            </a>
          </div>

        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {articlesData.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="article-meta-overlay">
                  <span className="article-date">📅 {article.date}</span>
                  <span className="article-readtime">⏱️ {article.readTime}</span>
                </div>
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <div className="article-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="article-tag">{tag}</span>
                  ))}
                </div>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  READ ARTICLE <FaArrowRight className="link-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
