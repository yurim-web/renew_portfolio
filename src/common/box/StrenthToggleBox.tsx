import React, { useRef } from "react";
import StrengthToggle from "../button/StrengthToggle";
import "../../styles/skills.css";

interface StrenthToggleBoxProps {
  activeSkill: string | null;
  onSkillChange: (skill: string) => void;
}

const StrenthToggleBox: React.FC<StrenthToggleBoxProps> = ({
  activeSkill,
  onSkillChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const togglesRef = useRef<(HTMLDivElement | null)[]>([]);

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Gsap.js",
    "API",
    "Git/Github",
    "Notion",
    "Photoshop",
    "Illustrator",
  ];

  return (
    <div ref={containerRef} className="strength_toggle_container">
      {skills.map((skill, index) => (
        <div
          key={skill}
          ref={(el) => (togglesRef.current[index] = el)}
          className="toggle_wrapper"
        >
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
