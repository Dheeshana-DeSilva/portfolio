import React from 'react';
import './TechStack.css';

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "C", "Kotlin", "PHP"]
  },
  {
    category: "Web Development",
    items: ["HTML, CSS", "JavaScript", "REST APIs"]
  },
  {
    category: "Frontend Frameworks",
    items: ["React.js"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "Spring Boot"]
  },
  {
    category: "Mobile Development",
    items: ["Android Development", "Jetpack Compose"]
  },
  {
    category: "Database Management",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  },
  {
    category: "Tools & IDEs",
    items: ["VS Code", "IntelliJ IDEA", "Android Studio", "Code::Blocks", "Figma (UI/UX)"]
  },
  {
    category: "Other Tools",
    items: ["Canva", "Adobe Photoshop", "Microsoft Office", "Power BI (Basic)"]
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">Technical <span>Expertise</span></h2>
          <p className="tech-subtitle">A comprehensive list of my technical skills, tools, and technologies I work with.</p>
        </div>

        <div className="tech-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="tech-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="tech-card-header">
                <h3>{skillGroup.category}</h3>
              </div>
              <ul className="tech-list">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="tech-item">
                    <span className="tech-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
