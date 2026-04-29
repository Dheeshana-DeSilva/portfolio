<<<<<<< Updated upstream
=======
import React from 'react';

import './TechStack.css';

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", iconUrl: devicon('html5/html5-original.svg') },
      { name: "CSS", iconUrl: devicon('css3/css3-original.svg') },
      { name: "Tailwind CSS", iconUrl: devicon('tailwindcss/tailwindcss-original.svg') },
      { name: "Bootstrap", iconUrl: devicon('bootstrap/bootstrap-original.svg') },
      { name: "React", iconUrl: devicon('react/react-original.svg') },
      { name: "JavaScript", iconUrl: devicon('javascript/javascript-original.svg') }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java", iconUrl: devicon('java/java-original.svg') },
      { name: "PHP", iconUrl: devicon('php/php-original.svg') },
      { name: "Spring Boot", iconUrl: devicon('spring/spring-original.svg') },
      { name: "Node.js", iconUrl: devicon('nodejs/nodejs-original-wordmark.svg') },
      { name: "Express.js", iconUrl: devicon('express/express-original.svg'), className: 'express-icon' }
    ]
  },
  {
    title: "Other Development Tools",
    skills: [
      { name: "MySQL", iconUrl: devicon('mysql/mysql-original.svg') },
      { name: "MongoDB", iconUrl: devicon('mongodb/mongodb-original.svg') },
      { name: "Git", iconUrl: devicon('git/git-original.svg') },
      { name: "Figma", iconUrl: devicon('figma/figma-original.svg') },
      { name: "Adobe Photoshop", iconUrl: devicon('photoshop/photoshop-original.svg') }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">My <span>Skills</span></h2>
          <div className="tech-intro">
            <p className="tech-subtitle">Here are the technologies and tools I work with</p>
          </div>
        </div>

        <div className="tech-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item" style={{ animationDelay: `${(index * 0.1) + (i * 0.05)}s` }}>
                    <div className="skill-icon">
                      <img src={skill.iconUrl} alt={skill.name} className={skill.className || ''} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
>>>>>>> Stashed changes
