import React from 'react';
import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast }) => {
  return (
    <div className={`experience-card ${isLast ? 'last' : ''}`}>
      <div className="experience-position">
        {experience.position}
      </div>
      <div className="experience-company">
        {experience.company} • {experience.location}
      </div>
      <div className="experience-duration">
        {experience.duration}
      </div>
      <ul className="experience-highlights">
        {experience.highlights.map((highlight, hi) => (
          <li key={hi}>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};