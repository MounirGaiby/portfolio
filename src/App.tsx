import React from 'react';
import { config } from './data/config';
import { experience } from './data/experience';
import './App.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <div className="content-wrapper">
        {/* Header Section */}
        <header className="header">
          <h1 className="name">{config.personal.name}</h1>
          <p className="title">{config.personal.title}</p>
          <p className="location">{config.personal.location}</p>
        </header>

        {/* About Section */}
        <section className="about">
          <p className="bio">
            Software engineer with a passion for building scalable systems and solving complex problems.
          </p>
        </section>

        {/* Resume Download */}
        <div className="resume-section">
          <a
            href="/resume.pdf"
            download="mounir-gaiby-resume.pdf"
            className="resume-link"
          >
            Download Resume
          </a>
        </div>

        {/* Experience Section */}
        <section className="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-links">
            <a href={`mailto:${config.personal.email}`} className="contact-link">
              Email
            </a>
            <a href={config.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href={config.personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;