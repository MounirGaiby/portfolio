import React from 'react';

interface SkillCardProps {
  skill: string;
  isPriority: boolean;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, isPriority, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`skill-card ${isPriority ? 'priority' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title={skill}
    >
      {skill}
    </div>
  );
};