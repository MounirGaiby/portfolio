import React from 'react';
import { config } from './data/config';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

const Portfolio: React.FC = () => {
  const skills = [
    'Excellent Problem Solver',
    'Expert Debugger',
    'Creative Thinker',
    'Fast Learner',
    'Team Collaborator',
    'Detail-Oriented',
    'Adaptable',
    'Strong Communicator'
  ];

  return (
    <div className="portfolio-container">
      <ParticleBackground />
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

        {/* Skills Section */}
        <section className="skills">
          <h2 className="section-title">Core Strengths</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
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