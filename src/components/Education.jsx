
import React from 'react';
import './Education.css';
import uokLogo from '../assets/UOK_Logo.png';
import mahamayaLogo from '../assets/mahamayagirls_college_kandy_logo.png';

const educationData = [
  {
    id: 1,
    institution: "University of Kelaniya",
    degree: "BSc (Hons) in Software Engineering",
    duration: "2023 - Present",
    details: [
      <React.Fragment key="gpa">CGPA: <span className="highlight-text">3.8/4.0</span></React.Fragment>,
      "Key Domains: Data Science and Engineering, Net-Centric Web Applications, Business Engineering Applications, Health Informatics Applications"
    ],
    logo: uokLogo
  },
  {
    id: 2,
    institution: "Mahamaya Girls' College, Kandy",
    degree: "G.C.E. Advanced Level - Physical Science",
    duration: "2013 - 2022",
    details: [
      "GCE A/L 2022: Combined Mathematics: B | Chemistry: B | Physics: B",
      <React.Fragment key="zscore">Z-Score: <span className="highlight-text">1.5463</span></React.Fragment>,

    ],
    logo: mahamayaLogo
  }
];

const certificationsData = [
  {
    id: 1,
    title: "Figma Design Basics and Features",
    subtitle: "Alison • 2025",
    link: "https://drive.google.com/file/d/12QdxSCnQ7rV7gWBFIYSYEsY8GMAwVE2Y/view?usp=sharing"
  },
  {
    id: 2,
    title: "Diploma in C programming",
    subtitle: "Alison • 2024",
    link: "https://drive.google.com/file/d/12QdxSCnQ7rV7gWBFIYSYEsY8GMAwVE2Y/view?usp=sharing"
  },
  {
    id: 3,
    title: "IEEEXtreme 19.0 Programming Competition",
    subtitle: "IEEE",
    link: "https://certificate.ieeextreme.org/generate-email-certificate/8zgqQN3taGoCx..........."
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">My <span>Education</span></h2>
          <div className="education-intro">
            <p className="education-subtitle">Academic background and qualifications.</p>
          </div>
        </div>

        <div className="education-content-wrapper">
          <div className="education-timeline">
            {educationData.map((edu) => (
              <div key={edu.id} className="education-card">

                {/* Left column: logo + duration */}
                <div className="education-left">
                  <div className="education-logo-wrapper">
                    <img src={edu.logo} alt={edu.institution} className="education-logo" />
                  </div>
                  <span className="education-duration">{edu.duration}</span>
                </div>

                {/* Right column: degree, institution, details */}
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                  {edu.details && edu.details.length > 0 && (
                    <ul className="education-detail-list">
                      {edu.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

              </div>
            ))}
          </div>

          <div className="certifications-column">
            <h3 className="column-title">Certifications</h3>
            <div className="certifications-list">
              {certificationsData.map((cert) => (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" key={cert.id} className="certification-card">
                  <h4 className="certification-title">{cert.title}</h4>
                  <p className="certification-subtitle">{cert.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
