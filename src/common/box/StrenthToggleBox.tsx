import React from 'react';
import StrengthToggle from '../button/StrengthToggle';
import '../../styles/skills.css';

interface StrenthToggleBoxProps {
  activeSkill: string | null;
  onSkillChange: (skill: string) => void;
}

const StrenthToggleBox: React.FC<StrenthToggleBoxProps> = ({ activeSkill, onSkillChange }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'TypeScript',
    'React',
    'Next.js',
    'Gsap.js',
    'Git/Github',
    'SourceTree',
    'Notion',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Cafe24',
  ];

  return (
    <div ref={containerRef} className="strength_toggle_container">
      {skills.map(skill => (
        <div key={skill} className="toggle_wrapper">
          <StrengthToggle
            strength={skill}
            isActive={activeSkill === skill}
            onClick={onSkillChange}
          />
        </div>
      ))}
    </div>
  );
};

export default StrenthToggleBox;
