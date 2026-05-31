import React, { useState } from 'react';

import './TechStack.css';

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", iconUrl: devicon('c/c-original.svg') },
      { name: "JavaScript", iconUrl: devicon('javascript/javascript-original.svg') },
      { name: "Java", iconUrl: devicon('java/java-original.svg') },
      { name: "PHP", iconUrl: devicon('php/php-original.svg') },
      { name: "HTML5", iconUrl: devicon('html5/html5-original.svg') },
      { name: "CSS3", iconUrl: devicon('css3/css3-original.svg') }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", iconUrl: devicon('react/react-original.svg') },
      { name: "Tailwind CSS", iconUrl: devicon('tailwindcss/tailwindcss-original.svg') },
      { name: "Spring Boot", iconUrl: devicon('spring/spring-original.svg') },
      { name: "Node.js", iconUrl: devicon('nodejs/nodejs-original-wordmark.svg') },
      { name: "Express.js", iconUrl: devicon('express/express-original.svg'), className: 'express-icon' }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", iconUrl: devicon('postgresql/postgresql-original.svg') },
      { name: "MySQL", iconUrl: devicon('mysql/mysql-original.svg') },
      { name: "MongoDB", iconUrl: devicon('mongodb/mongodb-original.svg') }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", iconUrl: devicon('git/git-original.svg') },
      { name: "GitHub", iconUrl: devicon('github/github-original.svg') },
      { name: "VS Code", iconUrl: devicon('vscode/vscode-original.svg') },
      { name: "IntelliJ IDEA", iconUrl: devicon('intellij/intellij-original.svg') },
      { name: "Android Studio", iconUrl: devicon('androidstudio/androidstudio-original.svg') },
      { name: "Postman", iconUrl: devicon('postman/postman-original.svg') },
      { name: "Jira", iconUrl: devicon('jira/jira-original.svg') }
    ]
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", iconUrl: devicon('figma/figma-original.svg') },
      { name: "Adobe Photoshop", iconUrl: devicon('photoshop/photoshop-original.svg') },
      { name: "Canva", iconUrl: devicon('canva/canva-original.svg') }
    ]
  }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const selectedCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">My <span>Skills</span></h2>
          <div className="tech-intro">
            <p className="tech-subtitle">Browse the tools and technologies I use across development and design.</p>
          </div>
        </div>

        <div className="tech-tabs">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              className={`tech-tab ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="tech-card">
          <div className="card-header">
            <div>
              <span className="card-label">Selected category</span>
              <h3>{selectedCategory.title}</h3>
            </div>
            <span className="card-count">{selectedCategory.skills.length} items</span>
          </div>

          <div className="skills-grid">
            {selectedCategory.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <img src={skill.iconUrl} alt={skill.name} className={skill.className || ''} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
