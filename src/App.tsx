import React, { useState, useEffect } from 'react';
import { config } from './data/config';
import { coreSkills } from './data/coreSkills';
import { experience } from './data/experience';
import { SkillCard, ContactLink, ExperienceCard } from './components';
import './App.css';

// Simple typing effect component
const TypingText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 120 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayedText}
      <span className={`typing-cursor ${currentIndex < text.length ? '' : 'hidden'}`}>█</span>
    </span>
  );
};

// Retro black and white portfolio component
const RetroPortfolio: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Cool console message for developers
    console.log('%c👋 Hey there, curious developer!', 'color: #00ff00; font-size: 16px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio source code!', 'color: #ffffff; font-size: 14px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff00;');
    console.log('%c📋 About Me:', 'color: #00ff00; font-weight: bold;');
    console.log('%c• Name: Mounir Gaiby', 'color: #cccccc;');
    console.log('%c• Age: 23', 'color: #cccccc;');
    console.log('%c• Role: Senior Software Engineer', 'color: #cccccc;');
    console.log('%c• Location: Casablanca, Morocco', 'color: #cccccc;');
    console.log('%c', '');
    console.log('%c🚀 Main Skills:', 'color: #00ff00; font-weight: bold;');
    console.log('%c• Backend: Ruby on Rails, Node.js, Django, Laravel', 'color: #cccccc;');
    console.log('%c• Frontend: React, TypeScript, Next.js', 'color: #cccccc;');
    console.log('%c• DevOps: Docker, Kubernetes, CI/CD', 'color: #cccccc;');
    console.log('%c• Data: PostgreSQL, Airbyte, dbt, ETL', 'color: #cccccc;');
    console.log('%c', '');
    console.log('%c💼 Looking for opportunities!', 'color: #00ff00; font-weight: bold;');
    console.log("%cInterested in working together? Let's connect!", 'color: #ffffff;');
    console.log('%c📧 Email: gaibymounir@gmail.com', 'color: #cccccc;');
    console.log('%c💼 LinkedIn: https://linkedin.com/in/mounir-gaiby/', 'color: #cccccc;');
    console.log('%c🐙 GitHub: https://github.com/mounirgaiby', 'color: #cccccc;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #00ff00;');
    console.log('%cBuilt with ❤️ using React, TypeScript & Terminal Aesthetics', 'color: #ffffff; font-style: italic;');
  }, []);

  if (!mounted) return null;

  return (
    <div className="portfolio-container">
      {/* Retro scanline effect */}
      <div className="scanlines" />

      {/* Subtle retro grid pattern */}
      <div className="grid-pattern" />

      {/* Main content */}
      <div className="content-wrapper">
        {/* Terminal-style header */}
        <div className="terminal-header">
          &gt; ./portfolio.sh --execute
        </div>

        {/* Name */}
        <h1 className="name-title">
          {config.personal.name}
        </h1>

        {/* Typed catchphrase */}
        <div className="typing-container">
          <TypingText text={config.catchphrase} />
        </div>

        {/* Resume Download Button */}
        <div className="resume-button">
          <a
            href="/resume.pdf"
            download="mounir-gaiby-resume.pdf"
          >
            [ DOWNLOAD RESUME.PDF ]
          </a>
        </div>

        {/* Skills Sections */}
        <div className="skills-section">
          {coreSkills.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="skill-category"
              style={{
                animation: `fadeIn 1s ease-out ${0.8 + categoryIndex * 0.3}s both`
              }}
            >
              <div className="skill-category-header">
                <span className="skill-category-icon">{category.icon}</span>
                <div>
                  <div className="skill-category-command">$ {category.command}</div>
                  <div className="skill-category-description">
                    {category.description}
                  </div>
                </div>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill}
                    skill={skill}
                    isPriority={category.priority <= 2}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = config.theme.primary;
                      e.currentTarget.style.color = config.theme.background;
                      e.currentTarget.style.boxShadow = '2px 2px 0px rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = config.theme.background;
                      e.currentTarget.style.color = config.theme.primary;
                      e.currentTarget.style.boxShadow = category.priority <= 2 ? '0 0 8px rgba(0, 255, 255, 0.3)' : 'none';
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="experience-section">
          <div className="experience-header">
            <span className="experience-header-icon">💼</span>
            <div>
              <div>$ cat career.log</div>
              <div className="skill-category-description">
                Professional Experience
              </div>
            </div>
          </div>
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

        {/* Contact Section - Terminal style */}
        <div className="contact-section">
          {/* Contact Links Container */}
          <div className="contact-links-container">
            <ContactLink
              icon="📧"
              text={config.personal.email}
            />

            <ContactLink
              icon={<img
                src="/linkedin.png"
                alt="LinkedIn"
                style={{
                  width: '20px',
                  height: '20px',
                  filter: 'invert(1)'
                }}
              />}
              text="LinkedIn Profile"
              href={config.personal.linkedin}
              hoverColor="#0077b5"
            />

            <ContactLink
              icon={<img
                src="/github.png"
                alt="GitHub"
                style={{
                  width: '20px',
                  height: '20px',
                  filter: 'invert(1)'
                }}
              />}
              text="GitHub Profile"
              href={config.personal.github}
            />
          </div>
        </div>

        {/* Retro footer */}
        <div className="footer">
          <div>{config.footer}</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return <RetroPortfolio />;
}

export default App;